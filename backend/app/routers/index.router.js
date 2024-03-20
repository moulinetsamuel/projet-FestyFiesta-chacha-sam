import express from 'express';
import apiRouter from './api/index.api.router.js';
// import websiteRouter from './website/index.website.router.js';
import ApiError from '../../error/apiError.js';
import errorMiddlewar from '../middlewares/error.middlewar.js';

const router = express.Router();

router.use('/api', apiRouter);
// router.use('/', websiteRouter);

router.use(() => {
  throw new ApiError(404, 'Route not found');
});

router.use(errorMiddlewar);

export default router;
