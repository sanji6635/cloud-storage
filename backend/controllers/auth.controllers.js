const user = require("../db_models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jsonwebToken");
const sendEmail = require("../utils/email");

//--------------------------------------------------------------------------------------------------------------------------------------------
let salt;

//signup
const signup = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userName = email.split("@")[0] + Math.round(Math.random() * 100);

    //wel will hash the password here
    salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //newely created user is this
    const newUser = new user({
      userName,
      email,
      password: hashedPassword,
    });

    //sending an email to thse user
    const emailResponse = await sendEmail(email);
    if (emailResponse.error) {
      console.log(`Error: ${emailResponse.error}`);
    } else {
      console.log(emailResponse.message);
    }

    //saving the newUser in the database
    if (newUser) {
      //saving the user in database
      await newUser.save();

      //adding the jwt cookie
      jwt(newUser._id, res);

      return res.status(201).json({
        _id: newUser._id,
        userName: newUser.userName,
        email: newUser.email,
        password: newUser.password,
        message: "user created successfully",
        email: emailResponse.message,
      });
    } else {
      return res.status(400).json({ message: "Invalid user Data" });
    }
  } catch (err) {
    console.log(`error in signing up ${err}`);
    res.status(500).json({ error: "internal server error while signingup" });
  }
};
//--------------------------------------------------------------------------------------------------------------------------------------------

//login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    //finding the user
    const userName = await user.findOne({ email: email });

    if (userName.email == email) {
      //will check for password matching
      const match = await bcrypt.compare(password, userName.password);

      if (match) {
        //addingthe jwt cookoe
        jwt(userName._id, res);

        return res.status(201).json({ message: "user logged in successfully" });
      } else {
        return res.status(401).json({ message: "invalid userName/password" });
      }
    } else {
      return res.status(401).json({ message: "invalid userName/password" });
    }
  } catch (err) {
    console.log(`error while loging in => ${err}`);
    res.status(500).json({ error: "internal server error while logging" });
  }
};

//logout
const logout = async (req, res) => {
  try {
    //removing the jwt cookie
    res.clearCookie("jwt");
    return res.status(200).json({ message: "user logged out successfully" });
  } catch (err) {
    console.log(`error in logging out => ${err}`);
    res.status(500).json({ error: "internal server error while logging out" });
  }
};

module.exports = {
  login,
  signup,
  logout,
};
