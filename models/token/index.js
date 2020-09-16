// eslint-disable-next-line no-unused-vars
const Token = require("./tokenModel");

const tokenModelMethods = {};

tokenModelMethods.generateToken = user => {
  return Token.create({
    userEmail: user.userEmail,
    token: user.token
  });
};
tokenModelMethods.getTokenById = (email, token) => {
  return Token.findOne({ where: { userEmail: email, token: token } });
};

tokenModelMethods.deleteOneToken = (email, token) => {
  return Token.destroy({ where: { userEmail: email, token } });
};
module.exports = tokenModelMethods;
