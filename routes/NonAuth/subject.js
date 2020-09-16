const subjectRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const subjectController = require("../../controllers").subject;

subjectRouter.get("/getall", (request, response) => {
  subjectController.GetAll().then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

//GetAll
module.exports = subjectRouter;
