import Link from 'next/link'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import type { ServicePricingGroup } from '@/lib/constants/service-pricing'

interface ServicePricingSectionProps {
  service: ServicePricingGroup
  compact?: boolean
}

export function ServicePricingSection({ service, compact = false }: ServicePricingSectionProps) {
  return (
    <section className={compact ? 'py-16 bg-off-white' : 'py-20 bg-off-white'}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <div className="mb-4 text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
            KSh Pricing
          </div>
          <h2 className="font-display text-3xl font-bold text-navy md:text-4xl">
            {service.name} Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-[1rem] leading-8 text-medium-grey">
            {service.summary}
          </p>
        </div>

        <div className={`grid gap-6 ${service.plans.length === 4 ? 'lg:grid-cols-4 md:grid-cols-2' : 'lg:grid-cols-3 md:grid-cols-3'}`}>
          {service.plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 ${
                plan.featured ? 'border-gold ring-2 ring-gold/20' : 'border-slate-200'
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-navy">
                  Popular
                </div>
              )}

              <h3 className="font-display text-2xl font-bold text-navy">{plan.name}</h3>
              <p className="mt-3 min-h-[72px] font-body text-sm leading-6 text-medium-grey">
                {plan.description}
              </p>

              <div className="my-6 border-y border-slate-200 py-5">
                <span className="font-display text-3xl font-bold text-gold">{plan.price}</span>
                {plan.period && (
                  <span className="ml-1 font-body text-sm font-semibold text-medium-grey">{plan.period}</span>
                )}
              </div>

              <ul className="mb-6 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 font-body text-sm leading-6 text-dark-grey">
                    <Check className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link href="/book-demo" className="mt-auto">
                <Button className="w-full" variant={plan.featured ? 'primary' : 'secondary'}>
                  Discuss This Plan
                </Button>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
