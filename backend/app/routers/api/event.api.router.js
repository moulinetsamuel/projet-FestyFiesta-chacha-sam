import express from 'express';
import eventController from '../../controllers/event.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import eventPutSchema from '../../schemas/event.schemas/put.schema.js';
import eventPatchSchema from '../../schemas/event.schemas/patch.schemas.js';
import errorHandler from '../../middlewares/errorHandler.js';

const router = express.Router();

router.route('/')
  .get(
    errorHandler(eventController.getAll),
  )
  .put(
    validatorZod(eventPutSchema),
    errorHandler(eventController.create),
  );

router.route('/:id')
  .get(
    errorHandler(eventController.getOne),
  )
  .patch(
    validatorZod(eventPatchSchema),
    errorHandler(eventController.update),
  )
  .delete(
    errorHandler(eventController.delete),
  );

export default router;
