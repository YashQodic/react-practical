import { z } from 'zod';

export const profileSchema = z.object({
  email: z.email({ pattern: z.regexes.email }),
  username: z.string().min(3, 'Username must be at least 3 characters long'),
});

export type TProfileSchema = z.infer<typeof profileSchema>;