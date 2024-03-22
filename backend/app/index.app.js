import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routers/index.router.js';
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);
app.use(errorMiddleware);

export default app;
