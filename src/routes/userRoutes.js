import express from 'express';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import AuthController from '../controllers/authController';

const router = express.Router();
const { loginCallback } = AuthController

// configure google and facebook logins
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/api/users/auth/google/redirect',
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      profileFields: ['emails', 'firstName', 'lastName']
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        providerId: profile.id,
        provider: 'google',
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value
      };
      return done(null, user);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      callbackURL: '/api/users/auth/facebook/redirect',
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      profileFields: ['emails', 'firstName', 'lastName']
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        providerId: profile.id,
        provider: 'facebook',
        firstName: profile.name.givenName,
        lastName: profile.name.familyName,
        email: profile.emails[0].value
      };
      return done(null, user);
    }
  )
);

router.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

router.get(
  '/auth/google/redirect',
  passport.authenticate('google', { failureRedirect: '/auth/google' }),
  loginCallback
);

router.get(
  '/auth/facebook',
  passport.authenticate('facebook', {
    scope: ['email']
  })
);

router.get(
  '/auth/facebook/redirect',
  passport.authenticate('facebook', { failureRedirect: '/auth/facebook' }),
  loginCallback
);

export default router;
