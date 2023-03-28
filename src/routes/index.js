import express from 'express';
import user from './userRoute';
import request from './requestRoute'
import hotel from './hotelRoute';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/requests', request);
router.use('/hotels', hotel);

export default router;
