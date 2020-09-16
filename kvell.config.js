module.exports = {
  protocol: "http",
  routes: [
    {
      path: "/user",
      name: "user"
    },
    {
      path: "/logout",
      name: "logout"
    },

    {
      path: "/filesUpload",
      name: "filesUploads"
    },
  ],
  models: [
    "user",
  //  "login_log",
  ],
  autoRequireRoutes: false
};
