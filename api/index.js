const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const { secret: sessionSecret } = require('../config/session-secret');
const debug = require('debug')('dong:api');

const authGoogle = require('./auth/google');

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const app = express();

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  secret: sessionSecret,
  resave: true,
  saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/auth/google', authGoogle.createRouter(passport));

app.listen(3003, () => {
  debug('Example app listening on port 3003!');
});
