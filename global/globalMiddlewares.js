const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("../routes");
const middleware = require("../utils/middleware");
const static = require("kvell-scripts").static;
const path = require("path");

/**
 *
 * @param {import ("kvell-scripts").KvellAppObject} app
 */
//sequelize.sync();
const globalMiddlewares = (app) => {
  app.use(
    middleware.formidable
    //   // bodyParser.json({ limit: "50mb" }),
    //   // bodyParser.urlencoded()
  );
  app.use(bodyParser.json({ limit: "5mb" }));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use("/static", static(path.join(__dirname, "..", "public")));
  app.use("/user/", routes.user);
  //app.use("/fileUploads/", routes.filesUploads)
  app.use("/public/subject/", routes.nonAuth_subject)
  app.use("/public/topic/", routes.nonAuth_topic)
  
  app.use(middleware.auth);
  app.use("/subject/", routes.subject)
  app.use("/topic/", routes.topic)
  app.use("/logout/", routes.logout);
  app.use(cors());
};

module.exports = globalMiddlewares;
