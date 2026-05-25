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
import { Heart, Users, Target, TrendingUp, Award, Check, Calendar, DollarSign } from 'lucide-react'

export const metadata = {
  title: 'MylesNonProfit - NGO Management Software | MylesCorp Technologies',
  description: 'Comprehensive donor and volunteer management solution for NGOs. Track donations, manage volunteers, and report impact with ease.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesnonprofit',
  },
}

const MYLESNONPROFIT_DATA = {
  overview: {
    title: 'MylesNonProfit',
    tagline: 'Smart NGO Management for Greater Impact',
    description: [
      'Empowering NGOs with donor and volunteer management tools.',
      'Track donations, manage volunteers, and report impact with our intuitive platform.'
    ],
    image: '/api/og/product?name=MylesNonProfit&category=NonProfit',
    stats: [
      { number: '150+', label: 'NGO Partners' },
      { number: '25K+', label: 'Volunteers Managed' },
      { number: '40%', label: 'Donation Increase' },
      { number: '24/7', label: 'Support' }
    ]
  },
  features: [
    {
      icon: '❤️',
      title: 'Donor Management',
      description: 'Comprehensive donor database with donation tracking, automated receipts, and communication tools.'
    },
    {
      icon: '👥',
      title: 'Volunteer Coordination',
      description: 'Manage volunteer schedules, track hours, and coordinate activities efficiently.'
    },
    {
      icon: '📅',
      title: 'Event Management',
      description: 'Plan and execute fundraising events with ticketing, registration, and promotion tools.'
    },
    {
      icon: '💰',
      title: 'Grant Tracking',
      description: 'Track grant applications, deadlines, and reporting requirements in one centralized system.'
    },
    {
      icon: '📊',
      title: 'Impact Reporting',
      description: 'Generate structured impact reports for stakeholders and compliance requirements.'
    },
    {
      icon: '✅',
      title: 'Compliance Tools',
      description: 'Ensure regulatory compliance with built-in reporting and audit trails.'
    }
  ],
  process: [
    { step: 1, title: 'Setup', description: 'Account setup and data migration assistance' },
    { step: 2, title: 'Configure', description: 'Customize workflows and reporting templates' },
    { step: 3, title: 'Train', description: 'Staff and volunteer training on all features' },
    { step: 4, title: 'Launch', description: 'Go live with dedicated support team' },
    { step: 5, title: 'Scale', description: 'Add features and expand as organization grows' }
  ],
  targets: [
    'Community NGOs - Local community organizations and associations',
    'International NGOs - Branch offices of international organizations',
    'Foundations - Charitable foundations and grant-making organizations',
    'Social Enterprises - Mission-driven businesses with social impact'
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KSh 2,000/month',
      description: 'For small NGOs',
      features: ['Up to 100 donors', 'Basic volunteer management', 'Event planning', 'Email support', 'Mobile app'],
      popular: false
    },
    {
      name: 'Growth',
      price: 'KSh 8,000/month',
      description: 'For growing NGOs',
      features: ['Up to 1,000 donors', 'Advanced volunteer management', 'Grant tracking', 'Impact reporting', 'Priority support', 'Custom integrations', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large NGOs and networks',
      features: ['Unlimited donors', 'Full feature access', 'Multi-organization management', 'Dedicated support', 'Custom integrations', 'API access', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesNonProfit improved how we manage our donors. We saw a 40% increase in donations in the first year.',
      author: 'Miriam Achieng',
      role: 'Executive Director',
      organization: 'Hope Foundation Kenya'
    },
    {
      quote: 'The volunteer coordination feature saved us 20 hours per week in administrative work.',
      author: 'Samuel Njoroge',
      role: 'Program Manager',
      organization: 'Community Development Initiative'
    }
  ]
}

export default function MylesNonProfitPage() {
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
                NGO MANAGEMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESNONPROFIT_DATA.overview.title}
              <span className="text-white italic block mt-2">
                {MYLESNONPROFIT_DATA.overview.tagline}
              </span>
            </h1>

            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESNONPROFIT_DATA.overview.description}
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
                className="px-8 py-4 text-sm font-semibold border-white text-white hover:border-white hover:bg-white/10"
              >
                View Pricing
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {MYLESNONPROFIT_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESNONPROFIT_DATA.overview.title}
          description={MYLESNONPROFIT_DATA.overview.description}
          stats={MYLESNONPROFIT_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Powerful NGO Management Features"
          description="Everything you need to manage donors, volunteers, and impact reporting efficiently."
          features={MYLESNONPROFIT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Implementation in 5 Steps"
          description="From setup to scaling — a clear path to NGO management excellence."
          steps={MYLESNONPROFIT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Organization"
          targets={MYLESNONPROFIT_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your NGO. All plans include free setup and support."
          plans={MYLESNONPROFIT_DATA.pricing.map(p => ({
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
          testimonials={MYLESNONPROFIT_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Modernise Your NGO Operations?"
          tagline="Software for African institutions."
          description={`Join ${MYLESNONPROFIT_DATA.overview.stats[0].number} NGOs across Africa already thriving with MylesNonProfit.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
