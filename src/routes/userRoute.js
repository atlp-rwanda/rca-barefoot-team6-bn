import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createUser, getUsers, verifyEmail, welcomeNewUser, loginUser, getMyProfile } from '../controllers/userController';
const router = Router();
router.post('/', createUser)
router.post('/login', loginUser)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.get('/self', authMiddleware, getMyProfile);
router.get('/', getUsers)

export default router
