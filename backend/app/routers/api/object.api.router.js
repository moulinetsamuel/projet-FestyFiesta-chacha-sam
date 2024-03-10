import express from 'express';
import objectController from '../../controllers/object.controller.js';

const router = express.Router();

router.route('/')
  .get(objectController.getAll)
  .put(objectController.create);

router.route('/:id')
  .get(objectController.getOne)
  .patch(objectController.update)
  .delete(objectController.delete);

export default router;
