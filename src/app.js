import express, {
  json
} from 'express';

const app = express();
require('dotenv').config();

app.use(json())
const userRoute = require('./routes/userRoute').default;
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3000;
import connectDB, { sequelize } from './database/config/db';
app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
})