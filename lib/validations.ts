import { z } from "zod"

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  company: z.string().optional(),
  jobTitle: z.string().optional(), // Added for professional context
  service: z.string().min(1, "Please select a service"),
  projectType: z.string().min(1, "Please select project type"), // New
  budget: z.string().min(1, "Budget range is required"),
  timeline: z.string().min(1, "Estimated timeline is required"), // New
  referral: z.string().optional(), // New
  message: z.string().min(20, "Please provide a bit more detail (min 20 chars)"),
  honeypot: z.string().max(0, "Bot detected"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>
