import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createUser, getUsers, verifyEmail, welcomeNewUser, getMyProfile, loginUser, logout } from '../controllers/userController';
import { registerDefinition } from 'swaggiffy';

const router = Router();
router.post('/', createUser)
router.use('/verify-email/:token', verifyEmail)
router.get('/verify-email/:token', welcomeNewUser)
router.get('/self', authMiddleware, getMyProfile);
router.post('/login', loginUser);
router.put('/logout', authMiddleware, logout);
router.get('/', getUsers)
registerDefinition(router, { tags: 'Users', mappedSchema: 'Users', basePath: '/users' });

export default router
