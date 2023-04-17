const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const node1 = require('./imdb-node1');

const app = express()

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.listen(3000, function () {
  console.log(`Server is running at:` + 3000);
});

app.set('view engine', 'ejs');

app.use(express.static('public'))

const routes = require('./routes/routes');

app.use('/', routes);



