import { Event } from '../models/index.js';
import generateController from '../utils/generatController.js';

const controllerEventGeneric = generateController(Event);

const controllerEvent = {
  ...controllerEventGeneric,

};

export default controllerEvent;
