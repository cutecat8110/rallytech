export interface ContactPageHeroImageAsset {
  src: string
  alt: string
  label: string
  candidateId: string | null
  model: string | null
  promptId: string | null
  source: string
  sourceReference: string | null
  createdAt: string | null
  licenseNote: string | null
  notes: string | null
  objectPosition: string
}

export interface ContactPageImageSlotRegistry {
  slot: 'contact-hero'
  liveSource: 'stock' | 'nano'
  stock: ContactPageHeroImageAsset
  liveNano: ContactPageHeroImageAsset | null
  latestCandidate: ContactPageHeroImageAsset | null
}

export const contactPageHeroImage: ContactPageImageSlotRegistry = {
  slot: 'contact-hero',
  liveSource: 'nano',
  stock: {
    src: '/images/stock/contact/contact-hero-urban-roofline.jpg',
    alt: 'Modern urban roofline and glass towers under an overcast sky',
    label: 'Contact Page Hero Stock Image',
    candidateId: null,
    model: null,
    promptId: null,
    source: 'Pexels',
    sourceReference:
      'https://www.pexels.com/photo/shanghai-skyscrapers-with-modern-roof-structure-35632125/',
    createdAt: null,
    licenseNote: 'Pexels License',
    notes:
      'Selected for the contact-page hero because the broad roofline and distant glass towers produce a calmer page-title banner that is closer to the reference contact page rhythm than the previous control-room scene.',
    objectPosition: 'center 58%'
  },
  liveNano: {
    src: '/images/generated/contact/hero/contact-hero-20260414090406861-63r9ff.jpg',
    alt: '',
    label: 'Nano Contact Hero Candidate',
    candidateId: 'contact-hero-20260414090406861-63r9ff',
    model: 'gemini-3-pro-image-preview',
    promptId: 'contact-hero-v1',
    source: 'Nano Banana',
    sourceReference: null,
    createdAt: '2026-04-14T09:04:06.873Z',
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes:
      'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
    objectPosition: 'center center'
  },
  latestCandidate: {
    src: '/images/generated/contact/hero/contact-hero-20260414100920021-5jh6dy.jpg',
    alt: '',
    label: 'Nano Contact Hero Candidate',
    candidateId: 'contact-hero-20260414100920021-5jh6dy',
    model: 'gemini-3-pro-image-preview',
    promptId: 'contact-hero-v1',
    source: 'Nano Banana',
    sourceReference: null,
    createdAt: '2026-04-14T10:09:20.032Z',
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes:
      'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
    objectPosition: 'center center'
  }
} as ContactPageImageSlotRegistry

export function getContactPageHeroImageEntry() {
  return contactPageHeroImage
}
