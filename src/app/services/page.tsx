import Link from 'next/link'
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  Compass,
  Database,
  Globe2,
  Layers3,
  Palette,
  ShieldCheck,
} from 'lucide-react'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'

export const metadata = {
  title: 'Professional Technology Services | MylesCorp',
  description:
    'Explore MylesCorp professional services: website development, software development, web apps, UI/UX design, cloud solutions, web hosting, and IT consulting for African organisations.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services',
  },
}

const services = [
  {
    name: 'Website Development',
    href: '/services/website-development',
    icon: Globe2,
    summary: 'High-performance corporate websites, product sites, institution sites, and conversion-focused landing pages.',
    bestFor: 'Brands, schools, SMEs, institutions, and product launches',
    deliverables: ['Responsive website build', 'SEO-ready structure', 'CMS-ready content sections', 'Analytics and launch support'],
  },
  {
    name: 'Custom Software Development',
    href: '/services/software-development',
    icon: Code2,
    summary: 'Tailored web platforms, portals, dashboards, workflows, and integrations built around your operating model.',
    bestFor: 'Teams with unique workflows that off-the-shelf tools cannot solve',
    deliverables: ['Requirements discovery', 'Custom application build', 'API and payment integrations', 'Testing, deployment, and support'],
  },
  {
    name: 'Web Application Design',
    href: '/services/web-app-design',
    icon: Layers3,
    summary: 'Professional interface design for dashboards, SaaS products, admin tools, and operational web applications.',
    bestFor: 'Product teams building serious tools for repeat daily use',
    deliverables: ['User flows and wireframes', 'Responsive interface design', 'Design system guidance', 'Developer-ready handoff'],
  },
  {
    name: 'UI/UX Design',
    href: '/services/ui-ux-design',
    icon: Palette,
    summary: 'Research-led product experience design that improves clarity, usability, trust, and conversion.',
    bestFor: 'Products that need a clearer journey, stronger trust, or better adoption',
    deliverables: ['UX audits', 'Journey mapping', 'High-fidelity UI design', 'Prototype and usability recommendations'],
  },
  {
    name: 'Cloud Solutions',
    href: '/services/cloud-solutions',
    icon: Cloud,
    summary: 'Cloud architecture, migration, cost optimisation, reliability planning, backups, and monitoring support.',
    bestFor: 'Growing teams that need reliable, secure, and scalable infrastructure',
    deliverables: ['Cloud readiness review', 'Migration plan', 'Security and backup setup', 'Monitoring and optimisation'],
  },
  {
    name: 'Web Hosting',
    href: '/services/web-hosting',
    icon: Database,
    summary: 'Managed hosting, domain setup, SSL, email configuration, uptime support, and maintenance for business websites.',
    bestFor: 'Organisations that want one accountable partner for site hosting and upkeep',
    deliverables: ['Hosting setup', 'Domain and DNS configuration', 'SSL and business email', 'Maintenance and support'],
  },
  {
    name: 'IT Consulting',
    href: '/services/it-consulting',
    icon: Compass,
    summary: 'Technology strategy, digital transformation planning, procurement guidance, security reviews, and roadmap support.',
    bestFor: 'Leaders making technology decisions across teams, products, or departments',
    deliverables: ['Technology assessment', 'Digital roadmap', 'Security and process review', 'Implementation advisory'],
  },
]

const principles = [
  'Clear scope before build',
  'Brand-consistent interfaces',
  'Security and reliability by default',
  'Training and handover included',
]

const engagementPaths = [
  {
    title: 'Product Implementation',
    description:
      'For schools, transport teams, and businesses adopting EduMyles, EduRyde, or MylesCRM. We configure workflows, import data, train teams, and support go-live.',
    href: '/products',
    cta: 'Explore Products',
  },
  {
    title: 'Custom Digital Build',
    description:
      'For teams that need a website, portal, dashboard, web app, or integration built around a specific workflow and launch deadline.',
    href: '/services/software-development',
    cta: 'View Build Services',
  },
  {
    title: 'Technology Advisory',
    description:
      'For leaders planning infrastructure, cloud migration, security, hosting, procurement, or a phased digital transformation roadmap.',
    href: '/services/it-consulting',
    cta: 'Plan a Roadmap',
  },
]

