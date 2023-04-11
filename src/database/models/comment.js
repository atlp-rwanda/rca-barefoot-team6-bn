'use strict'
import { Model, DataTypes } from 'sequelize';
import User from './user';
import Request from './request';
import { sequelize } from '../config/db';
import dotenv from 'dotenv';
dotenv.config();
class Comment extends Model {
  /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
  static associate (models) {
    // define association here
  }
};
const commentObj = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comment_text: {
    type: DataTypes.STRING,
    allowNull: false
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false
  },
  request_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Request,
      key: 'id'
    }
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },
  parent_comment_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: Comment,
      key: 'id'
    }
  },
  is_deleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
};

Comment.init(commentObj, {
  sequelize,
  modelName: 'Comments'
});
Comment.addHook('beforeCreate', (comment) => {
  // Set the timestamp columns to the current time
  comment.timestamp = new Date();
  comment.is_deleted = false;
});

// define the relationships
Comment.belongsTo(User, { foreignKey: 'user_id' });
Comment.belongsTo(Request, { foreignKey: 'request_id' });
Comment.belongsTo(Comment, { foreignKey: 'parent_comment_id' });

sequelize.sync();
// export the model
export default Comment;
