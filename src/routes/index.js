import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
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
router.use('/feedback', feeback);

export default router;
