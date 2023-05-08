import dotenv from 'dotenv';

import hello from './hello';
import user from './user';
import room from './room';
import auth from './auth';
import hotel from './hotel';
import request from './request';

dotenv.config();

const host =
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];

const paths = {
  ...hello,
  ...user,
  ...auth,
  ...hotel,
  ...room,
  ...request
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
  tags: [
    {
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
          example: 'CLIENT'
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
    Room: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'Room 1'
        },
        description: {
          type: 'string',
          example: 'Room description'
        },
        maxAccomodate: {
          type: 'integer',
          example: '2'
        },
        floor: {
          type: 'integer',
          example: '2'
        },
        roomType: {
          type: 'string',
          example: 'SINGLE'
        }
      }
    },
    Hotel: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          example: 'The Grand Hotel'
        },
        email: {
          type: 'string',
          example: 'reservations@thegrandhotel.com'
        },
        address: {
          type: 'string',
          example: '123 Main St, City, State'
        },
        province: {
          type: 'string',
          example: 'Kigali'
        },
        district: {
          type: 'string',
          example: 'Gasabo'
        },
        sector: {
          type: 'string',
          example: 'Kacyiru'
        },
        cell: {
          type: 'string',
          example: 'Kamatamu'
        },
        village: {
          type: 'string',
          example: 'Karukina'
        },
        coordinates: {
          type: 'object',
          properties: {
            latitude: {
              type: 'number',
              example: 37.7749
            },
            longitude: {
              type: 'number',
              example: -122.4194
            }
          }
        },
        website: {
          type: 'string',
          example: 'https://www.luxuryinn.com'
        }
      }
    },
    Request: {
      type: 'object',
      properties: {
        roomId: {
          type: 'integer',
          example: 1
        },
        checkIn: {
          type: 'string',
          example: '2020-01-01'
        },
        checkOut: {
          type: 'string',
          example: '2020-01-01'
        },
        status: {
          type: 'string',
          example: 'PENDING'
        }
      }
    }
  }
};
export default config;
