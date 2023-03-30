import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { createHotel, updateHotel, getHotel, getHotels, deleteHotel } from '../controllers/hotelController';

const router = Router();

router.get('/', authMiddleware, getHotels);
router.get('/:id', authMiddleware, getHotel);
router.put('/:id', authMiddleware, updateHotel);
router.delete('/:id', authMiddleware, deleteHotel);
router.post('/', authMiddleware, createHotel);

export default router;
