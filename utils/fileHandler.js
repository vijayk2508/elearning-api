const errorHandlerMethods = require("../utils/errorHandler");
const mv = require("mv");
const path = require("path");
const fs = require("fs");
// const fileHandlerMethods = {};

exports.filePathHandler = (file, id, basePath) => {
  console.log("in file handler");

  return new Promise((resolve, reject) => {
    let fileName = `${id}_${Date.now()}.${file.name.split(".").pop()}`;

    try {
      let newpath = path.join(__dirname, "..", "public", basePath.slice(1), fileName);
      if (!fs.existsSync(path.join(__dirname, "..", "public", basePath.slice(1)))) {
        fs.mkdirSync(path.join(__dirname, "..", "public", basePath.slice(1)));
      }
      if (
        path.extname(fileName) === ".png" ||
        path.extname(fileName) === ".jpg" ||
        path.extname(fileName) === ".svg" ||
        path.extname(fileName) === ".jpeg"
      ) {
        mv(file.path, newpath, err => {
          if (err) {
            reject(err);
          } else {
            resolve({
              fileName: basePath.slice(1) + "/" + fileName,
              filePath: newpath
            });
          }
        });
      } else {
        return reject(errorHandlerMethods.serverErrorHandler());
      }
    } catch (err) {
      // you can diff between errors here.
      return reject(errorHandlerMethods.serverErrorHandler());
    }
  });
};

exports.unlinkFileHandler = filePath => {
  return new Promise((resolve, reject) => {
    console.log("DOES FILE EXISTS ? ", fs.existsSync(filePath));
    fs.unlink(filePath, err => {
      if (err) {
        console.log("error in unlink file", err);
        return reject(errorHandlerMethods.serverErrorHandler());
      } else console.log("file moved from sserver");
      resolve("file removed from server");
    });
  });
};
