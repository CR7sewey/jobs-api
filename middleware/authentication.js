const jwt = require("jsonwebtoken");
const UnauthenticatedError = require("../errors/non_authorized-error");
const User = require("../models/User");
require("dotenv").config();

const tokenVerification = async (req, res, next) => {
  const auth = req.headers.authorization;
  const [, token] = auth.split(" ")[1];

  if (token === "null") {
    throw new UnauthenticatedError("Your not authorized to access this route!"); // noy logged in
  }

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET_KEY);
    const { userID, userName, userEmail } = dados;

    const user = await User.findById({ userID });
    if (!user) {
      throw new UnauthenticatedError(
        "User invalid, please generate a new token!"
      );
    }
    req.user = { userID, userName, userEmail };

    next();
  } catch (e) {
    throw new UnauthenticatedError("Invalid or Expired token");
  }
};

module.exports = tokenVerification;
