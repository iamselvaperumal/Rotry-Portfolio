import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import GoldButton from './ui/GoldButton'
import rotaryBrandLogo from '../assets/rotry-Logo.png'

const appDownloadUrl = 'https://play.google.com/store/apps/details?id=com.vexora.ragatv'
const joinRotaryUrl = 'https://rotaryhappyclub.salemragatv.in/'

function PlayStoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 drop-shadow-sm">
      <path fill="#00D7FF" d="M3.35 2.3c-.22.28-.35.67-.35 1.14v17.12c0 .47.13.86.35 1.14L13.1 12 3.35 2.3Z" />
      <path fill="#00F076" d="m4.03 1.9 11.5 6.54-2.43 3.57L3.35 2.3c.18-.23.42-.38.68-.4Z" />
      <path fill="#FFEA00" d="m15.53 15.56-11.5 6.54a.91.91 0 0 1-.68-.4l9.75-9.7 2.43 3.56Z" />
      <path fill="#FF3A44" d="m20.12 10.66-4.59-2.22L13.1 12l2.43 3.56 4.59-2.22c1.17-.57 1.17-2.11 0-2.68Z" />
    </svg>
  )
}

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
      className={`fixed inset-x-0 top-0 z-50 h-[76px] transition-all duration-300 md:h-[90px] ${
        scrolled ? 'bg-navy shadow-lg shadow-black/20' : 'bg-navy'
      }`}
    >
      <div className="container-custom flex h-full items-center justify-between gap-3 md:gap-6">
        <a href="#home" className="group flex min-w-0 items-center gap-2.5 md:gap-3">
          <img src={rotaryBrandLogo} alt="Rotary Club of Salem Happy Logo" className="h-10 w-10 shrink-0 object-contain filter drop-shadow transition-transform duration-300 group-hover:scale-105 md:h-11 md:w-11" />
          <div className="hidden leading-tight min-[430px]:block">
            <p className="font-heading text-xs font-bold uppercase tracking-wider text-gold md:text-sm">Rotary</p>
            <p className="whitespace-nowrap text-[11px] font-medium text-white sm:text-xs md:text-sm">Club of Salem Happy</p>
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

        <div className="hidden items-center gap-3 lg:flex">
          <GoldButton href={joinRotaryUrl}>Join Rotary</GoldButton>
          <a
            href={appDownloadUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Download the Rotary Happy application from Google Play"
            title="Download the application from Google Play"
            className="flex h-11 shrink-0 items-center justify-center gap-2 rounded-full border border-white/25 bg-white px-4 text-xs font-bold uppercase tracking-wide text-navy transition-all duration-300 hover:scale-105 hover:border-gold hover:shadow-lg hover:shadow-gold/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
          >
            <PlayStoreIcon />
            <span>Download the App</span>
          </a>
        </div>

        <div className="ml-auto flex shrink-0 items-center gap-1.5 lg:hidden sm:gap-2">
          <a
            href={joinRotaryUrl}
            className="inline-flex h-9 items-center justify-center whitespace-nowrap rounded-full bg-gold px-3 text-[10px] font-bold uppercase tracking-wide text-navy transition-colors hover:bg-white sm:h-10 sm:px-4 sm:text-xs"
          >
            Join Rotary
          </a>
          <a
            href={appDownloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Download the Rotary Happy application from Google Play"
            title="Download the application from Google Play"
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-gold sm:h-10 sm:w-10"
          >
            <PlayStoreIcon />
          </a>
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-gold sm:h-11 sm:w-11"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="max-h-[calc(100vh-76px)] overflow-y-auto border-t border-gold/20 bg-navy-secondary px-5 py-5 shadow-2xl lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => {
                  setActive(item.label)
                  setMobileOpen(false)
                }}
                className="rounded-lg px-3 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-white/5 hover:text-gold"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
