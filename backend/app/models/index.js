import User from './User.js';
import Event from './Event.js';
import Object from './Object.js';
import EventUser from './EventUser.js';
import ObjectEventUser from './ObjectEventUser.js';
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
});
User.belongsToMany(Event, {
  through: EventUser,
  as: 'eventsParticipated',
  foreignKey: 'userId',
});
EventUser.belongsTo(Event);
EventUser.belongsTo(User);
Event.hasMany(EventUser);
User.hasMany(EventUser);

// liaison entre EventUser et Obejet pour definir les besoins
Object.belongsToMany(EventUser, {
  through: ObjectEventUser,
  // as: 'objects',
  // foreignKey: 'objectId',
});
EventUser.belongsToMany(Object, {
  through: ObjectEventUser,
  // as: 'objects',
  // foreignKey: 'userId',
});
ObjectEventUser.belongsTo(Object);
ObjectEventUser.belongsTo(EventUser);
Object.hasMany(ObjectEventUser);
EventUser.hasMany(ObjectEventUser);

export {
  User,
  Event,
  Object,
  EventUser,
  ObjectEventUser,
  sequelize,
};
