'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { SOCIAL_LINKS } from '@/lib/constants/social'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 4000)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-navy border-t-[3px] border-gold">
      {/* MAIN GRID */}
      <div className="max-w-[1200px] mx-auto px-10 pt-14 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Brand Column */}
        <div>
          <div className="flex items-center gap-3 mb-4.5">
            <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
              <Image
                src="/mylescorp-logo.png"
                alt="MylesCorp"
                width={56}
                height={56}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="text-[19px] font-bold text-white font-['Playfair_Display'] leading-tight">MylesCorp</div>
              <div className="text-[10.5px] font-bold text-gold tracking-[1.7px] uppercase">Technologies</div>
            </div>
          </div>
          <p className="text-[14px] text-light-blue leading-7 max-w-[320px] mb-5.5">
            East Africa&apos;s AI-powered software company behind EduMyles, EduRyde, MylesCare, MylesCRM, and AgriMyles for schools, transport teams, healthcare, businesses, and agriculture.
          </p>
          <div className="flex flex-col gap-2.5">
            <a
              href="mailto:info@mylescorptech.com"
              className="flex items-center gap-2.5 text-[13.5px] text-muted-blue no-underline transition-colors duration-200 hover:text-white"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-[15px] h-[15px] stroke-[#C79639] fill-none flex-shrink-0">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
              info@mylescorptech.com
            </a>
            <a
              href="tel:+254743993715"
              className="flex items-center gap-2.5 text-[13.5px] text-muted-blue no-underline transition-colors duration-200 hover:text-white"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-[15px] h-[15px] stroke-[#C79639] fill-none flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 2 3.18 2 2 0 0 1 4 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9a16 16 0 0 0 6.91 6.91l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              +254 743 993 715
            </a>
            <a
              href="https://maps.google.com/?q=Westlands,Nairobi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13.5px] text-muted-blue no-underline transition-colors duration-200 hover:text-white"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-[15px] h-[15px] stroke-[#C79639] fill-none flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Westlands, Nairobi, Kenya
            </a>
            <a
              href="https://www.mylescorptech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 text-[13.5px] text-muted-blue no-underline transition-colors duration-200 hover:text-white"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-[15px] h-[15px] stroke-[#C79639] fill-none flex-shrink-0">
                <circle cx="12" cy="12" r="10"/>
                <line x1="2" y1="12" x2="22" y2="12"/>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
              </svg>
              www.mylescorptech.com
            </a>
          </div>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gold tracking-[2px] uppercase pb-2 border-b border-gold/15 mb-4.5">Products</h4>
          <div className="space-y-2.5">
            <Link href="/products/edumyles" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              EduMyles
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">School Management</span>
            </Link>
            <Link href="/products/eduryde" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              EduRyde
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">School Transport</span>
            </Link>
            <Link href="/products/mylescrm" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              MylesCRM
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">Business CRM</span>
            </Link>
            <Link href="/products/mylescare" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              MylesCare
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">Healthcare Management</span>
            </Link>
            <Link href="/products/agrimyles" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              AgriMyles
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">Agricultural Technology</span>
            </Link>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gold tracking-[2px] uppercase pb-2 border-b border-gold/15 mb-4.5">Product Services</h4>
          <div className="space-y-2.5">
            <Link href="/services" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Implementation & Onboarding
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">For EduMyles, EduRyde, MylesCare, MylesCRM, and AgriMyles</span>
            </Link>
            <Link href="/book-demo" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Product Demos
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">Compare the product portfolio</span>
            </Link>
            <Link href="/support" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Customer Support
              <span className="text-[11px] text-[rgba(199,215,239,0.62)] block mt-1">Existing product clients</span>
            </Link>
          </div>
        </div>

        {/* Company Column */}
        <div>
          <h4 className="text-[11px] font-bold text-gold tracking-[2px] uppercase pb-2 border-b border-gold/15 mb-4.5">Company</h4>
          <div className="space-y-2.5">
            <Link href="/about" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              About Us
            </Link>
            <Link href="/team" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Our Team
            </Link>
            <Link href="/pricing" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Pricing
            </Link>
            <Link href="/portfolio" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Portfolio
            </Link>
            <Link href="/blog" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Blog
            </Link>
            <Link href="/careers" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Careers
            </Link>
            <Link href="/partners" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Partners
            </Link>
            <Link href="/brochure" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Brochure
            </Link>
            <Link href="/contact" className="block text-[14px] text-muted-blue no-underline transition-colors duration-200 hover:text-white mb-2.5 leading-tight">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* STAY CONNECTED */}
      <div className="border-t border-[rgba(255,255,255,0.06)] max-w-[1200px] mx-auto px-10 py-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h4 className="text-[18px] font-bold text-white mb-1.5">Stay Connected</h4>
          <p className="text-[14px] text-light-blue leading-7 mb-4">
            Get the latest updates on our innovative solutions and industry insights delivered to your inbox.
          </p>
        </div>
        <div>
          <div className="flex gap-2 mb-4" suppressHydrationWarning>
            <input
              name="newsletter-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              autoComplete="off"
              data-lpignore="true"
              data-form-type="other"
              className="flex-1 h-[46px] px-4 bg-white/5 border border-gold/20 rounded-lg text-white placeholder-white/35 text-[14px] focus:outline-none focus:border-gold transition-colors duration-200"
            />
            <button
              onClick={handleSubscribe}
              className="h-[46px] px-5 bg-gold text-navy font-bold text-[14px] rounded-lg whitespace-nowrap hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-200 flex-shrink-0"
            >
              Subscribe
            </button>
          </div>

          {subscribed && (
            <div className="text-[#22c55e] text-[13px] mt-2">
              ✓ Subscribed! Welcome to MylesCorp community.
            </div>
          )}

          <div className="text-[11px] font-bold text-light-blue tracking-[1.5px] uppercase mb-2.5">Follow us on social media</div>
          <div className="flex gap-2 flex-wrap">
            {/* LinkedIn */}
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on LinkedIn"
              title="LinkedIn — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            {/* Facebook */}
            <a
              href={SOCIAL_LINKS.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on Facebook"
              title="Facebook — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a
              href={SOCIAL_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on Instagram"
              title="Instagram — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>

            {/* Twitter/X */}
            <a
              href={SOCIAL_LINKS.twitter}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on Twitter"
              title="Twitter / X — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
              </svg>
            </a>

            {/* YouTube */}
            <a
              href={SOCIAL_LINKS.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on YouTube"
              title="YouTube — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
                <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href={SOCIAL_LINKS.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on TikTok"
              title="TikTok — @mylescorptech"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M14 3v11a4 4 0 1 1-4-4"/>
                <path d="M14 3c1 3 3 5 6 5"/>
              </svg>
            </a>

            {/* GitHub */}
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="MylesCorp on GitHub"
              title="GitHub — mylesco"
              className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#95A9CC] hover:text-[#C79639] hover:border-[#C79639]/40 hover:bg-[#C79639]/10 transition-all duration-200"
            >
              <svg viewBox="0 0 24 24" strokeWidth="1.8" className="w-4 h-4 fill-none stroke-current">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-[rgba(255,255,255,0.06)] max-w-[1200px] mx-auto px-5 py-4.5 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[13px] text-muted-blue">
          © 2026 <Link href="/" className="text-light-blue hover:text-white hover:underline">MylesCorp Technologies.</Link> All rights reserved.
        </div>
        <div className="flex gap-5 text-[13px] text-muted-blue">
          <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</Link>
          <Link href="/cookie-policy" className="hover:text-white transition-colors duration-200">Cookie Policy</Link>
          <Link href="/compliance" className="hover:text-white transition-colors duration-200">Compliance</Link>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="w-9 h-9 rounded-lg bg-gold/10 border border-gold/25 flex items-center justify-center text-gold hover:bg-gold hover:text-navy transition-all duration-200 flex-shrink-0"
        >
          <svg viewBox="0 0 24 24" strokeWidth="2.5" className="w-4 h-4 fill-none stroke-current">
            <path d="M18 15l-6-6-6 6"/>
          </svg>
        </button>
      </div>

      {/* TAGLINE ROW */}
      <div className="border-t border-[rgba(255,255,255,0.04)] text-center px-10 py-4 bg-[rgba(0,0,0,0.15)]">
        <div className="text-[14px] italic text-light-blue font-['Playfair_Display'] mb-1">Transforming Industries, Empowering Generations.</div>
      </div>
    </footer>
  )
}
