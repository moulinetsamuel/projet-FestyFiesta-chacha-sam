import {
  Event, User, Object, sequelize,
} from './app/models/index.js';

const run = async () => {
  // Je demande à sequelize de créer ma base de données en utilisant les modèles
  await sequelize.sync({ force: true });

  // Je demande à sequelize de creer des utilisateurs
  await User.bulkCreate([
    {
      firstname: 'samuel',
      lastname: 'moulinet',
      email: 'admin.admin@admin.com',
    },
    {
      firstname: 'charlize',
      lastname: 'theron',
      email: 'user.user@user.com',
    },
    {
      firstname: 'charlize',
      lastname: 'gallice',
      email: 'admin1.admin1@admin1.com',
    },
  ]);

  // Je demande à sequelize de creer des events
  await Event.bulkCreate([
    {
      name: 'teuf',
      place: 'nantes',
      date: '2022-05-01',
      description: 'teuf de samuel',
      authorId: 1,
    },
    {
      name: 'messe',
      place: 'paris',
      date: '2022-05-01',
      description: 'messe pour charlize',
      authorId: 2,
    },
    {
      name: 'salseras',
      place: 'chamonix',
      date: '2022-05-01',
      description: 'SBK pour charlize',
      authorId: 3,
    },
  ]);

  // Je demande à sequelize de creer des objects
  await Object.bulkCreate([
    {
      name: 'object 1',
    },
    {
      name: 'object 2',
    },
    {
      name: 'object 3',
    },
    {
      name: 'object 4',
    },
    {
      name: 'object 5',
    },
    {
      name: 'object 6',
    },
    {
      name: 'object 7',
    },
    {
      name: 'object 8',
    },
    {
      name: 'object 9',
    },
    {
      name: 'object 10',
    },
  ]);
};

run();
