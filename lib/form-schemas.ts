import * as z from 'zod'

export const contactFormSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email({
        message: 'Invalid email address.',
    }),
    subject: z.string().refine((value) => value.trim() !== '', {
        message: 'Subject is required.',
    }),
    message: z.string().refine((value) => value.trim() !== '', {
        message: 'Message is required.',
    }),
})