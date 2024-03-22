import express from 'express';
import userController from '../../controllers/user.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import userPutSchema from '../../schemas/user.schemas/put.schema.js';
import userPatchSchema from '../../schemas/user.schemas/patch.schemas.js';
import errorHandler from '../../middlewares/errorHandler.js';

const router = express.Router();

router.route('/')
  .get(
    errorHandler(userController.getAll),
  )
  .put(
    validatorZod(userPutSchema),
    errorHandler(userController.create),
  );

router.route('/:id')
  .get(
    errorHandler(userController.getOne),
  )
  .patch(
    validatorZod(userPatchSchema),
    errorHandler(userController.update),
  )
  .delete(
    errorHandler(userController.delete),
  );

export default router;
