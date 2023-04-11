'use strict'
import { Model, DataTypes } from 'sequelize';
import User from './user';
import Room from './room';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class Request extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
};
const requestObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  checkin: {
    type: DataTypes.DATE,
    allowNull: true
  },
  checkout: {
    type: DataTypes.DATE,
    allowNull: true
  },
  status: {
    // type: DataTypes.ENUM('PENDING', 'CONFIRMED', 'CLOSED'),
    type: DataTypes.STRING,
    defaultValue: 'PENDING'
  },
  room_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Room,
      key: 'id'
    }
  },
  user_id: {
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
Request.addHook('beforeCreate', (request) => {
  // Set the checkin columns to the current time
  request.checkin = new Date();
});
// Add a hook to update the checkout date when the status changes to CONFIRMED or CLOSED
Request.addHook('beforeUpdate', 'updateCheckoutDate', (request) => {
  if (request.changed('status') && ['CONFIRMED', 'CLOSED'].includes(request.status)) {
    request.checkout = new Date();
  }
});

Request.belongsTo(User, { foreignKey: 'user_id' });
Request.belongsTo(Room, { foreignKey: 'room_id' });

sequelize.sync();
// export the model
export default Request;
