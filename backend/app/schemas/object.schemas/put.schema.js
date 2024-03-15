import { z } from 'zod';
import { Object } from '../../models/index.js';

export default z.object({
  name: z.string({ required_error: 'Name is required' })
    .min(1)
    .refine(async (value) => {
      const exists = await Object.findOne({ where: { name: value } });
      if (exists) {
        return false;
      }
      return true;
    }, {
      message: 'Name already exists',
    }),
}).strict();
