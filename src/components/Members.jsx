import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Search } from 'lucide-react'
import membersData from '../data/members.json'
import SectionHeading from './ui/SectionHeading'
import GoldButton from './ui/GoldButton'
import maleIcon from '../assets/male-Profile-icon.png'
import femaleIcon from '../assets/Female-profile-icon.png'
import { getPlaceholderImage, staggerContainer, fadeUp } from '../utils/helpers'

const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const categories = ['All', 'Office Bearer', 'Club Director', 'Committee Chair', 'Leadership']

export default function Members() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [letter, setLetter] = useState('All')

  const filtered = useMemo(() => {
    return membersData.filter((member) => {
      const matchesSearch =
        member.name.toLowerCase().includes(search.toLowerCase()) ||
        member.role.toLowerCase().includes(search.toLowerCase())
      const matchesCategory = category === 'All' || member.category === category
      const matchesLetter =
        letter === 'All' ||
        member.name.replace(/^Rtn\.\s*/i, '').charAt(0).toUpperCase() === letter

      return matchesSearch && matchesCategory && matchesLetter
    })
  }, [search, category, letter])

  const getGenderIcon = (name) => {
    const lower = name.toLowerCase()
    const femaleNames = ['anupriya', 'amsa', 'ramya', 'dr.vijayalakshmi', 'uma']
    const isFemale = femaleNames.some((female) => lower.includes(female))
    return isFemale ? femaleIcon : maleIcon
  }

  return (
    <section id="members" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Our Members"
          subtitle="Meet the dedicated Rotarians who make our club's mission possible."
        />

        <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-grey-text" size={18} />
            <input
              type="search"
              placeholder="Search members by name or role..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-[50px] border border-gold/30 bg-white py-3 pl-11 pr-4 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="rounded-[50px] border border-gold/30 bg-white px-5 py-3 text-sm outline-none focus:border-gold"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setLetter('All')}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
              letter === 'All'
                ? 'bg-gold text-navy'
                : 'border border-gold/30 text-grey-text hover:border-gold hover:text-gold'
            }`}
          >
            All
          </button>
          {alphabet.map((char) => (
            <button
              key={char}
              type="button"
              onClick={() => setLetter(char)}
              className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all ${
                letter === char
                  ? 'bg-gold text-navy'
                  : 'border border-gold/30 text-grey-text hover:border-gold hover:text-gold'
              }`}
            >
              {char}
            </button>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((member, index) => (
            <motion.article
              key={member.id}
              variants={fadeUp}
              custom={index * 0.05}
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[20px] border border-gold/20 bg-white shadow-[var(--shadow-card)]"
            >
              <div className="flex flex-col items-center p-5">
                <img
                  src={member.image || getGenderIcon(member.name)}
                  alt={member.name}
                  className="h-24 w-24 rounded-full border-3 border-gold object-cover bg-[#e0b230]"
                />
                <div className="mt-3 flex items-center justify-center gap-2 text-center">
                  <h3 className="text-center font-heading text-sm font-bold text-navy">
                    {member.name}
                  </h3>
                  <img
                    src={getGenderIcon(member.name)}
                    alt="Gender icon"
                    className="h-4 w-4 object-contain"
                  />
                </div>
                <p className="mt-1 text-center text-xs font-semibold uppercase text-gold">
                  {member.role}
                </p>
                <p className="mt-1 text-xs text-grey-text">{member.category}</p>
                <GoldButton
                  href={`mailto:${member.email}`}
                  className="mt-4 w-full justify-center py-2 text-xs"
                  icon={Mail}
                >
                  Contact
                </GoldButton>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="py-12 text-center text-grey-text">No members found matching your criteria.</p>
        )}
      </div>
    </section>
  )
}
