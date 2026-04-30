/* eslint-disable @stylistic/quote-props */
import type { ProductDetailPagesMessages } from '../types'

export const productDetailPagesSource = {
  'wincc-oa': {
    seo: {
      title: 'WinCC OA | DMC Source Coverage Notes',
      description:
        'Full source-coverage notes distilled from the DMC WinCC Open Architecture Development page for Rally product-page planning.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/wincc-open-architecture-development/',
    heroFocusItems: [
      'WinCC OA SCADA / HMI',
      'Distributed and redundant systems',
      'PLC and protocol integration'
    ],
    introParagraphs: [
      'Source coverage note: this page captures the DMC product body only, excluding global navigation, newsletter, footer, map, office list, and generic CTA chrome.',
      'The DMC page frames WinCC OA around cross-platform hardware/software integration, reusable objects, industrial SCADA / HMI operation, distributed architecture, redundancy, PLC interfacing, and optional WinCC OA extensions.',
      'DMC-specific claims about hundreds of projects, Premium Solution Partner imagery, trained DMC engineers, DMC offices, and DMC project acceleration are recorded only as excluded source claims, not Rally facts.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'DMC product body coverage',
        paragraphs: [
          'The WinCC OA source body contains these sections: page title and breadcrumb, a WinCC solutions claim, a SIMATIC WinCC OA platform explanation, a DMC Solutions Partner section, service bullets, industry bullets, optional extension bullets, CTA modules, and a local-office module.',
          'The reusable product-level ideas are open-architecture SCADA / HMI, multi-system connectivity, redundant and non-redundant configurations, single-user or multi-user deployments, and integration with S7, EtherNet/IP, OPC, and customized distributions.',
          'The page also presents WinCC OA as suitable for both OEM-style software use and end-user industrial monitoring environments.'
        ],
        highlights: [
          'Open-architecture SCADA / HMI',
          'Distributed control systems',
          'Redundant / non-redundant setup',
          'S7 / EtherNet/IP / OPC',
          'Optional WinCC OA extensions'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'dark',
        title: 'Source sections captured',
        items: [
          {
            title: 'Solutions claim',
            description:
              'DMC says it integrates multi-vendor hardware and software into WinCC OA, uses reusable objects, and has completed many WinCC solutions across several industries. Treat project volume and client history as DMC-only.'
          },
          {
            title: 'Platform framing',
            description:
              'The source explains WinCC OA as a flexible SCADA operating system for industrial control and monitoring, with object-oriented structure and a wide distributed-system range.'
          },
          {
            title: 'Partner services',
            description:
              'The source lists infrastructure setup, distributed systems, redundant systems, standalone high-speed machine systems, HMI-to-PLC interfacing, and PLC programming. DMC partner/team claims remain excluded.'
          },
          {
            title: 'Extensions and industries',
            description:
              'The source names pharmaceutical, machine tool, and oil and gas as fit examples, and lists optional extensions such as Operator, Web Functions, Video, BACnet, Scheduler, Recipes, GIS Reviewer, Report, CommCenter, and Advanced Maintenance Suite.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Reusable source facts for Rally rewrite',
        items: [
          {
            title: 'Architecture and integration',
            paragraphs: [
              'Use platform-level concepts such as distributed SCADA, open architecture, redundant systems, single or multi-user setups, high-speed machine systems, and PLC / protocol interfacing.'
            ]
          },
          {
            title: 'Operations and maintainability',
            paragraphs: [
              'Use ideas around operator visibility, reusable object structure, deployment consistency, customized distributions, and extension planning when describing Rally delivery work.'
            ]
          },
          {
            title: 'Industry and extension context',
            paragraphs: [
              'Use industries and extension names only as platform context or planning topics; do not imply Rally has delivered those DMC-specific projects.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Excluded DMC-only claims',
        columns: 3,
        items: [
          {
            title: 'Project record',
            description:
              'Do not reuse DMC claims about hundreds of WinCC solutions, broad client history, or DMC project acceleration.'
          },
          {
            title: 'Partner and team proof',
            description:
              'Do not reuse DMC Premium Solution Partner imagery or trained DMC engineer statements as Rally facts. Only repo-supported Rally WinCC OA Partner proof may be used.'
          },
          {
            title: 'CTA and locality',
            description:
              'Exclude DMC contact modules, DMC office list, map markers, phone, email, newsletter, footer, and local-office positioning.'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Source topics',
        items: [
          'WinCC OA',
          'SCADA',
          'HMI',
          'Open architecture',
          'Distributed systems',
          'Redundancy',
          'S7 communication',
          'EtherNet/IP',
          'OPC',
          'Reusable objects',
          'Operator',
          'BACnet',
          'Scheduler',
          'Recipes',
          'GIS Reviewer',
          'Report',
          'CommCenter',
          'Advanced Maintenance Suite'
        ]
      }
    ]
  },
  aveva: {
    seo: {
      title: 'AVEVA | DMC Source Coverage Notes',
      description:
        'Full source-coverage notes distilled from the DMC AVEVA Programming page for Rally product-page planning.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/aveva-programming/',
    heroFocusItems: ['AVEVA System Platform', 'InTouch HMI', 'AVEVA Historian'],
    introParagraphs: [
      'Source coverage note: this page captures the DMC product body only, excluding global navigation, newsletter, footer, map, office list, and generic CTA chrome.',
      'The DMC page frames AVEVA, formerly Wonderware, as an industrial software suite for HMI, SCADA, data management, and operational intelligence, then focuses on System Platform, InTouch HMI, and Historian.',
      'DMC-specific claims about certified developers, certified system integrator partner status, completed AVEVA projects, customer scale, DMC offices, and DMC acceleration CTAs are recorded only as excluded source claims.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'DMC product body coverage',
        paragraphs: [
          'The AVEVA source body contains these sections: page title and breadcrumb, AVEVA suite framing, state-of-the-art AVEVA solutions, certified integrator framing, System Platform, InTouch HMI, Historian, CTA modules, and a local-office module.',
          'The reusable product-level ideas are HMI, SCADA, data management, operational intelligence, model-driven plant structure, centralized configuration, standardized object templates, visualization, data aggregation, monitoring, time-series history, trending, analysis, reporting, dashboards, and custom queries.',
          'The page links AVEVA System Platform to SCADA, MES, and IIoT foundations, positions InTouch as operator visualization, and positions Historian as real-time and historical production-data access.'
        ],
        highlights: [
          'System Platform',
          'InTouch HMI',
          'Historian',
          'Model-driven architecture',
          'Operational intelligence'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'dark',
        title: 'Source sections captured',
        items: [
          {
            title: 'Suite framing',
            description:
              'The source identifies AVEVA as the former Wonderware suite and describes it around HMI, SCADA, data management, and operational intelligence. DMC service claims remain DMC-only.'
          },
          {
            title: 'System Platform',
            description:
              'The source emphasizes a scalable industrial software foundation for SCADA, MES, and IIoT, with model-driven architecture, centralized configuration, standardized object templates, visualization, aggregation, and monitoring.'
          },
          {
            title: 'InTouch HMI',
            description:
              'The source describes operator-facing visualization, real-time process insight, situational awareness, and modern graphics for monitoring and control.'
          },
          {
            title: 'Historian',
            description:
              'The source describes high-resolution time-series capture and compression, real-time and historical data access, trending, analysis, reporting, dashboards, and custom queries.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Reusable source facts for Rally rewrite',
        items: [
          {
            title: 'Plant model and template governance',
            paragraphs: [
              'Use concepts around model-driven plant hierarchy, centralized configuration, reusable templates, and consistent naming to frame implementation planning.'
            ]
          },
          {
            title: 'Operator and engineering visibility',
            paragraphs: [
              'Use HMI visualization, situational awareness, historian context, dashboards, and reporting as platform capabilities that Rally can integrate into site workflows.'
            ]
          },
          {
            title: 'Data lifecycle',
            paragraphs: [
              'Use real-time and historical data access, trend analysis, custom queries, and operations context without copying DMC performance or customer-result claims.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Excluded DMC-only claims',
        columns: 3,
        items: [
          {
            title: 'Certification and partner proof',
            description:
              'Do not reuse DMC certified developer or certified AVEVA System Integrator Partner claims as Rally facts.'
          },
          {
            title: 'Project and customer scale',
            description:
              'Do not reuse DMC completed-project, customer-size, or cross-industry delivery statements as Rally proof.'
          },
          {
            title: 'CTA and locality',
            description:
              'Exclude DMC contact modules, DMC office list, map markers, phone, email, newsletter, footer, and local-office positioning.'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Source topics',
        items: [
          'AVEVA',
          'Wonderware',
          'System Platform',
          'InTouch HMI',
          'Historian',
          'SCADA',
          'MES',
          'IIoT',
          'Model-driven architecture',
          'Object templates',
          'Visualization',
          'Data aggregation',
          'Time-series data',
          'Trending',
          'Reporting',
          'Dashboards',
          'Custom queries'
        ]
      }
    ]
  },
  'siemens-plc': {
    seo: {
      title: 'Siemens S7 PLC | DMC Source Coverage Notes',
      description:
        'Full source-coverage notes distilled from the DMC Siemens S7 PLC Programming page for Rally product-page planning.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/plc-programming/siemens-s7-plc-programming/',
    heroFocusItems: [
      'Siemens S7 PLC',
      'TIA Portal / SIMATIC Manager',
      'Commissioning and support'
    ],
    introParagraphs: [
      'Source coverage note: this page captures the DMC product body only, excluding global navigation, newsletter, footer, map, office list, and generic CTA chrome.',
      'The DMC page frames Siemens PLC programming across specification, code development, PLC-SIM simulation, system design, commissioning, Siemens expertise, hardware, software, services, reusable S7 libraries, example projects, PCS7 / PCS neo DCS, and industry experience.',
      'DMC-specific claims about hundreds of solutions, Siemens Solution Partner status, one of the largest certified teams in the US, DMC project examples, reusable S7 code ownership, industry track record, DMC offices, and DMC acceleration CTAs are recorded only as excluded source claims.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'DMC product body coverage',
        paragraphs: [
          'The Siemens source body contains these sections: page title and breadcrumb, Siemens PLC Programming, DMC Siemens Expertise, Siemens Hardware Products, Siemens Software Products, Siemens Services, reusable S7 code library, Examples of Our Work, PCS7 and PCS neo DCS Services, Industry Experience, CTA modules, and a local-office module.',
          'The reusable product-level ideas are SIMATIC programming in TIA Portal and SIMATIC Manager, specification development, robust PLC code, PLC-SIM simulation, system design, commissioning, S7 controllers, ET 200SP, legacy controllers, WinCC, PCS7, PCS neo, SIMATIC IT, SIMOTION, Step 7, PLC / HMI programming, platform integration, migration, and PROFIBUS / PROFINET integration.',
          'The source examples indicate common Siemens engineering contexts such as remote PLC communication, Profibus simulation, camera integration, IoT connectivity, serial communication, redundant DNP3 communication, PackML templates, and high-speed machine control. These examples are source context only, not Rally case studies.'
        ],
        highlights: [
          'S7-1500 / S7-1200',
          'Legacy S7 / S5 / TI controllers',
          'TIA Portal / SIMATIC Manager',
          'WinCC / PCS7 / PCS neo',
          'PROFIBUS / PROFINET'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'dark',
        title: 'Source sections captured',
        items: [
          {
            title: 'Lifecycle',
            description:
              'The source covers specification, PLC code development, PLC-SIM simulation, system design, commissioning, service calls, automation support, and migration.'
          },
          {
            title: 'Hardware',
            description:
              'The source lists S7-1500 variants, S7-1200 variants, SIMATIC ET 200SP, and legacy controller families including S7-300, S7-400, S7-200, S5, and TI-505.'
          },
          {
            title: 'Software and services',
            description:
              'The source lists TIA Portal, WinCC variants, WinCC OA, PCS7, PCS neo, SIMATIC IT, SIMOTION, Step 7, PLC / HMI programming, platform integration, SCADA software, migration, and PROFIBUS / PROFINET.'
          },
          {
            title: 'Examples, DCS, and industries',
            description:
              'The source includes DMC examples, PCS7 / PCS neo DCS services, and industries such as aerospace and defense, automotive, food and beverage, medical and pharmaceutical, oil and gas, packaging machinery, and printing / converting.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Reusable source facts for Rally rewrite',
        items: [
          {
            title: 'PLC and HMI delivery lifecycle',
            paragraphs: [
              'Use concepts around specification, structured PLC code, simulation, HMI coordination, commissioning, support, migration, and handover.'
            ]
          },
          {
            title: 'Siemens ecosystem scope',
            paragraphs: [
              'Use S7 controller families, ET 200SP, TIA Portal, WinCC, PCS7 / PCS neo, Step 7, and industrial network integration as ecosystem coverage topics.'
            ]
          },
          {
            title: 'Engineering scenarios',
            paragraphs: [
              'Use example categories only as generic scenarios, such as cellular communication, Profibus simulation, camera integration, IoT data paths, serial links, redundant protocols, PackML machine templates, and servo-based bottling control.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Excluded DMC-only claims',
        columns: 3,
        items: [
          {
            title: 'Partner and certification proof',
            description:
              'Do not reuse DMC Siemens Solution Partner, certified professional, or one-of-largest-US-team claims as Rally facts.'
          },
          {
            title: 'Projects, libraries, and record',
            description:
              'Do not reuse DMC hundreds-of-solutions claims, DMC example projects, DMC S7 library ownership, Siemens Open Library collaboration, or industry track record as Rally proof.'
          },
          {
            title: 'CTA and locality',
            description:
              'Exclude DMC contact modules, DMC office list, map markers, phone, email, newsletter, footer, and local-office positioning.'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Source topics',
        items: [
          'Siemens S7',
          'SIMATIC',
          'TIA Portal',
          'SIMATIC Manager',
          'PLC-SIM',
          'S7-1500',
          'S7-1200',
          'ET 200SP',
          'S7-300',
          'S7-400',
          'S7-200',
          'S5',
          'TI-505',
          'WinCC',
          'WinCC OA',
          'PCS7',
          'PCS neo',
          'SIMATIC IT',
          'SIMOTION',
          'Step 7',
          'PLC programming',
          'HMI programming',
          'Platform integration',
          'Legacy migration',
          'PROFIBUS',
          'PROFINET',
          'DCS',
          'S88',
          'FEED studies',
          'Commissioning'
        ]
      }
    ]
  }
} satisfies ProductDetailPagesMessages
