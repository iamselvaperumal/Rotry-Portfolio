import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import GoldButton from './ui/GoldButton'
import RotaryLogo from './ui/RotaryLogo'

export default function CTA() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-navy py-20 md:py-28"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(6,22,43,0.95) 0%, rgba(6,22,43,0.7) 50%, rgba(6,22,43,0.95) 100%), url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80)',
        }}
      />

      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10">
        <RotaryLogo className="h-[400px] w-[400px] text-gold" color="#D4AF37" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left"
        >
          <div className="max-w-2xl">
            <h2 className="font-heading text-3xl font-bold uppercase leading-tight text-white md:text-4xl lg:text-5xl">
              Together, We Can Create{' '}
              <span className="text-gold">A Better Tomorrow</span>
            </h2>
            <p className="mt-4 text-base text-white/75 md:text-lg">
              Join hands with us to make a lasting difference in our community.
              Become a Rotarian and be part of something greater.
            </p>
          </div>

          <GoldButton href="#contact" className="shrink-0 px-10 py-4 text-lg">
            Become A Member <ArrowRight size={20} />
          </GoldButton>
        </motion.div>
      </div>
    </section>
  )
}
