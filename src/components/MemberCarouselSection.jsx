import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { getPlaceholderImage } from '../utils/helpers'

export default function MemberCarouselSection({
  id,
  title,
  subtitle,
  data,
  dark = false,
}) {
  return (
    <section
      id={id}
      className={`section-padding ${dark ? 'bg-navy-secondary' : 'bg-white'}`}
    >
      <div className="container-custom">
        <SectionHeading title={title} subtitle={subtitle} light={dark} />

        <div className="relative">
          <button
            type="button"
            className={`member-prev-${id} absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy text-gold shadow-lg transition-all hover:scale-110 md:-left-5 md:h-12 md:w-12`}
            aria-label="Previous slide"
          >
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{
              prevEl: `.member-prev-${id}`,
              nextEl: `.member-next-${id}`,
            }}
            pagination={{ clickable: true, dynamicBullets: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1280: { slidesPerView: 5 },
            }}
            className="!pb-12"
          >
            {data.map((member) => (
              <SwiperSlide key={member.id}>
                <motion.article
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col items-center rounded-[20px] border border-gold-border bg-white p-6 shadow-[var(--shadow-card)]"
                >
                  <div className="relative mb-4">
                    <div className="absolute inset-0 rounded-full bg-gold/20 blur-xl" />
                    <img
                      src={member.image || getPlaceholderImage(member.name, 200)}
                      alt={member.name}
                      className="relative h-32 w-32 rounded-full border-4 border-gold object-cover object-top md:h-36 md:w-36"
                    />
                  </div>
                  <h3 className="text-center font-heading text-sm font-bold text-navy md:text-base">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-gold">
                    {member.role}
                  </p>
                  <p className="mt-1 text-xs text-grey-text">{member.year}</p>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className={`member-next-${id} absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy text-gold shadow-lg transition-all hover:scale-110 md:-right-5 md:h-12 md:w-12`}
            aria-label="Next slide"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
