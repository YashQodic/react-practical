import { z } from 'zod';

export const productSchema = z.object({
  title: z.string().min(2, 'Title must be at least 3 characters long'),
  description: z.string().min(2, 'Description must be at least 3 characters long'),
});

export type TProductSchema = z.infer<typeof productSchema>;