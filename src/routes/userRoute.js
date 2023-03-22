import { Router } from 'express';
import {
  createUser,
  getUsers,
  verifyEmail,
  welcomeNewUser,
  initiatePasswordReset,
  resetPassword
} from '../controllers/userController';
const router = Router();

router.post('/', createUser);
router.use('/verify-email/:token', verifyEmail);
router.get('/verify-email/:token', welcomeNewUser);
router.get('/', getUsers);
router.post('/request-password-reset', initiatePasswordReset);
router.post('/reset-password', resetPassword);
export default router;
