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

export const metadata = {
  title: 'MylesCorp Technologies, AI Software Solutions for East Africa',
  description: 'East Africa\'s leading AI software company. Solutions for schools, hospitals, farms & businesses in Kenya, Uganda & Tanzania. Book a free demo today.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/',
  },
}

const HOMEPAGE_DATA = {
  overview: {
    title: 'MylesCorp Technologies',
    tagline: 'Transforming Industries, Empowering Generations',
    description: [
      'AI-powered software solutions for schools, hospitals, businesses, and farms across Kenya and East Africa.',
      'From school management systems in Kenya to healthcare management software, agricultural software, and AI business software in Nairobi, we build practical tools that help organisations run smarter.'
    ],
    image: '/api/og?title=MylesCorp%20Technologies&description=AI-Powered%20Software%20Solutions%20for%20East%20Africa',
    stats: [
      { number: '500+', label: 'Schools Managed' },
      { number: '50K+', label: 'Patients Served' },
      { number: '1,000+', label: 'Farmers Helped' },
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
      description: 'Purpose-built solutions for education, healthcare, agriculture, and business sectors.'
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
    'Educational Institutions - Schools, colleges, and universities seeking digital transformation',
    'Healthcare Providers - Hospitals, clinics, and medical centers needing management solutions',
    'Agricultural Organizations - Farms, cooperatives, and agribusinesses',
    'Business Enterprises - SMEs and corporations looking for operational efficiency'
  ],
  testimonials: [
    {
      quote: 'MylesCorp transformed our school operations. We\'ve seen a 40% improvement in efficiency and student engagement.',
      author: 'Sarah Johnson',
      role: 'Principal',
      organization: 'Nairobi Academy'
    },
    {
      quote: 'The AI-powered solutions helped us reduce patient wait times by 60% while improving care quality.',
      author: 'Dr. Michael Chen',
      role: 'Medical Director',
      organization: 'East Africa Medical Center'
    },
    {
      quote: 'Their agricultural solutions increased our yield by 35% while reducing costs significantly.',
      author: 'Grace Wanjiku',
      role: 'Farm Manager',
      organization: 'Kenya Agricultural Cooperative'
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 15,000',
      period: '/month',
      description: 'Perfect for small organizations getting started',
      features: ['Up to 50 users', 'Basic features', 'Email support', 'Standard security'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KES 45,000',
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

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
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
              <h2 className="font-display font-semibold text-gold text-2xl sm:text-3xl md:text-[2.6rem] lg:text-[3.2rem] leading-[1.08] tracking-[-0.02em]">
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
            
            <h1 className="font-display font-bold text-white text-[2.5rem] sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.4rem] xl:text-[4.85rem] leading-[0.96] tracking-[-0.045em] mb-6 max-w-6xl mx-auto">
              <span className="block">AI-Powered Software Solutions</span>
              <span className="block">for Schools, Hospitals &amp;</span>
              <span className="block">Businesses in Kenya</span>
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
                  className="w-full sm:w-auto border-2 border-gold/50 text-gold hover:border-gold hover:bg-gold hover:text-white px-6 py-3 text-sm font-semibold"
                >
                  Explore Products
                </Button>
              </Link>
              <Link href="/contact" transitionTypes={['slide']}>
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="w-full sm:w-auto border-2 border-gold/50 text-gold hover:border-gold hover:bg-gold/10 px-6 py-3 text-sm font-semibold"
                >
                  Talk to Our Team
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
                Transforming industries across East Africa with AI-powered software solutions designed for your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
              {[
                {
                  name: 'EduMyles',
                  category: 'Education',
                  description: 'A complete school management system Kenya schools can use for CBC grading, student tracking, and parent communication.',
                  icon: 'graduation-cap',
                  features: ['Student Management', 'Grade Tracking', 'Parent Portal', 'Attendance System'],
                  href: '/products/edumyles',
                  status: 'live' as const
                },
                {
                  name: 'MylesCare',
                  category: 'Healthcare',
                  description: 'Healthcare management software Kenya clinics and hospitals use for patient records, appointments, and billing.',
                  icon: 'stethoscope',
                  features: ['Patient Records', 'Appointment Scheduling', 'Medical Billing', 'Telemedicine'],
                  href: '/products/mylescare',
                  status: 'live' as const
                },
                {
                  name: 'AgriMyles',
                  category: 'Agriculture',
                  description: 'Agricultural software East Africa farmers use for crop monitoring, weather alerts, and market insights.',
                  icon: 'sprout',
                  features: ['Crop Monitoring', 'Weather Alerts', 'Market Insights', 'Farm Management'],
                  href: '/products/agrimyles',
                  status: 'live' as const
                },
                {
                  name: 'MylesCRM',
                  category: 'Business',
                  description: 'AI business software Nairobi teams use for CRM, inventory, invoicing, and financial tracking.',
                  icon: 'briefcase',
                  features: ['CRM System', 'Inventory Management', 'Financial Tracking', 'Analytics'],
                  href: '/products/mylescrm',
                  status: 'live' as const
                }
              ].map((product, index) => (
                <ProductCard key={index} {...product} />
              ))}
            </div>
            
            {/* Additional Products */}
            <div className="mt-16 text-center">
              <h3 className="font-display font-bold text-navy text-2xl mb-4">
                More Solutions Available
              </h3>
              <p className="font-body text-medium-grey text-[1rem] leading-8 mb-8 max-w-3xl mx-auto">
                We offer specialized solutions for Legal, Energy, NonProfit, Construction, Hospitality, Manufacturing, Media, and Transportation industries.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Legal', 'Energy', 'NonProfit', 'Construction', 'Hospitality', 'Manufacturing', 'Media', 'Transportation'].map((industry, index) => (
                  <span key={index} className="px-4 py-1.5 bg-navy-deep/5 text-navy text-[0.95rem] rounded-full border border-navy/10">
                    {industry}
                  </span>
                ))}
              </div>
              <Link href="/products">
                <Button 
                  size="lg" 
                  variant="primary"
                  className="px-8 py-3"
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-navy-deep">
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
                Empowering thousands of users in Kenya, Uganda, Tanzania, and beyond with innovative AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Schools Managed', icon: 'graduation-cap' },
                { number: '50K+', label: 'Patients Served', icon: 'stethoscope' },
                { number: '1,000+', label: 'Farmers Helped', icon: 'sprout' },
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
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your organization. All plans include our core features with premium options for advanced needs."
          plans={HOMEPAGE_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
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
