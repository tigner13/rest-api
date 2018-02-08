var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');

const mysql = require('mysql');

const PORT = 3000;
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

app.listen(PORT);

// Connecting to the rest_api_database from root@localhost
/*const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'rest_api_database'
});

con.connect((err) => {
  if(err){
    //if there is an error then return the error
    console.log(err);
    return;
  }
  console.log('Connection established');


});
*/



module.exports = app;
