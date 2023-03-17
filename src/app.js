import express, {
  json
} from 'express';

// swagger
import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';

const app = express();
require('dotenv').config();

app.use(json())

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

const db = require('./database/models/index');

db.sequelize.sync()
  .then(() => {
    console.log('Synced with database');
  })
  .catch((err) => {
    console.log('Error syncing with database', err);
  });

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
app.get('/', async (req, res) => {
  res.json({
    status: true,
    message: 'Our node.js app works'
  })
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`))
