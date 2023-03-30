'use strict'
import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../config/db';
import { config } from 'dotenv';

config();
class Feedback extends Model {
  /**
   * Helper method for defining associations.
   * This method is not a part of Sequelize lifecycle.
   * The `models/index` file will call this method automatically.
   */
  static associate (models) {
    // define association here
  }
};
Feedback.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Users',
      key: 'id'
    }
  },
  hotelId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Hotels',
      key: 'id'
    }
  },
  subject: {
    type: DataTypes.STRING,
    allowNull: false
  },
  feedback: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Feedbacks'
});

sequelize.sync();

// export the model
export default Feedback;
