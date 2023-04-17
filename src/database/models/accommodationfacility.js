'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class AccommodationFacility extends Model {
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

const accomodationFacilityObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
};

AccommodationFacility.init(accomodationFacilityObj, {
  sequelize,
  modelName: 'accomodationFacility'
});

sequelize.sync();
// export the model
export default AccommodationFacility;
