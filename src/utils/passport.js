import User from '../database/models/user';
import passport from 'passport';

const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const { FACEBOOK_APP_ID, FACEBOOK_APP_SECRET, BASE_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

// use facebook login
passport.use(new FacebookStrategy({
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: `${BASE_URL}/api/auth/facebook/callback`,
  profileFields: ['id', 'displayName', 'email']
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ where: { providerId: profile.id, provider: 'facebook' } });
    if (user) {
      return done(null, user);
    }
    const newUser = new User({
      providerId: profile.id,
      provider: 'facebook',
      password: 'facebook',
      displayName: profile.displayName,
      email: profile.emails
        ? profile.emails[0].value
        : null
    });
    await newUser.save();
    done(null, newUser);
  } catch (err) {
    done(err);
  }
}));

// use google login
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: `${BASE_URL}/api/auth/google/callback`
}, async (accessToken, refreshToken, profile, done) => {
  try {
    const user = await User.findOne({ where: { providerId: profile.id, provider: 'google' } });
    if (user) {
      return done(null, user);
    }
    const newUser = new User({
      providerId: profile.id,
      provider: 'google',
      password: 'google',
      displayName: profile.displayName,
      email: profile.emails ? profile.emails[0].value : null
    });
    await newUser.save();
    done(null, newUser);
  } catch (err) {
    done(err);
  }
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = User.findOne({ where: { id } })
    done(null, user);
  } catch (err) {
    done(err);
  }
});
