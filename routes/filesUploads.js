const filesUploadsRouter = require("kvell-scripts").router();
// eslint-disable-next-line no-unused-vars
const filesUploadsController = require("../controllers").filesUploads;

filesUploadsRouter.get("/", (request, response) => {
  // get method
});

filesUploadsRouter.post("/", (request, response) => {
  filesUploadsController.insertBlog(request.body).then(res=>response.status(res.status).json(res), err=>response.status(err.status).json(err))
});

filesUploadsRouter.put("/", (request, response) => {
  // put method
});

filesUploadsRouter.delete("/", (request, response) => {
  // delete method
});

module.exports = filesUploadsRouter;