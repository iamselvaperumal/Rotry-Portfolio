import { useState } from 'react'
import { motion } from 'framer-motion'
import allMembers from '../data/allMembers.json'
import SectionHeading from './ui/SectionHeading'
import maleIcon from '../assets/male-Profile-icon.png'
import femaleIcon from '../assets/Female-profile-icon.png'

const CATEGORIES = ['Office Bearers', 'Club Directors', 'Committee Chair']

// Card width (240px) + margin (mx-3 = 12px + 12px) = 264px per card
const CARD_W = 264

function MemberCard({ member }) {
  const getProfileImage = (member) => {
    if (member.image && member.image.trim() !== '') return member.image
    const lower = member.name.toLowerCase()
    const femaleNames = ['anupriya', 'amsa', 'ramya', 'dr.vijayalakshmi', 'vijayalakshmi', 'uma']
    const isFemale = femaleNames.some((female) => lower.includes(female))
    return isFemale ? femaleIcon : maleIcon
  }

  return (
    <div className="flex-shrink-0 w-[240px] h-[340px] mx-3 group">
      <div className="flex h-full flex-col overflow-hidden rounded-[20px] border border-gold/30 bg-[#051124] shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-gold/70 group-hover:shadow-[0_10px_35px_rgba(212,175,55,0.25)]">
        {/* Photo Container - Solid Gold Yellow Background */}
        <div className="relative h-[62%] w-full overflow-hidden bg-[#e0b230] flex items-end justify-center">
          <img
            src={getProfileImage(member)}
            alt={member.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Member Details - Dark Navy Container */}
        <div className="flex flex-1 flex-col items-center justify-between p-3.5 text-center bg-[#07152B]">
          {/* Category Badge */}
          <span className="inline-block rounded-full border border-gold/40 bg-navy/60 px-3 py-0.5 text-[8.5px] font-bold uppercase tracking-[0.16em] text-gold">
            {member.category}
          </span>

          <div className="flex flex-col items-center gap-1 w-full my-auto">
            {/* Member Name */}
            <h3 className="font-heading text-[11.5px] font-extrabold text-white uppercase leading-snug line-clamp-2 tracking-wide">
              {member.name}
            </h3>

            {/* Designation */}
            <p className="text-[9.5px] font-bold text-gold uppercase tracking-[0.15em] leading-tight line-clamp-2">
              {member.designation}
            </p>
          </div>

          {/* Underline Bar */}
          <div className="w-8 h-[2px] bg-gold/70 rounded-full mt-1" />
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

  // Duplicate enough times so the track is always wide for smooth infinite scrolling
  const copies = Math.max(6, Math.ceil(60 / members.length) + 1)
  const track = Array.from({ length: copies }, () => members).flat()

  const setWidth = members.length * CARD_W
  const duration = Math.max(40, members.length * 6)

  const keyframeName = `marquee-${activeTab.replace(/\s+/g, '')}`

  return (
    <section id="leadership" className="section-padding bg-navy overflow-hidden">
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

        {/* Decorative Top Accent Line with Diamond */}
        <div className="flex items-center justify-center gap-3 mb-8 -mt-4">
          <div className="h-[1px] w-24 md:w-36 bg-gradient-to-r from-transparent to-gold/50" />
          <div className="w-2 h-2 rotate-45 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
          <div className="h-[1px] w-24 md:w-36 bg-gradient-to-l from-transparent to-gold/50" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-6 py-2 text-xs font-extrabold uppercase tracking-widest transition-all duration-300 ${activeTab === tab
                ? 'bg-gold text-navy shadow-[0_0_20px_rgba(212,175,55,0.45)] border border-gold'
                : 'border border-gold/40 text-gold/80 hover:border-gold hover:text-gold hover:bg-gold/10'
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
          <span className="rounded-full border border-gold/40 bg-navy-secondary/90 px-5 py-1.5 text-xs text-gold font-bold tracking-wider shadow-inner">
            {members.length} Members
          </span>
        </motion.div>
      </div>

      {/* ── Continuous Marquee ── */}
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
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-navy to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-navy to-transparent" />

        {/* Scrolling track */}
        <div className="overflow-hidden py-4">
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

      {/* Decorative Bottom Accent Line with Diamond */}
      <div className="flex items-center justify-center gap-3 mt-8 mb-4">
        <div className="h-[1px] w-24 md:w-36 bg-gradient-to-r from-transparent to-gold/50" />
        <div className="w-2 h-2 rotate-45 bg-gold shadow-[0_0_8px_rgba(212,175,55,0.8)]" />
        <div className="h-[1px] w-24 md:w-36 bg-gradient-to-l from-transparent to-gold/50" />
      </div>

      {/* Footer Attribution */}
      <div className="container-custom flex justify-center text-center">
        <span className="text-[11px] font-bold text-gold/70 tracking-widest uppercase italic">
          Designed & Developed By <span className="text-gold font-extrabold">BIT BYTE TECHNOLOGIES</span>
        </span>
      </div>
    </section>
  )
}

