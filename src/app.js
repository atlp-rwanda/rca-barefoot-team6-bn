/* eslint-disable no-unused-vars */
import express, {
  json
} from 'express';
import dotenv from 'dotenv'; // Using require
import userRoute from './routes/userRoute';
import hotelRoute from './routes/hotelRoute';
import feedbackRoute from './routes/feedbackRoute';
// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';

const cors = require('cors');

const { Swaggiffy } = require('swaggiffy');

const app = express();
dotenv.config();
new Swaggiffy().setupExpress(app).swaggiffy();

app.use(json())
app.use(cors());
app.use('/api/users', userRoute);
app.use('/api/feedback', feedbackRoute);
app.use('/api/hotel', hotelRoute);

const PORT = process.env.PORT || 3000;

const db = require('./database/models/index');

db.sequelize?.sync()
  .then(() => {
    console.log('Synced with database');
  })
  .catch((err) => {
    console.log('Error syncing with database', err);
  });

app.get('/api/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
