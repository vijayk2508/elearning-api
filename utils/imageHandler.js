const errorHandlerMethods = require("../utils/errorHandler");
const mv = require("mv");
const path = require("path");

exports.imageHandler = (filePath, fileName, oldFilePath) => {
    return new Promise((resolve, reject) => {
        if (
            path.extname(filePath) === ".png" ||
            path.extname(filePath) === ".jpg" ||
            path.extname(filePath) === ".svg" ||
            path.extname(filePath) === ".jpeg"
        ) {
            mv(oldFilePath, filePath, { mkdirp: true }, (err) => {
                if (err) {
                    console.log(err);
                    errorHandlerMethods.errorHandlerMain(err);
                }
                console.log("uploaded", { filePath: filePath, fileName: fileName });
                resolve({ filePath: filePath, fileName: fileName });
            });
        } else {
            reject({ name: "fileExt" });
        }
    });
};