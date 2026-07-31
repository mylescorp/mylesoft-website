import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { ServicePricingSection } from '@/components/ui/ServicePricingSection'
import { servicePricingBySlug } from '@/lib/constants/service-pricing'
import { HeroImageBackdrop } from '@/components/ui/HeroImageBackdrop'
import { SERVICE_HERO_IMAGES } from '@/lib/constants/hero-images'
import Link from 'next/link'
import {
  Shield,
  CheckCircle,
  ArrowRight,
  Star,
  Quote,
  Palette,
  Smartphone,
  Eye,
  Lock,
  Rocket,
  BarChart,
  Search,
  Mail,
  Database
} from 'lucide-react'

export const metadata = {
  title: 'Website Development & Hosting Kenya | MylesCorp',
  description: 'Business websites built for companies, schools, and organisations across Kenya. Mobile-first, SEO-ready, secure, and supported by clear proposal guidance.',
  alternates: {
    canonical: 'https://www.mylescorptech.com/services/website-development',
  },
}

export default function WebsiteDevelopmentPage() {
  return (
    <Layout>
      <div className="min-h-screen">
        {/* PAGE HERO */}
        <section className="relative py-24 md:py-32 overflow-hidden bg-navy">
          <HeroImageBackdrop images={[SERVICE_HERO_IMAGES.websiteDevelopment]} priority />
          <div className="absolute inset-0 bg-navy/10" />
          <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/15 to-navy/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/45 via-transparent to-navy/30" />
          {/* Grid texture overlay */}
          <div className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
              backgroundSize: '64px 64px',
            }}
          />

          {/* Radial glows */}
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
            }}
          />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 70%)',
            }}
          />

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background: 'linear-gradient(90deg, transparent, #C79639, transparent)',
            }}
          />

          <div className="hero-copy-shadow relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                WEBSITE DEVELOPMENT
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-[2.65rem] md:text-[3.35rem] lg:text-7xl leading-[1.05] mb-6">
              Websites Built to
              <span className="text-white italic">
                Perform
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              Business websites for companies, schools, hospitals, NGOs, and government institutions, built for speed, search visibility, and clear enquiries.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book-demo">
                <Button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/80 hover:border-white hover:bg-white/10 transition-all duration-200">
                  Request a Proposal
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* OVERVIEW SECTION */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-6">
                  Websites Built for Trust, Speed, and Enquiries
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  We design, build, and host websites for businesses, schools, hospitals, NGOs, and government institutions across East Africa. Each site is structured for clear content, fast loading, search visibility, and easy handover.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Custom Design from Scratch</h4>
                      <p className="text-gray-600">No templates — 100% unique designs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Mobile-First, Fully Responsive</h4>
                      <p className="text-gray-600">Perfect on all devices and screen sizes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-gold flex-shrink-0 mt-1" size={20} />
                    <div>
                      <h4 className="font-semibold text-navy">Fast Production Hosting</h4>
                      <p className="text-gray-600">Managed hosting for fast, reliable delivery</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">250+</div>
                  <div className="text-sm text-gray-600">Websites Delivered</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime Guaranteed</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">2-6</div>
                  <div className="text-sm text-gray-600">Weeks Delivery</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-sm">
                  <div className="text-3xl font-bold text-gold mb-2">SEO</div>
                  <div className="text-sm text-gray-600">Optimised from Day 1</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT'S INCLUDED */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                What's Included in Every Website
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Comprehensive features that ensure your website succeeds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Palette className="text-gold" size={32} />,
                  title: "Custom Design from Scratch",
                  description: "Unique design aligned with your brand, with no templates or themes."
                },
                {
                  icon: <Smartphone className="text-gold" size={32} />,
                  title: "Mobile-First, Fully Responsive",
                  description: "Perfect experience on smartphones, tablets, laptops, and desktops."
                },
                {
                  icon: <Rocket className="text-gold" size={32} />,
                  title: "Fast Managed Hosting",
                  description: "Fast loading speeds with reliable managed infrastructure."
                },
                {
                  icon: <Lock className="text-gold" size={32} />,
                  title: "SSL Security + 99.9% Uptime Guaranteed",
                  description: "Enterprise-grade security and guaranteed uptime for your peace of mind."
                },
                {
                  icon: <Search className="text-gold" size={32} />,
                  title: "SEO Optimised from Day One",
                  description: "Built to rank on Google with proper SEO structure and optimisation."
                },
                {
                  icon: <Database className="text-gold" size={32} />,
                  title: "Content Management System",
                  description: "Easy-to-use CMS for updating content without technical knowledge."
                },
                {
                  icon: <BarChart className="text-gold" size={32} />,
                  title: "Analytics & Performance Tracking",
                  description: "Google Analytics setup and performance monitoring dashboard."
                },
                {
                  icon: <Mail className="text-gold" size={32} />,
                  title: "Business Email Setup",
                  description: "Custom email addresses (yourname@yourdomain.com) included."
                },
                {
                  icon: <Shield className="text-gold" size={32} />,
                  title: "Security & Backup",
                  description: "Daily automated backups and advanced security protection."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-ice rounded-xl p-8 hover:bg-gold/5 hover:shadow-lg transition-all duration-300 group">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-navy mb-3 group-hover:text-gold transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ServicePricingSection service={servicePricingBySlug['website-development']} />

        {/* OUR PROCESS */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Our 5-Step Process
              </h2>
              <p className="text-light-blue max-w-2xl mx-auto">
                A proven methodology for website success.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gold/30 transform -translate-y-1/2"></div>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
                {[
                  { step: 1, title: "Discovery", description: "Understanding your needs and goals" },
                  { step: 2, title: "Design", description: "Creating your custom design" },
                  { step: 3, title: "Development", description: "Building your website" },
                  { step: 4, title: "Testing", description: "Quality assurance and review" },
                  { step: 5, title: "Launch", description: "Going live with support" }
                ].map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center text-navy font-bold text-xl mx-auto mb-4 relative z-10">
                      {item.step}
                    </div>
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-light-blue text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERY FOUNDATION */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Delivery Foundation
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Built around the practical foundations a serious public website needs before launch.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                "Responsive Layout",
                "Search Metadata",
                "Performance Review",
                "Secure Delivery",
                "Content Handover",
                "Analytics Setup",
                "Form Routing",
                "Launch Support"
              ].map((item, index) => (
                <div key={index} className="bg-ice rounded-lg p-4 text-center">
                  <div className="font-semibold text-navy">{item}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY MYLESCORP */}
        <section className="py-20 bg-off-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-navy mb-4">
                Why Choose MylesCorp for Your Website
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Compare our approach with alternatives.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left p-4">Feature</th>
                    <th className="text-center p-4">MylesCorp</th>
                    <th className="text-center p-4">Website Builders</th>
                    <th className="text-center p-4">Freelancers</th>
                    <th className="text-center p-4">Agencies</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "Custom Design (No Templates)", mylescorp: "✓", builders: "✗", freelancers: "✓", agencies: "✓" },
                    { feature: "East African Context", mylescorp: "✓", builders: "✗", freelancers: "✓", agencies: "?" },
                    { feature: "Mobile-First Design", mylescorp: "✓", builders: "?", freelancers: "?", agencies: "✓" },
                    { feature: "SEO Optimisation", mylescorp: "✓", builders: "✗", freelancers: "?", agencies: "✓" },
                    { feature: "Performance Optimisation", mylescorp: "✓", builders: "✗", freelancers: "?", agencies: "?" },
                    { feature: "Security (SSL + Backup)", mylescorp: "✓", builders: "?", freelancers: "?", agencies: "✓" },
                    { feature: "Local Support & Training", mylescorp: "✓", builders: "✗", freelancers: "?", agencies: "✓" },
                    { feature: "Fixed Pricing", mylescorp: "✓", builders: "✓", freelancers: "✓", agencies: "✗" },
                    { feature: "99.9% Uptime Guarantee", mylescorp: "✓", builders: "?", freelancers: "✗", agencies: "?" },
                    { feature: "Professional Delivery Standards", mylescorp: "✓", builders: "✗", freelancers: "✗", agencies: "?" }
                  ].map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-ice' : 'bg-white'}>
                      <td className="p-4 font-medium">{row.feature}</td>
                      <td className="p-4 text-center text-gold font-bold">{row.mylescorp}</td>
                      <td className="p-4 text-center">{row.builders}</td>
                      <td className="p-4 text-center">{row.freelancers}</td>
                      <td className="p-4 text-center">{row.agencies}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                Client Testimonials
              </h2>
              <p className="text-light-blue max-w-2xl mx-auto">
                Hear what our clients say about their new websites.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Our new website improved how prospects understand our services and made enquiries easier to manage.",
                  author: "Sarah Wanjiru",
                  role: "CEO, Retail Business",
                  rating: 5
                },
                {
                  quote: "The team understood our school's needs and gave parents a clearer way to review programmes and ask about admissions.",
                  author: "James Muriuki",
                  role: "Principal, Private School",
                  rating: 5
                },
                {
                  quote: "Reliable, practical, and well structured. Our hospital website now gives patients a clearer path to request appointments.",
                  author: "Dr. Grace Ochieng",
                  role: "Medical Director, Private Hospital",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="text-gold fill-current" size={16} />
                    ))}
                  </div>
                  <Quote className="text-gold/50 mb-4" size={32} />
                  <p className="text-white mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-light-blue text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-navy">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              Ready for a Website Your Team Can Stand Behind?
            </h2>
            <p className="text-light-blue text-xl mb-8 max-w-2xl mx-auto">
              Transforming Industries, Empowering Generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link href="/book-demo">
                <Button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                  Book a Discovery Call
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link href="/contact" className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/80 hover:border-white hover:bg-white/10 transition-all duration-200 inline-flex items-center justify-center">
                Request a Proposal
              </Link>
            </div>
            <div className="text-light-blue text-sm">
              <p>Email: info@mylescorptech.com | Phone: +254 743 993 715</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
