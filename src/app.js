import express, {
  json
} from 'express';

// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import connectDB, { sequelize } from './database/config/db';

const app = express();
require('dotenv').config();

app.use(json())
const userRoute = require('./routes/userRoute').default;
app.use('/api/users', userRoute);
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
