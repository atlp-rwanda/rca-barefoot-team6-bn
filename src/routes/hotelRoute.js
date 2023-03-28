import { Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import {createHotel, updateHotel, getHotel, getHotels, deleteHotel} from "../controllers/hotelController";

const router = Router();

router.get('/', getHotels);
router.get('/:id', getHotel);
router.put('/:id', updateHotel);
router.delete('/:id', deleteHotel);
router.post('/', createHotel);

export default router;