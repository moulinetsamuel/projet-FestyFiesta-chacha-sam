import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class ObjectEventUser extends Model {}

ObjectEventUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'object_event_users',
});

export default ObjectEventUser;
