import { Router } from 'express';
import { createAccomodationFacilityRoom } from '../controllers/accomodationFacilitiesRoomsController';
import { isLoggedIn } from '../middlewares/authMiddleware';
const router = Router();

router.post('/:accomodationFacility_id', isLoggedIn, createAccomodationFacilityRoom);

export default router;
