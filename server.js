const express = require('express');
const path = require('path');
const routes = require('./routes/index.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(expressValidator());

app.use(morgan('dev'));

app.use(routes);

app.listen(3000, function() {
  console.log('App is running on localhost:3000');
})
