import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { Palette, Smartphone, Users, Zap, Target, Check } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'UI/UX Design Services | MylesCorp Technologies',
  description: 'Professional UI/UX design services creating beautiful, intuitive, and user-centered digital experiences that drive engagement and conversion.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services/ui-ux-design',
  },
}

const UI_UX_DATA = {
  overview: {
    title: 'UI/UX Design Services',
    tagline: 'Creating Experiences That Delight and Convert',
    description: 'Our expert design team creates beautiful, intuitive, and user-centered digital experiences that drive engagement and business growth.',
    image: '/api/og/service?name=UI-UX-Design',
    stats: [
      { number: '200+', label: 'Projects Delivered' },
      { number: '95%', label: 'Client Satisfaction' },
      { number: '3x', label: 'Avg. Conversion Increase' },
      { number: '24/7', label: 'Design Support' }
    ]
  },
  services: [
    {
      icon: 'palette',
      title: 'UI Design',
      description: 'Beautiful and consistent user interfaces that align with your brand and business goals.'
    },
    {
      icon: 'smartphone',
      title: 'Responsive Design',
      description: 'Seamless experiences across all devices with mobile-first design approach.'
    },
    {
      icon: 'users',
      title: 'User Research',
      description: 'Deep understanding of user needs through research, interviews, and testing.'
    },
    {
      icon: 'zap',
      title: 'Prototyping',
      description: 'Interactive prototypes to validate ideas and gather feedback before development.'
    },
    {
      icon: 'target',
      title: 'Conversion Optimization',
      description: 'Data-driven design improvements to increase conversion rates and user engagement.'
    },
    {
      icon: 'check',
      title: 'Design Systems',
      description: 'Scalable design systems ensuring consistency across all your digital products.'
    }
  ],
  process: [
    { step: '1', title: 'Discovery', description: 'Research and analysis to understand your business and users' },
    { step: '2', title: 'Strategy', description: 'Design strategy and roadmap based on insights and goals' },
    { step: '3', title: 'Design', description: 'Create wireframes, mockups, and interactive prototypes' },
    { step: '4', title: 'Testing', description: 'User testing and iteration based on feedback' },
    { step: '5', title: 'Delivery', description: 'Final designs and design system handoff to development team' }
  ],
  industries: [
    { title: 'E-commerce', description: 'Online stores and marketplaces' },
    { title: 'SaaS', description: 'Software as a service applications' },
    { title: 'Mobile Apps', description: 'iOS and Android applications' },
    { title: 'Web Applications', description: 'Complex web-based software' }
  ],
  pricing: [
    {
      name: 'Startup Package',
      price: 'KSh 50,000',
      description: 'Perfect for startups and small businesses',
      features: ['User research', 'Wireframing', 'UI mockups', 'Basic prototype', 'Style guide', '2 revisions'],
      popular: false
    },
    {
      name: 'Professional Package',
      price: 'KSh 150,000',
      description: 'Ideal for growing businesses',
      features: ['Comprehensive research', 'Full UI/UX design', 'Interactive prototype', 'Design system', 'User testing', '3 revisions', 'Priority support'],
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      description: 'For large organizations',
      features: ['Full research program', 'Complete design system', 'Multi-platform design', 'Advanced prototyping', 'Extensive testing', 'Unlimited revisions', 'Dedicated team', 'Ongoing support'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesCorp redesigned our e-commerce platform and increased our conversion rate by 300%. Amazing work!',
      author: 'Amina Hassan',
      role: 'CEO',
      organization: 'Nairobi Fashion Hub'
    },
    {
      quote: 'The UX research and design process was thorough. Our users love the new interface!',
      author: 'David Ochieng',
      role: 'Product Manager',
      organization: 'Fintech Kenya'
    }
  ]
}

export default function UIUXDesignPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                DESIGN SERVICES
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {UI_UX_DATA.overview.title}
              <span className="text-white italic block mt-2">
                {UI_UX_DATA.overview.tagline}
              </span>
            </h1>

            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {UI_UX_DATA.overview.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-demo">
                <Button
                  size="lg"
                  variant="primary"
                  className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-sm font-semibold border-white text-white hover:border-white hover:bg-white/10"
                >
                  View Portfolio
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {UI_UX_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Our Design Services
              </h2>
              <p className="font-body text-light-blue text-lg md:text-xl max-w-2xl mx-auto leading-8">
                Comprehensive design services from research to final implementation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {UI_UX_DATA.services.map((service, index) => (
                <div key={index} className="bg-navy/5 rounded-2xl p-8 border border-navy-deep/10 hover:border-gold/30 transition-all duration-300">
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-6">
                    <Icon name={service.icon} size={24} className="text-gold" />
                  </div>
                  <h3 className="font-body font-bold text-navy text-xl mb-3">{service.title}</h3>
                  <p className="font-body text-light-blue leading-[1.7]">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-navy/5">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Our Design Process
              </h2>
              <p className="font-body text-light-blue text-lg md:text-xl max-w-2xl mx-auto leading-8">
                A systematic approach to creating exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-6">
              {UI_UX_DATA.process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="font-body font-bold text-navy text-lg mb-2">{step.title}</h3>
                  <p className="font-body text-light-blue text-sm leading-[1.6]">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-navy text-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
              Ready to Transform Your User Experience?
            </h2>
            <p className="font-body text-light-blue text-lg mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us for a free design consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo">
                <Button
                  size="lg"
                  variant="primary"
                  className="px-8 py-4 text-sm font-semibold"
                >
                  Book a Discovery Call
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="px-8 py-4 text-sm font-semibold border-white/80 text-white hover:border-white hover:bg-white/10"
                >
                  Request a Proposal
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
