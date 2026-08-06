import { useState } from 'react'
import { motion } from 'framer-motion'
import allMembers from '../data/allMembers.json'
import SectionHeading from './ui/SectionHeading'
import { getPlaceholderImage } from '../utils/helpers'

const CATEGORIES = ['Office Bearers', 'Club Directors', 'Committee Chair']

const CATEGORY_COLORS = {
  'Office Bearers': 'bg-gold/20 text-gold border border-gold/40',
  'Club Directors': 'bg-blue-400/20 text-blue-300 border border-blue-400/40',
  'Committee Chair': 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/40',
}

// Card width (190) + left+right margin (12+12) = 214px per card
const CARD_W = 214

function MemberCard({ member }) {
  const badgeCls = CATEGORY_COLORS[member.category] || CATEGORY_COLORS['Office Bearers']
  return (
    <div className="flex-shrink-0 w-[190px] mx-3 group">
      <div className="overflow-hidden rounded-[18px] border border-gold/20 bg-navy-secondary shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:border-gold/60 transition-all duration-300 h-full">
        {/* Photo */}
        <div className="aspect-[4/5] overflow-hidden bg-navy/60">
          <img
            src={member.image || getPlaceholderImage(member.name, 300)}
            alt={member.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        {/* Info */}
        <div className="px-3 py-3 text-center">
          <span className={`inline-block rounded-full px-2 py-0.5 text-[8px] font-bold uppercase tracking-widest ${badgeCls}`}>
            {member.category}
          </span>
          <h3 className="mt-2 font-heading text-xs font-bold text-white leading-snug line-clamp-2">
            {member.name}
          </h3>
          <p className="mt-1 text-[10px] font-semibold text-gold/80 uppercase tracking-wide leading-tight line-clamp-2">
            {member.designation}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Leadership() {
  const [activeTab, setActiveTab] = useState('All')
  const [paused, setPaused] = useState(false)

  const tabs = ['All', ...CATEGORIES]

  const members = activeTab === 'All'
    ? allMembers
    : allMembers.filter((m) => m.category === activeTab)

  // Duplicate enough times so the track is always wide — 4 copies minimum
  const copies = Math.max(4, Math.ceil(40 / members.length) + 1)
  const track = Array.from({ length: copies }, () => members).flat()

  // One full set width in px (used for the translateX shift)
  const setWidth = members.length * CARD_W
  // Duration: ~5px/s, so longer list = slower (looks consistent per card)
  const duration = Math.max(12, members.length * 3.5)

  const keyframeName = `marquee-${activeTab.replace(/\s+/g, '')}`

  return (
    <section id="leadership" className="section-padding bg-navy overflow-hidden">
      {/* Inject keyframe with correct pixel value */}
      <style>{`
        @keyframes ${keyframeName} {
          from { transform: translateX(0); }
          to   { transform: translateX(-${setWidth}px); }
        }
      `}</style>

      <div className="container-custom">
        <SectionHeading
          title="Our Leadership"
          subtitle="Meet the dedicated Rotarians leading Rotary Club of Salem Happy – 2025–2026"
          light
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                ? 'bg-gold text-navy shadow-[0_4px_20px_rgba(212,175,55,0.45)]'
                : 'border border-gold/30 text-gold/70 hover:border-gold hover:text-gold'
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Member count */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center mb-8"
        >
          <span className="rounded-full border border-gold/30 bg-navy-secondary/80 px-4 py-1.5 text-xs text-gold/80 font-semibold">
            {members.length} Members
          </span>
        </motion.div>
      </div>

      {/* ── Single-line infinite marquee ── */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Fade-edge masks */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-navy to-transparent" />

        {/* Scrolling track */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `${keyframeName} ${duration}s linear infinite`,
              animationPlayState: paused ? 'paused' : 'running',
              width: `${track.length * CARD_W}px`,
            }}
          >
            {track.map((member, i) => (
              <MemberCard key={`${member.id}-${i}`} member={member} />
            ))}
          </div>
        </div>
      </motion.div>

      {/* Hint */}
      <div className="container-custom mt-8 flex justify-center">
        <p className="text-xs text-white/30 italic">Designed & Developed By BIT BYTE TECHNOLOGIES</p>
      </div>
    </section>
  )
}
