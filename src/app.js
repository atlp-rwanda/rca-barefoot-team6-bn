import express, {
  json
} from 'express';
import dotenv from 'dotenv'; // Using require
import passport from 'passport';
import session from 'express-session';

// cors
import cors from 'cors';

// all routes
import routes from './routes';

// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';

const app = express();
dotenv.config();

// configure cors
app.use(cors())

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

app.use(json())

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

// all apis
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
