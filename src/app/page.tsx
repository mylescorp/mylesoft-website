import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { PricingSection } from '@/components/ui/PricingSection'
import {
  Zap, MapPin, Shield, Users, TrendingUp, Award, Crown, Star, CheckCircle, Globe, Rocket, Heart
} from 'lucide-react'

export const metadata = {
  title: 'MylesCorp',
  description: 'East Africa\'s leading AI-powered software company. EduMyles, MylesCare, AgriMyles, MylesCRM — transforming Education, Healthcare, Agriculture, and Business across Kenya, Uganda, Tanzania.',
  alternates: {
    canonical: 'https://www.mylescorp.co.ke/',
  },
}

const HOMEPAGE_DATA = {
  overview: {
    title: 'MylesCorp Technologies',
    tagline: 'Transforming Industries, Empowering Generations',
    description: [
      'East Africa\'s leading AI-powered software company delivering innovative solutions.',
      'Transforming businesses and empowering communities across the continent with cutting-edge technology.'
    ],
    image: '/api/og/product?name=MylesCorp&category=Company',
    stats: [
      { number: '500+', label: 'Schools Managed' },
      { number: '50K+', label: 'Patients Served' },
      { number: '1,000+', label: 'Farmers Helped' },
      { number: '200+', label: 'Businesses Transformed' }
    ]
  },
  features: [
    {
      icon: '🤖',
      title: 'AI-Powered Intelligence',
      description: 'Advanced machine learning algorithms provide smart insights and automation for your business.'
    },
    {
      icon: '🎯',
      title: 'Industry-Specific Solutions',
      description: 'Purpose-built solutions for education, healthcare, agriculture, and business sectors.'
    },
    {
      icon: '🌍',
      title: 'East African Focus',
      description: 'Designed specifically for African markets with local expertise and understanding.'
    },
    {
      icon: '👑',
      title: 'Premium Support',
      description: 'Dedicated team available round the clock for assistance and guidance.'
    },
    {
      icon: '🚀',
      title: 'Scalable Technology',
      description: 'Grow from startup to enterprise with solutions that scale with your business.'
    },
    {
      icon: '❤️',
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
          
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Company Name */}
            <div className="mb-12">
              <h2 className="font-display font-bold text-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] break-words text-balance">
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
            
            <h1 className="font-display font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] mb-6 break-words text-balance">
              {HOMEPAGE_DATA.overview.tagline.split(',')[0]}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                {HOMEPAGE_DATA.overview.tagline.split(',')[1]}
              </span>
            </h1>
            
            <p className="font-body font-light text-light-blue text-base sm:text-lg md:text-xl max-w-xs sm:max-w-md md:max-w-2xl mx-auto mb-10">
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
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto leading-[1.7]">
                Transforming industries across East Africa with AI-powered software solutions designed for your specific needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'EduMyles',
                  category: 'Education',
                  description: 'Complete school management system with student tracking, grade management, and parent communication.',
                  icon: '🎓',
                  color: 'blue',
                  features: ['Student Management', 'Grade Tracking', 'Parent Portal', 'Attendance System'],
                  href: '/products/edumyles'
                },
                {
                  name: 'MylesCare',
                  category: 'Healthcare',
                  description: 'Healthcare management platform for patient records, appointments, and medical billing.',
                  icon: '🏥',
                  color: 'green',
                  features: ['Patient Records', 'Appointment Scheduling', 'Medical Billing', 'Telemedicine'],
                  href: '/products/mylescare'
                },
                {
                  name: 'AgriMyles',
                  category: 'Agriculture',
                  description: 'Smart agricultural solutions with crop monitoring, weather alerts, and market insights.',
                  icon: '🌾',
                  color: 'yellow',
                  features: ['Crop Monitoring', 'Weather Alerts', 'Market Insights', 'Farm Management'],
                  href: '/products/agrimyles'
                },
                {
                  name: 'MylesCRM',
                  category: 'Business',
                  description: 'Comprehensive business management system with CRM, inventory, and financial tracking.',
                  icon: '💼',
                  color: 'purple',
                  features: ['CRM System', 'Inventory Management', 'Financial Tracking', 'Analytics'],
                  href: '/products/mylescrm'
                }
              ].map((product, index) => (
                <Link 
                  key={index}
                  href={product.href}
                  className="group block"
                >
                  <div className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:border-gold/30 transition-all duration-300 h-full overflow-hidden">
                    {/* Product Header */}
                    <div className={`h-2 bg-gradient-to-r ${
                      product.color === 'blue' ? 'from-blue-500 to-blue-600' :
                      product.color === 'green' ? 'from-green-500 to-green-600' :
                      product.color === 'yellow' ? 'from-yellow-500 to-yellow-600' :
                      'from-purple-500 to-purple-600'
                    }`} />
                    
                    <div className="p-6">
                      {/* Category Badge */}
                      <div className="inline-flex items-center px-3 py-1 rounded-full bg-gold/10 text-gold text-xs font-semibold mb-4">
                        {product.category}
                      </div>
                      
                      {/* Icon */}
                      <div className="w-16 h-16 bg-navy-deep/5 rounded-xl flex items-center justify-center mb-4 mx-auto">
                        <span className="text-3xl">{product.icon}</span>
                      </div>
                      
                      {/* Product Name */}
                      <h3 className="font-display font-bold text-navy text-xl mb-2 text-center">
                        {product.name}
                      </h3>
                      
                      {/* Description */}
                      <p className="font-body text-light-blue text-sm leading-[1.6] mb-4 text-center">
                        {product.description}
                      </p>
                      
                      {/* Key Features */}
                      <div className="space-y-2 mb-4">
                        {product.features.slice(0, 2).map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                            <div className="w-1 h-1 bg-gold rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                      </div>
                      
                      {/* Learn More */}
                      <div className="text-center">
                        <span className="text-gold font-semibold text-sm group-hover:text-gold-light transition-colors">
                          Learn More →
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            
            {/* Additional Products */}
            <div className="mt-16 text-center">
              <h3 className="font-display font-bold text-navy text-2xl mb-4">
                More Solutions Available
              </h3>
              <p className="font-body text-light-blue mb-8">
                We offer specialized solutions for Legal, Energy, NonProfit, Construction, Hospitality, Manufacturing, Media, and Transportation industries.
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Legal', 'Energy', 'NonProfit', 'Construction', 'Hospitality', 'Manufacturing', 'Media', 'Transportation'].map((industry, index) => (
                  <span key={index} className="px-3 py-1 bg-navy-deep/5 text-navy text-sm rounded-full">
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
              <p className="font-body text-light-blue text-lg max-w-2xl mx-auto leading-[1.7]">
                Empowering thousands of users in Kenya, Uganda, Tanzania, and beyond with innovative AI-powered solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '500+', label: 'Schools Managed', icon: '🎓' },
                { number: '50K+', label: 'Patients Served', icon: '🏥' },
                { number: '1,000+', label: 'Farmers Helped', icon: '🌾' },
                { number: '200+', label: 'Businesses Transformed', icon: '💼' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-light-blue text-sm font-body">
                    <span className="mr-2">{stat.icon}</span>
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
