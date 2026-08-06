import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import galleryData from '../data/gallery.json'
import SectionHeading from './ui/SectionHeading'
import { getAssetImage } from '../utils/helpers'

export default function GalleryCarousel() {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          title="Rotary Gallery"
          subtitle="Capturing moments of service, fellowship, and community impact."
        />

        <div className="relative">
          <button
            type="button"
            className="gallery-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy text-gold shadow-lg transition-all hover:scale-110 md:-left-5 md:h-12 md:w-12"
            aria-label="Previous gallery image"
          >
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={20}
            loop
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: '.gallery-prev', nextEl: '.gallery-next' }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-12"
          >
            {galleryData.map((item) => (
              <SwiperSlide key={item.id}>
                <motion.figure
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer overflow-hidden rounded-[20px] shadow-[var(--shadow-card)]"
                  onHoverStart={() => setHoveredItem(item)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={getAssetImage(item.image)}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <figcaption className="bg-navy px-4 py-3">
                    <p className="text-sm font-semibold text-gold">{item.title}</p>
                    <p className="text-xs text-white/60">{item.category}</p>
                  </figcaption>
                </motion.figure>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="gallery-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy text-gold shadow-lg transition-all hover:scale-110 md:-right-5 md:h-12 md:w-12"
            aria-label="Next gallery image"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>

      {/* ── Full-image hover popup ── */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            key="gallery-popup"
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.88 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center"
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

            {/* Image card */}
            <motion.div
              className="relative z-10 max-h-[85vh] max-w-[85vw] overflow-hidden rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-gold/30"
              layoutId={`gallery-${hoveredItem.id}`}
            >
              <img
                src={getAssetImage(hoveredItem.image)}
                alt={hoveredItem.title}
                className="block max-h-[75vh] max-w-[80vw] w-auto h-auto object-contain"
              />
              {/* Caption bar */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-navy/95 via-navy/70 to-transparent px-6 py-5">
                <p className="font-heading text-lg font-bold text-gold">{hoveredItem.title}</p>
                <p className="text-sm text-white/70">{hoveredItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
