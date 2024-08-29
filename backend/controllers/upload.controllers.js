const multer = require("multer");
const {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} = require("@aws-sdk/client-s3");
const { getSignedUrl } = require("@aws-sdk/s3-request-presigner");
const multers3 = require("multer-s3");
const path = require("path");
require("dotenv").config();

// NOTE: This configuration of storing data is on the aws s3 bucket

const s3 = new S3Client({
  credentials: {
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
  },
  region: process.env.REGION,
});

// when usign memory storage we don't see the location and many other things from the responce buut wheen used multer-s3 we got everything
// using multer memory storage capability
// const storage = multer.memoryStorage();
// const uploadFile = multer({ storage: storage });

const uploadFile = multer({
  storage: multers3({
    s3: s3,
    bucket: "cloud-storage-project-s3",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      cb(null, file.originalname); // cb(null, Date.now().toString() + file.originalname);
    },
  }),
});

const upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "please upload a file" });
    }

    // This one uses @aws-sdk/client-s3
    // The PutObjectCommand method is used to add the files on the s3 bucket
    // DeleteObjectCommand----------delete the file
    // GetObjectCommand-------------get the file
    const command = new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: req.file.originalname,
      Body: req.file.buffer,
      ContentType: req.file.mimetype,
    });
    //sending the file on the s3 bucket
    await s3.send(command);

    //getting the files from the s3 bucket
    const k = new GetObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: req.file.originalname,
    });

    await s3.send(k);
    const data2 = await getSignedUrl(s3, k, { expiresIn: 3600 });
    console.log("the data is => ", data2);

    // for (let k in req.file) {
    //   console.log("file location is " + k);
    // }

    return res.status(200).json({
      message: "file uploaded sucessfully",
      filename: req.file.originalname,
      location: req.file.location,
    });

    //-------------
  } catch (err) {
    console.log(`error while uploading image => ${err.message}`);
    return res.status(400).json({ error: "error while uploading image" });
  }
};

module.exports = { upload, uploadFile };

// NOTE: This one uses multer-s3 for storage with @aws-sdk/client-s3

// this one uses multer-s3 for storage
// const uploadFile = multer({
//   storage: multers3({
//     s3: s3,
//     bucket: "cloud-storage-project-s3",
//     metadata: function (req, file, cb) {
//       cb(null, { fieldName: file.fieldname });
//     },
//     key: function (req, file, cb) {
//       cb(null, Date.now().toString() + file.originalname);
//     },
//   }),
// });

// NOTE: This configuration of storage usign multer is done for storaing locally on  hardisk
/*
//setting up multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname + "_" + Date.now());
  },
});

//multer object
const uploadFile = multer({ storage: storage });

const upload = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    return res.status(200).json({
      message: "File uploaded successfully",
      flename: req.file.filename,
    });
  } catch (err) {
    console.log(`error whilw uploading file => ${err.message}`);
    return res
      .status(500)
      .json({ message: `Internal server error while uploading file` });
  }
};
*/

// module.exports = { upload, uploadFile };
