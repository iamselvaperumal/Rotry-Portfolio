import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Leadership from '../components/Leadership'
import GalleryCarousel from '../components/GalleryCarousel'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Leadership />
        <GalleryCarousel />
      </main>
      <Footer />
    </>
  )
}
