import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import { createFeedback, deleteFeedback, getFeedbacks, updateFeedback } from '../controllers/feedBackControllers';
const router = Router();
router.post('/', isLoggedIn, createFeedback);
router.get('/', isLoggedIn, getFeedbacks);
router.put('/:id', isLoggedIn, updateFeedback);
router.delete('/:id', isLoggedIn, deleteFeedback);
export default router;
