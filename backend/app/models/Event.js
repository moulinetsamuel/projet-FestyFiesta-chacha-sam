import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Event extends Model {}

Event.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  place: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'event',
});

export default Event;
