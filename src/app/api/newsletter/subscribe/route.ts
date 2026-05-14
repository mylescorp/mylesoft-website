import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

// In-memory rate limiting store
interface RateLimitEntry {
  count: number
  timestamp: number
}

const rateLimitStore = new Map<string, RateLimitEntry>()
const RATE_LIMIT_WINDOW = 15 * 60 * 1000 // 15 minutes in milliseconds
const MAX_REQUESTS = 3

// Clean up expired entries periodically
function cleanupExpiredEntries() {
  const now = Date.now()
  const entries = Array.from(rateLimitStore.entries())
  for (const [ip, entry] of entries) {
    if (now - entry.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitStore.delete(ip)
    }
  }
}

// Run cleanup every 5 minutes
setInterval(cleanupExpiredEntries, 5 * 60 * 1000)

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const realIP = request.headers.get('x-real-ip')

  if (forwarded) {
    return forwarded.split(',')[0].trim()
  }

  if (realIP) {
    return realIP
  }

  return 'unknown'
}

function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetTime: number } {
  const now = Date.now()
  const entry = rateLimitStore.get(ip)

  if (!entry) {
    // First request from this IP
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetTime: now + RATE_LIMIT_WINDOW }
  }

  // Check if window has expired
  if (now - entry.timestamp > RATE_LIMIT_WINDOW) {
    // Reset the window
    rateLimitStore.set(ip, { count: 1, timestamp: now })
    return { allowed: true, remaining: MAX_REQUESTS - 1, resetTime: now + RATE_LIMIT_WINDOW }
  }

  // Window still active
  if (entry.count >= MAX_REQUESTS) {
    return { allowed: false, remaining: 0, resetTime: entry.timestamp + RATE_LIMIT_WINDOW }
  }

  // Increment count
  entry.count++
  return { allowed: true, remaining: MAX_REQUESTS - entry.count, resetTime: entry.timestamp + RATE_LIMIT_WINDOW }
}

export async function POST(request: NextRequest) {
  try {
    // Get client IP
    const clientIP = getClientIP(request)

    // Check rate limit
    const rateLimit = checkRateLimit(clientIP)

    // Set rate limit headers
    const headers = new Headers()
    headers.set('X-RateLimit-Limit', MAX_REQUESTS.toString())
    headers.set('X-RateLimit-Remaining', Math.max(0, rateLimit.remaining).toString())
    headers.set('X-RateLimit-Reset', new Date(rateLimit.resetTime).toISOString())

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        {
          status: 429,
          headers
        }
      )
    }
    // Check if Resend is configured
    if (!resend) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 503 }
      )
    }

    const { email } = await request.json()

    // Validate email
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email address is required' },
        { status: 400 }
      )
    }

    // Add subscriber to Resend audience
    try {
      const { data, error } = await resend.contacts.create({
        email: email,
        audienceId: process.env.RESEND_AUDIENCE_ID || 'default-audience-id',
        unsubscribed: false,
      })

      if (error) {
        console.error('Resend API error:', error)
        return NextResponse.json(
          { error: 'Failed to subscribe. Please try again.' },
          { status: 500 }
        )
      }

      // Send welcome email
      try {
        await resend.emails.send({
          from: 'MylesCorp Technologies <noreply@mylescorptech.com>',
          to: [email],
          subject: 'Welcome to MylesCorp Technologies Newsletter!',
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Welcome to MylesCorp Technologies</title>
              <style>
                body { font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #212121; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                .header { text-align: center; padding: 40px 0; background: #1A395B; color: white; border-radius: 12px 12px 0 0; }
                .content { padding: 40px; background: white; border: 1px solid #E8EDF4; border-top: none; border-radius: 0 0 12px 12px; }
                .logo { font-size: 24px; font-weight: bold; margin-bottom: 16px; }
                .gold { color: #C79639; }
                .button { display: inline-block; background: #C79639; color: white; padding: 12px 24px; text-decoration: none; border-radius: 50px; font-weight: 600; margin: 20px 0; }
                .footer { text-align: center; padding: 20px; color: #545454; font-size: 14px; }
              </style>
            </head>
            <body>
              <div class="container">
                <div class="header">
                  <div class="logo">MylesCorp Technologies</div>
                  <h1>Welcome to Our Newsletter</h1>
                  <p>Thank you for subscribing to stay updated with AI technology and digital transformation in East Africa.</p>
                </div>
                <div class="content">
                  <h2>What to Expect</h2>
                  <ul>
                    <li>Latest insights on AI technology trends</li>
                    <li>Digital transformation success stories from East Africa</li>
                    <li>Product updates and new feature announcements</li>
                    <li>Educational content and best practices</li>
                    <li>Industry news and market analysis</li>
                  </ul>

                  <p>You'll receive our newsletter every week with curated content designed to help you leverage technology for growth.</p>

                  <div style="text-align: center;">
                    <a href="https://www.mylescorptech.com" class="button">Explore Our Solutions</a>
                  </div>

                  <p>Have questions? Simply reply to this email or contact our team at <a href="mailto:info@mylescorptech.com">info@mylescorptech.com</a>.</p>

                  <p><span class="gold">Transforming Industries, Empowering Generations.</span></p>
                </div>
                <div class="footer">
                  <p>You received this email because you subscribed to our newsletter.</p>
                  <p>
                    <a href="https://www.mylescorptech.com/privacy-policy">Privacy Policy</a> |
                    <a href="https://www.mylescorptech.com/terms-of-service">Terms of Service</a>
                  </p>
                  <p>© 2026 MylesCorp Technologies Limited. All rights reserved.</p>
                  <p>Wester Heights, Westlands, Nairobi, Kenya</p>
                </div>
              </div>
            </body>
            </html>
          `,
        })
      } catch (emailError) {
        console.error('Failed to send welcome email:', emailError)
        // Continue even if welcome email fails
      }

      return NextResponse.json({
        success: true,
        message: 'Successfully subscribed to newsletter',
        data: data
      }, { headers })

    } catch (resendError) {
      console.error('Resend subscription error:', resendError)
      return NextResponse.json(
        { error: 'Failed to subscribe. Please try again later.' },
        { status: 500 }
      )
    }

  } catch (error) {
    console.error('Newsletter subscription error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
