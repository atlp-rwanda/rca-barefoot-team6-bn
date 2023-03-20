

import { Sequelize } from 'sequelize';
require('dotenv').config();

// Create a new Sequelize instance with the required configuration
const sequelize = new Sequelize(process.env.DEV_DATABASE_URL, {
    dialect: 'postgres',
    logging: false,
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

// Export the connectDB function as the default export
export default connectDB;

// Export the sequelize instance as a named export
export { sequelize };