import { Router } from 'express';
import { isLoggedIn } from '../middlewares/authMiddleware';
import { createAccomodationFacility, getAccomodationFacilityById, getAccomodationFacilities, updateAccomodationFacility, deleteAccomodationFacility } from '../controllers/accomodationFacilitiesController';

const router = Router();

router.get('/', isLoggedIn, getAccomodationFacilities);
router.get('/:id', isLoggedIn, getAccomodationFacilityById);
router.put('/:id', isLoggedIn, updateAccomodationFacility);
router.delete('/:id', isLoggedIn, deleteAccomodationFacility);
router.post('/', isLoggedIn, createAccomodationFacility);

export default router;
