import { z } from 'zod'

export const contactFormSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().max(40).optional().or(z.literal('')),
  organisation: z.string().trim().max(160).optional().or(z.literal('')),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(10).max(3000),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>
