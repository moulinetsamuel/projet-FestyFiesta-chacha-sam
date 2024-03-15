import express from 'express';
import authRouter from './auth.api.router.js';
import eventRouter from './event.api.router.js';
import objectRouter from './object.api.router.js';
import userRouter from './user.api.router.js';

const router = express.Router();

router.use('/event', eventRouter);
router.use('/object', objectRouter);
router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;
