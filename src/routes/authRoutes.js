import { Router } from 'express';
import { loginFacebook, loginFacebookCallback, loginGoogle, loginGoogleCallback, logout } from '../controllers/authController';

const AuthRoutes = Router();

AuthRoutes.get('/facebook', loginFacebook);
AuthRoutes.get('/facebook/callback', loginFacebookCallback);
AuthRoutes.get('/google', loginGoogle);
AuthRoutes.get('/google/callback', loginGoogleCallback);
AuthRoutes.get('/logout', logout);

export default AuthRoutes;
