const instance = require("../utils/razorpay");
const crypto = require("crypto");
require("dotenv").config();

const payment = async (req, res) => {
  try {
    const { price } = req.body;
    const options = {
      amount: Number(price) * 100, // in paisa
      currency: "INR",
      receipt: "oredr no 11",
    };

    const response = await instance.orders.create(options);
    console.log(response);

    return res
      .status(200)
      .json({ message: "payment initiated", amount: Number(price * 100) });
  } catch (err) {
    console.log(`error while integrating payment => ${err.message}`);
    return res
      .status(500)
      .json({ error: `Internal server error while initiating payment ` });
  }
};

//payment verification
const paymentVerify = async (req, res) => {
  console.log(req.body);

  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const generated_signature = crypto
    .createHmac("sha256", process.env.R_KEY_SECRET)
    .update(razorpay_order_id + "|" + razorpay_payment_id)
    .digest("hex");

  console.log(`generated sig is ${{ generated_signature }}`);
  console.log(`generated sig is ${{ razorpay_signature }}`);
  if (generated_signature === razorpay_signature) {
    return res.json({ status: "success" });
  } else {
    return res.json({ status: "failure" });
  }
};

module.exports = { payment, paymentVerify };
