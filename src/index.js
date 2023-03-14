const express = require('express')

const { Swaggiffy } = require('swaggiffy') // Using require

const app = express()
require('dotenv').config();

const port = process.env.PORT || 3000;

const db = require('./database/models/index');

db.sequelize.sync()
  .then(() => {
    console.log('Synced with database');
  })
  .catch((err) => {
    console.log('Error syncing with database', err);
  });

// Build Swaggiffy with our express app.
new Swaggiffy().setupExpress(app).swaggiffy()

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
