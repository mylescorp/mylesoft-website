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
  title: 'MylesPay — Digital Payment Solution Kenya',
  description: 'Secure digital payment platform for Kenyan businesses. Mobile money integration, multi-currency support, instant settlements, payment analytics. Built for East African markets.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylespay',
  },
}

const MYLESPAY_DATA = {
  hero: {
    eyebrow: 'FINANCIAL SERVICES',
    heading: 'Seamless Digital',
    goldWord: 'Payments',
    subtitle: 'Modern payment solution designed for African businesses with mobile money integration and multi-currency support.',
    badge: 'DEVELOPMENT',
    primaryCta: { text: 'Get Started', href: '/book-demo' },
    secondaryCta: { text: 'Learn More', href: '/contact' }
  },
  overview: {
    stats: [
      { number: "Instant", label: "Settlements" },
      { number: "M-Pesa", label: "Integrated" },
      { number: "15+", label: "Currencies" },
      { number: "99.9%", label: "Uptime" }
    ],
    description: "MylesPay revolutionizes how businesses handle digital transactions across East Africa. Our platform integrates seamlessly with popular mobile money services while supporting traditional banking methods, providing a unified payment solution for all your business needs."
  },
  features: [
    {
      icon: 'smartphone',
      title: 'Mobile Money Integration',
      description: 'Seamless integration with M-Pesa, Airtel Money, and other popular mobile money services across East Africa.'
    },
    {
      icon: 'credit-card',
      title: 'Multi-Currency Support',
      description: 'Process payments in multiple currencies including KES, USD, EUR, and more with automatic conversion.'
    },
    {
      icon: 'zap',
      title: 'Instant Settlements',
      description: 'Get your money faster with real-time settlement to your bank account or mobile wallet.'
    },
    {
      icon: 'bar-chart',
      title: 'Payment Analytics',
      description: 'Comprehensive dashboard with real-time insights into your payment patterns and revenue streams.'
    },
    {
      icon: 'file-text',
      title: 'Invoice Management',
      description: 'Create, send, and track invoices with automated payment reminders and reconciliation.'
    },
    {
      icon: 'repeat',
      title: 'Recurring Payments',
      description: 'Set up automated recurring billing for subscriptions and regular payment arrangements.'
    }
  ],
  process: [
    {
      step: 1,
      title: 'Account Setup',
      description: 'Create your business account in minutes with our streamlined onboarding process and KYC verification.'
    },
    {
      step: 2,
      title: 'Payment Methods',
      description: 'Configure your preferred payment methods including mobile money, bank transfers, and card payments.'
    },
    {
      step: 3,
      title: 'Integration',
      description: 'Integrate MylesPay into your website, app, or POS system with our developer-friendly APIs.'
    },
    {
      step: 4,
      title: 'Start Accepting',
      description: 'Begin accepting payments from customers across all supported channels and methods.'
    },
    {
      step: 5,
      title: 'Track & Grow',
      description: 'Monitor transactions, analyze trends, and optimize your payment strategy with real-time analytics.'
    }
  ],
  targets: [
    'E-commerce Businesses',
    'Service Providers',
    'Retail Stores',
    'Subscription Services',
    'Freelancers',
    'Small & Medium Enterprises'
  ],
  pricing: [
    {
      name: 'Starter',
      price: 'KES 2,999',
      period: 'per month',
      description: 'Perfect for small businesses getting started with digital payments.',
      features: [
        'Up to KES 500,000 monthly volume',
        '2.5% transaction fee',
        'Mobile money & card payments',
        'Basic analytics',
        'Email support'
      ],
      featured: false
    },
    {
      name: 'Business',
      price: 'KES 7,999',
      period: 'per month',
      description: 'Ideal for growing businesses with higher transaction volumes.',
      features: [
        'Up to KES 2,000,000 monthly volume',
        '2.0% transaction fee',
        'All payment methods',
        'Advanced analytics',
        'Priority support',
        'API access'
      ],
      featured: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'pricing',
      description: 'Tailored solutions for large enterprises with specific needs.',
      features: [
        'Unlimited monthly volume',
        'Custom transaction fees',
        'White-label solutions',
        'Dedicated account manager',
        '24/7 phone support',
        'Custom integrations'
      ],
      featured: false
    }
  ],
  testimonials: [
    {
      quote: "MylesPay has transformed how we handle payments. The mobile money integration is seamless and settlements are instant.",
      author: "Sarah Kimani",
      role: "CEO, TechStore Kenya",
      organization: "TechStore Kenya",
      avatar: "SK"
    },
    {
      quote: "The analytics dashboard gives us incredible insights into our payment patterns. Best payment solution we've used.",
      author: "David Ochieng",
      role: "Founder, Nairobi Eats",
      organization: "Nairobi Eats",
      avatar: "DO"
    }
  ]
}

export default function MylesPayPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESPAY_DATA.hero} productName="MylesPay" />

        {/* Stats */}
        <StatsSection stats={MYLESPAY_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection 
          title="MylesPay"
          description={MYLESPAY_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "99.9%", label: "System uptime" },
            { number: "2 min", label: "Avg transaction time" },
            { number: "15+", label: "Currencies supported" },
            { number: "24/7", label: "Support available" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Everything Your Business Needs"
          description="6 powerful payment features covering every aspect of digital transactions — all in one platform."
          features={MYLESPAY_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'smartphone' ? '📱' :
                   f.icon === 'credit-card' ? '💳' :
                   f.icon === 'zap' ? '⚡' :
                   f.icon === 'bar-chart' ? '📊' :
                   f.icon === 'file-text' ? '📝' :
                   f.icon === 'repeat' ? '🔄' : '🔌'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Get Started in 5 Steps"
          description="From account creation to accepting payments — a simple and secure onboarding process."
          steps={MYLESPAY_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection
          title="Built for Every Business"
          targets={MYLESPAY_DATA.targets}
        />

        {/* Pricing */}
        <PricingSection
          title="Simple, Transparent Pricing"
          description="All plans include free setup, integration support, and ongoing assistance. No hidden fees."
          plans={MYLESPAY_DATA.pricing.map(p => ({
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
          testimonials={MYLESPAY_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Ready to Transform Your Payments?"
          tagline="Powering Digital Transactions Across East Africa."
          description="Join thousands of businesses already using MylesPay for secure, fast, and reliable payment processing. Start accepting payments today."
          primaryCta={{ text: "Start Free Trial", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
