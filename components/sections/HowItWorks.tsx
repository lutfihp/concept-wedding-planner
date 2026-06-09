const STEPS = [
  {
    icon: '☎',
    title: 'Free Consultation',  // ID: Konsultasi Gratis
    body: 'Tell us about your dream wedding.', // ID: Ceritakan impian pernikahanmu pada kami.
  },
  {
    icon: '❑',
    title: 'Choose a Package',   // ID: Pilih Paket
    body: "We'll help match it to your budget.", // ID: Kami bantu sesuaikan dengan budget-mu.
  },
  {
    icon: '♢',
    title: 'Plan Together',      // ID: Perencanaan Bersama
    body: 'We coordinate every detail from A to Z.', // ID: Koordinasi detail dari A sampai Z.
  },
  {
    icon: '♥',
    title: 'Your Special Day',   // ID: Hari Istimewamu
    body: 'Enjoy your moment — we handle the rest.', // ID: Nikmati momenmu, kami yang urus sisanya.
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section">
      <div className="wrap">
        <div className="section-head-center">
          <span className="eyebrow eyebrow-center">It&apos;s Simple</span> {/* ID: Prosesnya Mudah */}
          <h2>How Does It Work?</h2> {/* ID: Bagaimana Cara Kerjanya? */}
          {/* ID: Empat langkah sederhana, dari ngobrol pertama sampai hari istimewamu */}
          <p>Four simple steps, from your first chat to your special day.</p>
        </div>

        <div className="steps-grid">
          {/* Dashed connecting line — desktop only */}
          <div
            className="steps-connector absolute"
            style={{
              top: 30,
              left: '12%',
              right: '12%',
              height: 1,
              background:
                'repeating-linear-gradient(90deg, #bcae9a, #bcae9a 6px, transparent 6px, transparent 12px)',
              zIndex: 0,
            }}
          />

          {STEPS.map((step, i) => (
            <div key={step.title} className="relative z-[1] text-center group">
              <div
                className="relative w-[62px] h-[62px] rounded-full bg-surface flex items-center justify-center text-[1.5rem] mx-auto mb-5 shadow-soft transition-all duration-300 group-hover:-translate-y-1 group-hover:scale-105 group-hover:bg-rose-wash"
                style={{ border: '1px solid var(--line)' }}
              >
                {step.icon}
                {/* Step number */}
                <span className="absolute -top-2 left-1/2 translate-x-[20px] font-heading text-[1rem] text-rose-deep font-semibold">
                  {i + 1}
                </span>
              </div>
              <h4 className="font-heading text-[1.35rem] mb-[6px]">{step.title}</h4>
              <p className="text-[0.9rem] text-ink-muted px-2">{step.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
