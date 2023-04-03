import express from 'express';
import user from './userRoute';
import destination from './destinationRoute';
import hotel from './hotelRoute';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/destinations', destination);
router.use('/hotels', hotel);

export default router;
