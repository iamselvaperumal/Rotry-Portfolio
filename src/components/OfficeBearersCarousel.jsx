import officeBearers from '../data/officeBearers.json'
import MemberCarouselSection from './MemberCarouselSection'

export default function OfficeBearersCarousel() {
  return (
    <MemberCarouselSection
      id="office-bearers"
      title="Office Bearers"
      subtitle="Our dedicated office bearers leading the club with vision and commitment."
      data={officeBearers}
      dark
    />
  )
}
