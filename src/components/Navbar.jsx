import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import GoldButton from './ui/GoldButton'
import rotaryBrandLogo from '../assets/rotry-Logo.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[90px] transition-all duration-300 ${
        scrolled ? 'bg-navy shadow-lg shadow-black/20' : 'bg-navy'
      }`}
    >
      <div className="container-custom flex h-full items-center justify-between gap-6">
        <a href="#home" className="flex shrink-0 items-center gap-3 group">
          <img src={rotaryBrandLogo} alt="Rotary Club of Salem Happy Logo" className="h-11 w-11 object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-105" />
          <div className="leading-tight">
            <p className="font-heading text-sm font-bold uppercase tracking-wider text-gold">Rotary</p>
            <p className="text-xs font-medium text-white md:text-sm">Club of Salem Happy</p>
          </div>
        </a>


        <nav className="hidden items-center gap-6 xl:gap-8 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setActive(item.label)}
              className={`text-xs font-semibold uppercase tracking-widest transition-colors duration-300 xl:text-sm ${
                active === item.label
                  ? 'border-b-2 border-gold pb-1 text-gold'
                  : 'text-white hover:text-gold'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <GoldButton href="#join">Join Rotary</GoldButton>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-gold/20 bg-navy-secondary px-5 py-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label)
                  setMobileOpen(false)
                }}
                className="text-sm font-semibold uppercase tracking-wider text-white hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <GoldButton href="#join" className="mt-2 w-full justify-center">
              Join Rotary
            </GoldButton>
          </nav>
        </div>
      )}
    </header>
  )
}
