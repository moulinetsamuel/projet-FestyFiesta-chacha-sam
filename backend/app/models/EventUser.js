import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class EventUser extends Model {}

EventUser.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'event_users',
});

export default EventUser;
