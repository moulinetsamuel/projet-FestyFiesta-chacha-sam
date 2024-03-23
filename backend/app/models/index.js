import User from './User.js';
import Event from './Event.js';
import Object from './Object.js';
import EventUser from './EventUser.js';
import ObjectEventUser from './ObjectEventUser.js';
import RefreshToken from './RefreshToken.js';
import sequelize from '../config/database.js';

// liaison entre user et event pour definir l'author
User.hasMany(Event, {
  as: 'createdEvents',
  foreignKey: 'authorId',
});
Event.belongsTo(User, {
  as: 'author',
  foreignKey: 'authorId',
});

// Super liaison entre event et user pour definir les participants
Event.belongsToMany(User, {
  through: EventUser,
  as: 'participants',
  foreignKey: 'eventId',
  otherKey: 'userId',
});
User.belongsToMany(Event, {
  through: EventUser,
  as: 'eventsParticipated',
  foreignKey: 'userId',
  otherKey: 'eventId',
});
EventUser.belongsTo(Event);
EventUser.belongsTo(User);
Event.hasMany(EventUser);
User.hasMany(EventUser);

// liaison entre EventUser et Objet pour definir les besoins
Object.belongsToMany(EventUser, {
  through: ObjectEventUser,
});
EventUser.belongsToMany(Object, {
  through: ObjectEventUser,
});
ObjectEventUser.belongsTo(Object);
ObjectEventUser.belongsTo(EventUser);
Object.hasMany(ObjectEventUser);
EventUser.hasMany(ObjectEventUser);

// liaison entre event et object
Event.belongsToMany(Object, {
  through: 'ObjectEvent',
  as: 'objects',
  foreignKey: 'eventId',
  otherKey: 'objectId',
});
Object.belongsToMany(Event, {
  through: 'ObjectEvent',
  as: 'events',
  foreignKey: 'objectId',
  otherKey: 'eventId',
});

User.hasMany(RefreshToken, {
  as: 'refreshTokens',
  foreignKey: 'userId',
});
RefreshToken.belongsTo(User, {
  as: 'user',
  foreignKey: 'userId',
});

export {
  User,
  Event,
  Object,
  EventUser,
  ObjectEventUser,
  RefreshToken,
  sequelize,
};
