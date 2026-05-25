'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function Compliance() {
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
          <Link href="/cookie-policy" className="px-3 py-1.5 bg-white/4 border border-white/8 rounded-[6px] text-[#95A9CC] text-[11px] font-bold no-underline transition-all duration-180 hover:bg-[rgba(199,150,57,0.08)] hover:border-[rgba(199,150,57,0.3)] hover:text-[#C79639]">
            Cookie Policy
          </Link>
          <Link href="/compliance" className="px-3 py-1.5 bg-[rgba(199,150,57,0.08)] border border-[rgba(199,150,57,0.3)] rounded-[6px] text-[#C79639] text-[11px] font-bold no-underline transition-all duration-180">
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
            Legal · Regulatory Compliance
          </div>
          <h1 className="font-['Playfair_Display'] font-bold text-white leading-tight mb-3.5" style={{ fontSize: 'clamp(30px, 4vw, 50px)' }}>
            Compliance <em className="text-[#C79639] italic">Standards</em>
          </h1>
          <div className="flex gap-5 flex-wrap text-[12px] text-[#95A9CC]">
            <span>Reviewed: March 2026</span>
            <span>ISO 9001:2015 Certified</span>
            <span>GDPR & DPA Compliant</span>
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
            <a href="#s1" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Our Compliance Commitment</a>
            <a href="#s2" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Kenya Data Protection Act (2019)</a>
            <a href="#s3" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">GDPR Compliance</a>
            <a href="#s4" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">ISO 9001:2015 Certification</a>
            <a href="#s5" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Consumer Protection Act</a>
            <a href="#s6" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Kenya Information & Communications Act</a>
            <a href="#s7" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Healthcare Compliance (SHA)</a>
            <a href="#s8" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Education Compliance</a>
            <a href="#s9" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Security Standards</a>
            <a href="#s10" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Reporting a Concern</a>
            <a href="#s11" className="block text-[11.5px] text-[#95A9CC] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Compliance Contacts</a>

            <div className="h-[1px] bg-[rgba(199,150,57,0.08)] my-2.5" />
            <div className="mt-1.5">
              <div className="text-[9px] font-bold text-[rgba(149,169,204,0.4)] tracking-[1.5px] uppercase mb-1.5 pl-2.5">Other Legal</div>
              <Link href="/privacy-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Privacy Policy</Link>
              <Link href="/terms-of-service" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Terms of Service</Link>
              <Link href="/cookie-policy" className="block text-[11px] text-[rgba(149,169,204,0.5)] no-underline py-1.5 pl-2.5 border-l-2 border-transparent transition-all duration-150 leading-[1.4] hover:text-[#C79639] hover:border-[#C79639]">Cookie Policy</Link>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main>
          <div className="bg-[rgba(199,150,57,0.06)] border border-[rgba(199,150,57,0.2)] rounded-[10px] p-[15px_18px] mb-7">
            <p className="text-[13px] text-[#C7D7EF] leading-[1.7] m-0">
              <strong className="text-[#C79639]">MylesCorp Technologies Ltd is committed to full compliance with all applicable Kenyan laws, international standards, and industry regulations. This page outlines our key compliance obligations and how we meet them.</strong>
            </p>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s1">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 01</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Our Compliance Commitment</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp Technologies Ltd operates with the highest standards of legal compliance, ethical business conduct, and data governance. We view compliance not as a burden but as a foundation for building trust with our clients, partners, and the communities we serve across East Africa.
              </p>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Our compliance programme is overseen by our executive leadership team and reviewed annually. We maintain records of all compliance activities and are committed to continuous improvement in our governance standards.
              </p>
              <div className="overflow-x-auto my-3.5">
                <table className="w-full border-collapse text-[13px]">
                  <thead>
                    <tr>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Compliance Area</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Standard / Law</th>
                      <th className="bg-[#1A395B] text-white font-bold px-3.5 py-2.5 text-left text-[11px] tracking-[0.5px] border-t-[2px] border-[#C79639]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Data Protection</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Kenya Data Protection Act, 2019</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Compliant</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">International Data</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">GDPR (where applicable)</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(59,130,246,0.08)] border border-[rgba(59,130,246,0.2)] text-[#93c5fd]">Compliant</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Quality Management</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">ISO 9001:2015</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Certified</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Consumer Rights</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Kenya Consumer Protection Act, 2012</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Compliant</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">ICT Regulation</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Kenya ICT Act (Cap 411A)</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Compliant</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Healthcare</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">SHA Integration Standards</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Compliant</span>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/2 transition-colors">
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">Education</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">CBC & MoE Standards</td>
                      <td className="px-3.5 py-2.5 border-b border-[rgba(199,150,57,0.08)] text-[#C7D7EF] align-top leading-[1.6]">
                        <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-bold bg-[rgba(199,150,57,0.1)] border border-[rgba(199,150,57,0.25)] text-[#C79639]">Compliant</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s2">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 02</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Kenya Data Protection Act (2019)</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                The Kenya Data Protection Act, 2019 (DPA) is the primary legislation governing personal data processing in Kenya. MylesCorp complies with the DPA in the following ways:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Registration:</strong> Registered as a Data Controller and Data Processor with the Office of the Data Protection Commissioner (ODPC)</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Lawful processing:</strong> We process personal data only on lawful bases as defined in Section 30 of the DPA</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Data minimisation:</strong> We collect only the minimum data necessary for the stated purpose</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Data subject rights:</strong> We have established processes to respond to access, rectification, erasure, and portability requests within 30 days</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Privacy by design:</strong> Data protection principles are embedded into all our product development processes</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Data breach notification:</strong> We maintain procedures to notify the ODPC and affected individuals within 72 hours of a confirmed breach</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s3">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 03</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">GDPR Compliance</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                For clients and users in the European Economic Area (EEA), or where we process data of EEA residents, we comply with the General Data Protection Regulation (GDPR):
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Legal bases:</strong> We document and maintain records of legal basis for every data processing activity</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Data Processing Agreements (DPAs):</strong> Available for all enterprise clients upon request</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">International transfers:</strong> Data transfers outside the EEA are governed by Standard Contractual Clauses (SCCs)</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Data Protection Impact Assessments (DPIAs):</strong> Conducted for all high-risk processing activities</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                To request a Data Processing Agreement, contact <a href="mailto:legal@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">legal@mylescorptech.com</a>.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s4">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 04</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">ISO 9001:2015 Certification</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCorp Technologies Ltd is ISO 9001:2015 certified, demonstrating our commitment to quality management systems. This certification covers:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Software development and delivery processes</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Customer service and support operations</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Project management and delivery</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Continuous improvement processes</li>
              </ul>
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Our quality management system is audited annually by an accredited certification body. The certification ensures that our products and services consistently meet client and regulatory requirements.
              </p>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s5">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 05</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Consumer Protection Act</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                We comply with the Kenya Consumer Protection Act, 2012, which ensures that consumers are protected from unfair trade practices. Our commitments include:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Clear, accurate, and transparent pricing with no hidden fees</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Honest marketing and advertising — we only make claims we can substantiate</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Fair contract terms that do not unfairly disadvantage clients</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">A clear complaints and dispute resolution process</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">The right to cancel services as described in our Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s6">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 06</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Kenya Information & Communications Act</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                As a technology company operating in Kenya, we comply with the Kenya Information and Communications Act (Cap 411A) and regulations issued by the Communications Authority of Kenya (CA):
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Our software products meet the technical standards prescribed by the CA</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">We do not engage in or facilitate cybercrime as defined in the Computer Misuse and Cybercrimes Act, 2018</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">All electronic communications comply with applicable regulations</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s7">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 07</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Healthcare Compliance (SHA)</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                MylesCare, our healthcare management platform, is designed to comply with Kenya's Social Health Authority (SHA) standards and healthcare data requirements:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">SHA insurance claims integration built to MoH specifications</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Patient data handled in compliance with DPA and health sector guidelines</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Electronic Medical Records (EMR) meet Kenya EMR Interoperability Standards</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">All healthcare data is encrypted and access-controlled to protect patient confidentiality</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s8">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 08</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Education Compliance</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                EduMyles and EduRyde are built in compliance with Kenya's Ministry of Education requirements:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Full support for Competency Based Curriculum (CBC) including Grade 1–9 report card formats</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Compliance with Basic Education Act, 2013</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">Student data protection — schools retain data ownership; MylesCorp acts as data processor</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]">EduRyde GPS tracking complies with NTSA regulations for school transport</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s9">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 09</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Security Standards</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                Our security practices are aligned with internationally recognised standards:
              </p>
              <ul className="pl-[18px] mb-0 space-y-1.5">
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Encryption:</strong> AES-256 at rest · TLS 1.3 in transit</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Access control:</strong> Role-based access with principle of least privilege</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Authentication:</strong> Multi-factor authentication enforced for all admin accounts</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Vulnerability management:</strong> Regular penetration testing and vulnerability scanning</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Incident response:</strong> Documented incident response plan tested annually</li>
                <li className="text-[13.5px] text-[#C7D7EF] leading-[1.85] font-light marker:text-[#C79639]"><strong className="text-white font-semibold">Business continuity:</strong> Automated backups with 99.9% uptime SLA</li>
              </ul>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s10">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 10</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Reporting a Concern</div>
            <div className="space-y-3">
              <p className="text-[13.5px] text-[#C7D7EF] leading-[1.9] font-light">
                If you have a compliance concern, wish to report a potential breach of our policies, or believe MylesCorp is not meeting its legal obligations, please contact us immediately. All reports are treated confidentially and investigated promptly.
              </p>
              <div className="bg-[rgba(220,38,38,0.05)] border border-[rgba(220,38,38,0.2)] rounded-[10px] p-[15px_18px] my-3.5">
                <p className="text-[13px] text-[#fca5a5] leading-[1.7] m-0">
                  <strong className="text-white">To report a data breach or security incident urgently:</strong> Email <a href="mailto:security@mylescorptech.com" className="text-[#fca5a5]" style={{ color: '#fca5a5' }}>security@mylescorptech.com</a> or call +254 743 993 715. We respond to security incidents within 4 hours.
                </p>
              </div>
            </div>
          </div>

          <div className="sec mb-10 scroll-mt-[76px]" id="s11">
            <div className="text-[9.5px] font-bold text-[#C79639] tracking-[2px] uppercase mb-1.5">Section 11</div>
            <div className="font-['Playfair_Display'] text-[21px] font-bold text-white mb-3.5 pb-2.5 border-b border-[rgba(199,150,57,0.14)]">Compliance Contacts</div>
            <div className="space-y-3">
              <div className="bg-[#0d1929] border border-[rgba(199,150,57,0.15)] rounded-[12px] p-5.5 mt-7">
                <h4 className="font-['Playfair_Display'] text-[15px] font-bold text-white mb-2.5">Compliance & Legal Team — MylesCorp Technologies Ltd</h4>
                <p className="text-[13px] text-[#95A9CC] leading-[1.8]">
                  General compliance: <a href="mailto:compliance@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">compliance@mylescorptech.com</a><br/>
                  Data protection: <a href="mailto:privacy@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">privacy@mylescorptech.com</a><br/>
                  Legal enquiries: <a href="mailto:legal@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">legal@mylescorptech.com</a><br/>
                  Security incidents: <a href="mailto:security@mylescorptech.com" className="text-[#C79639] no-underline hover:underline">security@mylescorptech.com</a><br/>
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
        <div className="font-['Playfair_Display'] text-[12px] italic text-[#C79639]">Software for African institutions.</div>
      </div>
      </div>
    </>
  )
}
