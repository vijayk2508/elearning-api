const filesUploadsController = {};

// const blogController = {};
// const blogModelMethod = require("../models/blog")
// const blogImagesModelMethod = require("../models/blogImages")
const httpStatus = require("../constants/statusInfo");
const errorHandler = require("../utils/errorHandler");
const imageHandler = require("../utils/imageHandler");
const path = require("path");

filesUploadsController.insertSingleImage = async ({
  folderName,
  imageName,
  file,
}) => {
  try {
    let filesArrObjs = file;
    const tmpImageName = `${imageName}_${Date.now()}${path.extname(
      filesArrObjs.name
    )}`;
    let fileName = path.join(folderName, tmpImageName);
    let newPath = path.join(__dirname, "..", "public", fileName);
    let oldPath = filesArrObjs.path;
    let fileInfo = await imageHandler.imageHandler(newPath, fileName, oldPath);

    return {
      ...httpStatus.OK,
      imageUrl: `${folderName}/${tmpImageName}`,
      fileInfo: fileInfo,
      message: "Image Save Successfully",
    };
  } catch (error) {
    console.log(error);
    return errorHandler.errorHandlerMain(error);
  }
};

// filesUploadsController.insertBlog = async ({ fields, files }) => {
//   try {
//     let blog = fields;
//     let filesArrObjs = files.file;
//     let imgObjs = [];

//     ///  creating folder if not exist

//     let dir = path.join(__dirname, "..", "public");
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }
//     dir = path.join(__dirname, "..", "public", "blogImages");
//     if (!fs.existsSync(dir)) {
//       fs.mkdirSync(dir);
//     }

//     if (Array.isArray(filesArrObjs)) {
//       for (let filesArrObj in filesArrObjs) {
//         let file = filesArrObjs[filesArrObj];
//         let fileName = path.join(
//           "blogImages",
//           `${blog.blogTitle}_${Date.now()}${path.extname(file.name)}`
//         );
//         let newPath = path.join(__dirname, "..", "public", fileName);
//         let oldPath = file.path;
//         let fileInfo = await imageHandler.imageHandler(
//           newPath,
//           fileName,
//           oldPath
//         );
//         imgObjs.push({ blogImage: fileInfo.fileName });
//       }
//     } else {
//       let fileName = path.join(
//         "blogImages",
//         `${blog.blogTitle}_${Date.now()}${path.extname(filesArrObjs.name)}`
//       );
//       let newPath = path.join(__dirname, "..", "public", fileName);
//       let oldPath = filesArrObjs.path;
//       let fileInfo = await imageHandler.imageHandler(
//         newPath,
//         fileName,
//         oldPath
//       );
//       imgObjs.push({ blogImage: fileInfo.fileName });
//     }

//     // let blogImgObj = await blogImagesModelMethod.insertBlogImages(imgObjs)
//     // let blogImgRes = blogImgObj.map(blog => blog._id)
//     // blog.blogImages = blogImgRes
//     // await blogModelMethod.insertBlog(blog)
//     return { ...httpStatus.OK, message: "Blog Create Successfully" };
//   } catch (error) {
//     console.log(error);
//     return errorHandler.errorHandlerMain(error);
//   }
// };

module.exports = filesUploadsController;
