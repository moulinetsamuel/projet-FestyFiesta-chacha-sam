import express from 'express';
import eventController from '../../controllers/event.controller.js';

const router = express.Router();

router.route('/')
  .get(eventController.getAll)
  .post(eventController.create);

router.route('/:id')
  .get(eventController.getOne)
  .put(eventController.update)
  .delete(eventController.delete);

export default router;
