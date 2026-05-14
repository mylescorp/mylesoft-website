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
import { MapPin, Users, Calendar, DollarSign, Route, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesTransit - Transportation Management Software | MylesCorp Technologies',
  description: 'Comprehensive transportation management solution for logistics companies, schools, and public transport. Optimize routes and manage fleets efficiently.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylestransit',
  },
}

const MYLESTRANSIT_DATA = {
  overview: {
    title: 'MylesTransit',
    tagline: 'Smart Transportation Management for Fleet Excellence',
    description: [
      'Comprehensive transportation management solution designed for African logistics and transport businesses.',
      'Optimize routes, manage fleets, and improve operational efficiency with intelligent automation.'
    ],
    image: '/api/og/product?name=MylesTransit&category=Transportation',
    stats: [
      { number: '120+', label: 'Transport Clients' },
      { number: '5K+', label: 'Vehicles Managed Daily' },
      { number: '30%', label: 'Fuel Efficiency' },
      { number: '24/7', label: 'Fleet Monitoring' }
    ]
  },
  features: [
    {
      icon: '📍',
      title: 'Route Optimization',
      description: 'AI-powered route planning with real-time traffic updates and fuel optimization.'
    },
    {
      icon: '👥',
      title: 'Fleet Management',
      description: 'Complete fleet tracking with maintenance scheduling and performance monitoring.'
    },
    {
      icon: '📅',
      title: 'Driver Management',
      description: 'Driver scheduling, performance tracking, and compliance management.'
    },
    {
      icon: '💰',
      title: 'Cost Tracking',
      description: 'Real-time expense tracking with fuel monitoring and cost optimization analytics.'
    },
    {
      icon: '🛣️',
      title: 'Dispatch Management',
      description: 'Automated dispatch system with load optimization and delivery tracking.'
    },
    {
      icon: '✅',
      title: 'Compliance Tools',
      description: 'Regulatory compliance, safety monitoring, and audit trail management.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Fleet analysis and workflow optimization assessment' },
    { step: 2, title: 'Setup', description: 'System configuration and fleet data migration' },
    { step: 3, title: 'Train', description: 'Driver and staff training on transportation modules' },
    { step: 4, title: 'Launch', description: 'Go-live with transportation support team' },
    { step: 5, title: 'Optimize', description: 'Continuous improvement based on fleet performance data' }
  ],
  targets: [
    'Logistics Companies - Freight and cargo transportation businesses',
    'School Transport - Educational institution transportation services',
    'Public Transport - Bus and shuttle service operators',
    'Delivery Services - Last-mile delivery and courier companies'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KSh 8,000/month',
      description: 'Perfect for small transport operations',
      features: ['Up to 20 vehicles', 'Basic route planning', 'Fleet tracking', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 25,000/month',
      description: 'Ideal for medium transport companies',
      features: ['Up to 100 vehicles', 'Advanced route optimization', 'Driver management', 'Cost tracking', 'Priority support', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large transportation fleets',
      features: ['Unlimited vehicles', 'Full feature access', 'Multi-depot management', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesTransit helped us reduce fuel costs by 30% while improving on-time performance by 25%.',
      author: 'Peter Kamau',
      role: 'Operations Manager',
      organization: 'Nairobi Logistics Ltd'
    },
    {
      quote: 'The route optimization feature transformed our school transport system. Parents are happier and our costs are down.',
      author: 'Mary Wanjiku',
      role: 'Transport Director',
      organization: 'Elite Schools Kenya'
    }
  ]
}

export default function MylesTransitPage() {
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
                TRANSPORTATION SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESTRANSIT_DATA.overview.title}
              <span className="text-white italic block mt-2">
                {MYLESTRANSIT_DATA.overview.tagline}
              </span>
            </h1>

            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESTRANSIT_DATA.overview.description[0]}
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
                  className="px-8 py-4 text-sm font-semibold border-white text-white hover:border-white hover:bg-white/10"
                >
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESTRANSIT_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESTRANSIT_DATA.overview.title}
          description={MYLESTRANSIT_DATA.overview.description}
          stats={MYLESTRANSIT_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Powerful Transportation Management Features"
          description="Everything you need to manage your transportation fleet efficiently and effectively."
          features={MYLESTRANSIT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to transportation excellence."
          steps={MYLESTRANSIT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Transportation Business"
          targets={MYLESTRANSIT_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your transportation business. All plans include free setup and support."
          plans={MYLESTRANSIT_DATA.pricing.map(p => ({
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
          testimonials={MYLESTRANSIT_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Transportation Operations?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESTRANSIT_DATA.overview.stats[0].number} transportation companies across Africa already thriving with MylesTransit.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
