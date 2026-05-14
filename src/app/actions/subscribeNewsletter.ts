'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function subscribeToNewsletter(
  email: string
) {
  if (!email || !email.includes('@')) {
    return {
      success: false,
      error: 'Please enter a valid email address.'
    }
  }

  try {
    // Notify admin of new subscriber
    await resend.emails.send({
      from: 'MylesCorp Website <noreply@mylescorptech.com>',
      to: ['info@mylescorptech.com'],
      subject: 'New Newsletter Subscriber',
      html: `
        <p>New newsletter subscription:</p>
        <p><strong>${email}</strong></p>
        <p>Add to your mailing list.</p>
      `,
    })

    // Send welcome email to subscriber
    await resend.emails.send({
      from: 'MylesCorp Technologies <info@mylescorptech.com>',
      to: [email],
      subject: 'Welcome to MylesCorp Technologies Updates!',
      html: `
        <div style="font-family:Arial,sans-serif;
                    max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;
                      border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:22px;
                       margin:0;">
              Welcome to MylesCorp!
            </h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <p style="color:#212121;line-height:1.7;">
              Thank you for subscribing to our newsletter.
              You will receive our latest product updates,
              tech insights, and industry news.
            </p>
            <p style="color:#212121;line-height:1.7;">
              Explore our products at
              <a href="https://www.mylescorptech.com/products"
                 style="color:#C79639;">
                www.mylescorptech.com/products
              </a>
            </p>
          </div>
          <div style="background:#1A395B;padding:20px;
                      text-align:center;">
            <p style="color:#C79639;font-style:italic;
                      font-size:14px;margin:0 0 8px;">
              Transforming Industries, Empowering Generations.
            </p>
            <p style="color:#C7D7EF;font-size:12px;margin:0;">
              MylesCorp Technologies Ltd · Westlands,
              Nairobi, Kenya
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch {
    return {
      success: false,
      error: 'Subscription failed. Please try again.',
    }
  }
}
