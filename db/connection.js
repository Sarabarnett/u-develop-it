const mysql = require('mysql2');
require('dotenv').config();

//connect to mysql database
const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
  },
  console.log('connected to the election database')
);



module.exports = db;