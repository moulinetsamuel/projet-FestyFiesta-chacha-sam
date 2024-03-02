import { sequelize, User } from './app/models/index.js';

const run = async () => {
  // Je demande à sequelize de créer ma base de données en utilisant les modèles
  await sequelize.sync({ force: true });
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
};

run();
