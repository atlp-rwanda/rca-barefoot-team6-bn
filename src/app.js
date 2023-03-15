import express, {
  json
} from 'express';

const app = express();
require('dotenv').config();

app.use(json())

const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
