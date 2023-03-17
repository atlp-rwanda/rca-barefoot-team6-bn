import { Router } from 'express';
import { createUser, getUsers, verifyEmail, welcomeNewUser, loginUser } from '../controllers/userController';
const router = Router();
router.post('/', createUser)
router.post('/login', loginUser)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.get('/', getUsers)

export default router
