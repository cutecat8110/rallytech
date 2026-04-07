/* eslint-disable @stylistic/quote-props */

export type HomePageImageSourceKey = 'stock' | 'nano'

export type HomePageSingleImageSlotKey =
  | 'home-hero'
  | 'about-primary'
  | 'about-detail'
  | 'services-surface'
  | 'ote-background'
  | 'mission-cutout'
  | 'connector-image'

export type HomePageStateAwareSlotKey = 'mission-square'
export type HomePageImageSlotKey =
  | HomePageSingleImageSlotKey
  | HomePageStateAwareSlotKey
export type HomePageImageStateKey = 'mission' | 'join-us'

export interface HomePageImageAsset {
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

export interface HomePageImageSlotRegistry {
  slot: HomePageImageSlotKey
  state?: HomePageImageStateKey
  liveSource: HomePageImageSourceKey
  stock: HomePageImageAsset
  liveNano: HomePageImageAsset | null
  latestCandidate: HomePageImageAsset | null
}

export interface HomePageStateAwareImageRegistry {
  slot: 'mission-square'
  liveSource: HomePageImageSourceKey
  states: Record<HomePageImageStateKey, HomePageImageSlotRegistry>
}

export interface HomePageImageRegistry {
  'home-hero': HomePageImageSlotRegistry
  'about-primary': HomePageImageSlotRegistry
  'about-detail': HomePageImageSlotRegistry
  'services-surface': HomePageImageSlotRegistry
  'ote-background': HomePageImageSlotRegistry
  'mission-square': HomePageStateAwareImageRegistry
  'mission-cutout': HomePageImageSlotRegistry
  'connector-image': HomePageImageSlotRegistry
}

// 由 generate/promote workflow 同步更新；前端只讀這份精簡 registry。
export const homePageImageRegistry: HomePageImageRegistry = {
  'home-hero': {
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
      src: '/images/generated/home/hero/home-hero-20260402094559341-9yjh4n.jpg',
      alt: '',
      label: 'Nano Hero Candidate',
      candidateId: 'home-hero-20260402094559341-9yjh4n',
      model: 'gemini-3-pro-image-preview',
      promptId: 'home-hero-v5',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/hero-simulator-control-room.jpg',
      createdAt: '2026-04-02T09:45:59.542Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
    }
  },
  'about-primary': {
    slot: 'about-primary',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/about-glass-office-towers.jpg',
      alt: '現代高科技建築外觀',
      label: 'About Primary Stock Asset',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Flickr / Openverse',
      sourceReference: 'https://www.flickr.com/photos/84509731@N00/6336008954',
      createdAt: null,
      licenseNote: 'CC BY 2.0',
      notes:
        'Canonical stock placeholder for the About section primary facade image role.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/about-primary/about-primary-20260402092007659-61uz1p.jpg',
      alt: '',
      label: 'Nano About Primary Candidate',
      candidateId: 'about-primary-20260402092007659-61uz1p',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-primary-v2',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/about-glass-office-towers.jpg',
      createdAt: '2026-04-02T09:20:07.776Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro baseline round 1 for homepage-wide compare, calibrated v2 prompt'
    }
  },
  'about-detail': {
    slot: 'about-detail',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/about-glass-facade-detail.jpg',
      alt: '現代玻璃立面細節',
      label: 'About Detail Stock Asset',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/reflective-glass-facade-of-modern-office-building-33643675/',
      createdAt: null,
      licenseNote: 'Pexels License',
      notes:
        'Canonical stock placeholder for the About section secondary facade-detail image role.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/about-detail/about-detail-20260402092045197-5w3n8s.jpg',
      alt: '',
      label: 'Nano About Detail Candidate',
      candidateId: 'about-detail-20260402092045197-5w3n8s',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-detail-v2',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/about-glass-facade-detail.jpg',
      createdAt: '2026-04-02T09:20:45.222Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro baseline round 1 for homepage-wide compare, calibrated v2 prompt'
    }
  },
  'services-surface': {
    slot: 'services-surface',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/services-industrial-panel-bg.jpg',
      alt: '工業面板背景',
      label: 'Services Surface Stock Asset',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/electrician-operating-switchboard-17842834/',
      createdAt: null,
      licenseNote: 'Pexels License',
      notes:
        'Canonical stock placeholder for the Services section background surface role.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/services-surface/services-surface-20260402092127038-o18bcu.jpg',
      alt: '',
      label: 'Nano Services Surface Candidate',
      candidateId: 'services-surface-20260402092127038-o18bcu',
      model: 'gemini-3-pro-image-preview',
      promptId: 'services-surface-v2',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/services-industrial-panel-bg.jpg',
      createdAt: '2026-04-02T09:21:27.074Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro baseline round 1 for homepage-wide compare, calibrated v2 prompt'
    }
  },
  'ote-background': {
    slot: 'ote-background',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/ote-control-room-bg.jpg',
      alt: '整合監控室背景',
      label: 'OTE Background Stock Asset',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Pexels',
      sourceReference: 'https://www.pexels.com/photo/control-room-256219/',
      createdAt: null,
      licenseNote: 'Pexels License',
      notes:
        'Canonical stock placeholder for the One-Touch Experience section background image role.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/ote-background/ote-background-20260402094641991-lhlwvm.jpg',
      alt: '',
      label: 'Nano OTE Background Candidate',
      candidateId: 'ote-background-20260402094641991-lhlwvm',
      model: 'gemini-3-pro-image-preview',
      promptId: 'ote-background-v3',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/ote-control-room-bg.jpg',
      createdAt: '2026-04-02T09:46:42.020Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
    }
  },
  'mission-square': {
    slot: 'mission-square',
    liveSource: 'stock',
    states: {
      mission: {
        slot: 'mission-square',
        state: 'mission',
        liveSource: 'stock',
        stock: {
          src: '/images/demo/home/mission-tab-mission.jpg',
          alt: '',
          label: 'Mission State Stock Image',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Pexels',
          sourceReference:
            'https://www.pexels.com/photo/electrician-operating-switchboard-17842834/',
          createdAt: null,
          licenseNote: 'Pexels License',
          notes: 'Current approved stock image for the mission tab state.'
        },
        liveNano: null,
        latestCandidate: {
          src: '/images/generated/home/mission-square/mission/mission-square-mission-20260402094727279-eey1ly.jpg',
          alt: '',
          label: 'Mission Square / Mission',
          candidateId: 'mission-square-mission-20260402094727279-eey1ly',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-mission-v3',
          source: 'Nano Banana',
          sourceReference: '/images/demo/home/mission-tab-mission.jpg',
          createdAt: '2026-04-02T09:47:27.304Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
        }
      },
      'join-us': {
        slot: 'mission-square',
        state: 'join-us',
        liveSource: 'stock',
        stock: {
          src: '/images/demo/home/mission-tab-join-us.jpg',
          alt: '',
          label: 'Join Us State Stock Image',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Pexels',
          sourceReference:
            'https://www.pexels.com/photo/female-engineer-with-equipment-3862635/',
          createdAt: null,
          licenseNote: 'Pexels License',
          notes: 'Current approved stock image for the Join Us tab state.'
        },
        liveNano: null,
        latestCandidate: {
          src: '/images/generated/home/mission-square/join-us/mission-square-join-us-20260402094759653-wxiyj9.jpg',
          alt: '',
          label: 'Mission Square / Join Us',
          candidateId: 'mission-square-join-us-20260402094759653-wxiyj9',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-join-us-v3',
          source: 'Nano Banana',
          sourceReference: '/images/demo/home/mission-tab-join-us.jpg',
          createdAt: '2026-04-02T09:47:59.685Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
        }
      }
    }
  },
  'mission-cutout': {
    slot: 'mission-cutout',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/mission-engineer-cutout.jpg',
      alt: '',
      label: 'Mission Cutout Stock Image',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/engineer-reviewing-documents-in-factory-32845698/',
      createdAt: null,
      licenseNote: 'Pexels License',
      notes: 'Current approved stock image for the mission cutout.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/mission-cutout/mission-cutout-20260402094844834-ck4k1q.jpg',
      alt: '',
      label: 'Nano Mission Cutout Candidate',
      candidateId: 'mission-cutout-20260402094844834-ck4k1q',
      model: 'gemini-3-pro-image-preview',
      promptId: 'mission-cutout-v4',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/mission-engineer-cutout.jpg',
      createdAt: '2026-04-02T09:48:44.873Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
    }
  },
  'connector-image': {
    slot: 'connector-image',
    liveSource: 'stock',
    stock: {
      src: '/images/demo/home/footer-engineering-team.jpg',
      alt: '工程團隊於實驗環境協作討論',
      label: 'Connector Image Stock Asset',
      candidateId: null,
      model: null,
      promptId: null,
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/engineers-at-work-3861973/',
      createdAt: null,
      licenseNote: 'Pexels License',
      notes:
        'Canonical stock placeholder for the footer connector breakout image role.'
    },
    liveNano: null,
    latestCandidate: {
      src: '/images/generated/home/connector-image/connector-image-20260402094936217-ylj9zz.jpg',
      alt: '',
      label: 'Nano Connector Image Candidate',
      candidateId: 'connector-image-20260402094936217-ylj9zz',
      model: 'gemini-3-pro-image-preview',
      promptId: 'connector-image-v3',
      source: 'Nano Banana',
      sourceReference: '/images/demo/home/footer-engineering-team.jpg',
      createdAt: '2026-04-02T09:49:36.257Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Pro rerun with East Asian Taiwan-based engineering team casting requirement'
    }
  }
} as HomePageImageRegistry

export function getHomePageImageEntry(
  slot: HomePageSingleImageSlotKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: 'mission-square',
  state: HomePageImageStateKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: HomePageImageSlotKey,
  state?: HomePageImageStateKey
): HomePageImageSlotRegistry {
  if (slot === 'mission-square') {
    if (!state) {
      throw new Error('mission-square requires state.')
    }

    return homePageImageRegistry['mission-square'].states[state]
  }

  return homePageImageRegistry[slot]
}
