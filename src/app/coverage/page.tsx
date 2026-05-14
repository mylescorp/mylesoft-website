import { Layout } from '@/components/layout/Layout'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'
import InteractiveMap from '@/components/ui/InteractiveMap'
import { MapPin, Phone, Mail, Users, Globe, ArrowRight } from 'lucide-react'

export const metadata = {
  title: 'Regional Coverage — MylesCorp Technologies in East Africa',
  description: 'See MylesCorp Technologies regional presence, office coverage, and client reach across Kenya and East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/coverage',
  },
}

const quickStats = [
  {
    icon: <MapPin className="w-8 h-8" />,
    number: "5+",
    label: "Office Locations",
    description: "Strategic offices across East Africa"
  },
  {
    icon: <Globe className="w-8 h-8" />,
    number: "6+",
    label: "Countries Served",
    description: "Growing presence across the region"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "800+",
    label: "Active Clients",
    description: "Organizations transforming with our solutions"
  },
  {
    icon: <Users className="w-8 h-8" />,
    number: "75+",
    label: "Team Members",
    description: "Dedicated professionals across the region"
  }
]

export default function CoveragePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-navy via-navy-deep to-navy-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <ScrollReveal direction="up" delay={0.2}>
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                OUR PRESENCE
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="text-5xl md:text-6xl font-display font-bold text-white leading-tight mb-6">
              Serving East Africa{' '}
              <span className="block text-white">
                With Pride
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-xl text-light-blue leading-relaxed max-w-3xl mx-auto font-body">
              From our headquarters in Nairobi to branch offices across the region,
              we're bringing AI-powered solutions to organizations throughout East Africa.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Our Regional Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Numbers that reflect our commitment to East African transformation
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {quickStats.map((stat, index) => (
              <ScrollReveal key={index} direction="up" delay={0.4 + index * 0.1}>
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <div className="text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl font-bold text-navy mb-2 group-hover:text-gold transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-500">{stat.description}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Map */}
      <section className="py-20 bg-ice">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Interactive Coverage Map
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Explore our office locations and client coverage across East Africa.
                Click on markers to learn more about each location.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.4}>
            <InteractiveMap />
          </ScrollReveal>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" delay={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy mb-4">
                Regional Expertise
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
                Deep understanding of local markets and regulatory environments
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                country: "Kenya",
                clients: "500+",
                sectors: ["Education", "Healthcare", "Agriculture", "Business", "Government"],
                description: "Our largest market with comprehensive sector coverage"
              },
              {
                country: "Uganda",
                clients: "120+",
                sectors: ["Education", "Healthcare", "Agriculture"],
                description: "Rapidly growing presence with strong education focus"
              },
              {
                country: "Tanzania",
                clients: "85+",
                sectors: ["Education", "Agriculture", "Business"],
                description: "Strategic focus on agricultural and business solutions"
              },
              {
                country: "Rwanda",
                clients: "65+",
                sectors: ["Education", "Healthcare"],
                description: "Emerging market with technology adoption leadership"
              },
              {
                country: "Burundi",
                clients: "25+",
                sectors: ["Education"],
                description: "Specialized education sector transformation"
              },
              {
                country: "South Sudan",
                clients: "15+",
                sectors: ["Healthcare"],
                description: "Healthcare solutions in challenging environments"
              }
            ].map((region, index) => (
              <ScrollReveal key={index} direction="up" delay={0.4 + index * 0.1}>
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-navy mb-2">{region.country}</h3>
                    <div className="text-3xl font-bold text-gold mb-1">{region.clients}</div>
                    <div className="text-sm text-gray-600">Active Clients</div>
                  </div>

                  <div className="flex-grow">
                    <div className="mb-4">
                      <h4 className="font-semibold text-navy mb-2">Key Sectors:</h4>
                      <div className="flex flex-wrap gap-2">
                        {region.sectors.map((sector, sectorIndex) => (
                          <span key={sectorIndex} className="bg-ice text-navy px-3 py-1 rounded-full text-sm font-medium">
                            {sector}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm">{region.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal direction="up" delay={0.2}>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                Ready to Transform Your Organization?
              </h2>
            <p className="text-xl text-white/90 mb-8 font-body">
              Join hundreds of organizations across East Africa already using our solutions.
              Find out how we can help you achieve your digital transformation goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-navy hover:bg-gray-100 shadow-2xl hover:shadow-3xl">
                Schedule Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-navy">
                View Regional Office
                <MapPin className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  )
}
