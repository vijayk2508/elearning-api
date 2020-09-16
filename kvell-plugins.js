module.exports = {
  databasePlugins: [
    {
      resolve: "kvell-db-plugin-sequelize",
      options: {
        host : process.env.LOCAL_DATABASE_HOST,
        database: process.env.LOCAL_DATABASE_NAME,
        username: process.env.LOCAL_DATABASE_USERNAME,
        password: process.env.LOCAL_DATABASE_PASSWORD,
        port: process.env.LOCAL_DATABASE_PORT,
        options: {
          dialect: process.env.DATABASE_DIALECT,
          host: process.env.LOCAL_DATABASE_HOST,
          port: process.env.LOCAL_DATABASE_PORT,
          logging: false,
          dialectModulePath: require.resolve("mysql2"),
        },
      },
    },
  ],
};
