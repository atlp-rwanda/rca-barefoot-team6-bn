import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
import destination from './destinationRoute';
import request from './requestRoute'

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/hotels', hotel);
router.use('/destinations', destination);
router.use('/requests', request);

export default router;
