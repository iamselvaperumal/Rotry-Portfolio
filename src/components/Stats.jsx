import { motion } from 'framer-motion'
import { statsData } from './About'
import { staggerContainer, fadeUp } from '../utils/helpers'

export default function Stats() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      {statsData.map((stat, index) => {
        const Icon = stat.icon
        const isNavy = stat.variant === 'navy'

        return (
          <motion.article
            key={stat.label}
            variants={fadeUp}
            custom={index * 0.1}
            whileHover={{ scale: 1.03, y: -4 }}
            transition={{ duration: 0.3 }}
            className={`flex min-h-[180px] flex-col justify-center rounded-[20px] p-6 shadow-[var(--shadow-card)] ${
              isNavy
                ? 'bg-navy text-white'
                : 'bg-gold text-navy'
            }`}
          >
            <Icon
              size={36}
              className={`mb-3 ${isNavy ? 'text-gold' : 'text-navy'}`}
            />
            <p className="font-heading text-4xl font-bold md:text-5xl">{stat.value}</p>
            <p className="mt-1 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
            <p className={`mt-2 text-xs leading-relaxed ${isNavy ? 'text-white/70' : 'text-navy/70'}`}>
              {stat.description}
            </p>
          </motion.article>
        )
      })}
    </motion.div>
  )
}
