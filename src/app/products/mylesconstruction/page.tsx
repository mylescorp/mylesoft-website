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
import { Target, Users, Calendar, DollarSign, CheckCircle, Settings } from 'lucide-react'

export const metadata = {
  title: 'MylesConstruction - Construction Project Management Software | MylesCorp Technologies',
  description: 'Intelligent project management for construction companies. Track projects, manage resources, and monitor progress in real-time.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesconstruction',
  },
}

const MYLESCONSTRUCTION_DATA = {
  overview: {
    title: 'MylesConstruction',
    tagline: 'Smart Construction Management for Project Excellence',
    description: [
      'Intelligent project management solution designed for construction companies across Africa.',
      'Track projects, manage resources, and monitor progress in real-time.'
    ],
    image: '/api/og/product?name=MylesConstruction&category=Construction',
    stats: [
      { number: '300+', label: 'Projects Managed' },
      { number: '25%', label: 'Time Savings' },
      { number: '15%', label: 'Cost Reduction' },
      { number: '24/7', label: 'Project Monitoring' }
    ]
  },
  features: [
    {
      icon: '🎯',
      title: 'Project Tracking',
      description: 'Real-time project progress tracking with milestones, deadlines, and deliverables management.'
    },
    {
      icon: '👥',
      title: 'Resource Management',
      description: 'Manage workers, equipment, and materials efficiently with allocation and scheduling tools.'
    },
    {
      icon: '📅',
      title: 'Timeline Management',
      description: 'Comprehensive scheduling with Gantt charts, critical path analysis, and delay tracking.'
    },
    {
      icon: '💰',
      title: 'Budget Control',
      description: 'Track project budgets, expenses, and financial performance with detailed reporting.'
    },
    {
      icon: '🔧',
      title: 'Quality Control',
      description: 'Quality assurance workflows, inspections, and compliance tracking for project excellence.'
    },
    {
      icon: '✅',
      title: 'Safety Management',
      description: 'Safety protocols, incident reporting, and compliance with construction regulations.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Project requirements and workflow analysis' },
    { step: 2, title: 'Setup', description: 'System configuration and project data migration' },
    { step: 3, title: 'Train', description: 'Team training on project management tools' },
    { step: 4, title: 'Launch', description: 'Go-live with ongoing support and monitoring' },
    { step: 5, title: 'Optimize', description: 'Continuous improvement based on project performance' }
  ],
  targets: [
    'Residential Construction - Home builders and residential developers',
    'Commercial Construction - Commercial buildings and office complexes',
    'Infrastructure - Roads, bridges, and public works projects',
    'Industrial - Factories, warehouses, and industrial facilities'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 5,000/month',
      description: 'Perfect for small contractors',
      features: ['Up to 10 projects', 'Basic project tracking', 'Resource management', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 20,000/month',
      description: 'Ideal for medium construction companies',
      features: ['Up to 50 projects', 'Advanced tracking', 'Budget control', 'Quality management', 'Priority support', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large construction firms',
      features: ['Unlimited projects', 'Full feature access', 'Multi-site management', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesConstruction helped us complete projects 25% faster while reducing costs by 15%.',
      author: 'James Mwangi',
      role: 'Project Director',
      organization: 'Nairobi Builders Ltd'
    },
    {
      quote: 'The resource management feature alone saved us millions in equipment optimization.',
      author: 'Grace Njoroge',
      role: 'Operations Manager',
      organization: 'East Africa Construction'
    }
  ]
}

export default function MylesConstructionPage() {
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
                CONSTRUCTION MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESCONSTRUCTION_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESCONSTRUCTION_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESCONSTRUCTION_DATA.overview.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg" 
                variant="primary"
                className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl"
              >
                Book Free Demo
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-8 py-4 text-sm font-semibold border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-navy"
              >
                View Pricing
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESCONSTRUCTION_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESCONSTRUCTION_DATA.overview.title}
          description={MYLESCONSTRUCTION_DATA.overview.description}
          stats={MYLESCONSTRUCTION_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Powerful Construction Management Features"
          description="Everything you need to manage construction projects efficiently and effectively."
          features={MYLESCONSTRUCTION_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to construction project excellence."
          steps={MYLESCONSTRUCTION_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Built for Every Construction Sector"
          targets={MYLESCONSTRUCTION_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your construction company. All plans include free setup and support."
          plans={MYLESCONSTRUCTION_DATA.pricing.map(p => ({
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
          testimonials={MYLESCONSTRUCTION_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Ready to Transform Your Construction Projects?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESCONSTRUCTION_DATA.overview.stats[0].number} construction companies across Africa already building with MylesConstruction.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
