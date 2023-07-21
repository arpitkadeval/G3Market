const mongoose = require('mongoose');
const util = require('util');
const express = require('express');
const route = express.Router();
var bodyParser = require('body-parser');
const passport = require('passport');
// config should be imported before importing any other file
const config = require('./config/config');
const app = require('./config/express');
const { jwtAuthMiddleware, facebookAuthMiddleware, googleAuthMiddleware } = require('./server/middlewares/auth.middleware')
// parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const debug = require('debug')('express-mongoose-es6-rest-api:index');

// create server for notification
const httpServer = require("http").Server(app);

// make bluebird default Promise
Promise = require('bluebird'); // eslint-disable-line no-global-assign

// plugin bluebird promise in mongoose
mongoose.Promise = Promise;


// connect to mongo db
const mongoUri = config.mongo.host;
const mongoConfig = {
  useCreateIndex: true,
  useNewUrlParser: true,
  poolSize: 2,
  promiseLibrary: global.Promise,
  useUnifiedTopology: true
};
jwtAuthMiddleware(passport);
facebookAuthMiddleware(passport);
googleAuthMiddleware(passport);
// used to deserialize the user
mongoose.connect(mongoUri, mongoConfig);

mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${mongoUri}`);
});
// used to serialize and deserialize the user
passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});


// print mongoose logs in dev env
if (config.mongooseDebug) {
  mongoose.set('debug', (collectionName, method, query, doc) => {
    debug(`${collectionName}.${method}`, util.inspect(query, false, 20), doc);
  });
}

// module.parent check is required to support mocha watch
// src: https://github.com/mochajs/mocha/issues/1912
if (!module.parent) {
  // listen on port config.port
  httpServer.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
  });
}

module.exports = app;
