import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY_CONTACT } from '@/lib/constants/contact'
import { clearCsrfCookie, validateCsrfRequest } from '@/lib/security/csrf'
import { newsletterSchema } from '@/lib/validation/newsletter'

interface RateLimitEntry {
  count: number
  timestamp: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const rateLimitWindowMs = 15 * 60 * 1000
const maxRequests = 3

function clientIp(request: NextRequest) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    ?? request.headers.get('x-real-ip')
    ?? 'unknown'
}

function checkRateLimit(ip: string) {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  for (const [key, value] of Array.from(rateLimitStore.entries())) {
    if (now - value.timestamp > rateLimitWindowMs) {
      rateLimitStore.delete(key)
    }
  }

  if (!entry || now - entry.timestamp > rateLimitWindowMs) {
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return true
  }

  if (entry.count >= maxRequests) {
    return false
  }

  entry.count += 1
  return true
}

function failureResponse(request: NextRequest, message: string, status: number) {
  return clearCsrfCookie(
    request,
    NextResponse.json({ success: false, message }, { status })
  )
}

export async function POST(request: NextRequest) {
  try {
    if (!validateCsrfRequest(request)) {
      return failureResponse(
        request,
        'We could not verify this request. Please refresh the page and try again.',
        403
      )
    }

    if (!checkRateLimit(clientIp(request))) {
      return failureResponse(
        request,
        'Too many attempts. Please wait a moment and try again.',
        429
      )
    }

    if (!process.env.RESEND_API_KEY || !process.env.RESEND_AUDIENCE_ID) {
      return failureResponse(
        request,
        'We could not complete the subscription. Please try again in a moment.',
        503
      )
    }

    const parsed = newsletterSchema.safeParse(await request.json())

    if (!parsed.success) {
      return failureResponse(
        request,
        'Please enter a valid email address.',
        400
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.contacts.create({
      email: parsed.data.email,
      audienceId: process.env.RESEND_AUDIENCE_ID,
      unsubscribed: false,
    })

    if (error) {
      return failureResponse(
        request,
        'We could not complete the subscription. Please try again in a moment.',
        500
      )
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? `MylesCorp Technologies <${COMPANY_CONTACT.infoEmail}>`,
      to: [parsed.data.email],
      subject: 'Welcome to MylesCorp Technologies Updates',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:22px;margin:0;">Welcome to MylesCorp Technologies</h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <p style="color:#212121;line-height:1.7;">
              Thank you for subscribing. You will receive product updates, implementation notes,
              and practical technology insights for East African teams.
            </p>
            <p style="color:#212121;line-height:1.7;">
              Explore our products at
              <a href="https://www.mylescorptech.com/products" style="color:#C79639;">
                www.mylescorptech.com/products
              </a>.
            </p>
          </div>
          <div style="background:#1A395B;padding:20px;text-align:center;">
            <p style="color:#C79639;font-style:italic;font-size:14px;margin:0 0 8px;">
              Transforming Industries, Empowering Generations.
            </p>
            <p style="color:#C7D7EF;font-size:12px;margin:0;">
              MylesCorp Technologies Ltd · ${COMPANY_CONTACT.location}
            </p>
          </div>
        </div>
      `,
    })

    return clearCsrfCookie(
      request,
      NextResponse.json({
        success: true,
        message: 'Subscribed. Welcome to the MylesCorp community.',
      })
    )
  } catch (error) {
    console.error('Newsletter subscription failed', error)
    return failureResponse(
      request,
      'We could not complete the subscription. Please try again in a moment.',
      500
    )
  }
}
