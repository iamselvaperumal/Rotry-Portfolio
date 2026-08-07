import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion } from 'framer-motion'
import SectionHeading from './ui/SectionHeading'
import { getPlaceholderImage } from '../utils/helpers'
import maleIcon from '../assets/male-Profile-icon.png'
import femaleIcon from '../assets/Female-profile-icon.png'

export default function MemberCarouselSection({
  id,
  title,
  subtitle,
  data,
  dark = false,
}) {
  const getGenderIcon = (name) => {
    const lower = name.toLowerCase()
    const femaleNames = ['anupriya', 'amsa', 'ramya', 'dr.vijayalakshmi', 'uma']
    const isFemale = femaleNames.some((female) => lower.includes(female))
    return isFemale ? femaleIcon : maleIcon
  }

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
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group flex flex-col items-center overflow-hidden rounded-[20px] border border-gold-border bg-white shadow-[var(--shadow-card)]"
                >
                  <div className="relative w-full rounded-t-[20px] overflow-hidden bg-gold h-44 md:h-52 lg:h-60">
                    <img
                      src={member.image || getGenderIcon(member.name)}
                      alt={member.name}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gold/20" />
                  </div>
                  <div className="w-full p-6 text-center">
                    <h3 className="font-heading text-sm font-bold text-navy md:text-base">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-gold">
                      {member.role}
                    </p>
                    <p className="mt-1 text-xs text-grey-text">{member.year}</p>
                  </div>
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
