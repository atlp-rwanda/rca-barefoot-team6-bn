import express, {
  json
} from 'express';
import connectDB, { sequelize } from './database/config/db';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute';

const app = express();
dotenv.config();

app.use(json())
app.use('/api/users', userRoute);

const PORT = process.env.PORT || 3000;
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
    console.log('✅Synced database successfully...');
  });
})
