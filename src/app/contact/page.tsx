import { Layout } from '@/components/layout/Layout'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from 'lucide-react'
import { ContactForm } from '@/components/ui/ContactForm'
import { COMPANY_CONTACT, telHref } from '@/lib/constants/contact'

export const metadata = {
  title: 'Contact MylesCorp Technologies in Nairobi, Kenya',
  description: 'Contact MylesCorp Technologies in Nairobi. Call, email, or book a consultation for your school, clinic, farm, property team, or business.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/contact',
  },
}

const CONTACT_DATA = {
  overview: {
    title: 'Contact Us',
    tagline: 'Transforming Industries, Empowering Generations.',
    description: [
      'Have a project in mind? Need a demo? Want to partner with us?',
      'We would be glad to understand your goals and recommend the right next step.'
    ],
    image: '/api/og/product?name=Contact&category=Support',
    stats: [
      { number: '2hrs', label: 'Target Response' },
      { number: 'Nairobi', label: 'Head Office' },
      { number: '7', label: 'Core Products' },
      { number: 'East Africa', label: 'Market Focus' }
    ]
  },
  features: [
    {
      icon: 'mail',
      title: 'Multiple Contact Channels',
      description: 'Reach us by email, phone, or a scheduled consultation with the right team member.'
    },
    {
      icon: 'clock',
      title: 'Structured Response',
      description: 'New enquiries are routed to the right contact so requirements, timelines, and next steps are clear.'
    },
    {
      icon: 'map-pin',
      title: 'Nairobi-Based Team',
      description: 'MylesCorp Technologies is based in Nairobi and serves organisations across East African markets.'
    },
    {
      icon: 'users',
      title: 'Expert Team',
      description: 'Our team is ready to assist with your requirements, timelines, and next steps.'
    },
    {
      icon: 'target',
      title: 'Specialised Routing',
      description: 'Sales, partnership, technical, and general enquiries are handled through approved MylesCorp channels.'
    },
    {
      icon: 'shield',
      title: 'Professional Follow-Through',
      description: 'Every serious enquiry is handled with clear ownership, written context, and a practical next step.'
    }
  ],
  process: [
    { step: 1, title: 'Reach Out', description: 'Contact us through your preferred channel with your requirements' },
    { step: 2, title: 'Consultation', description: 'Our team will schedule a consultation to understand your needs' },
    { step: 3, title: 'Solution Design', description: 'We design a scope mapped to your users, workflows, data, and timeline' },
    { step: 4, title: 'Implementation', description: 'Our experts implement the solution with full support and training' },
    { step: 5, title: 'Ongoing Support', description: 'We provide continuous support and optimization for long-term success' }
  ],
  targets: [
    'New Customers - Organizations looking for systems modernisation support',
    'Existing Clients - Current customers needing support or additional services',
    'Partners - Companies interested in partnership and collaboration opportunities',
    'Job Seekers - Talented specialists looking to join our growing team'
  ],
  testimonials: [
    {
      quote: 'The MylesCorp team responded promptly, understood our requirements, and guided us with a clear plan.',
      author: 'Sarah Johnson',
      role: 'CEO',
      organization: 'TechStart Kenya'
    },
    {
      quote: 'Their technical support was clear, organised, and responsive when we needed help.',
      author: 'Michael Chen',
      role: 'IT Director',
      organization: 'East Africa Manufacturing'
    },
    {
      quote: 'From first contact to implementation, the MylesCorp team was organised and responsive.',
      author: 'Grace Wanjiku',
      role: 'Operations Manager',
      organization: 'Kenya Agricultural Cooperative'
    }
  ]
}

