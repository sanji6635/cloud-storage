const express = require("express");
const { login, signup, logout } = require("../controllers/auth.controllers");
const router = express.Router();

//signup
router.post("/signup", signup);

//login
router.post("/login", login);

//logout
router.post("/logout", logout);

module.exports = router;
