/* eslint-disable no-unused-vars */
const userRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const userController = require("../controllers").user;
const userIndex = require("../models/user/index");
const { celebrate, Joi, errors } = require("celebrate");

userRouter.get("/", (request, response) => {
  userController.getAllUsers().then(
    (result) => response.status(result.status).json(result),
    (err) => response.status(err.status).json(err)
  );
});

userRouter.post("/signUp", (request, response) => {
  // if (request.body.fields) {
  //   //request.body.fields = {...JSON.parse(request.body.fields.subject)};
  // }

  userController.insertData(request.body).then(
    (result) => response.status(result.status).json(result),
    (err) => {
      console.log(err);
      response.status(err.status).json(err);
    }
  );
});

userRouter.post("/login", (request, response) => {
  const { userEmail, userPassword } = request.body;
  userController.signIn({ userEmail, userPassword }).then(
    (result) => response.status(result.status).json(result),
    (err) => response.status(err.status).json(err)
  );
});

userRouter.put("/", (request, response) => {
  // put method
});

userRouter.delete("/", (request, response) => {
  // delete method
  response.send("logout");
});

module.exports = userRouter;
