const Topic = require("./topicModel");
const Subject = require("../../models/subjects/subjectModel");

const topicModelMethods = {};

topicModelMethods.getAllTopic = () => {
  return Topic.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

// topicModelMethods.getAllTopicBySubjectId =(SubjectId) =>{
//     return Topic.findAll({
//         where : {
//             topic_SubjectId :  SubjectId
//         },
//         attributes : {
//             exclude: ["createdAt", "updatedAt"],
//         }
//     })
// }

topicModelMethods.getTopicByTopicId = (topicid) => {
  return Topic.findOne({
    where: {
      topicid: topicid,
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });
};

// topicModelMethods.getAllTopicBySubjectId = (SubjectId) => {
//   return Topic.findAll({
//     where: { topic_SubjectId: SubjectId },
//     attributes: {
//       exclude: ["createdAt", "updatedAt"],
//     },
//   });
// };

topicModelMethods.getAllTopicBySubjectId = async (SubjectId) => {
  let query = null;

  query = await Subject.findOne({
    where: {
      subjectid: SubjectId,
    },

    include: [
      {
        model: Topic,
      //  as: "topics",
        where: { topic_SubjectId: SubjectId },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],

    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
  });

  if (query === null) {
    query = await Subject.findOne({
      where: {
        subjectid: SubjectId,
      },
      attributes: {
        exclude: ["createdAt", "updatedAt"],
      },
    });

    if (query != null) {
      query.dataValues = { ...query.dataValues, topics: [] };
    }
  }

  return query;
};

topicModelMethods.deleteTopicBySubjectId = (subjectId) => {
  const query = Topic.destroy({
    where: {
      topic_SubjectId: subjectId,
    },
  });

  return query;
};

topicModelMethods.Topiccreate = (data) => Topic.create(data);

module.exports = topicModelMethods;
