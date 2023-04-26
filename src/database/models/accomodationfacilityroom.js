'use strict';
import { Model, DataTypes } from 'sequelize';
import AccommodationFacility from './accommodationfacility';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class AccomodationFacilityRoom extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The
   *  `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
}

const accomodationFacilityRoomObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  accomodationFacilityRoomType: {
    type: DataTypes.ENUM('PRESIDENTIAL', 'SINGLE', 'DOUBLE_ROOM'),
    allowNull: false
  },
  accomodationFacility_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: AccomodationFacilityRoom,
      key: 'id'
    }
  }
};

AccomodationFacilityRoom.init(accomodationFacilityRoomObj, {
  sequelize,
  modelName: 'AccomodationFacilityRooms'
});

AccomodationFacilityRoom.belongsTo(AccommodationFacility);

sequelize.sync();
// export the model
export default AccomodationFacilityRoom;
