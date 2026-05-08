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
    src: '/images/placeholders/grayscale/hero.svg',
    alt: '',
    label: 'services-overview-hero stock image',
    candidateId: null,
    model: null,
    promptId: null,
    source: 'RallyTech grayscale placeholder',
    sourceReference: null,
    createdAt: null,
    licenseNote: 'Internal placeholder; 待補正式素材',
    notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'scada-hmi-graphics-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'scada-hmi-graphics-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'scada-hmi-graphics-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'ie-services-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'ie-services-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'ie-services-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'plc-dcs-programming-and-migration-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'pi-server-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'pi-server-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'pi-server-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'historians-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'historians-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/portrait.svg',
        alt: '',
        label: 'historians-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'it-infrastructure-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '60% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'it-infrastructure-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'it-infrastructure-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '42% 50%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'it-infrastructure-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/portrait.svg',
        alt: '',
        label: 'it-infrastructure-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'cybersecurity-network-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '44% 46%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'cybersecurity-network-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'cybersecurity-network-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '54% 48%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'cybersecurity-network-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/portrait.svg',
        alt: '',
        label: 'cybersecurity-network-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'network-design-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'network-design-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'network-design-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'offshore-wind-operations-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '60% 46%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'offshore-wind-operations-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'offshore-wind-operations-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
        objectPosition: '58% 44%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'offshore-wind-operations-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/placeholders/grayscale/portrait.svg',
        alt: '',
        label: 'offshore-wind-operations-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'remote-monitoring-and-data-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'remote-monitoring-and-data-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/portrait.svg',
        alt: '',
        label: 'remote-monitoring-and-data-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/square.svg',
        alt: '',
        label: 'alarm-monitoring-overview-card stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/hero.svg',
        alt: '',
        label: 'alarm-monitoring-detail-hero stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/placeholders/grayscale/landscape.svg',
        alt: '',
        label: 'alarm-monitoring-detail-feature stock image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'RallyTech grayscale placeholder',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Internal placeholder; 待補正式素材',
        notes: '待補正式素材。原免費圖庫已撤下。',
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
        src: '/images/provided/services/web-development/overview-card-web-development-industrial-platform.jpg',
        alt: '',
        label:
          'web-development-overview-card Kevin provided industrial platform image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided 2026-05-07 industrial platform visual selected for the Web Development overview card.',
        objectPosition: '50% 46%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-hero': {
      slot: 'web-development-detail-hero',
      liveSource: 'stock',
      stock: {
        src: '/images/provided/services/web-development/detail-hero-web-development-industrial-platform.jpg',
        alt: '',
        label:
          'web-development-detail-hero Kevin provided industrial platform image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided 2026-05-07 title background visual selected for the Web Development detail hero.',
        objectPosition: '50% 48%'
      },
      liveNano: null,
      latestCandidate: null
    },
    'detail-feature': {
      slot: 'web-development-detail-feature',
      liveSource: 'stock',
      stock: {
        src: '/images/provided/services/web-development/detail-feature-web-development-industrial-platform.jpg',
        alt: '',
        label:
          'web-development-detail-feature Kevin provided industrial platform image',
        candidateId: null,
        model: null,
        promptId: null,
        source: 'Kevin / Rally Technology provided visual asset',
        sourceReference: null,
        createdAt: null,
        licenseNote: 'Rally Technology proprietary provided visual asset.',
        notes:
          'Kevin-provided 2026-05-07 content visual selected for the Web Development detail feature.',
        objectPosition: '50% 48%'
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
