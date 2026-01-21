import { z } from 'zod';

export const forgotPasswordSchema = z.object({
  email: z.email({ pattern: z.regexes.email }),
});

export type TForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;