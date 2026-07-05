export const COMPANY_CONTACT = {
  infoEmail: process.env.NEXT_PUBLIC_COMPANY_INFO_EMAIL ?? 'info@mylescorptech.com',
  contactEmail: process.env.NEXT_PUBLIC_COMPANY_CONTACT_EMAIL ?? 'contact@mylescorptech.com',
  salesEmail: process.env.NEXT_PUBLIC_COMPANY_SALES_EMAIL ?? 'sales@mylescorptech.com',
  technicalPhone: process.env.NEXT_PUBLIC_COMPANY_TECHNICAL_PHONE ?? '+254 743 993 715',
  salesPhone: process.env.NEXT_PUBLIC_COMPANY_SALES_PHONE ?? '+254 714 660 729',
  location: process.env.NEXT_PUBLIC_COMPANY_LOCATION ?? 'Westlands, Nairobi, Kenya',
  businessHours: process.env.NEXT_PUBLIC_COMPANY_BUSINESS_HOURS ?? 'Monday - Friday: 8:00 AM - 6:00 PM',
  websiteUrl: process.env.NEXT_PUBLIC_COMPANY_WEBSITE_URL ?? 'https://www.mylescorptech.com',
} as const

export function telHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, '')}`
}
