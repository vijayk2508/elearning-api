module.exports = {
  ENTITY_DOESNT_EXIST: {
    status: 400,
    message: ""
  },
  EMAIL_ALREADY_EXISTS: {
    status: 401,
    message: "Email Already Exists"
  },
  UNAUTHORIZED_EMAIL: {
    status: 401,
    message: "Invalid Email"
  },
  UNAUTHORIZED_PASSWORD: {
    status: 401,
    message: "Invalid Password"
  },
  OK_LOGIN: {
    status: 200,
    message: "Log In Successfull"
  },
  UNAUTHORIZED_LOGIN: {
    status: 401,
    message: "Invalid Email Or Password"
  }
};
