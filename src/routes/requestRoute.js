import { Router } from 'express';
import { createRequest, updateRequest } from '../controllers/requestController';
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

export default router