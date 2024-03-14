import putSchema from './put.schema.js';

export default putSchema
  .omit({ authorId: true })
  .partial()
  .refine((data) => {
    if (!data.name && !data.place && !data.date && !data.description) {
      return false;
    }
    return true;
  }, {
    message: 'At least one field is required',
  });
