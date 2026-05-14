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
import { Hotel, Users, Calendar, DollarSign, Star, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesHospitality - Hospitality Management Software | MylesCorp Technologies',
  description: 'Complete hospitality management solution for hotels, restaurants, and tourism businesses. Streamline operations and enhance guest experiences.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/myles-hospitality',
  },
}

const MYLESHOSPITALITY_DATA = {
  overview: {
    title: 'MylesHospitality',
    tagline: 'Smart Hospitality Management for Exceptional Guest Experiences',
    description: [
      'Comprehensive hospitality management solution designed for hotels, restaurants, and tourism businesses across Africa.',
      'Streamline operations, enhance guest experiences, and maximize revenue with our integrated platform.'
    ],
    image: '/api/og/product?name=MylesHospitality&category=Hospitality',
    stats: [
      { number: '100+', label: 'Hospitality Clients' },
      { number: '50K+', label: 'Guests Served Daily' },
      { number: '40%', label: 'Operational Efficiency' },
      { number: '24/7', label: 'Guest Support' }
    ]
  },
  features: [
    {
      icon: '🏨',
      title: 'Property Management',
      description: 'Complete property management with room booking, housekeeping, and maintenance coordination.'
    },
    {
      icon: '👥',
      title: 'Guest Management',
      description: 'Guest profile management, preferences, and personalized service delivery.'
    },
    {
      icon: '📅',
      title: 'Reservation System',
      description: 'Advanced booking engine with real-time availability and automated confirmations.'
    },
    {
      icon: '💰',
      title: 'Revenue Management',
      description: 'Dynamic pricing, occupancy optimization, and revenue analytics.'
    },
    {
      icon: '⭐',
      title: 'Review Management',
      description: 'Guest review collection, response management, and reputation monitoring.'
    },
    {
      icon: '✅',
      title: 'Compliance & Reporting',
      description: 'Regulatory compliance, financial reporting, and business analytics.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Property analysis and workflow customization' },
    { step: 2, title: 'Setup', description: 'System configuration and data migration' },
    { step: 3, title: 'Train', description: 'Staff training on all hospitality modules' },
    { step: 4, title: 'Launch', description: 'Go-live with dedicated support team' },
    { step: 5, title: 'Optimize', description: 'Continuous improvement based on guest feedback' }
  ],
  targets: [
    'Hotels & Resorts - Full-service hotels and luxury resorts',
    'Restaurants & Cafes - Fine dining and casual dining establishments',
    'Tourism Companies - Tour operators and travel agencies',
    'Event Venues - Conference centers and event spaces'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KSh 8,000/month',
      description: 'Perfect for small hotels and restaurants',
      features: ['Up to 50 rooms', 'Basic booking system', 'Guest management', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 25,000/month',
      description: 'Ideal for medium-sized hospitality businesses',
      features: ['Up to 200 rooms', 'Advanced booking engine', 'Revenue management', 'Review management', 'Priority support', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large hospitality chains and resorts',
      features: ['Unlimited rooms', 'Full feature access', 'Multi-property management', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesHospitality transformed our operations. We saw a 40% increase in efficiency and guest satisfaction improved dramatically.',
      author: 'Sarah Kamau',
      role: 'General Manager',
      organization: 'Serenity Hotels Nairobi'
    },
    {
      quote: 'The revenue management feature alone increased our occupancy by 25% and average daily rate by 15%.',
      author: 'Michael Ochieng',
      role: 'Operations Director',
      organization: 'Coastal Resort Group'
    }
  ]
}

export default function MylesHospitalityPage() {
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
                HOSPITALITY SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESHOSPITALITY_DATA.overview.title}
              <span className="text-white italic block mt-2">
                {MYLESHOSPITALITY_DATA.overview.tagline}
              </span>
            </h1>

            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESHOSPITALITY_DATA.overview.description[0]}
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
              {MYLESHOSPITALITY_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESHOSPITALITY_DATA.overview.title}
          description={MYLESHOSPITALITY_DATA.overview.description}
          stats={MYLESHOSPITALITY_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Powerful Hospitality Management Features"
          description="Everything you need to manage your hospitality business efficiently and delight your guests."
          features={MYLESHOSPITALITY_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to hospitality excellence."
          steps={MYLESHOSPITALITY_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Hospitality Business"
          targets={MYLESHOSPITALITY_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your hospitality business. All plans include free setup and support."
          plans={MYLESHOSPITALITY_DATA.pricing.map(p => ({
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
          testimonials={MYLESHOSPITALITY_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Hospitality Business?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESHOSPITALITY_DATA.overview.stats[0].number} hospitality businesses across Africa already thriving with MylesHospitality.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
