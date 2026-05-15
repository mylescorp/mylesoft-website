import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { ProductCard } from '@/components/ui/ProductCard'
import { Icon } from '@/components/ui/Icon'
import { CORE_PRODUCTS } from '@/lib/constants/products'

export const metadata = {
  title: 'MylesCorp Technologies, AI Software for Schools, Transport & Business',
  description: 'MylesCorp Technologies builds EduMyles, EduRyde, and MylesCRM for African schools, school transport teams, and growing businesses.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/',
  },
}

const HOMEPAGE_DATA = {
  overview: {
    title: 'MylesCorp Technologies',
    tagline: 'Transforming Industries, Empowering Generations',
    description: [
      'Focused software for school administration, school transport safety, and business growth across Africa.',
      'EduMyles, EduRyde, and MylesCRM help teams replace spreadsheets, WhatsApp follow-ups, manual reports, and disconnected workflows with reliable digital operations.'
    ],
    image: '/api/og?title=MylesCorp%20Technologies&description=AI-Powered%20Software%20Solutions%20for%20Africa',
    stats: [
      { number: '500+', label: 'Schools Managed' },
      { number: '24/7', label: 'Bus Visibility' },
      { number: '3', label: 'Core Products' },
      { number: '200+', label: 'Businesses Transformed' }
    ]
  },
  features: [
    {
      icon: 'brain',
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide smart insights and automation for your business.'
    },
    {
      icon: 'target',
      title: 'Industry-Specific Solutions',
      description: 'Purpose-built solutions for education, school transport, and business teams.'
    },
    {
      icon: 'globe',
      title: 'East African Focus',
      description: 'Designed specifically for African markets with local expertise and understanding.'
    },
    {
      icon: 'crown',
      title: 'Premium Support',
      description: 'Dedicated team available round the clock for assistance and guidance.'
    },
    {
      icon: 'rocket',
      title: 'Scalable Technology',
      description: 'Grow from startup to enterprise with solutions that scale with your business.'
    },
    {
      icon: 'heart',
      title: 'Community Impact',
      description: 'Empowering local communities and contributing to sustainable development.'
    }
  ],
  process: [
    { step: 1, title: 'Discovery', description: 'We understand your unique challenges and requirements' },
    { step: 2, title: 'Strategy', description: 'Develop a tailored solution roadmap for your organization' },
    { step: 3, title: 'Implementation', description: 'Deploy solutions with expert guidance and support' },
    { step: 4, title: 'Training', description: 'Empower your team with comprehensive training and resources' },
    { step: 5, title: 'Growth', description: 'Scale and optimize as your business evolves and grows' }
  ],
  targets: [
    'Educational Institutions - Schools seeking digital administration and reporting',
    'School Transport Teams - Administrators and bus operators needing route visibility',
    'Business Enterprises - SMEs and sales teams looking for customer and revenue clarity'
  ],
  testimonials: [
    {
      quote: 'MylesCorp transformed our school operations. We\'ve seen a 40% improvement in efficiency and student engagement.',
      author: 'Sarah Johnson',
      role: 'Principal',
      organization: 'Nairobi Academy'
    },
    {
      quote: 'EduRyde gave parents real-time confidence and helped our transport desk cut manual follow-up calls dramatically.',
      author: 'David Otieno',
      role: 'Transport Manager',
      organization: 'Kisumu Academy'
    },
    {
      quote: 'MylesCRM gave us one clear place for leads, invoices, and customer follow-ups. Our sales team finally works from the same page.',
      author: 'Grace Wanjiku',
      role: 'Operations Lead',
      organization: 'Nairobi Growth Partners'
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KSh 15,000',
      period: '/month',
      description: 'Perfect for small organizations getting started',
      features: ['Up to 50 users', 'Basic features', 'Email support', 'Standard security'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 45,000',
      period: '/month',
      description: 'Ideal for growing organizations',
      features: ['Up to 200 users', 'Advanced features', 'Priority support', 'Enhanced security', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'For large organizations',
      features: ['Unlimited users', 'All features', '24/7 support', 'Custom integrations', 'Dedicated account manager'],
      popular: false
    }
  ]
}

const PRODUCT_DETAIL_SECTIONS = [
  {
    name: 'EduMyles',
    href: '/products/edumyles',
    eyebrow: 'School Management',
    summary:
      'EduMyles is a complete school operating system built for African schools. It supports admissions, student records, CBC and 8-4-4 gradebooks, fee collection, attendance, parent communication, staff permissions, report cards, timetabling, and compliance reporting.',
    highlights: [
      'M-Pesa STK payments with automated receipts and fee balances',
      'CBC strands, report cards, attendance, and parent alerts',
      'NEMIS / Ministry of Education export-ready reporting',
      'Administrator, teacher, parent, and student workflows',
    ],
  },
  {
    name: 'EduRyde',
    href: '/products/eduryde',
    eyebrow: 'School Transport',
    summary:
      'EduRyde gives schools visibility and control over student transport. Administrators can manage buses, drivers, routes, stops, boarding records, emergency alerts, and parent notifications from one transport safety system.',
    highlights: [
      'Live GPS tracking for every active school bus',
      'Route planning, stop assignment, and route optimisation',
      'Parent SMS/app alerts for boarding, delays, and arrivals',
      'Driver, vehicle, compliance, and incident management',
    ],
  },
  {
    name: 'MylesCRM',
    href: '/products/mylescrm',
    eyebrow: 'Business CRM',
    summary:
      'MylesCRM helps SMEs and sales teams manage leads, contacts, deals, invoices, payments, customer service, marketing, inventory, tasks, and reporting without losing opportunities across scattered tools.',
    highlights: [
      'Lead capture, contact history, and visual sales pipeline',
      'M-Pesa-ready invoicing and payment tracking',
      'Customer service, follow-ups, campaigns, and team tasks',
      'Dashboards for revenue, pipeline value, and conversion rates',
    ],
  },
]

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
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

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            {/* Company Name */}
            <div className="mb-8">
              <h2 className="font-display font-semibold text-white text-2xl sm:text-3xl md:text-[2.5rem] lg:text-[3rem] leading-[1.08]">
                {HOMEPAGE_DATA.overview.title}
              </h2>
            </div>

            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                AI-POWERED SOLUTIONS
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-[2.25rem] sm:text-[2.8rem] md:text-[3.25rem] lg:text-[3.85rem] xl:text-[4.25rem] leading-[1.04] mb-6 max-w-6xl mx-auto">
              <span className="block">AI-Powered Software Solutions</span>
              <span className="block">for Schools, Transport &amp;</span>
              <span className="block">Businesses in Africa</span>
            </h1>

            <p className="font-body text-light-blue text-[1rem] sm:text-[1.05rem] md:text-[1.12rem] max-w-2xl mx-auto mb-3 leading-8">
              {HOMEPAGE_DATA.overview.tagline}
            </p>

            <p className="font-body text-light-blue/95 text-[1rem] sm:text-[1.05rem] md:text-[1.14rem] leading-8 max-w-3xl mx-auto mb-10">
              {HOMEPAGE_DATA.overview.description[0]}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Link href="/book-demo" transitionTypes={['slide']}>
                <Button
                  size="lg"
                  variant="primary"
                  className="w-full sm:w-auto shadow-lg hover:shadow-xl px-6 py-3 text-sm font-semibold"
                >
                  Book a Free Demo
                </Button>
              </Link>
              <Link href="/products" transitionTypes={['slide']}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white/10 px-6 py-3 text-sm font-semibold"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact" transitionTypes={['slide']}>
                <Button
                  size="lg"
                  variant="secondary"
                  className="w-full sm:w-auto border-2 border-white/70 bg-transparent text-white hover:border-white hover:bg-white/10 px-6 py-3 text-sm font-semibold"
                >
                  Request a Proposal
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto mt-16">
              {HOMEPAGE_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  OUR PRODUCTS
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                Industry-Specific Solutions
              </h2>
            <p className="font-body text-medium-grey text-[1.08rem] md:text-lg max-w-2xl mx-auto leading-8">
                Three focused products with clear workflows, practical onboarding, and support for African operating realities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {CORE_PRODUCTS.map((product) => (
                <ProductCard key={product.name} {...product} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <div className="mb-5 flex items-center gap-3">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  Product Details
                </span>
              </div>
              <h2 className="font-display font-bold text-navy text-4xl md:text-5xl mb-4">
                What Each Product Helps You Run
              </h2>
              <p className="font-body text-medium-grey text-[1.05rem] leading-8">
                Visitors should know exactly what they can buy, who it is for, and what problem it solves before booking a conversation.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {PRODUCT_DETAIL_SECTIONS.map((product) => (
                <div key={product.name} className="flex h-full flex-col rounded-lg border border-slate-200 bg-white p-7 shadow-card">
                  <div className="mb-4 text-[11px] font-bold uppercase tracking-[2.2px] text-gold">
                    {product.eyebrow}
                  </div>
                  <h3 className="font-display text-3xl font-bold text-navy mb-4">
                    {product.name}
                  </h3>
                  <p className="font-body text-[0.98rem] leading-8 text-medium-grey">
                    {product.summary}
                  </p>
                  <div className="mt-6 space-y-3">
                    {product.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-start gap-3">
                        <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                        <span className="font-body text-[0.95rem] leading-7 text-dark-grey">{highlight}</span>
                      </div>
                    ))}
                  </div>
                  <Link href={product.href} className="mt-7 inline-flex font-body text-sm font-bold uppercase tracking-[1.4px] text-gold hover:text-gold-light">
                    View {product.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-navy">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                  TRUSTED ACROSS EAST AFRICA
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-4">
                Impact & Reach
              </h2>
              <p className="font-body text-light-blue text-lg md:text-xl max-w-2xl mx-auto leading-8">
                Empowering schools, transport teams, and businesses in Kenya, Uganda, Tanzania, and beyond with focused AI-powered solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Schools Managed', icon: 'graduation-cap' },
                { number: '24/7', label: 'Transport Visibility', icon: 'bus' },
                { number: '3', label: 'Focused Products', icon: 'target' },
                { number: '200+', label: 'Businesses Transformed', icon: 'briefcase' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-light-blue text-sm font-body inline-flex items-center justify-center gap-2">
                    <Icon name={stat.icon} size={16} className="text-gold" />
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <FeaturesSection
          title="Why Choose MylesCorp?"
          description="We combine cutting-edge AI technology with deep industry expertise to deliver solutions that work for African businesses."
          features={HOMEPAGE_DATA.features}
          centerHeader={true}
        />

        {/* SECTION 5 — Values */}
        <MYLESValues />

        {/* Process Section */}
        <ProcessSection
          title="Our 5-Step Process"
          description="From discovery to growth — we guide you through every step of your digital transformation journey."
          steps={HOMEPAGE_DATA.process}
          centerHeader={true}
        />

        {/* Targets Section */}
        <TargetsSection
          title="Built for Every Organization"
          targets={HOMEPAGE_DATA.targets}
        />

        {/* Testimonials Section */}
        <TestimonialsSection
          title="Success Stories"
          testimonials={HOMEPAGE_DATA.testimonials}
          centerHeader={true}
        />

        {/* Pricing Section */}
        <PricingSection
          title="Product Plans Matched to Your Operation"
          description="See the entry point for each product, then speak with our team to confirm users, modules, onboarding, data migration, integrations, and support."
          plans={CORE_PRODUCTS.map((product) => ({
            name: product.name,
            price: product.pricing[0].price,
            period: '',
            description: product.pricing[0].description,
            features: product.features,
            featured: product.name === 'EduMyles'
          }))}
          centerHeader={true}
        />

        {/* Final CTA Section */}
        <CTASection
          title="Ready to Transform Your Organisation?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Let's discuss how our AI-powered solutions can drive your success and growth. Join ${HOMEPAGE_DATA.overview.stats[3].number} businesses already thriving with MylesCorp.`}
          primaryCta={{ text: "Book a Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
