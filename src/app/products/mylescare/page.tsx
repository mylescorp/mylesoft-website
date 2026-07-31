import { Layout } from '@/components/layout/Layout'
import { MYLESCARE_DATA } from '@/lib/constants/products'
import { ProductHero } from '@/components/ui/ProductHero'
import { StatsSection } from '@/components/ui/StatsSection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { PricingSection } from '@/components/ui/PricingSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'

export const metadata = {
  title: 'MylesCare, Healthcare Management Software Kenya | MylesCorp',
  description: 'MylesCare helps hospitals and clinics in Kenya manage patient records, appointments, billing, pharmacy, and reporting workflows.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylescare',
  },
}

export default function MylesCarePage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        {/* Hero */}
        <ProductHero {...MYLESCARE_DATA.hero} productName="MylesCare" />

        {/* Stats */}
        <StatsSection stats={MYLESCARE_DATA.overview.stats} />

        {/* Overview */}
        <OverviewSection
          title="MylesCare"
          description={MYLESCARE_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "3 min", label: "Patient registration" },
            { number: "SHA", label: "Claims integrated" },
            { number: "M-Pesa", label: "Payments live" },
            { number: "Lab", label: "Results digitised" },
          ]}
        />

        {/* Features */}
        <FeaturesSection
          title="Complete Healthcare Platform"
          description="8 integrated modules covering every aspect of healthcare facility management."
          features={MYLESCARE_DATA.features.map(f => ({
            ...f,
            icon: f.icon === 'file-text' ? '📋' :
                   f.icon === 'calendar' ? '📅' :
                   f.icon === 'credit-card' ? '💳' :
                   f.icon === 'pill' ? '💊' :
                   f.icon === 'microscope' ? '🔬' :
                   f.icon === 'shield' ? '🏥' :
                   f.icon === 'bed' ? '🛏️' :
                   f.icon === 'bar-chart' ? '📊' : '📊'
          }))}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection
          title="Go Digital in 5 Steps"
          description="From setup to managing patients digitally in 5 simple steps."
          steps={MYLESCARE_DATA.process}
          centerHeader={true}
        />

        {/* Pricing */}
        <PricingSection
          title="Flexible Healthcare Plans"
          description="Plans designed for healthcare facilities of all sizes."
          plans={MYLESCARE_DATA.pricing.map(p => ({
            ...p,
            price: p.price.split('/')[0],
            period: p.price.split('/')[1] || 'per month',
            featured: p.features.includes('Most Popular')
          }))}
          centerHeader={true}
        />

        {/* Testimonials */}
        <TestimonialsSection
          title="Trusted by Healthcare Facilities"
          testimonials={MYLESCARE_DATA.testimonials}
          centerHeader={true}
        />

        {/* CTA */}
        <CTASection
          title="Modernise Your Healthcare Facility"
          tagline="Transforming Industries, Empowering Generations."
          description={`Join ${MYLESCARE_DATA.overview.stats[0].number} healthcare facilities across East Africa using MylesCare to deliver better patient care.`}
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "WhatsApp Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
