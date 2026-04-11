import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ArrowRight, ExternalLink, CheckCircle2, GraduationCap, HeartPulse, Sprout, BriefcaseBusiness, BusFront, Bot, ShieldCheck, Layers3, MessageSquareQuote } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio, MylesCorp Technologies',
  description:
    'Explore MylesCorp Technologies portfolio of AI-powered digital products and platforms across education, healthcare, agriculture, business, transport, and automation.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/portforlio',
  },
}

const featuredProjects = [
  {
    name: 'EduMyles',
    category: 'Education SaaS',
    icon: GraduationCap,
    href: 'https://edumyles.vercel.app',
    external: true,
    summary:
      'A school management platform built for CBC-ready operations, student records, reporting, parent communication, and day-to-day school administration.',
    highlights: ['Live product experience', 'School operations workflow', 'Parent and learner visibility'],
    impact: 'Built to help schools digitize administration and improve communication at scale.',
  },
  {
    name: 'MylesCare',
    category: 'Healthcare Platform',
    icon: HeartPulse,
    href: '/products/mylescare',
    external: false,
    summary:
      'A healthcare operations platform focused on patient records, appointments, billing, and modern clinic workflow management.',
    highlights: ['Patient management', 'Appointment flow', 'Billing support'],
    impact: 'Designed to reduce operational delays and improve patient-facing service delivery.',
  },
  {
    name: 'AgriMyles',
    category: 'AgriTech Product',
    icon: Sprout,
    href: '/products/agrimyles',
    external: false,
    summary:
      'An agricultural intelligence platform for crop monitoring, weather awareness, and better planning for modern farms and agribusiness teams.',
    highlights: ['Crop intelligence', 'Weather alerts', 'Market insight support'],
    impact: 'Helps agricultural teams make faster and better operational decisions.',
  },
  {
    name: 'MylesCRM',
    category: 'Business Operations',
    icon: BriefcaseBusiness,
    href: '/products/mylescrm',
    external: false,
    summary:
      'A business management and CRM platform for sales teams, invoicing, inventory visibility, and commercial operations in one place.',
    highlights: ['CRM workflows', 'Inventory visibility', 'Commercial reporting'],
    impact: 'Supports SMEs and growth-stage businesses that need one operational system.',
  },
  {
    name: 'EduRyde',
    category: 'Transport Management',
    icon: BusFront,
    href: '/products/eduryde',
    external: false,
    summary:
      'A school transport coordination platform that helps institutions manage routes, learners, vehicles, and parent communication more safely.',
    highlights: ['Route coordination', 'Transport visibility', 'Parent notifications'],
    impact: 'Extends digital school operations into transport and logistics management.',
  },
  {
    name: 'Myles AI',
    category: 'AI Automation',
    icon: Bot,
    href: '/products/myles-ai',
    external: false,
    summary:
      'A modern AI solution layer for organisations looking to automate workflows, unlock insight, and add intelligence to everyday operations.',
    highlights: ['Workflow automation', 'AI-assisted decisions', 'Scalable implementation'],
    impact: 'Gives organisations a practical entry point into applied AI transformation.',
  },
]

const engagementPoints = [
  'Product strategy and platform architecture',
  'Custom software development and rollout support',
  'Sector-specific UX for African markets',
  'Operational systems for schools, clinics, farms, and SMEs',
  'Lead-focused digital experiences that convert visitors into opportunities',
]

const proofPoints = [
  { value: '6+', label: 'Featured products' },
  { value: '4', label: 'Core sectors' },
  { value: 'East Africa', label: 'Primary market' },
  { value: 'B2B + B2G', label: 'Client focus' },
]

const deliveryAdvantages = [
  {
    title: 'Designed for Real Operations',
    icon: Layers3,
    text: 'We focus on products that support real workflows, not just attractive demos. That means clearer value for buyers and better usability for teams.',
  },
  {
    title: 'Trust-Driven Execution',
    icon: ShieldCheck,
    text: 'From structure and messaging to interface quality and consistency, we build digital experiences that help organisations look credible and ready to scale.',
  },
  {
    title: 'Conversion-Aware Product Thinking',
    icon: MessageSquareQuote,
    text: 'We shape experiences with client acquisition in mind, helping products communicate outcomes, confidence, and next steps clearly.',
  },
]

const engagementModels = [
  'Product design and strategy for new platforms',
  'Website and web-app delivery for lead generation',
  'SaaS product interfaces for sector-focused operations',
  'Platform refreshes for stronger brand credibility',
  'Implementation support and rollout guidance',
]

