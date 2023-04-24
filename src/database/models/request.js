'use strict'
<<<<<<< HEAD
import { Model, DataTypes } from 'sequelize';
=======
import { Model, DataTypes, Sequelize } from 'sequelize';
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
import User from './user';
import Room from './room';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
import REQUESTS_ENUM from '../enums/request';
dotenv.config();
class Request extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
<<<<<<< HEAD
  static associate (models) {
=======
  static associate(models) {
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
    // define association here
  }
};
const requestObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  checkIn: {
    type: DataTypes.DATE,
    allowNull: true
  },
  checkOut: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    type: DataTypes.ENUM(REQUESTS_ENUM.APPROVED, REQUESTS_ENUM.CANCELLED, REQUESTS_ENUM.PENDING, REQUESTS_ENUM.REJECTED),
    defaultValue: REQUESTS_ENUM.PENDING
  },
  roomId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'id'
    }
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  }
};

Request.init(requestObj, {
  sequelize,
  modelName: 'Requests'
});

Request.belongsTo(User);
Request.belongsTo(Room);

sequelize.sync();
// export the model
export default Request;
