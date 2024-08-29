const express = require("express");
const router = express.Router();
const { images } = require("../controllers/images.controllers");

router.get("/getImages", images);

module.exports = router;
