import { fromZodError } from 'zod-validation-error';
// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  // 0 - Message simple
  // 1 - Message sans error
  // 2 - Toutes les informations
  const debugLevel = 1;
  let message = {};

  // if (err.name === 'ZodError') {
  //   err.status = 400;
  // }

  if (err.name === 'ZodError') {
    // eslint-disable-next-line no-param-reassign
    err.status = 400;
  }

  switch (debugLevel) {
    case 0:
      message = { message: err.message };
      if (err.name === 'SequelizeDatabaseError') {
        message = { message: 'Database Error' };
      }
      if (err.name === 'ZodError') {
        message = { message: 'Data send is not ok' };
      }
      break;
    case 1:
      message = { message: err.message };
      if (err.name === 'ZodError') {
        message = { message: fromZodError(err).message };
      }
      break;
    case 2:
      message = { message: err.message, error: err };
      if (err.name === 'ZodError') {
        message = { message: fromZodError(err).message, error: err };
      }
      console.log(err);
      break;
    default:
      console.log('bad debugLevel');
  }

  return res.status(err.status || 500).json(message);
};
