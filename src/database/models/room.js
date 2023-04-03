'use strict'
import { Model, DataTypes } from 'sequelize';
import Hotel from './hotel';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class Room extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The
     *  `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
};

const roomObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  maxAccomodate: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  floor: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  roomType: {
    // type: DataTypes.ENUM('PRESIDENTIAL', 'SINGLE', 'DOUBLE_ROOM'),
    type: DataTypes.STRING,
    allowNull: false
  },
  hotel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'hotel_id',
    references: {
      model: Hotel,
      key: 'id'
    }
  }
};

Room.init(roomObj, {
  sequelize,
  modelName: 'Rooms'
});
// Add a hook to update the checkout date when the status changes to CONFIRMED or CLOSED
Room.addHook('beforeUpdate', 'updateCheckoutDate', (Room) => {
  if (Room.changed('status') && ['CONFIRMED', 'CLOSED'].includes(Room.status)) {
    Room.checkout = new Date();
  }
});

Room.belongsTo(Hotel)

sequelize.sync();
// export the model
export default Room;
