const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const bodyParser = require('body-parser');
const googleOauthConfig = require('../config/google-oauth');
const { secret: sessionSecret } = require('../config/session-secret');
const debug = require('debug')('dong:api');

const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

passport.use(new GoogleStrategy(googleOauthConfig,
  (accessToken, refreshToken, profile, cb) => {
    debug(profile);
    return cb(null, { id: 1 });
  }
));

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

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  (req, res) => {
    res.redirect('/');
  }
);

app.listen(3003, () => {
  console.log('Example app listening on port 3003!');
});
