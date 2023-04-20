import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
import request from './requestRoute'
import feeback from './feedbackRoute'

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/hotels', hotel);
router.use('/requests', request);
router.use('/feedback', feeback);

export default router;
