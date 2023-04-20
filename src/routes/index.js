import express from 'express';
import user from './userRoute';
import hotel from './hotelRoute';
<<<<<<< HEAD
import destination from './destinationRoute';
import request from './requestRoute'
import feeback from './feedbackRoute'
=======
import request from './requestRoute';
>>>>>>> 0b5820058f81664d642073aa0f252945fa18bf0e

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
