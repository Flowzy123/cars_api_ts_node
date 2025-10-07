import { z } from 'zod';

export const carCreateSchema = z.object({
  make: z.string().min(1),
  model: z.string().min(1),
  year: z.number().int().gte(1886), // первый автомобиль ~1886
  price: z.number().nonnegative()
});
