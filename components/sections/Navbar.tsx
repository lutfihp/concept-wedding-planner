'use client'

import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'About Us',      href: '#about' },        // ID: Tentang Kami
  { label: 'Packages',      href: '#packages' },     // ID: Paket
  { label: 'Gallery',       href: '#gallery' },      // ID: Galeri
  { label: 'Testimonials',  href: '#testimonials' }, // ID: Testimoni
  { label: 'Contact',       href: '#contact' },      // ID: Kontak
]

const WA_HREF = 'https://wa.me/6280000000000'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={[
          'fixed top-0 left-0 right-0 z-[100] transition-all duration-300',
          scrolled
            ? 'py-3 backdrop-blur-[12px] shadow-[0_1px_0_var(--line-soft),0_12px_30px_-26px_rgba(80,55,45,0.5)]'
            : 'py-5',
        ].join(' ')}
        style={scrolled ? { backgroundColor: 'rgba(250,246,240,0.92)' } : undefined}
      >
        <div className="wrap flex items-center justify-between gap-6">
          {/* Logo */}
          <a
            href="#top"
            className="flex items-baseline gap-[0.4rem] font-heading text-[1.75rem] font-semibold tracking-[0.02em] text-ink"
          >
            Tresna{' '}
            <small className="font-body text-[0.6rem] font-semibold tracking-[0.32em] uppercase text-rose-deep">
              Bandung
            </small>
          </a>

          {/* Desktop nav links */}
          <ul className="nav-links-desktop items-center gap-8 list-none">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={[
                    'relative text-[0.92rem] font-medium text-ink py-1 transition-colors duration-200',
                    'hover:text-rose-deep',
                    'after:absolute after:left-0 after:right-0 after:-bottom-0.5',
                    'after:h-[1.5px] after:bg-rose-deep',
                    'after:scale-x-0 after:origin-left after:transition-transform after:duration-300',
                    'hover:after:scale-x-100',
                  ].join(' ')}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA + hamburger */}
          <div className="flex items-center gap-4">
            <a
              href={WA_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-cta-desktop btn btn-primary"
              style={{ padding: '0.75rem 1.5rem', fontSize: '0.88rem' }}
            >
              Free Consultation {/* ID: Konsultasi Gratis */}
            </a>
            <button
              className="nav-hamburger items-center justify-center flex-col gap-[5px] w-11 h-11 rounded-full"
              style={{ border: '1px solid var(--line)' }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <span
                className="block w-5 h-[1.6px] bg-ink transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(6.6px) rotate(45deg)' : undefined }}
              />
              <span
                className="block w-5 h-[1.6px] bg-ink transition-opacity duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block w-5 h-[1.6px] bg-ink transition-transform duration-300"
                style={{ transform: menuOpen ? 'translateY(-6.6px) rotate(-45deg)' : undefined }}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* Scrim */}
      <div
        data-testid="scrim"
        onClick={closeMenu}
        className="fixed inset-0 z-[98] backdrop-blur-sm transition-opacity duration-[350ms]"
        style={{
          backgroundColor: 'rgba(61,53,49,0.35)',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'auto' : 'none',
        }}
      />

      {/* Mobile drawer */}
      <aside
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
        className="fixed top-0 right-0 bottom-0 z-[99] bg-surface flex flex-col gap-2 transition-transform duration-[400ms]"
        style={{
          width: 'min(320px, 82vw)',
          boxShadow: '-20px 0 60px -30px rgba(80, 55, 45, 0.6)',
          padding: 'calc(5rem + 12px) 2rem 2rem',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {NAV_LINKS.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            onClick={closeMenu}
            className="font-heading text-[1.6rem] py-3 text-ink border-b border-[var(--line-soft)]"
          >
            {label}
          </a>
        ))}
        <a
          href={WA_HREF}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          className="btn btn-primary mt-6"
        >
          Free Consultation
        </a>
      </aside>
    </>
  )
}
