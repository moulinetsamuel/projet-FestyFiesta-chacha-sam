import express from 'express';
import userController from '../../controllers/user.controller.js';
import validatorZod from '../../middlewares/validation.middleware.js';
import userPutSchema from '../../schemas/user.schemas/put.schema.js';
import userPatchSchema from '../../schemas/user.schemas/patch.schemas.js';

const router = express.Router();

router.route('/')
  .get(userController.getAll)
  .put(
    validatorZod(userPutSchema),
    userController.create,
  );

router.route('/:id(\\d+)')
  .get(userController.getOne)
  .patch(
    validatorZod(userPatchSchema),
    userController.update,
  )
  .delete(userController.delete);

export default router;
