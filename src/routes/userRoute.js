import { Router } from 'express';
import { isLoggedIn, verifyEmail } from '../middlewares/authMiddleware';
import { getUsers, getMyProfile, loginUser, createUser, welcomeNewUser, logout, initiatePasswordReset, resetPassword } from '../controllers/userController';
const router = Router();
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/self', isLoggedIn, getMyProfile);
router.get('/', isLoggedIn, getUsers)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.post('/request-password-reset', initiatePasswordReset);
router.post('/reset-password/:token', resetPassword);
router.put('/logout', isLoggedIn, logout);

export default router
