'use client'

import { useState } from 'react'
import { sendContactEmail } from '@/app/actions/sendEmail'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('loading')

    const form = e.currentTarget
    const data = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement)?.value,
      organisation: (form.elements.namedItem('organisation') as HTMLInputElement)?.value,
      subject: (form.elements.namedItem('subject') as HTMLSelectElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    }

    const result = await sendContactEmail(data)

    if (result.success) {
      setStatus('success')
      form.reset()
    } else {
      setStatus('error')
      setErrorMsg(result.error || 'Something went wrong.')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-[1.75rem] border border-slate-200 bg-white p-6 sm:p-8 shadow-card">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
            Full Name *
          </label>
          <input
            name="name" type="text" required
            placeholder="John Mwangi"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
            Email Address *
          </label>
          <input
            name="email" type="email" required
            placeholder="john@company.com"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
            Phone Number
          </label>
          <input
            name="phone" type="tel"
            placeholder="+254 7XX XXX XXX"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200"
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
            Organisation
          </label>
          <input
            name="organisation" type="text"
            placeholder="Your school, company, or clinic"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
          Subject *
        </label>
        <select
          name="subject" required
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200"
        >
          <option value="">Select a subject</option>
          <option value="Product Demo Request">
            Product Demo Request
          </option>
          <option value="Website Development Enquiry">
            Website Development Enquiry
          </option>
          <option value="Pricing Information">
            Pricing Information
          </option>
          <option value="Technical Support">
            Technical Support
          </option>
          <option value="Partnership Enquiry">
            Partnership Enquiry
          </option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold text-navy mb-2 font-body tracking-[0.02em]">
          Message *
        </label>
        <textarea
          name="message" required rows={5}
          placeholder="Tell us how we can help you..."
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3.5 font-body text-base text-navy placeholder:text-slate-400 focus:outline-none focus:border-gold focus:bg-white focus:ring-4 focus:ring-gold/10 transition-all duration-200 resize-none"
        />
      </div>

      {status === 'success' && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
          <p className="font-body text-sm md:text-[0.95rem] leading-6 text-green-700">
            Message sent successfully! We will get back to you within 2 business hours. Check your email for a confirmation.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-4">
          <p className="font-body text-sm md:text-[0.95rem] leading-6 text-red-700">
            {errorMsg}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-xl bg-gold py-4 font-body font-bold text-[15px] tracking-[0.4px] text-navy shadow-gold hover:-translate-y-0.5 hover:bg-gold-light disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
      >
        {status === 'loading'
          ? 'Sending...'
          : 'Send Message →'}
      </button>
    </form>
  )
}
