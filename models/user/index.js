/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
const User = require("./userModel");
const bcrypt = require("bcryptjs");

const methods = {};
const userModelmethods = {};

userModelmethods.findEmail = (userData) =>
  User.findOne({
    where: { user_email: userData.user_email },
  });

userModelmethods.findLoginEmail = (userEmail) =>
  User.findOne({
    where: {
      userEmail: userEmail,
    },
  });

userModelmethods.findById = (id) =>
  User.findOne({
    where: { user_id: id },
    attributes: {
      exclude: ["user_credential", "id", "createdAt", "updatedAt", "admin"],
    },
  });

userModelmethods.Usercreate = (user) => User.create(user);

userModelmethods.getAllUsers = () => {
  return User.findAll({
    attributes: {
      exclude: ["user_credential", "id", "createdAt", "updatedAt", "admin"],
    },
  });
};

// userModelmethods.getUsersByProjectId = project_id => {
//   return projectUsersMapper.findAll({
//     where: {
//       project_id
//     },
//     include: [
//       {
//         model: User,
//         attributes: {
//           exclude: ["user_credential", "id", "createdAt", "updatedAt", "admin"]
//         }
//       }
//     ]
//   });
// };

methods.signOut = async (request, response, next) => {
  //console.log(request.header);
};
module.exports = userModelmethods;
