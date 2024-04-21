const User = require("../models/User");
const BadRequest = require("../errors/bad-request-error");
const { StatusCodes } = require("http-status-codes");

const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name) {
    throw new BadRequest("You need to provide a name");
  }
  if (!email) {
    throw new BadRequest("You need to provide an email");
  }
  if (!password) {
    throw new BadRequest("You need to provide a password");
  }
  const user_exists = await User.findOne({ email });
  if (user_exists) {
    // already exists in the model!
    throw new BadRequest("Already exists an user with this email!");
  }
  const new_user = await User.create({ ...req.body });
  const sendObj = {
    id: new_user.id,
    name: new_user.name,
    email: new_user.email,
  };
  return res.status(StatusCodes.CREATED).json(sendObj);
};

const login = async (req, res) => {
  return res.send("login user <a href='/register'>Register</a>");
};

module.exports = { login, register };
