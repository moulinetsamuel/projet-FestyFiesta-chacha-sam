import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Object extends Model {}

Object.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },

}, {
  sequelize,
  tableName: 'objects',
});

export default Object;
