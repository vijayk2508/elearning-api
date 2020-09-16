const jsonwebtoken = {};
const jwt = require("jsonwebtoken");



/**
 * Generate Identity for particular user.
 *
 * @param {string} expiresIn
 * @param {Object} payload
 *
 */

jsonwebtoken.generateJWT = async (payload, expiresIn) => {
  try {
    payload = Object.assign({ isDiff: false }, payload);
    return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn });
  } catch (error) {
    return error;
  }
};

jsonwebtoken.validateJWT = (token) => jwt.verify(token, process.env.TOKEN_SECRET);

module.exports = jsonwebtoken;