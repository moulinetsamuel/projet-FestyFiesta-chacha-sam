import ApiError from '../../error/apiError.js';

export default (controller) => async (req, res, next) => {
  try {
    await controller(req, res, next);
    next();
  } catch (error) {
    next(new ApiError(500, 'Internal Server Error'));
  }
};
