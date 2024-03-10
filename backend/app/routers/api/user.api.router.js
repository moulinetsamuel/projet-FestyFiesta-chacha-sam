import express from 'express';
import userController from '../../controllers/user.controller.js';

const router = express.Router();

router.route('/')
  .get(userController.getAll)
  .put(userController.create);

router.route('/:id')
  .get(userController.getOne)
  .patch(userController.update)
  .delete(userController.delete);

export default router;
