'use strict'
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { config } from 'dotenv';

config();
class Token extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
};
Token.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  state: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['active', 'inactive']]
    }
  }
}, {
  sequelize,
  modelName: 'Tokens'
});

sequelize.sync();

// export the model
export default Token;
