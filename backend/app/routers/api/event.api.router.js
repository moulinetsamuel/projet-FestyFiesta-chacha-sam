import express from 'express';
import eventController from '../../controllers/event.controller.js';

const router = express.Router();

router.route('/')
  .get(eventController.getAll)
  .put(eventController.create);

router.route('/:id')
  .get(eventController.getOne)
  .patch(eventController.update)
  .delete(eventController.delete);

export default router;
