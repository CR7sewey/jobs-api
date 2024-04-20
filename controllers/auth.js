const register = async (req, res) => {
  return res.send("register user <a href='/login'>Login</a>");
};

const login = async (req, res) => {
  return res.send("login user <a href='/register'>Register</a>");
};

module.exports = { login, register };
