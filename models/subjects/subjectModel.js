const sequelize = require("kvell-db-plugin-sequelize").dbInstance;
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;
const shortid = require("shortid");

const subject = sequelize.define(
  "subject",
  {
    subjectid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    subjectTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    subjectDescription: {
        type: Sequelize.STRING,
        allowNull: true,
      },
    subjectImage: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (subject) => {
        subject.UUID = `subject_${shortid.generate()}`;
      },
    },
  }
);
module.exports = subject;
