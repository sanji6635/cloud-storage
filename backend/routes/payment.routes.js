const express = require("express");
const router = express.Router();
const {
  payment,
  paymentVerify,
} = require("../controllers/payment.controllers");

router.post("/payment", payment);
router.post("/paymentverify", paymentVerify);

module.exports = router;
