import { Router } from 'express';
import { isLoggedIn, verifyEmail } from '../middlewares/authMiddleware';
import { getUsers, getMyProfile, loginUser, createUser, welcomeNewUser, logout, initiatePasswordReset, resetPassword, updateUser } from '../controllers/userController';
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

import AuthController from '../controllers/authController';

const router = Router();
const { loginCallback } = AuthController
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, FACEBOOK_APP_ID, FACEBOOK_APP_SECRET } = process.env;

// configure google and facebook logins
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

passport.use(
  new GoogleStrategy(
    {
      callbackURL: '/api/users/auth/google/redirect',
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      profileFields: ['emails', 'firstName', 'lastName']
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        googleId: profile.id,
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
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      profileFields: ['id', 'name', 'email']
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        facebookId: profile.id,
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

router.post('/', createUser)
router.put('/:id', updateUser)
router.post('/login', loginUser)
router.get('/self', isLoggedIn, getMyProfile);
router.get('/', isLoggedIn, getUsers)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.post('/request-password-reset', initiatePasswordReset);
router.post('/reset-password/:token', resetPassword);
router.put('/logout', isLoggedIn, logout);

export default router
