import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createUser, getUsers, verifyEmail, welcomeNewUser, getMyProfile, loginUser, logout } from '../controllers/userController';

const router = Router();
router.post('/', createUser)
router.post('/login', loginUser)
router.get('/self', authMiddleware, getMyProfile);
router.get('/', getUsers)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.get('/self', authMiddleware, getMyProfile);
router.post('/login', loginUser);
router.put('/logout', authMiddleware, logout);
router.get('/', getUsers)

export default router;
