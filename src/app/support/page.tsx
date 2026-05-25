import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { ArrowRight, MessageCircle, Mail, Phone, Clock, Shield, Users, Headphones } from 'lucide-react'

export const metadata = {
  title: 'Support | MylesCorp Technologies',
  description: 'Get help and support for MylesCorp products. Contact our support team for technical assistance and guidance.',
}

const SUPPORT_DATA = {
  overview: {
    title: 'Support',
    tagline: 'Dedicated Support for Your Success',
    description: [
      'Our expert support team is here to help you get the most out of our products.',
      'From technical assistance to guidance, we ensure your success every step of the way.'
    ],
    image: '/api/og/product?name=Support&category=Help',
    stats: [
      { number: '24/7', label: 'Support Available' },
      { number: '< 1hr', label: 'Response Time' },
      { number: '98%', label: 'Satisfaction Rate' },
      { number: '4.9', label: 'Average Rating' }
    ]
  },
  features: [
    {
      icon: '🕒',
      title: '24/7 Availability',
      description: 'Round-the-clock support to ensure you get help whenever you need it.'
    },
    {
      icon: '🛡️',
      title: 'Expert Assistance',
      description: 'Knowledgeable support team with deep product expertise and technical skills.'
    },
    {
      icon: '⚡',
      title: 'Quick Response',
      description: 'Fast response times with average response under 1 hour for critical issues.'
    },
    {
      icon: '👥',
      title: 'Personalized Help',
      description: 'Tailored support solutions based on your specific needs and requirements.'
    },
    {
      icon: '🎯',
      title: 'Proactive Support',
      description: 'We identify and address potential issues before they impact your operations.'
    },
    {
      icon: '📚',
      title: 'Extensive Resources',
      description: 'Comprehensive documentation, tutorials, and knowledge base for self-service.'
    }
  ],
  process: [
    { step: 1, title: 'Contact Us', description: 'Reach out through your preferred channel - phone, email, or chat' },
    { step: 2, title: 'Initial Assessment', description: 'We quickly assess your issue and determine the best approach' },
    { step: 3, title: 'Solution Delivery', description: 'Our experts provide solutions and guidance to resolve your issue' },
    { step: 4, title: 'Follow-up', description: 'We ensure the solution works and address any additional concerns' },
    { step: 5, title: 'Feedback', description: 'We collect feedback to continuously improve our support services' }
  ],
  targets: [
    'Product Users - Individuals and teams using our software solutions daily',
    'System Administrators - IT teams managing and maintaining our products',
    'Business Owners - Leaders responsible for operational efficiency and success',
    'Technical Teams - Developers and engineers integrating with our platforms'
  ],
  testimonials: [
    {
      quote: 'The support team at MylesCorp is exceptional. They resolved our issue within minutes and provided clear guidance.',
      author: 'Sarah Johnson',
      role: 'System Administrator',
      organization: 'Kenya Healthcare Network'
    },
    {
      quote: '24/7 support has been a game-changer for our operations. Help is always available when we need it most.',
      author: 'Michael Chen',
      role: 'Operations Manager',
      organization: 'East Africa Logistics'
    },
    {
      quote: 'The support team was knowledgeable, responsive, and easy to work with.',
      author: 'Grace Wanjiku',
      role: 'CEO',
      organization: 'Nairobi Retail Group'
    }
  ]
}

export default function SupportPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                SUPPORT CENTER
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Dedicated Support
              <span className="text-white">
                For Your Success
              </span>
            </h1>

            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {SUPPORT_DATA.overview.description[0]}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {SUPPORT_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection
          title={SUPPORT_DATA.overview.title}
          description={SUPPORT_DATA.overview.description}
          stats={SUPPORT_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Why Choose Our Support"
          description="We provide support services to help your team use MylesCorp products with confidence."
          features={SUPPORT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Our Support Process"
          description="From contact to resolution — we ensure a smooth and efficient support experience."
          steps={SUPPORT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Who We Support"
          targets={SUPPORT_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="Customer Success Stories"
          testimonials={SUPPORT_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection
          title="Need Help? We're Here for You"
          tagline="Expert Support, Every Time."
          description="Contact our support team and get the help you need to succeed with our products."
          primaryCta={{ text: "Contact Support", href: "/contact" }}
          secondaryCta={{ text: "Browse Documentation", href: "/docs" }}
        />
      </div>
    </Layout>
  )
}
