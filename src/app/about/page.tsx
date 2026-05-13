import { Layout } from '@/components/layout/Layout'
import { FeaturesSection } from '@/components/ui/FeaturesSection'
import { TestimonialsSection } from '@/components/ui/TestimonialsSection'
import { CTASection } from '@/components/ui/CTASection'
import { OverviewSection } from '@/components/ui/OverviewSection'
import { ProcessSection } from '@/components/ui/ProcessSection'
import { TargetsSection } from '@/components/ui/TargetsSection'
import { MYLESValues } from '@/components/sections/MYLESValues'
import { 
  Target, 
  Eye, 
} from 'lucide-react'

export const metadata = {
  title: 'About MylesCorp Technologies — Our Story, Mission & Values',
  description: 'Learn about MylesCorp Technologies, our story, mission, vision, M.Y.L.E.S. values, and the work behind our AI-powered software for East Africa.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/about',
  },
}

const ABOUT_DATA = {
  overview: {
    title: 'About Us',
    tagline: 'Transforming Africa Through Innovation',
    description: [
      'MylesCorp Technologies is East Africa\'s leading AI-powered software company.',
      'We\'re transforming education, healthcare, agriculture, and business with innovative technology solutions.'
    ],
    image: '/api/og/product?name=About&category=Company',
    stats: [
      { number: '500+', label: 'Schools Transformed' },
      { number: '50K+', label: 'Lives Impacted' },
      { number: '12', label: 'Products Launched' },
      { number: '4', label: 'East Africa Countries' }
    ]
  },
  features: [
    {
      icon: '🎯',
      title: 'Mission-Driven',
      description: 'We\'re committed to solving real challenges in African markets with technology that makes a difference.'
    },
    {
      icon: '🌍',
      title: 'Local Expertise',
      description: 'Built by Africans, for Africa – we understand the unique challenges and opportunities of our markets.'
    },
    {
      icon: '🚀',
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI and machine learning to create solutions that push boundaries.'
    },
    {
      icon: '👥',
      title: 'Expert Team',
      description: 'Our talented team of engineers, designers, and domain experts brings diverse perspectives and skills.'
    },
    {
      icon: '🏆',
      title: 'Proven Impact',
      description: 'With measurable results across multiple sectors, we\'ve demonstrated our ability to drive real change.'
    },
    {
      icon: '⚡',
      title: 'Agile Approach',
      description: 'We move fast and iterate quickly to deliver solutions that meet evolving market needs.'
    }
  ],
  process: [
    { step: 1, title: 'Discovery', description: 'We deeply understand African challenges through research and engagement' },
    { step: 2, title: 'Design', description: 'We create user-centered solutions tailored for local contexts' },
    { step: 3, title: 'Development', description: 'We build robust, scalable systems using cutting-edge technology' },
    { step: 4, title: 'Deployment', description: 'We implement solutions with comprehensive training and support' },
    { step: 5, title: 'Impact', description: 'We measure and optimize for maximum positive impact' }
  ],
  targets: [
    'Educational Institutions - Schools, colleges, and universities seeking digital transformation',
    'Healthcare Providers - Hospitals, clinics, and medical centers needing management solutions',
    'Agricultural Organizations - Farms, cooperatives, and agribusinesses',
    'Business Enterprises - SMEs and corporations looking for operational efficiency'
  ],
  testimonials: [
    {
      quote: 'MylesCorp understands African markets like no other company. Their solutions are built for our reality.',
      author: 'Sarah Johnson',
      role: 'School Principal',
      organization: 'Nairobi Academy'
    },
    {
      quote: 'The impact they\'ve made in healthcare is remarkable. Their AI solutions are saving lives.',
      author: 'Dr. Michael Chen',
      role: 'Medical Director',
      organization: 'East Africa Medical Center'
    },
    {
      quote: 'From concept to implementation, MylesCorp delivered beyond our expectations.',
      author: 'Grace Wanjiku',
      role: 'CEO',
      organization: 'Kenya Agricultural Cooperative'
    }
  ]
}

