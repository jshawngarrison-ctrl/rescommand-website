import { z } from 'zod'

export const LOCATION_OPTIONS = ['1', '2-3', '4-5', '5+'] as const
export const PAIN_POINT_OPTIONS = ['Scheduling', 'Food Cost', 'Compliance', 'Other'] as const

/** Validation schema for the demo booking form — shared by client + API route. */
export const demoFormSchema = z.object({
  firstName: z.string().min(1, 'First name is required').max(80),
  lastName: z.string().min(1, 'Last name is required').max(80),
  email: z.string().min(1, 'Email is required').email('Enter a valid email address'),
  restaurantName: z.string().min(1, 'Restaurant name is required').max(120),
  locations: z.enum(LOCATION_OPTIONS, {
    errorMap: () => ({ message: 'Select the number of locations' }),
  }),
  painPoint: z.enum(PAIN_POINT_OPTIONS, {
    errorMap: () => ({ message: 'Select a pain point' }),
  }),
  message: z.string().max(2000).optional().or(z.literal('')),
})

export type DemoFormValues = z.infer<typeof demoFormSchema>
