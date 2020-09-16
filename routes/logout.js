const logoutRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const logoutController = require("../controllers").logout;

logoutRouter.get("/", (request, response) => {
  // get method
});

logoutRouter.post("/", (request, response) => {
  // post method
});

logoutRouter.put("/", (request, response) => {
  // put method
});

logoutRouter.delete("/", (request, response) => {
  // delete method
  console.log("in logout", request.user, request.userToken);
  logoutController
    .logout(request.user.userId, request.userToken)
    .then(result => response.status(result.status).json(result))
    .catch(err => response.status(err.status).json(err));
});

module.exports = logoutRouter;
