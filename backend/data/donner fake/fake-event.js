import faker from 'faker';

import { Event } from '../../app/models/index.model.js';

const generateFakerEvent = async (count) => {
  const fakerEvent = [];

  for (let i = 0; i < count; i += 1) {
    fakerEvent.push({
      name: faker.lorem.word(),
      place: faker.address.streetAddress(),
      date: faker.date.future(),
      description: faker.lorem.sentence(),
      author_id: 1,
    });
  }
  await Event.bulkCreate(fakerEvent);
};

generateFakerEvent(1);
