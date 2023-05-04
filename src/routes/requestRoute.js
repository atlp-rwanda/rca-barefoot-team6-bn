import { Router } from 'express';
import RequestController from '../controllers/requestController';
import { isAuthorized, isLoggedIn } from '../middlewares/authMiddleware';

const router = Router();

router.post('/', isLoggedIn, RequestController.createRequest);
router.get('/', isLoggedIn, RequestController.getAllRequests);
router.get('/:id', isLoggedIn, RequestController.getRequestById);
router.get('/user/:userId', isLoggedIn, RequestController.getRequestsByUserId);
router.get('/room/:roomId', isAuthorized, RequestController.getRequestsByRoomId);
router.get('/hotel/:hotelId', isLoggedIn, RequestController.getRequestsByHotelId)
router.get('/filter', isLoggedIn, RequestController.filterRequestsByParams)
router.patch('/:id', isLoggedIn, RequestController.updateRequest);
router.patch('/approve/:id', isLoggedIn, isAuthorized('MANAGER'), RequestController.approveRequest);
router.patch('/reject/:id', isLoggedIn, isAuthorized('MANAGER'), RequestController.rejectRequest);
router.patch('/cancel/:id', isLoggedIn, isAuthorized('CLIENT'), RequestController.cancelRequest)
router.delete('/:id', RequestController.deleteRequest);

export default router;
