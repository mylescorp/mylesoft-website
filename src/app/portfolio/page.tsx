import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BriefcaseBusiness,
  BusFront,
  CheckCircle2,
  ClipboardCheck,
  ExternalLink,
  GraduationCap,
  HeartPulse,
  Layers3,
  MapPin,
  MonitorSmartphone,
  ShieldCheck,
  Sprout,
  UsersRound,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Portfolio | MylesCorp Technologies',
  description:
    'Explore live MylesCorp Technologies work including EduMyles, EduRyde, SIFA School Siaya, and sector-focused digital platforms for education, transport, healthcare, agriculture, business, and AI automation.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/portfolio',
  },
  openGraph: {
    title: 'Portfolio | MylesCorp Technologies',
    description:
      'Live websites, SaaS products, and institution-ready digital platforms built by MylesCorp Technologies.',
    url: 'https://www.mylescorptech.com/portfolio',
    siteName: 'MylesCorp Technologies',
    type: 'website',
  },
}

type PortfolioProject = {
  name: string
  category: string
  sector: string
  href: string
  icon: LucideIcon
  summary: string
  evidence: string[]
  outcomes: string[]
  status: string
  previewSrc: string
  previewAlt: string
}

const liveProjects: PortfolioProject[] = [
  {
    name: 'EduMyles',
    category: 'School Management SaaS',
    sector: 'Education Technology',
    href: 'https://edumyles.com/',
    icon: GraduationCap,
    status: 'Live product',
    previewSrc: '/portfolio/edumyles-home.png',
    previewAlt: 'EduMyles homepage preview',
    summary:
      'An all-in-one school management system built for African schools, covering admissions, fees, attendance, exams, parent communication, and school operations from one platform.',
    evidence: [
      'M-Pesa fee collection and automated receipts',
      'CBC, ACE, IGCSE, and 8-4-4 curriculum support',
      'Parent, teacher, student, and administrator portals',
    ],
    outcomes: [
      'Built for East African school operations',
      'Supports multi-campus school groups',
      'Positions EduMyles as a scalable education SaaS brand',
    ],
  },
  {
    name: 'EduRyde',
    category: 'School Transport SaaS',
    sector: 'Transport and Student Safety',
    href: 'https://eduryde.mylescorptech.com/',
    icon: BusFront,
    status: 'Live product',
    previewSrc: '/portfolio/eduryde-home.png',
    previewAlt: 'EduRyde homepage preview',
    summary:
      'A real-time school transport management platform for Kenyan schools and transport operators, combining GPS tracking, digital boarding records, parent notifications, and M-Pesa collection.',
    evidence: [
      'Live vehicle locations with frequent GPS updates',
      'Digital boarding attendance and parent alerts',
      'Route, fleet, fee, and transport operator workflows',
    ],
    outcomes: [
      'Reduces guesswork for school transport teams',
      'Improves parent visibility during trips',
      'Adds payment and reporting discipline to transport operations',
    ],
  },
  {
    name: 'SIFA School Siaya',
    category: 'Institution Website',
    sector: 'Early Childhood Education',
    href: 'https://sifaschool.mylescorptech.com/',
    icon: UsersRound,
    status: 'Live website',
    previewSrc: '/portfolio/sifa-school-home.png',
    previewAlt: 'SIFA School Siaya homepage preview',
    summary:
      'A public school website for SIFA School Siaya, presenting ECDE, kindergarten, and early primary admissions with programs, facilities, school story, contact paths, and parent-facing enrollment flow.',
    evidence: [
      'Admissions, program, gallery, FAQ, and contact pages',
      'ECDE, kindergarten, and primary classes inquiry flow',
      'Facilities messaging for classrooms, swimming, creative arts, and safe play',
    ],
    outcomes: [
      'Makes the school easier for parents to evaluate',
      'Supports direct enrollment inquiries',
      'Turns a local institution into a credible digital brand',
    ],
  },
]

