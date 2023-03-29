import { Router } from 'express';
import { createRequest, getRequests, updateRequest } from '../controllers/requestController';
import { isLoggedIn } from '../middlewares/authMiddleware'
const router = Router();

// @route  POST /requests
// @desc   Create a new request
// @access Private
router.post('/:room_id', isLoggedIn, createRequest);

// @route  PUT /requests/:id
// @desc   Update an existing request
// @access Private
// validateRequestFn
router.put('/:id', isLoggedIn, updateRequest);
router.get('/', isLoggedIn, getRequests);

export default router