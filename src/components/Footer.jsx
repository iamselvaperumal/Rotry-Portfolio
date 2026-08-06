import { Globe, Mail, Phone, MapPin, ChevronRight, Send } from 'lucide-react'
import rotaryBrandLogo from '../assets/rotry-Logo.png'
import bbLogo from '../assets/BB-Logo.png'

export default function Footer() {
  return (
    <footer id="contact" className="w-full font-sans text-white">
      <div className="relative overflow-hidden bg-[#06162b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.16),_transparent_30%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)] pointer-events-none" />
        <div className="container-custom relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] py-16">
          <div className="rounded-[28px] border border-white/10 bg-white/5 p-8 shadow-[0_35px_80px_rgba(8,19,37,0.35)] backdrop-blur-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#F7E2A3]">
              Rotary club signature
            </span>
            <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white md:text-5xl">
              A footer that feels more like an invitation than an ending.
            </h2>
            <p className="mt-4 max-w-2xl text-sm text-white/70 leading-relaxed">
              Crafted to highlight your club's mission, membership energy, and meaningful contact points in one elevated section.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-[#0F2344]/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Community anchor</p>
                <p className="mt-3 text-sm text-white/85">
                  More than meetings — we build local projects with lasting impact and a welcoming culture.
                </p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-[#0F2344]/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-[#D4AF37]">Partner in progress</p>
                <p className="mt-3 text-sm text-white/85">
                  Connect with our leaders, support youth programs, and collaborate on service initiatives.
                </p>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#06162b] transition hover:bg-[#f0c95a] shadow-lg"
              >
                Join Rotary
              </a>
              <a
                href="https://www.bitbytetech.org"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white sm:mt-0"
              >
                <span>Powered by Bit Byte</span>
                <ChevronRight size={16} />
              </a>
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-[28px] border border-white/10 bg-[#0f1f3e]/95 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.32)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">Club pulse</span>
                  <h3 className="mt-3 text-xl font-bold text-white">Our latest focus</h3>
                </div>
                <img src={rotaryBrandLogo} alt="Rotary badge" className="h-12 w-12 object-contain" />
              </div>
              <div className="mt-6 space-y-4 text-sm text-white/75">
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-white">Tree plantation drive</p>
                  <p className="mt-1 text-xs text-white/60">New green growth projects with youth volunteers.</p>
                </div>
                <div className="rounded-3xl bg-white/5 p-4">
                  <p className="font-semibold text-white">Education for all</p>
                  <p className="mt-1 text-xs text-white/60">Supporting local schools and learning centers.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-[#0f1f3e]/95 p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-[#D4AF37]">Member spotlight</p>
                  <h3 className="mt-3 text-xl font-bold">Leading with heart</h3>
                </div>
                <div className="rounded-full bg-[#D4AF37]/10 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">
                  2025
                </div>
              </div>
              <p className="mt-5 text-sm text-white/70">
                Get in touch with our club to explore membership, volunteering, and sponsorship opportunities.
              </p>
              <div className="mt-6 grid gap-3">
                <a className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <Phone size={18} className="text-[#D4AF37]" />
                  <span className="text-sm text-white">+91 99437 43136</span>
                </a>
                <a className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <span className="text-sm text-white">reachus@bitbytetech.org</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#071224] border-t border-[#123046] py-14">
        <div className="container-custom grid gap-10 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={rotaryBrandLogo} alt="Rotary logo" className="h-11 w-11 object-contain" />
              <div>
                <p className="font-serif text-lg font-bold text-white">Rotary</p>
                <p className="text-sm text-white/60">Club of Salem Happy</p>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              We bring people together to create positive change through service, fellowship, and leadership.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70">Service</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70">Impact</span>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.2em] text-white/70">Membership</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Explore</h4>
            <nav className="grid gap-2 text-sm text-white/75">
              <a href="#about" className="transition hover:text-white">About</a>
              <a href="#members" className="transition hover:text-white">Members</a>
              <a href="#projects" className="transition hover:text-white">Projects</a>
              <a href="#gallery" className="transition hover:text-white">Gallery</a>
              <a href="#events" className="transition hover:text-white">Events</a>
            </nav>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Contact</h4>
            <div className="space-y-3 text-sm text-white/75">
              <a href="mailto:reachus@bitbytetech.org" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} /> reachus@bitbytetech.org
              </a>
              <a href="tel:+919943743136" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} /> +91 99437 43136
              </a>
              <a href="https://www.bitbytetech.org" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Globe size={16} /> bitbytetech.org
              </a>
              <div className="flex items-center gap-2 text-white/50">
                <MapPin size={16} />
                <span className="text-sm">Salem, Tamil Nadu</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4AF37]">Stay connected</h4>
            <div className="rounded-[28px] border border-white/10 bg-[#0B1B37]/90 p-4">
              <p className="text-sm text-white/75">Get club updates, service stories, and event highlights in your inbox.</p>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-full border border-white/10 bg-[#07172D] px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20"
                />
                <button className="rounded-full bg-[#D4AF37] px-6 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#06162b] transition hover:bg-[#f0c95a]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-[#D4AF37]/20">
                <Globe size={18} />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-[#D4AF37]/20">
                <Send size={18} />
              </a>
              <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white transition hover:bg-[#D4AF37]/20">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#02070f] border-t border-[#0f2037] py-5">
        <div className="container-custom flex flex-col gap-3 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Rotary Club of Salem Happy. Crafted with purpose and polished design.</p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
            <span>Designed by Bit Byte Technologies</span>
            <span className="hidden sm:inline">|</span>
            <span>Made for service, connection, and community.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