const capabilityProjects = [
  {
    name: 'MylesCare',
    category: 'Healthcare Platform',
    icon: HeartPulse,
    href: '/products/mylescare',
    summary:
      'A healthcare operations platform for patient records, appointments, billing, and modern clinic workflow management.',
  },
  {
    name: 'AgriMyles',
    category: 'AgriTech Product',
    icon: Sprout,
    href: '/products/agrimyles',
    summary:
      'Agricultural intelligence for crop monitoring, weather awareness, market insight, and better operational planning.',
  },
  {
    name: 'MylesCRM',
    category: 'Business Operations',
    icon: BriefcaseBusiness,
    href: '/products/mylescrm',
    summary:
      'CRM, invoicing, inventory visibility, sales workflows, and commercial reporting for growing businesses.',
  },
  {
    name: 'Myles AI',
    category: 'AI Automation',
    icon: Bot,
    href: '/products/myles-ai',
    summary:
      'Applied AI workflows that help organisations automate work, unlock insight, and add intelligence to daily operations.',
  },
]

const proofPoints = [
  { value: '3', label: 'Researched live properties' },
  { value: '7+', label: 'Portfolio and product assets' },
  { value: 'Education-first', label: 'Current strongest vertical' },
  { value: 'East Africa', label: 'Primary market focus' },
]

const processPoints = [
  {
    title: 'Research-Led Positioning',
    icon: ClipboardCheck,
    text: 'Each project is shaped around the buyer, parent, operator, or institution that needs to understand value quickly.',
  },
  {
    title: 'Production-Ready Interfaces',
    icon: MonitorSmartphone,
    text: 'Pages are structured for responsive use, strong information scent, clear CTAs, and credible product presentation.',
  },
  {
    title: 'Operational Depth',
    icon: Layers3,
    text: 'The work goes beyond visuals into workflows such as admissions, fee collection, reporting, route visibility, and communication.',
  },
  {
    title: 'Trust and Conversion',
    icon: ShieldCheck,
    text: 'Each experience is designed to help decision-makers move from interest to inquiry with confidence.',
  },
]

const engagementModels = [
  'SaaS product strategy, UI, and public launch websites',
  'School, clinic, business, and public-sector platform design',
  'Institutional websites with admissions, inquiry, and credibility flows',
  'Custom web applications for operational teams',
  'Product refreshes for stronger positioning and buyer trust',
]

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      <div className="h-0.5 w-8 bg-gold" />
      <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
        {children}
      </span>
    </div>
  )
}

