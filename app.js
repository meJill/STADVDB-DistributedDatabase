let mysql = require('mysql2');

let connection = mysql.createConnection({
  host: "34.126.128.168",
  user: "root",
  password: "group23sleigh",
  port: "3306",
  database: "IMDB"
});

connection.connect(function(err) {
    if (err) {
        return console.error('error: ' + err.message);
      }
    console.log('Connected to the MySQL server.');
});