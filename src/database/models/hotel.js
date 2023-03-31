'use strict';
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';

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
    primaryKey: true,
    primaryKey: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false
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
  province: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cell: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  village: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  coordinates: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true,
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  province: {
    type: DataTypes.STRING,
    allowNull: true
  },
  district: {
    type: DataTypes.STRING,
    allowNull: true
  },
  sector: {
    type: DataTypes.STRING,
    allowNull: true
  },
  cell: {
    type: DataTypes.STRING,
    allowNull: true
  },
  village: {
    type: DataTypes.STRING,
    allowNull: true
  },
  coordinates: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: true
  }
};

Hotel.init(hotelObj, {
  sequelize,
  modelName: 'Hotels'
});

sequelize.sync();
// export the model
export default Hotel;
