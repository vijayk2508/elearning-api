const loggedUserDetailsRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const loggedUserDetailsController = require("../controllers").loggedUserDetails;

loggedUserDetailsRouter.get("/", (request, response) => {
  loggedUserDetailsController
    .loggedInUsers(request.user.userId)
    .then(result => response.status(result.status).json(result)),
    err => {
      response.status(err.status).json(err);
    };
  // get method
});

loggedUserDetailsRouter.post("/", (request, response) => {
  // post method
});

loggedUserDetailsRouter.put("/", (request, response) => {
  // put method
});

loggedUserDetailsRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = loggedUserDetailsRouter;
