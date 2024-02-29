import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Object extends Model {}

Object.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.TEXT,
  },
}, {
  sequelize,
  tableName: 'objects',
});

export default Object;
