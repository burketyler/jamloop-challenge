import { z } from "zod";

export const loginRequestSchema = z.object({
  username: z
    .string()
    .trim()
    .min(1, "Username is required.")
    .email("Username must be a valid email."),
  password: z.string().trim().min(1, "Password is required."),
});

export type LoginRequest = z.output<typeof loginRequestSchema>;
