import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import { getUsers, getMyProfile, loginUser } from '../controllers/userController';
const router = Router();
router.post('/login', loginUser)
router.get('/self', isLoggedIn, getMyProfile);
router.get('/', getUsers)

export default router