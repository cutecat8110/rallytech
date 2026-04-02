export type HomeHeroImageSourceKey = 'stock' | 'nano'

export interface HomeHeroImageAsset {
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
}

export interface HomeHeroImageRegistry {
  slot: 'home-hero'
  liveSource: HomeHeroImageSourceKey
  stock: HomeHeroImageAsset
  liveNano: HomeHeroImageAsset | null
  latestCandidate: HomeHeroImageAsset | null
}

// 由 scripts/promote-home-hero-candidate.mjs 同步更新；前端只讀這份精簡 registry。
export const homeHeroImageRegistry: HomeHeroImageRegistry = {
  slot: 'home-hero',
  liveSource: 'stock',
  stock: {
    src: '/images/demo/home/hero-simulator-control-room.jpg',
    alt: '',
    label: 'Stock Hero',
    candidateId: null,
    model: null,
    promptId: null,
    source: 'Pexels',
    sourceReference:
      'https://www.pexels.com/photo/engineers-using-simulator-3862132/',
    createdAt: null,
    licenseNote: 'Pexels License',
    notes: 'Current approved homepage Hero asset.'
  },
  liveNano: null,
  latestCandidate: {
    src: '/images/generated/home/hero/home-hero-20260402013623433-s5t4l1.jpg',
    alt: '',
    label: 'Nano Hero Candidate',
    candidateId: 'home-hero-20260402013623433-s5t4l1',
    model: 'gemini-3.1-flash-image-preview',
    promptId: 'home-hero-v3',
    source: 'Nano Banana',
    sourceReference: '/images/demo/home/hero-simulator-control-room.jpg',
    createdAt: '2026-04-02T01:36:23.470Z',
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes:
      'v3 structured JSON prompt removing embedded headline/button artifacts'
  }
} as HomeHeroImageRegistry
