import { z } from "zod"


export const ContactSchema = z.object({
    number: z
        .string()
        .length(10, "Phone number must be exactly 10 digits")
        .regex(/^\d+$/, "Phone number must contain only digits"),
});

export type ContactInputs = z.infer<typeof ContactSchema>;