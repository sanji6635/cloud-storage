const express = require("express");
const cors = require("cors");
const path = require("path");
const authRoutes = require("./routes/auth.routes"); // this contains login,signup,logout routes
const uploadRoutes = require("./routes/upload.routes"); //this contains upload
const images = require("./routes/images.routes"); // thhis contains image route
const paymentRoute = require("./routes/payment.routes"); //this contains payment
const dbConnect = require("./db/mongodb.connect");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

//handling cors
app.use(
  cors({
    origin: "http://localhost:4200", // allowing from the frontend
    methods: ["GET", "POST"], // methods that are allowed
    credentials: true, // if you want to send jwt token or cookie
  })
);
//serving static files
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

//middleware for parsing the request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//home page
app.get("/", (req, res) => {
  res.send("hello there");
});

//middleware for authentication
app.use("/api/auth", authRoutes);

//middleware for file upload
app.use("/api/data", uploadRoutes);

//middleware for payment routes
app.use("/api/pay", paymentRoute);

//for gettingthe images from the disk
app.use("/api/images", images);

//for geeting the razorpay key id
app.get("/api/key", (req, res) => {
  res.status(200).json({ key: process.env.R_KEY_ID });
});
app.listen(PORT, () => {
  console.log(`server is runnig on  ${PORT}`);
  dbConnect();
});
