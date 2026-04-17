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

export type HomePageStateAwareSlotKey = 'mission-square' | 'about-process-step'
export type HomePageImageSlotKey =
  | HomePageSingleImageSlotKey
  | HomePageStateAwareSlotKey
export type HomePageImageStateKey = 'mission' | 'join-us' | '01' | '02' | '03' | '04'

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
  slot: HomePageStateAwareSlotKey
  liveSource: HomePageImageSourceKey
  states: Record<string, HomePageImageSlotRegistry>
}

export interface HomePageImageRegistry {
  'home-hero': HomePageImageSlotRegistry
  'about-primary': HomePageImageSlotRegistry
  'about-detail': HomePageImageSlotRegistry
  'services-surface': HomePageImageSlotRegistry
  'ote-background': HomePageImageSlotRegistry
  'mission-square': HomePageStateAwareImageRegistry
  'about-process-step': HomePageStateAwareImageRegistry
  'mission-cutout': HomePageImageSlotRegistry
  'connector-image': HomePageImageSlotRegistry
}

// 由 generate/promote workflow 同步更新；前端只讀這份精簡 registry。
export const homePageImageRegistry: HomePageImageRegistry = {
  'home-hero': {
    slot: 'home-hero',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/hero-simulator-control-room.jpg',
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
    liveNano: {
      src: '/images/generated/home/hero/home-hero-20260415053535242-5lupkr.jpg',
      alt: '',
      label: 'Nano Hero Candidate',
      candidateId: 'home-hero-20260415053535242-5lupkr',
      model: 'gemini-3-pro-image-preview',
      promptId: 'home-hero-v6',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-15T05:35:35.254Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes: 'Strict Inward Focus v15 - candidate 2'
    },
    latestCandidate: {
      src: '/images/generated/home/hero/home-hero-20260415053609749-ge1rmc.jpg',
      alt: '',
      label: 'Nano Hero Candidate',
      candidateId: 'home-hero-20260415053609749-ge1rmc',
      model: 'gemini-3-pro-image-preview',
      promptId: 'home-hero-v6',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-15T05:36:09.761Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes: 'Strict Inward Focus v15 - candidate 3'
    }
  },
  'about-primary': {
    slot: 'about-primary',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/about-glass-office-towers.jpg',
      alt: 'Ã§ÂÂ¾Ã¤Â»Â£Ã©Â«ËœÃ§Â§â€˜Ã¦Å â‚¬Ã¥Â»ÂºÃ§Â¯â€°Ã¥Â¤â€“Ã¨Â§â‚¬',
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
    liveNano: {
      src: '/images/generated/home/about-primary/about-primary-20260414095218355-ew0j7u.jpg',
      alt: '',
      label: 'Nano About Primary Candidate',
      candidateId: 'about-primary-20260414095218355-ew0j7u',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-primary-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:52:18.366Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/about-primary/about-primary-20260414095218355-ew0j7u.jpg',
      alt: '',
      label: 'Nano About Primary Candidate',
      candidateId: 'about-primary-20260414095218355-ew0j7u',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-primary-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:52:18.366Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'about-detail': {
    slot: 'about-detail',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/about-glass-facade-detail.jpg',
      alt: 'Ã§ÂÂ¾Ã¤Â»Â£Ã§Å½Â»Ã§â€™Æ’Ã§Â«â€¹Ã©ÂÂ¢Ã§Â´Â°Ã§Â¯â‚¬',
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
    liveNano: {
      src: '/images/generated/home/about-detail/about-detail-20260414095251649-u4bhzb.jpg',
      alt: '',
      label: 'Nano About Detail Candidate',
      candidateId: 'about-detail-20260414095251649-u4bhzb',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-detail-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:52:51.662Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/about-detail/about-detail-20260414095251649-u4bhzb.jpg',
      alt: '',
      label: 'Nano About Detail Candidate',
      candidateId: 'about-detail-20260414095251649-u4bhzb',
      model: 'gemini-3-pro-image-preview',
      promptId: 'about-detail-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:52:51.662Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'services-surface': {
    slot: 'services-surface',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/services-industrial-panel-bg.jpg',
      alt: 'Ã¥Â·Â¥Ã¦Â¥Â­Ã©ÂÂ¢Ã¦ÂÂ¿Ã¨Æ’Å’Ã¦â„¢Â¯',
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
    liveNano: {
      src: '/images/generated/home/services-surface/services-surface-20260414095323038-stbd7u.jpg',
      alt: '',
      label: 'Nano Services Surface Candidate',
      candidateId: 'services-surface-20260414095323038-stbd7u',
      model: 'gemini-3-pro-image-preview',
      promptId: 'services-surface-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:53:23.047Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/services-surface/services-surface-20260414095323038-stbd7u.jpg',
      alt: '',
      label: 'Nano Services Surface Candidate',
      candidateId: 'services-surface-20260414095323038-stbd7u',
      model: 'gemini-3-pro-image-preview',
      promptId: 'services-surface-v2',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:53:23.047Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'ote-background': {
    slot: 'ote-background',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/ote-control-room-bg.jpg',
      alt: 'Ã¦â€¢Â´Ã¥ÂË†Ã§â€ºÂ£Ã¦Å½Â§Ã¥Â®Â¤Ã¨Æ’Å’Ã¦â„¢Â¯',
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
    liveNano: {
      src: '/images/generated/home/ote-background/ote-background-20260414095354979-oqxa07.jpg',
      alt: '',
      label: 'Nano OTE Background Candidate',
      candidateId: 'ote-background-20260414095354979-oqxa07',
      model: 'gemini-3-pro-image-preview',
      promptId: 'ote-background-v5',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:53:54.990Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/ote-background/ote-background-20260414095354979-oqxa07.jpg',
      alt: '',
      label: 'Nano OTE Background Candidate',
      candidateId: 'ote-background-20260414095354979-oqxa07',
      model: 'gemini-3-pro-image-preview',
      promptId: 'ote-background-v5',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:53:54.990Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'mission-square': {
    slot: 'mission-square',
    liveSource: 'nano',
    states: {
      mission: {
        slot: 'mission-square',
        state: 'mission',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/home/mission-tab-mission.jpg',
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
        liveNano: {
          src: '/images/generated/home/mission-square/mission/mission-square-mission-20260414095425066-u3vzh9.jpg',
          alt: '',
          label: 'Mission Square / Mission',
          candidateId: 'mission-square-mission-20260414095425066-u3vzh9',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-mission-v3',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-14T09:54:25.077Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
        },
        latestCandidate: {
          src: '/images/generated/home/mission-square/mission/mission-square-mission-20260414095425066-u3vzh9.jpg',
          alt: '',
          label: 'Mission Square / Mission',
          candidateId: 'mission-square-mission-20260414095425066-u3vzh9',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-mission-v3',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-14T09:54:25.077Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
        }
      },
      'join-us': {
        slot: 'mission-square',
        state: 'join-us',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/home/mission-tab-join-us.jpg',
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
        liveNano: {
          src: '/images/generated/home/mission-square/join-us/mission-square-join-us-20260414095456057-vz9w3t.jpg',
          alt: '',
          label: 'Mission Square / Join Us',
          candidateId: 'mission-square-join-us-20260414095456057-vz9w3t',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-join-us-v3',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-14T09:54:56.068Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
        },
        latestCandidate: {
          src: '/images/generated/home/mission-square/join-us/mission-square-join-us-20260414095456057-vz9w3t.jpg',
          alt: '',
          label: 'Mission Square / Join Us',
          candidateId: 'mission-square-join-us-20260414095456057-vz9w3t',
          model: 'gemini-3-pro-image-preview',
          promptId: 'mission-square-join-us-v3',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-14T09:54:56.068Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes:
            'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
        }
      }
    }
  },
  'mission-cutout': {
    slot: 'mission-cutout',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/mission-engineer-cutout.jpg',
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
    liveNano: {
      src: '/images/generated/home/mission-cutout/mission-cutout-20260414095532473-gkr1ql.jpg',
      alt: '',
      label: 'Nano Mission Cutout Candidate',
      candidateId: 'mission-cutout-20260414095532473-gkr1ql',
      model: 'gemini-3-pro-image-preview',
      promptId: 'mission-cutout-v4',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:55:32.485Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/mission-cutout/mission-cutout-20260414095532473-gkr1ql.jpg',
      alt: '',
      label: 'Nano Mission Cutout Candidate',
      candidateId: 'mission-cutout-20260414095532473-gkr1ql',
      model: 'gemini-3-pro-image-preview',
      promptId: 'mission-cutout-v4',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:55:32.485Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'connector-image': {
    slot: 'connector-image',
    liveSource: 'nano',
    stock: {
      src: '/images/stock/home/footer-engineering-team.jpg',
      alt: 'Ã¥Â·Â¥Ã§Â¨â€¹Ã¥Å“ËœÃ©Å¡Å Ã¦â€“Â¼Ã¥Â¯Â¦Ã©Â©â€”Ã§â€™Â°Ã¥Â¢Æ’Ã¥Ââ€Ã¤Â½Å“Ã¨Â¨Å½Ã¨Â«â€“',
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
    liveNano: {
      src: '/images/generated/home/connector-image/connector-image-20260414095600902-dvpnai.jpg',
      alt: '',
      label: 'Nano Connector Image Candidate',
      candidateId: 'connector-image-20260414095600902-dvpnai',
      model: 'gemini-3-pro-image-preview',
      promptId: 'connector-image-v3',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:56:00.913Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    },
    latestCandidate: {
      src: '/images/generated/home/connector-image/connector-image-20260414095600902-dvpnai.jpg',
      alt: '',
      label: 'Nano Connector Image Candidate',
      candidateId: 'connector-image-20260414095600902-dvpnai',
      model: 'gemini-3-pro-image-preview',
      promptId: 'connector-image-v3',
      source: 'Nano Banana',
      sourceReference: null,
      createdAt: '2026-04-14T09:56:00.913Z',
      licenseNote:
        'Generated with Gemini image generation (SynthID watermark).',
      notes:
        'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.'
    }
  },
  'about-process-step': {
    slot: 'about-process-step',
    liveSource: 'nano',
    states: {
      '01': {
        slot: 'about-process-step',
        state: '01',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/about/process-step-01.jpg',
          alt: '',
          label: 'Process Step 01 Stock',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Placeholder',
          sourceReference: null,
          createdAt: null,
          licenseNote: null,
          notes: null
        },
        liveNano: {
          src: '/images/generated/home/about-process/01/about-process-step-01-20260415082126414-q4m8bi.jpg',
          alt: '',
          label: 'Process Step 01: Scope',
          candidateId: 'about-process-step-01-20260415082126414-q4m8bi',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-01-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:21:26.422Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Scope'
        },
        latestCandidate: {
          src: '/images/generated/home/about-process/01/about-process-step-01-20260415082126414-q4m8bi.jpg',
          alt: '',
          label: 'Process Step 01: Scope',
          candidateId: 'about-process-step-01-20260415082126414-q4m8bi',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-01-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:21:26.422Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Scope'
        }
      },
      '02': {
        slot: 'about-process-step',
        state: '02',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/about/process-step-02.jpg',
          alt: '',
          label: 'Process Step 02 Stock',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Placeholder',
          sourceReference: null,
          createdAt: null,
          licenseNote: null,
          notes: null
        },
        liveNano: {
          src: '/images/generated/home/about-process/02/about-process-step-02-20260415082207544-7jig6x.jpg',
          alt: '',
          label: 'Process Step 02: Planning',
          candidateId: 'about-process-step-02-20260415082207544-7jig6x',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-02-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:22:07.552Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Planning'
        },
        latestCandidate: {
          src: '/images/generated/home/about-process/02/about-process-step-02-20260415082207544-7jig6x.jpg',
          alt: '',
          label: 'Process Step 02: Planning',
          candidateId: 'about-process-step-02-20260415082207544-7jig6x',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-02-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:22:07.552Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Planning'
        }
      },
      '03': {
        slot: 'about-process-step',
        state: '03',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/about/process-step-03.jpg',
          alt: '',
          label: 'Process Step 03 Stock',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Placeholder',
          sourceReference: null,
          createdAt: null,
          licenseNote: null,
          notes: null
        },
        liveNano: {
          src: '/images/generated/home/about-process/03/about-process-step-03-20260415082241973-zroesd.jpg',
          alt: '',
          label: 'Process Step 03: Execution',
          candidateId: 'about-process-step-03-20260415082241973-zroesd',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-03-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:22:41.981Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Execution'
        },
        latestCandidate: {
          src: '/images/generated/home/about-process/03/about-process-step-03-20260415082241973-zroesd.jpg',
          alt: '',
          label: 'Process Step 03: Execution',
          candidateId: 'about-process-step-03-20260415082241973-zroesd',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-03-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:22:41.981Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Execution'
        }
      },
      '04': {
        slot: 'about-process-step',
        state: '04',
        liveSource: 'nano',
        stock: {
          src: '/images/stock/about/process-step-04.jpg',
          alt: '',
          label: 'Process Step 04 Stock',
          candidateId: null,
          model: null,
          promptId: null,
          source: 'Placeholder',
          sourceReference: null,
          createdAt: null,
          licenseNote: null,
          notes: null
        },
        liveNano: {
          src: '/images/generated/home/about-process/04/about-process-step-04-20260415082307517-dfiew8.jpg',
          alt: '',
          label: 'Process Step 04: Handover',
          candidateId: 'about-process-step-04-20260415082307517-dfiew8',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-04-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:23:07.528Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Handover'
        },
        latestCandidate: {
          src: '/images/generated/home/about-process/04/about-process-step-04-20260415082307517-dfiew8.jpg',
          alt: '',
          label: 'Process Step 04: Handover',
          candidateId: 'about-process-step-04-20260415082307517-dfiew8',
          model: 'gemini-3.1-flash-image-preview',
          promptId: 'about-process-step-04-v1',
          source: 'Nano Banana',
          sourceReference: null,
          createdAt: '2026-04-15T08:23:07.528Z',
          licenseNote:
            'Generated with Gemini image generation (SynthID watermark).',
          notes: 'Modern Symbolic v19 - Handover'
        }
      }
    }
  }
} as HomePageImageRegistry

export function getHomePageImageEntry(
  slot: HomePageSingleImageSlotKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: HomePageStateAwareSlotKey,
  state: HomePageImageStateKey
): HomePageImageSlotRegistry
export function getHomePageImageEntry(
  slot: HomePageImageSlotKey,
  state?: HomePageImageStateKey
): HomePageImageSlotRegistry {
  const stateAwareSlots: HomePageStateAwareSlotKey[] = [
    'mission-square',
    'about-process-step'
  ]

  if (stateAwareSlots.includes(slot as HomePageStateAwareSlotKey)) {
    if (!state) {
      throw new Error('Slot "' + slot + '" requires state.')
    }

    return (
      homePageImageRegistry[
        slot as HomePageStateAwareSlotKey
      ] as HomePageStateAwareImageRegistry
    ).states[state] as HomePageImageSlotRegistry
  }

  return homePageImageRegistry[slot as HomePageSingleImageSlotKey]
}
