/* eslint-disable no-unused-vars */
//eslint-disable-next-line no-unused-vars
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;
const sequelize = require("kvell-db-plugin-sequelize").dbInstance;
const user = require("../user/userModel");
const shortid = require("shortid");
// Create your Token model's schema here and export it.
const token = sequelize.define("token", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  token: {
    type: Sequelize.STRING,
    allowNull: false
  },
},
);

token.belongsTo(user, { foreignKey: "userEmail" });
user.hasMany(token, { foreignKey: "userEmail" });
module.exports = token;
