import { z } from 'zod';
import { User } from '../../models/index.js';

export default z.object({
  firstname: z.string({ required_error: 'Firstname is required' }).min(1),
  lastname: z.string({ required_error: 'Lastname is required' }).min(1),
  email: z.string({ required_error: 'Email is required' }).email()
    .refine(async (value) => {
      const exists = await User.findOne({ where: { email: value } });
      if (exists) {
        return false;
      }
      return true;
    }, {
      message: 'Email already exists',
    }),
  password: z.string({ required_error: 'Password is required' }).min(1),
  confirmPassword: z.string({ required_error: 'Confirm password is required' }).min(1),
}).strict()
  .partial()
  .refine((data) => {
    if (!data.firstname && !data.lastname && !data.email && !data.password) {
      return false;
    }
    return true;
  }, {
    message: 'At least one field is required',
  })
  .refine((data) => {
    if (data.password !== data.confirmPassword) {
      return false;
    }
    return true;
  }, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });
