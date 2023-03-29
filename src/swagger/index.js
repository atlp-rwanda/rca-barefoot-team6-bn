import dotenv from 'dotenv';

import hello from './hello';
import user from './user';
import request from './request';
import hotel from './hotel';
import room from './room';
import auth from './auth';

dotenv.config();

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];

const paths = {
  ...hello,
  ...user,
  ...hotel,
  ...room,
  ...request,
  ...auth
  //   add other defined apis here
};

const config = {
  swagger: '2.0',
  info: {
    description: 'Barefoot Normard Unflappables APIs',
    version: '1.0.0',
    title: 'Unflappables Team'
  },
  host,
  basePath: ['/api/'],
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  },
  tags: [{
    name: 'Hello',
    description: 'Example Api'
  },
  {
    name: 'User',
    description: 'User Api'
  },
  {
    name: 'Auth',
    description: 'Authentication Api'
  }
    // Add other tags here
  ],
  paths,
  definitions: {
    LoginInfo: {
      type: 'object',
      properties: {
        email: {
          type: 'string',
          example: 'admin@example.com'
        },
        password: {
          type: 'string',
          example: 'admin123!'
        }
      }
    },
    User: {
      type: 'object',
      properties: {
        role: {
          type: 'string',
          example: 'USER'
        },
        firstName: {
          type: 'string',
          example: 'string'
        },
        lastName: {
          type: 'string',
          example: 'string'
        },
        email: {
          type: 'string',
          example: 'string'
        },
        password: {
          type: 'string',
          example: 'string'
        }
      }
    },
    Request: {
      type: 'object',
      properties: {
        status: {
          type: 'string',
          example: 'PENDING',
          required: true
        }
      }
    },
    Hotel: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "The Grand Hotel"
        },
        email: {
          type: "string",
          example: "reservations@thegrandhotel.com"
        },
        address: {
          type: "string",
          example: "123 Main St, City, State"
        },
        website: {
          type: "string",
          example: "https://www.luxuryinn.com"
        }
      }
    },
    Room: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Stunning Room"
        },
        description: {
          type: "string",
          example: "Well-organised room"
        },
        maxAccomodate: {
          type: "integer",
          example: "2"
        },
        floor: {
          type: "integer",
          example: "4"
        },
        roomType: {
          type: "string",
          example: "SINGLE"
        }
      }
    }
  }
};
export default config;
