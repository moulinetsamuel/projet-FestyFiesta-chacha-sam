import { User } from '../models/index.js';
import generateController from '../utils/generatController.js';

const controllerUserGeneric = generateController(User);

const controllerUser = {
  ...controllerUserGeneric,
};

export default controllerUser;
