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
import { Settings, TrendingUp, Package, Users, CheckCircle, BarChart } from 'lucide-react'

export const metadata = {
  title: 'MylesManufacturing - Manufacturing Management Software | MylesCorp Technologies',
  description: 'Comprehensive manufacturing management solution. Streamline production, manage inventory, and optimize operations with intelligent automation.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesmanufacturing',
  },
}

const MYLESMANUFACTURING_DATA = {
  overview: {
    title: 'MylesManufacturing',
    tagline: 'Smart Manufacturing Management for Production Excellence',
    description: [
      'Comprehensive manufacturing management solution designed for African industrial businesses.',
      'Streamline production, manage inventory, and optimize operations with intelligent automation.'
    ],
    image: '/api/og/product?name=MylesManufacturing&category=Manufacturing',
    stats: [
      { number: '150+', label: 'Manufacturing Clients' },
      { number: '1M+', label: 'Units Produced Monthly' },
      { number: '35%', label: 'Efficiency Improvement' },
      { number: '24/7', label: 'Production Monitoring' }
    ]
  },
  features: [
    {
      icon: '⚙️',
      title: 'Production Planning',
      description: 'Advanced production scheduling with capacity planning and resource optimization.'
    },
    {
      icon: '📈',
      title: 'Quality Control',
      description: 'Comprehensive quality assurance with inspection tracking and compliance management.'
    },
    {
      icon: '📦',
      title: 'Inventory Management',
      description: 'Real-time inventory tracking with automated reordering and stock optimization.'
    },
    {
      icon: '👥',
      title: 'Workforce Management',
      description: 'Employee scheduling, skills tracking, and performance management.'
    },
    {
      icon: '✅',
      title: 'Maintenance Management',
      description: 'Preventive maintenance scheduling and equipment performance monitoring.'
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Real-time production metrics and business intelligence reporting.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Production workflow analysis and requirements gathering' },
    { step: 2, title: 'Setup', description: 'System configuration and production data migration' },
    { step: 3, title: 'Train', description: 'Staff training on manufacturing modules' },
    { step: 4, title: 'Launch', description: 'Go-live with production support team' },
    { step: 5, title: 'Optimize', description: 'Continuous improvement based on production data' }
  ],
  targets: [
    'Food Processing - Food and beverage manufacturing companies',
    'Textile Manufacturing - Clothing and textile production facilities',
    'Assembly Plants - Electronics and consumer goods assembly',
    'Heavy Industry - Steel, cement, and industrial manufacturing'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KES 12,000/month',
      description: 'Perfect for small manufacturers',
      features: ['Up to 50 employees', 'Basic production planning', 'Inventory management', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 35,000/month',
      description: 'Ideal for medium manufacturing companies',
      features: ['Up to 200 employees', 'Advanced planning', 'Quality control', 'Maintenance management', 'Priority support', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large manufacturing operations',
      features: ['Unlimited employees', 'Full feature access', 'Multi-plant management', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesManufacturing helped us increase production efficiency by 35% while reducing waste by 20%.',
      author: 'David Kariuki',
      role: 'Plant Manager',
      organization: 'Nairobi Food Processing Ltd'
    },
    {
      quote: 'The quality control module reduced our defect rate by 60% and improved customer satisfaction significantly.',
      author: 'Grace Mwangi',
      role: 'Quality Director',
      organization: 'East Africa Textiles'
    }
  ]
}

export default function MylesManufacturingPage() {
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
                MANUFACTURING SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESMANUFACTURING_DATA.overview.title}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic block mt-2">
                {MYLESMANUFACTURING_DATA.overview.tagline}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESMANUFACTURING_DATA.overview.description[0]}
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
              {MYLESMANUFACTURING_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESMANUFACTURING_DATA.overview.title}
          description={MYLESMANUFACTURING_DATA.overview.description}
          stats={MYLESMANUFACTURING_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Powerful Manufacturing Management Features"
          description="Everything you need to manage your manufacturing operations efficiently and effectively."
          features={MYLESMANUFACTURING_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to manufacturing excellence."
          steps={MYLESMANUFACTURING_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Built for Every Manufacturing Sector"
          targets={MYLESMANUFACTURING_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection 
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your manufacturing business. All plans include free setup and support."
          plans={MYLESMANUFACTURING_DATA.pricing.map(p => ({
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
          testimonials={MYLESMANUFACTURING_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection 
          title="Ready to Transform Your Manufacturing Operations?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESMANUFACTURING_DATA.overview.stats[0].number} manufacturing companies across Africa already thriving with MylesManufacturing.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
