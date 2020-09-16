const subjectRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const subjectController = require("../controllers").subject;

subjectRouter.post("/create", async (request, response) => {
  if (request.body.fields.subject) {
    request.body.fields = {...JSON.parse(request.body.fields.subject)};
  }
  subjectController.insertData(request.body).then(
    (result) => {
      response.status(result.status).json(result);
    },
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});


subjectRouter.put("/update", async (request, response) => {
  if (request.body.fields.subject) {
    request.body.fields = {...JSON.parse(request.body.fields.subject)};
  }
  subjectController.updateSubjectBySubjectId(request.body).then(
    (result) => {
      response.status(result.status).json(result);
    },
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

subjectRouter.get("/getall", (request, response) => {
  subjectController.GetAll().then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

subjectRouter.delete("/delete/:subjectId", async (request, response) => {
  subjectController.deleteSubjectBySubjectId(request.params.subjectId).then(
    (result) => {
      response.status(result.status).json(result);
    },
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

subjectRouter.get("/getDetailBySubjectId/:subjectId", async (request, response) => {
  subjectController.GetSubjectBySubjectId(request.params.subjectId).then(
    (result) => {
      response.status(result.status).json(result);
    },
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

module.exports = subjectRouter;
