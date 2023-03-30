import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createFeedback, deleteFeedback, getFeedbacks, updateFeedback } from '../controllers/feedBackControllers';
const router = Router();
router.post('/', authMiddleware, createFeedback);
router.get('/', authMiddleware, getFeedbacks);
router.put('/:id', authMiddleware, updateFeedback);
router.delete('/:id', authMiddleware, deleteFeedback);
export default router;
