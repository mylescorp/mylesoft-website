import Image from 'next/image'
import Link from 'next/link'
import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { CTASection } from '@/components/ui/CTASection'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { TEAM_MEMBERS } from '@/lib/constants/team'
import { Mail, Linkedin, Twitter, ArrowRight, BriefcaseBusiness, GraduationCap, HeartHandshake, ShieldCheck } from 'lucide-react'

export const metadata = {
  title: 'Leadership Team — MylesCorp Technologies',
  description: 'Meet the MylesCorp Technologies leadership team building trusted software for schools, healthcare providers, farms, businesses, and public institutions across East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/team',
  },
}

const teamStats = [
  { number: '50+', label: 'Team Members' },
  { number: '6', label: 'Core Departments' },
  { number: '20+', label: 'Products & Platforms' },
  { number: '4', label: 'Regional Markets' },
]

const departments = [
  {
    icon: BriefcaseBusiness,
    title: 'Product & Engineering',
    description: 'Full-stack engineering, AI, QA, DevOps, and product delivery teams building secure platforms for African institutions.',
  },
  {
    icon: HeartHandshake,
    title: 'Customer Success',
    description: 'Implementation, training, support, and account teams helping schools, clinics, and businesses get measurable value.',
  },
  {
    icon: GraduationCap,
    title: 'Domain Experts',
    description: 'Education, healthcare, agriculture, transport, real estate, and business specialists shaping products around local operating realities.',
  },
  {
    icon: ShieldCheck,
    title: 'Operations & Compliance',
    description: 'Finance, governance, security, and delivery operations keeping the company reliable as it scales across East Africa.',
  },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
}

export default function TeamPage() {
  return (
    <Layout>
      <main className="min-h-screen bg-white">
        <section className="relative overflow-hidden bg-navy py-24 md:py-32">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)',
              backgroundSize: '64px 64px',
            }}
          />
          <div className="absolute left-0 right-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

          <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <div className="mb-5 flex items-center justify-center gap-3">
              <div className="h-0.5 w-8 bg-gold" />
              <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                Leadership & People
              </span>
              <div className="h-0.5 w-8 bg-gold" />
            </div>

            <h1 className="mb-6 font-display text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              The Team Behind{' '}
              <span className="block bg-gold bg-clip-text text-transparent">
                MylesCorp Technologies
              </span>
            </h1>

            <p className="mx-auto mb-10 max-w-3xl font-body text-xl leading-9 text-ice md:text-2xl">
              A focused leadership group and growing delivery team building practical, trustworthy technology for East African institutions.
            </p>

            <div className="mx-auto grid max-w-4xl grid-cols-2 gap-5 md:grid-cols-4">
              {teamStats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="mb-2 text-3xl font-bold text-gold md:text-4xl">{stat.number}</div>
                  <div className="font-body text-sm text-light-blue md:text-[0.95rem]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-off-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-3xl">
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  Leadership
                </span>
              </div>
              <h2 className="mb-4 font-display text-4xl font-bold text-navy md:text-5xl">
                People you can put a face to
              </h2>
              <p className="font-body text-lg leading-8 text-medium-grey">
                These are the people responsible for company direction, operations, customer delivery, and the product standards behind MylesCorp platforms.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
              {TEAM_MEMBERS.map((member) => (
                <article
                  key={member.name}
                  className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-gold/40"
                >
                  <div className="grid min-h-full grid-cols-1 md:grid-cols-[260px_1fr]">
                    <div className="relative min-h-[360px] bg-gradient-to-br from-navy to-navy-deep md:min-h-full">
                      {member.image ? (
                        <Image
                          src={member.image}
                          alt={`${member.name}, ${member.role}`}
                          fill
                          sizes="(min-width: 1024px) 260px, 100vw"
                          className="object-contain object-center p-3"
                        />
                      ) : (
                        <div className="flex h-full min-h-[360px] items-center justify-center p-8">
                          <div className="flex h-40 w-40 items-center justify-center rounded-2xl border border-gold/30 bg-gold/10 font-display text-5xl font-bold text-gold">
                            {initials(member.name)}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col p-8">
                      <div className="mb-5">
                        <h3 className="mb-2 font-display text-3xl font-bold text-navy">{member.name}</h3>
                        <p className="font-body text-sm font-semibold uppercase tracking-[1.5px] text-gold">{member.role}</p>
                      </div>

                      <p className="mb-7 flex-grow font-body text-[15px] font-light leading-8 text-medium-grey">
                        {member.bio}
                      </p>

                      <div className="flex flex-wrap items-center gap-3">
                        {member.email && (
                          <a
                            href={`mailto:${member.email}`}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:border-navy hover:text-navy"
                            aria-label={`Email ${member.name}`}
                          >
                            <Mail className="h-4 w-4" />
                          </a>
                        )}
                        {member.social?.linkedin && member.social.linkedin !== '#' && (
                          <a
                            href={member.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:border-navy hover:text-navy"
                            aria-label={`${member.name} on LinkedIn`}
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.social?.twitter && member.social.twitter !== '#' && (
                          <a
                            href={member.social.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-navy transition-colors hover:border-navy hover:text-navy"
                            aria-label={`${member.name} on X`}
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <MYLESValues />

        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <div className="mb-4 flex items-center justify-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  How We Work
                </span>
                <div className="h-0.5 w-8 bg-gold" />
              </div>
              <h2 className="mb-4 font-display text-4xl font-bold text-navy md:text-5xl">
                Built for serious delivery
              </h2>
              <p className="mx-auto max-w-3xl font-body text-lg leading-8 text-medium-grey">
                Our company structure connects product thinking, field implementation, and long-term support so clients get systems that are usable beyond launch day.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {departments.map((department) => {
                const DepartmentIcon = department.icon
                return (
                  <div key={department.title} className="rounded-[1.25rem] border border-slate-200 bg-white p-7 shadow-soft">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-gold/20 bg-ice text-navy">
                      <DepartmentIcon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-3 font-display text-xl font-bold text-navy">{department.title}</h3>
                    <p className="font-body text-sm leading-7 text-medium-grey">{department.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20">
          <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_auto] lg:px-8">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <div className="h-0.5 w-8 bg-gold" />
                <span className="font-body text-[11px] font-bold uppercase tracking-[2.5px] text-gold">
                  Careers
                </span>
              </div>
              <h2 className="mb-4 font-display text-4xl font-bold text-white md:text-5xl">
                Join the people building African software infrastructure
              </h2>
              <p className="max-w-3xl font-body text-lg leading-8 text-light-blue">
                We are always interested in engineers, designers, implementation specialists, and operators who care about dependable technology and real customer outcomes.
              </p>
            </div>
            <div className="flex items-center lg:justify-end">
              <Link href="/careers">
                <Button size="lg">
                  View Open Roles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <CTASection
          title="Work With Our Team"
          tagline="Transforming Industries, Empowering Generations."
          description="Talk to MylesCorp about product implementation, partnerships, or career opportunities."
          primaryCta={{ text: 'Book a Demo', href: '/book-demo' }}
          secondaryCta={{ text: 'Contact Us', href: '/contact' }}
        />
      </main>
    </Layout>
  )
}
