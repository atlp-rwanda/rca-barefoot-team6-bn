import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import {createHotel, updateHotel, getHotel, getHotels, deleteHotel} from "../controllers/hotelController";

const router = Router();

router.get('/', isLoggedIn, getHotels);
router.get('/:id', isLoggedIn, getHotel);
router.put('/:id', isLoggedIn, updateHotel);
router.delete('/:id', isLoggedIn, deleteHotel);
router.post('/', isLoggedIn, createHotel);

export default router;

