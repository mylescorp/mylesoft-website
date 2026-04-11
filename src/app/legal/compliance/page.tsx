import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Shield, CheckCircle, FileText, Users, Lock, Eye, Award } from 'lucide-react'

export default function CompliancePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-navy via-navy-deep to-navy-900 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Floating Elements */}
          <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              {/* Eyebrow Label */}
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  COMPLIANCE
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.4}>
              <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
                Compliance & Security
              </h1>
            </ScrollReveal>
            
            <ScrollReveal direction="up" delay={0.6}>
              <p className="text-xl text-light-blue max-w-3xl mx-auto leading-relaxed font-body">
                Our commitment to maintaining the highest standards of data protection, privacy, and regulatory compliance across all our operations.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center mb-16">
                {/* Eyebrow Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                    STANDARDS
                  </span>
                  <div className="w-8 h-0.5 bg-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                  Regulatory Compliance
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                  We adhere to international and local regulatory standards to ensure trust and reliability.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gold/20">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Award className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy mb-4">ISO 9001:2015</h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    Certified Quality Management System ensuring consistent delivery of high-quality products and services.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gold/20">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <Shield className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy mb-4">GDPR Compliant</h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    Full compliance with General Data Protection Regulation for European customers and data subjects.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.5}>
                <div className="bg-gray-50 p-8 rounded-xl border border-gold/20">
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <FileText className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-navy mb-4">Data Protection Act</h3>
                  <p className="text-gray-600 leading-relaxed font-body">
                    Kenyan Data Protection Act compliance ensuring proper handling of personal data and privacy.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal direction="up" delay={0.2}>
              <div className="text-center mb-16">
                {/* Eyebrow Label */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                    SECURITY
                  </span>
                  <div className="w-8 h-0.5 bg-gold" />
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                  Data Security Measures
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                  Enterprise-grade security measures to protect your data and ensure business continuity.
                </p>
              </div>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal direction="up" delay={0.3}>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Lock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-navy mb-2">End-to-End Encryption</h3>
                      <p className="text-gray-600 font-body">
                        All data transmitted and stored using industry-standard AES-256 encryption protocols.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Eye className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-navy mb-2">Regular Audits</h3>
                      <p className="text-gray-600 font-body">
                        Quarterly security audits and penetration testing by independent third-party experts.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold text-navy mb-2">Access Control</h3>
                      <p className="text-gray-600 font-body">
                        Role-based access control with multi-factor authentication for all systems.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal direction="up" delay={0.4}>
                <div className="bg-navy text-white p-8 rounded-xl">
                  <h3 className="text-2xl font-display font-bold text-white mb-6">Security Certifications</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-body">SOC 2 Type II Certified</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-body">ISO 27001 Information Security</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-body">PCI DSS Compliant</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-body">HIPAA Compliant (Healthcare)</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-gold" />
                      <span className="font-body">Cloud Security Alliance Member</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-navy">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Compliance Questions?
              </h2>
              <p className="text-xl text-light-blue mb-8 font-body">
                Our compliance team is ready to answer your questions about our security and regulatory practices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Contact Compliance Team
                </Button>
                <Button variant="outline" size="lg">
                  Download Compliance Documents
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </div>
    </Layout>
  )
}
