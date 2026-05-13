import { Layout } from '@/components/layout/Layout'
import { Button } from '@/components/ui/Button'
import { FileText, ArrowRight, BookOpen } from 'lucide-react'
import { SimpleReveal } from '@/components/ui/SimpleReveal'

export const metadata = {
  title: 'Documentation | MylesCorp Technologies',
  description: 'Comprehensive documentation for MylesCorp products and services. Get started with our guides, API references, and tutorials.',
}

export default function DocsPage() {
  return (
    <Layout>
      <section className="relative py-24 md:py-32 overflow-hidden bg-navy-deep">
        {/* Grid texture overlay — always present on dark sections */}
        <div className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />

        {/* Radial glow top-right */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(26,57,91,0.6) 0%, transparent 70%)',
          }}
        />

        {/* Radial glow bottom-left */}
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
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <SimpleReveal delay={0.2}>
            {/* Eyebrow label */}
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-gold" />
              <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
                DOCUMENTATION
              </span>
              <div className="w-8 h-0.5 bg-gold" />
            </div>

            {/* Main heading */}
            <h1 className="font-display font-bold text-white text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-6">
              Developer{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold to-gold-light italic">
                Docs
              </span>
            </h1>

            {/* Subtitle */}
            <p className="font-body text-ice text-xl md:text-2xl leading-9 max-w-2xl mx-auto mb-10">
              Comprehensive guides, API references, and tutorials to help you get the most 
              out of MylesCorp products.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gold text-navy font-body font-bold text-[15px] tracking-[0.4px] px-9 py-4 rounded-md hover:bg-gold-light hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(199,150,57,0.3)] active:scale-[0.98] transition-all duration-200">
                <BookOpen className="mr-2 w-5 h-5" />
                Browse Documentation
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="bg-transparent text-white font-body font-semibold text-[15px] px-9 py-4 rounded-md border border-white/20 hover:border-gold hover:text-gold transition-all duration-200">
                API Reference
              </button>
            </div>
          </SimpleReveal>
        </div>
      </section>
      
      <SimpleReveal delay={0.4}>
        <div className="mt-16 text-center">
          <p className="font-body text-muted-blue text-sm">
            Our documentation is currently being updated with the latest features and improvements.
          </p>
          <p className="font-body text-muted-blue text-sm mt-2">
            Need immediate assistance?{' '}
            <a href="/contact" className="text-gold hover:text-gold-light transition-colors">
              Contact our support team
            </a>
          </p>
        </div>
      </SimpleReveal>
    </Layout>
  )
}
