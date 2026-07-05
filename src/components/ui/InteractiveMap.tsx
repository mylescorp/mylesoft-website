'use client'

import { useState } from 'react'
import { Building, Globe, Mail, MapPin, Phone, Users } from 'lucide-react'
import { COMPANY_CONTACT, telHref } from '@/lib/constants/contact'

const regionalFocus = [
  {
    country: 'Kenya',
    sectors: ['Education', 'Healthcare', 'Agriculture', 'Business', 'Real Estate', 'Network Operations'],
    note: 'Primary operating market and company contact hub.',
  },
  {
    country: 'Uganda',
    sectors: ['Education', 'Healthcare', 'Agriculture', 'Business'],
    note: 'Regional product conversations and implementation planning.',
  },
  {
    country: 'Tanzania',
    sectors: ['Education', 'Agriculture', 'Business', 'Transport'],
    note: 'Regional expansion discussions and partner-led delivery planning.',
  },
  {
    country: 'Rwanda',
    sectors: ['Education', 'Healthcare', 'Business'],
    note: 'Focused product discovery for institutions and operators.',
  },
  {
    country: 'Burundi',
    sectors: ['Education', 'Healthcare'],
    note: 'Selective regional planning for suitable institutional deployments.',
  },
  {
    country: 'South Sudan',
    sectors: ['Healthcare', 'Education', 'Operations'],
    note: 'Early-stage discovery for organisations with structured rollout needs.',
  },
]

export default function InteractiveMap() {
  const [activeCountry, setActiveCountry] = useState(regionalFocus[0])

  return (
    <div className="overflow-hidden rounded-[1.5rem] border border-gold/20 bg-navy shadow-card">
      <div className="border-b border-white/10 bg-white/5 px-6 py-6 text-center">
        <h2 className="mb-2 font-display text-3xl font-bold text-white md:text-4xl">
          East Africa Coverage View
        </h2>
        <p className="mx-auto max-w-3xl font-body text-light-blue">
          MylesCorp is headquartered in Nairobi and supports product conversations across selected East African markets.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px]">
        <div className="relative min-h-[560px] bg-[#10243a] p-6">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(199,150,57,0.22), transparent 24%), radial-gradient(circle at 76% 30%, rgba(255,255,255,0.12), transparent 20%), radial-gradient(circle at 54% 74%, rgba(199,150,57,0.18), transparent 22%)',
            }}
          />
          <div className="relative z-10 grid h-full grid-cols-1 gap-4 sm:grid-cols-2">
            {regionalFocus.map((region) => (
              <button
                key={region.country}
                type="button"
                onClick={() => setActiveCountry(region)}
                className={`rounded-xl border p-5 text-left transition-all duration-200 ${
                  activeCountry.country === region.country
                    ? 'border-gold bg-gold/15 text-white'
                    : 'border-white/10 bg-white/5 text-light-blue hover:border-gold/40 hover:bg-white/10'
                }`}
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/15 text-gold">
                    <Globe className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="font-display text-xl font-bold text-white">{region.country}</div>
                    <div className="font-body text-xs uppercase tracking-[1.5px] text-gold">Market Focus</div>
                  </div>
                </div>
                <p className="font-body text-sm leading-6">{region.note}</p>
              </button>
            ))}
          </div>
        </div>

        <aside className="border-t border-white/10 bg-white p-6 lg:border-l lg:border-t-0">
          <div className="mb-6">
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">Nairobi Contact Hub</h3>
                <p className="font-body text-sm text-medium-grey">{COMPANY_CONTACT.location}</p>
              </div>
            </div>
            <div className="space-y-3 rounded-xl border border-slate-200 bg-ice p-4">
              <a
                href={`mailto:${COMPANY_CONTACT.contactEmail}`}
                className="flex items-center gap-3 font-body text-sm text-navy hover:text-gold"
              >
                <Mail className="h-4 w-4 text-gold" />
                {COMPANY_CONTACT.contactEmail}
              </a>
              <a
                href={telHref(COMPANY_CONTACT.technicalPhone)}
                className="flex items-center gap-3 font-body text-sm text-navy hover:text-gold"
              >
                <Phone className="h-4 w-4 text-gold" />
                {COMPANY_CONTACT.technicalPhone}
              </a>
              <div className="flex items-center gap-3 font-body text-sm text-navy">
                <MapPin className="h-4 w-4 text-gold" />
                {COMPANY_CONTACT.location}
              </div>
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-center gap-2">
              <Users className="h-5 w-5 text-gold" />
              <h4 className="font-display text-xl font-bold text-navy">{activeCountry.country}</h4>
            </div>
            <p className="mb-4 font-body text-sm leading-6 text-medium-grey">
              {activeCountry.note}
            </p>
            <div className="mb-3 font-body text-xs font-bold uppercase tracking-[1.5px] text-gold">
              Relevant Sectors
            </div>
            <div className="flex flex-wrap gap-2">
              {activeCountry.sectors.map((sector) => (
                <span
                  key={sector}
                  className="rounded-full border border-gold/20 bg-gold/10 px-3 py-1 font-body text-sm text-navy"
                >
                  {sector}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}
