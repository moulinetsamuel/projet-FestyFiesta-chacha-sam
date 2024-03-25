/* eslint-disable no-param-reassign */
import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/database.js';

class RefreshToken extends Model {}

RefreshToken.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  token: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  expiresAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'refresh_tokens',
  hooks: {
    beforeCreate: async (refreshToken) => {
      const hash = await bcrypt.hash(refreshToken.token, parseInt(process.env.NB_OF_SALT_ROUNDS, 10));
      refreshToken.token = hash;
    },

  },
});

export default RefreshToken;
