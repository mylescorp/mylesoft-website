import { Layout } from '@/components/layout/Layout'
import { MYLESNET_DATA } from '@/lib/constants/products'
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
  title: 'MylesNet, Network Operations Platform Kenya | MylesCorp',
  description: 'MylesNet helps internet service providers and connectivity teams manage subscribers, service plans, support workflows, billing visibility, and field operations.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products/mylesnet',
  },
}

export default function MylesNetPage() {
  return (
    <Layout>
      <div className="min-h-screen" style={{ fontFamily: 'Plus Jakarta Sans, sans-serif' }}>
        <ProductHero {...MYLESNET_DATA.hero} productName="MylesNet" />

        <StatsSection stats={MYLESNET_DATA.overview.stats} />

        <OverviewSection
          title="MylesNet"
          description={MYLESNET_DATA.overview.description.split('\n\n')}
          stats={[
            { number: "Subscriber", label: "Account visibility" },
            { number: "Support", label: "Ticket workflows" },
            { number: "Field", label: "Installation tracking" },
            { number: "Network", label: "Operations view" },
          ]}
        />

        <FeaturesSection
          title="Network Operations in One Place"
          description="Subscriber records, service plans, billing visibility, support workflows, and field operations for connectivity teams."
          features={MYLESNET_DATA.features.map((feature) => ({
            ...feature,
            icon: feature.icon,
          }))}
          centerHeader={true}
        />

        <ProcessSection
          title="Launch MylesNet in 5 Steps"
          description="From operations mapping to subscriber visibility and support workflow rollout."
          steps={MYLESNET_DATA.process}
          centerHeader={true}
        />

        <TargetsSection
          title="Built for Connectivity Operators"
          targets={MYLESNET_DATA.targets}
        />

        <PricingSection
          title="Plans Scoped to Your Network"
          description="MylesNet pricing is confirmed after reviewing subscriber count, service areas, support needs, field operations, and integration requirements."
          plans={MYLESNET_DATA.pricing.map((plan) => ({
            ...plan,
            price: plan.price,
            period: 'pricing',
            featured: plan.name === 'Network Growth',
          }))}
          centerHeader={true}
        />

        <TestimonialsSection
          title="Built for Network Teams"
          testimonials={MYLESNET_DATA.testimonials}
          centerHeader={true}
        />

        <CTASection
          title="Ready to Organise Your Network Operations?"
          tagline="Transforming Industries, Empowering Generations."
          description="Talk to MylesCorp about subscriber records, service plans, billing visibility, support workflows, and field operations for your connectivity team."
          primaryCta={{ text: "Book Free Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Sales", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
