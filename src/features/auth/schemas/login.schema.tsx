import { z } from 'zod';

export const signUpSchema = z.object({
    username: z.string().min(1, 'Username field is required'),
    password: z.string().min(8, 'Password must be at least 8 characters long'),
});

export type TSingUpSchema = z.infer<typeof signUpSchema>;