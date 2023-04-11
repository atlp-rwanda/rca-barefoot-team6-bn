import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
import comment from './commentRoute';

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/hotels', hotel);
router.use('/comments', comment)

export default router;
