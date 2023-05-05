import express, {
  json
} from 'express';
import cors from 'cors'
import dotenv from 'dotenv'; // Using require
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

// cors
app.use(cors());

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

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// add this middleware function before your routes
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'], // Allow specific HTTP methods
  allowedHeaders: ['Access-Control-Allow-Headers', 'Content-Type', 'Authorization'] // Allow specific headers
}));

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));
// all apis
app.use('/api', routes);
// cors

app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
