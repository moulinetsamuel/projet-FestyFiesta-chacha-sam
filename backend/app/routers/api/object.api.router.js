import express from 'express';
import objectController from '../../controllers/object.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import objectPutSchema from '../../schemas/object.schemas/put.schema.js';
import objectPatchSchema from '../../schemas/object.schemas/patch.schemas.js';

const router = express.Router();

router.route('/')
  .get(objectController.getAll)
  .put(
    validatorZod(objectPutSchema),
    objectController.create,
  );

router.route('/:id(\\d+)')
  .get(objectController.getOne)
  .patch(
    validatorZod(objectPatchSchema),
    objectController.update,
  )
  .delete(objectController.delete);

export default router;