export default function AboutPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
          {/* Grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow Label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                OUR STORY
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>
            
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Transforming Africa{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Through Innovation
              </span>
            </h1>
            
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              {ABOUT_DATA.overview.description[0]}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {ABOUT_DATA.overview.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gold mb-2">{stat.number}</div>
                  <div className="text-sm md:text-[0.95rem] text-light-blue font-body">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Name Meaning Section */}
        <section
          className="relative py-20 overflow-hidden"
          style={{ background: '#080e18' }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px,
                        transparent 1px),
                linear-gradient(90deg,rgba(199,150,57,0.04) 1px,
                        transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#C79639,transparent)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto
                  px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-16">
              <div className="flex items-center justify-center
                      gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
                <span style={{
                  color: '#C79639', fontSize: '11px', fontWeight: 700,
                  letterSpacing: '2.5px', textTransform: 'uppercase',
                }}>
                  OUR NAME
                </span>
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
              </div>
              <h2 className="font-display font-bold text-white
                     text-4xl md:text-5xl mb-4">
                The Story Behind{' '}
                <em style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg,#C79639,#e0b055)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Our Name
                </em>
              </h2>
              <p className="font-body max-w-2xl mx-auto text-lg md:text-xl leading-8 text-light-blue">
                MylesCorp Technologies Ltd is a name built on ancient 
                foundations — two words, two languages, one powerful identity 
                rooted in over 2,000 years of meaning.
              </p>
            </div>

            {/* MYLES + CORP cards — FULL WIDTH side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">

              {/* MYLES */}
              <div className="bg-gradient-to-br from-navy to-navy-dark border border-gold/20 rounded-[1.6rem] p-8 shadow-card hover:border-gold/50 hover:-translate-y-1 transition-all duration-300">
                <div style={{
                  color: '#C79639', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  Origin — Latin · <em>miles</em>
                </div>
                <div className="font-display font-bold text-white
                        text-5xl mb-2">
                  MYLES
                </div>
                <div className="font-body font-light italic text-sm mb-6"
                     style={{ color: '#C7D7EF' }}>
                  from Latin <em>miles</em> — soldier, warrior
                </div>
                <div style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#95A9CC', marginBottom: '16px',
                }}>
                  Core Meanings
                </div>
                <div className="space-y-3">
                  {[
                    ['Warrior / Soldier',
                     'Latin miles — disciplined servant of a cause'],
                    ['Devoted Champion',
                     'Old Irish — devoted follower, loyal servant'],
                    ['Gracious & Dear',
                     'Old Slavic milŭ — beloved, pleasant, kind'],
                    ['Courageous Noble',
                     'Old French — chivalrous, noble lineage'],
                  ].map(([title, sub]) => (
                    <div key={title}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                             style={{ background: '#C79639' }} />
                        <span className="text-white text-sm font-medium">
                          {title}
                        </span>
                      </div>
                      <p className="text-xs ml-4 mt-0.5"
                         style={{ color: '#95A9CC' }}>
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CORP */}
              <div className="bg-gradient-to-br from-navy to-navy-dark border border-gold/20 rounded-[1.6rem] p-8 shadow-card hover:border-gold/50 hover:-translate-y-1 transition-all duration-300">
                <div style={{
                  color: '#C79639', fontSize: '10px', fontWeight: 700,
                  letterSpacing: '2px', textTransform: 'uppercase',
                  marginBottom: '12px',
                }}>
                  Origin — Latin · <em>corpus</em>
                </div>
                <div className="font-display font-bold text-white
                        text-5xl mb-2">
                  CORP
                </div>
                <div className="font-body font-light italic text-sm mb-6"
                     style={{ color: '#C7D7EF' }}>
                  from Latin <em>corpus</em> — body, whole
                </div>
                <div style={{
                  fontSize: '10px', fontWeight: 700, letterSpacing: '2px',
                  textTransform: 'uppercase', color: '#95A9CC', marginBottom: '16px',
                }}>
                  Core Meanings
                </div>
                <div className="space-y-3">
                  {[
                    ['The Body',
                     'Latin corpus — a living, structured organism'],
                    ['Unity & Wholeness',
                     'A whole composed of united, purposeful parts'],
                    ['Collective Structure',
                     'People united as one — moving with one will'],
                    ['Embodied Purpose',
                     'corporationem — assumption of a body'],
                  ].map(([title, sub]) => (
                    <div key={title}>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0"
                             style={{ background: '#C79639' }} />
                        <span className="text-white text-sm font-medium">
                          {title}
                        </span>
                      </div>
                      <p className="text-xs ml-4 mt-0.5"
                         style={{ color: '#95A9CC' }}>
                        {sub}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Combined meaning quote */}
            <div className="bg-gradient-to-br from-navy to-navy-dark border border-gold/20 rounded-[1.6rem] p-10 text-center relative overflow-hidden shadow-card">
              <div className="absolute top-0 left-0 right-0 h-[3px]"
                   style={{ background: '#C79639' }} />
              <p className="text-[10px] font-bold tracking-[2.5px]
                    uppercase mb-3"
                 style={{ color: '#95A9CC' }}>
                Combined Meaning
              </p>
              <p className="font-display font-bold italic text-2xl
                    md:text-3xl"
                 style={{ color: '#C79639' }}>
                "A unified body of warriors devoted to a cause."
              </p>
            </div>

          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2
                    gap-16 items-center">

              {/* Left — text */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-0.5 bg-gold" />
                  <span className="text-gold text-[11px] font-bold
                           tracking-[2.5px] uppercase font-body">
                    Our Story
                  </span>
                </div>
                <h2 className="font-display font-bold text-navy
                       text-4xl md:text-5xl mb-6">
                  How We Started
                </h2>
                <div className="space-y-4">
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    Founded in 2020, MylesCorp Technologies emerged 
                    from a simple yet powerful vision: to harness the 
                    power of artificial intelligence to solve Africa's 
                    most pressing challenges. What started as a small 
                    team of passionate developers has grown into East 
                    Africa's leading AI-powered software company.
                  </p>
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    Our journey began with EduMyles, our flagship 
                    school management system that transformed how 
                    educational institutions across Kenya operate. 
                    Today we power 500+ schools serving more than 
                    50,000 students with cutting-edge technology.
                  </p>
                  <p className="font-body text-base leading-relaxed
                        font-light"
                     style={{ color: '#545454' }}>
                    From healthcare to agriculture, from CRM to 
                    transport management, our solutions touch every 
                    aspect of life in East Africa. We are not just 
                    building software — we are building the future 
                    of African innovation.
                  </p>
                </div>
              </div>

              {/* Right — stats visual */}
              <div className="bg-gradient-to-br from-navy to-navy-dark rounded-[1.6rem] p-10 border border-gold/20 shadow-card">
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { num: '2020',  label: 'Year Founded'      },
                    { num: '500+',  label: 'Schools Powered'   },
                    { num: '50K+',  label: 'Students Managed'  },
                    { num: '4',     label: 'Products Live'     },
                    { num: '47',    label: 'Counties Reached'  },
                    { num: '100+',  label: 'Health Facilities' },
                  ].map(s => (
                    <div key={s.label}
                         className="rounded-xl p-5 border"
                         style={{
                           background: 'rgba(8,14,24,0.5)',
                           borderColor: 'rgba(255,255,255,0.05)',
                         }}>
                      <div className="font-display font-bold text-3xl
                              mb-1"
                           style={{ color: '#C79639' }}>
                        {s.num}
                      </div>
                      <div className="font-body text-xs"
                           style={{ color: '#95A9CC' }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20" style={{ background: '#f8f6f2' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Section header */}
            <div className="text-center mb-12">
              <div className="flex items-center justify-center
                      gap-3 mb-4">
                <div className="w-8 h-0.5 bg-gold" />
                <span className="text-gold text-[11px] font-bold
                         tracking-[2.5px] uppercase font-body">
                  Who We Are
                </span>
                <div className="w-8 h-0.5 bg-gold" />
              </div>
              <h2 className="font-display font-bold text-navy
                     text-4xl md:text-5xl">
                Our Purpose &{' '}
                <span className="text-transparent bg-clip-text
                  bg-gradient-to-r from-gold to-gold-light italic">
                  Direction
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Mission */}
              <div className="bg-white border border-slate-200
                      rounded-[1.6rem] p-10 flex flex-col shadow-card
                      hover:border-gold hover:-translate-y-1
                      transition-all
                      duration-300 group">
                <div className="w-14 h-14 bg-gold/10 border
                        border-gold/20 rounded-xl flex
                        items-center justify-center mb-6
                        flex-shrink-0">
                  <Target className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy
                       text-2xl mb-4 group-hover:text-gold
                       transition-colors duration-300">
                  Our Mission
                </h3>
                <p className="font-body font-light text-base
                      leading-relaxed flex-grow"
                   style={{ color: '#545454' }}>
                  To transform African industries through innovative 
                  AI-powered software solutions that drive efficiency, 
                  accessibility, and sustainable growth across East 
                  Africa and beyond.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-white border border-slate-200
                      rounded-[1.6rem] p-10 flex flex-col shadow-card
                      hover:border-gold hover:-translate-y-1
                      transition-all
                      duration-300 group">
                <div className="w-14 h-14 bg-gold/10 border
                        border-gold/20 rounded-xl flex
                        items-center justify-center mb-6
                        flex-shrink-0">
                  <Eye className="text-gold w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-navy
                       text-2xl mb-4 group-hover:text-gold
                       transition-colors duration-300">
                  Our Vision
                </h3>
                <p className="font-body font-light text-base
                      leading-relaxed flex-grow"
                   style={{ color: '#545454' }}>
                  To become Africa's most trusted technology partner, 
                  empowering organizations with intelligent solutions 
                  that bridge the digital divide and unlock human 
                  potential across the continent.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* MYLES Values Section */}
        <MYLESValues />

        {/* Company Stats Section */}
        <section className="py-20" style={{ background: '#080e18' }}>
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `
                linear-gradient(rgba(199,150,57,0.04) 1px,
                        transparent 1px),
                linear-gradient(90deg,rgba(199,150,57,0.04) 1px,
                        transparent 1px)
              `,
              backgroundSize: '64px 64px',
            }}
          />
          <div
            className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg,transparent,#C79639,transparent)',
            }}
          />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
                <span style={{
                  color: '#C79639',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2.5px',
                  textTransform: 'uppercase',
                }}>
                  IMPACT
                </span>
                <div className="w-8 h-px" style={{ background: '#C79639' }} />
              </div>
              <h2 className="font-display font-bold text-white
                     text-4xl md:text-5xl mb-4">
                Our{' '}
                <em style={{
                  fontStyle: 'italic',
                  background: 'linear-gradient(135deg,#C79639,#e0b055)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}>
                  Numbers
                </em>
              </h2>
              <p className="font-body max-w-2xl mx-auto text-lg md:text-xl leading-8 text-light-blue">
                Measuring our impact across East Africa through 
                transformative technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { num: '500+', label: 'Schools', desc: 'Across Kenya' },
                { num: '50K+', label: 'Students', desc: 'Empowered' },
                { num: '47', label: 'Counties', desc: 'Reached' },
                { num: '100+', label: 'Health', desc: 'Facilities' },
                { num: '18', label: 'Products', desc: 'Available' },
                { num: '4', label: 'Years', desc: 'of Innovation' },
                { num: '24/7', label: 'Support', desc: 'Available' },
                { num: '99%', label: 'Uptime', desc: 'Guaranteed' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-display font-bold text-4xl md:text-5xl mb-2"
                       style={{ color: '#C79639' }}>
                    {stat.num}
                  </div>
                  <div className="text-white font-semibold text-lg mb-1">
                    {stat.label}
                  </div>
                  <div className="font-body text-sm"
                       style={{ color: '#95A9CC' }}>
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <OverviewSection 
          title={ABOUT_DATA.overview.title}
          description={ABOUT_DATA.overview.description}
          stats={ABOUT_DATA.overview.stats}
        />

        {/* Features */}
        <FeaturesSection 
          title="Why Choose MylesCorp?"
          description="We combine cutting-edge technology with deep African market understanding to deliver solutions that make a real difference."
          features={ABOUT_DATA.features}
          centerHeader={true}
        />

        {/* Process */}
        <ProcessSection 
          title="Our Approach"
          description="From discovery to impact — we follow a proven process to ensure successful outcomes."
          steps={ABOUT_DATA.process}
          centerHeader={true}
        />

        {/* Targets */}
        <TargetsSection 
          title="Who We Serve"
          targets={ABOUT_DATA.targets}
        />

        {/* Testimonials */}
        <TestimonialsSection 
          title="What Our Partners Say"
          testimonials={ABOUT_DATA.testimonials}
          centerHeader={true}
        />

        {/* Final CTA */}
        <CTASection 
          title="Join Our Journey"
          tagline="Transforming Industries, Empowering Generations."
          description="Whether you're looking to transform your organization with our solutions or join our growing team, we'd love to hear from you."
          primaryCta={{ text: "Book a Demo", href: "/book-demo" }}
          secondaryCta={{ text: "Contact Us", href: "/contact" }}
        />
      </div>
    </Layout>
  )
}
