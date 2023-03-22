/* eslint-disable no-unused-vars */
import express, {
  json
} from 'express';
import dotenv from 'dotenv'; // Using require
import roomRoute from './routes/roomRoute';
import passport from 'passport';
import session from 'express-session';

// all routes
import routes from './routes';

// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';
const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
// configure session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 // 1 week
  }
}));
// initializing passport must come after session configuration otherwise it won't work
app.use(passport.initialize());
app.use(passport.session());

app.use(json());

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

// all apis
app.use('/api', routes);
app.use('/api/rooms', roomRoute);
app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
