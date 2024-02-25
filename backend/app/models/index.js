import User from './User.js';
import Event from './Event.js';
import Article from './Article.js';
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

User.hasMany(Participation, {
  as: 'participatedEvents',
  foreignKey: 'userId',
});
Participation.belongsTo(User, {
  as: 'participant',
  foreignKey: 'userId',
});

Article.hasMany(Participation, {
  as: 'participatedEvents',
  foreignKey: 'articleId',
});
Participation.belongsTo(Article, {
  as: 'article',
  foreignKey: 'articleId',
});

Event.hasMany(Participation, {
  as: 'participants',
  foreignKey: 'eventId',
});
Participation.belongsTo(Event, {
  as: 'event',
  foreignKey: 'eventId',
});

export {
  User,
  Event,
  Article,
  sequelize,
};
