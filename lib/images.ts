/**
 * All images sourced from Pexels — free to use, no attribution required.
 * Licence: https://www.pexels.com/license/
 */

export type GalleryImage = {
  src: string
  alt: string
  width: number
  height: number
  category: 'ceremony' | 'reception' | 'decoration'
  tall?: boolean
  title: string
  period: string
}

export const IMAGES = {
  heroBg: {
    /** Pexels photo 4015090 — couple at the beach during golden hour */
    src: 'https://images.pexels.com/photos/4015090/pexels-photo-4015090.jpeg?auto=compress&cs=tinysrgb&w=1920',
    alt: 'Couple at the beach during golden hour',
    width: 1920,
    height: 1200,
  },
  aboutPortrait: {
    /** Pexels photo 14419576 — engagement ring on bride holding groom's arm */
    src: 'https://images.pexels.com/photos/14419576/pexels-photo-14419576.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'An intimate engagement moment',
    width: 600,
    height: 700,
  },
} as const

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    /** Pexels photo 12876404 — elegant decoration on tables at a wedding reception */
    src: 'https://images.pexels.com/photos/12876404/pexels-photo-12876404.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Outdoor reception table decoration',
    width: 800,
    height: 1000,
    category: 'reception',
    tall: true,
    title: 'Garden Reception',
    period: 'Reception · 2025',
  },
  {
    /** Pexels photo 12200847 — bride and groom holding hands in ceremony */
    src: 'https://images.pexels.com/photos/12200847/pexels-photo-12200847.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Bride and groom holding hands during the ceremony',
    width: 800,
    height: 600,
    category: 'ceremony',
    title: 'Wedding Vows',
    period: 'Ceremony · 2025',
  },
  {
    /** Pexels photo 34597461 — elegant wedding reception table decoration */
    src: 'https://images.pexels.com/photos/34597461/pexels-photo-34597461.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Elegant guest table decoration',
    width: 800,
    height: 600,
    category: 'decoration',
    title: 'Guest Table',
    period: 'Decoration · 2024',
  },
  {
    /** Pexels photo 8063171 — newlywed couple shares a romantic first dance at a stylish wedding reception */
    src: 'https://images.pexels.com/photos/8063171/pexels-photo-8063171.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'First dance at the reception',
    width: 800,
    height: 600,
    category: 'reception',
    title: 'First Dance',
    period: 'Reception · 2025',
  },
  {
    /** Pexels photo 1616113 — pink and white roses centerpiece on top of table */
    src: 'https://images.pexels.com/photos/1616113/pexels-photo-1616113.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Floral centerpiece wedding decoration',
    width: 800,
    height: 600,
    category: 'decoration',
    title: 'Centerpiece',
    period: 'Decoration · 2025',
  },
  {
    /** Pexels photo 30679838 — bride and groom holding hands in wedding ceremony */
    src: 'https://images.pexels.com/photos/30679838/pexels-photo-30679838.jpeg?auto=compress&cs=tinysrgb&w=900',
    alt: 'Bride and groom exchanging vows',
    width: 800,
    height: 1000,
    category: 'ceremony',
    tall: true,
    title: 'Sacred Vows',
    period: 'Ceremony · 2024',
  },
]
