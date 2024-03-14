import { z } from 'zod';

export default z.object({
  name: z.string({ required_error: 'Name is required' }).min(1),
  place: z.string({ required_error: 'Place is required' }).min(1),
  date: z.string().regex(/^\d{4}\/\d{2}\/\d{2}$/, {
    message: 'Date must be in the format YYYY/MM/DD',
  }),
  description: z.string({ required_error: 'Description is required' }).min(1),
  authorId: z.number({ required_error: 'Author id is required' }).int().positive(),
}).strict();
