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
  title: 'MylesProp — Real Estate Management Kenya',
  description: 'Complete property management system for Kenyan real estate professionals. Property listings, tenant management, rent collection, maintenance tracking. Built for East African property market.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesprop',
  },
}

const MYLESPROP_DATA = {
  hero: {
    eyebrow: 'REAL ESTATE',
    heading: 'Smart Property',
    goldWord: 'Management',
    subtitle: 'Comprehensive real estate management solution for property professionals and landlords across East Africa.',
    badge: 'DEVELOPMENT',
    primaryCta: { text: 'Get Started', href: '/book-demo' },
    secondaryCta: { text: 'Learn More', href: '/contact' }
  },
  overview: {
    stats: [
      { number: "500+", label: "Properties Managed" },
      { number: "95%", label: "Occupancy Rate" },
      { number: "24/7", label: "Tenant Support" },
      { number: "KSh 50M", label: "Monthly Rent Processed" }
    ],
    description: "MylesProp streamlines every aspect of property management from tenant acquisition to maintenance coordination. Our platform provides real-time insights, automated rent collection, and comprehensive reporting to maximize your property investment returns."
  },
  features: [
    {
      icon: 'building',
      title: 'Property Listings',
      description: 'Create and manage property listings with photos, videos, and virtual tours.'
    },
    {
      icon: 'users',
      title: 'Tenant Management',
      description: 'Complete tenant lifecycle management from applications to move-out inspections.'
    },
    {
      icon: 'credit-card',
      title: 'Rent Collection',
      description: 'Automated rent collection with multiple payment options and reminders.'
    },
    {
      icon: 'wrench',
      title: 'Maintenance Tracking',
      description: 'Track maintenance requests, assign vendors, and monitor completion status.'
    },
    {
      icon: 'bar-chart',
      title: 'Financial Reporting',
      description: 'Comprehensive financial reports including income statements and expense tracking.'
    },
    {
      icon: 'file-text',
      title: 'Document Management',
      description: 'Secure document storage for leases, contracts, and important paperwork.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Property Registration',
      description: 'Add your properties to the system with detailed information and media.'
    },
    {
      step: 2,
      title: 'Tenant Setup',
      description: 'Configure rental terms, payment methods, and communication preferences.'
    },
    {
      step: 3,
      title: 'Payment Configuration',
      description: 'Set up automated rent collection and payment reminder schedules.'
    },
    {
      step: 4,
      title: 'Team Invitation',
      description: 'Add property managers, maintenance staff, and other team members.'
    },
    {
      step: 5,
      title: 'Go Live',
      description: 'Start managing your properties with automated workflows and real-time tracking.'
    }
  ],
  targets: [
    'Property Managers',
    'Real Estate Agents',
    'Landlords',
    'Property Developers',
    'Facility Managers',
    'Real Estate Agencies'
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KSh 4,999',
      period: 'per month',
      description: 'Perfect for individual landlords with small portfolios.',
      features: [
        'Up to 10 properties',
        'Basic tenant management',
        'Rent collection',
        'Mobile app access',
        'Email support'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: 'KSh 14,999',
      period: 'per month',
      description: 'Ideal for property managers with growing portfolios.',
      features: [
        'Up to 50 properties',
        'Advanced tenant management',
        'Maintenance tracking',
        'Financial reporting',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large property management companies.',
      features: [
        'Unlimited properties',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'Multi-currency support'
      ],
      featured: false
    }
  ],
  testimonials: [
    {
      quote: "MylesProp has transformed how we manage our 50+ property portfolio. Rent collection is now automated and hassle-free.",
      author: "Michael Kamau",
      role: "Property Manager, Nairobi Properties",
      organization: "Nairobi Properties",
      avatar: "MK"
    },
    {
      quote: "The maintenance tracking feature has saved us countless hours and improved tenant satisfaction significantly.",
      author: "Susan Wanjiru",
      role: "Landlord, Prime Properties",
      organization: "Prime Properties",
      avatar: "SW"
    }
  ]
}

export default function MylesPropPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESPROP_DATA.hero} productName="MylesProp" />

        {/* Stats */}
        <StatsSection stats={MYLESPROP_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="MylesProp"
          description={MYLESPROP_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "95%", label: "Avg occupancy rate" },
            { number: "24/7", label: "Tenant support" },
            { number: "500+", label: "Properties managed" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your Property Needs"
          description="6 powerful features covering every aspect of property management — all in one platform."
          features={MYLESPROP_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'building' ? '🏢' :
                   f.icon === 'users' ? '👥' :
                   f.icon === 'credit-card' ? '💳' :
                   f.icon === 'wrench' ? '🔧' :
                   f.icon === 'bar-chart' ? '📊' :
                   f.icon === 'file-text' ? '📝' : '🏠'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Up and Running in 5 Steps"
          description="From property registration to automated management — a clear and simple setup process."
          steps={MYLESPROP_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Professional"
          targets={MYLESPROP_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Current plan details are maintained on the pricing page and confirmed during consultation."
          plans={MYLESPROP_DATA.pricing.map(p => ({
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
          testimonials={MYLESPROP_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Property Management?"
          tagline="Modernizing Real Estate Across East Africa."
          description="Join hundreds of property professionals already using MylesProp for efficient management and maximized returns. Start your transformation today."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
