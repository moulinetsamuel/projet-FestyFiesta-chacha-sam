export default (schema) => async (req, _, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    next(err);
  }
};
