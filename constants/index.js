module.exports = {
  sequelize: require("kvell-db-plugin-sequelize").dbInstance,
  Sequelize: require("kvell-db-plugin-sequelize").dbLib.ABSTRACT,
  shortid: require("shortid"),
};
