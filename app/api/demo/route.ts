import { NextResponse } from 'next/server'
import { demoFormSchema } from '@/lib/demoSchema'

/**
 * Demo booking endpoint.
 *
 * Validates the submission server-side. Email delivery (Resend/SendGrid) and
 * Google Calendar event creation are stubbed — wire them up with the env vars
 * in `.env.example`. For now we log the lead and return success so the form
 * flow works end-to-end out of the box.
 */
export async function POST(request: Request) {
  let json: unknown
  try {
    json = await request.json()
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 })
  }

  const parsed = demoFormSchema.safeParse(json)
  if (!parsed.success) {
    return NextResponse.json(
      { error: 'Validation failed', issues: parsed.error.flatten() },
      { status: 422 },
    )
  }

  const lead = parsed.data

  // TODO: send confirmation email via RESEND_API_KEY and notify DEMO_NOTIFY_EMAIL.
  // TODO: optionally create a Google Calendar hold using the OAuth credentials.
  console.info('[demo] new booking request', {
    name: `${lead.firstName} ${lead.lastName}`,
    email: lead.email,
    restaurant: lead.restaurantName,
    locations: lead.locations,
    painPoint: lead.painPoint,
  })

  return NextResponse.json({ ok: true }, { status: 200 })
}
