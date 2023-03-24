import express, {
<<<<<<< HEAD
<<<<<<< HEAD
  json
} from 'express';

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
  json
} from 'express';

>>>>>>> 8d74a26 (feat: project structure initialization)
// swagger
import swaggerUI from 'swagger-ui-express';
// api docs
import apiDoc from './swagger';
import connectDB, { sequelize } from './database/config/db';

<<<<<<< HEAD
=======
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import connectDB, { sequelize } from './database/config/db';

>>>>>>> c977833 (feat: added swagger documentation with openain)
=======
// swagger
import swaggerUI from 'swagger-ui-express';

// api docs
import apiDoc from './swagger';

>>>>>>> e42879e (feat: added swagger documentation with openain)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
const app = express();
require('dotenv').config();

app.use(json())
<<<<<<< HEAD
<<<<<<< HEAD
const userRoute = require('./routes/userRoute').default;
app.use('/api/users', userRoute);
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

<<<<<<< HEAD
// swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Barefoot-nomad unflappables APIs',
      version: '1.0.0',
      description: 'This is the documentation for Barefoot-nomad unflappables APIs',
      contact: {
        name: 'API Support',
        url: 'https://rca-barefoot-team-6-bn.onrender.com/',
        email: 'phelixdusengimana@gmail.com'
      },
      servers: [{
        url: 'http://localhost:3000',
        description: 'Local Host Documentations'
      },
      {
        url: 'https://rca-barefoot-team-6-bn.onrender.com/',
        description: 'Onrender Documentations'
      }]
    }
  },
  apis: ['src/app.js', 'src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

>>>>>>> e42879e (feat: added swagger documentation with openain)
=======
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
const PORT = process.env.PORT || 3000;

<<<<<<< HEAD
=======
=======
app.use('/api/users', userRoute);
// const db = require('./database/models/index');
const { connectDB, sequelize } = require('./database/config/db');

>>>>>>> 72acd8f (Refactoring)

<<<<<<< HEAD
<<<<<<< HEAD
// swagger options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Barefoot-nomad unflappables APIs',
      version: '1.0.0',
      description: 'This is the documentation for Barefoot-nomad unflappables APIs',
      contact: {
        name: 'API Support',
        url: 'https://rca-barefoot-team-6-bn.onrender.com/',
        email: 'phelixdusengimana@gmail.com'
      },
      servers: [{
        url: 'http://localhost:3000',
        description: 'Local Host Documentations'
      },
      {
        url: 'https://rca-barefoot-team-6-bn.onrender.com/',
        description: 'Onrender Documentations'
      }]
    }
  },
  apis: ['src/app.js', 'src/routes/*.js']
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

const PORT = process.env.PORT || 3000;
<<<<<<< HEAD
import connectDB, { sequelize } from './database/config/db';
>>>>>>> 6599e8e (User Registration and Email Verification)
=======

const PORT = process.env.PORT || 3000;
import connectDB, { sequelize } from './database/config/db';
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> c977833 (feat: added swagger documentation with openain)
=======
/**
 * @swagger
 * /:
 *   get:
 *     summary: gets hello world
 *     tags: [Hello]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Server error
 */
>>>>>>> e42879e (feat: added swagger documentation with openain)
=======
const PORT = process.env.PORT || 3000;

>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
app.get('/', async (req, res) => {
=======
app.get('/api/', async (req, res) => {
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
=======
const userRoute = require('./routes/userRoute').default;
app.use('/api/users', userRoute);
const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
>>>>>>> 8d74a26 (feat: project structure initialization)
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));
app.listen(PORT, async () => {
  console.log(`App listening on port ${PORT}`)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
})
<<<<<<< HEAD
=======
app.listen(PORT, async () => {
  console.log(`Example app listening on port ${PORT}`)
=======
app.listen(PORT, async () => {
<<<<<<< HEAD
  console.log(`App listening at port ${PORT}`)
>>>>>>> 72acd8f (Refactoring)
=======
  console.log(`Example app listening on port ${PORT}`)
>>>>>>> 5b90360 (User Register Works and refactoring)
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log('✅Synced database successfully...');
  });
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
})
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
    json
} from 'express';

const app = express();

app.use(json())

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
    res.json({
        status: true,
        message: 'Our node.js app works'
    })
});
=======
// use swagger apis
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDoc));
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
>>>>>>> bb7a807 (parent 93c2e9699990af0ae7059a33874b2361f6f354da)
=======
}
)
>>>>>>> 72acd8f (Refactoring)
=======
})
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
})
>>>>>>> c977833 (feat: added swagger documentation with openain)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
