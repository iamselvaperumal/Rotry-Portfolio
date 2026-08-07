import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight, X, Maximize2 } from 'lucide-react'
import galleryData from '../data/gallery.json'
import SectionHeading from './ui/SectionHeading'
import { getAssetImage } from '../utils/helpers'

export default function GalleryCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === 0 ? galleryData.length - 1 : prev - 1
    )
  }, [])

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) =>
      prev === null ? null : prev === galleryData.length - 1 ? 0 : prev + 1
    )
  }, [])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      if (e.key === 'Escape') setSelectedIndex(null)
      if (e.key === 'ArrowLeft') handlePrev()
      if (e.key === 'ArrowRight') handleNext()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, handlePrev, handleNext])

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
            {galleryData.map((item, index) => (
              <SwiperSlide key={item.id}>
                <motion.figure
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer overflow-hidden rounded-[20px] border border-gold/25 bg-[#051124] shadow-[var(--shadow-card)] transition-all duration-300 hover:border-gold/70 hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)]"
                  onClick={() => setSelectedIndex(index)}
                >
                  {/* Poster Image Container - object-contain ensures full uncropped image */}
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#040C1A] p-2 flex items-center justify-center">
                    <img
                      src={getAssetImage(item.image)}
                      alt={item.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy/80 backdrop-blur-[2px] opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-4 text-center">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-navy shadow-lg mb-2 transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                        <Maximize2 size={22} />
                      </div>
                      <span className="text-xs font-extrabold text-gold uppercase tracking-widest">
                        View Full Poster
                      </span>
                      <span className="text-[10px] text-white/70 mt-1">
                        Click to expand image
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <figcaption className="bg-[#07152B] px-4 py-3 border-t border-gold/15">
                    <p className="font-heading text-sm font-bold text-gold line-clamp-1">{item.title}</p>
                    <p className="text-xs text-white/60 line-clamp-1">{item.category}</p>
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

      {/* ── Full-Image Lightbox Modal ── */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            key="gallery-modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 md:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <div
              className="relative flex flex-col items-center max-h-[92vh] max-w-[95vw] overflow-hidden rounded-[24px] border border-gold/40 bg-[#061224] shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="absolute right-3 top-3 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-navy/80 text-gold border border-gold/40 hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Prev button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 text-gold border border-gold/40 hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg"
                aria-label="Previous image"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Next button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-navy/80 text-gold border border-gold/40 hover:bg-gold hover:text-navy transition-all duration-300 shadow-lg"
                aria-label="Next image"
              >
                <ChevronRight size={24} />
              </button>

              {/* Full Uncropped Image */}
              <div className="flex items-center justify-center p-3 sm:p-5 max-h-[78vh] overflow-hidden">
                <motion.img
                  key={galleryData[selectedIndex].id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.25 }}
                  src={getAssetImage(galleryData[selectedIndex].image)}
                  alt={galleryData[selectedIndex].title}
                  className="max-h-[74vh] max-w-[85vw] w-auto h-auto object-contain rounded-lg shadow-2xl"
                />
              </div>

              {/* Caption Bar */}
              <div className="w-full bg-[#040C1A] border-t border-gold/20 px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
                <div>
                  <h4 className="font-heading text-base font-extrabold text-gold">
                    {galleryData[selectedIndex].title}
                  </h4>
                  <p className="text-xs text-white/70">
                    {galleryData[selectedIndex].category}
                  </p>
                </div>
                <span className="rounded-full border border-gold/30 bg-navy/80 px-3.5 py-1 text-[11px] font-bold text-gold/90">
                  {selectedIndex + 1} / {galleryData.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
