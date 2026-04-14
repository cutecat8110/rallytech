import type { ServiceSlug } from '~~/i18n/locales/types'

export interface BaseServicePageImageAsset {
  src: string
  alt: string
  label: string
  source: string
  sourceReference: string
  licenseNote: string
  notes: string
  objectPosition: string
}

export type ServicesOverviewHeroImageAsset = BaseServicePageImageAsset

export type ServiceRoleImageAsset = BaseServicePageImageAsset

export type ServiceImageRole =
  | 'overview-card'
  | 'detail-hero'
  | 'detail-feature'

export type ServicePageImageRegistry = Record<
  ServiceSlug,
  Record<ServiceImageRole, ServiceRoleImageAsset>
>

export const servicesOverviewHeroImage: ServicesOverviewHeroImageAsset = {
  src: '/images/stock/services/overview/services-overview-hero-control-room.jpg',
  alt: 'Panoramic industrial control room with multiple consoles and wall-mounted instrumentation.',
  label: 'Services Overview Hero Stock Image',
  source: 'Unsplash',
  sourceReference:
    'https://unsplash.com/photos/a-control-room-with-a-desk-and-two-chairs-p7Bfwn_VKRQ',
  licenseNote: 'Unsplash License',
  notes:
    'Selected for the services overview hero to read as a broad industrial automation control-center overview rather than a single-service scene.',
  objectPosition: 'center 38%'
}

