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
import { Zap, BarChart, Settings, TrendingUp, AlertCircle, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesEnergy - Energy Management Software | MylesCorp Technologies',
  description: 'Smart energy monitoring and management solution. Track consumption, optimize usage, and reduce costs with AI-powered analytics.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesenergy',
  },
}

const MYLESENERGY_DATA = {
  overview: {
    title: 'MylesEnergy',
    tagline: 'Smart Energy Management for Sustainable Operations',
    description: [
      'Optimize energy consumption and reduce costs with our intelligent monitoring and management platform.',
      'Designed for African businesses with AI-powered analytics and real-time insights.'
    ],
    image: '/api/og/product?name=MylesEnergy&category=Energy',
    stats: [
      { number: '200+', label: 'Facilities Managed' },
      { number: '30%', label: 'Average Savings' },
      { number: '99.8%', label: 'Accuracy' },
      { number: '24/7', label: 'Monitoring' }
    ]
  },
  features: [
    {
      icon: '📊',
      title: 'Energy Monitoring',
      description: 'Real-time energy consumption tracking with detailed analytics and insights.'
    },
    {
      icon: '📈',
      title: 'Consumption Analytics',
      description: 'Advanced analytics to identify patterns, trends, and opportunities for optimization.'
    },
    {
      icon: '🔧',
      title: 'Predictive Maintenance',
      description: 'AI-powered predictions for equipment maintenance to prevent failures and downtime.'
    },
    {
      icon: '💰',
      title: 'Cost Optimization',
      description: 'Smart recommendations to reduce energy costs and improve efficiency.'
    },
    {
      icon: '⚠️',
      title: 'Alert System',
      description: 'Real-time alerts for unusual consumption patterns and equipment issues.'
    },
    {
      icon: '✅',
      title: 'Reporting Dashboard',
      description: 'Comprehensive reports for compliance, sustainability, and management review.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Energy audit and baseline establishment' },
    { step: 2, title: 'Installation', description: 'Smart meters and sensors deployment' },
    { step: 3, title: 'Configuration', description: 'Custom alerts and optimization rules setup' },
    { step: 4, title: 'Training', description: 'Team training on dashboard and analytics' },
    { step: 5, title: 'Optimization', description: 'Continuous monitoring and improvement' }
  ],
  targets: [
    'Manufacturing - Industrial facilities and production plants',
    'Commercial Buildings - Office buildings, malls, and commercial complexes',
    'Hospitality - Hotels, restaurants, and entertainment venues',
    'Healthcare - Hospitals, clinics, and medical facilities'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 3,000/month',
      description: 'Perfect for small facilities',
      features: ['Up to 5 meters', 'Basic monitoring', 'Monthly reports', 'Email alerts', 'Mobile app'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 10,000/month',
      description: 'Ideal for medium facilities',
      features: ['Up to 25 meters', 'Advanced analytics', 'Real-time alerts', 'Predictive maintenance', 'Custom reports', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large facilities and groups',
      features: ['Unlimited meters', 'Full analytics suite', 'AI optimization', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesEnergy helped us reduce our electricity costs by 35% in just 6 months.',
      author: 'David Mwangi',
      role: 'Facilities Manager',
      organization: 'Nairobi Industrial Park'
    },
    {
      quote: 'The predictive maintenance feature alone saved us millions in potential downtime costs.',
      author: 'Grace Wanjiku',
      role: 'Operations Director',
      organization: 'East Africa Manufacturing'
    }
  ]
}

export default function MylesEnergyPage() {
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
                ENERGY MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESENERGY_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESENERGY_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESENERGY_DATA.overview.description}
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
              {MYLESENERGY_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESENERGY_DATA.overview.title}
          description={MYLESENERGY_DATA.overview.description}
          stats={MYLESENERGY_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Powerful Energy Management Features"
          description="Everything you need to monitor, analyze, and optimize your energy consumption."
          features={MYLESENERGY_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to energy efficiency."
          steps={MYLESENERGY_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Built for Every Industry"
          targets={MYLESENERGY_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your facility. All plans include free setup and support."
          plans={MYLESENERGY_DATA.pricing.map(p => ({
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
          testimonials={MYLESENERGY_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Ready to Optimize Your Energy Usage?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESENERGY_DATA.overview.stats[0].number} facilities across Africa already saving with MylesEnergy.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
