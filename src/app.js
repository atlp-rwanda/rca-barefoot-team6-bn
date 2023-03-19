import express, {
  json
} from 'express';

// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
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

// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));
app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
})