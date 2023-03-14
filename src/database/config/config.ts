import { Sequelize } from 'sequelize';
import { DBConfigType } from '../../types/index';

const DEV_DATABASE_URL: string = ''
const TEST_DATABASE_URL: string = ''
const DATABASE_URL: string = ''

class DBConfig {
  static development: DBConfigType = {
    url: DEV_DATABASE_URL,
    dialect: 'postgres'
  };
  
  static test: DBConfigType =  {
    url: TEST_DATABASE_URL,
    dialect: 'postgres'
  };
  
  static production: DBConfigType = {
    url: DATABASE_URL,
    dialect: 'postgres'
  }
}

export const sequelizeConnection: Sequelize = new Sequelize(DBConfig.development.url, {
  dialect: DBConfig.development.dialect
})
