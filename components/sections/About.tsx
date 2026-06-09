import Image from 'next/image'
import { IMAGES } from '@/lib/images'

const TRUST_CARDS = [
  {
    icon: '♡',
    title: '120+ Weddings',             // ID: 120+ Pernikahan
    body: 'Handled with all our heart.', // ID: Telah kami tangani dengan penuh hati.
  },
  {
    icon: '✦',
    title: 'Personal Guidance',          // ID: Pendampingan Personal
    body: "We're there from start to finish.", // ID: Kami ada dari awal hingga hari H.
  },
  {
    icon: '✓',
    title: 'Transparent Pricing',        // ID: Harga Transparan
    body: 'No hidden fees.',             // ID: Tidak ada biaya tersembunyi.
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        {/* Copy */}
        <div>
          <span className="eyebrow">Our Story</span> {/* ID: Cerita Kami */}
          {/* ID: Kami percaya hari pernikahan harusnya jadi kenangan paling membahagiakan */}
          <p
            className="font-heading italic mt-6 mb-6 leading-[1.35]"
            style={{ fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', color: '#3d3531' }}
          >
            We believe your wedding day should be your happiest memory — not a
            source of stress.
          </p>
          {/* ID: Tresna lahir dari tim kecil di Bandung... */}
          <p className="text-ink-muted mb-4">
            Tresna was born from a small Bandung team who have spent over a
            decade helping couples bring their special day to life. We know the
            anxiety about budgets, the confusion of choosing vendors, and the
            fear of missing details.
          </p>
          {/* ID: Jadi kami yang koordinasi semuanya... */}
          <p className="text-ink-muted">
            So we coordinate everything — from decoration to catering — so you
            can truly enjoy your moment, not be stuck managing logistics.
          </p>

          {/* Trust cards */}
          <div className="trust-row">
            {TRUST_CARDS.map(({ icon, title, body }) => (
              <div
                key={title}
                className="bg-surface border rounded-card-lg p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft"
                style={{ borderColor: 'var(--line-soft)' }}
              >
                <div className="w-[46px] h-[46px] rounded-full bg-rose-wash text-rose-deep flex items-center justify-center text-[1.3rem] mb-4">
                  {icon}
                </div>
                <h4 className="font-heading text-[1.3rem] mb-1">{title}</h4>
                <p className="text-[0.9rem] text-ink-muted leading-[1.5]">{body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Portrait image */}
        <div
          className="relative rounded-card-lg overflow-hidden shadow-card"
          style={{ aspectRatio: '6/7' }}
        >
          <Image
            src={IMAGES.aboutPortrait.src}
            alt={IMAGES.aboutPortrait.alt}
            fill
            className="object-cover"
            sizes="(max-width: 960px) 100vw, 45vw"
          />
          {/* Floating quote tag */}
          <div className="absolute -left-[22px] bottom-8 bg-surface rounded-card shadow-soft max-w-[220px] px-6 py-4">
            {/* ID: "Kami yang urus detailnya." */}
            <div className="font-heading italic text-[1.15rem] leading-[1.3]">
              &ldquo;We handle the details.&rdquo;
            </div>
            <div className="text-[0.78rem] text-ink-muted mt-[6px] tracking-[0.04em]">
              — Team Tresna
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
