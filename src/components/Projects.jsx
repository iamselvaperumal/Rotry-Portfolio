import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import projectsData from '../data/projects.json'
import SectionHeading from './ui/SectionHeading'
import { getAssetImage, staggerContainer, fadeUp } from '../utils/helpers'

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-[#f8f9fb]">
      <div className="container-custom">
        <SectionHeading
          title="Our Projects"
          subtitle="Humanitarian projects making a lasting difference in our community."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projectsData.map((project, index) => (
            <motion.article
              key={project.id}
              variants={fadeUp}
              custom={index * 0.1}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden rounded-[20px] border border-gold/20 bg-white shadow-[var(--shadow-card)]"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={getAssetImage(project.image)}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-xl font-bold text-navy">{project.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-grey-text line-clamp-3">
                  {project.description}
                </p>
                <a
                  href="#projects"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-accent"
                >
                  Learn More <ArrowRight size={14} />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
