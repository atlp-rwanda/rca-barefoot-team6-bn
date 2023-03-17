import express, {
  json
} from 'express';

// swagger
import swaggerUI from 'swagger-ui-express';

// api docs
import apiDoc from './swagger';

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

app.get('/api/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
