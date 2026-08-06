import { motion } from 'framer-motion'
import { ArrowRight, Calendar, MapPin } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import eventsData from '../data/events.json'
import SectionHeading from './ui/SectionHeading'
import { getAssetImage, staggerContainer, fadeUp } from '../utils/helpers'

export default function EventsCarousel() {
  return (
    <section id="events" className="section-padding bg-navy">
      <div className="container-custom">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Join us at our upcoming Rotary events and community service activities."
          light
        />

        <div className="relative">
          <button
            type="button"
            className="events-prev absolute -left-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy-secondary text-gold shadow-lg transition-all hover:scale-110 md:-left-5 md:h-12 md:w-12"
            aria-label="Previous event"
          >
            <ChevronLeft size={22} />
          </button>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            navigation={{ prevEl: '.events-prev', nextEl: '.events-next' }}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {eventsData.map((event) => (
              <SwiperSlide key={event.id}>
                <motion.article
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden rounded-[20px] border border-gold/30 bg-navy-secondary shadow-[var(--shadow-card)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={getAssetImage(event.image)}
                      alt={event.title}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-heading text-lg font-bold text-white">{event.title}</h3>
                    <div className="mt-3 flex flex-col gap-2">
                      <p className="flex items-center gap-2 text-sm text-gold-light">
                        <Calendar size={14} /> {event.date}
                      </p>
                      <p className="flex items-center gap-2 text-sm text-white/70">
                        <MapPin size={14} /> {event.location}
                      </p>
                    </div>
                    <p className="mt-3 line-clamp-2 text-sm text-white/60">{event.description}</p>
                    <a
                      href="#events"
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-gold transition-colors hover:text-gold-light"
                    >
                      Read More <ArrowRight size={14} />
                    </a>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            className="events-next absolute -right-2 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gold bg-navy-secondary text-gold shadow-lg transition-all hover:scale-110 md:-right-5 md:h-12 md:w-12"
            aria-label="Next event"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  )
}
