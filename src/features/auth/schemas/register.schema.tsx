import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, "Username field is required"),
  email: z.email({ pattern: z.regexes.email }),
  password: z.string().min(8, "Password must be at least 8 characters long"),
  comformPassword: z.string().min(8, "Confirm Password must be at least 8 characters long"),
}).refine((data) => data.password === data.comformPassword, {
  message: "Passwords do not match",
  path: ["comformPassword"],
});

export type TRegisterSchema = z.infer<typeof registerSchema>;