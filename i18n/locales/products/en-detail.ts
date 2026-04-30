/* eslint-disable @stylistic/quote-props */
import type { ProductDetailPagesMessages } from '../types'

export const productDetailPagesEn = {
  'wincc-oa': {
    seo: {
      title: 'WinCC OA | Rally Technology',
      description:
        'Rally Technology supports WinCC OA SCADA platform planning, distributed architecture, redundancy, operator-screen standards, PLC communication, and handover.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/wincc-open-architecture-development/',
    heroFocusItems: [
      'SCADA / HMI platform',
      'Distributed architecture',
      'WinCC OA Partner foundation'
    ],
    introParagraphs: [
      'WinCC OA fits industrial monitoring systems that need open SCADA architecture, distributed operation, redundancy planning, and operator workflows that can evolve after commissioning.',
      'Rally Technology treats WinCC OA as part of the full delivery environment: PLC communication, network readiness, HMI standards, alarm context, historian handoff, extension planning, and maintainable site ownership.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'Start with the SCADA architecture and operating model',
        paragraphs: [
          'WinCC OA supports industrial SCADA / HMI environments that need to connect multiple control systems, communication paths, server roles, and operator stations.',
          'The platform can be planned for standalone, redundant, single-user, multi-user, or distributed environments, so early architecture decisions shape how the system grows and how it is maintained.',
          'Rally organizes the structure behind the screens: tag organization, alarm behavior, PLC connectivity, extension readiness, and a handover model the site team can own.'
        ],
        highlights: [
          'Distributed SCADA',
          'Redundant systems',
          'Operator-screen standards',
          'PLC and protocol interfacing',
          'Extension planning'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'dark',
        title: 'When WinCC OA should be evaluated early',
        items: [
          {
            title: 'Multi-system connectivity',
            description:
              'PLCs, protocols, SCADA servers, and operator stations need to work together across different site conditions.'
          },
          {
            title: 'Redundancy and multiple stations',
            description:
              'The system needs a clear model for redundancy, user roles, and operator-station responsibilities.'
          },
          {
            title: 'Screen standardization',
            description:
              'Equipment status, alarms, and process context need to become displays that operators can read and trust.'
          },
          {
            title: 'Maintainable expansion',
            description:
              'Future reporting, scheduling, recipes, web access, BACnet, or maintenance extensions need room in the architecture.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'How Rally supports implementation',
        items: [
          {
            title: 'Architecture and infrastructure planning',
            paragraphs: [
              'Define server roles, network boundaries, redundancy expectations, user access, and deployment assumptions before screen and tag work become difficult to reorganize.'
            ]
          },
          {
            title: 'SCADA / HMI implementation',
            paragraphs: [
              'Build operator views, equipment pages, alarm context, navigation, and status displays around how the site team monitors the process.'
            ]
          },
          {
            title: 'PLC and protocol coordination',
            paragraphs: [
              'Coordinate S7, EtherNet/IP, OPC, and project-specific communication needs so the SCADA layer receives usable and traceable signals.'
            ]
          },
          {
            title: 'Extension and handover readiness',
            paragraphs: [
              'Plan object structure, naming, notes, and future extension paths so later modifications can be scoped without rediscovering the whole system.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'What to clarify before implementation',
        columns: 3,
        items: [
          {
            title: 'Redundancy model',
            description:
              'Clarify standalone, redundant, distributed, and multi-user expectations before server and network design are fixed.'
          },
          {
            title: 'Screen standards',
            description:
              'Set naming, color, alarm, navigation, and object reuse rules early so graphics remain consistent as the project grows.'
          },
          {
            title: 'Extension path',
            description:
              'Identify whether the system may need reporting, scheduling, recipes, video, BACnet, web access, or maintenance extensions later.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'If a project already involves multi-site monitoring, redundancy, operator-screen redesign, or future expansion, WinCC OA architecture and maintenance rules should be clarified before screen implementation begins.'
        ]
      }
    ]
  },
  aveva: {
    seo: {
      title: 'AVEVA | Rally Technology',
      description:
        'Rally Technology supports AVEVA System Platform, InTouch HMI, and Historian planning for SCADA visibility, plant models, operations data, and handover.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/aveva-programming/',
    heroFocusItems: [
      'System Platform',
      'InTouch HMI',
      'Historian and operations data'
    ],
    introParagraphs: [
      'AVEVA is useful when HMI, SCADA, historian data, and operations context need to live inside one shared plant model.',
      'Rally helps project teams organize System Platform, InTouch HMI, historian tags, reporting, and dashboard use cases so the platform is not only collecting data, but also usable for operations and maintenance.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'Connect the plant model, operator screens, and data context',
        paragraphs: [
          'AVEVA System Platform can provide a foundation for SCADA, MES, and IIoT applications through model-driven architecture and centralized configuration.',
          'InTouch HMI supports operator-facing visualization for monitoring and control, while Historian stores live and historical production data for trends, analysis, reports, dashboards, and custom queries.',
          'Rally connects those pieces into a usable operating model: clean object structure, screen standards, consistent data naming, and a handover path the site can maintain.'
        ],
        highlights: [
          'Model-driven plant structure',
          'Reusable object templates',
          'Operator visualization',
          'Historian data',
          'Reports and dashboards'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'light',
        title: 'What the AVEVA platform can support',
        items: [
          {
            title: 'System Platform',
            description:
              'A foundation when SCADA, MES, or IIoT initiatives need a centralized plant model, shared templates, and consistent configuration.'
          },
          {
            title: 'InTouch HMI',
            description:
              'Real-time process visibility, situational awareness, operator navigation, and modern monitoring graphics.'
          },
          {
            title: 'Historian',
            description:
              'Production-data collection, trend review, analysis support, and report or dashboard data sets.'
          },
          {
            title: 'Operations data use',
            description:
              'Live status, historical context, and engineering queries can share one data language for clearer problem review.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'How Rally organizes the AVEVA architecture',
        items: [
          {
            title: 'Plant model and template planning',
            paragraphs: [
              'Define area, equipment, object, and naming structures so System Platform remains understandable as more assets and displays are added.'
            ]
          },
          {
            title: 'HMI and operator workflow',
            paragraphs: [
              'Design screen hierarchy, alarm context, navigation, and status presentation around how operators respond to process conditions.'
            ]
          },
          {
            title: 'Historian and reporting readiness',
            paragraphs: [
              'Coordinate tag selection, data-resolution assumptions, trend views, query needs, and reporting boundaries with operations and engineering users.'
            ]
          },
          {
            title: 'Integration and handover',
            paragraphs: [
              'Coordinate AVEVA work with PLC, SCADA, network, and data-system stakeholders, then document the platform structure for future maintenance.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'What to clarify before implementation',
        columns: 3,
        items: [
          {
            title: 'Model hierarchy',
            description:
              'Set plant, area, line, equipment, and object rules before screens and historian tags become difficult to normalize.'
          },
          {
            title: 'Template governance',
            description:
              'Clarify what should be standardized, what can vary by asset, and how future changes will be reviewed.'
          },
          {
            title: 'Data use cases',
            description:
              'Tie historian, trend, report, and dashboard scope to real operating questions instead of collecting data without a decision path.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'When teams need one model for equipment, screens, alarms, trends, and reports, AVEVA implementation should begin with data structure and maintenance rules rather than a single screen or report.'
        ]
      }
    ]
  },
  'siemens-plc': {
    seo: {
      title: 'Siemens S7 PLC | Rally Technology',
      description:
        'Rally Technology supports Siemens S7 PLC, TIA Portal, HMI coordination, migration, commissioning, network integration, and maintainable handover.'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/plc-programming/siemens-s7-plc-programming/',
    heroFocusItems: [
      'S7 PLC engineering',
      'TIA Portal and SIMATIC context',
      'Commissioning and migration'
    ],
    introParagraphs: [
      'Siemens S7 projects often sit at the center of machine control, process coordination, HMI visibility, network integration, and future migration decisions.',
      'Rally Technology treats Siemens PLC work as an engineering lifecycle: clarify the specification, structure the code, coordinate HMI / SCADA signals, test communications, support commissioning, and leave behind a system the site can maintain.'
    ],
    sidebar: {
      productsHeading: 'Products'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: 'Plan Siemens PLC with control, screens, and networks together',
        paragraphs: [
          'Siemens S7 environments can include current controllers, remote I/O, legacy equipment, engineering tools, HMI / SCADA software, DCS context, and industrial networks.',
          'A successful project needs more than code. It needs a clear specification, organized PLC blocks, naming discipline, HMI coordination, practical simulation or staged testing, commissioning support, and migration planning when older systems are involved.',
          'Rally coordinates Siemens PLC work with the surrounding system: operator screens, SCADA tags, alarms, historian data, network boundaries, field devices, and documentation for long-term support.'
        ],
        highlights: [
          'Current and legacy controllers',
          'TIA Portal and SIMATIC context',
          'HMI and SCADA coordination',
          'Migration planning',
          'Industrial network integration'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'light',
        title: 'When Siemens PLC scope should be clarified early',
        items: [
          {
            title: 'PLC delivery lifecycle',
            description:
              'Specification support, structured programming, simulation-minded testing, system design, commissioning, and post-startup support.'
          },
          {
            title: 'Hardware context',
            description:
              'Current controllers, remote I/O, legacy platforms, and cutover constraints need to be reviewed together.'
          },
          {
            title: 'Software context',
            description:
              'Engineering tools, HMI / SCADA software, DCS context, and data-system expectations need to map back to the project scope.'
          },
          {
            title: 'Integration scenarios',
            description:
              'Common in remote communication, fieldbus work, machine vision, data connectivity, redundant protocols, and high-speed machine control.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'How Rally supports implementation',
        items: [
          {
            title: 'Specification and control design',
            paragraphs: [
              'Translate machine or process behavior into PLC structure, sequence logic, interlocks, alarms, operator actions, and testable acceptance points.'
            ]
          },
          {
            title: 'PLC / HMI / SCADA coordination',
            paragraphs: [
              'Align PLC tags, HMI screens, SCADA points, historian needs, alarm handling, and operator workflows so control behavior is visible and supportable.'
            ]
          },
          {
            title: 'Migration and compatibility planning',
            paragraphs: [
              'Assess legacy controllers, Step 7 or SIMATIC Manager context, network constraints, I/O assumptions, and cutover risk before changing active systems.'
            ]
          },
          {
            title: 'Commissioning and handover',
            paragraphs: [
              'Support staged testing, communication checks, field issue isolation, startup coordination, and documentation for the maintenance team.'
            ]
          },
          {
            title: 'DCS and broader Siemens context',
            paragraphs: [
              'Coordinate Siemens PLC scope with DCS, HMI / SCADA, network design, qualification needs, and higher-level data or reporting systems when the project requires it.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'What to clarify before implementation',
        columns: 3,
        items: [
          {
            title: 'Controller generation',
            description:
              'Confirm whether the project centers on current controllers, remote I/O, or legacy hardware before tools and migration scope are fixed.'
          },
          {
            title: 'Network and protocol path',
            description:
              'Map fieldbus, serial, cellular, redundant protocol, and other communication needs against commissioning and support risk.'
          },
          {
            title: 'Reusable logic standards',
            description:
              'Define block structure, naming, documentation, and test expectations so future changes do not depend on one person remembering the design.'
          }
        ]
      },
      {
        type: 'process-steps',
        title: 'From control logic to commissioning handover',
        items: [
          {
            stepLabel: '01',
            title: 'Review machine or process scope',
            description:
              'Clarify sequence, safety boundaries, interlocks, network constraints, HMI needs, and migration assumptions.'
          },
          {
            stepLabel: '02',
            title: 'Design control structure',
            description:
              'Shape PLC blocks, tag naming, alarm behavior, communication points, simulation approach, and SCADA / HMI interfaces.'
          },
          {
            stepLabel: '03',
            title: 'Test and commission',
            description:
              'Validate logic, I/O, communications, alarms, operator actions, and field behavior in a controlled sequence.'
          },
          {
            stepLabel: '04',
            title: 'Support cutover and handover',
            description:
              'Close migration risks, document key behavior, and support the transition to site ownership.'
          }
        ]
      }
    ]
  }
} satisfies ProductDetailPagesMessages
