import { sequelizedb } from "../config";
import { DataTypes } from "sequelize";
const User = sequelizedb.define("users", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
});
User.sync();

export default User;