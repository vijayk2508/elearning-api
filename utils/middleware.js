const formidable = require("formidable");
const tokenModelMethods = require("../models/token/index");
const middleware = {};
const jwt = require("jsonwebtoken");
const statusInfo = require("../constants/statusInfo");

middleware.auth = async (request, response, next) => {
  if (request.header("Authorization")) {
    const token = request.header("Authorization").replace("Bearer ", "");
    if (!token) {
      response.status(400).send("access Denied");
    }
    try {
      const verified = jwt.verify(token, process.env.TOKEN_SECRET);
      tokenModelMethods
        .getTokenById(verified.userEmail, token)
        .then((result) => {
          if (result) {
            request.user = { userEmail: verified.userEmail, userToken: token };
            next();
            // let roleName = 'Member'
            // switch (roleName) {
            //   case "Member":
            //     switch (request.method) {
            //       case "POST":
            //         response.status(200).send("Contact Admin");
            //         break;
            //       case "PUT":
            //         response.status(200).send("Contact Admin");
            //         break;
            //       case "DELETE":
            //         response.status(200).send("Contact Admin");
            //         break;
            //       case "GET":
            //         next();
            //         break;
            //     }
            //     break;
            //   case "OWNER":
            //     next();
            //     break;
            // }
          } else {
            // response
            //   .status(400)
            //   .send({ status: 400, message: "your token has invoked" });
            response
              .status(403)
              .json({
                ...statusInfo.FORBIDDEN,
                error: "your token has invoked",
              });
          }
        });
    } catch {
      //response.status(400).send("Invalid token");
      response
        .status(400)
        .json({ ...statusInfo.BAD_REQUEST, error: "Invalid Token" });
    }
  } else {
    response
      .status(400)
      .send({ ...statusInfo.BAD_REQUEST, error: "Invalid Token" });
  }
};

middleware.formidable = (request, response, next) => {
  try {
    if (
      request.headers["content-type"] &&
      request.headers["content-type"].startsWith("multipart/form-data")
    ) {
      new formidable.IncomingForm().parse(request, (err, fields, files) => {
        if (err) throw err;
        request.body = { fields, files };
        return next();
      });
    } else {
      return next();
    }
  } catch (err) {
    response
      .status(500)
      .json({ ...statusInfo.INTERNAL_SERVER_ERROR, error: err });
  }
};

module.exports = middleware;
