const user = require("./user");
const logout = require("./logout");
const filesUploads = require("./filesUploads");
const subject = require("./subject");
const topic = require("./topic");
const nonAuth_subject = require("./NonAuth/subject");
const nonAuth_topic = require("./NonAuth/topic");
module.exports = {
  user,
  logout,
  filesUploads,
  subject,
  topic,
  nonAuth_subject,
  nonAuth_topic
};
