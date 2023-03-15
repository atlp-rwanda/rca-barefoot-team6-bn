import express, {
  json
} from 'express';
const userRoute = require('./routes/userRoute');

const app = express();
require('dotenv').config();
app.use(json())

const PORT = process.env.PORT || 3000;

app.use('/api/users', userRoute);
// const db = require('./database/models/index');
const { connectDB, sequelize } = require('./database/config/db');


app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

app.listen(PORT, async () => {
  console.log(`App listening at port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
}
)
