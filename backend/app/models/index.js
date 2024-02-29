import User from './User.js';
import Event from './Event.js';
import Object from './Object.js';
import sequelize from '../config/database.js';

// Liaison ternaire entre User, Event et Besoin
const Participation = sequelize.define('Participation', {
  // Ajoutez d'autres attributs si nécessaire
});

// Liaisons 1N entre User et Event
User.hasMany(Event, {
  as: 'createdEvents',
  foreignKey: 'authorId',
});
Event.belongsTo(User, {
  as: 'author',
  foreignKey: 'authorId',
});

User.belongsToMany(Event, {
  through: Participation,
  as: 'participatedEvents',
  foreignKey: 'userId',
});
Event.belongsToMany(User, {
  through: Participation,
  as: 'participants',
  foreignKey: 'eventId',
});

export {
  User,
  Event,
  Object,
  sequelize,
};
