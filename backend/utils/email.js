const user = require("../db_models/userModel");
require("dotenv").config();
const nodemailer = require("nodemailer");

const sendEmail = async (email) => {
  //querying the database if email already present or not
  const firstTimeSignIn = await checkEmail(email);

  try {
    if (firstTimeSignIn.error) {
      console.log(`Error while querying database: ${firstTimeSignIn.error}`);
      return { error: "Error while querying database" };
    } else if (firstTimeSignIn) {
      //configuring nodemailer
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        auth: {
          user: "mia.willms26@ethereal.email",
          pass: "taaNXj71BR4tpTM6Rn",
        },
      });

      //mail parameters
      const mailOptions = {
        from: process.env.USER_EMAIL,
        to: email,
        subject: "Welcome to our website",
        text: "Welcome to our website , we hope you enjoy your stay here ",
      };

      //send email
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await transporter.sendMail(mailOptions);
      return { message: "Email sent" };

      //---------------------------------
    }

    return { message: "User already signedIn" };
  } catch (err) {
    console.log(`error while sending email ${err}`);
    return { error: "error while sending email" };
  }
};

module.exports = sendEmail;

//querying the database if email already present or not

async function checkEmail(email) {
  try {
    const sUser = await user.findOne({ email: email });

    if (sUser) {
      return false;
    }
    return true;
  } catch (err) {
    console.log(`error while querying database => ${err}`);
    return { error: err };
  }
}
