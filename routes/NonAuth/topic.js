const topicRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const topicController = require("../../controllers/topic");

topicRouter.get("/getalltopic", (request, response) => {
  topicController.GetAllTopic().then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});


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

module.exports = topicRouter;
