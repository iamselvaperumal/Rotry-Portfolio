import { motion } from 'framer-motion'
import { Globe2, Handshake, Heart, Users, ArrowRight, Award, Sparkles } from 'lucide-react'
import heroBg from '../assets/hero-bg.png'
import agilanProfile from '../assets/President-image.png'
import rotaryBrandLogo from '../assets/rotry-Logo.png'
import GoldButton from './ui/GoldButton'
import { getPlaceholderImage } from '../utils/helpers'

const heroIcons = [
  { label: 'Community Service', icon: Heart },
  { label: 'Leadership', icon: Users },
  { label: 'Friendship', icon: Handshake },
  { label: 'Global Impact', icon: Globe2 },
]

export default function Hero() {
  const presidentFallback = getPlaceholderImage('Rtn K Suresh', 600)

  return (
    <section
      id="home"
      className="relative mt-[90px] min-h-[680px] overflow-hidden bg-navy"
    >
      {/* Background Image Container with hero-bg.png */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Rotary Club Hero Background"
          className="h-full w-full object-cover object-center"
        />
        {/* Layered Gradient Overlays for High Contrast & Sunset Ambient Lighting */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/85 to-navy/90" />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-transparent to-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold/15 via-transparent to-transparent opacity-60" />
      </div>

      <div className="container-custom relative z-10 grid min-h-[580px] grid-cols-1 items-center gap-4 py-6 lg:grid-cols-12 lg:gap-6 lg:py-6">

        {/* Left Column: Headline & Content (4 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-4 flex flex-col justify-center"
        >
          {/* Rotary Badge Kicker with Official Brand Logo */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-navy-secondary/85 px-4 py-1.5 backdrop-blur-md w-fit shadow-md">
            <img src={rotaryBrandLogo} alt="Rotary Logo" className="h-6 w-6 object-contain filter drop-shadow" />
            <span className="text-xs font-bold uppercase tracking-widest text-gold-light">
              Rotary Club of Salem Happy
            </span>
          </div>

          <h1 className="font-heading text-4xl font-extrabold uppercase leading-[1.15] text-white md:text-5xl lg:text-[40px] xl:text-[46px]">
            <span className="block text-gold drop-shadow-md">Together, We</span>
            <span className="block text-gold-light">Create Hope</span>
            <span className="block text-white">In The World</span>
          </h1>

          <div className="my-4 flex items-center gap-3">
            <span className="h-0.5 w-10 bg-gradient-to-r from-gold to-transparent" />
            <p className="font-heading text-base italic text-gold md:text-lg font-semibold tracking-wide">
              Service Above Self
            </p>
            <span className="h-0.5 w-10 bg-gradient-to-l from-gold to-transparent" />
          </div>

          <p className="mb-6 max-w-md text-xs leading-relaxed text-white/90 md:text-sm">
            Rotary Club of Salem Happy brings together business and professional leaders
            to provide humanitarian service, encourage high ethical standards, and help
            build goodwill and peace in our community.
          </p>

          {/* Action Buttons */}
          <div className="mb-8 flex flex-wrap gap-3">
            <GoldButton href="#projects">
              Explore Projects <ArrowRight size={16} />
            </GoldButton>
            <a
              href="#join"
              className="inline-flex items-center justify-center rounded-full border-2 border-gold/60 bg-navy/60 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-gold shadow-lg backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-gold hover:text-navy"
            >
              Join Our Club
            </a>
          </div>

          {/* Core Pillars Grid */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
            {heroIcons.map(({ label, icon: Icon }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex flex-col items-center gap-1.5 text-center rounded-xl border border-white/10 bg-navy-secondary/60 p-2.5 backdrop-blur-sm transition-all duration-300 hover:border-gold/40 hover:bg-navy-secondary/90"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-gold/50 bg-gold/10 text-gold">
                  <Icon size={18} />
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-gold-light">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Center Column: 75% Enlarged Grand President Portrait (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center lg:col-span-5 mx-auto w-full z-20"
        >
          {/* Radiant Backdrop Glow & Official Rotary Brand Wheel Backdrop */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0">
            <img
              src={rotaryBrandLogo}
              alt="Rotary Brand Logo Background"
              className="h-[520px] w-[520px] md:h-[600px] md:w-[600px] lg:h-[660px] lg:w-[660px] object-contain opacity-25 filter drop-shadow-[0_0_50px_rgba(212,175,55,0.45)] animate-spin-slow"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gold/30 via-gold-accent/20 to-transparent blur-3xl" />
          </div>

          {/* 75% Enlarged Person Image Cutout */}
          <div className="relative z-10 flex flex-col items-center justify-center -mt-45">
            <img
              src={agilanProfile}
              onError={(e) => {
                e.currentTarget.src = presidentFallback
              }}
              alt="President Profile - Rtn.PHF.Dr.R.RAGAVENDRA BALAJI"
              className="h-[500px] sm:h-[580px] md:h-[630px] lg:h-[680px] xl:h-[720px] w-auto max-w-full object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)] transition-transform duration-700 hover:scale-[1.02]"
            />

            {/* Floating President Badge Overlay */}
            <div className="-mt-8 z-30 flex items-center gap-3 rounded-2xl border border-gold/70 bg-navy/95 px-5 py-2.5 text-center shadow-[0_15px_40px_rgba(0,0,0,0.8)] backdrop-blur-md border-t-2 border-t-gold">
              <img src={rotaryBrandLogo} alt="Rotary Logo" className="h-7 w-7 object-contain drop-shadow" />
              <div className="text-left">
                <div className="flex items-center gap-1.5 text-gold text-[10px] font-bold uppercase tracking-widest">
                  <Award size={13} /> Club President
                </div>
                <h3 className="font-heading text-base md:text-lg font-bold text-white leading-tight tracking-wide">
                  Rtn.PHF.Dr.R.RAGAVENDRA BALAJI
                </h3>
                <p className="text-[11px] text-gold-light font-medium">Rotary Salem Happy • 2025–2026</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: President Message Card with Brand Logo (3 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:col-span-3 flex flex-col justify-center"
        >
          <div className="rounded-[24px] border border-gold/60 bg-navy-secondary/85 p-6 shadow-[0_0_40px_rgba(212,175,55,0.18)] backdrop-blur-md md:p-7">
            <div className="flex items-center justify-between mb-3">
              <span className="rounded-full bg-gold/15 px-3 py-1 text-[10px] font-bold uppercase tracking-[2px] text-gold border border-gold/30">
                President's Message
              </span>
              <Sparkles className="h-4 w-4 text-gold" />
            </div>

            <h2 className="font-heading text-large font-bold text-white md:text-large">
              Rtn.PHF.Dr.R.RAGAVENDRA BALAJI
            </h2>
            <p className="text-xs text-gold-light font-medium mt-0.5">Salem Happy Rotary Club</p>

            <div className="my-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-gold/40" />
              <span className="text-xs font-semibold text-gold tracking-widest uppercase">2025 – 2026</span>
              <span className="h-px flex-1 bg-gold/40" />
            </div>

            <div className="relative pl-5">
              <span className="absolute left-0 top-0 font-heading text-4xl leading-none text-gold/50">
                “
              </span>
              <p className="text-xs italic leading-relaxed text-white/90 md:text-sm">
                Together, we can create lasting change in our community. Service above self
                is not just our motto — it is our way of life.
              </p>
            </div>

            <div className="mt-6 border-t border-gold/20 pt-4 flex items-center justify-between">
              <div>
                <p className="font-heading text-sm font-bold text-gold">Rotary Salem Happy</p>
                <p className="text-[10px] uppercase tracking-widest text-white/60">District Leadership</p>
              </div>
              <img src={rotaryBrandLogo} alt="Rotary Brand Logo" className="h-9 w-9 object-contain drop-shadow" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}



