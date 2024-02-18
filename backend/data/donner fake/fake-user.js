import faker from 'faker';

import { User } from '../../app/models/index.model.js';

const generateFakerUser = async (count) => {
  const fakerUser = [];

  for (let i = 0; i < count; i += 1) {
    fakerUser.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }
  await User.bulkCreate(fakerUser);
};

generateFakerUser(2);