export default function ContactPage() {
  const departments = [
    {
      name: 'general',
      title: 'General Inquiries',
      email: COMPANY_CONTACT.infoEmail,
      phone: COMPANY_CONTACT.technicalPhone,
      description: 'For general questions and information about our services.'
    },
    {
      name: 'sales',
      title: 'Sales & Partnerships',
      email: COMPANY_CONTACT.salesEmail,
      phone: COMPANY_CONTACT.salesPhone,
      description: 'Interested in our products or partnership opportunities?'
    },
    {
      name: 'support',
      title: 'Technical Support',
      email: COMPANY_CONTACT.contactEmail,
      phone: COMPANY_CONTACT.technicalPhone,
      description: 'Need help with existing products or technical assistance.'
    },
    {
      name: 'careers',
      title: 'Human Resources',
      email: COMPANY_CONTACT.contactEmail,
      phone: COMPANY_CONTACT.salesPhone,
      description: 'Questions about job opportunities and working at MylesCorp.'
    },
  ]

  const offices = [
    {
      city: 'Nairobi',
      address: COMPANY_CONTACT.location,
      phone: COMPANY_CONTACT.technicalPhone,
      email: COMPANY_CONTACT.infoEmail,
      hours: COMPANY_CONTACT.businessHours,
      isHeadquarters: true
    },
  ]

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          {/* Grid texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Gold top accent line */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                GET IN TOUCH
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Let&apos;s{' '}
              <span className="text-white italic">
                Talk
              </span>
            </h1>

            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {CONTACT_DATA.overview.description[0]}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {CONTACT_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-[0.95rem] text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection
          title={CONTACT_DATA.overview.title}
          description={CONTACT_DATA.overview.description}
          stats={CONTACT_DATA.overview.stats}
        />

        {/* Contact Form and Info */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  CONTACT US
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Get in Touch
              </h2>
              <p className="font-body text-medium-grey text-lg md:text-xl max-w-2xl mx-auto leading-8">
                We&apos;re here to help. Reach out through any of the channels below and we&apos;ll respond within 2 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Send Us a Message</h3>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="font-display font-bold text-navy text-2xl md:text-3xl mb-6">Contact Information</h3>

                {/* Departments */}
                <div className="mb-12">
                  <h4 className="font-body font-semibold text-navy text-lg mb-4">Departments</h4>
                  <div className="space-y-4">
                    {departments.map((dept) => (
                      <div key={dept.name} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold/35">
                        <h5 className="font-display font-bold text-navy text-xl mb-2">{dept.title}</h5>
                        <p className="font-body text-medium-grey text-[0.98rem] leading-7 mb-4">{dept.description}</p>
                        <div className="space-y-2">
                          <div className="flex items-center text-sm">
                            <Mail size={16} className="text-gold mr-2" />
                            <a href={`mailto:${dept.email}`} className="font-body text-navy hover:text-gold transition-colors">
                              {dept.email}
                            </a>
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone size={16} className="text-gold mr-2" />
                            <a href={telHref(dept.phone)} className="font-body text-navy hover:text-gold transition-colors">
                              {dept.phone}
                            </a>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Contact */}
                <div className="rounded-[1.6rem] border border-gold/15 bg-navy p-7 text-white shadow-card">
                  <h4 className="font-display font-bold text-white text-xl mb-4">Quick Contact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-body font-semibold text-white">Main Line</div>
                        <a href={telHref(COMPANY_CONTACT.technicalPhone)} className="text-gold hover:text-gold-light">
                          {COMPANY_CONTACT.technicalPhone}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-body font-semibold text-white">Email</div>
                        <a href={`mailto:${COMPANY_CONTACT.infoEmail}`} className="text-gold hover:text-gold-light">
                          {COMPANY_CONTACT.infoEmail}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={20} className="text-gold mr-3" />
                      <div>
                        <div className="font-body font-semibold text-white">Business Hours</div>
                        <div className="font-body text-light-blue">{COMPANY_CONTACT.businessHours}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <FeaturesSection
          title="Why Contact MylesCorp?"
          description="We make it easy to connect with us and get the support you need for your systems modernisation plan."
          features={CONTACT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Our Contact Process"
          description="From first contact to successful implementation — we keep the experience clear, structured, and responsive."
          steps={CONTACT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Who We Help"
          targets={CONTACT_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Customers Say"
          testimonials={CONTACT_DATA.testimonials}
          centerHeader={true}
        />

        {/* Contact Hub */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  CONTACT HUB
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Nairobi Contact Hub
              </h2>
              <p className="font-body text-medium-grey text-lg md:text-xl max-w-2xl mx-auto leading-8">
                MylesCorp Technologies is based in Nairobi and supports product, project, and partnership conversations through approved contact channels.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 max-w-3xl mx-auto">
              {offices.map((office, index) => (
                <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-card shadow-card-hover transition-all duration-300 hover:-translate-y-1 hover:border-gold/35">
                  {office.isHeadquarters && (
                    <div className="inline-block bg-ice text-navy px-3 py-1 rounded-full text-sm font-semibold mb-4 font-body">
                      Headquarters
                    </div>
                  )}
                  <h3 className="font-display font-bold text-navy text-xl mb-4">{office.city}</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-[0.95rem] leading-6 text-medium-grey font-body">{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone size={16} className="text-gold mr-2" />
                      <a href={telHref(office.phone)} className="text-navy hover:text-gold font-body transition-colors">
                        {office.phone}
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="text-gold mr-2" />
                      <a href={`mailto:${office.email}`} className="text-navy hover:text-gold font-body transition-colors">
                        {office.email}
                      </a>
                    </div>
                    <div className="flex items-start">
                      <Clock size={16} className="text-gold mr-2 mt-1 flex-shrink-0" />
                      <span className="text-sm md:text-[0.95rem] leading-6 text-medium-grey font-body">{office.hours}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Priority Contact */}
        <section className="py-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  PRIORITY SUPPORT
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">Priority Product Support</h2>
              <p className="font-body text-light-blue text-xl md:text-2xl max-w-2xl mx-auto leading-9 mb-8">
                For active product support or urgent operational questions, use the approved technical contact channel.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold text-gold mb-2">Technical Phone</div>
                  <a href={telHref(COMPANY_CONTACT.technicalPhone)} className="text-xl text-white hover:text-gold transition-colors">
                    {COMPANY_CONTACT.technicalPhone}
                  </a>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-2xl font-bold text-gold mb-2">Email Support</div>
                  <a href={`mailto:${COMPANY_CONTACT.contactEmail}`} className="text-xl text-white hover:text-gold transition-colors">
                    {COMPANY_CONTACT.contactEmail}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <CTASection
          title="Ready to Modernise Your Operation?"
          tagline={CONTACT_DATA.overview.tagline}
          description="Contact us today to discuss your product, project, implementation, or partnership requirements."
          primaryCta={{ text: "Book a Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Call Us Now", href: telHref(COMPANY_CONTACT.technicalPhone) }}
        />
      </div>
    </Layout>
  )
}
