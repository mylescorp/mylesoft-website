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
import { Camera, Video, Image, FileText, Users, Check } from 'lucide-react'

export const metadata = {
  title: 'MylesMedia - Media Management Software | MylesCorp Technologies',
  description: 'Comprehensive media management solution for content creators, broadcasters, and media companies. Streamline content production and distribution.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesmedia',
  },
}

const MYLESMEDIA_DATA = {
  overview: {
    title: 'MylesMedia',
    tagline: 'Smart Media Management for Content Excellence',
    description: [
      'Comprehensive media management solution designed for African content creators and media companies.',
      'Streamline content production, manage assets, and optimize distribution with intelligent automation.'
    ],
    image: '/api/og/product?name=MylesMedia&category=Media',
    stats: [
      { number: '80+', label: 'Media Clients' },
      { number: '100K+', label: 'Content Pieces Managed' },
      { number: '45%', label: 'Production Efficiency' },
      { number: '24/7', label: 'Content Monitoring' }
    ]
  },
  features: [
    {
      icon: '📹',
      title: 'Content Management',
      description: 'Centralized content library with metadata tagging and advanced search capabilities.'
    },
    {
      icon: '🎥',
      title: 'Video Production',
      description: 'Video editing workflow management with automated transcoding and distribution.'
    },
    {
      icon: '🖼️',
      title: 'Asset Library',
      description: 'Digital asset management with version control and rights management.'
    },
    {
      icon: '📄',
      title: 'Publishing Tools',
      description: 'Multi-channel publishing with automated scheduling and content optimization.'
    },
    {
      icon: '👥',
      title: 'Collaboration',
      description: 'Team collaboration tools with approval workflows and content review processes.'
    },
    {
      icon: '✅',
      title: 'Analytics Dashboard',
      description: 'Content performance analytics with audience engagement and ROI tracking.'
    }
  ],
  process: [
    { step: 1, title: 'Assessment', description: 'Content workflow analysis and requirements gathering' },
    { step: 2, title: 'Setup', description: 'System configuration and content migration' },
    { step: 3, title: 'Train', description: 'Team training on media management tools' },
    { step: 4, title: 'Launch', description: 'Go-live with content production support' },
    { step: 5, title: 'Optimize', description: 'Continuous improvement based on content performance' }
  ],
  targets: [
    'Broadcast Media - TV stations and radio broadcasters',
    'Digital Media - Online publishers and content creators',
    'Advertising Agencies - Creative agencies and production houses',
    'Corporate Communications - Internal and external communications teams'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KSh 6,000/month',
      description: 'Perfect for small content teams',
      features: ['Up to 10 users', 'Basic content management', 'Asset library (100GB)', 'Mobile app', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: 'KSh 20,000/month',
      description: 'Ideal for media companies',
      features: ['Up to 50 users', 'Advanced content management', 'Video production tools', 'Analytics dashboard', 'Priority support', 'API access', 'Most Popular'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      description: 'For large media organizations',
      features: ['Unlimited users', 'Full feature access', 'Multi-channel publishing', 'Dedicated support', 'Custom integrations', 'On-premise option'],
      popular: false
    }
  ],
  testimonials: [
    {
      quote: 'MylesMedia transformed our content production workflow. We reduced production time by 45% while improving content quality significantly.',
      author: 'James Muriuki',
      role: 'Content Director',
      organization: 'Nairobi Media Group'
    },
    {
      quote: 'The collaboration features alone improved our team productivity by 60% and streamlined our approval processes.',
      author: 'Grace Wanjiru',
      role: 'Production Manager',
      organization: 'East Africa Broadcasting'
    }
  ]
}

export default function MylesMediaPage() {
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
                MEDIA SOLUTION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              {MYLESMEDIA_DATA.overview.title}
              <span className="text-white italic block mt-2">
                {MYLESMEDIA_DATA.overview.tagline}
              </span>
            </h1>

            <p className="font-body font-light text-light-blue text-lg md:text-xl max-w-3xl mx-auto mb-8 leading-[1.7]">
              {MYLESMEDIA_DATA.overview.description[0]}
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
              {MYLESMEDIA_DATA.overview.stats.map((stat, index) => (
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
          title={MYLESMEDIA_DATA.overview.title}
          description={MYLESMEDIA_DATA.overview.description}
          stats={MYLESMEDIA_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection
          title="Powerful Media Management Features"
          description="Everything you need to manage your content production efficiently and effectively."
          features={MYLESMEDIA_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Implementation in 5 Steps"
          description="From assessment to optimization — a clear path to media excellence."
          steps={MYLESMEDIA_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Media Organization"
          targets={MYLESMEDIA_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="Choose the perfect plan for your media business. All plans include free setup and support."
          plans={MYLESMEDIA_DATA.pricing.map(p => ({
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
          testimonials={MYLESMEDIA_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Media Operations?"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESMEDIA_DATA.overview.stats[0].number} media organizations across Africa already thriving with MylesMedia.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Talk to Our Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
