const topicController = {};
const topicModelMethods = require("../models/topics");

const errorHandlerMethods = require("../utils/errorHandler");
const ids = require("short-id");

const statusInfo = require("../constants/statusInfo");
const filesUploadsController = require("./filesUploads");
ids.configure({
  length: 6,
  algorithm: "sha1",
  salt: Math.random,
});

const imageFolderName = "topic";
topicController.insertData = async (data) => {
  let { fields, files } = data;
  let { topicTitle } = fields;
  const fileDetails = await filesUploadsController.insertSingleImage({
    folderName: imageFolderName,
    imageName: topicTitle,
    file: files.topicImage,
  });
  try {
    await topicModelMethods.Topiccreate({
      ...fields,
      topicImage: fileDetails.imageUrl,
    });

    return {
      ...statusInfo.OK,
      message: "Topic Created Successfully",
      //user: quriedSubject,
    };
  } catch (error) {
    console.log(error);
    return errorHandlerMethods.errorHandlerMain(error);
  }
};

topicController.GetAllTopic = async () => {
  try {
    let result = await topicModelMethods.getAllTopic();
    return { ...statusInfo.OK, result };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

topicController.GetTopicBySubjectId = async (subjectId) => {
  try {
    let resSubjectList = await topicModelMethods.getAllTopicBySubjectId(
      subjectId
    );
    return {
      ...statusInfo.OK,
      result: resSubjectList,
    };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

topicController.GetTopicByTopicId = async (topicID) => {
  try {
    let result = await topicModelMethods.getTopicByTopicId(topicID);
    return { ...statusInfo.OK, result: result };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

module.exports = topicController;
