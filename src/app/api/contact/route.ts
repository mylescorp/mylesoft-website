import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { COMPANY_CONTACT } from '@/lib/constants/contact'
import { clearCsrfCookie, validateCsrfRequest } from '@/lib/security/csrf'
import { contactFormSchema } from '@/lib/validation/contact'

interface RateLimitEntry {
  count: number
  timestamp: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const rateLimitWindowMs = 15 * 60 * 1000
const maxRequests = 4
const messageFailure = 'We could not send your message. Please try again or contact us directly.'

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

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
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

    if (!process.env.RESEND_API_KEY) {
      return failureResponse(request, messageFailure, 503)
    }

    const parsed = contactFormSchema.safeParse(await request.json())

    if (!parsed.success) {
      return failureResponse(
        request,
        'Some of the information provided is invalid. Please review the form and try again.',
        400
      )
    }

    const resend = new Resend(process.env.RESEND_API_KEY)
    const safeData = {
      name: escapeHtml(parsed.data.name),
      email: escapeHtml(parsed.data.email),
      phone: parsed.data.phone ? escapeHtml(parsed.data.phone) : '',
      organisation: parsed.data.organisation ? escapeHtml(parsed.data.organisation) : '',
      subject: escapeHtml(parsed.data.subject),
      message: escapeHtml(parsed.data.message),
    }

    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? `MylesCorp Website <${COMPANY_CONTACT.infoEmail}>`,
      to: [process.env.RESEND_CONTACT_TO_EMAIL ?? COMPANY_CONTACT.infoEmail],
      replyTo: parsed.data.email,
      subject: `New Enquiry: ${safeData.subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:24px;margin:0;">New Contact Form Submission</h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <table style="width:100%;border-collapse:collapse;">
              <tr><td style="padding:8px 0;color:#545454;font-weight:bold;width:140px;">Name:</td><td style="padding:8px 0;color:#212121;">${safeData.name}</td></tr>
              <tr><td style="padding:8px 0;color:#545454;font-weight:bold;">Email:</td><td style="padding:8px 0;color:#212121;">${safeData.email}</td></tr>
              ${safeData.phone ? `<tr><td style="padding:8px 0;color:#545454;font-weight:bold;">Phone:</td><td style="padding:8px 0;color:#212121;">${safeData.phone}</td></tr>` : ''}
              ${safeData.organisation ? `<tr><td style="padding:8px 0;color:#545454;font-weight:bold;">Organisation:</td><td style="padding:8px 0;color:#212121;">${safeData.organisation}</td></tr>` : ''}
              <tr><td style="padding:8px 0;color:#545454;font-weight:bold;">Subject:</td><td style="padding:8px 0;color:#212121;">${safeData.subject}</td></tr>
            </table>
            <div style="margin-top:24px;padding-top:24px;border-top:1px solid #C7D7EF;">
              <p style="color:#545454;font-weight:bold;margin-bottom:8px;">Message:</p>
              <p style="color:#212121;line-height:1.7;white-space:pre-wrap;">${safeData.message}</p>
            </div>
          </div>
          <div style="background:#1A395B;padding:20px;text-align:center;">
            <p style="color:#C7D7EF;font-size:12px;margin:0;">
              MylesCorp Technologies Ltd · ${COMPANY_CONTACT.infoEmail} · ${COMPANY_CONTACT.technicalPhone}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      return failureResponse(request, messageFailure, 500)
    }

    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? `MylesCorp Technologies <${COMPANY_CONTACT.infoEmail}>`,
      to: [parsed.data.email],
      subject: 'Thank you for contacting MylesCorp Technologies',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:22px;margin:0;">Thank you, ${safeData.name.split(' ')[0]}!</h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <p style="color:#212121;line-height:1.7;font-size:15px;">
              We have received your message and will get back to you within <strong>2 business hours</strong>.
            </p>
            <p style="color:#212121;line-height:1.7;font-size:15px;">
              In the meantime, you can contact us directly at <strong>${COMPANY_CONTACT.technicalPhone}</strong>
              or visit <a href="https://www.mylescorptech.com/products" style="color:#C79639;">www.mylescorptech.com</a>.
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
      NextResponse.json({ success: true, message: 'Message sent successfully.' })
    )
  } catch (error) {
    console.error('Contact submission failed', error)
    return failureResponse(request, messageFailure, 500)
  }
}
