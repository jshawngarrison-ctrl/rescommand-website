'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { CheckCircle2, Loader2 } from 'lucide-react'
import { FormInput, FormSelect, FormTextarea } from '@/components/ui/FormField'
import { Button } from '@/components/ui/Button'
import { trackEvent } from '@/lib/analytics'
import {
  demoFormSchema,
  LOCATION_OPTIONS,
  PAIN_POINT_OPTIONS,
  type DemoFormValues,
} from '@/lib/demoSchema'

const locationOptions = [
  { value: '', label: 'Select…' },
  ...LOCATION_OPTIONS.map((v) => ({ value: v, label: v === '1' ? '1 location' : `${v} locations` })),
]

const painPointOptions = [
  { value: '', label: 'Select…' },
  ...PAIN_POINT_OPTIONS.map((v) => ({ value: v, label: v })),
]

/** Demo booking form with Zod validation, posts to /api/demo, shows success state. */
export function DemoForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<DemoFormValues>({
    resolver: zodResolver(demoFormSchema),
  })

  async function onSubmit(values: DemoFormValues) {
    setServerError(null)
    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      trackEvent('demo_request_submitted', { pain_point: values.painPoint })
      setSubmitted(true)
    } catch {
      setServerError(
        "Something went wrong sending your request. Please email us at support@rescommand.com and we'll get you scheduled.",
      )
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl bg-primary-panel p-8 text-center shadow-md">
        <CheckCircle2 className="h-12 w-12 text-semantic-success" aria-hidden="true" />
        <h2 className="font-display text-heading-sm font-bold text-ink">Request received!</h2>
        <p className="text-body-md text-muted">
          Thanks for reaching out. Our team will email you within one business day to confirm a time
          that works for you.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col gap-5 rounded-xl bg-primary-panel p-6 shadow-md sm:p-8"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormInput
          label="First Name"
          required
          autoComplete="given-name"
          {...register('firstName')}
          error={errors.firstName?.message}
        />
        <FormInput
          label="Last Name"
          required
          autoComplete="family-name"
          {...register('lastName')}
          error={errors.lastName?.message}
        />
      </div>

      <FormInput
        label="Email"
        type="email"
        required
        autoComplete="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <FormInput
        label="Restaurant Name"
        required
        autoComplete="organization"
        {...register('restaurantName')}
        error={errors.restaurantName?.message}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <FormSelect
          label="Number of Locations"
          required
          options={locationOptions}
          {...register('locations')}
          error={errors.locations?.message}
        />
        <FormSelect
          label="Biggest Pain Point"
          required
          options={painPointOptions}
          {...register('painPoint')}
          error={errors.painPoint?.message}
        />
      </div>

      <FormTextarea
        label="Anything you'd like us to know? (optional)"
        {...register('message')}
        error={errors.message?.message}
      />

      {serverError && (
        <p className="rounded-md bg-semantic-error/10 px-4 py-3 text-body-sm text-semantic-error" role="alert">
          {serverError}
        </p>
      )}

      <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          'Request My Demo'
        )}
      </Button>
      <p className="text-center text-body-xs text-muted">
        No pressure, no spam. We&rsquo;ll only use your details to schedule your demo.
      </p>
    </form>
  )
}