export default function ServicesPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-navy">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(199,150,57,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.045) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-6 py-24 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
            <div>
              <div className="mb-6 h-1 w-20 bg-gold" />
              <p className="mb-4 text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
                Professional Services
              </p>
              <h1 className="font-display text-[clamp(2.7rem,6vw,5.5rem)] font-bold leading-[0.96] text-white">
                Technology services built for serious African organisations.
              </h1>
              <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-light-blue">
                From websites and custom software to cloud infrastructure and IT strategy, MylesCorp gives you a practical delivery partner from discovery to launch.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link href="/book-demo">
                  <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold-light sm:w-auto">
                    Book a Discovery Call
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="w-full border-white text-white hover:bg-white hover:text-navy sm:w-auto">
                    Request a Proposal
                  </Button>
                </Link>
              </div>
            </div>

            <div className="border-t-2 border-gold bg-white/8 p-6 backdrop-blur-sm">
              <div className="mb-5 flex items-center gap-3">
                <ShieldCheck className="h-7 w-7 text-gold" />
                <h2 className="font-display text-2xl font-bold text-white">
                  Delivery Principles
                </h2>
              </div>
              <div className="grid gap-3">
                {principles.map((principle) => (
                  <div key={principle} className="flex items-center gap-3 border border-white/10 bg-navy/40 px-4 py-3">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-gold" />
                    <span className="text-[0.95rem] text-light-blue">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-12 max-w-3xl">
              <div className="mb-5 h-1 w-16 bg-gold" />
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-medium-grey">
                Complete Service Catalogue
              </p>
              <h2 className="font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-tight text-navy">
                All services, clearly scoped.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-dark-grey">
                Choose a focused service, or combine several into one delivery plan for a product launch, institutional website, internal platform, or digital transformation programme.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {services.map((service) => {
                const ServiceIcon = service.icon

                return (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="group flex h-full flex-col border border-slate-200 bg-white p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/45 md:p-7"
                  >
                    <div className="mb-5 flex items-start justify-between gap-4">
                      <div className="flex h-14 w-14 items-center justify-center border border-gold/20 bg-gold/10 text-gold">
                        <ServiceIcon className="h-7 w-7" />
                      </div>
                      <ArrowRight className="mt-2 h-5 w-5 text-gold transition-transform group-hover:translate-x-1" />
                    </div>

                    <h3 className="font-display text-2xl font-bold text-navy group-hover:text-gold">
                      {service.name}
                    </h3>
                    <p className="mt-3 text-[0.98rem] leading-8 text-dark-grey">
                      {service.summary}
                    </p>

                    <div className="mt-5 border-l-4 border-gold bg-ice px-4 py-3">
                      <p className="text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                        Best for
                      </p>
                      <p className="mt-1 text-[0.92rem] leading-6 text-medium-grey">
                        {service.bestFor}
                      </p>
                    </div>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {service.deliverables.map((deliverable) => (
                        <div key={deliverable} className="flex items-start gap-2 text-[0.9rem] leading-6 text-medium-grey">
                          <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-gold" />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-7xl px-6 md:px-10">
            <div className="mb-12 max-w-3xl">
              <div className="mb-5 h-1 w-16 bg-gold" />
              <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.22em] text-medium-grey">
                How to Engage Us
              </p>
              <h2 className="font-display text-[clamp(2.1rem,4vw,3.5rem)] font-bold leading-tight text-navy">
                Choose the path that matches your goal.
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-dark-grey">
                Some visitors need a product demo, some need a custom build, and some need a technical roadmap. These paths make the next step clear.
              </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {engagementPaths.map((path) => (
                <div key={path.title} className="flex h-full flex-col border border-slate-200 bg-white p-7 shadow-card">
                  <h3 className="font-display text-2xl font-bold text-navy">{path.title}</h3>
                  <p className="mt-4 flex-1 text-[0.98rem] leading-8 text-medium-grey">
                    {path.description}
                  </p>
                  <Link href={path.href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[1.4px] text-gold hover:text-gold-light">
                    {path.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ice py-20">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="grid gap-8 border-t-2 border-gold bg-navy px-6 py-10 md:grid-cols-[1fr_auto] md:items-center md:px-10">
              <div>
                <p className="text-[12px] font-bold uppercase tracking-[0.22em] text-gold">
                  Need a combined scope?
                </p>
                <h2 className="mt-3 font-display text-[2rem] font-bold text-white">
                  We can package strategy, design, build, cloud, and support into one delivery plan.
                </h2>
                <p className="mt-3 max-w-2xl text-[1rem] leading-7 text-light-blue">
                  Share the outcome you need and we will recommend the right mix of services, timeline, and launch path.
                </p>
              </div>
              <Link href="/book-demo">
                <Button size="lg" className="w-full bg-gold text-navy hover:bg-gold-light md:w-auto">
                  Book a Discovery Call
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
