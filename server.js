const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();
const dbInfo =require('dotenv').config();
const mysql = require('mysql2');

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});




//default response for any other requests (not found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});