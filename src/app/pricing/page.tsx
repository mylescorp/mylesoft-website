import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { CORE_PRODUCTS } from '@/lib/constants/products'
import Link from 'next/link'
import { Check } from 'lucide-react'

export const metadata = {
  title: 'Pricing — EduMyles, EduRyde, and MylesCRM | MylesCorp',
  description: 'Current MylesCorp pricing for EduMyles, EduRyde, and MylesCRM. Pricing is pulled from each product page for consistency.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/pricing',
  },
}

const PRICING_DATA = {
  overview: {
    title: 'Pricing',
    description: [
      'Clear plan options for EduMyles, EduRyde, and MylesCRM.',
      'Each pricing table uses the same plan data shown on the matching product page, so sales conversations and product pages stay aligned.'
    ],
    stats: [
      { number: '3', label: 'Core Products' },
      { number: '9', label: 'Published Plans' },
      { number: '20%', label: 'Annual Discount' },
      { number: '24/7', label: 'Support Available' }
    ]
  },
  features: [
    {
      icon: '👑',
      title: 'One Source of Truth',
      description: 'Pricing is shared with each product page to prevent conflicting package tables.'
    },
    {
      icon: '📈',
      title: 'Room to Scale',
      description: 'Starter, Professional, and Enterprise options let teams grow without changing systems.'
    },
    {
      icon: '🛡️',
      title: 'Implementation Support',
      description: 'Every deployment includes onboarding guidance, training, and practical support.'
    }
  ],
  process: [
    { step: 1, title: 'Pick a Product', description: 'Choose EduMyles, EduRyde, or MylesCRM based on your workflow' },
    { step: 2, title: 'Choose a Plan', description: 'Select the plan that matches your size and operational needs' },
    { step: 3, title: 'Book a Demo', description: 'Walk through the product with your actual use case' },
    { step: 4, title: 'Set Up', description: 'Configure users, records, integrations, and reporting' },
    { step: 5, title: 'Go Live', description: 'Launch with training and support from the MylesCorp team' }
  ],
  targets: [
    'Schools - EduMyles for administration, academics, fees, and parent communication',
    'School Transport Teams - EduRyde for tracking, routes, and parent notifications',
    'Growing Businesses - MylesCRM for leads, customers, invoicing, and sales visibility'
  ]
}

function splitPrice(price: string) {
  if (price.toLowerCase().includes('/month')) {
    return {
      amount: price.replace('/month', ''),
      period: '/month'
    }
  }

  return {
    amount: price,
    period: ''
  }
}

export default function PricingPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                TRANSPARENT PRICING
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Product Pricing
            </h1>

            <p className="font-body text-ice text-lg md:text-2xl max-w-3xl mx-auto mb-8 leading-9">
              {PRICING_DATA.overview.description[0]}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/book-demo">
                <Button size="lg" variant="primary" className="px-8 py-4 text-sm font-semibold shadow-lg hover:shadow-xl">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="px-8 py-4 text-sm font-semibold border-white text-white hover:border-white hover:bg-white/10">
                  Contact Sales
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {PRICING_DATA.overview.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-[0.95rem] text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <OverviewSection
          title={PRICING_DATA.overview.title}
          description={PRICING_DATA.overview.description}
          stats={PRICING_DATA.overview.stats}
        />

        <FeaturesSection
          title="Why This Pricing Stays Consistent"
          description="The public pricing page is now generated from the same plan data used by each product page."
          features={PRICING_DATA.features}
          centerHeader={true}
        />

        <section className="section bg-off-white">
          <div className="section-padding">
            <div className="text-center mb-12">
              <h2 className="heading-2 mb-4">Product-Specific Pricing</h2>
              <p className="body-text max-w-2xl mx-auto">
                Choose the product you need, then compare the exact plans published on that product page.
              </p>
            </div>

            <div className="space-y-14">
              {CORE_PRODUCTS.map((product) => (
                <div key={product.name}>
                  <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                      <div className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body mb-2">
                        {product.category}
                      </div>
                      <h3 className="heading-3">{product.name}</h3>
                      <p className="body-text max-w-2xl mt-2">{product.description}</p>
                    </div>
                    <Link href={product.href}>
                      <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-navy">
                        View Product
                      </Button>
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {product.pricing.map((plan) => {
                      const price = splitPrice(plan.price)
                      const popular = plan.features.includes('Most Popular')

                      return (
                        <div
                          key={`${product.name}-${plan.name}`}
                          className={`relative bg-white rounded-lg shadow-card p-6 border h-full ${
                            popular ? 'border-gold ring-2 ring-gold/20' : 'border-slate-200'
                          }`}
                        >
                          {popular && (
                            <span className="absolute -top-3 left-6 bg-gold text-navy px-3 py-1 rounded-full text-xs font-semibold">
                              Most Popular
                            </span>
                          )}
                          <h4 className="font-display font-semibold text-navy text-xl mb-2">{plan.name}</h4>
                          <p className="text-medium-grey text-sm mb-4">{plan.description}</p>
                          <div className="mb-5">
                            <span className="text-3xl font-display font-bold text-gold">{price.amount}</span>
                            {price.period && <span className="text-medium-grey text-sm">{price.period}</span>}
                          </div>
                          <ul className="space-y-2">
                            {plan.features.filter((feature) => feature !== 'Most Popular').map((feature) => (
                              <li key={feature} className="flex items-start text-sm text-dark-grey">
                                <Check size={14} className="text-green-500 mr-2 mt-1 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ProcessSection
          title="Get Started in 5 Simple Steps"
          description="From product selection to launch, pricing and onboarding stay straightforward."
          steps={PRICING_DATA.process}
          centerHeader={true}
        />

        <TargetsSection
          title="Built for These Teams"
          targets={PRICING_DATA.targets}
        />

        <CTASection
          title="Ready to Choose a Plan?"
          tagline="Focused Products. Clear Pricing."
          description="Book a demo and we will confirm the best EduMyles, EduRyde, or MylesCRM plan for your team."
          primaryCta={{ text: "Book a Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales Team", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
