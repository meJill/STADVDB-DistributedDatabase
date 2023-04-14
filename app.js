var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jemill12"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});



// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');


// const app = express();
// const port = 3000;

// app.use(bodyParser.json());

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'username',
//   password: 'password',
//   database: 'myapp'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database as id ' + connection.threadId);
// });


// // Create a new user profile
// app.post('/users', (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
//   const values = [name, email, password];

//   connection.query(query, values, (error, results, fields) => {
//     if (error) {
//       console.error('Error creating user: ' + error.stack);
//       res.sendStatus(500);
//       return;
//     }

//     console.log('User created with id ' + results.insertId);
//     res.sendStatus(201);
//   });
// });

// // Get a list of all user profiles
// app.get('/users', (req, res) => {
//   const query = 'SELECT * FROM users';

//   connection.query(query, (error, results, fields) => {
//     if (error) {
//       console.error('Error getting users: ' + error.stack);
//       res.sendStatus(500);
//       return;
//     }

//     res.json(results);
//   });
// });

// // Update an existing user profile
// app.put('/users/:id', (req, res) => {
//   const id = req.params.id;
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   const query = 'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?';
//   const values = [name, email, password, id];

//   connection.query(query, values, (error, results, fields) => {
//     if (error) {
//       console.error('Error updating user: ' + error.stack);
//       res.sendStatus(500);
//       return;
//     }});

// const http = require('http');
// const express = require('express');
// const handlebars =require('handlebars');
// const exphbs = require('express-handlebars');
// const path = require('path');
// const hostname = '127.0.0.1';

// const port = 3000;
// const app = express();

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });

// app.engine('hbs', exphbs.engine({
//     extname: 'hbs',
//     defaultView: 'main',
//     layoutsDir: path.join(__dirname, '/views/layouts'),
//     partialsDir: path.join(__dirname, '/views/partials'),
//     helpers: {
//       preview: function(str) {
//         if (str.length > 100)
//           return str.substring(0,100) + '...';
//         return str;
//       },
//     }
//   }));

// app.set('view engine', 'hbs');

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'username',
//   password: 'password',
//   database: 'myapp'
// });

// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to database: ' + err.stack);
//     return;
//   }
//   console.log('Connected to database as id ' + connection.threadId);
// })
