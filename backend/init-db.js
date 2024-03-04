import {
  Event, User, Object, EventUser, sequelize,
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
      password: 'admin',
    },
    {
      firstname: 'charlize',
      lastname: 'theron',
      email: 'user.user@user.com',
      password: 'user',
    },
    {
      firstname: 'charlene',
      lastname: 'gallice',
      email: 'admin1.admin1@admin1.com',
      password: 'admin1',
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

  // Je demande à sequelize de creer des participants
  await EventUser.bulkCreate([
    {
      eventId: 1,
      userId: 1,
    },
    {
      eventId: 2,
      userId: 2,
    },
    {
      eventId: 3,
      userId: 3,
    },
  ]);

  const objetsEvent1 = await Object.findAll({
    where: {
      id: [1, 2, 3],
    },
  });

  const objetsEvent2 = await Object.findAll({
    where: {
      id: [4, 5, 6],
    },
  });

  const objetsEvent3 = await Object.findAll({
    where: {
      id: [7, 8, 9],
    },
  });

  const event1 = await Event.findByPk(1);
  const event2 = await Event.findByPk(2);
  const event3 = await Event.findByPk(3);

  await event1.addObjects(objetsEvent1);
  await event2.addObjects(objetsEvent2);
  await event3.addObjects(objetsEvent3);
};

run();
