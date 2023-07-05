import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';

const User = sequelize.define(
  "users",
  {
    firstName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate:{
        notEmpty: true
      }
    },
    lastName: {
      type: DataTypes.STRING(50),
      allowNull:false,
      validate:{
        notEmpty:true
      }
    },
    email: {
      type:DataTypes.STRING(128),
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
        notEmpty: true
      }
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },
  {
    timestamps: true
  }
);

export default User;