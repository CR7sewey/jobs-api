const express = require("express");
const router = express.Router();
const { login, register } = require("../controllers/auth");
const tokenVerification = require("../middleware/authentication");

router.post("/register", register);
router.post("/login", tokenVerification, login);

module.exports = router;
