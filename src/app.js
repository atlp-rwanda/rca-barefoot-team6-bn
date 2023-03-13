import express, {
  json
} from 'express';
import connectDB, { sequelize } from './database/config/db';

import session from 'express-session';
import passport from 'passport';
import expressSessionSequelize from 'express-session-sequelize';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import AuthRoutes from './routes/authRoutes';

const app = express();

require('dotenv').config();

// Set up session middleware
const SequelizeStore = expressSessionSequelize(session.Store);
const sessionStore = new SequelizeStore({
  db: sequelize,
  checkExpirationInterval: 15 * 60 * 1000, // The interval at which to cleanup expired sessions in milliseconds.
  expiration: 24 * 60 * 60 * 1000 // The maximum age (in milliseconds) of a valid session.
});

// setup session middleware
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  store: sessionStore
}))

// import passport utils
require('./utils/passport')
app.use(passport.initialize());
app.use(passport.session());

// setup cookies
app.use(cookieParser())

// setup cors middleware
app.use(cors());

// Parse incoming form data
app.use(express.urlencoded({ extended: true }));
app.use(json())

// setup routes
app.get('/', async (req, res) => {
  if (req.user) {
    res.json({
      user: req.user
    });
  } else {
    res.status(401).json({
      error: 'Unauthorized'
    });
  }
});

const userRoute = require('./routes/userRoute').default;
app.use('/api/users', userRoute);
app.use('/api/auth', AuthRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
