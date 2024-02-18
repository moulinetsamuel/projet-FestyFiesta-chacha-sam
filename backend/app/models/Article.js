import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

class Article extends Model {}

Article.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.TEXT,
  },
});
