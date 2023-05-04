'use strict'
import { Model, DataTypes, Sequelize } from 'sequelize';
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
  static associate(models) {
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

Request.belongsTo(User, {
  foreignKey: 'userId'
});
Request.belongsTo(Room, {
  foreignKey: 'roomId'
});

sequelize.sync();
// export the model
export default Request;
