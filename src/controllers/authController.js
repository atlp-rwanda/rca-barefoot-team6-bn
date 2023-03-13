import passport from 'passport';

const { BASE_FRONTEND_URL } = process.env

// login with facebook api
export const loginFacebook = passport.authenticate('facebook', { scope: ['email'] });

// the api above redirect to this controller which then redirect to our frontend page
// success redirect to home
// failure redirect to login page
export const loginFacebookCallback = passport.authenticate('facebook', {
  successRedirect: `${BASE_FRONTEND_URL}`,
  failureRedirect: `${BASE_FRONTEND_URL}/`
});

// login with google api
export const loginGoogle = passport.authenticate('google', { scope: ['profile', 'email'] });

// the api above(of google) redirect to this controller which then redirect to our frontend page
// success redirect to home
// failure redirect to login page
export const loginGoogleCallback = passport.authenticate('google', {
  successRedirect: `${BASE_FRONTEND_URL}`,
  failureRedirect: `${BASE_FRONTEND_URL}/`
});

// create session when user logout
export const logout = (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie('connect.sid');
    res.redirect('/');
  });
}