export default function PortfolioPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-navy-deep py-24 md:py-28">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(199,150,57,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.05) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(360px,0.97fr)]">
              <div>
                <SectionLabel>Portfolio</SectionLabel>
                <h1 className="max-w-5xl font-display text-[2.5rem] font-bold leading-[1.02] text-white sm:text-[3.1rem] md:text-[3.8rem] lg:text-[4.35rem]">
                  Live digital products and institution-ready platforms built for trust, clarity, and growth.
                </h1>
                <p className="mt-6 max-w-2xl font-body text-[1rem] leading-8 text-light-blue sm:text-[1.08rem]">
                  This portfolio highlights researched live work across school management, school transport, and education websites, alongside the wider MylesCorp product ecosystem.
                </p>

                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <Link href="#live-work">
                    <Button size="lg" className="min-w-[220px]" icon={<ArrowRight />} iconPosition="right">
                      View Live Work
                    </Button>
                  </Link>
                  <Link href="/book-demo">
                    <Button
                      variant="outline"
                      size="lg"
                      className="min-w-[220px] border-gold/45 text-gold hover:border-gold hover:bg-gold hover:text-navy"
                    >
                      Discuss a Project
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="rounded-[1.7rem] border border-white/10 bg-white/[0.06] p-6 shadow-soft backdrop-blur-sm">
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                      Research Summary
                    </div>
                    <h2 className="mt-2 font-display text-3xl font-bold leading-tight text-white">
                      Three live education-focused properties now anchor the portfolio.
                    </h2>
                  </div>
                  <BadgeCheck className="h-8 w-8 flex-shrink-0 text-gold" />
                </div>

                <div className="grid gap-3">
                  {liveProjects.map((project) => (
                    <a
                      key={project.name}
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group rounded-2xl border border-white/10 bg-navy/60 p-4 transition-colors duration-200 hover:border-gold/45"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-display text-xl font-bold text-white group-hover:text-gold">
                            {project.name}
                          </div>
                          <div className="mt-1 font-body text-sm leading-6 text-light-blue">
                            {project.category}
                          </div>
                        </div>
                        <ExternalLink className="h-4 w-4 flex-shrink-0 text-gold" />
                      </div>
                    </a>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  {proofPoints.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-4">
                      <div className="font-display text-2xl font-bold text-gold">{item.value}</div>
                      <div className="mt-1 font-body text-sm leading-6 text-light-blue">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="live-work" className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div>
                <SectionLabel>Live Work</SectionLabel>
                <h2 className="font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                  Verified live projects, added as requested.
                </h2>
              </div>
              <p className="font-body text-lg leading-8 text-medium-grey">
                Each entry links to the live property and focuses on what the site or product actually presents: product capabilities, institutional value, and buyer or parent actions.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
              {liveProjects.map((project) => {
                const Icon = project.icon
                return (
                  <article
                    key={project.name}
                    className="group flex h-full flex-col overflow-hidden rounded-[1.4rem] border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/35"
                  >
                    <div className="border-b border-slate-200 bg-[#0b1526] p-3">
                      <div className="mb-3 flex items-center gap-2">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                        <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
                        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                        <span className="ml-2 truncate rounded-md border border-white/10 bg-white/8 px-3 py-1 font-body text-[11px] text-light-blue">
                          {project.href.replace('https://', '').replace(/\/$/, '')}
                        </span>
                      </div>
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block overflow-hidden rounded-xl border border-white/10 bg-white"
                        aria-label={`Open live homepage for ${project.name}`}
                      >
                        <Image
                          src={project.previewSrc}
                          alt={project.previewAlt}
                          width={1440}
                          height={950}
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                          sizes="(min-width: 1024px) 33vw, 100vw"
                        />
                      </a>
                    </div>

                    <div className="flex flex-1 flex-col p-7">
                      <div className="mb-6 flex items-start justify-between gap-4">
                        <div>
                          <div className="mb-4 inline-flex rounded-full border border-gold/20 bg-gold/10 px-3 py-1 text-xs font-semibold uppercase tracking-[1.4px] text-gold">
                            {project.status}
                          </div>
                          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                            <Icon className="h-7 w-7 text-gold" />
                          </div>
                          <h3 className="font-display text-[2rem] font-bold leading-tight text-navy">
                            {project.name}
                          </h3>
                          <div className="mt-2 font-body text-sm font-semibold uppercase tracking-[1.2px] text-medium-grey">
                            {project.sector}
                          </div>
                        </div>

                        <a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Open ${project.name}`}
                          className="inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors duration-200 hover:border-gold hover:text-gold"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>

                      <p className="font-body text-[1rem] leading-8 text-medium-grey">{project.summary}</p>

                      <div className="my-6 border-t border-slate-200 pt-5">
                        <div className="mb-3 font-body text-xs font-bold uppercase tracking-[1.8px] text-gold">
                          What is live
                        </div>
                        <div className="space-y-3">
                          {project.evidence.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                              <span className="font-body text-[0.96rem] leading-7 text-dark-grey">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mb-6 rounded-2xl border border-light-grey bg-off-white p-5">
                        <div className="mb-3 font-body text-xs font-bold uppercase tracking-[1.8px] text-navy">
                          Business value
                        </div>
                        <ul className="space-y-2">
                          {project.outcomes.map((item) => (
                            <li key={item} className="font-body text-sm leading-6 text-medium-grey">
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center justify-between border-t border-slate-200 pt-4 font-body text-sm font-semibold text-gold"
                      >
                        <span>Visit live project</span>
                        <ExternalLink className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 max-w-3xl">
              <SectionLabel>Product Ecosystem</SectionLabel>
              <h2 className="font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                More sector platforms in the MylesCorp portfolio.
              </h2>
              <p className="mt-4 font-body text-lg leading-8 text-medium-grey">
                Beyond the live researched properties, MylesCorp is building reusable product thinking across healthcare, agriculture, business operations, and AI automation.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilityProjects.map((project) => {
                const Icon = project.icon
                return (
                  <Link
                    key={project.name}
                    href={project.href}
                    className="group flex min-h-[300px] flex-col rounded-[1.3rem] border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/35"
                  >
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                      <Icon className="h-6 w-6 text-gold" />
                    </div>
                    <div className="mb-3 text-xs font-bold uppercase tracking-[1.5px] text-gold">
                      {project.category}
                    </div>
                    <h3 className="font-display text-2xl font-bold text-navy group-hover:text-gold">
                      {project.name}
                    </h3>
                    <p className="mt-4 font-body text-sm leading-7 text-medium-grey">{project.summary}</p>
                    <div className="mt-auto flex items-center justify-between pt-6 font-body text-sm font-semibold text-gold">
                      <span>Explore product</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
              <div>
                <SectionLabel>How We Deliver</SectionLabel>
                <h2 className="font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                  Professional execution from positioning to launch.
                </h2>
                <p className="mt-5 font-body text-lg leading-8 text-medium-grey">
                  The strongest portfolio work is not just attractive. It explains the offer, handles objections, supports real operations, and gives prospects a clear next step.
                </p>
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                {processPoints.map((item) => {
                  const Icon = item.icon
                  return (
                    <article key={item.title} className="rounded-[1.2rem] border border-slate-200 bg-white p-6 shadow-card">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-gold/20 bg-gold/10">
                        <Icon className="h-6 w-6 text-gold" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-navy">{item.title}</h3>
                      <p className="mt-3 font-body text-sm leading-7 text-medium-grey">{item.text}</p>
                    </article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-navy-deep py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div>
                <SectionLabel>Engagement Models</SectionLabel>
                <h2 className="font-display text-4xl font-bold leading-tight text-white md:text-5xl">
                  Build the next live product or institutional website with MylesCorp.
                </h2>
                <p className="mt-5 font-body text-lg leading-8 text-light-blue">
                  We support organisations that need a polished product presence, a real operating platform, or a public-facing digital experience that is ready for customers, parents, staff, and partners.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-white/10 bg-white/[0.06] p-7">
                <div className="grid gap-3">
                  {engagementModels.map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-navy/50 px-5 py-4">
                      <CheckCircle2 className="mt-1 h-5 w-5 flex-shrink-0 text-gold" />
                      <span className="font-body text-[0.98rem] leading-7 text-light-blue">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="rounded-[1.4rem] border border-slate-200 bg-white p-8 shadow-card md:p-10">
              <div className="mb-4 flex items-center justify-center gap-3">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  East Africa Delivery
                </span>
                <BarChart3 className="h-5 w-5 text-gold" />
              </div>
              <h2 className="mb-4 font-display text-4xl font-bold leading-tight text-navy md:text-5xl">
                Ready to turn your product or institution into a credible digital experience?
              </h2>
              <p className="mx-auto mb-8 max-w-3xl font-body text-lg leading-8 text-medium-grey">
                MylesCorp can help you shape the strategy, user experience, messaging, and build needed to launch with confidence.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/book-demo">
                  <Button size="lg" className="min-w-[220px]">
                    Book a Strategy Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="min-w-[220px] bg-navy text-white hover:bg-navy-dark"
                  >
                    Request a Proposal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
