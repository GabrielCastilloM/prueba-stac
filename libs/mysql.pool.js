const mysql = require('mysql2');
const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

const pool = mysql.createPool({
    host     : config.dbHost,
    user     : USER ,
    password : PASSWORD,
    database : config.dbName,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

module.exports = pool;

