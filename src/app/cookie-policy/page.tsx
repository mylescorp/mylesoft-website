'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function CookiePolicy() {
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
      <div className="min-h-screen bg-navy">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#C79639] to-[#A67C2E] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Navigation */}
      <nav className="sticky top-0 z-[100] bg-navy border-b border-[rgba(199,150,57,0.15)] px-10 h-[60px] flex items-center justify-between">
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
          <Link href="/terms-of-service" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Terms of Service
          </Link>
          <Link href="/cookie-policy" className="px-3 py-1.5 bg-[rgba(199,150,57,0.08)] border border-[rgba(199,150,57,0.3)] rounded-[6px] text-[#C79639] text-[11px] font-bold no-underline transition-all duration-180">
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
      <div className="bg-navy px-10 py-16 relative overflow-hidden border-b border-[rgba(199,150,57,0.1)]">
        <div className="max-w-[860px] mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-[rgba(199,150,57,0.3)] bg-[rgba(199,150,57,0.1)] rounded-full text-[10px] font-bold tracking-[2px] uppercase text-[#C79639] mb-5">
            Legal · Cookies & Tracking
          </div>
          <h1 className="font-['Playfair_Display'] font-bold text-white leading-tight mb-3.5" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
            Cookie <em className="text-[#C79639] italic">Policy</em>
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
            <a href="#s1" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">What Are Cookies</a>
            <a href="#s2" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Why We Use Cookies</a>
            <a href="#s3" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Types of Cookies We Use</a>
            <a href="#s4" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookie Inventory</a>
            <a href="#s5" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Third-Party Cookies</a>
            <a href="#s6" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookie Duration</a>
            <a href="#s7" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Managing Your Cookies</a>
            <a href="#s8" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Do Not Track</a>
            <a href="#s9" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Updates to This Policy</a>
            <a href="#s10" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Contact Us</a>

            <div className="h-[1px] bg-[rgba(199,150,57,0.08)] my-2.5" />
            <div className="mt-1.5">
              <div className="text-[9px] font-bold text-[rgba(149,169,204,0.4)] tracking-[1.5px] uppercase mb-1.5 pl-2.5">Other Legal</div>
              <Link href="/privacy-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Privacy Policy</Link>
              <Link href="/terms-of-service" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Terms of Service</Link>
              <Link href="/compliance" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Compliance</Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="bg-[rgba(199,150,57,0.06)] border border-[rgba(199,150,57,0.2)] rounded-[10px] p-[15px_18px] mb-7">
            <p className="text-[13px] text-[#C7D7EF] leading-[1.7] m-0">
              <strong className="text-[#C79639]">Summary:</strong> We use cookies to make our website work, understand how it is used, and improve your experience. You can control non-essential cookies at any time through your browser settings or our cookie banner.
            </p>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s1">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 01</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">What Are Cookies</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Cookies do not contain executable code and cannot be used to spread viruses. They cannot access other files on your device. They simply store small pieces of text that help websites remember you and your preferences.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s2">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 02</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Why We Use Cookies</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp Technologies Ltd uses cookies and similar technologies for the following purposes:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Essential operation:</strong> To ensure our website and products function correctly</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Authentication:</strong> To keep you logged into our products securely</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Analytics:</strong> To understand how visitors interact with our website so we can improve it</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Performance:</strong> To monitor and optimise speed and reliability of our services</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Preferences:</strong> To remember your settings and preferences</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Marketing:</strong> To deliver relevant content and measure effectiveness of our communications (only with your consent)</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s3">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 03</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Types of Cookies We Use</div>
            <div className="space-y-3">
              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Strictly Necessary Cookies</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These cookies are essential for the website to function. They cannot be disabled. They are typically set in response to actions you take such as logging in, setting privacy preferences, or filling in forms.
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Performance & Analytics Cookies</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These cookies collect information about how visitors use our website — which pages are most visited, where visitors come from, and any error messages. All information is aggregated and anonymous. We use this to improve the performance of our website.
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Functional Cookies</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These cookies allow the website to remember choices you make (such as your preferred language or region) and provide enhanced, personalised features. They may be set by us or by third-party providers whose services we have added to our pages.
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Targeting & Marketing Cookies</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                These cookies are used to deliver advertisements that are more relevant to you and your interests. They are also used to limit the number of times you see an advertisement and help measure the effectiveness of campaigns. We only deploy these with your explicit consent.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s4">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 04</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Cookie Inventory</div>
            <div className="space-y-3">
              <div className="overflow-x-auto my-3.5">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Cookie Name</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Provider</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Purpose</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Duration</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">__session</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCorp</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Maintains user session and authentication state</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Session</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.2)] text-[#fca5a5]">Essential</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">csrf_token</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCorp</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Protects against cross-site request forgery attacks</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Session</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.2)] text-[#fca5a5]">Essential</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">_vercel_no_cache</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Managed hosting provider</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Controls caching behaviour for hosting platform</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Session</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.2)] text-[#fca5a5]">Essential</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">_ga</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Google Analytics</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Distinguishes unique users for analytics reporting</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">2 years</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] text-[#93c5fd]">Analytics</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">_ga_*</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Google Analytics</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Persists session state across page requests</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">2 years</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] text-[#93c5fd]">Analytics</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">_gid</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Google Analytics</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Distinguishes users within a 24-hour session</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">24 hours</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] text-[#93c5fd]">Analytics</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">cookie_consent</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCorp</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Stores your cookie consent preferences</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">1 year</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(220,38,38,0.08)] border border-[rgba(220,38,38,0.2)] text-[#fca5a5]">Essential</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">theme_pref</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">MylesCorp</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Remembers your display preference (dark/light)</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">1 year</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Functional</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">tawkto_*</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Tawk.to</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Live chat functionality and session management</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">6 months</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Functional</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s5">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 05</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Third-Party Cookies</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Some cookies on our website are placed by third-party services. These include:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Google Analytics</strong> — website usage analytics. Governed by <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">Google's Privacy Policy</a></li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Hosting provider</strong> — hosting and performance infrastructure</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Tawk.to</strong> — live chat support widget</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We do not control third-party cookies and recommend reading the respective privacy policies for each provider.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s6">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 06</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Cookie Duration</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Cookies can be either <strong className="text-white font-semibold">session cookies</strong> (temporary — deleted when you close your browser) or <strong className="text-white font-semibold">persistent cookies</strong> (remain on your device for a specified duration or until you delete them manually).
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                All persistent cookies we set have a maximum duration of 2 years. We review our cookie inventory annually and remove any cookies that are no longer necessary.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s7">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 07</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Managing Your Cookies</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                You have several options for managing cookies:
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Browser Settings</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Most browsers allow you to control cookies through their settings. You can set your browser to refuse all cookies, accept only certain cookies, or delete existing cookies. Note that disabling essential cookies may affect the functionality of our website and products.
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Our Cookie Banner</h4>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                When you first visit our website, a cookie consent banner will appear. You can accept all cookies, reject non-essential cookies, or customise your preferences. You can change these preferences at any time by clicking "Cookie Settings" in our website footer.
              </p>

              <h4 className="text-[14px] font-bold text-white my-4 mb-2">Opt-Out Links</h4>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#C79639] no-underline hover:underline">Google Analytics Opt-out</a></li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s8">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 08</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Do Not Track</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Some browsers include a "Do Not Track" (DNT) feature that signals to websites that you do not want to be tracked. Our website currently does not respond to DNT signals, as there is no consistent industry standard for how to respond to such signals. We will update this policy if and when a standard is established.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s9">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 09</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Updates to This Policy</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We may update this Cookie Policy periodically to reflect changes in technology, legislation, or our business practices. We will notify you of significant changes by updating the "Last Updated" date on this page and by displaying a notice on our website.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s10">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 10</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Contact Us</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                If you have any questions about our use of cookies:
              </p>
              <div className="bg-[#0d1929] border border-[rgba(199,150,57,0.15)] rounded-[12px] p-5.5 mt-7">
                <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-white mb-2.5">MylesCorp Technologies Ltd — Cookie Enquiries</h4>
                <p className="text-[13px] text-[#95A9CC] leading-[1.8]">
                  Email: <a href="mailto:privacy@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">privacy@mylescorptech.com</a><br/>
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
