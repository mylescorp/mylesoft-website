'use server'

import { Resend } from 'resend'
import { COMPANY_CONTACT } from '@/lib/constants/contact'
import { contactFormSchema } from '@/lib/validation/contact'

export interface ContactFormData {
  name: string
  email: string
  phone?: string
  organisation?: string
  subject: string
  message: string
}

const messageFailure = 'We could not send your message. Please try again or contact us directly.'

function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

export async function sendContactEmail(
  data: ContactFormData
) {
  try {
    const parsed = contactFormSchema.safeParse(data)

    if (!parsed.success) {
      return {
        success: false,
        error: 'Some of the information provided is invalid. Please review the form and try again.',
      }
    }

    if (!process.env.RESEND_API_KEY) {
      return { success: false, error: messageFailure }
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
        <div style="font-family:Arial,sans-serif;
                    max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;
                      border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:24px;
                       margin:0;">
              New Contact Form Submission
            </h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <table style="width:100%;
                          border-collapse:collapse;">
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;
                           width:140px;">Name:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${safeData.name}
                </td>
              </tr>
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Email:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${safeData.email}
                </td>
              </tr>
              ${safeData.phone ? `
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Phone:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${safeData.phone}
                </td>
              </tr>` : ''}
              ${safeData.organisation ? `
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">
                  Organisation:
                </td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${safeData.organisation}
                </td>
              </tr>` : ''}
              <tr>
                <td style="padding:8px 0;
                           color:#545454;
                           font-weight:bold;">Subject:</td>
                <td style="padding:8px 0;
                           color:#212121;">
                  ${safeData.subject}
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
                ${safeData.message}
              </p>
            </div>
          </div>
          <div style="background:#1A395B;padding:20px;
                      text-align:center;">
            <p style="color:#C7D7EF;font-size:12px;
                      margin:0;">
              MylesCorp Technologies Ltd ·
              ${COMPANY_CONTACT.infoEmail} ·
              ${COMPANY_CONTACT.technicalPhone}
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      return { success: false, error: messageFailure }
    }

    // Send auto-reply to the person who contacted
    await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL ?? `MylesCorp Technologies <${COMPANY_CONTACT.infoEmail}>`,
      to: [parsed.data.email],
      subject: 'Thank you for contacting MylesCorp Technologies',
      html: `
        <div style="font-family:Arial,sans-serif;
                    max-width:600px;margin:0 auto;">
          <div style="background:#1A395B;padding:32px;
                      border-bottom:3px solid #C79639;">
            <h1 style="color:#C79639;font-size:22px;
                       margin:0;">
              Thank you, ${safeData.name.split(' ')[0]}!
            </h1>
          </div>
          <div style="padding:32px;background:#EEF2F8;">
            <p style="color:#212121;line-height:1.7;
                      font-size:15px;">
              We have received your message and will get
              back to you within <strong>2 business
              hours</strong>.
            </p>
            <p style="color:#212121;line-height:1.7;
                      font-size:15px;">
              In the meantime, you can WhatsApp us directly
              at <strong>${COMPANY_CONTACT.technicalPhone}</strong> or
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
              MylesCorp Technologies Ltd · ${COMPANY_CONTACT.location}
            </p>
          </div>
        </div>
      `,
    })

    return { success: true }
  } catch {
    return {
      success: false,
      error: messageFailure,
    }
  }
}
