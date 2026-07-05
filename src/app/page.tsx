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
import { HeroImageBackdrop } from '@/components/ui/HeroImageBackdrop'
import { HOMEPAGE_SERVICE_HERO_IMAGES } from '@/lib/constants/hero-images'

export const metadata = {
  title: 'MylesCorp Technologies, Operating Systems for African Institutions',
  description: 'MylesCorp Technologies builds EduMyles, EduRyde, MylesCare, MylesCRM, AgriMyles, MylesProp, and MylesNet for schools, healthcare facilities, transport teams, agricultural teams, real estate teams, network operators, and growing businesses across Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/',
  },
}

const HOMEPAGE_DATA = {
  overview: {
    title: 'MylesCorp Technologies',
    tagline: 'Software for the institutions that keep Africa moving',
    description: [
      'Focused software for school administration, school transport safety, healthcare delivery, agricultural operations, real estate management, and business growth across Africa.',
      'EduMyles, EduRyde, MylesCare, MylesCRM, AgriMyles, MylesProp, and MylesNet help teams replace spreadsheets, WhatsApp follow-ups, manual reports, and disconnected workflows with reliable digital operations.'
    ],
    image: '/api/og?title=MylesCorp%20Technologies&description=AI-Powered%20Software%20Solutions%20for%20Africa',
    stats: [
      { number: 'Education', label: 'School Systems' },
      { number: 'Transport', label: 'Route Visibility' },
      { number: '7', label: 'Core Products' },
      { number: 'Network', label: 'ISP Operations' }
    ]
  },
  features: [
    {
      icon: 'brain',
      title: 'Operational Intelligence',
      description: 'Dashboards, alerts, reports, and automation that help teams act from clear data.'
    },
    {
      icon: 'target',
      title: 'Sector-Specific Systems',
      description: 'Purpose-built products for education, school transport, healthcare, agriculture, property, and business teams.'
    },
    {
      icon: 'globe',
      title: 'East African Focus',
      description: 'Designed specifically for African markets with local expertise and understanding.'
    },
    {
      icon: 'crown',
      title: 'Implementation Support',
      description: 'Onboarding, training, data migration, and support through go-live and daily use.'
    },
    {
      icon: 'rocket',
      title: 'Growth-Ready Architecture',
      description: 'Start with the workflows you need now and add users, branches, integrations, and reports over time.'
    },
    {
      icon: 'heart',
      title: 'Local Operating Fit',
      description: 'Built around regional realities such as M-Pesa payments, SMS communication, mobile access, and low-bandwidth use.'
    }
  ],
  process: [
    { step: 1, title: 'Discovery', description: 'We understand your unique challenges and requirements' },
    { step: 2, title: 'Scope', description: 'Define modules, users, data, integrations, timeline, and success criteria' },
    { step: 3, title: 'Implementation', description: 'Configure the product, migrate data, connect integrations, and test workflows' },
    { step: 4, title: 'Training', description: 'Prepare administrators and users with role-based handover sessions' },
    { step: 5, title: 'Operations', description: 'Review adoption, reporting, support needs, and the next rollout phase' }
  ],
  targets: [
    'Educational Institutions - Schools seeking digital administration and reporting',
    'School Transport Teams - Administrators and bus operators needing route visibility',
    'Healthcare Facilities - Clinics, hospitals, pharmacies, and labs needing digital patient and billing workflows',
    'Agricultural Teams - Farmers, cooperatives, and agribusinesses needing advisory, records, markets, and supply chain visibility',
    'Real Estate Teams - Landlords, property managers, and agencies needing tenant, rent, maintenance, and reporting workflows',
    'Network Operators - ISPs and connectivity teams needing subscriber, billing, support, and field visibility',
    'Business Enterprises - SMEs and sales teams looking for customer and revenue clarity'
  ],
  testimonials: [
    {
      quote: 'MylesCorp gave our school clearer daily operations. We\'ve seen a 40% improvement in efficiency and student engagement.',
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
      description: 'For small organizations getting started',
      features: ['Up to 50 users', 'Basic features', 'Email support', 'Standard security'],
      popular: false
    },
    {
      name: 'Growth',
      price: 'KSh 45,000',
      period: '/month',
      description: 'For growing organizations',
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
  {
    name: 'MylesCare',
    href: '/products/mylescare',
    eyebrow: 'Healthcare Management',
    summary:
      'MylesCare supports hospitals, clinics, pharmacies, diagnostic labs, and medical chains with electronic patient records, appointments, queue management, billing, M-Pesa payments, pharmacy, laboratory workflows, SHA claims, and healthcare reporting.',
    highlights: [
      'Electronic patient records and clinical history',
      'Appointments, queues, billing, and M-Pesa collections',
      'Pharmacy, laboratory, ward, and inpatient workflows',
      'SHA, insurance, analytics, and reporting support',
    ],
  },
  {
    name: 'AgriMyles',
    href: '/products/agrimyles',
    eyebrow: 'Agricultural Technology',
    summary:
      'AgriMyles supports farmers, cooperatives, agribusinesses, county teams, and development partners with AI crop advisory, farm records, market price visibility, buyer linkages, supply chain management, financial services access, and cooperative workflows.',
    highlights: [
      'AI crop advisory for planting, inputs, pests, and harvest timing',
      'Digital farm profiles, crop calendars, records, and yield history',
      'Market prices, buyer linkages, supply chain, and cooperative tools',
      'Mobile, SMS, low-bandwidth, English, Swahili, and M-Pesa-ready operations',
    ],
  },
  {
    name: 'MylesProp',
    href: '/products/mylesprop',
    eyebrow: 'Real Estate Management',
    summary:
      'MylesProp helps landlords, property managers, real estate agencies, and developers manage properties, tenants, leases, rent collection, maintenance requests, documents, and portfolio reporting from one operating system.',
    highlights: [
      'Property, unit, landlord, tenant, and lease records',
      'Rent reminders, payment tracking, arrears visibility, and statements',
      'Maintenance requests, vendor coordination, and service history',
      'Document storage, inspection records, and portfolio reports',
    ],
  },
  {
    name: 'MylesNet',
    href: '/products/mylesnet',
    eyebrow: 'Network Operations',
    summary:
      'MylesNet supports internet service providers and connectivity teams with subscriber records, service plans, billing visibility, support workflows, infrastructure tracking, installations, and field operations.',
    highlights: [
      'Subscriber, service plan, and account records',
      'Billing visibility, service status, and support tracking',
      'Network asset, installation, and field-team coordination',
      'Operator reporting for connectivity teams and ISP workflows',
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
          <HeroImageBackdrop images={HOMEPAGE_SERVICE_HERO_IMAGES} priority />

          <div className="absolute inset-0 bg-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/55 via-navy/10 to-navy/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/35 via-transparent to-navy/25" />

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

          <div className="hero-copy-shadow relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
                OPERATING SYSTEMS FOR EAST AFRICA
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-[1.95rem] sm:text-[2.45rem] md:text-[3rem] lg:text-[3.85rem] xl:text-[4.25rem] leading-[1.07] mb-6 max-w-6xl mx-auto">
              <span className="block">Software Systems</span>
              <span className="block">for Schools,</span>
              <span className="block">Healthcare, Transport,</span>
              <span className="block">Agriculture &amp; Business</span>
            </h1>

            <p className="font-body text-light-blue text-[1rem] sm:text-[1.05rem] md:text-[1.12rem] max-w-2xl mx-auto mb-3 leading-8">
              {HOMEPAGE_DATA.overview.tagline}
            </p>

            <p className="font-body text-light-blue/95 text-[1rem] sm:text-[1.05rem] md:text-[1.14rem] leading-8 max-w-3xl mx-auto mb-10">
              {HOMEPAGE_DATA.overview.description[0]}
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 justify-center">
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
                Sector-Specific Products
              </h2>
            <p className="font-body text-medium-grey text-[1.08rem] md:text-lg max-w-2xl mx-auto leading-8">
                Seven focused products for serious growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                Supporting schools, healthcare facilities, transport teams, agricultural teams, property teams, and businesses in Kenya, Uganda, Tanzania, and beyond with focused operating systems.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: 'Education', label: 'School Systems', icon: 'graduation-cap' },
                { number: 'Transport', label: 'Route Visibility', icon: 'bus' },
                { number: '7', label: 'Focused Products', icon: 'target' },
                { number: 'Network', label: 'ISP Operations', icon: 'wifi' }
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
          description="We build practical products around African operating realities, with clear onboarding, local integrations, and support after launch."
          features={HOMEPAGE_DATA.features}
          centerHeader={true}
        />

        {/* SECTION 5 — Values */}
        <MYLESValues />

        {/* Process Section */}
        <ProcessSection
          title="Our 5-Step Process"
          description="From discovery to daily operations, each rollout is scoped, configured, tested, trained, and reviewed."
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
          title="Ready to Modernise Your Operation?"
          tagline="Transforming Industries, Empowering Generations."
          description="Let's discuss the workflows, users, integrations, data, and support your team needs."
          primaryCta={{ text: "Book a Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  )
}
