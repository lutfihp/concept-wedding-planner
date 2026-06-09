const WA_HREF = 'https://wa.me/6280000000000'
const IG_HREF = 'https://instagram.com/'

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Packages', href: '#packages' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const CONNECT_LINKS = [
  { label: 'WhatsApp', href: WA_HREF, external: true },
  { label: 'Instagram', href: IG_HREF, external: true },
  { label: 'Free Consultation', href: WA_HREF, external: true }, // ID: Konsultasi Gratis
]

export default function Footer() {
  return (
    <footer className="bg-footer pt-20 pb-8" style={{ color: 'rgba(255,255,255,0.72)' }}>
      <div className="wrap footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div className="flex items-baseline gap-[0.4rem] font-heading text-[1.75rem] font-semibold tracking-[0.02em] text-white">
            Tresna{' '}
            <small className="font-body text-[0.6rem] font-semibold tracking-[0.32em] uppercase text-rose-soft">
              Bandung
            </small>
          </div>
          {/* ID: Wedding organizer untuk pasangan yang ingin hari istimewa yang elegan... */}
          <p className="mt-4 max-w-[300px] text-[0.92rem] leading-[1.6]">
            Wedding organizer for couples who want an elegant, warm, and
            stress-free special day — without overspending.
          </p>
        </div>

        {/* Navigate */}
        <div>
          <h5 className="font-body text-[0.72rem] tracking-[0.2em] uppercase text-rose-soft mb-5">
            Navigate {/* ID: Navigasi */}
          </h5>
          <ul className="flex flex-col gap-3 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[0.92rem] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h5 className="font-body text-[0.72rem] tracking-[0.2em] uppercase text-rose-soft mb-5">
            Connect {/* ID: Terhubung */}
          </h5>
          <ul className="flex flex-col gap-3 list-none">
            {CONNECT_LINKS.map(({ label, href, external }) => (
              <li key={label}>
                <a
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="text-[0.92rem] transition-colors duration-200 hover:text-white"
                  style={{ color: 'rgba(255,255,255,0.72)' }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="wrap mt-16 pt-6 flex justify-between gap-4 flex-wrap text-[0.82rem]"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.12)',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <span>© 2025 Tresna. All rights reserved.</span>
        {/* Concept disclaimer — must remain visible */}
        <span className="italic">
          This is a concept project by Codading to showcase web design capability.
        </span>
      </div>
    </footer>
  )
}
