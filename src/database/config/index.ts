import { Sequelize } from "sequelize";
import {config} from 'dotenv'

config();

const DB_URL: string | undefined = process.env.NODE_ENV === 'dev' ? process.env.DEV_DATABASE_URL : 
                       process.env.NODE_ENV === 'prod' ? process.env.PROD_DATABASE_URL : process.env.TEST_DATABASE_URL;

export const sequelizedb: Sequelize = new Sequelize(DB_URL as string, {
    dialect: "postgres",
    protocol: "postgres",
    logging: false,
});

// the code below will connect to the database
export const connectDB = async () => {
    try {
        sequelizedb.authenticate();
        sequelizedb.sync().then(() => {
            console.log('Synced with the databse')
        }).catch((err) => {
            console.error('Failed to sync to the database', err)
        })
        console.log("Connected to database successfully");
    } catch (err) {
        console.error("Failed to connect to the database :", err);
    }
};


