const Sequelize = require('sequelize');
require('dotenv').config();
// const config = require('./config');
const sequelize = new Sequelize('postgres', 'pguser2', 'pguser123', {
    host: 'localhost',
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
