// eslint-disable-next-line no-unused-vars
export default (err, _, res, __) => {
  let { status, message } = err;

  if (!status) {
    status = 500;
  }

  if (status === 500) {
    console.log(err);
    message = 'Internal Server Error';
  }

  if (status === 404) {
    message = 'Not Found';
  }
  return res.status(status).json({ error: message });
};
