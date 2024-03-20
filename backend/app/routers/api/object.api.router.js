import express from 'express';
import objectController from '../../controllers/object.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import objectPutSchema from '../../schemas/object.schemas/put.schema.js';
import objectPatchSchema from '../../schemas/object.schemas/patch.schemas.js';
import errorHandler from '../../middlewares/errorHandler.js';

const router = express.Router();

router.route('/')
  .get(
    errorHandler(objectController.getAll),
  )
  .put(
    validatorZod(objectPutSchema),
    errorHandler(objectController.create),
  );

router.route('/:id(\\d+)')
  .get(
    errorHandler(objectController.getOne),
  )
  .patch(
    validatorZod(objectPatchSchema),
    errorHandler(objectController.update),
  )
  .delete(
    errorHandler(objectController.delete),
  );

export default router;
