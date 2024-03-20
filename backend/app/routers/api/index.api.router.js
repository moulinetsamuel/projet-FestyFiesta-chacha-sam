import express from 'express';
import authRouter from './auth.api.router.js';
import eventRouter from './event.api.router.js';
import objectRouter from './object.api.router.js';
import userRouter from './user.api.router.js';
import  checkToken  from '../../middlewares/checkJwt.js';

const router = express.Router();

router.use('/event', checkToken, eventRouter);
router.use('/object', checkToken, objectRouter);
router.use('/user', checkToken, userRouter);
router.use('/auth', authRouter);

export default router;
