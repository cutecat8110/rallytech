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
        title: 'WinCC OA implementation scope',
        mediaId: 'partner-ecosystem',
        mediaPlacement: 'after',
        items: [
          {
            title: 'Open architecture IT infrastructure',
            description:
              'Plan the server, network, access, and deployment foundation for open architecture installations before application work expands.'
          },
          {
            title: 'Distributed systems',
            description:
              'Shape multi-station and multi-site SCADA layouts so roles, communications, and operator responsibilities stay clear.'
          },
          {
            title: 'Redundant systems',
            description:
              'Define redundancy expectations, failover behavior, and maintenance responsibilities before commissioning pressure rises.'
          },
          {
            title: 'High-speed standalone machine systems',
            description:
              'Support standalone machine systems where communication timing, operator response, and local reliability matter.'
          },
          {
            title: 'HMI-to-PLC interfacing',
            description:
              'Coordinate HMI points with PLC data so screens, alarms, and status displays reflect traceable field signals.'
          },
          {
            title: 'PLC programming',
            description:
              'Align PLC logic, communication expectations, and SCADA integration details when control behavior affects the operator layer.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Industry fit',
        items: [
          {
            title: 'Pharmaceutical',
            paragraphs: [
              'WinCC OA can support regulated production environments where operator visibility, controlled change, and maintainable records matter.'
            ]
          },
          {
            title: 'Machine Tool',
            paragraphs: [
              'Machine systems can use WinCC OA when standalone control, high-speed communication, and clear machine-state visibility are required.'
            ]
          },
          {
            title: 'Oil and Gas',
            paragraphs: [
              'Distributed assets, networked monitoring, and redundancy planning make WinCC OA a useful platform candidate for oil and gas operations.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Optional extension planning',
        mediaId: 'optional-extensions',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'WinCC OA Operator',
            description:
              'Plan operator-facing tools and views around the way site teams monitor and respond.'
          },
          {
            title: 'Options for Web Functions',
            description:
              'Prepare browser-based access scenarios where remote or distributed teams need controlled visibility.'
          },
          {
            title: 'WinCC OA Videos',
            description:
              'Coordinate video context with operator screens when visual confirmation improves response.'
          },
          {
            title: 'WinCC OA BACnet',
            description:
              'Account for building or facility integration where BACnet data needs to join the SCADA view.'
          },
          {
            title: 'WinCC OA Scheduler',
            description:
              'Support scheduled actions or operating windows that need to be visible and maintainable.'
          },
          {
            title: 'WinCC OA Recipes',
            description:
              'Plan recipe handling when operators need consistent product, batch, or machine setup parameters.'
          },
          {
            title: 'WinCC OA GIS Reviewer',
            description:
              'Use geographic context when distributed assets need map-based review.'
          },
          {
            title: 'WinCC OA Report',
            description:
              'Prepare reporting needs early so data structure, naming, and review expectations are aligned.'
          },
          {
            title: 'WinCC OA CommCenter',
            description:
              'Coordinate communication and notification needs with alarm and operations workflows.'
          },
          {
            title: 'Advanced Maintenance Suite',
            description:
              'Include maintenance context when service workflows need to connect with the SCADA model.'
          }
        ]
      },
      {
        type: 'process-steps',
        title: 'From architecture review to maintainable operation',
        items: [
          {
            stepLabel: '01',
            title: 'Confirm the SCADA operating model',
            description:
              'Clarify standalone, distributed, redundant, or high-speed machine requirements before screens and extensions are designed.'
          },
          {
            stepLabel: '02',
            title: 'Plan connectivity and extension boundaries',
            description:
              'Map PLC interfaces, protocols, user roles, web access, reporting, video, BACnet, scheduling, recipe, GIS, and maintenance needs.'
          },
          {
            stepLabel: '03',
            title: 'Build operator workflows',
            description:
              'Turn architecture decisions into HMI standards, alarm context, navigation, diagnostics, and site-ready operating procedures.'
          },
          {
            stepLabel: '04',
            title: 'Handover for long-term ownership',
            description:
              'Document the system structure, extension assumptions, and support model so the site can maintain and expand the platform.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'With a WinCC OA Partner foundation, Rally can help project teams turn these platform services, industry requirements, and extension paths into an implementation plan that stays maintainable after startup.'
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
      'Formerly known as Wonderware, AVEVA is useful when HMI, SCADA, data management, and operational intelligence need to live inside one shared plant model.',
      'Rally helps project teams organize System Platform, InTouch HMI, Historian data, reporting, and dashboard use cases so the platform is not only collecting data, but also usable for operations and maintenance.'
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
        title: 'AVEVA product coverage',
        mediaId: 'partner-ecosystem',
        mediaPlacement: 'after',
        items: [
          {
            title: 'AVEVA System Platform',
            description:
              'A foundation when SCADA, MES, or IIoT initiatives need a centralized plant model, shared templates, and consistent configuration.'
          },
          {
            title: 'AVEVA InTouch HMI',
            description:
              'Real-time process visibility, situational awareness, operator navigation, and modern monitoring graphics.'
          },
          {
            title: 'AVEVA Historian',
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
        title: 'Rally implementation scope',
        items: [
          {
            title: 'System Platform architecture',
            paragraphs: [
              'Define area, equipment, object, and naming structures so the object-oriented plant model remains understandable as more assets, templates, and displays are added.'
            ]
          },
          {
            title: 'InTouch HMI and operator workflow',
            paragraphs: [
              'Design screen hierarchy, alarm context, navigation, and status presentation around how operators respond to process conditions.'
            ]
          },
          {
            title: 'Historian and reporting readiness',
            paragraphs: [
              'Coordinate tag selection, real-time and historical data access, data-resolution assumptions, trend views, query needs, and reporting boundaries with operations and engineering users.'
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
        title: 'Implementation focus',
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
            title: 'Data aggregation and monitoring',
            description:
              'Tie real-time visualization, historian trends, reports, dashboards, and custom queries to real operating questions instead of collecting data without a decision path.'
          }
        ]
      },
      {
        type: 'process-steps',
        title: 'From plant model to usable operations data',
        items: [
          {
            stepLabel: '01',
            title: 'Define the plant model',
            description:
              'Align area, equipment, object, and naming rules before templates, graphics, and historian tags spread across the system.'
          },
          {
            stepLabel: '02',
            title: 'Build HMI and data standards',
            description:
              'Shape InTouch screens, alarm context, Historian tags, reports, dashboards, and query needs around real operating decisions.'
          },
          {
            stepLabel: '03',
            title: 'Integrate with control and data systems',
            description:
              'Connect AVEVA scope with PLC, SCADA, network, MES, reporting, and maintenance stakeholders.'
          },
          {
            stepLabel: '04',
            title: 'Prepare handover',
            description:
              'Document object structure, template rules, data assumptions, and support responsibilities for site ownership.'
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
        title: 'Siemens PLC implementation scope',
        items: [
          {
            title: 'PLC delivery lifecycle',
            description:
              'Specification support, structured programming, simulation-minded testing, system design, commissioning, and post-startup support.'
          },
          {
            title: 'Hardware context',
            description:
              'S7-1500, S7-1200, ET 200SP, legacy S7, S5, and TI controller constraints need to be reviewed together.'
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
        title: 'Rally implementation scope',
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
        title: 'Siemens hardware coverage',
        mediaId: 's7-1200',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'S7-1500 / F / T / R / H / HF',
            description:
              'Current controller families for machine, process, safety, redundancy, and higher-availability architectures.'
          },
          {
            title: 'S7-1200 / F / G2',
            description:
              'Compact controllers for machines, skids, small systems, and distributed control needs.'
          },
          {
            title: 'SIMATIC ET 200SP',
            description:
              'Remote I/O and distributed control context that should be planned with network and panel design.'
          },
          {
            title: 'S7-300 / F / T',
            description:
              'Legacy platform context for support, migration, compatibility review, and phased replacement.'
          },
          {
            title: 'S7-400 / H',
            description:
              'Large or redundant legacy system context where cutover and uptime assumptions need careful planning.'
          },
          {
            title: 'S7-200, S5, and TI-505',
            description:
              'Older controller families that often require migration assessment before active system changes.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Siemens software coverage',
        mediaId: 'tia-portal',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'TIA Portal',
            description:
              'Engineering environment for current Siemens controller, HMI, and commissioning work.'
          },
          {
            title: 'SIMATIC Manager / Step 7',
            description:
              'Legacy engineering context that may need support, documentation, or migration planning.'
          },
          {
            title: 'WinCC and WinCC OA',
            description:
              'HMI / SCADA software context that must align with PLC tags, alarms, and operator workflows.'
          },
          {
            title: 'WinCC Basic / Comfort / Advanced',
            description:
              'Panel and machine-level HMI scope for operator visibility and local control.'
          },
          {
            title: 'WinCC Professional / Unified',
            description:
              'Larger HMI / SCADA and modern visualization context for plant-level operations.'
          },
          {
            title: 'PCS7, PCS neo, SIMATIC IT, and SIMOTION',
            description:
              'Broader Siemens ecosystem context for DCS, MES, motion, and higher-level integration needs.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Service and integration coverage',
        columns: 3,
        items: [
          {
            title: 'PLC and HMI programming',
            description:
              'Structure PLC logic and HMI behavior so operators can see, diagnose, and support control behavior.'
          },
          {
            title: 'Service calls and automation support',
            description:
              'Help site teams isolate control, communication, and startup issues with practical engineering support.'
          },
          {
            title: 'Platform integration',
            description:
              'Connect PLC scope with SCADA, MES, historian, reporting, or external data-system needs.'
          },
          {
            title: 'SCADA software',
            description:
              'Coordinate PLC tags, alarms, operator screens, and monitoring points with supervisory systems.'
          },
          {
            title: 'Legacy system migration',
            description:
              'Assess old controllers, software tools, I/O assumptions, and cutover risk before replacement work.'
          },
          {
            title: 'PROFIBUS / PROFINET integration',
            description:
              'Plan fieldbus and industrial Ethernet paths around commissioning, diagnostics, and maintainability.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'DCS and industry contexts',
        mediaId: 'pcs7',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'PCS7 and PCS neo DCS',
            description:
              'Large process environments may need FEED studies, specification support, programming, installation, qualification, and commissioning planning.'
          },
          {
            title: 'Process and machine industries',
            description:
              'Siemens PLC scope can appear in aerospace, automotive, food and beverage, medical and pharmaceutical, oil and gas, packaging, and converting lines.'
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
      },
      {
        type: 'closing-note',
        paragraphs: [
          'A Siemens PLC project becomes easier to support when controller selection, software context, HMI / SCADA signals, network assumptions, migration risk, and commissioning evidence are planned as one delivery path.'
        ]
      }
    ]
  }
} satisfies ProductDetailPagesMessages
