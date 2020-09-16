const Subject = require("./subjectModel");
const Topic = require("../topics/topicModel");

const subjectModelMethods = {};

subjectModelMethods.getAllSubject = () => {
  return Subject.findAll({
    include: [
      {
        model: Topic,
        as: "topics",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    order: [["subjectid", "DESC"]],
  });
};

subjectModelMethods.getBySubjectId = (subjectId) => {
  return Subject.findOne({
    include: [
      {
        model: Topic,
        as: "topics",
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      },
    ],
    where : {
      subjectid : subjectId
    },
    attributes: {
      exclude: ["createdAt", "updatedAt"],
    },
    order: [["subjectid", "DESC"]],
  });
};

subjectModelMethods.updateSubjectBySubjectId = (subject) => {
  return Subject.update(
    {
      ...subject,
    },
    {
      where: {
        subjectid: subject.subjectid,
      },
    }
  );
};

subjectModelMethods.deleteSubjectBySubjectId = (subjectid) => {
  return Subject.destroy({
    where: {
      subjectid: subjectid,
    },
  })
};
subjectModelMethods.Subjectcreate = (subject) => Subject.create(subject);

module.exports = subjectModelMethods;