export const servicePageImageRegistry: ServicePageImageRegistry = {
  'scada-hmi-graphics': {
    'overview-card': {
      src: '/images/stock/services/scada-hmi-graphics/overview-card-hmi-control-screen.jpg',
      alt: 'Close-up HMI interface used for plant monitoring and SCADA visibility.',
      label: 'SCADA Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/white-digital-device-at-71-lS_YkX3QS9c',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the SCADA overview card to keep thumbnail recognition centered on interface clarity.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/scada-hmi-graphics/detail-hero-control-room-operator.jpg',
      alt: 'Operator working in front of multiple control screens inside a control room.',
      label: 'SCADA Detail Hero Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/advanced-control-room-in-el-agustino-lima-32529341/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the SCADA detail hero to add an operations-led first impression without duplicating the feature image.',
      objectPosition: '58% 40%'
    },
    'detail-feature': {
      src: '/images/stock/services/scada-hmi-graphics/industrial-hmi-operator-tablet.jpg',
      alt: 'Engineer holding a tablet while reviewing an industrial HMI screen.',
      label: 'SCADA Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/person-holding-black-tablet-computer-Bg0Geue-cY8',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the SCADA media-feature block to reinforce operator visibility and interface context.',
      objectPosition: 'center center'
    }
  },
  'ie-services': {
    'overview-card': {
      src: '/images/stock/services/ie-services/overview-card-instrument-panel-gauges.jpg',
      alt: 'Instrument panel with gauges and indicators in an industrial setting.',
      label: 'I&E Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/white-and-red-electric-meter-dIrSAyhCDa0',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the I&E overview card to keep the thumbnail tied to instrumentation and panel recognition.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/ie-services/detail-hero-electrical-engineer-inspection.jpg',
      alt: 'Electrical engineer inspecting industrial equipment on site.',
      label: 'I&E Detail Hero Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-man-in-a-factory-working-on-a-piece-of-equipment-zekShM5_K64',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the I&E detail hero to foreground field-readiness and on-site execution.',
      objectPosition: '56% 34%'
    },
    'detail-feature': {
      src: '/images/stock/services/ie-services/instrument-control-panel-close-up.jpg',
      alt: 'Close-up of an industrial control panel with instrumentation details.',
      label: 'I&E Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-close-up-of-a-control-panel-AGQZprOABgQ',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the I&E media-feature block to emphasize field instrumentation and electrical-panel context.',
      objectPosition: 'center center'
    }
  },
  'plc-dcs-programming-and-migration': {
    'overview-card': {
      src: '/images/stock/services/plc-dcs-programming-and-migration/overview-card-plc-control-cabinet.jpg',
      alt: 'Open PLC control cabinet with industrial automation components.',
      label: 'PLC and DCS Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/electrical-panel-with-wires-and-components-q0Jo_J5YxHY',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the PLC and DCS overview card to keep the thumbnail centered on cabinet-level automation hardware.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/plc-dcs-programming-and-migration/detail-hero-automation-engineer-laptop.jpg',
      alt: 'Automation engineer working on a laptop inside a plant environment.',
      label: 'PLC and DCS Detail Hero Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/man-works-on-a-computer-in-a-manufacturing-setting-RyMTGAYZpjY',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the PLC and DCS detail hero to emphasize staged programming and migration work in context.',
      objectPosition: '56% 40%'
    },
    'detail-feature': {
      src: '/images/stock/services/plc-dcs-programming-and-migration/control-system-engineer-laptop.jpg',
      alt: 'Engineer using a laptop near an industrial control system for programming work.',
      label: 'PLC and DCS Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/woman-in-white-long-sleeve-shirt-using-black-laptop-computer-aL2rxQhEfAM',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the PLC and DCS media-feature block to support programming, migration, and staged cutover narratives.',
      objectPosition: 'center center'
    }
  },
  'pi-server': {
    'overview-card': {
      src: '/images/stock/services/pi-server/overview-card-server-rack-lights.jpg',
      alt: 'Close-up server rack lights inside a data infrastructure environment.',
      label: 'PI Server Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-close-up-of-a-green-light-in-a-server-zMrGQu21qcU',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the PI Server overview card to make data infrastructure legible at thumbnail size.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/pi-server/detail-hero-server-room-operations.jpg',
      alt: 'Server room aisle showing operational data infrastructure and rack continuity.',
      label: 'PI Server Detail Hero Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/server-racks-on-data-center-4508751/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the PI Server detail hero to communicate an operations-grade data backbone.',
      objectPosition: 'center 46%'
    },
    'detail-feature': {
      src: '/images/stock/services/pi-server/industrial-server-room-dashboard.jpg',
      alt: 'Industrial server dashboard interface inside a dark operations room.',
      label: 'PI Server Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-close-up-of-a-computer-in-a-dark-room-Kqg_6JPhxRk',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the PI Server media-feature block to convey plant-data infrastructure and dashboard operations.',
      objectPosition: 'center center'
    }
  },
  ['historians']: {
    'overview-card': {
      src: '/images/stock/services/historians/overview-card-industrial-server-rack.jpg',
      alt: 'Industrial hardware and rack detail suitable for historian storage infrastructure.',
      label: 'Historians Overview Card Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/close-up-of-computer-hardware-17489157/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the Historians overview card to keep the thumbnail focused on retention infrastructure.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/historians/detail-hero-engineer-data-screens.jpg',
      alt: 'Engineer reviewing multiple screens and long-horizon process data.',
      label: 'Historians Detail Hero Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/man-in-white-and-black-striped-polo-shirt-in-front-of-monitor-At4udACn5oA',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Historians detail hero to introduce operator review and data continuity context.',
      objectPosition: '52% 36%'
    },
    'detail-feature': {
      src: '/images/stock/services/historians/historian-server-rack-close-up.jpg',
      alt: 'Server rack close-up representing historian retention and storage systems.',
      label: 'Historians Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-close-up-of-a-rack-of-computer-equipment-eqd0f78u9nI',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Historians media-feature block to reinforce long-term data retention and rack-level infrastructure.',
      objectPosition: 'center center'
    }
  },
  'network-design': {
    'overview-card': {
      src: '/images/stock/services/network-design/overview-card-network-switch-cables.jpg',
      alt: 'Network switch cables and connectors in a dense rack environment.',
      label: 'Network Design Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference: 'https://unsplash.com/photos/blue-utp-cord-40XgDxBfYXM',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Network Design overview card to keep the thumbnail aligned with OT cabling and topology signals.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/network-design/detail-hero-industrial-network-room.jpg',
      alt: 'Industrial network room with connected hardware and infrastructure depth.',
      label: 'Network Design Detail Hero Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-close-up-of-a-network-with-wires-connected-to-it-dyUp7WPu5q4',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Network Design detail hero to signal resilient, physical OT network infrastructure.',
      objectPosition: 'center 44%'
    },
    'detail-feature': {
      src: '/images/stock/services/network-design/network-servers-connected-cables.jpg',
      alt: 'Network servers connected by cables inside an industrial communications rack.',
      label: 'Network Design Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/network-servers-are-connected-with-cables-3qZ6qT1DKxU',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Network Design media-feature block to express topology, connectivity, and maintainable OT networking.',
      objectPosition: 'center center'
    }
  },
  'remote-monitoring-and-data': {
    'overview-card': {
      src: '/images/stock/services/remote-monitoring-and-data/overview-card-monitor-wall-control-center.jpg',
      alt: 'Control center monitor wall showing multi-screen remote visibility.',
      label: 'Remote Monitoring Overview Card Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-control-room-with-a-map-on-the-wall-tDc7zZ93cr8',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Remote Monitoring overview card to make multi-site visibility clear in compact form.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/remote-monitoring-and-data/detail-hero-remote-monitoring-laptop.jpg',
      alt: 'Technicians operating monitoring equipment in a remote operations setting.',
      label: 'Remote Monitoring Detail Hero Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/technicians-in-control-room-operating-machinery-32845695/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the Remote Monitoring detail hero to foreground distributed operations and rapid data access.',
      objectPosition: '54% 40%'
    },
    'detail-feature': {
      src: '/images/stock/services/remote-monitoring-and-data/remote-monitoring-control-room.jpg',
      alt: 'Remote monitoring control room with multiple screens and operator context.',
      label: 'Remote Monitoring Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-man-sitting-in-front-of-multiple-monitors-TtMKq3lJm-U',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Remote Monitoring and Data media-feature block to emphasize remote visibility and multi-screen monitoring.',
      objectPosition: 'center center'
    }
  },
  'alarm-monitoring': {
    'overview-card': {
      src: '/images/stock/services/alarm-monitoring/overview-card-industrial-alarm-panel.jpg',
      alt: 'Industrial alarm panel with illuminated buttons and status indicators.',
      label: 'Alarm Monitoring Overview Card Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/colorful-buttons-on-wall-19316514/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the Alarm Monitoring overview card to keep the thumbnail tied to recognizable alarm hardware.',
      objectPosition: 'center center'
    },
    'detail-hero': {
      src: '/images/stock/services/alarm-monitoring/detail-hero-control-room-alarm-screens.jpg',
      alt: 'Engineer monitoring alarm-related screens inside a control room.',
      label: 'Alarm Monitoring Detail Hero Stock Image',
      source: 'Pexels',
      sourceReference:
        'https://www.pexels.com/photo/engineer-at-control-room-monitoring-screens-32845700/',
      licenseNote: 'Pexels License',
      notes:
        'Selected for the Alarm Monitoring detail hero to establish response speed and operator awareness.',
      objectPosition: '58% 40%'
    },
    'detail-feature': {
      src: '/images/stock/services/alarm-monitoring/alarm-monitoring-screen.jpg',
      alt: 'Alarm monitoring screen used to track alerts and operator response.',
      label: 'Alarm Monitoring Detail Feature Stock Image',
      source: 'Unsplash',
      sourceReference:
        'https://unsplash.com/photos/a-computer-monitor-sitting-on-top-of-a-shelf-2116Y7fsQu0',
      licenseNote: 'Unsplash License',
      notes:
        'Selected for the Alarm Monitoring media-feature block to reinforce alert visibility and operator response context.',
      objectPosition: 'center center'
    }
  }
}

export function getServicePageImageEntry(
  slug: ServiceSlug,
  role: ServiceImageRole
) {
  return servicePageImageRegistry[slug][role]
}

export function getServicesOverviewHeroImageEntry() {
  return servicesOverviewHeroImage
}
