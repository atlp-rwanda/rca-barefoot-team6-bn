const express = require('express');
// const sendEmail = require('./utils/sendEmail');
const app = express()
const User = require('./database/models/user');
const port = 3000;
const { connectDB, sequelize } = require('./database/config/db');
const { urlencoded, json } = require('body-parser');
app.use(urlencoded({ extended: false }));
app.use(json());

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, async () => {
  console.log(`Example app listening on port ${port}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
})