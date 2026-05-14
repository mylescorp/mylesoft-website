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
  title: 'MylesGov — Digital Governance Platform Kenya',
  description: 'Complete digital governance solution for Kenyan public sector. Citizen services, document management, workflow automation, public records. Built for East African governments.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesgov',
  },
}

const MYLESGOV_DATA = {
  hero: {
    eyebrow: 'GOVERNMENT',
    heading: 'Digital',
    goldWord: 'Governance',
    subtitle: 'Comprehensive digital governance solution transforming public sector service delivery and citizen engagement.',
    badge: 'DEVELOPMENT',
    primaryCta: { text: 'Get Started', href: '/book-demo' },
    secondaryCta: { text: 'Learn More', href: '/contact' }
  },
  overview: {
    stats: [
      { number: "50+", label: "Government Bodies" },
      { number: "1M+", label: "Citizens Served" },
      { number: "24/7", label: "Service Access" },
      { number: "99.9%", label: "System Uptime" }
    ],
    description: "MylesGov revolutionizes how government institutions serve citizens through digital transformation. Our platform provides comprehensive solutions for citizen services, document management, workflow automation, and public records management to enhance transparency, efficiency, and citizen satisfaction."
  },
  features: [
    {
      icon: 'users',
      title: 'Citizen Services',
      description: 'Digital portal for citizens to access government services and submit requests.'
    },
    {
      icon: 'file-text',
      title: 'Document Management',
      description: 'Secure digital storage and management of government documents and records.'
    },
    {
      icon: 'zap',
      title: 'Workflow Automation',
      description: 'Automate government processes and reduce manual paperwork and delays.'
    },
    {
      icon: 'database',
      title: 'Public Records',
      description: 'Centralized database for public records with easy search and access.'
    },
    {
      icon: 'message-circle',
      title: 'Service Requests',
      description: 'Track and manage citizen service requests with status updates.'
    },
    {
      icon: 'shield',
      title: 'Compliance Tracking',
      description: 'Monitor and ensure compliance with government regulations and standards.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Needs Assessment',
      description: 'Analyze current government processes and identify digital transformation opportunities.'
    },
    {
      step: 2,
      title: 'System Design',
      description: 'Design customized digital workflows and citizen service portals.'
    },
    {
      step: 3,
      title: 'Data Migration',
      description: 'Securely migrate existing government data to the new digital platform.'
    },
    {
      step: 4,
      title: 'Staff Training',
      description: 'Train government staff on using the digital governance platform effectively.'
    },
    {
      step: 5,
      title: 'Public Launch',
      description: 'Launch digital services to citizens with ongoing support and optimization.'
    }
  ],
  targets: [
    'County Governments',
    'National Ministries',
    'State Corporations',
    'Municipalities',
    'Public Hospitals',
    'Educational Institutions'
  ],
  pricing: [
    {
      name: 'Basic',
      price: 'KSh 99,999',
      period: 'per month',
      description: 'Perfect for small government bodies and departments.',
      features: [
        'Up to 100 users',
        'Basic citizen services',
        'Document management',
        'Email support',
        'Basic reporting'
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: 'KSh 299,999',
      period: 'per month',
      description: 'Ideal for medium-sized government institutions.',
      features: [
        'Up to 500 users',
        'Advanced citizen services',
        'Workflow automation',
        'Public records',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large government bodies and national ministries.',
      features: [
        'Unlimited users',
        'White-label solution',
        'Custom integrations',
        'Dedicated support',
        'Advanced security',
        'Multi-department support'
      ],
      featured: false
    }
  ],
  testimonials: [
    {
      quote: "MylesGov has transformed how we serve our citizens. Service delivery is now faster and more transparent.",
      author: "John Kamau",
      role: "ICT Director, Nairobi County",
      organization: "Nairobi County Government",
      avatar: "JK"
    },
    {
      quote: "The workflow automation has reduced our processing time by 70%. Citizens are very satisfied with the new digital services.",
      author: "Grace Njeri",
      role: "Permanent Secretary, Ministry of Technology",
      organization: "Ministry of Technology",
      avatar: "GN"
    }
  ]
}

export default function MylesGovPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESGOV_DATA.hero} productName="MylesGov" />

        {/* Stats */}
        <StatsSection stats={MYLESGOV_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="MylesGov"
          description={MYLESGOV_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "1M+", label: "Citizens served" },
            { number: "24/7", label: "Service access" },
            { number: "50+", label: "Government bodies" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your Government Needs"
          description="6 powerful features covering every aspect of digital governance — all in one platform."
          features={MYLESGOV_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'users' ? '👥' :
                   f.icon === 'file-text' ? '📝' :
                   f.icon === 'zap' ? '⚡' :
                   f.icon === 'database' ? '🗄️' :
                   f.icon === 'message-circle' ? '💬' :
                   f.icon === 'shield' ? '🛡️' : '🏛️'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Digital Transformation in 5 Steps"
          description="From needs assessment to public launch — a clear and systematic implementation process."
          steps={MYLESGOV_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Institution"
          targets={MYLESGOV_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Government Pricing Plans"
          description="All plans include secure hosting, training, and ongoing technical support. Custom solutions available."
          plans={MYLESGOV_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Priority support')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="What Our Partners Say"
          testimonials={MYLESGOV_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Public Services?"
          tagline="Digitalizing Governance Across East Africa."
          description="Join government institutions already using MylesGov for efficient service delivery and citizen engagement. Start your digital transformation journey."
          primaryCta={{ text: "Schedule Consultation", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Government Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
