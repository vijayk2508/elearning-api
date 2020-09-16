const logoutController = {};
const tokenModelMethods = require("../models/token/index");
const statusInfo = require("../constants/statusInfo");

logoutController.logout = async (id, token) => {
  try {
    await tokenModelMethods.deleteOneToken(id, token);
    return { ...statusInfo.OK, message: "Logout Successfully" };
  } catch (error) {
    console.log(error);
    return { ...statusInfo.INTERNAL_SERVER_ERROR };
  }
};
module.exports = logoutController;
