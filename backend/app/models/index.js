import User from './User.js';
import Event from './Event.js';
import Article from './Article.js';
import sequelize from '../config/database.js';

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
});
User.belongsToMany(Article, {
  through: 'user_has_event_has_article',
  foreignKey: 'user_id',
  as: 'userArticles',  // User.findOne({ include: 'userArticles' })
});
Event.belongsToMany(Article, {
  through: 'user_has_event_has_article',
  foreignKey: 'event_id',
  as: 'eventArticles',  // Event.findOne({ include: 'articles' })
});
Article.belongsToMany(Event, {
  through: 'user_has_event_has_article',
  foreignKey: 'article_id',
});

export {
  User,
  Event,
  Article,
  sequelize,
};
