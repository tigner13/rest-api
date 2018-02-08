const express     = require('express');
const logger      = require('morgan');
const bodyParser  = require('body-parser');
const mongoose    = require('mongoose');
const config      = require('./config');
const cluster     = require('cluster');
let app = express();

if (cluster.isMaster) {
  var numWorkers = require('os').cpus().length;
    for(var i = 0; i < numWorkers; i++) {
      cluster.fork();
  }
} else {
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use('/', require('./routes'));
  console.log(`Listening on port ${config.port}`)
  app.listen(config.port);
}

module.exports = app;
