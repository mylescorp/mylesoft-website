'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  organisation?: string
  subject: string
  message: string
}

export async function sendContactEmail(
  data: ContactFormData
) {
  try {
    const { error } = await resend.emails.send({
      from: 'MylesCorp Website <noreply@mylescorptech.com>',
      to: ['info@mylescorptech.com'],
      replyTo: data.email,
      subject: `New Enquiry: ${data.subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;
                    max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;
                      border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:24px;
                       margin:0;">
              New Contact Form Submission
            </h1>
          </div>
          <div style="padding:32px;background:#f8f6f2;">
            <table style="width:100%;
                          border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;
                           width:140px;">Name:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${data.name}
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Email:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${data.email}
                </td>
              </tr>
              ${data.phone ? `
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Phone:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${data.phone}
                </td>
              </tr>` : ''}
              ${data.organisation ? `
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">
                  Organisation:
                </td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${data.organisation}
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Subject:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${data.subject}
                </td>
              </tr>
            </table>
            <div style="margin-top:24px;padding-top:24px;
                        border-top:1px solid #C7D7EF;">
              <p style="color:#545454;
                        font-weight:bold;
                        margin-bottom:8px;">Message:</p>
              <p style="color:#212121;
                        line-height:1.7;
                        white-space:pre-wrap;">
                ${data.message}
              </p>
            </div>
          </div>
          <div style="background:#1A395B;padding:20px;
                      text-align:center;">
            <p style="color:#C7D7EF;font-size:12px;
                      margin:0;">
              MylesCorp Technologies Ltd · 
              info@mylescorptech.com · 
              +254 743 993 715
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      return { success: false, error: error.message }
    }

    // Send auto-reply to the person who contacted
    await resend.emails.send({
      from: 'MylesCorp Technologies <info@mylescorptech.com>',
      to: [data.email],
      subject: 'Thank you for contacting MylesCorp Technologies',
      html: `
        <div style="font-family:Arial,sans-serif;
                    max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;
                      border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:22px;
                       margin:0;">
              Thank you, ${data.name.split(' ')[0]}!
            </h1>
          </div>
          <div style="padding:32px;background:#f8f6f2;">
            <p style="color:#212121;line-height:1.7;
                      font-size:15px;">
              We have received your message and will get 
              back to you within <strong>2 business 
              hours</strong>.
            </p>
            <p style="color:#212121;line-height:1.7;
                      font-size:15px;">
              In the meantime, you can WhatsApp us directly 
              at <strong>+254 743 993 715</strong> or 
              explore our products at 
              <a href="https://www.mylescorptech.com/products"
                 style="color:#C79639;">
                www.mylescorptech.com
              </a>.
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
  } catch (error) {
    return {
      success: false,
      error: 'Failed to send email. Please try again.',
    }
  }
}
