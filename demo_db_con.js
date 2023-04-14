var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root", //this as ur mysql root
  password: "jemill12" //this as ur mysql username
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});