<<<<<<< HEAD
'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
=======
"use strict";
import { Model, DataTypes } from "sequelize";
import { sequelize } from "../config/db";
>>>>>>> 27815fd (feat: create CRUD operations for hotels)

class Hotel extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
<<<<<<< HEAD
  static associate (models) {
=======
  static associate(models) {
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
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
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
  },
  name: {
    type: DataTypes.STRING,
    unique: false,
<<<<<<< HEAD
    allowNull: false
=======
    allowNull: false,
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
  },
  address: {
    type: DataTypes.STRING,
    unique: false,
<<<<<<< HEAD
    allowNull: false
=======
    allowNull: false,
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
<<<<<<< HEAD
    allowNull: false
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
=======
    allowNull: false,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true,
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
<<<<<<< HEAD
    defaultValue: true
  }
=======
    defaultValue: true,
  },
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
};

Hotel.init(hotelObj, {
  sequelize,
<<<<<<< HEAD
  modelName: 'Hotels'
=======
  modelName: "Hotels",
>>>>>>> 27815fd (feat: create CRUD operations for hotels)
});

sequelize.sync();
// export the model
export default Hotel;
