/* eslint-disable no-unused-vars */
// const errorHandlerMethods = {};
const { isCelebrate } = require("celebrate");
const statusInfo = require("../constants/statusInfo");
const customStatus = require("../constants/customStatus");

const processErr = err => {
  return err
    .replace("Key", "")
    .replace("(", "")
    .replace(")", "")
    .replace("_", " ")
    .replace("=", " ");
};

exports.sequelizeErrorHandler = error => {
  if (error.name.startsWith("SequelizeForeignKeyConstraintError")) {
    return error.parent.detail;
  } else if (error.name.startsWith("SequelizeDatabaseError")) {
    return "Invalid Input";
  } else if (error.name.startsWith("SequelizeUniqueConstraintError")) {
    return processErr(error.parent.detail);
  }

  try {
    return error.errors[0].message;
  } catch {
    return "Invalid Input";
  }
};

exports.mongoErrorHandler = error => {
  if (error.codeName.startsWith("DuplicateKey")) {
    return error.errmsg;
  }
  try {
    return error.errmsg;
  } catch {
    return "Invalid Input";
  }
};

exports.celebrateErrorHandler = (error, _request, response, _next) => {
  if (isCelebrate(error)) {
    response.status(400).json({
      status: 400,
      message: error.joi.messages
    });
  }
};

exports.serverErrorHandler = () => "Server Error";

exports.errorHandlerMain = err => {
  // database error handling
  if (err.name.startsWith("Sequelize")) {
    return {
      ...statusInfo.BAD_REQUEST,
      message: this.sequelizeErrorHandler(err)
    };
  } else {
    return statusInfo.INTERNAL_SERVER_ERROR;
  }
};

exports.globalErrorHandler = err => {
  // database error handling
  if (err.name.startsWith("Sequelize")) {
    return {
      ...statusInfo.BAD_REQUEST,
      message: this.sequelizeErrorHandler(err)
    };
  } 
  // else if (err.name.startsWith("MongoError")) {
  //   return {
  //     ...statusInfo.BAD_REQUEST,
  //     message: this.mongoErrorHandler(err)
  //   };
  // } 
  else {
    return statusInfo.INTERNAL_SERVER_ERROR;
  }
};
