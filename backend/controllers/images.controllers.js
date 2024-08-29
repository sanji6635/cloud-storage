const fs = require("fs");

const images = async (req, res) => {
  //reading from the uploads dir
  fs.readdir("./uploads", (err, file) => {
    if (err) {
      return res.status(500).json({ message: "Unable to get files" });
    }
    console.log(file);
    return res.status(200).json({ file });
  });
};

module.exports = { images };
