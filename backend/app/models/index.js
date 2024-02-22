import User from './User';
import Event from './Event';
import Article from './Article';
import sequelize from '../config/database';

// User <-> Event ==> 1:N (user:crée event)
User.hasMany(Event, {
  foreignKey: 'author_id',
  as: 'createdEvents',  // User.findAll({ include: 'createdEvents' })
});
Event.belongsTo(User, {
  foreignKey: 'author_id',
  as: 'author',  // Event.findOne({ include: 'author' })
});

// User <-> Event ==> N:N (user: participant)
User.belongsToMany(Event, {
  through: 'user_has_event_has_article',
  foreignKey: 'user_id',
  as: 'participatedEvents',  // User.findAll({ include: 'participatedEvents' })
});
Event.belongsToMany(User, {
  through: 'user_has_event_has_article',
  foreignKey: 'event_id',
  as: 'participants',  // Event.findOne({ include: 'participants' })
});
Article.belongsToMany(User, {
  through: 'user_has_event_has_article',
  foreignKey: 'article_id',
  as: 'authors',  // Article.findOne({ include: 'authors' })
});

export default {
  User,
  Event,
  Article,
  sequelize,
};
