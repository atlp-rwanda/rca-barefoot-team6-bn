import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import { getComments, getComment, getCommentWithReplies, createComment, updateComment, deleteComment } from '../controllers/commentController';

const router = Router();

router.get('/', isLoggedIn, getComments);
router.get('/requests/:requestId', isLoggedIn, getComments)
router.get('/:commentId', isLoggedIn, getComment);
router.get('/:commentId/replies', isLoggedIn, getCommentWithReplies);
router.put('/:commentId', isLoggedIn, updateComment);
router.delete('/:commentId', isLoggedIn, deleteComment);
router.post('/', isLoggedIn, createComment);

export default router;
