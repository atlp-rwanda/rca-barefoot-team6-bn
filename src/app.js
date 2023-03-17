import express, {
  json
} from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';
<<<<<<< HEAD
import hotelRoute from './routes/hotelRoute';

// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';
=======

// swagger
import swaggerUI from 'swagger-ui-express';

// api docs
import apiDoc from './swagger';
>>>>>>> 9207d9a (feat: added swagger documentation with openain)

const app = express();
dotenv.config();

app.use(json())
app.use('/api/users', userRoute);
<<<<<<< HEAD
app.use('/api/hotels', hotelRoute);

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
=======

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
>>>>>>> 9207d9a (feat: added swagger documentation with openain)
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));
<<<<<<< HEAD
app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
=======

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
>>>>>>> 9207d9a (feat: added swagger documentation with openain)
