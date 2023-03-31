import { Router } from 'express';
import RequestController from '../controllers/requestController';
import { isAuthorized, isLoggedIn } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', isLoggedIn, RequestController.createRequest);
router.get('/', RequestController.getAllRequests);
router.get('/:id', RequestController.getRequestById);
router.get('/user/:userId', RequestController.getRequestsByUserId);
router.get('/room/:roomId', RequestController.getRequestsByRoomId);
router.get('/hotel/:hotelId', isLoggedIn, RequestController.getRequestsByHotelId)
router.get('/filter', RequestController.filterRequestsByParams)
router.patch('/:id', isLoggedIn, RequestController.updateRequest);
router.patch('/approve/:id', isLoggedIn, isAuthorized('MANAGER'), RequestController.approveRequest);
router.patch('/reject/:id', isLoggedIn, isAuthorized('MANAGER'), RequestController.rejectRequest);
router.patch('/cancel/:id', isLoggedIn, isAuthorized('MANAGER'), RequestController.cancelRequest)
router.delete('/:id', RequestController.deleteRequest);

export default router;
