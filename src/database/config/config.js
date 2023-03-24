<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
require('dotenv').config();

export const development = {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres'
};
export const test = {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres'
};
export const production = {
  url: process.env.PROD_DATABASE_URL,
  dialect: 'postgres'
};
<<<<<<< HEAD
<<<<<<< HEAD
=======
const DEV_DATABASE_URL = ''
=======
const DEV_DATABASE_URL = 'postgres://pguser:pguser2@localhost:5432/postgres'
>>>>>>> 9529301 (feat(user): implement user registration)
const TEST_DATABASE_URL = ''
const DATABASE_URL = 'postgres://pguser:pguser2@localhost:5432/postgres'
=======
require('dotenv').config();
>>>>>>> 262bffb (chore: env file setup and database variables)

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: 'postgres'
  },
  test: {
    url: process.env.TEST_DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: process.env.PROD_DATABASE_URL,
    dialect: 'postgres'
  }
}
>>>>>>> 32936ce (chore: postgres and sequelize orm setup)
=======
require('dotenv').config();

export const development = {
  url: process.env.DEV_DATABASE_URL,
  dialect: 'postgres'
};
export const test = {
  url: process.env.TEST_DATABASE_URL,
  dialect: 'postgres'
};
export const production = {
  url: process.env.PROD_DATABASE_URL,
  dialect: 'postgres'
};
>>>>>>> 6599e8e (User Registration and Email Verification)
=======
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
