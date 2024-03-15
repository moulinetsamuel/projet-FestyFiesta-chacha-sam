import express from 'express';
import eventController from '../../controllers/event.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import eventPutSchema from '../../schemas/event.schemas/put.schema.js';
import eventPatchSchema from '../../schemas/event.schemas/patch.schemas.js';

const router = express.Router();

router.route('/')
  .get(eventController.getAll)
  .put(
    validatorZod(eventPutSchema),
    eventController.create,
  );

router.route('/:id(\\d+)')
  .get(eventController.getOne)
  .patch(
    validatorZod(eventPatchSchema),
    eventController.update,
  )
  .delete(eventController.delete);

export default router;
