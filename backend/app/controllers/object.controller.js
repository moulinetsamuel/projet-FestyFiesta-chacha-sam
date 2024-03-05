import { Object } from '../models/index.js';
import generateController from '../utils/generatController.js';

const controllerObjectGeneric = generateController(Object);

const controllerObject = {
  ...controllerObjectGeneric,
};

export default controllerObject;
