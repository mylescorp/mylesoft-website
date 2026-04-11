import { Layout } from '@/components/layout/Layout'
import { CalComBooking } from '@/components/integrations/CalComBooking'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Calendar, Users, Check, Star, Download } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Book a Free Demo, MylesCorp Technologies Kenya',
  description: 'Book a free demo with MylesCorp and see how our AI-powered software can transform your school, clinic, farm or business in East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/book-demo',
  },
}

export default function BookDemoPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          {/* Grid texture overlay — always present on dark sections */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glow top-right */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />

          {/* Radial glow bottom-left */}
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                SCHEDULE A DEMO
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Book a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Demo
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              Experience our AI-powered solutions firsthand with a personalized demo 
              tailored to your organisation&apos;s needs.
            </p>

            {/* CTA button */}
            <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
              <Calendar className="mr-2 w-5 h-5" />
              Schedule Your Demo
            </button>
          </div>
        </section>

        {/* Demo Options */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Choose Your Demo Type</h2>
              <p className="body-text max-w-2xl mx-auto">
                We offer different demo formats to meet your specific needs and interests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Product Demo */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="brain" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Product Demo</h3>
                <p className="body-text mb-6">
                  Comprehensive demonstration of our solutions tailored to your industry and specific requirements.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>45-minute personalized walkthrough</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Q&A with solution experts</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Custom scenario demonstrations</span>
                  </div>
                </div>
              </div>

              {/* Consultation */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="users" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Strategic Consultation</h3>
                <p className="body-text mb-6">
                  In-depth discussion about your digital transformation needs and strategic roadmap development.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>60-minute strategic session</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>ROI analysis and recommendations</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Implementation planning</span>
                  </div>
                </div>
              </div>

              {/* Technical Support */}
              <div className="bg-white rounded-xl shadow-medium p-8 text-center hover:shadow-large transition-shadow">
                <div className="w-20 h-20 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="settings" className="text-gold-400" size={40} />
                </div>
                <h3 className="heading-3 mb-4">Technical Support</h3>
                <p className="body-text mb-6">
                  Get help with existing products, technical questions, or troubleshooting assistance.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>30-minute focused session</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Problem resolution guidance</span>
                  </div>
                  <div className="flex items-center">
                    <Check size={16} className="text-green-500 mr-2" />
                    <span>Best practice recommendations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form */}
        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Booking Form */}
              <div>
                <h2 className="heading-2 mb-6">Schedule Your Demo</h2>
                <CalComBooking />
              </div>

              {/* What to Expect */}
              <div>
                <h2 className="heading-2 mb-6">What to Expect</h2>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Calendar size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Pre-Demo Preparation</h3>
                      <p className="body-text">
                        We research your organization and industry to tailor the demonstration to your specific needs and challenges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Users size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Live Demonstration</h3>
                      <p className="body-text">
                        Interactive walkthrough of our solutions with real-world scenarios relevant to your operations.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Check size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Q&A and Discussion</h3>
                      <p className="body-text">
                        Comprehensive answers to your questions and strategic discussion about implementation and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Star size={24} className="text-gold-400" />
                    </div>
                    <div>
                      <h3 className="heading-3 mb-2">Follow-up Support</h3>
                      <p className="body-text">
                        Ongoing assistance and resources to ensure successful implementation and adoption.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="section bg-navy-500">
          <div className="section-padding">
            <div className="text-center text-white">
              <h2 className="heading-2 mb-4">Trusted by Leading Organizations</h2>
              <p className="text-xl text-navy-100 mb-8">
                Join 500+ organizations across East Africa who have transformed their operations with MylesCorp solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Educational Institutions' },
                { number: '100+', label: 'Healthcare Providers' },
                { number: '1,000+', label: 'Businesses' },
                { number: '95%', label: 'Satisfaction Rate' },
                { number: '18', label: 'Countries Served' },
                { number: '47', label: 'Kenyan Counties' },
                { number: '24/7', label: 'Support Available' },
                { number: '15+', label: 'Years Experience' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gold-400 mb-2">{stat.number}</div>
                  <div className="text-navy-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div className="section-padding">
            <div className="text-center">
              <h2 className="heading-2 mb-4">Ready to Transform Your Organization?</h2>
              <p className="body-text max-w-2xl mx-auto mb-8">
                Take the first step towards digital transformation. Schedule your personalized demo today and see how MylesCorp can help you achieve your goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">Schedule Your Demo</Button>
                <Link href="/brochure" transitionTypes={['slide']}>
                  <Button variant="secondary" className="flex items-center gap-2">
                    <Download size={16} />
                    Download Brochure
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
