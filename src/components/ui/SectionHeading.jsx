import { motion } from 'framer-motion'
import { Diamond } from 'lucide-react'

export default function SectionHeading({
  title,
  subtitle,
  light = false,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className={`mb-12 flex flex-col ${alignClass} ${className}`}
    >
      <div className={`flex w-full max-w-2xl items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className={`h-px flex-1 bg-gradient-to-r from-transparent ${light ? 'to-gold' : 'to-gold'}`} />
        <Diamond size={14} className="text-gold shrink-0" fill="currentColor" />
        <span className={`h-px flex-1 bg-gradient-to-l from-transparent ${light ? 'to-gold' : 'to-gold'}`} />
      </div>
      <h2
        className={`mt-4 font-heading text-[28px] font-bold uppercase tracking-[3px] md:text-[36px] lg:text-[42px] ${
          light ? 'text-gold' : 'text-gold'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-3 max-w-2xl text-base ${light ? 'text-white/80' : 'text-grey-text'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-3 flex w-full max-w-xl items-center gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
        <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/60" />
        <span className="h-1.5 w-1.5 rotate-45 bg-gold" />
        <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/60" />
      </div>
    </motion.div>
  )
}
