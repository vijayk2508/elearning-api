/* eslint-disable no-unused-vars */
const formParser = {};
const formidable = require('formidable');
const formOptions = {
    maxFileSize: 10 * 200000 * 200000,
    multiples :true
}
formParser.formidable = (request, response, next) => {
    const contentType = request.headers['content-type'];
    if (!contentType || contentType.startsWith('multipart/form-data')) {
        const form = new formidable.IncomingForm();
        form.uploadDir="./uploads"
        form.parse(request, (err, fields, files) => {
            if (err) response.send('form data parse-error');
            else {
                request.body = { fields, files };
                return next();
            }
        })
    } else next();
};
module.exports = formParser