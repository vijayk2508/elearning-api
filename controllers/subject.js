const subjectController = {};
const subjectModelMethods = require("../models/subjects");
const topicModelMethods = require("../models/topics");

const errorHandlerMethods = require("../utils/errorHandler");
const statusInfo = require("../constants/statusInfo");

const filesUploadsController = require("./filesUploads");

const imageFolderName = "subjectImage";

subjectController.insertData = async (data) => {
  try {
    let { fields, files } = data;
    let { subjectTitle } = fields;

    let img = "";
    if (files.file) {
      if (files.file !== null || files.file !== "") {
        const fileDetails = await filesUploadsController.insertSingleImage({
          folderName: imageFolderName,
          imageName: subjectTitle,
          file: files.file,
        });
        img = fileDetails.imageUrl;
      }
    }

    await subjectModelMethods.Subjectcreate({
      ...fields,
      subjectImage: img,
    });

    return {
      ...statusInfo.OK,
      message: "Subject Created Successfully",
      //  result: quriedSubject,
    };
  } catch (error) {
    console.log(error);
    return errorHandlerMethods.errorHandlerMain(error);
  }
};

subjectController.GetAll = async () => {
  try {
    let result = await subjectModelMethods.getAllSubject();
    return { ...statusInfo.OK, result };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

subjectController.GetSubjectBySubjectId = async (subjectId) => {
  try {
    let result = await subjectModelMethods.getBySubjectId(subjectId);
    return { ...statusInfo.OK, result };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

subjectController.updateSubjectBySubjectId = async (data) => {
  try {
    let { fields, files } = data;
    let { subjectTitle } = fields;

    let img = "";
    if (files.file) {
      if (files.file !== null || files.file !== "") {
        const fileDetails = await filesUploadsController.insertSingleImage({
          folderName: imageFolderName,
          imageName: subjectTitle,
          file: files.file,
        });
        img = fileDetails.imageUrl;
      }
    }

    await subjectModelMethods.updateSubjectBySubjectId({
      ...fields,
      subjectImage: img,
    });

    return { ...statusInfo.OK, message: "Subject Updated Successfully" };
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

subjectController.deleteSubjectBySubjectId = async (subjectId) => {
  try {
    const resSubject = await subjectModelMethods.deleteSubjectBySubjectId(subjectId);

    if (resSubject > 0) {
      await topicModelMethods.deleteTopicBySubjectId(subjectId);
      return { ...statusInfo.OK, message: "Delete Record Successfully" };
    } else {
      return { ...statusInfo.NOT_FOUND, message: "Record Not Found" };
    }
  } catch (err) {
    return { ...statusInfo.INTERNAL_SERVER_ERROR, error: err.message };
  }
};

module.exports = subjectController;
