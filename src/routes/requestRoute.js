import { Router } from 'express';
import RequestController from '../controllers/requestController';

const router = Router();

router.post('/', RequestController.createRequest);
router.get('/', RequestController.getAllRequests);
router.get('/:id', RequestController.getRequestById);
router.get('/user/:userId', RequestController.getRequestsByUserId);
router.get('/room/:roomId', RequestController.getRequestsByRoomId);
router.get('/filter', RequestController.filterRequestsByParams)
router.patch('/:id', RequestController.updateRequest);
router.delete('/:id', RequestController.deleteRequest);

export default router;
