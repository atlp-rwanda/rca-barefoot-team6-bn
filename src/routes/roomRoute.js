import { Router } from 'express';
import { createRoom, getAllRooms, getAllRoomsInHotel } from '../controllers/roomController';
import { isLoggedIn } from '../middlewares/authMiddleware';
const router = Router();

router.post('/:hotelId', isLoggedIn, createRoom);
router.get('/:hotelId', isLoggedIn, getAllRoomsInHotel);
router.get('/', isLoggedIn, getAllRooms)

export default router;