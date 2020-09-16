/* eslint-disable no-unused-vars */
const userController = {};
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const tokenModelMethods = require("../models/token/index");
const userModelmethods = require("../models/user/index");
const customStatus = require("../constants/customStatus");
const hashingHandler = require("../utils/hashingHandler");
const jwtHandler = require("../utils/jwtHandler");

const ids = require("short-id");
ids.configure({
  length: 6,
  algorithm: "sha1",
  salt: Math.random,
});

const fileHandlerMethods = require("../utils/fileHandler");
const errorHandlerMethods = require("../utils/errorHandler");
const statusInfo = require("../constants/statusInfo");
const filesUploadsController = require("./filesUploads");

// User sign up
userController.insertData = async (data) => {
  try {

    const {fields , files} = data;

    let user = fields;
    
    const fileDetails = await filesUploadsController.insertSingleImage({
      folderName: 'user',
      imageName: user.userEmail,
      file: files.userImage,
    });

    user.userImage= fileDetails.imageUrl;

    const token = await jwtHandler.generateJWT({ userEmail: user.userEmail }, "1d");
    user.userAccessToken = token;

    user.userPassword = await hashingHandler.hashingValue(user.userPassword);
    const quriedUser = await userModelmethods.Usercreate(user);

    return {
      ...statusInfo.OK,
      message: "User Created Successfully",
      user: quriedUser,
    };
  } catch (error) {
    console.log(error);
    return errorHandlerMethods.errorHandlerMain(error);
  }
};

userController.signIn = async ({ userEmail, userPassword }) => {
  try {
    let user = await userModelmethods.findLoginEmail(userEmail);

    if (user) {
      const validPassword = await hashingHandler.comparingValue(
        userPassword,
        user.userPassword
      );
      if (!validPassword) {
        return customStatus.UNAUTHORIZED_PASSWORD;
      } else {
        const token = await jwtHandler.generateJWT({ userEmail }, "1d");
        user.token = token;
        await tokenModelMethods.generateToken(user);
        return { ...statusInfo.OK, message: "Login Successfully", token };
      }
    }
    return customStatus.UNAUTHORIZED_LOGIN;
  } catch (error) {
    console.log(error);
    return errorHandlerMethods.errorHandlerMain(error);
  }
};

userController.getAllUsers = async () => {
  let result = "";

  try {
    result = await userModelmethods.getAllUsers();
    console.log(result);
    return { ...statusInfo.OK, result };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

module.exports = userController;
