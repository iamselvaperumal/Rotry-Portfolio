import { Code, Cpu, Globe, Mail, Megaphone, Phone, Sparkles, MapPin, ChevronRight, Send } from 'lucide-react'
import rotaryBrandLogo from '../assets/rotry-Logo.png'
import bbLogo from '../assets/BB-Logo.png'
import bbQr from '../assets/BB-Site-QR.png'

export default function Footer() {
  return (
    <footer id="contact" className="w-full font-sans text-white">
      <div className="relative overflow-hidden bg-[#06162b]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(212,175,55,0.16),_transparent_30%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(255,255,255,0.08),_transparent_35%)] pointer-events-none" />
        <div className="container-custom relative z-10 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] py-16">
          <div className="group rounded-[28px] border border-gold/20 bg-[#081426]/95 p-8 shadow-[0_35px_100px_rgba(8,19,37,0.45)] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_45px_120px_rgba(212,175,55,0.25)]">
            <div className="grid gap-8 lg:grid-cols-[1.4fr_0.8fr]">
              <div className="space-y-6">
                <div className="relative flex items-start justify-between gap-4 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-sm transition hover:border-gold/30">
                  <div className="max-w-[72%]">
                    <span className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-gold">
                      <b>AI Science For Business</b>
                    </span>
                    <h2 className="mt-5 text-4xl font-extrabold tracking-tight text-white md:text-5xl">
                      Bit Byte Technologies
                    </h2>
                    <p className="mt-3 text-sm text-white/70 leading-relaxed">
                      Web App Development | Digital Marketing | Smart Solutions. Real Results.
                    </p>
                  </div>
                  <img
                    src={bbLogo}
                    alt="Bit Byte Technologies logo"
                    className="absolute left-70 top-0 h-35 w-35 object-contain"
                  />
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-gold/30 transition">
                    <span className="inline-flex items-center gap-2 text-gold">
                      <Code size={16} />
                      Web App Development
                    </span>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-gold/30 transition">
                    <span className="inline-flex items-center gap-2 text-gold">
                      <Megaphone size={16} />
                      Digital Marketing
                    </span>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-gold/30 transition">
                    <span className="inline-flex items-center gap-2 text-gold">
                      <Cpu size={16} />
                      AI Automation
                    </span>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-4 text-sm text-white/80 hover:border-gold/30 transition">
                    <span className="inline-flex items-center gap-2 text-gold">
                      <Sparkles size={16} />
                      Brand Growth
                    </span>
                  </div>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-white/5 p-5 text-sm text-white/80">
                  <p className="text-[13px] uppercase tracking-[0.22em] text-gold/90">Company Signature</p>
                  <p className="mt-3 leading-relaxed">
                    Bit Byte Technologies helps to businesses transform ideas into scalable <b> AI Based digital solutions </b>through innovative technology, strategic digital marketing, and Real Market data-driven business growth.
                  </p>
                </div>

                <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <a
                    href="https://www.bitbytetech.org"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-gold px-7 py-3 text-sm font-bold uppercase tracking-[0.18em] text-[#06162b] transition hover:bg-[#f0c95a] shadow-lg sm:w-auto"
                  >
                    Discover Bit Byte
                  </a>
                </div>
              </div>

              <div className="space-y-5 rounded-[24px] border border-white/10 bg-white/5 p-5 shadow-sm">
                <div className="flex items-center justify-between gap-3 rounded-[24px] bg-[#06162b]/90 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-gold/90">Contact Bit Byte</p>
                    <p className="mt-2 text-sm text-white">Professional support for your digital growth.</p>
                  </div>                </div>

                <div className="grid gap-3 text-sm text-white/80">
                  <a href="tel:+919123456789" className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#06162b]/80 px-4 py-3 transition hover:border-gold/30 hover:bg-[#0f2a4a]/90">
                    <Phone size={18} className="text-gold" />
                    <span>+91 99437 43136</span>
                  </a>
                  <a href="mailto:info@bitbytetech.org" className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#06162b]/80 px-4 py-3 transition hover:border-gold/30 hover:bg-[#0f2a4a]/90">
                    <Mail size={18} className="text-gold" />
                    <span>reachus@bitbytetech.org</span>
                  </a>
                  <a href="https://www.bitbytetech.org" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-[20px] border border-white/10 bg-[#06162b]/80 px-4 py-3 transition hover:border-gold/30 hover:bg-[#0f2a4a]/90">
                    <Globe size={18} className="text-gold" />
                    <span>www.bitbytetech.org</span>
                  </a>
                </div>

                <div className="rounded-[24px] border border-white/10 bg-[#06162b]/90 p-4 text-center">
                  <p className="text-xs uppercase tracking-[0.22em] text-gold/90">Scan to connect</p>
                  <img src={bbQr} alt="Bit Byte QR code" className="mx-auto mt-4 h-36 w-36 object-contain" />
                  <p className="mt-3 text-xs text-white/60">Scan for website, WhatsApp, or business details.</p>
                </div>
              </div>
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
                  <span className="text-sm text-white">+91 99447 73385</span>
                </a>
                <a className="flex items-center gap-3 rounded-3xl bg-white/5 px-4 py-3 hover:bg-white/10 transition">
                  <Mail size={18} className="text-[#D4AF37]" />
                  <span className="text-sm text-white">rcsalemhappy@gmail.com</span>
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
              <a href="mailto:rcsalemhappy@gmail.com" className="flex items-center gap-2 hover:text-white transition">
                <Mail size={16} /> rcsalemhappy@gmail.com
              </a>
              <a href="tel:+919944773385" className="flex items-center gap-2 hover:text-white transition">
                <Phone size={16} /> +91 99447 73385
              </a>
              <a href="www.rotarysalemhappy.in" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Globe size={16} />www.rotarysalemhappy.in
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
