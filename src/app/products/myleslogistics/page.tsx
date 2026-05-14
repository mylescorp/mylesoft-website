import { Layout } from '@/components/layout/Layout'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'MylesLogistics — Supply Chain & Fleet Management Kenya',
  description: 'Complete logistics management solution for Kenyan businesses. Fleet tracking, route optimization, delivery management, warehouse automation. Built for East African supply chains.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/myleslogistics',
  },
}

const MYLESLOGISTICS_DATA = {
  hero: {
    eyebrow: 'LOGISTICS',
    heading: 'Smart Supply Chain',
    goldWord: 'Management',
    subtitle: 'Comprehensive logistics solution optimizing fleet operations and delivery management across East Africa.',
    badge: 'LIVE',
    primaryCta: { text: 'Get Started', href: '/book-demo' },
    secondaryCta: { text: 'Learn More', href: '/contact' }
  },
  overview: {
    stats: [
      { number: "Real-time", label: "GPS Tracking" },
      { number: "30%", label: "Fuel Savings" },
      { number: "24/7", label: "Monitoring" },
      { number: "99.9%", label: "Accuracy" }
    ],
    description: "MylesLogistics transforms how businesses manage their supply chains and fleet operations. Our intelligent platform provides real-time visibility, route optimization, and comprehensive analytics to streamline your logistics operations from warehouse to final delivery."
  },
  features: [
    {
      icon: 'truck',
      title: 'Fleet Tracking',
      description: 'Real-time GPS tracking of all vehicles with detailed location history and status monitoring.'
    },
    {
      icon: 'route',
      title: 'Route Optimization',
      description: 'AI-powered route planning to minimize fuel consumption and delivery times.'
    },
    {
      icon: 'package',
      title: 'Delivery Management',
      description: 'Complete delivery workflow management from pickup to final confirmation.'
    },
    {
      icon: 'building',
      title: 'Warehouse Management',
      description: 'Inventory tracking, storage optimization, and automated warehouse operations.'
    },
    {
      icon: 'bar-chart',
      title: 'Inventory Tracking',
      description: 'Real-time inventory visibility across all locations with automated alerts.'
    },
    {
      icon: 'users',
      title: 'Driver Management',
      description: 'Driver performance tracking, scheduling, and compliance management.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Fleet Registration',
      description: 'Register your vehicles and drivers in our system with comprehensive documentation.'
    },
    {
      step: 2,
      title: 'Route Planning',
      description: 'Set up delivery zones and optimize routes using our AI-powered algorithm.'
    },
    {
      step: 3,
      title: 'Device Installation',
      description: 'Install GPS trackers and mobile apps for real-time monitoring.'
    },
    {
      step: 4,
      title: 'Team Training',
      description: 'Train your drivers and staff on using the logistics platform effectively.'
    },
    {
      step: 5,
      title: 'Go Live',
      description: 'Start managing your logistics operations with real-time tracking and optimization.'
    }
  ],
  targets: [
    'Transport Companies',
    'Delivery Services',
    'Manufacturing',
    'Retail Chains',
    'E-commerce',
    'Distribution Companies'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KSh 9,999',
      period: 'per month',
      description: 'Perfect for small fleets with basic tracking needs.',
      features: [
        'Up to 10 vehicles',
        'Basic GPS tracking',
        'Route planning',
        'Mobile app access',
        'Email support'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: 'KSh 24,999',
      period: 'per month',
      description: 'Ideal for growing businesses with advanced logistics needs.',
      features: [
        'Up to 50 vehicles',
        'Advanced GPS tracking',
        'Route optimization',
        'Warehouse management',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large enterprises with complex logistics.',
      features: [
        'Unlimited vehicles',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Multi-warehouse support'
      ],
      featured: false
    }
  ],
  testimonials: [
    {
      quote: "MylesLogistics has reduced our fuel costs by 30% and improved delivery times significantly. Best investment we've made.",
      author: "James Mwangi",
      role: "Operations Manager, QuickDeliver Kenya",
      organization: "QuickDeliver Kenya",
      avatar: "JM"
    },
    {
      quote: "The real-time tracking gives us complete visibility over our fleet. Customer satisfaction has improved dramatically.",
      author: "Grace Achieng",
      role: "CEO, FreshFarm Supplies",
      organization: "FreshFarm Supplies",
      avatar: "GA"
    }
  ]
}

export default function MylesLogisticsPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESLOGISTICS_DATA.hero} productName="MylesLogistics" />

        {/* Stats */}
        <StatsSection stats={MYLESLOGISTICS_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="MylesLogistics"
          description={MYLESLOGISTICS_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "30%", label: "Avg fuel savings" },
            { number: "24/7", label: "Fleet monitoring" },
            { number: "50+", label: "Delivery zones" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your Logistics Needs"
          description="6 powerful features covering every aspect of supply chain management — all in one platform."
          features={MYLESLOGISTICS_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'truck' ? '🚚' :
                   f.icon === 'route' ? '🗺️' :
                   f.icon === 'package' ? '📦' :
                   f.icon === 'building' ? '🏢' :
                   f.icon === 'bar-chart' ? '📊' :
                   f.icon === 'users' ? '👥' : '📋'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Up and Running in 5 Steps"
          description="From fleet registration to optimized operations — a clear and simple implementation process."
          steps={MYLESLOGISTICS_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Business"
          targets={MYLESLOGISTICS_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Current plan details are maintained on the pricing page and confirmed during consultation."
          plans={MYLESLOGISTICS_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Priority support')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Customers Say"
          testimonials={MYLESLOGISTICS_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Optimize Your Logistics?"
          tagline="Transforming Supply Chains Across East Africa."
          description="Join hundreds of companies already using MylesLogistics for efficient fleet management and route optimization. Start your transformation today."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
