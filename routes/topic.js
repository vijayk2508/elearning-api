const topicRouter = require("kvell-scripts").router();
const statusInfo = require("../constants/statusInfo");
const filesUploadsController = require("../controllers/filesUploads");
// eslint-disable-next-line no-unused-vars
const topicController = require("../controllers/topic");

topicRouter.post("/create", async (request, response) => {
  topicController.insertData(request.body).then(
    (result) => {
      response.status(result.status).json(result);
    },
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

topicRouter.get("/getalltopic", (request, response) => {
  topicController.GetAllTopic().then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

// topicRouter.get("/:subjectId", (request, response) => {
//   topicController.GetTopicBySubjectId(request.params.subjectId).then(
//     (result) => response.status(result.status).json(result),
//     (err) => {
//       console.log(err);
//       response.status(err.status).json(err);
//     }
//   );
// });

topicRouter.get("/gettopicbytopicid", (request, response) => {
  topicController.GetTopicBySubjectId(request.query.topicId).then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

topicRouter.get("/getalltopicsubjectid", (request, response) => {
  topicController.GetTopicBySubjectId(request.query.subjectId).then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

topicRouter.get("/getalltopicbytopicid", (request, response) => {
  topicController.GetTopicByTopicId(request.query.topicId).then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

topicRouter.post("/fileuploader", (request, response) => {
  response.status(200).json({
    uploaded: true,
    url: "",
    file: request,
  });
  // const ids = require("short-id");
  // ids.configure({
  //   length: 6,
  //   algorithm: "sha1",
  //   salt: Math.random,
  // });

  // try {
  //   const fileDetails = filesUploadsController.insertSingleImage({
  //     folderName: "uploadContentImage",
  //     imageName: `image_${ids}`,
  //     file: request.files.upload,
  //   });

  //   return {
  //     ...statusInfo.OK,
  //     message: "Topic Created Successfully",
  //     //user: quriedSubject,
  //   };
  // } catch (error) {
  //   console.log(error);
  //  // return errorHandlerMethods.errorHandlerMain(error);
  // }
});

module.exports = topicRouter;
