const sequelize = require("kvell-db-plugin-sequelize").dbInstance;
const Sequelize = require("kvell-db-plugin-sequelize").dbLib;
const shortid = require("shortid");
const subject = require("../subjects/subjectModel");

const topic = sequelize.define(
  "topic",
  {
    topicid: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    topicTitle: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    topicDescription: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    topicImage: {
      type: Sequelize.STRING,
      allowNull: true,
    },

    topicContent: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    hooks: {
      beforeCreate: async (topic) => {
        topic.UUID = `topic_${shortid.generate()}`;
      },
    },
  }
);

topic.belongsTo(subject, { foreignKey: "topic_SubjectId" , onDelete: "CASCADE" , onUpdate : "CASCADE"});
subject.hasMany(topic, { foreignKey: "topic_SubjectId"});

module.exports = topic;
