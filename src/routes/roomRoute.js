import { Router } from 'express';
import { createRoom, getRoomsBySearch, getRooms } from '../controllers/roomController';
import { isLoggedIn } from '../middlewares/authMiddleware';
const router = Router();

router.post('/:hotel_id', isLoggedIn, createRoom);
router.get('/search/', isLoggedIn, getRoomsBySearch);
router.get('/', isLoggedIn, getRooms);
export default router;
