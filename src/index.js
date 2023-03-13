const express = require('express')

const { Swaggiffy } = require('swaggiffy') // Using require

const app = express()
const port = 3000;

// Build Swaggiffy with our express app.
new Swaggiffy().setupExpress(app).swaggiffy()

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
