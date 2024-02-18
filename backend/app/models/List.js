import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class List extends Model {}

List.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'list',
});

export default List;
