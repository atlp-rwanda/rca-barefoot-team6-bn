import { Router } from 'express';
import { getMostTravelledDestinations } from '../controllers/destinationController';

const router = Router();

router.get('/most-travelled/:level', getMostTravelledDestinations);

export default router;
