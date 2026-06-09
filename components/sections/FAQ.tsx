'use client'

import { useState, useRef, useEffect } from 'react'

type FAQItem = { q: string; a: string }

const FAQS: FAQItem[] = [
  {
    // ID: Apakah bisa request vendor sendiri?
    q: 'Can we request our own vendors?',
    // ID: Tentu boleh. Kalau kamu sudah punya fotografer...
    a: "Absolutely. If you already have a favourite photographer, caterer, or venue, we're happy to coordinate them into your event rundown.",
  },
  {
    // ID: Berapa jauh sebelumnya harus booking?
    q: 'How far in advance should we book?',
    // ID: Idealnya 4–6 bulan sebelum hari H...
    a: "Ideally 4–6 months before the date so preparations can be relaxed. But don't worry — we've helped with shorter timelines too. Just reach out and we'll see what's possible.",
  },
  {
    // ID: Apakah harga sudah termasuk dekorasi?
    q: 'Does the price include decoration?',
    // ID: Untuk Paket Resepsi dan Paket Lengkap, dekorasi sudah termasuk...
    a: 'For the Reception and Complete Package, decoration is included. The Ceremony Package includes mini décor and can be upgraded at any time.',
  },
  {
    // ID: Apakah melayani di luar Bandung?
    q: 'Do you serve outside Bandung?',
    // ID: Fokus utama kami Bandung & sekitarnya...
    a: 'Our main focus is Bandung and surrounding areas. For other cities we can still help, with adjustments for team travel and accommodation costs.',
  },
  {
    // ID: Bagaimana sistem pembayarannya?
    q: 'How does payment work?',
    // ID: Cukup DP di awal untuk mengamankan tanggal...
    a: "A deposit secures your date, then the balance is paid in agreed instalments leading up to the wedding day. We'll set the full payment schedule together at the start.",
  },
  {
    // ID: Apakah ada biaya tambahan yang tidak tertera?
    q: 'Are there any hidden charges?',
    // ID: Tidak ada. Semua rincian biaya kami tulis transparan di penawaran...
    a: "None. All cost details are laid out transparently in our proposal. If any additional request comes up mid-planning, we'll confirm with you before proceeding.",
  },
]

function FAQItemComponent({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem
  isOpen: boolean
  onToggle: () => void
}) {
  const bodyRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    el.style.maxHeight = isOpen ? `${el.scrollHeight}px` : '0px'
  }, [isOpen])

  useEffect(() => {
    const el = bodyRef.current
    if (!el) return
    const onResize = () => {
      if (isOpen) el.style.maxHeight = `${el.scrollHeight}px`
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [isOpen])

  return (
    <div className="border-b" style={{ borderColor: 'var(--line)' }}>
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full flex items-center justify-between gap-5 text-left py-6 font-heading text-ink transition-colors duration-200 hover:text-rose-deep"
        style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)' }}
      >
        {item.q}
        {/* +/× icon */}
        <span
          className="flex-none w-[30px] h-[30px] rounded-full relative transition-all duration-[350ms]"
          style={{
            border: '1px solid var(--line)',
            background: isOpen ? '#b07b78' : undefined,
            borderColor: isOpen ? '#b07b78' : undefined,
          }}
        >
          {/* Horizontal bar */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{
              width: 12,
              height: 1.5,
              background: isOpen ? '#fff' : '#b07b78',
              display: 'block',
            }}
          />
          {/* Vertical bar — collapses when open */}
          <span
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-transform duration-[350ms]"
            style={{
              width: 1.5,
              height: 12,
              background: isOpen ? '#fff' : '#b07b78',
              display: 'block',
              transform: isOpen
                ? 'translate(-50%, -50%) scaleY(0)'
                : 'translate(-50%, -50%) scaleY(1)',
            }}
          />
        </span>
      </button>

      <div
        ref={bodyRef}
        className="overflow-hidden transition-all duration-[400ms] ease-in-out"
        style={{ maxHeight: 0 }}
      >
        <p className="text-ink-muted pb-6 max-w-[62ch]">{item.a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i))
  }

  return (
    <section id="faq" className="section section-alt">
      <div className="wrap">
        <div className="section-head-center">
          <span className="eyebrow eyebrow-center">FAQ</span>
          <h2>Frequently Asked Questions</h2> {/* ID: Pertanyaan yang Sering Ditanyakan */}
        </div>

        <div className="max-w-[780px] mx-auto mt-16">
          {FAQS.map((item, i) => (
            <FAQItemComponent
              key={item.q}
              item={item}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
