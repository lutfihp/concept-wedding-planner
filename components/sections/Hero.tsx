import Image from 'next/image'
import { IMAGES } from '@/lib/images'

export default function Hero() {
  return (
    <header
      id="top"
      className="relative min-h-svh flex items-center text-white isolate"
    >
      {/* Background image with overlays */}
      <div className="absolute inset-0 -z-20 overflow-hidden bg-gradient-to-br from-rose-soft via-taupe to-sage">
        <Image
          src={IMAGES.heroBg.src}
          alt={IMAGES.heroBg.alt}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      {/* Dark overlay for text legibility */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(180deg, rgba(61,46,42,0.5) 0%, rgba(61,46,42,0.3) 40%, rgba(61,46,42,0.66) 100%)',
        }}
      />

      <div className="wrap relative w-full pt-20 pb-16">
        <div className="max-w-[760px]">
          {/* Eyebrow */}
          <span className="eyebrow" style={{ color: '#f3ddd8' }}>
            Wedding Organizer · Bandung &amp; Surrounding Area
          </span>

          {/* ID: Hari Istimewamu, Dirayakan dengan Sempurna */}
          <h1
            className="mt-6 mb-6 font-heading font-medium"
            style={{
              fontSize: 'var(--text-hero)',
              textShadow: '0 2px 30px rgba(40,28,25,0.35)',
            }}
          >
            Your Special Day,
            <br />
            Celebrated with{' '}
            <em className="italic" style={{ color: '#f2d6cf' }}>
              Perfection
            </em>
          </h1>

          {/* ID: Paket pernikahan elegan mulai dari harga yang terjangkau — tanpa kompromi pada detail yang kamu impikan */}
          <p
            className="max-w-[540px] font-normal"
            style={{
              fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)',
              color: 'rgba(255,255,255,0.92)',
            }}
          >
            Elegant wedding packages from an affordable price — without
            compromising the details you dream of.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex gap-4 flex-wrap items-center">
            <a href="#packages" className="btn btn-light">
              See Our Packages {/* ID: Lihat Paket Kami */}
            </a>
            <a
              href="#about"
              className="btn btn-ghost"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
            >
              Get to Know Tresna {/* ID: Kenali Tresna */}
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 flex gap-8 flex-wrap">
            {[
              { n: '120+', l: 'Weddings' },       // ID: Pernikahan
              { n: '8 yrs', l: 'Experience' },    // ID: Pengalaman
              { n: '4.9', l: 'Avg. Rating' },     // ID: Rata-rata Ulasan
            ].map(({ n, l }) => (
              <div key={l}>
                <div className="font-heading text-[2.2rem] leading-none">{n}</div>
                <div
                  className="mt-[6px] text-[0.78rem] tracking-[0.12em] uppercase"
                  style={{ color: 'rgba(255,255,255,0.78)' }}
                >
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ID: Gulir */}
      <div className="scroll-hint">Scroll</div>
    </header>
  )
}
