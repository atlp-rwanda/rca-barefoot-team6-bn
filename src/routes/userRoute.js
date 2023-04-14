import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createUser, getUsers, verifyEmail, welcomeNewUser, getMyProfile, loginUser, logout, updateMyProfile } from '../controllers/userController';

const router = Router();
router.post('/', createUser)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.get('/self', authMiddleware, getMyProfile);
router.post('/login', loginUser);
router.put('/logout', authMiddleware, logout);
router.get('/', getUsers)
router.put('/update', authMiddleware, updateMyProfile);

export default router
