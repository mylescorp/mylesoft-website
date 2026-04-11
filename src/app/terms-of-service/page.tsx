'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function TermsOfService() {
  const [scrollProgress, setScrollProgress] = useState(0)

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
          <Link href="/privacy-policy" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="px-3 py-1.5 bg-[rgba(199,150,57,0.08)] border border-[rgba(199,150,57,0.3)] rounded-[6px] text-[#C79639] text-[11px] font-bold no-underline transition-all duration-180">
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
            Legal · User Agreement
          </div>
          <h1 className="font-['Playfair_Display'] font-bold text-white leading-tight mb-3.5" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
            Terms of <em className="text-[#C79639] italic">Service</em>
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
            <a href="#s1" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Agreement to Terms</a>
            <a href="#s2" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Use of Our Services</a>
            <a href="#s3" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">User Accounts</a>
            <a href="#s4" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Products & Subscriptions</a>
            <a href="#s5" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Payment Terms</a>
            <a href="#s6" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Intellectual Property</a>
            <a href="#s7" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Acceptable Use</a>
            <a href="#s8" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Disclaimer of Warranties</a>
            <a href="#s9" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Limitation of Liability</a>
            <a href="#s10" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Indemnification</a>
            <a href="#s11" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Termination</a>
            <a href="#s12" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Governing Law</a>
            <a href="#s13" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Dispute Resolution</a>
            <a href="#s14" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Changes to Terms</a>
            <a href="#s15" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Contact Us</a>
            
            <div className="h-[1px] bg-[rgba(199,150,57,0.08)] my-2.5" />
            <div className="mt-1.5">
              <div className="text-[9px] font-bold text-[rgba(149,169,204,0.4)] tracking-[1.5px] uppercase mb-1.5 pl-2.5">Other Legal</div>
              <Link href="/privacy-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Privacy Policy</Link>
              <Link href="/cookie-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookie Policy</Link>
              <Link href="/compliance" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Compliance</Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="bg-[rgba(199,150,57,0.06)] border border-[rgba(199,150,57,0.2)] rounded-[10px] p-[15px_18px] mb-7">
            <p className="text-[13px] text-[#C7D7EF] leading-[1.7] m-0">
              <strong className="text-[#C79639]">Please read these Terms of Service carefully before using MylesCorp Technologies Ltd products or services. By accessing or using our services, you agree to be bound by these terms.</strong>
            </p>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s1">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 01</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Agreement to Terms</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These Terms of Service (&ldquo;Terms&rdquo;) constitute a legally binding agreement between you (&ldquo;User&rdquo;, &ldquo;Client&rdquo;, or &ldquo;you&rdquo;) and MylesCorp Technologies Ltd (&ldquo;MylesCorp&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;), a company registered in Kenya with its principal office at Westlands, Nairobi, Kenya.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                By accessing our website at <a href="https://www.mylescorptech.com" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">www.mylescorptech.com</a>, subscribing to any MylesCorp product, or engaging our services, you confirm that you have read, understood, and agree to be bound by these Terms and our Privacy Policy.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                If you are entering into these Terms on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s2">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 02</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Use of Our Services</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp provides AI-powered software solutions including EduMyles (school management), EduRyde (school transport tracking), MylesCare (healthcare management), AgriMyles (agricultural platform), and MylesCRM (business CRM), as well as custom software development, website development, IT consulting, cloud solutions, and UI/UX design services.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                You may use our services only for lawful purposes and in accordance with these Terms. You agree not to use our services:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">In any way that violates any applicable Kenyan or international law or regulation</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">To transmit any unsolicited or unauthorised advertising or promotional material</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">To impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">To engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s3">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 03</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">User Accounts</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                When you create an account with us, you must provide accurate, current, and complete information. You are responsible for:
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Maintaining confidentiality of your account credentials</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">All activities that occur under your account</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Notifying us immediately of any unauthorised use of your account at <a href="mailto:security@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">security@mylescorptech.com</a></li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We reserve right to suspend or terminate accounts that violate these Terms or that we reasonably believe are being used fraudulently.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s4">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 04</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Products & Subscriptions</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp products are offered on a subscription basis. Subscription plans, pricing, and features are as described on our website and in your signed agreement. Current pricing:
              </p>
              <div className="overflow-x-auto my-3.5">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Product</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Starting Price</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Billing</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">EduMyles</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">KES 5,000/month</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Monthly or Annual</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">EduRyde</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">KES 3,000/month</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Monthly or Annual</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCare</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">KES 8,000/month</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Monthly or Annual</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">AgriMyles</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Free – KES 20,000/month</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Monthly or Annual</td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCRM</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">KES 3,500/month</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Monthly or Annual</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp reserves right to modify pricing with 30 days' written notice to existing subscribers.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s5">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 05</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Payment Terms</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Payment methods:</strong> M-Pesa (Paybill), bank transfer, or cheque. All prices are in Kenya Shillings (KES) inclusive of VAT at 16%.
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Subscription payments</strong> are due on the first day of each billing cycle</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Project deposits</strong> of 50% are required before work commences</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Late payments</strong> attract a 2% per month charge on outstanding balances</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Disputed invoices</strong> must be raised in writing within 14 days of receipt</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">We reserve right to suspend services for accounts overdue by more than 30 days</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s6">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 06</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Intellectual Property</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">MylesCorp's IP:</strong> All MylesCorp products, including EduMyles, EduRyde, MylesCare, AgriMyles, MylesCRM, and all associated software, documentation, designs, and brand assets are the exclusive intellectual property of MylesCorp Technologies Ltd.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Custom development:</strong> For bespoke software projects, intellectual property ownership is as specified in the signed project agreement. Unless explicitly agreed otherwise in writing, MylesCorp retains all IP in the underlying technology; clients receive a perpetual licence to use deliverables.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">Your data:</strong> You retain ownership of all data you input into MylesCorp products. We process this data as a data processor on your behalf.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s7">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 07</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Acceptable Use</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                You agree not to:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Attempt to reverse-engineer, decompile, or disassemble any MylesCorp software</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Share account credentials with unauthorised users</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Use our services to store or transmit malicious code</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Attempt to gain unauthorised access to any part of our systems</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Use our services in any way that could damage, disable, or impair our infrastructure</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Resell or sublicense MylesCorp products without written authorisation</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s8">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 08</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Disclaimer of Warranties</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp provides its services "as is" and "as available". While we strive for 99.9% uptime and take all reasonable measures to ensure reliability, we do not warrant that:
              </p>
              <ul className="pl-[18px] mb-3 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Our services will be uninterrupted, timely, secure, or error-free</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Results obtained from using our services will be accurate or reliable</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Any errors in software will be corrected</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                This disclaimer does not affect any statutory rights you may have under Kenyan law.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s9">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 09</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Limitation of Liability</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                To the maximum extent permitted by law, MylesCorp's total cumulative liability to you for any claims arising under or related to these Terms shall not exceed the total fees paid by you to MylesCorp in the 12 months preceding the claim.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, goodwill, or business opportunities.
              </p>
              <div className="bg-[rgba(220,38,38,0.05)] border border-[rgba(220,38,38,0.2)] rounded-[10px] p-[15px_18px] my-3.5">
                <p className="text-[13px] text-[#fca5a5] leading-[1.7] m-0">
                  <strong className="text-white">Note:</strong> Some jurisdictions do not allow limitations on implied warranties or exclusion of consequential damages. If these laws apply to you, some or all of the above limitations may not apply.
                </p>
              </div>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s10">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 10</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Indemnification</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                You agree to indemnify, defend, and hold harmless MylesCorp Technologies Ltd, its directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or in connection with:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Your use of our services in violation of these Terms</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Your violation of any third-party rights including intellectual property rights</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Any data you submit, post, or transmit through our services</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s11">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 11</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Termination</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">By you:</strong> You may terminate your subscription at any time by providing 14 days' written notice to <a href="mailto:accounts@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">accounts@mylescorptech.com</a>. No refunds are provided for unused subscription periods unless otherwise agreed.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                <strong className="text-white font-semibold">By MylesCorp:</strong> We may suspend or terminate your access immediately if you breach these Terms, fail to make payment, or if we are required to do so by law. We may also terminate with 30 days' notice for any business reason.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Upon termination, your right to use the service ceases immediately. We will provide your data in a standard format within 30 days of termination upon written request.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s12">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 12</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Governing Law</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These Terms of Service are governed by and construed in accordance with the laws of the Republic of Kenya, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts of Kenya for any disputes arising under these Terms.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s13">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 13</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Dispute Resolution</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                In the event of a dispute arising out of or relating to these Terms, parties agree to first attempt to resolve the dispute through good-faith negotiation for a period of 30 days.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                If the dispute cannot be resolved through negotiation, it shall be referred to mediation under the Nairobi Centre for International Arbitration (NCIA) Mediation Rules. If mediation fails, the dispute shall be resolved by arbitration in accordance with the NCIA Arbitration Rules.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s14">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 14</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Changes to Terms</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp reserves the right to modify these Terms at any time. We will notify you of material changes by email and by updating the "Last Updated" date on this page. Your continued use of our services after such notification constitutes acceptance of the updated Terms.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s15">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 15</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Contact Us</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                For any questions regarding these Terms of Service:
              </p>
              <div className="bg-[#0d1929] border border-[rgba(199,150,57,0.15)] rounded-[12px] p-5.5 mt-7">
                <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-white mb-2.5">Legal Team — MylesCorp Technologies Ltd</h4>
                <p className="text-[13px] text-[#95A9CC] leading-[1.8]">
                  Email: <a href="mailto:legal@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">legal@mylescorptech.com</a><br/>
                  Phone: <a href="tel:+254743993715" className="text-[#C79639] no-underline hover:underline">+254 743 993 715</a><br/>
                  Address: Westlands, Nairobi, Kenya<br/>
                  Website: <a href="https://www.mylescorptech.com" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">www.mylescorptech.com</a>
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
