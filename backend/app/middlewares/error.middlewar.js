// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  let { status, message } = err;

  if (!status) {
    status = 500;
  }

  if (status === 500) {
    message = 'Internal Server Error';
  }

  return res.status(status).json({ error: message });
};
