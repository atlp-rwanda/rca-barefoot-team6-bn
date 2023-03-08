import dotenv from "dotenv";

import hello from "./hello";
import user from "./user";

dotenv.config();

const host =
  process.env.NODE_ENV === "production"
    ? process.env.BASE_URL.split("https://")[1]
    : process.env.BASE_URL.split("http://")[1];

const paths = {
  ...hello,
  ...user,
  //   add other defined apis here
};

const config = {
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
    // Add other tags here
  ],
  paths,
  definitions: {
    User: {
      type: 'object',
      properties: {
        id: {
          type: 'number',
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
};
export default config;
