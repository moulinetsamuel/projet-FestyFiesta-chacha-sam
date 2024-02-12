import 'dotenv/config';
import express from 'express';

import router from './app/router.js';

const app = express();

app.use(express.json());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
