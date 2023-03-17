import express, {
  json
} from 'express';
import routes from './routes';
import session from 'express-session';
import Passport from './routes/userRoutes';

require('dotenv').config();

const app = express();
const { passport } = Passport;

app.use(json())

// enable passport
app.use(passport.initialize());
app.use(passport.session());

// enable session
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}));

const db = require('./database/models/index');

db.sequelize.sync()
  .then(() => {
    console.log('Synced with database');
  })
  .catch((err) => {
    console.log('Error syncing with database', err);
  });

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

app.use('/api', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
