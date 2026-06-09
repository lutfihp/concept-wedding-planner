const TESTIMONIALS = [
  {
    initials: 'R&B',
    name: 'Rina & Budi',
    date: 'Reception · March 2025',        // ID: Resepsi · Maret 2025
    // ID: Dari awal kami santai banget karena semua dikoordinir tim Tresna...
    quote:
      'From the start we felt at ease — Team Tresna handled everything. On the day we just showed up, smiled, and soaked it all in. The budget stayed on track too.',
  },
  {
    initials: 'D&A',
    name: 'Dinda & Arya',
    date: 'Ceremony & Reception · July 2024', // ID: Akad & Resepsi · Juli 2024
    // ID: Awalnya takut WO itu mahal. Ternyata Tresna jujur soal harga dari awal...
    quote:
      'We were worried a WO would be expensive. But Tresna was upfront about pricing from day one — no surprise costs. And the decoration exceeded our expectations.',
  },
  {
    initials: 'S&F',
    name: 'Sasha & Fikri',
    date: 'Reception · November 2024',      // ID: Resepsi · November 2024
    // ID: Tim-nya sabar nemenin kami yang super sibuk kerja...
    quote:
      'The team was so patient with us despite our busy schedules. Every detail was discussed carefully. It felt like being helped by family, not a vendor.',
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="wrap">
        <div className="section-head-center">
          <span className="eyebrow eyebrow-center">Testimonials</span> {/* ID: Testimoni */}
          <h2>What They Say</h2> {/* ID: Kata Mereka */}
          {/* ID: Cerita dari pasangan yang sudah merayakan harinya bersama kami */}
          <p>Stories from couples who celebrated their day with us.</p>
        </div>

        <div className="tgrid">
          {TESTIMONIALS.map(({ initials, name, date, quote }) => (
            <div
              key={name}
              className="bg-surface rounded-card-lg p-8 shadow-soft flex flex-col gap-4 relative"
            >
              {/* Quote mark */}
              <div
                className="font-heading text-[3.4rem] leading-[0.6] text-rose-soft"
                style={{ height: 30 }}
              >
                &ldquo;
              </div>

              {/* Stars */}
              <div className="text-rose tracking-[3px] text-[1rem]">★★★★★</div>

              {/* Testimonials are placeholder copy — replace with consented real ones before production */}
              <blockquote className="font-heading italic text-[1.22rem] leading-[1.45] text-ink">
                {quote}
              </blockquote>

              {/* Person */}
              <div
                className="flex items-center gap-3 mt-auto pt-4 border-t"
                style={{ borderColor: 'var(--line-soft)' }}
              >
                <div className="w-[52px] h-[52px] rounded-full bg-sage text-white flex items-center justify-center font-heading text-[1.2rem] flex-none">
                  {initials}
                </div>
                <div>
                  <div className="font-semibold text-[0.98rem]">{name}</div>
                  <div className="text-[0.8rem] text-ink-muted">{date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
