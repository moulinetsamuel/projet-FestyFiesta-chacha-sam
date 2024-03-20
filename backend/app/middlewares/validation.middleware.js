import ApiError from '../../error/apiError.js';

export default (schema) => async (req, _, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    next(new ApiError(400, err.errors));
  }
};
