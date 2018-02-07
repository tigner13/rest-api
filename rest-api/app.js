var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');
const PORT = 3000;
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

app.listen(PORT);

module.exports = app;
