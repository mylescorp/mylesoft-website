import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { Download, ArrowRight, CheckCircle2, Building2, HeartPulse, Sprout, BriefcaseBusiness } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'MylesCorp Technologies Brochure',
  description: 'Explore the MylesCorp digital brochure covering our AI-powered products, services, impact, and contact information.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/brochure',
  },
}

const brochureHighlights = [
  {
    title: 'Education',
    icon: Building2,
    body: 'EduMyles and EduRyde help schools manage academics, transport, communication, and reporting with less admin overhead.',
  },
  {
    title: 'Healthcare',
    icon: HeartPulse,
    body: 'MylesCare streamlines patient records, appointments, billing, and healthcare operations with practical AI support.',
  },
  {
    title: 'Agriculture',
    icon: Sprout,
    body: 'AgriMyles gives farmers and agribusinesses better visibility into crops, weather, and market decisions.',
  },
  {
    title: 'Business',
    icon: BriefcaseBusiness,
    body: 'MylesCRM and our wider product suite help East African businesses improve sales, operations, and growth.',
  },
]

const brochureSections = [
  'Company story, mission, and market focus',
  'Core products across education, healthcare, agriculture, and business',
  'Service capabilities including software development, hosting, and consulting',
  'Regional footprint, impact metrics, and support model',
  'Booking and contact information for demos and partnerships',
]

export default function BrochurePage() {
  return (
    <Layout>
      <div className="min-h-screen">
        <section className="relative overflow-hidden bg-navy-deep py-24 md:py-28">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                Company Brochure
              </span>
              <div className="h-0.5 w-8 bg-gold" />
            </div>

            <h1 className="mx-auto mb-6 max-w-5xl font-display text-[2.6rem] font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-[3.2rem] md:text-[4rem] lg:text-[4.7rem]">
              Digital Brochure for
              <span className="block text-gold">MylesCorp Technologies</span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl font-body text-[1rem] leading-8 text-light-blue sm:text-[1.05rem] md:text-[1.14rem]">
              A clean overview of our products, services, impact, and company profile for prospects, partners, and institutions across East Africa.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/contact">
                <Button size="lg" className="min-w-[210px]">
                  Book a Demo
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="min-w-[210px] border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-navy">
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-card">
                <h2 className="mb-4 font-display text-4xl font-bold text-navy md:text-5xl">
                  What&apos;s Inside
                </h2>
                <p className="mb-8 max-w-2xl font-body text-lg leading-8 text-medium-grey">
                  This brochure page replaces the missing static brochure asset with a reliable in-app overview you can share right away.
                </p>

                <div className="space-y-4">
                  {brochureSections.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-light-grey bg-off-white px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="font-body text-[1rem] leading-7 text-dark-grey">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[1.8rem] border border-gold/20 bg-navy-deep p-8 shadow-card">
                <div className="mb-6 inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-xs font-bold uppercase tracking-[1.8px] text-gold">
                  Use Cases
                </div>
                <div className="space-y-5">
                  {brochureHighlights.map((item) => {
                    const Icon = item.icon
                    return (
                      <div key={item.title} className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-5">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                          <Icon className="h-6 w-6 text-gold" />
                        </div>
                        <h3 className="mb-2 font-display text-2xl font-bold text-white">{item.title}</h3>
                        <p className="font-body text-[0.98rem] leading-7 text-light-blue">{item.body}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-[1.9rem] border border-slate-200 bg-white p-8 shadow-card md:p-10">
              <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-3xl">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="h-0.5 w-8 bg-gold" />
                    <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                      Brochure Access
                    </span>
                  </div>
                  <h2 className="mb-4 font-display text-4xl font-bold text-navy md:text-5xl">
                    Need a Downloadable PDF Version?
                  </h2>
                  <p className="font-body text-lg leading-8 text-medium-grey">
                    The old static brochure file is not currently present in the repository. If you provide the final PDF or HTML brochure asset, I can wire in a proper download button and branded viewer immediately.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link href="/contact">
                    <Button size="lg" className="min-w-[210px]">
                      Request Brochure
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-w-[210px] items-center justify-center rounded-xl border border-navy/15 bg-slate-100 px-6 py-4 font-body text-sm font-semibold text-navy/45"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    PDF Pending Asset
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
