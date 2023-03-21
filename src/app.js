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
    console.log('✅Synced database successfully...');
  });
})
