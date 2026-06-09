'use client'

import { useState } from 'react'
import Image from 'next/image'
import { GALLERY_IMAGES } from '@/lib/images'

type Filter = 'all' | 'ceremony' | 'reception' | 'decoration'

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },               // ID: Semua
  { label: 'Ceremony', value: 'ceremony' },     // ID: Akad
  { label: 'Reception', value: 'reception' },   // ID: Resepsi
  { label: 'Decoration', value: 'decoration' }, // ID: Dekorasi
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all')

  const visible = GALLERY_IMAGES.filter(
    (img) => activeFilter === 'all' || img.category === activeFilter,
  )

  return (
    <section id="gallery" className="section section-alt">
      <div className="wrap">
        <div className="section-head-center">
          <span className="eyebrow eyebrow-center">Gallery</span> {/* ID: Galeri */}
          <h2>Moments We&apos;ve Captured</h2> {/* ID: Momen yang Kami Abadikan */}
          {/* ID: Setiap pernikahan punya cerita. Ini sebagian yang kami banggakan. */}
          <p>Every wedding has a story. Here are some we&apos;re proud of.</p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 justify-center flex-wrap mt-8">
          {FILTERS.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => setActiveFilter(value)}
              className={[
                'text-[0.85rem] font-medium px-5 py-2 rounded-pill border border-transparent transition-all duration-[250ms]',
                activeFilter === value
                  ? 'active bg-rose-deep text-white'
                  : 'text-ink-muted hover:text-ink',
              ].join(' ')}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Masonry grid — render only visible items so filter tests work with queryByText */}
        <div className="gallery-grid">
          {visible.map((img) => (
            <div
              key={img.src}
              className={[
                'relative rounded-card overflow-hidden cursor-pointer shadow-soft group transition-all duration-[400ms]',
                // Apply aspect-[4/3] only to non-tall items — for tall items, .gitem-tall in
                // @layer components controls aspect-ratio. If we applied aspect-[4/3] here it
                // would override .gitem-tall via Tailwind's @layer utilities (higher specificity).
                img.tall ? 'gitem-tall' : 'aspect-[4/3]',
              ].join(' ')}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:scale-[1.06]"
                  sizes="(max-width: 880px) 50vw, 33vw"
                />
              </div>

              {/* Hover overlay */}
              <div
                className="absolute inset-0 flex flex-col justify-end p-5 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-[400ms]"
                style={{
                  background:
                    'linear-gradient(180deg, transparent 40%, rgba(61,46,42,0.78))',
                }}
              >
                <div className="font-heading text-[1.4rem]">{img.title}</div>
                <div
                  className="text-[0.75rem] tracking-[0.16em] uppercase mt-0.5"
                  style={{ color: 'rgba(255,255,255,0.85)' }}
                >
                  {img.period}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
