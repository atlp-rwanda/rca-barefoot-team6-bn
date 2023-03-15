const Sequelize = require('sequelize');
require('dotenv').config();
// const config = require('./config');
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'postgres'
});

async function connectDB() {
    try {
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = {
    connectDB, sequelize, Sequelize
}
