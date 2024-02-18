import User from './User.js';
import Event from './Event.js';
import List from './List.js';
import Article from './Article.js';

// User <-> Event   => N:N
User.belongsToMany(Event, {
  through: 'user_has_event',
  foreignKey: 'user_id',
  otherKey: 'event_id',
  as: 'parties', // User.findAll({ include: 'parties})
});
Event.belongsToMany(User, {
  through: 'user_has_event',
  foreignKey: 'event_id',
  otherKey: 'user_id',
  as: 'participants', // Event.findAll({ include: 'participants'})
});
// User <-> Event   => 1:N
User.hasMany(Event, {
  foreignKey: 'author_id',
  as: 'events', // User.findAll({ include: 'events'})
});
Event.belongsTo(User, {
  foreignKey: 'author_id',
  as: 'author', // Event.findAll({ include: 'author'})
});

// Event <-> List   => 1:N
Event.hasMany(List, {
  foreignKey: 'list_event_id',                                         //= =====> voir pour autre nom
  as: 'lists_events', // Event.findAll({ include: 'lists_events'})
});
List.belongsTo(Event, {
  foreignKey: 'list_event_id',                                         //= ====> voir pour autre nom
  as: 'events_lists,', // List.findAll({ include: 'events_lists'})     //=====> voir pour autre nom
});

// List <-> Article => N:N
List.belongsToMany(Article, {
  through: 'list_has_article',
  foreignKey: 'list_id',
  otherKey: 'article_id',
  as: 'articles', // List.findAll({ include: 'articles'})
});
Article.belongsToMany(List, {
  through: 'list_has_article',
  foreignKey: 'article_id',
  otherKey: 'list_id',
  as: 'lists', // Article.findAll({ include: 'lists'})
});

export {
  User,
  Event,
  List,
  Article,
};
