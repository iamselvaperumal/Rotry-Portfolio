import clubDirectors from '../data/clubDirectors.json'
import MemberCarouselSection from './MemberCarouselSection'

export default function ClubDirectorsCarousel() {
  return (
    <MemberCarouselSection
      id="club-directors"
      title="Club Directors"
      subtitle="Directors overseeing key functional areas of our Rotary club."
      data={clubDirectors}
    />
  )
}
