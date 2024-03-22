// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  // 0 - Message simple
  // 1 - Message sans error
  // 2 - Toutes les informations
  const debugLevel = 0;
  let message = {};

  switch (debugLevel) {
    case 0:
      message = { message: err.message };
      if (err.name === 'SequelizeDatabaseError') {
        message = { message: 'Database Error' };
      }
      break;
    case 1:
      message = { message: err.message };
      break;
    case 2:
      message = { message: err.message, error: err };
      console.log(err);
      break;
    default:
      console.log('bad debugLevel');
  }

  return res.status(err.status || 500).json(message);
};
