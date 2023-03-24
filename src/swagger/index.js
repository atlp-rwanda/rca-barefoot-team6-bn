<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import dotenv from 'dotenv';

import hello from './hello';
import user from './user';
<<<<<<< HEAD
=======
import dotenv from "dotenv";

import hello from "./hello";
import user from "./user";
>>>>>>> 5aef2c6 (swagger)
=======
import dotenv from 'dotenv';

import hello from './hello';
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)

dotenv.config();

const host =
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
  process.env.NODE_ENV === 'production'
    ? process.env.BASE_URL.split('https://')[1]
    : process.env.BASE_URL.split('http://')[1];

const paths = {
<<<<<<< HEAD
<<<<<<< HEAD
  ...hello,
  ...user
=======
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL.split("https://")[1]
    : process.env.BASE_URL.split("http://")[1];

const paths = {
  ...hello,
  ...user,
>>>>>>> 5aef2c6 (swagger)
=======
  ...hello,
  ...user
>>>>>>> 8d74a26 (feat: project structure initialization)
  //   add other defined apis here
};

const config = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
  ...hello
//   add other defined apis here
};

const config = {
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
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
<<<<<<< HEAD
<<<<<<< HEAD
    { name: 'Hello', description: 'Example Api' },
    { name: 'User', description: 'User Api' }
<<<<<<< HEAD
=======
  swagger: "2.0",
  info: {
    description: "Barefoot Normard Unflappables APIs",
    version: "1.0.0",
    title: "Unflappables Team",
  },
  host,
  basePath: ["/api/"],
  schemes: ["http", "https"],
  securityDefinitions: {
    JWT: {
      type: "apiKey",
      name: "Authorization",
      in: "header",
    },
  },
  tags: [
    { name: "Hello", description: "Example Api" },
    { name: "User", description: "User Api" },
>>>>>>> 5aef2c6 (swagger)
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
    { name: 'Hello', description: 'Example Api' },
    { name: 'User', description: 'User Api' }
>>>>>>> 8d74a26 (feat: project structure initialization)
    // Add other tags here
  ],
  paths,
  definitions: {
    User: {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
      type: 'object',
      properties: {
        id: {
          type: 'number',
          example: 0,
          required: true
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
        },
        resetPasswordToken: {
          type: 'string',
          example: 'string'
        },
        resetPasswordExpires: {
          type: 'timestamp',
          example: 'string'
        },
        emailVerificationToken: {
          type: 'string',
          example: 'string'
        },
        isEmailVerified: {
          type: 'boolean',
          example: false
        }
      }
    }
  }
<<<<<<< HEAD
=======
      type: "object",
      properties: {
        id: {
          type: "number",
          example: 0,
          required: true,
        },
        firstName: {
          type: "string",
          example: "string",
        },
        lastName: {
          type: "string",
          example: "string",
        },
        email: {
          type: "string",
          example: "string",
        },
        password: {
          type: "string",
          example: "string",
        },
        emailVerificationToken: {
          type: "string",
          example: "string",
        },
        isEmailVerified: {
          type: "boolean",
          example: false,
        },
      },
    },
  },
>>>>>>> 5aef2c6 (swagger)
=======
    { name: 'Hello', description: 'Example Api' }
    // Add other tags here
  ],
  paths
>>>>>>> 07583c9 (feat: documentation from using openAPI to using JS)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
};
export default config;
