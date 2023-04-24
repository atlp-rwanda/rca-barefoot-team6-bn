<<<<<<< HEAD
'use strict'
=======
'use strict';
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7
import { Model, DataTypes } from 'sequelize';
import Hotel from './hotel';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class Room extends Model {
  /**
<<<<<<< HEAD
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The
     *  `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
};
=======
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The
   *  `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
}
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7

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
    type: DataTypes.ENUM('PRESIDENTIAL', 'SINGLE', 'DOUBLE_ROOM'),
    allowNull: false
  },
  hotel_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
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

<<<<<<< HEAD
Room.belongsTo(Hotel)
=======
Room.belongsTo(Hotel);
>>>>>>> ac14e0b60be67f639d6906940bf779a5bcb511a7

sequelize.sync();
// export the model
export default Room;
