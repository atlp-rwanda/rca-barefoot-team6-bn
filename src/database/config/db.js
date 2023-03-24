<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
import { Sequelize } from 'sequelize';
require('dotenv').config();

// Create a new Sequelize instance with the required configuration
const sequelize = new Sequelize(process.env.DEV_DATABASE_URL, {
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
  dialect: 'postgres',
  logging: false
=======
    dialect: 'postgres',
    logging: false,
>>>>>>> 6599e8e (User Registration and Email Verification)
});

// Define the connectDB function
const connectDB = async () => {
<<<<<<< HEAD
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
=======
    try {
        await sequelize.authenticate();
        console.log('✅ Database connection has been established successfully.');
    } catch (error) {
        console.error('❌ Unable to connect to the database:', error);
    }
>>>>>>> 6599e8e (User Registration and Email Verification)
};

// Export the connectDB function as the default export
export default connectDB;

// Export the sequelize instance as a named export
export { sequelize };
=======
const Sequelize = require('sequelize');
=======
import { Sequelize } from 'sequelize';
>>>>>>> 5b90360 (User Register Works and refactoring)
require('dotenv').config();

// Create a new Sequelize instance with the required configuration
const sequelize = new Sequelize(process.env.DEV_DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
=======
  dialect: 'postgres',
  logging: false
>>>>>>> 962e3ca (ft(Reset-Password): request changing pass via email [Inprogress # 184638375])
=======
  dialect: 'postgres',
  logging: false
>>>>>>> 8d74a26 (feat: project structure initialization)
});

// Define the connectDB function
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Database connection has been established successfully.');
  } catch (error) {
    console.error('❌ Unable to connect to the database:', error);
  }
};

<<<<<<< HEAD
<<<<<<< HEAD
module.exports = {
    connectDB, sequelize, Sequelize
}
>>>>>>> 9529301 (feat(user): implement user registration)
=======
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
// Export the connectDB function as the default export
export default connectDB;

// Export the sequelize instance as a named export
export { sequelize };
<<<<<<< HEAD
>>>>>>> 5b90360 (User Register Works and refactoring)
=======
>>>>>>> 8d74a26 (feat: project structure initialization)
