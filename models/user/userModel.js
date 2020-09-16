//eslint-disable-next-line no-unused-vars
const sequelize = require("kvell-db-plugin-sequelize").dbInstance;
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;
const shortid = require("shortid");
// Create your User model's schema here and export it.
const user = sequelize.define(
  "user",
  {
    userId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    userName: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    userEmail: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    userPassword: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    userType: {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "user",
    },
    userImage: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    userAccessToken: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        user.UUID = `user_${shortid.generate()}`;
      },
    },
  }
);

// const toJSON = user.prototype.toJSON;

// user.prototype.toJSON = function({ attributes = [] } = {}) {
//   const obj = toJSON.call(this);

//   if (!attributes.length) {
//     return obj;
//   }

//   return attributes.reduce((result, attribute) => {
//     result[attribute] = obj[attribute];

//     return result;
//   }, {});
// };

module.exports = user;
