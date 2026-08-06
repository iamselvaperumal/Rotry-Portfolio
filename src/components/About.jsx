import { motion } from 'framer-motion'
import { ArrowRight, Award, FolderKanban, Users } from 'lucide-react'
import SectionHeading from './ui/SectionHeading'
import { NavyButton } from './ui/GoldButton'
import RotaryLogo from './ui/RotaryLogo'
import Stats from './Stats'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -left-8 top-0 opacity-10">
              <RotaryLogo className="h-48 w-48 text-gold" color="#D4AF37" />
            </div>
            <SectionHeading title="About Our Club" align="left" className="mb-6" />
            <p className="mb-4 text-base leading-relaxed text-grey-text">
              Rotary Club of Salem Happy is a dynamic group of business and professional
              leaders united by a shared commitment to serve our community. Since our
              charter, we have been at the forefront of humanitarian projects, youth
              development, and community welfare initiatives across Salem.
            </p>
            <p className="mb-8 text-base leading-relaxed text-grey-text">
              Our members bring diverse expertise and a passion for making a difference.
              Through fellowship, leadership, and service, we strive to create positive,
              lasting change in the lives of those we serve.
            </p>
            <NavyButton href="#about">
              Know More About Us <ArrowRight size={16} className="ml-1 inline" />
            </NavyButton>
          </motion.div>

          <Stats />
        </div>
      </div>
    </section>
  )
}

export const statsData = [
  {
    icon: Users,
    value: '41+',
    label: 'Members',
    description: 'Dedicated Rotarians serving our community',
    variant: 'navy',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years',
    description: 'Years of dedicated community service',
    variant: 'gold',
  },
  {
    icon: FolderKanban,
    value: '50+',
    label: 'Projects',
    description: 'Successful humanitarian projects completed',
    variant: 'navy',
  },
  {
    icon: Award,
    value: '7+',
    label: 'Focus Areas',
    description: 'Areas of focus for community impact',
    variant: 'gold',
  },
]
