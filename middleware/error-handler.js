const CustomAPIError = require("../errors/my-error");
const { StatusCodes } = require("http-status-codes");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message }); // if and isntance of CustomAPIError
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err); // 500
};

module.exports = errorHandler;
