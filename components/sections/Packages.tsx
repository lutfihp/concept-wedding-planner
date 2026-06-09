const WA_HREF = 'https://wa.me/6280000000000'

type Package = {
  name: string
  tag: string
  price: string
  features: string[]
  featured?: boolean
  badge?: string
  ctaVariant: 'btn-ghost' | 'btn-primary'
}

const PACKAGES: Package[] = [
  {
    name: 'Ceremony Package',          // ID: Paket Akad
    tag: 'Perfect for an intimate, meaningful ceremony.', // ID: Pas untuk akad yang intim & khidmat.
    price: 'From Rp 8M',              // ID: Rp 8jt / mulai
    features: [
      'Ceremony & mini reception décor',             // ID: Dekorasi akad & pelaminan mini
      'Experienced ceremony MC',                     // ID: MC akad berpengalaman
      'Photo documentation (1 photographer)',        // ID: Dokumentasi foto (1 fotografer)
      'Day-of coordinator',                          // ID: Koordinator hari H
    ],
    ctaVariant: 'btn-ghost',
  },
  {
    name: 'Reception Package',         // ID: Paket Resepsi
    tag: 'Full coordination for an unforgettable reception.', // ID: Koordinasi penuh untuk resepsi tak terlupakan.
    price: 'From Rp 25M',
    features: [
      'Full day coordination by Tresna team',        // ID: Full day coordination tim Tresna
      'Reception & guest area decoration',           // ID: Dekorasi pelaminan & area tamu
      'Catering & vendor liaison',                   // ID: Liaison katering & vendor
      'Photo & video highlight',                     // ID: Foto & video highlight
      'MC & event rundown',                          // ID: MC & rundown acara
    ],
    featured: true,
    badge: 'Most Popular',            // ID: Paling Diminati
    ctaVariant: 'btn-primary',
  },
  {
    name: 'Complete Package',          // ID: Paket Lengkap
    tag: 'End-to-end, from venue to wedding day.',  // ID: End-to-end, dari cari venue sampai hari H.
    price: 'From Rp 45M',
    features: [
      'Guidance from venue to wedding day',          // ID: Pendampingan dari venue hingga hari H
      'Full vendor management',                      // ID: Manajemen seluruh vendor
      'Custom decoration concept & design',          // ID: Konsep & desain dekorasi custom
      'Full day coordinator team',                   // ID: Tim koordinator penuh hari H
      'Photo + cinematic video documentation',       // ID: Dokumentasi foto + video sinematik
    ],
    ctaVariant: 'btn-ghost',
  },
]

export default function Packages() {
  return (
    <section id="packages" className="section section-alt">
      <div className="wrap">
        <div className="section-head-center">
          <span className="eyebrow eyebrow-center">
            Wedding Packages {/* ID: Paket Pernikahan */}
          </span>
          <h2>Our Wedding Packages</h2> {/* ID: Paket Pernikahan Kami */}
          {/* ID: Semua paket dapat dikustomisasi sesuai kebutuhan dan budget-mu */}
          <p>All packages can be customized to your needs and budget.</p>
        </div>

        <div className="pkg-grid">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className={[
                'relative flex flex-col rounded-card-lg px-8 pb-8 pt-10 transition-all duration-[350ms]',
                pkg.featured
                  ? 'bg-gradient-to-b from-white to-rose-wash border-rose scale-[1.03] shadow-card'
                  : 'bg-surface hover:-translate-y-[6px] hover:shadow-card',
              ].join(' ')}
              style={{
                border: pkg.featured
                  ? '1px solid #d8a3a0'
                  : '1px solid var(--line)',
              }}
            >
              {/* Badge */}
              {pkg.badge && (
                <div
                  className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-rose-deep text-white text-[0.68rem] font-bold tracking-[0.18em] uppercase px-[18px] py-[7px] rounded-pill whitespace-nowrap"
                  style={{ boxShadow: '0 10px 22px -12px rgba(176,123,120,0.9)' }}
                >
                  {pkg.badge}
                </div>
              )}

              <div className="font-heading text-[1.9rem]">{pkg.name}</div>
              <div className="text-[0.88rem] text-ink-muted mt-1 min-h-[2.6em]">{pkg.tag}</div>

              <div className="font-heading text-[2.4rem] mt-6 mb-0.5 text-ink">
                {pkg.price}{' '}
                <small className="font-body text-[0.8rem] font-medium text-ink-muted tracking-[0.04em]">
                  / starting
                </small>
              </div>

              <ul
                className="flex flex-col gap-3 mt-6 mb-8 border-t pt-6 list-none"
                style={{ borderColor: 'var(--line-soft)' }}
              >
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex gap-3 text-[0.92rem] items-start">
                    <span className="flex-none w-5 h-5 rounded-full bg-sage text-white flex items-center justify-center text-[0.7rem] mt-0.5">
                      ✓
                    </span>
                    {feat}
                  </li>
                ))}
              </ul>

              <a
                href={WA_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${pkg.ctaVariant} mt-auto w-full`}
              >
                Choose This Package {/* ID: Pilih Paket Ini */}
              </a>
            </div>
          ))}
        </div>

        {/* ID: Harga mulai dari Rp 8 juta. Hubungi kami untuk penawaran custom sesuai impianmu. */}
        <p className="text-center text-ink-muted mt-10 text-[0.95rem]">
          Prices start from{' '}
          <strong className="text-rose-deep font-semibold">Rp 8 million</strong>.
          Contact us for a custom quote tailored to your dream.
        </p>
      </div>
    </section>
  )
}
