import { fromZodError } from 'zod-validation-error';
import { ValidationError } from '../error/apiError.js';

export default (schema) => async (req, _, next) => {
  try {
    await schema.parseAsync(req.body);
    next();
  } catch (err) {
    const validationError = fromZodError(err);
    next(new ValidationError(validationError));
  }
};
