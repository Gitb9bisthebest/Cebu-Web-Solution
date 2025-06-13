import * as z from "zod";

// FreeQuote
export const quoteFormSchema = z.object({
  projectType: z.string().min(1, {
    message: "Please select a project type",
  }),
  timeline: z.string().min(1, {
    message: "Please select a timeline",
  }),
  budget: z.string().min(1, {
    message: "Please select a budget range",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
});

export type QuoteFormData = z.infer<typeof quoteFormSchema>;
