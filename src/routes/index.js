import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
<<<<<<< HEAD
import destination from './destinationRoute';
import request from './requestRoute'
=======
import feeback from './feedbackRoute'
>>>>>>> 9100c9a (ft: feedbacks)

const router = express.Router();
router.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

router.use('/users', user);
router.use('/hotels', hotel);
<<<<<<< HEAD
router.use('/destinations', destination);
router.use('/requests', request);
=======
router.use('/feedback', feeback);
>>>>>>> 9100c9a (ft: feedbacks)

export default router;
