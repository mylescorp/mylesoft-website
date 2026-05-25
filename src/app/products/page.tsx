import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ProductCard } from '@/components/ui/ProductCard'
import { StaggerReveal } from '@/components/ui/ScrollReveal'
import { CORE_PRODUCTS } from '@/lib/constants/products'

export const metadata = {
  title: 'Products, EduMyles EduRyde MylesCare MylesCRM AgriMyles and MylesProp | MylesCorp',
  description: 'Explore the MylesCorp product portfolio: EduMyles for school management, EduRyde for school transport, MylesCare for healthcare, MylesCRM for business customer management, AgriMyles for agricultural technology, and MylesProp for real estate management.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/products',
  },
}

const stats = [
  { value: '6', label: 'Active products' },
  { value: '5', label: 'Core markets' },
  { value: '24/7', label: 'Support coverage' },
]

export default function ProductsPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-navy">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-28">
          <div>
            <div className="mb-6 h-1 w-20 bg-gold" />
            <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
              Product Portfolio
            </p>
            <h1 className="font-display text-[clamp(2.7rem,6vw,5.5rem)] font-bold leading-[0.95] text-white">
              Six focused products for serious growth.
            </h1>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-light-blue">
              EduMyles, EduRyde, MylesCare, MylesCRM, AgriMyles, and MylesProp bring MylesCorp&apos;s operating-system approach into the workflows schools, healthcare facilities, businesses, agricultural teams, and real estate teams use every day.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link href="/book-demo">
                <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold-light sm:w-auto">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-navy sm:w-auto">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {stats.map((stat) => (
              <div key={stat.label} className="border-l-4 border-gold bg-white/8 px-5 py-5">
                <div className="text-[2rem] font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-[13px] font-semibold uppercase tracking-[0.16em] text-light-blue">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="mb-12 max-w-3xl">
            <div className="mb-5 h-1 w-16 bg-gold" />
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-medium-grey">
              Current Portfolio
            </p>
            <h2 className="font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-tight text-navy">
              Built around education, transport, healthcare, agriculture, real estate, and customer operations.
            </h2>
            <p className="mt-5 text-[1rem] leading-8 text-dark-grey">
              Each product has its own page with details, capabilities, and a direct path to start a conversation.
            </p>
          </div>

          <StaggerReveal className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CORE_PRODUCTS.map((product) => (
              <ProductCard key={product.name} {...product} />
            ))}
          </StaggerReveal>
        </div>
      </section>

      <section className="bg-ice py-18 md:py-20">
        <div className="mx-auto max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-8 border-t-2 border-gold bg-navy px-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-10">
            <div>
              <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
                Need a guided walkthrough?
              </p>
              <h2 className="mt-3 font-display text-[2rem] font-bold text-white">
                See the right product in context.
              </h2>
              <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-light-blue">
                Tell us your workflow and we will show how the right MylesCorp product fits your team.
              </p>
            </div>
            <Link href="/book-demo">
              <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold-light md:w-auto">
                Schedule Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}
