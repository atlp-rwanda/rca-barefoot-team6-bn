"use strict";
import { Model, DataTypes, ForeignKeyConstraintError } from "sequelize";
import { sequelize } from "../config/db";

class Hotel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
    Hotel.hasMany(models.Room)
  }
}

const hotelObj = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  province:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  district:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  sector:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  cell:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  village:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  coordinates:{
    type: DataTypes.JSONB,
    allowNull: false,
    defaultValue: {},
    validate: {
      isObject: function(value) {
        if (typeof value !== 'object') {
          throw new Error('Coordinates must be an object');
        }
      },
      hasLatitude: function(value) {
        if (!value.hasOwnProperty('latitude')) {
          throw new Error('Coordinates object must have a latitude property');
        }
      },
      hasLongitude: function(value) {
        if (!value.hasOwnProperty('longitude')) {
          throw new Error('Coordinates object must have a longitude property');
        }
      }
    }
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
};

Hotel.init(hotelObj, {
  sequelize,
  modelName: "Hotels",
});

sequelize.sync();
// export the model
export default Hotel;