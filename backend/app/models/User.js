import { Model, DataTypes } from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config/database.js';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  lastname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  email: {
    type: DataTypes.TEXT,
    allowNull: false,
    unique: true,
  },

  password: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

}, {
  sequelize,
  tableName: 'users',
});

User.beforeCreate(async (user) => {
  const hash = await bcrypt.hash(user.password, parseInt(process.env.NB_OF_SALT_ROUNDS, 10));
  // eslint-disable-next-line no-param-reassign
  user.password = hash;
});

User.beforeUpdate(async (user) => {
  if (user.password) {
    const hash = await bcrypt.hash(user.password, parseInt(process.env.NB_OF_SALT_ROUNDS, 10));
    // eslint-disable-next-line no-param-reassign
    user.password = hash;
  }
});

User.checkPassword = async (password, hash) =>  bcrypt.compare(password, hash);

export default User;
