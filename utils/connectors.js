const PgConnect = require('pg').Pool
//host=localhost dbname=DBNAME user=USERNAME password=PASSWORD"
const newConnection = async (dbConnInfo) => {
    return await new PgConnect({
        user: dbConnInfo.userName,
        host: dbConnInfo.hostName,
        password: dbConnInfo.password,
        port: dbConnInfo.port,
        database:dbConnInfo.databaseName

    })
}
module.exports = newConnection
