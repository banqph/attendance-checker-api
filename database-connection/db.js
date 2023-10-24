const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '<YOUR_HOST>',
  user: '<YOUR_USER>',
  password: '<YOUR_PASSWORD>',
  database: '<YOUR_DATABASE>',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

module.exports = connection; 