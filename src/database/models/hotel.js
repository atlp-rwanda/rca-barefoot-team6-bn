"use strict";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";

class Hotel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate(models) {
    // define association here
  }
}

const hotelObj = {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
<<<<<<< HEAD
    primaryKey: true
=======
    primaryKey: true,
>>>>>>> dcd4ac1cc11e2988d541d4c0e1d9702cf6930126
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
<<<<<<< HEAD
=======
  province:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  district:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  sector:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  cell:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  village:{
    type: DataTypes.STRING,
    allowNull: true,
  },
  coordinates: {
    type: DataTypes.STRING,
    allowNull: true,
  },
>>>>>>> dcd4ac1cc11e2988d541d4c0e1d9702cf6930126
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
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
