const express = require('express');
const googleOauthConfig = require('../../config/google-oauth');
const debug = require('debug')('dong:auth:google');

const { OAuth2Strategy: GoogleStrategy } = require('passport-google-oauth');

const setupPassport = passport =>
  passport.use(new GoogleStrategy(googleOauthConfig,
    (accessToken, refreshToken, profile, cb) => {
      debug(profile);
      return cb(null, { id: 1 });
    }
  ));

exports.createRouter = (passport) => {
  const router = express.Router();

  setupPassport(passport);

  router.get('/start', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  router.get('/finish',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => res.redirect('/')
  );

  return router;
};
