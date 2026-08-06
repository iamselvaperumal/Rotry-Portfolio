import committee from '../data/committee.json'
import MemberCarouselSection from './MemberCarouselSection'

export default function CommitteeCarousel() {
  return (
    <MemberCarouselSection
      id="committee-chairs"
      title="Committee Chairs"
      subtitle="Committee chairs driving our specialized service initiatives."
      data={committee}
      dark
    />
  )
}
