import express, {
  json
} from 'express';
import dotenv from 'dotenv'; // Using require
import userRoute from './routes/userRoute';
import hotelRoute from './routes/hotelRoute';
import requestRoute from './routes/requestRoute';
import destinationRoute from './routes/destinationRoute';
import roomRoute from './routes/roomRoute';
import accomodationFacilityRoomRoute from './routes/accomodationFacilityRoomRoute';
import accomodationFacilityRoute from './routes/accomodationFacilityRoute';

// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';
const app = express();
dotenv.config();

app.use(json())

app.use('/api/users', userRoute);
app.use('/api/hotels', hotelRoute);
app.use('/api/request', requestRoute);
app.use('/api/destinations', destinationRoute);
app.use('/api/rooms', roomRoute);
app.use('/api/accomodation-facility-rooms', accomodationFacilityRoomRoute);
app.use('/api/accomodation-facilities', accomodationFacilityRoute);

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
