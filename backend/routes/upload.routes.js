const express = require("express");
const { upload, uploadFile } = require("../controllers/upload.controllers"); //(uploadFile) contains the multer configurations for local hardisk storage
const router = express.Router();

// router.post("/upload", uploadFile.single("file"), upload);                  // thisis for uploading files in the locak hardisk using multer

router.post("/upload", uploadFile.single("file"), upload);

module.exports = router;
