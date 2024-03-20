import express from 'express';
import authController from '../../controllers/auth.controller.js';
import errorHandler from '../../middlewares/errorHandler.js';

const router = express.Router();

router.post('/login', errorHandler(authController.login));

export default router;
