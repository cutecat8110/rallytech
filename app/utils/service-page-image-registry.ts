/* eslint-disable @stylistic/quote-props */
import type { ServiceSlug } from '~~/i18n/locales/types'

export interface BaseServicePageImageAsset {
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

export type ServicesOverviewHeroImageAsset = BaseServicePageImageAsset
export type ServiceRoleImageAsset = BaseServicePageImageAsset

export type ServiceImageRole =
  | 'overview-card'
  | 'detail-hero'
  | 'detail-feature'

export interface ServiceImageSlotRegistry {
  slot: string
  liveSource: 'stock' | 'nano'
  stock: ServiceRoleImageAsset
  liveNano: ServiceRoleImageAsset | null
  latestCandidate: ServiceRoleImageAsset | null
}

export type ServicePageImageRegistry = Record<
  ServiceSlug,
  Record<ServiceImageRole, ServiceImageSlotRegistry>
>

export interface ServicesOverviewHeroRegistry {
  slot: 'services-overview-hero'
  liveSource: 'stock' | 'nano'
  stock: ServicesOverviewHeroImageAsset
  liveNano: ServicesOverviewHeroImageAsset | null
  latestCandidate: ServicesOverviewHeroImageAsset | null
}

export const servicesOverviewHeroRegistry: ServicesOverviewHeroRegistry = {
  slot: 'services-overview-hero',
  liveSource: 'nano',
  stock: {
    src: '/images/stock/services/overview/services-overview-hero-control-room.jpg',
    alt: '',
    label: 'services-overview-hero stock image',
    candidateId: null,
    model: null,
    promptId: null,
    source: 'Unsplash',
    sourceReference:
      'https://unsplash.com/photos/a-control-room-with-a-desk-and-two-chairs-p7Bfwn_VKRQ',
    createdAt: null,
    licenseNote: 'Unsplash License',
    notes: null,
    objectPosition: 'center center'
  },
  liveNano: {
    src: '/images/generated/services/overview/services-overview-hero-20260414085046743-40uadq.jpg',
    alt: '',
    label: 'Nano Services Overview Hero Candidate',
    candidateId: 'services-overview-hero-20260414085046743-40uadq',
    model: 'gemini-3-pro-image-preview',
    promptId: 'services-overview-hero-v1',
    source: 'Nano Banana',
    sourceReference: null,
    createdAt: '2026-04-14T08:50:46.754Z',
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes:
      'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
    objectPosition: 'center center'
  },
  latestCandidate: {
    src: '/images/generated/services/overview/services-overview-hero-20260414095635704-nwrsw0.jpg',
    alt: '',
    label: 'Nano Services Overview Hero Candidate',
    candidateId: 'services-overview-hero-20260414095635704-nwrsw0',
    model: 'gemini-3-pro-image-preview',
    promptId: 'services-overview-hero-v1',
    source: 'Nano Banana',
    sourceReference: null,
    createdAt: '2026-04-14T09:56:35.715Z',
    licenseNote: 'Generated with Gemini image generation (SynthID watermark).',
    notes:
      'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
    objectPosition: 'center center'
  }
} as ServicesOverviewHeroRegistry

export const servicePageImageRegistry: ServicePageImageRegistry = {
  'scada-hmi-graphics': {
    'overview-card': {
      slot: 'scada-hmi-graphics-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/scada-hmi-graphics/overview-card-hmi-control-screen.jpg',
        alt: '',
        label: 'scada-hmi-graphics-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/white-digital-device-at-71-lS_YkX3QS9c',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/scada-hmi-graphics/overview-card/scada-hmi-graphics-overview-card-20260414085116568-0lzsq2.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics overview-card Candidate',
        candidateId:
          'scada-hmi-graphics-overview-card-20260414085116568-0lzsq2',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:51:16.589Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/scada-hmi-graphics/overview-card/scada-hmi-graphics-overview-card-20260414095708664-754rvd.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics overview-card Candidate',
        candidateId:
          'scada-hmi-graphics-overview-card-20260414095708664-754rvd',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:57:08.675Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'scada-hmi-graphics-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg',
        alt: '',
        label: 'scada-hmi-graphics-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/advanced-control-room-in-el-agustino-lima-32529341/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/scada-hmi-graphics/detail-hero/scada-hmi-graphics-detail-hero-20260414085149962-vq7v7s.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics detail-hero Candidate',
        candidateId: 'scada-hmi-graphics-detail-hero-20260414085149962-vq7v7s',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:51:49.971Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/scada-hmi-graphics/detail-hero/scada-hmi-graphics-detail-hero-20260414095738152-a28bzh.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics detail-hero Candidate',
        candidateId: 'scada-hmi-graphics-detail-hero-20260414095738152-a28bzh',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:57:38.163Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'scada-hmi-graphics-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/scada-hmi-graphics/industrial-hmi-operator-tablet.jpg',
        alt: '',
        label: 'scada-hmi-graphics-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/person-holding-black-tablet-computer-Bg0Geue-cY8',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/scada-hmi-graphics/detail-feature/scada-hmi-graphics-detail-feature-20260414085220059-sp6m56.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics detail-feature Candidate',
        candidateId:
          'scada-hmi-graphics-detail-feature-20260414085220059-sp6m56',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:52:20.069Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/scada-hmi-graphics/detail-feature/scada-hmi-graphics-detail-feature-20260414095807670-r9ekf0.jpg',
        alt: '',
        label: 'Nano scada-hmi-graphics detail-feature Candidate',
        candidateId:
          'scada-hmi-graphics-detail-feature-20260414095807670-r9ekf0',
        model: 'gemini-3-pro-image-preview',
        promptId: 'scada-hmi-graphics-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:58:07.682Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'ie-services': {
    'overview-card': {
      slot: 'ie-services-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/ie-services/overview-card-instrument-panel-gauges.jpg',
        alt: '',
        label: 'ie-services-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/white-and-red-electric-meter-dIrSAyhCDa0',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/ie-services/overview-card/ie-services-overview-card-20260414085256939-oshhsj.jpg',
        alt: '',
        label: 'Nano ie-services overview-card Candidate',
        candidateId: 'ie-services-overview-card-20260414085256939-oshhsj',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:52:56.950Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/ie-services/overview-card/ie-services-overview-card-20260414095837589-we4r07.jpg',
        alt: '',
        label: 'Nano ie-services overview-card Candidate',
        candidateId: 'ie-services-overview-card-20260414095837589-we4r07',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:58:37.601Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'ie-services-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/ie-services/detail-hero-electrical-engineer-inspection.jpg',
        alt: '',
        label: 'ie-services-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-man-in-a-factory-working-on-a-piece-of-equipment-zekShM5_K64',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/ie-services/detail-hero/ie-services-detail-hero-20260414085325882-e8vnso.jpg',
        alt: '',
        label: 'Nano ie-services detail-hero Candidate',
        candidateId: 'ie-services-detail-hero-20260414085325882-e8vnso',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:53:25.893Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/ie-services/detail-hero/ie-services-detail-hero-20260414095907847-mnvpvz.jpg',
        alt: '',
        label: 'Nano ie-services detail-hero Candidate',
        candidateId: 'ie-services-detail-hero-20260414095907847-mnvpvz',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:59:07.859Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'ie-services-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/ie-services/instrument-control-panel-close-up.jpg',
        alt: '',
        label: 'ie-services-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-close-up-of-a-control-panel-AGQZprOABgQ',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/ie-services/detail-feature/ie-services-detail-feature-20260414085400436-rylrea.jpg',
        alt: '',
        label: 'Nano ie-services detail-feature Candidate',
        candidateId: 'ie-services-detail-feature-20260414085400436-rylrea',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:54:00.448Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/ie-services/detail-feature/ie-services-detail-feature-20260414095947743-w9id20.jpg',
        alt: '',
        label: 'Nano ie-services detail-feature Candidate',
        candidateId: 'ie-services-detail-feature-20260414095947743-w9id20',
        model: 'gemini-3-pro-image-preview',
        promptId: 'ie-services-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:59:47.754Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'plc-dcs-programming-and-migration': {
    'overview-card': {
      slot: 'plc-dcs-programming-and-migration-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/plc-dcs-programming-and-migration/overview-card-plc-control-cabinet.jpg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/electrical-panel-with-wires-and-components-q0Jo_J5YxHY',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/overview-card/plc-dcs-programming-and-migration-overview-card-20260414085427820-endftf.jpg',
        alt: '',
        label: 'Nano plc-dcs-programming-and-migration overview-card Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-overview-card-20260414085427820-endftf',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:54:27.832Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/overview-card/plc-dcs-programming-and-migration-overview-card-20260414100014795-v843l6.jpg',
        alt: '',
        label: 'Nano plc-dcs-programming-and-migration overview-card Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-overview-card-20260414100014795-v843l6',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:00:14.806Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'plc-dcs-programming-and-migration-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/plc-dcs-programming-and-migration/detail-hero-automation-engineer-laptop.jpg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/man-works-on-a-computer-in-a-manufacturing-setting-RyMTGAYZpjY',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/detail-hero/plc-dcs-programming-and-migration-detail-hero-20260414085455568-jeckl8.jpg',
        alt: '',
        label: 'Nano plc-dcs-programming-and-migration detail-hero Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-detail-hero-20260414085455568-jeckl8',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:54:55.578Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/detail-hero/plc-dcs-programming-and-migration-detail-hero-20260414100046049-pdfym9.jpg',
        alt: '',
        label: 'Nano plc-dcs-programming-and-migration detail-hero Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-detail-hero-20260414100046049-pdfym9',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:00:46.062Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'plc-dcs-programming-and-migration-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/plc-dcs-programming-and-migration/control-system-engineer-laptop.jpg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-using-black-laptop-computer-aL2rxQhEfAM',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/detail-feature/plc-dcs-programming-and-migration-detail-feature-20260414085524841-arj30x.jpg',
        alt: '',
        label:
          'Nano plc-dcs-programming-and-migration detail-feature Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-detail-feature-20260414085524841-arj30x',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:55:24.851Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/plc-dcs-programming-and-migration/detail-feature/plc-dcs-programming-and-migration-detail-feature-20260414100126014-67vi6p.jpg',
        alt: '',
        label:
          'Nano plc-dcs-programming-and-migration detail-feature Candidate',
        candidateId:
          'plc-dcs-programming-and-migration-detail-feature-20260414100126014-67vi6p',
        model: 'gemini-3-pro-image-preview',
        promptId: 'plc-dcs-programming-and-migration-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:01:26.024Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'pi-server': {
    'overview-card': {
      slot: 'pi-server-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/pi-server/overview-card-server-rack-lights.jpg',
        alt: '',
        label: 'pi-server-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-close-up-of-a-green-light-in-a-server-zMrGQu21qcU',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/pi-server/overview-card/pi-server-overview-card-20260414085558662-q056qa.jpg',
        alt: '',
        label: 'Nano pi-server overview-card Candidate',
        candidateId: 'pi-server-overview-card-20260414085558662-q056qa',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:55:58.672Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/pi-server/overview-card/pi-server-overview-card-20260414100153899-o170ee.jpg',
        alt: '',
        label: 'Nano pi-server overview-card Candidate',
        candidateId: 'pi-server-overview-card-20260414100153899-o170ee',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:01:53.910Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'pi-server-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/pi-server/detail-hero-server-room-operations.jpg',
        alt: '',
        label: 'pi-server-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/server-racks-on-data-center-4508751/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/pi-server/detail-hero/pi-server-detail-hero-20260414085640436-epuu8b.jpg',
        alt: '',
        label: 'Nano pi-server detail-hero Candidate',
        candidateId: 'pi-server-detail-hero-20260414085640436-epuu8b',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:56:40.448Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/pi-server/detail-hero/pi-server-detail-hero-20260414100225913-4h0ni5.jpg',
        alt: '',
        label: 'Nano pi-server detail-hero Candidate',
        candidateId: 'pi-server-detail-hero-20260414100225913-4h0ni5',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:02:25.924Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'pi-server-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/pi-server/industrial-server-room-dashboard.jpg',
        alt: '',
        label: 'pi-server-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-close-up-of-a-computer-in-a-dark-room-Kqg_6JPhxRk',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/pi-server/detail-feature/pi-server-detail-feature-20260414085709120-714y6j.jpg',
        alt: '',
        label: 'Nano pi-server detail-feature Candidate',
        candidateId: 'pi-server-detail-feature-20260414085709120-714y6j',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:57:09.131Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/pi-server/detail-feature/pi-server-detail-feature-20260414100252124-oxm3ro.jpg',
        alt: '',
        label: 'Nano pi-server detail-feature Candidate',
        candidateId: 'pi-server-detail-feature-20260414100252124-oxm3ro',
        model: 'gemini-3-pro-image-preview',
        promptId: 'pi-server-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:02:52.135Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  historians: {
    'overview-card': {
      slot: 'historians-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/historians/overview-card-industrial-server-rack.jpg',
        alt: '',
        label: 'historians-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/close-up-of-computer-hardware-17489157/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/historians/overview-card/historians-overview-card-20260414085743910-0ysxjd.jpg',
        alt: '',
        label: 'Nano historians overview-card Candidate',
        candidateId: 'historians-overview-card-20260414085743910-0ysxjd',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:57:43.921Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/historians/overview-card/historians-overview-card-20260414100318360-kw32ko.jpg',
        alt: '',
        label: 'Nano historians overview-card Candidate',
        candidateId: 'historians-overview-card-20260414100318360-kw32ko',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:03:18.370Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'historians-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/historians/detail-hero-engineer-data-screens.jpg',
        alt: '',
        label: 'historians-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/man-in-white-and-black-striped-polo-shirt-in-front-of-monitor-At4udACn5oA',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/historians/detail-hero/historians-detail-hero-20260414085812950-3f58en.jpg',
        alt: '',
        label: 'Nano historians detail-hero Candidate',
        candidateId: 'historians-detail-hero-20260414085812950-3f58en',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:58:12.961Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/historians/detail-hero/historians-detail-hero-20260414100345327-ssuoyx.jpg',
        alt: '',
        label: 'Nano historians detail-hero Candidate',
        candidateId: 'historians-detail-hero-20260414100345327-ssuoyx',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:03:45.338Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'historians-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/historians/historian-server-rack-close-up.jpg',
        alt: '',
        label: 'historians-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-close-up-of-a-rack-of-computer-equipment-eqd0f78u9nI',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/historians/detail-feature/historians-detail-feature-20260414085845622-sk4qev.jpg',
        alt: '',
        label: 'Nano historians detail-feature Candidate',
        candidateId: 'historians-detail-feature-20260414085845622-sk4qev',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:58:45.633Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/historians/detail-feature/historians-detail-feature-20260414100416615-f3erkb.jpg',
        alt: '',
        label: 'Nano historians detail-feature Candidate',
        candidateId: 'historians-detail-feature-20260414100416615-f3erkb',
        model: 'gemini-3-pro-image-preview',
        promptId: 'historians-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:04:16.628Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'it-infrastructure': {
    'overview-card': {
      slot: 'it-infrastructure-overview-card',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/it-infrastructure/overview-card-server-racks-engineer.jpg',
        alt: '',
        label: 'it-infrastructure-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/software-engineer-standing-beside-server-racks-1181354/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 1 new service.',
        objectPosition: '60% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'it-infrastructure-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/it-infrastructure/detail-hero-data-center-racks.jpg',
        alt: '',
        label: 'it-infrastructure-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/server-racks-on-data-center-5408005/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 1 new service.',
        objectPosition: '42% 50%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'it-infrastructure-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/it-infrastructure/detail-feature-data-hub-storage.jpg',
        alt: '',
        label: 'it-infrastructure-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/close-up-of-a-data-hub-diskstation-19825057/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 1 new service.',
        objectPosition: '56% 48%'
      },
      liveNano: null,
      latestCandidate: null
    }
  },
  'cybersecurity-network': {
    'overview-card': {
      slot: 'cybersecurity-network-overview-card',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/cybersecurity-network/overview-card-network-rack.jpg',
        alt: '',
        label: 'cybersecurity-network-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference: 'https://www.pexels.com/photo/network-rack-17323801/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 2 new service.',
        objectPosition: '44% 46%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'cybersecurity-network-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/cybersecurity-network/detail-hero-engineer-core-switch.jpg',
        alt: '',
        label: 'cybersecurity-network-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/engineer-fixing-core-swith-in-data-center-room-19226354/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 2 new service.',
        objectPosition: '54% 48%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'cybersecurity-network-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/cybersecurity-network/detail-feature-server-cables.jpg',
        alt: '',
        label: 'cybersecurity-network-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/cables-connected-on-server-2881229/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 2 new service.',
        objectPosition: '54% 48%'
      },
      liveNano: null,
      latestCandidate: null
    }
  },
  'network-design': {
    'overview-card': {
      slot: 'network-design-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/network-design/overview-card-network-switch-cables.jpg',
        alt: '',
        label: 'network-design-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/blue-utp-cord-40XgDxBfYXM',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/network-design/overview-card/network-design-overview-card-20260414085918444-v7gi8i.jpg',
        alt: '',
        label: 'Nano network-design overview-card Candidate',
        candidateId: 'network-design-overview-card-20260414085918444-v7gi8i',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:59:18.455Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/network-design/overview-card/network-design-overview-card-20260414100451458-o2h49b.jpg',
        alt: '',
        label: 'Nano network-design overview-card Candidate',
        candidateId: 'network-design-overview-card-20260414100451458-o2h49b',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:04:51.469Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'network-design-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/network-design/detail-hero-industrial-network-room.jpg',
        alt: '',
        label: 'network-design-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-close-up-of-a-network-with-wires-connected-to-it-dyUp7WPu5q4',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/network-design/detail-hero/network-design-detail-hero-20260414085948855-b8ftt1.jpg',
        alt: '',
        label: 'Nano network-design detail-hero Candidate',
        candidateId: 'network-design-detail-hero-20260414085948855-b8ftt1',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T08:59:48.864Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/network-design/detail-hero/network-design-detail-hero-20260414100521192-soi217.jpg',
        alt: '',
        label: 'Nano network-design detail-hero Candidate',
        candidateId: 'network-design-detail-hero-20260414100521192-soi217',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:05:21.203Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'network-design-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/network-design/network-servers-connected-cables.jpg',
        alt: '',
        label: 'network-design-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/network-servers-are-connected-with-cables-3qZ6qT1DKxU',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/network-design/detail-feature/network-design-detail-feature-20260414090027866-yjbyoz.jpg',
        alt: '',
        label: 'Nano network-design detail-feature Candidate',
        candidateId: 'network-design-detail-feature-20260414090027866-yjbyoz',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:00:27.881Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/network-design/detail-feature/network-design-detail-feature-20260414100551162-hpkze6.jpg',
        alt: '',
        label: 'Nano network-design detail-feature Candidate',
        candidateId: 'network-design-detail-feature-20260414100551162-hpkze6',
        model: 'gemini-3-pro-image-preview',
        promptId: 'network-design-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:05:51.172Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'offshore-wind-operations': {
    'overview-card': {
      slot: 'offshore-wind-operations-overview-card',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/offshore-wind-operations/overview-card-offshore-wind-turbines.jpg',
        alt: '',
        label: 'offshore-wind-operations-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/wind-turbines-on-the-sea-13223602/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 3 new service.',
        objectPosition: '60% 46%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'offshore-wind-operations-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/offshore-wind-operations/detail-hero-offshore-electrical-station.jpg',
        alt: '',
        label: 'offshore-wind-operations-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/wind-turbines-and-electrical-station-in-the-sea-26971292/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 3 new service.',
        objectPosition: '58% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'offshore-wind-operations-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/offshore-wind-operations/detail-feature-north-sea-wind-turbines.jpg',
        alt: '',
        label: 'offshore-wind-operations-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/offshore-wind-turbines-in-north-sea-scotland-31656794/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes:
          'Stock asset selected for docs/rewrite/文案.md item 3 new service.',
        objectPosition: '60% 50%'
      },
      liveNano: null,
      latestCandidate: null
    }
  },
  'remote-monitoring-and-data': {
    'overview-card': {
      slot: 'remote-monitoring-and-data-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/remote-monitoring-and-data/overview-card-monitor-wall-control-center.jpg',
        alt: '',
        label: 'remote-monitoring-and-data-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-control-room-with-a-map-on-the-wall-tDc7zZ93cr8',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/remote-monitoring-and-data/overview-card/remote-monitoring-and-data-overview-card-20260414090055787-z14rus.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data overview-card Candidate',
        candidateId:
          'remote-monitoring-and-data-overview-card-20260414090055787-z14rus',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:00:55.796Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/remote-monitoring-and-data/overview-card/remote-monitoring-and-data-overview-card-20260414100627021-r9ubgo.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data overview-card Candidate',
        candidateId:
          'remote-monitoring-and-data-overview-card-20260414100627021-r9ubgo',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:06:27.030Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'remote-monitoring-and-data-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/remote-monitoring-and-data/detail-hero-remote-monitoring-laptop.jpg',
        alt: '',
        label: 'remote-monitoring-and-data-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/technicians-in-control-room-operating-machinery-32845695/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/remote-monitoring-and-data/detail-hero/remote-monitoring-and-data-detail-hero-20260414090126297-rxqvro.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data detail-hero Candidate',
        candidateId:
          'remote-monitoring-and-data-detail-hero-20260414090126297-rxqvro',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:01:26.308Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/remote-monitoring-and-data/detail-hero/remote-monitoring-and-data-detail-hero-20260414100656599-mlqbze.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data detail-hero Candidate',
        candidateId:
          'remote-monitoring-and-data-detail-hero-20260414100656599-mlqbze',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:06:56.610Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'remote-monitoring-and-data-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/remote-monitoring-and-data/remote-monitoring-control-room.jpg',
        alt: '',
        label: 'remote-monitoring-and-data-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-man-sitting-in-front-of-multiple-monitors-TtMKq3lJm-U',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/remote-monitoring-and-data/detail-feature/remote-monitoring-and-data-detail-feature-20260414090154625-nsr4qr.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data detail-feature Candidate',
        candidateId:
          'remote-monitoring-and-data-detail-feature-20260414090154625-nsr4qr',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:01:54.635Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/remote-monitoring-and-data/detail-feature/remote-monitoring-and-data-detail-feature-20260414100728439-6eii5t.jpg',
        alt: '',
        label: 'Nano remote-monitoring-and-data detail-feature Candidate',
        candidateId:
          'remote-monitoring-and-data-detail-feature-20260414100728439-6eii5t',
        model: 'gemini-3-pro-image-preview',
        promptId: 'remote-monitoring-and-data-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:07:28.449Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'alarm-monitoring': {
    'overview-card': {
      slot: 'alarm-monitoring-overview-card',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/alarm-monitoring/overview-card-industrial-alarm-panel.jpg',
        alt: '',
        label: 'alarm-monitoring-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/colorful-buttons-on-wall-19316514/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/alarm-monitoring/overview-card/alarm-monitoring-overview-card-20260414090224916-oxnqfs.jpg',
        alt: '',
        label: 'Nano alarm-monitoring overview-card Candidate',
        candidateId: 'alarm-monitoring-overview-card-20260414090224916-oxnqfs',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:02:24.927Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/alarm-monitoring/overview-card/alarm-monitoring-overview-card-20260414100753468-7kmw86.jpg',
        alt: '',
        label: 'Nano alarm-monitoring overview-card Candidate',
        candidateId: 'alarm-monitoring-overview-card-20260414100753468-7kmw86',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-overview-card-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:07:53.479Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-hero': {
      slot: 'alarm-monitoring-detail-hero',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/alarm-monitoring/detail-hero-control-room-alarm-screens.jpg',
        alt: '',
        label: 'alarm-monitoring-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Pexels',
        sourceReference:
          'https://www.pexels.com/photo/engineer-at-control-room-monitoring-screens-32845700/',
        createdAt: null,
        licenseNote: 'Pexels License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/alarm-monitoring/detail-hero/alarm-monitoring-detail-hero-20260414090258089-o0le7k.jpg',
        alt: '',
        label: 'Nano alarm-monitoring detail-hero Candidate',
        candidateId: 'alarm-monitoring-detail-hero-20260414090258089-o0le7k',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:02:58.101Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/alarm-monitoring/detail-hero/alarm-monitoring-detail-hero-20260414100823826-30rtfo.jpg',
        alt: '',
        label: 'Nano alarm-monitoring detail-hero Candidate',
        candidateId: 'alarm-monitoring-detail-hero-20260414100823826-30rtfo',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-detail-hero-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:08:23.837Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    },
    'detail-feature': {
      slot: 'alarm-monitoring-detail-feature',
      liveSource: 'nano',
      stock: {
        src: '/images/stock/services/alarm-monitoring/alarm-monitoring-screen.jpg',
        alt: '',
        label: 'alarm-monitoring-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Unsplash',
        sourceReference:
          'https://unsplash.com/photos/a-computer-monitor-sitting-on-top-of-a-shelf-2116Y7fsQu0',
        createdAt: null,
        licenseNote: 'Unsplash License',
        notes: null,
        objectPosition: 'center center'
      },
      liveNano: {
        src: '/images/generated/services/alarm-monitoring/detail-feature/alarm-monitoring-detail-feature-20260414090334594-56faa1.jpg',
        alt: '',
        label: 'Nano alarm-monitoring detail-feature Candidate',
        candidateId: 'alarm-monitoring-detail-feature-20260414090334594-56faa1',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T09:03:34.609Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      },
      latestCandidate: {
        src: '/images/generated/services/alarm-monitoring/detail-feature/alarm-monitoring-detail-feature-20260414100848625-kg39dm.jpg',
        alt: '',
        label: 'Nano alarm-monitoring detail-feature Candidate',
        candidateId: 'alarm-monitoring-detail-feature-20260414100848625-kg39dm',
        model: 'gemini-3-pro-image-preview',
        promptId: 'alarm-monitoring-detail-feature-v1',
        source: 'Nano Banana',
        sourceReference: null,
        createdAt: '2026-04-14T10:08:48.635Z',
        licenseNote:
          'Generated with Gemini image generation (SynthID watermark).',
        notes:
          'Global Pro-model visual upgrade. STRICT REQUIREMENT: NO EMBEDDED TEXT, NO SLOGANS, NO LOGOS, NO UI ELEMENTS.',
        objectPosition: 'center center'
      }
    }
  },
  'web-development': {
    'overview-card': {
      slot: 'web-development-overview-card',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/web-development/overview-card-web-development-kevin-workspace.jpg',
        alt: '',
        label: 'web-development-overview-card Kevin provided image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided visual selected for the Web Development new service overview card.',
        objectPosition: '55% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'web-development-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/web-development/detail-hero-web-development-kevin-workspace.jpg',
        alt: '',
        label: 'web-development-detail-hero Kevin provided image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided visual selected for the Web Development detail hero.',
        objectPosition: '56% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'web-development-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/stock/services/web-development/detail-feature-web-development-kevin-workspace.jpg',
        alt: '',
        label: 'web-development-detail-feature Kevin provided image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided visual selected for the Web Development detail feature.',
        objectPosition: '56% 44%'
      },
      liveNano: null,
      latestCandidate: null
    }
  }
} as ServicePageImageRegistry

export function getServicePageImageEntry(
  slug: ServiceSlug,
  role: ServiceImageRole
): ServiceImageSlotRegistry {
  return servicePageImageRegistry[slug][role]
}

export function getServicesOverviewHeroImageEntry(): ServicesOverviewHeroRegistry {
  return servicesOverviewHeroRegistry
}