const portfolioTestimonials = [
  {
    quote: 'MylesCorp combines strong product thinking with execution discipline. Their platforms feel built for real institutions, not generic templates.',
    author: 'Education Sector Prospect',
    role: 'Procurement and Innovation Review',
  },
  {
    quote: 'The work communicates confidence quickly. That matters when you are selling software to organisations that need trust before they need features.',
    author: 'B2B Growth Stakeholder',
    role: 'Commercial Evaluation Perspective',
  },
]

export default function PortforlioPage() {
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

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)]">
              <div className="max-w-3xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-0.5 w-10 bg-gold" />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[2.8px] text-gold">
                    Portfolio
                  </span>
                </div>

                <h1 className="max-w-4xl font-display text-[2.55rem] font-bold leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.05rem] md:text-[3.65rem] lg:text-[4.25rem]">
                  Selected digital products for organisations that need to look credible, operate clearly, and scale with confidence.
                </h1>

                <p className="mt-6 max-w-2xl font-body text-[1rem] leading-8 text-light-blue sm:text-[1.05rem] md:text-[1.1rem]">
                  Explore MylesCorp work across education, healthcare, agriculture, transport, business systems, and AI automation. These platforms are built to support real operations while strengthening trust, positioning, and buyer confidence.
                </p>

                <div className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold">Focus</div>
                    <div className="mt-2 text-sm leading-6 text-white/88">Sector-specific SaaS and digital platforms</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold">Market</div>
                    <div className="mt-2 text-sm leading-6 text-white/88">East Africa and institutional buyers</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold">Value</div>
                    <div className="mt-2 text-sm leading-6 text-white/88">Operational clarity and lead readiness</div>
                  </div>
                </div>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <Link href="/book-demo">
                    <Button size="lg" className="min-w-[220px]">
                      Book a Consultation
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="outline" size="lg" className="min-w-[220px] border-gold/40 text-gold hover:border-gold hover:bg-gold hover:text-navy">
                      Discuss Your Project
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.9rem] border border-white/10 bg-gradient-to-br from-white/[0.08] via-white/[0.05] to-white/[0.02] p-6 shadow-soft backdrop-blur-sm">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                      Featured Platform
                    </div>
                    <div className="mt-2 font-display text-[2rem] font-bold leading-none text-white">
                      EduMyles
                    </div>
                  </div>
                  <a
                    href="https://edumyles.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-gold transition-colors duration-200 hover:border-gold hover:bg-gold hover:text-navy"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-navy/70 p-5">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[2px] text-gold">Education SaaS</div>
                      <div className="mt-1 text-sm text-light-blue">CBC-ready school operations platform</div>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[1.5px] text-emerald-300">
                      Live
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
                      <div className="font-display text-2xl font-bold text-gold">School</div>
                      <div className="mt-1 text-sm leading-6 text-light-blue">Administration and records</div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
                      <div className="font-display text-2xl font-bold text-gold">Parent</div>
                      <div className="mt-1 text-sm leading-6 text-light-blue">Communication and visibility</div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
                      <div className="font-display text-2xl font-bold text-gold">CBC</div>
                      <div className="mt-1 text-sm leading-6 text-light-blue">Assessment and reporting support</div>
                    </div>
                    <div className="rounded-2xl border border-white/8 bg-white/[0.04] px-4 py-4">
                      <div className="font-display text-2xl font-bold text-gold">Ready</div>
                      <div className="mt-1 text-sm leading-6 text-light-blue">Live product presentation</div>
                    </div>
                  </div>

                  <div className="mt-5 border-t border-white/10 pt-4">
                    <div className="text-sm leading-7 text-white/85">
                      A strong example of how MylesCorp builds sector-specific platforms that feel commercially credible while supporting everyday institutional workflows.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-14 grid max-w-6xl grid-cols-2 gap-4 md:grid-cols-4">
              {proofPoints.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[1.3rem] border border-white/10 bg-white/[0.06] px-5 py-5 shadow-soft backdrop-blur-sm"
                >
                  <div className="font-display text-2xl font-bold text-gold md:text-3xl">{item.value}</div>
                  <div className="mt-2 font-body text-sm leading-6 text-light-blue">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-gold" />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                    Featured Projects
                  </span>
                </div>
                <h2 className="font-display text-4xl font-bold text-navy md:text-5xl">
                  Platforms Designed to Show Capability and Drive Confidence
                </h2>
              </div>
              <p className="max-w-2xl font-body text-lg leading-8 text-medium-grey">
                These projects demonstrate the type of product quality, sector understanding, and business-facing execution clients can expect from MylesCorp.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
              {featuredProjects.map((project) => {
                const ProjectIcon = project.icon
                const card = (
                  <article className="group flex h-full flex-col rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/35">
                    <div className="mb-6 flex items-start justify-between gap-4">
                      <div>
                        <div className="mb-4 inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] text-gold">
                          {project.category}
                        </div>
                        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                          <ProjectIcon className="h-7 w-7 text-gold" />
                        </div>
                        <h3 className="font-display text-[1.9rem] font-bold leading-[1.02] text-navy transition-colors duration-200 group-hover:text-gold">
                          {project.name}
                        </h3>
                      </div>

                      <div className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[1.4px] text-emerald-700">
                        Live
                      </div>
                    </div>

                    <p className="font-body text-[1rem] leading-8 text-medium-grey">
                      {project.summary}
                    </p>

                    <div className="my-6 space-y-3 border-t border-slate-200 pt-5">
                      {project.highlights.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                          <span className="font-body text-[0.97rem] leading-7 text-dark-grey">{item}</span>
                        </div>
                      ))}
                    </div>

                    <p className="mb-6 font-body text-[0.96rem] italic leading-7 text-medium-grey">
                      {project.impact}
                    </p>

                    <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4">
                      <span className="font-body text-sm font-semibold text-gold">
                        View project
                      </span>
                      <div className="flex items-center gap-2 text-navy transition-transform duration-200 group-hover:translate-x-1">
                        {project.external ? (
                          <ExternalLink className="h-4 w-4" />
                        ) : (
                          <ArrowRight className="h-4 w-4" />
                        )}
                      </div>
                    </div>
                  </article>
                )

                return project.external ? (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    {card}
                  </a>
                ) : (
                  <Link key={project.name} href={project.href} className="block h-full">
                    {card}
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
              <div className="rounded-[1.8rem] border border-gold/20 bg-navy-deep p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-gold" />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                    What We Build
                  </span>
                </div>
                <h2 className="mb-5 font-display text-4xl font-bold text-white md:text-5xl">
                  Product Thinking with Strong Commercial Execution
                </h2>
                <p className="font-body text-lg leading-8 text-light-blue">
                  We do more than design interfaces. We help organisations launch software that communicates value clearly, supports operations well, and creates trust with decision-makers.
                </p>
              </div>

              <div className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-card">
                <div className="grid gap-4">
                  {engagementPoints.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-light-grey bg-off-white px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="font-body text-[1rem] leading-7 text-dark-grey">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  Why Clients Engage Us
                </span>
                <div className="h-0.5 w-8 bg-gold" />
              </div>
              <h2 className="font-display text-4xl font-bold text-navy md:text-5xl">
                Clear Delivery, Stronger Trust, Better Commercial Fit
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {deliveryAdvantages.map((item) => {
                const Icon = item.icon
                return (
                  <article
                    key={item.title}
                    className="rounded-[1.6rem] border border-slate-200 bg-white p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/30"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                      <Icon className="h-7 w-7 text-gold" />
                    </div>
                    <h3 className="mb-3 font-display text-2xl font-bold text-navy">{item.title}</h3>
                    <p className="font-body text-[1rem] leading-8 text-medium-grey">{item.text}</p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="rounded-[1.8rem] border border-slate-200 bg-white p-8 shadow-card">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-0.5 w-8 bg-gold" />
                  <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                    Engagement Models
                  </span>
                </div>
                <h2 className="mb-5 font-display text-4xl font-bold text-navy md:text-5xl">
                  Ways We Can Work Together
                </h2>
                <div className="space-y-4">
                  {engagementModels.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-light-grey bg-off-white px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="font-body text-[1rem] leading-7 text-dark-grey">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                {portfolioTestimonials.map((item) => (
                  <article
                    key={item.author}
                    className="rounded-[1.7rem] border border-gold/20 bg-navy-deep p-7 shadow-card"
                  >
                    <div className="mb-4 inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] text-gold">
                      Perspective
                    </div>
                    <p className="mb-5 font-body text-[1rem] italic leading-8 text-light-blue">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="border-t border-white/10 pt-4">
                      <div className="font-display text-xl font-bold text-white">{item.author}</div>
                      <div className="mt-1 font-body text-sm leading-6 text-muted">{item.role}</div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[1.9rem] border border-slate-200 bg-white p-8 shadow-card md:p-10">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  Let&apos;s Build
                </span>
                <div className="h-0.5 w-8 bg-gold" />
              </div>
              <h2 className="mb-4 font-display text-4xl font-bold text-navy md:text-5xl">
                Want a Product Like This for Your Organisation?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl font-body text-lg leading-8 text-medium-grey">
                If you need a software platform, lead-generation website, or digital product tailored to your sector, we can help shape the strategy, design, and build from concept to launch.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/book-demo">
                  <Button size="lg" className="min-w-[220px]">
                    Book a Strategy Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="min-w-[220px] border-navy/20 text-navy hover:border-gold hover:text-gold">
                    Request a Proposal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
