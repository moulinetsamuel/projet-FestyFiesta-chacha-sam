import { sequelize } from './app/models/index.js';

const run = async () => {
  // Je demande à sequelize de créer ma base de données en utilisant les modèles
  await sequelize.sync({ force: true });
};

run();
