import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Icon } from '@/components/ui/Icon'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import Link from 'next/link'
import { Shield, FileText, Clock, DollarSign, Users, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesLegal - Law Practice Management Software | MylesCorp Technologies',
  description: 'Comprehensive practice management solution for law firms. Case management, document management, time tracking, and billing system in one platform.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/myleslegal',
  },
}

const MYLESLEGAL_DATA = {
  overview: {
    title: 'MylesLegal',
    tagline: 'Smart Practice Management for Modern Law Firms',
    description: [
      'Transform your law firm with our comprehensive practice management solution designed specifically for the African legal landscape.',
      'Case management, document management, time tracking, and billing system in one platform.'
    ],
    image: '/api/og/product?name=MylesLegal&category=Legal',
    stats: [
      { number: '500+', label: 'Law Firms' },
      { number: '50K+', label: 'Cases Managed' },
      { number: '99.9%', label: 'Uptime' },
      { number: '24/7', label: 'Support' }
    ]
  },
  features: [
    {
      icon: '📝',
      title: 'Case Management',
      description: 'Comprehensive case tracking with deadlines, documents, and client communication all in one place.'
    },
    {
      icon: '🛡️',
      title: 'Document Management',
      description: 'Secure document storage with version control, sharing permissions, and advanced search capabilities.'
    },
    {
      icon: '🗓️',
      title: 'Time Tracking',
      description: 'Automated time tracking with billable hour calculation and detailed activity logs.'
    },
    {
      icon: '💳',
      title: 'Billing System',
      description: 'Automated invoicing, expense tracking, and payment processing with multiple payment methods.'
    },
    {
      icon: '👥',
      title: 'Client Portal',
      description: 'Secure client portal for case updates, document sharing, and communication.'
    },
    {
      icon: '✅',
      title: 'Compliance Tools',
      description: 'Built-in compliance checks for legal regulations and court requirements.'
    }
  ],
  process: [
    { step: 1, title: 'Setup', description: 'Quick 30-minute setup with data migration assistance' },
    { step: 2, title: 'Configure', description: 'Customize workflows, templates, and user permissions' },
    { step: 3, title: 'Train', description: 'Comprehensive training for your team with ongoing support' },
    { step: 4, title: 'Launch', description: 'Go live with your dedicated account manager' },
    { step: 5, title: 'Scale', description: 'Add more features and users as your firm grows' }
  ],
  targets: [
    'Solo Practitioners - Perfect for independent lawyers and small firms',
    'Mid-size Firms - Scalable solution for growing legal practices',
    'Large Firms - Enterprise features for established law firms',
    'Corporate Legal - In-house legal teams and corporate counsel'
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 5,000/month',
      description: 'Perfect for solo practitioners',
      features: ['Up to 3 users', 'Basic case management', 'Document storage (5GB)', 'Email support', 'Mobile app access'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 15,000/month',
      description: 'Ideal for growing firms',
      features: ['Up to 15 users', 'Advanced case management', 'Document storage (50GB)', 'Priority support', 'Client portal', 'Time tracking', 'Basic reporting', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large firms and enterprises',
      features: ['Unlimited users', 'Full feature access', 'Unlimited storage', 'Dedicated support', 'Custom integrations', 'Advanced analytics', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesLegal transformed how we manage our cases. Everything is now organized and accessible.',
      author: 'Sarah Johnson',
      role: 'Managing Partner',
      organization: 'Johnson & Associates'
    },
    {
      quote: 'The billing system alone saved us 10 hours per week. Incredible ROI!',
      author: 'Michael Chen',
      role: 'Senior Partner',
      organization: 'LegalEdge Partners'
    }
  ]
}

export default function MylesLegalPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
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
                LEGAL TECH SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESLEGAL_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESLEGAL_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESLEGAL_DATA.overview.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-demo">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
                >
                  Book Free Demo
                </Button>
              </Link>
              <Link href="/pricing">
                <Button 
                  size="lg" 
                  variant="outline"
                  className="px-8 py-4 text-sm font-semibold border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-navy"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESLEGAL_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESLEGAL_DATA.overview.title}
          description={MYLESLEGAL_DATA.overview.description}
          stats={MYLESLEGAL_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Powerful Features for Modern Law Firms"
          description="Everything you need to manage your practice efficiently and grow your client base."
          features={MYLESLEGAL_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Up and Running in 5 Steps"
          description="From sign-up to managing your law firm digitally — a clear and simple onboarding process."
          steps={MYLESLEGAL_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Built for Every Law Firm"
          targets={MYLESLEGAL_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your law firm. All plans include free setup and support."
          plans={MYLESLEGAL_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="Success Stories"
          testimonials={MYLESLEGAL_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Ready to Transform Your Law Practice?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESLEGAL_DATA.overview.stats[0].number} law firms across East Africa already using MylesLegal.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
