'use client'

import { motion } from 'framer-motion'
import { MYLES_VALUES } from '@/lib/constants/values'

export function MYLESValues() {
  return (
    <section className="relative py-20 bg-navy overflow-hidden">

      {/* Grid texture */}
      <div className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(199,150,57,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199,150,57,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Radial glows */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(26,57,91,0.5) 0%, transparent 65%)'}}
      />
      <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{background:'radial-gradient(circle, rgba(199,150,57,0.06) 0%, transparent 65%)'}}
      />

      {/* Gold top rule */}
      <div className="absolute top-0 left-0 right-0 h-[3px]"
        style={{background:'linear-gradient(90deg, transparent, #C79639, transparent)'}}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-gold" />
            <span className="text-gold text-[11px] font-bold tracking-[2.5px] uppercase font-body">
              Core Values
            </span>
            <div className="w-8 h-0.5 bg-gold" />
          </div>
          <h2 className="font-display font-bold text-white text-4xl md:text-5xl mb-6">
            The{' '}
            <span className="text-white italic">
              M.Y.L.E.S.
            </span>{' '}
            Principle
          </h2>
          <p className="font-body font-light text-light-blue text-lg leading-relaxed max-w-2xl mx-auto">
            Our core values are not just words on a page. They are a living framework that guides every decision, every product, and every interaction at MylesCorp Technologies.
          </p>
        </motion.div>

        {/* M.Y.L.E.S. acronym display row */}
        <motion.div
          className="flex justify-center items-center gap-3 mb-16 flex-wrap"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {MYLES_VALUES.map((item, i) => (
            <motion.div key={item.letter} className="contents">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-2xl text-gold border border-gold/25 bg-gold/8 hover:bg-gold/18 hover:border-gold hover:-translate-y-1 transition-all duration-200"
              >
                {item.letter}
              </div>
              {i < MYLES_VALUES.length - 1 && (
                <div
                  key={`dot-${i}`}
                  className="w-2 h-2 rounded-full bg-gold/30"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Five value cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
              },
            },
          }}
        >
          {MYLES_VALUES.map((item) => (
            <motion.div
              key={item.letter}
              className="bg-[#0d1929] border border-gold/15 rounded-2xl overflow-hidden flex flex-col group relative hover:-translate-y-2 hover:border-gold/50 hover:shadow-[0_24px_60px_rgba(0,0,0,0.4)] transition-all duration-300"
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: {
                  opacity: 1, y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
            >
              {/* Gold top accent — shows on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{background:
                  'linear-gradient(90deg, #C79639, transparent)'}}
              />

              {/* Navy card header */}
              <div className="bg-gradient-to-br from-navy to-navy-dark p-6 text-center">
                <div className="w-14 h-14 rounded-xl mx-auto mb-4 bg-gold/12 border border-gold/30 flex items-center justify-center font-display font-bold text-3xl text-gold">
                  {item.letter}
                </div>
                <h3 className="font-display font-bold text-white text-[16px] leading-tight mb-1 group-hover:text-gold transition-colors duration-300">
                  {item.value}
                </h3>
                <p className="text-gold text-[10px] font-bold tracking-[1.5px] uppercase font-body">
                  {item.letter} stands for
                </p>
              </div>

              {/* Card body */}
              <div className="p-5 flex-grow flex flex-col gap-4">
                <p className="text-light-blue font-body font-light text-[13px] leading-[1.75] flex-grow">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {item.keywords.map((kw) => (
                    <span
                      key={kw}
                      className="px-2.5 py-1 bg-ice border border-navy/10 rounded-full text-navy text-[10px] font-bold tracking-[0.3px]"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom principle strip */}
        <motion.div
          className="mt-12 bg-gradient-to-br from-navy to-navy-dark border border-gold/20 rounded-2xl p-10 text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold" />
          <p className="text-[10px] font-bold tracking-[2.5px] uppercase text-muted-blue font-body mb-3">
            The M.Y.L.E.S. Principle
          </p>
          <h3 className="font-display font-bold text-white text-2xl md:text-3xl mb-4">
            More than values —{' '}
            <span className="text-gold italic">a way of life</span>
          </h3>
          <p className="font-body font-light text-light-blue text-[15px] leading-relaxed max-w-2xl mx-auto">
            The M.Y.L.E.S. Principle is a living framework that unites our entire team across every product, every division, and every interaction. It is not what we say — it is how we show up, every single day.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
