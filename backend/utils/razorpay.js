const Razorpay = require("razorpay");
require("dotenv").config();

const instance = new Razorpay({
  key_id: process.env.R_KEY_ID,
  key_secret: process.env.R_KEY_SECRET,
});

module.exports = instance;
