import { z } from "zod";

export const contactSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email required" })
    .email({ message: "Invalid Email Format" }),

  name: z
    .string()
    .max(50, { message: "Le nom est trop long (max 50 caractères)" })
    .optional()
    .or(z.literal('')),

  subject: z
    .string()
    .min(5, { message: "Subject must be at least 5 Characters" })
    .max(100, { message: "Subject too long" }),

  content: z
    .string()
    .min(10, { message: "Your message must be at least 10 characters" })
    .max(2000, { message: "Message too long (max 2000 Characters)" }),
});


export type ContactInput = z.infer<typeof contactSchema>;