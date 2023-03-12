const express = require('express')

const { Swaggiffy } = require('swaggiffy') // Using require

const app = express()
const port = 3000;
<<<<<<< HEAD

// Build Swaggiffy with our express app.
new Swaggiffy().setupExpress(app).swaggiffy()
=======
>>>>>>> 7ff185b (chore(Eslint):updated format rules [Continuation # 184638361])

app.get('/', (req, res) => {
  res.send('Hello World!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
