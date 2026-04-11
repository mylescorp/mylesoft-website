'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function PrivacyPolicy() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      const html = document.documentElement
      const progress = Math.min((html.scrollTop / (html.scrollHeight - html.clientHeight)) * 100, 100)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    // Intersection Observer for active section
    const sections = document.querySelectorAll('.sec')
    const links = document.querySelectorAll('.toc a[href^="#"]')
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            links.forEach((link) => link.classList.remove('active'))
            const activeLink = document.querySelector(`.toc a[href="#${entry.target.id}"]`)
            if (activeLink) activeLink.classList.add('active')
          }
        })
      },
      { threshold: 0.25 }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  return (
    <>
      <div className="min-h-screen bg-[#080e18]">
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#C79639] to-[#e0b055] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-[100] bg-[#080e18] border-b border-[rgba(199,150,57,0.15)] px-10 h-[60px] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-[34px] h-[34px] rounded-[7px] bg-gradient-to-br from-[#1A395B] to-[#0f1f35] border-[1.5px] border-[#C79639] flex items-center justify-center font-['Playfair_Display'] text-[16px] font-bold text-[#C79639]">
            M
          </div>
          <div>
            <div className="text-[13px] font-bold text-white">MylesCorp Technologies</div>
            <div className="text-[8px] text-[#C79639] tracking-[1.5px] uppercase">Legal Documents</div>
          </div>
        </Link>
        
        <div className="flex gap-1.5 flex-wrap">
          <Link href="/privacy-policy" className="px-3 py-1.5 bg-[rgba(199,150,57,0.08)] border border-[rgba(199,150,57,0.3)] rounded-[6px] text-[#C79639] text-[11px] font-bold no-underline transition-all duration-180">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Cookie Policy
          </Link>
          <Link href="/compliance" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Compliance
          </Link>
        </div>
        
        <Link href="/" className="px-4 py-2 bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.3)] rounded-[7px] text-[#C79639] text-[12px] font-bold no-underline transition-all duration-200 hover:bg-[#C79639] hover:text-[#1A395B]">
          ← Website
        </Link>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#080e18] px-10 py-16 relative overflow-hidden border-b border-[rgba(199,150,57,0.1)]">
        <div className="max-w-[860px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[rgba(199,150,57,0.3)] bg-[rgba(199,150,57,0.1)] rounded-full text-[10px] font-bold tracking-[2px] uppercase text-[#C79639] mb-5">
            Legal · Data Protection
          </div>
          <h1 className="font-['Playfair_Display'] font-bold text-white leading-tight mb-3.5" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
            Privacy <em className="text-[#C79639] italic">Policy</em>
          </h1>
          <div className="flex gap-5 flex-wrap text-[12px] text-[#95A9CC]">
            <span>Effective: 1 January 2026</span>
            <span>Updated: 21 March 2026</span>
            <span>MylesCorp Technologies Ltd</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1100px] mx-auto px-10 py-13 grid grid-cols-[230px_1fr] gap-12 items-start">
        
        {/* Table of Contents */}
        <aside>
          <div className="sticky top-[76px] bg-[rgba(255,255,255,0.12)] border border-[rgba(199,150,57,0.15)] rounded-[14px] p-5.5 overflow-hidden">
            <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#C79639] mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.15)]">
              Contents
            </div>
            <a href="#s1" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Introduction</a>
            <a href="#s2" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Information We Collect</a>
            <a href="#s3" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">How We Use Your Information</a>
            <a href="#s4" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Legal Basis for Processing</a>
            <a href="#s5" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Data Sharing & Disclosure</a>
            <a href="#s6" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Data Storage & Security</a>
            <a href="#s7" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Data Retention</a>
            <a href="#s8" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Your Rights</a>
            <a href="#s9" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookies</a>
            <a href="#s10" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Third-Party Links</a>
            <a href="#s11" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Children's Privacy</a>
            <a href="#s12" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Changes to This Policy</a>
            <a href="#s13" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Contact Us</a>
            
            <div className="h-[1px] bg-[rgba(199,150,57,0.08)] my-2.5" />
            <div className="mt-1.5">
              <div className="text-[9px] font-bold text-[rgba(149,169,204,0.4)] tracking-[1.5px] uppercase mb-1.5 pl-2.5">Other Legal</div>
              <Link href="/terms-of-service" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Terms of Service</Link>
              <Link href="/cookie-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookie Policy</Link>
              <Link href="/compliance" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Compliance</Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="bg-[rgba(199,150,57,0.06)] border border-[rgba(199,150,57,0.2)] rounded-[10px] p-[15px_18px] mb-7">
            <p className="text-[13px] text-[#C7D7EF] leading-[1.7] m-0">
              <strong className="text-[#C79639]">Summary:</strong> MylesCorp Technologies Ltd is committed to protecting your personal information. We collect only what we need, use it only as described here, and never sell your data to third parties.
            </p>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s1">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 01</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Introduction</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp Technologies Ltd ("MylesCorp", "we", "us", or "our") is a private limited company registered in Kenya, with its principal place of business at Westlands, Nairobi, Kenya. We operate website <a href="https://www.mylescorptech.com" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">www.mylescorptech.com</a> and provide AI-powered software products including EduMyles, EduRyde, MylesCare, AgriMyles, and MylesCRM.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website, use our products, or engage with our services. By using our website or services, you agree to practices described herein.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                This policy complies with <strong className="text-white font-semibold">Kenya Data Protection Act, 2019</strong> and, where applicable, <strong className="text-white font-semibold">General Data Protection Regulation (GDPR)</strong>.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s2">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 02</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Information We Collect</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Information you provide directly:</strong>
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Name, email address, phone number, and organisation name when you contact us, book a demo, or subscribe to our newsletter</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Account registration information when you sign up for any MylesCorp product</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Payment information processed securely via M-Pesa or our banking partners — we do not store card details</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Communications you send us via email, WhatsApp, or our contact forms</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Information collected automatically:</strong>
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">IP address, browser type, device type, and operating system</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Pages visited, time spent on pages, and referring URLs</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Cookie data and similar tracking technologies (see Section 9)</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Information from our products:</strong>
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">EduMyles and EduRyde: Student and staff records entered by school administrators</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">MylesCare: Patient records entered by healthcare facilities</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">AgriMyles: Farmer profiles, crop data, and location data</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">MylesCRM: Business contacts, sales data, and transaction records</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s3">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 03</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">How We Use Your Information</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We use information we collect to:
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Provide, operate, and improve our products and services</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Process transactions and send related confirmations</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Respond to enquiries, book demos, and provide customer support</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Send product updates, newsletters, and marketing communications (with your consent)</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Analyse usage patterns to improve our website and products</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Comply with legal obligations under Kenyan law</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Prevent fraud, abuse, and security threats</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We will <strong className="text-white font-semibold">never</strong> sell, rent, or trade your personal information to third parties for their marketing purposes.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s4">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 04</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Legal Basis for Processing</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Under Kenya Data Protection Act, 2019, we process your personal data on following legal bases:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Contract performance:</strong> Processing necessary to provide services you have requested</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Legitimate interests:</strong> Processing necessary for our legitimate business interests, provided these do not override your rights</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Consent:</strong> Where you have provided explicit consent, such as for marketing communications</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Legal obligation:</strong> Processing required to comply with applicable Kenyan laws and regulations</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s5">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 05</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Data Sharing & Disclosure</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We may share your information with:
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Service providers:</strong> Trusted third-party vendors who assist in operating our website and products under strict confidentiality agreements</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">M-Pesa / Safaricom:</strong> For payment processing — governed by Safaricom's own privacy policy</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">SHA and insurance partners:</strong> Only for MylesCare users, and only for claims processing purposes</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Legal authorities:</strong> Where required by law, court order, or regulatory requirement</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred subject to same privacy protections</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We do not share personal data with third parties for advertising or marketing purposes without your explicit consent.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s6">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 06</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Data Storage & Security</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Your data is stored on secure cloud infrastructure hosted on Vercel and AWS. We implement following security measures:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">SSL/TLS encryption for all data in transit</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">AES-256 encryption for sensitive data at rest</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Role-based access controls — staff only access data necessary for their role</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Regular security audits and vulnerability assessments</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Multi-factor authentication for internal system access</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s7">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 07</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Data Retention</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We retain your personal data only as long as necessary:
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Account data:</strong> Duration of your subscription plus 2 years after termination</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Transaction records:</strong> 7 years in compliance with Kenyan financial regulations</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Marketing consent records:</strong> Until you withdraw consent</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Website analytics data:</strong> 26 months</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Support communications:</strong> 3 years</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Upon expiry, data is securely deleted or anonymised.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s8">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 08</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Your Rights</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Under Kenya Data Protection Act, 2019, you have the right to: access your data, request rectification, request erasure, data portability, object to processing, and withdraw consent at any time. To exercise any right, contact us at <a href="mailto:privacy@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">privacy@mylescorptech.com</a>. We will respond within 30 days.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s9">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 09</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Cookies</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We use cookies and similar tracking technologies to enhance your experience. For full details please read our <Link href="/cookie-policy" className="text-[#C79639] no-underline hover:underline">Cookie Policy</Link>. You can control cookie preferences through your browser settings or our cookie consent banner.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s10">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 10</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Third-Party Links</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Our website may contain links to third-party websites including our social media pages. We are not responsible for privacy practices of external sites and encourage you to read their privacy policies before sharing any personal information.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s11">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 11</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Children's Privacy</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Our website is not directed at children under 18. For school-related products (EduMyles, EduRyde), student data is collected and managed by school as data controller — we act as a data processor. If you believe we have inadvertently collected information from a minor, contact us immediately at <a href="mailto:privacy@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">privacy@mylescorptech.com</a>.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s12">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 12</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Changes to This Policy</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We may update this Privacy Policy periodically. Material changes will be notified by updating "Last Updated" date, emailing registered users, and displaying a notice on our website. Continued use after changes constitutes acceptance.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s13">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 13</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Contact Us</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                For any questions regarding this Privacy Policy or your personal data:
              </p>
              <div className="bg-[#0d1929] border border-[rgba(199,150,57,0.15)] rounded-[12px] p-5.5 mt-7">
                <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-white mb-2.5">Data Protection Officer — MylesCorp Technologies Ltd</h4>
                <p className="text-[13px] text-[#95A9CC] leading-[1.8]">
                  Email: <a href="mailto:privacy@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">privacy@mylescorptech.com</a><br/>
                  Phone: <a href="tel:+254743993715" className="text-[#C79639] no-underline hover:underline">+254 743 993 715</a><br/>
                  Address: Westlands, Nairobi, Kenya<br/>
                  Website: <a href="https://www.mylescorptech.com" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">www.mylescorptech.com</a><br/>
                  Response time: Within 30 days
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Page Footer */}
      <div className="border-t border-[rgba(199,150,57,0.1)] px-10 py-5 flex justify-between items-center flex-wrap gap-3 max-w-[1100px] mx-auto">
        <div className="text-[11.5px] text-[#95A9CC]">© 2026 MylesCorp Technologies Ltd. All rights reserved.</div>
        <div className="font-['Playfair_Display'] text-[12px] italic text-[#C79639]">Transforming Industries, Empowering Generations.</div>
      </div>
      </div>
    </>
  )
}
