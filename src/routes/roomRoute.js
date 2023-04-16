import { Router } from 'express';
import { createRoom } from '../controllers/roomController';
import { isLoggedIn } from '../middlewares/authMiddleware';
const router = Router();

router.post('/:hotel_id', isLoggedIn, createRoom);

export default router;
