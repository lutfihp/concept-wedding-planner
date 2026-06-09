const WA_HREF = 'https://wa.me/6280000000000'
const IG_HREF = 'https://instagram.com/'

export default function Contact() {
  return (
    <section
      id="contact"
      className="section relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(135deg, #f6e8e4, #ead0cc)' }}
    >
      {/* Decorative blobs */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 280,
          height: 280,
          top: -120,
          left: -80,
          background: 'rgba(255,255,255,0.35)',
          filter: 'blur(8px)',
        }}
      />
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 340,
          height: 340,
          bottom: -160,
          right: -100,
          background: 'rgba(141,154,134,0.18)',
          filter: 'blur(8px)',
        }}
      />

      <div className="wrap relative">
        <span className="eyebrow eyebrow-center justify-center">
          Get Started {/* ID: Mulai Sekarang */}
        </span>

        {/* ID: Yuk, Mulai Rencanakan Hari Istimewamu */}
        <h2
          className="max-w-[680px] mx-auto mt-4 mb-5"
          style={{ fontSize: 'var(--text-h2)' }}
        >
          Let&apos;s Start Planning Your Special Day
        </h2>

        {/* ID: Konsultasi gratis, tanpa kompromi. Kami siap membantu dari obrolan pertama. */}
        <p className="text-ink-muted max-w-[480px] mx-auto text-[1.1rem]">
          Free consultation, no compromise. We&apos;re here to help from the
          very first conversation.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex gap-4 justify-center flex-wrap">
          <a
            href={WA_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Chat via WhatsApp {/* ID: Chat via WhatsApp */}
          </a>
          <a
            href={IG_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            View Instagram {/* ID: Lihat Instagram */}
          </a>
        </div>

        {/* Meta */}
        <div className="mt-10 flex gap-8 justify-center flex-wrap text-ink-muted text-[0.88rem]">
          <span className="inline-flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-sage inline-block" />
            Serving Bandung &amp; surrounding areas {/* ID: Melayani Bandung & sekitarnya */}
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="w-[7px] h-[7px] rounded-full bg-sage inline-block" />
            Usually replies within 1 business day {/* ID: Biasanya membalas dalam 1 hari kerja */}
          </span>
        </div>
      </div>
    </section>
  )
}
