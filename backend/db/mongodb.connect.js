const mongoose = require("mongoose");
require("dotenv").config();

module.exports = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("connected to the database");
  } catch (err) {
    console.log(`error in connecting with mongodb => ${err}`);
  }
};
