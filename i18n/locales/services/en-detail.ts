import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: 'Services',
  contactHeading: 'Contact Us'
} as const

// Manual copy lock: relevant mapped public service detail copy comes from
// docs/rewrite/文案.md (2026-04-22).
// Do not rewrite these i18n messages without a new manual rewrite source.
export const serviceDetailPagesEn = {
  'scada-hmi-graphics': {
    seo: {
      title: 'SCADA and HMI Graphics | Rally Technology',
      description:
        'Rally Technology designs SCADA / HMI graphics that make plant status, alarms, and operator actions easier to read.'
    },
    heroFocusItems: ['Readable screens', 'Alarm context', 'Easy upkeep'],
    introParagraphs: [
      'Before SCADA / HMI graphics are drawn, the working question is what operators need to recognize during normal operation, abnormal conditions, and handover.',
      'We organize screen hierarchy, naming, and navigation so the interface stays clear during commissioning, daily use, and later screen updates.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'scada-hmi-graphics',
        imageAlt:
          'Engineer reviewing industrial monitoring screens on a tablet',
        layout: 'image-right',
        title: 'The hard part is deciding what comes first',
        paragraphs: [
          'Once a screen collects too many states, trends, and buttons, operators usually lose priority before they lack data.',
          'We shape overview, equipment, and abnormal-condition entry points into a readable path that can keep its logic as new points are added.'
        ],
        highlights: ['Readable screens', 'Alarm context', 'Easy upkeep']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Screen hierarchy',
            description:
              'Layer overview, unit, and equipment information so operators see the state that needs attention first.'
          },
          {
            title: 'Alarm context',
            description:
              'Place alarms back with equipment and process location so teams can judge source and impact.'
          },
          {
            title: 'Operator flow',
            description:
              'Put routine controls, confirmations, and abnormal-entry points on one operating path.'
          },
          {
            title: 'Maintenance rules',
            description:
              'Preserve naming, symbol, and layout rules so later changes do not depend on guesswork.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Hierarchy planning',
            paragraphs: [
              'We structure home, unit, and equipment views so each role can find the right level of information without extra navigation.'
            ]
          },
          {
            title: 'Alarm-linked views',
            paragraphs: [
              'Alarm information is arranged to connect back to equipment status, process conditions, and the next operator action.'
            ]
          },
          {
            title: 'Change-ready standards',
            paragraphs: [
              'Naming, symbols, and navigation rules are set up so later changes remain understandable for the next team.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Set SCADA / HMI rules before points, screens, or roles expand, so later additions do not become patchwork.'
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Rally Technology',
      description:
        'Rally Technology supports instrumentation and electrical field work for FAT / SAT, startup, loop checks, and troubleshooting.'
    },
    heroFocusItems: ['Field ready', 'FAT / SAT', 'Startup support'],
    introParagraphs: [
      'I&E support starts by putting field signals, loop status, and commissioning checkpoints on one traceable work path.',
      'The goal is to get systems ready for site work, isolate issues faster, and keep commissioning decisions aligned across teams.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'ie-services',
        imageAlt:
          'Close-up view of industrial instrumentation and control hardware',
        layout: 'image-left',
        title: 'Field progress depends on shared checkpoints',
        paragraphs: [
          'I&E work often stalls around who has confirmed what, who owns the next step, and which open item affects startup.',
          'We connect test results, punch status, and field response into one working rhythm so cross-discipline work has a shared reference.'
        ],
        highlights: ['Field ready', 'FAT / SAT', 'Startup support']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Field readiness',
            description:
              'Confirm required startup conditions, open items, and responsible handoff points.'
          },
          {
            title: 'FAT / SAT closure',
            description:
              'Keep test results, punch categories, and closure status in one traceable context.'
          },
          {
            title: 'Startup response',
            description:
              'Route loop, signal, and equipment issues back to the right owner quickly.'
          },
          {
            title: 'Cross-team coordination',
            description:
              'Use shared checkpoints to align instrumentation, electrical, equipment, and construction contacts.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'FAT / SAT support',
            paragraphs: [
              'We organize validation points and punch closure so systems complete the checks needed before startup.'
            ]
          },
          {
            title: 'Field troubleshooting',
            paragraphs: [
              'We help sites isolate problems quickly, stabilize operation, and keep issues from expanding into longer outages.'
            ]
          },
          {
            title: 'Instrument calibration',
            paragraphs: [
              'Installation, calibration, and verification workflows are coordinated so field instruments operate within the accuracy the process requires.'
            ]
          },
          {
            title: 'Power studies',
            paragraphs: [
              'We support power-system studies that help teams understand distribution reliability, protection concerns, and operating risk.'
            ]
          },
          {
            title: 'Gas analysis systems',
            paragraphs: [
              'Gas-analyzing systems are integrated where composition, quality, and compliance data need to be measured reliably.'
            ]
          },
          {
            title: 'Power metering',
            paragraphs: [
              'Metering work is planned to improve visibility into consumption, power quality, and electrical-use data.'
            ]
          },
          {
            title: 'Security integration',
            paragraphs: [
              'Security-system coordination is included where safer and more resilient industrial operations depend on it.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Typical Support',
        columns: 3,
        items: [
          {
            title: 'FAT / SAT Support',
            description:
              'Use when factory-test results need to be carried into final site checks before startup.'
          },
          {
            title: 'Power Systems Studies',
            description:
              'Use before load additions, panel changes, or protection settings need review.'
          },
          {
            title: 'Field Troubleshooting',
            description:
              'Use when startup or running conditions point to a site signal gap.'
          },
          {
            title: 'Gas Analysis Systems',
            description:
              'Use when analyzer signals need to feed control or data workflows.'
          },
          {
            title: 'Instrument Calibration',
            description:
              'Use after new or replaced instruments need readings checked against site conditions.'
          },
          {
            title: 'Power Metering',
            description:
              'Use when new metering points or existing meter data need clearer ownership.'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          '"Good I&E support makes startup conditions clear before the field has to guess."',
        attribution: 'Rally Technology'
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'Bring I&E support in while FAT is still closing and startup windows can still move, before unresolved items arrive at site.',
          'It is the right point when instrumentation, electrical, and commissioning teams need one set of working evidence.'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: 'PLC & DCS Programming and Migration | Rally Technology',
      description:
        'Rally Technology supports PLC / DCS programming, migration planning, and staged cutover for running systems.'
    },
    heroFocusItems: ['Cutover path', 'Risk control', 'Maintainable logic'],
    introParagraphs: [
      'PLC / DCS work often happens while the system still needs to run, so the first task is to define steps the field can actually execute.',
      'The work centers on a sequence that can be tested, cut over, and reviewed while keeping the logic readable for later maintenance.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: 'Engineer using a laptop to review control-system settings',
        layout: 'image-right',
        title: 'Migration risk usually hides in dependencies',
        paragraphs: [
          'Control-system upgrades become fragile when equipment dependencies, operating habits, rollback conditions, and test order are not reviewed together.',
          'We split the change scope into units the site can verify in sequence, so gaps are not discovered on cutover day.'
        ],
        highlights: ['Cutover path', 'Risk control', 'Maintainable logic']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Cutover boundary',
            description:
              'Identify affected equipment, signals, and operator interfaces so each cutover segment has a clear owner.'
          },
          {
            title: 'Shutdown control',
            description:
              'Define what can be tested, rolled back, or cannot be interrupted before using the window.'
          },
          {
            title: 'Logic readability',
            description:
              'Use naming, modules, and notes that support testing traceability, not only go-live.'
          },
          {
            title: 'Recovery readiness',
            description:
              'Keep versions, backups, and operating context ready so the team has a baseline to return to.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Programming structure',
            paragraphs: [
              'We develop control logic in a form that supports readable operation, controlled change, and clearer troubleshooting.'
            ]
          },
          {
            title: 'Staged migration',
            paragraphs: [
              'Migration paths are planned in stages so upgrades reduce disruption while improving maintainability.'
            ]
          },
          {
            title: 'Lifecycle support',
            paragraphs: [
              'Modernization work is paired with documentation and long-term support thinking so the new platform remains sustainable.'
            ]
          }
        ]
      },
      {
        type: 'process-steps',
        title: 'Implementation Sequence',
        items: [
          {
            stepLabel: 'Step 01',
            title: 'Review the installed baseline',
            description:
              'Clarify the existing program, dependencies, point lists, and shutdown limits before migration begins.'
          },
          {
            stepLabel: 'Step 02',
            title: 'Plan the staged cutover',
            description:
              'Define test windows, cutover logic, and rollback conditions so field work does not rely on assumptions.'
          },
          {
            stepLabel: 'Step 03',
            title: 'Execute and validate',
            description:
              'Implement logic in a form that supports testing, site verification, and operator review.'
          },
          {
            stepLabel: 'Step 04',
            title: 'Stabilize the upgraded system',
            description:
              'Package versions, documents, and operating context so the new baseline is easier to maintain.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Bring PLC / DCS migration planning in before shutdown windows, test scope, and rollback conditions are locked. That is when risk control can be designed into the workflow instead of handled at site.'
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: 'PI Server | Rally Technology',
      description:
        'Rally Technology uses PI Server to build plant-data platforms for monitoring, reporting, and cross-system use.'
    },
    heroFocusItems: [
      'Stable data spine',
      'Usable reporting',
      'Easier integration'
    ],
    introParagraphs: [
      'For PI Server, the key question is whether values remain usable after they enter the platform: searchable, calculable, and ready to connect with other systems.',
      'We review data sources, naming, and usage patterns so the platform becomes a data backbone teams can work from, not just a larger tag collection.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: 'Industrial data equipment in a dark server-room environment',
        layout: 'image-left',
        title: 'PI Server becomes difficult after the data arrives',
        paragraphs: [
          'When tag sources, naming, and calculation rules grow separately, the platform can become a collection that is hard to understand.',
          'We clarify which data supports monitoring, which supports reporting, and which will be reused by other systems before deciding the structure.'
        ],
        highlights: [
          'Stable data spine',
          'Usable reporting',
          'Easier integration'
        ]
      },
      {
        type: 'tag-list',
        title: 'Key Terms',
        items: [
          'Plant data backbone',
          'Operational visibility',
          'PI Server',
          'Cross-system integration'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Data backbone',
            description:
              'Make tags, sources, and calculated values usable across needs instead of split into separate data sets.'
          },
          {
            title: 'Context and naming',
            description:
              'Set rules early so later additions can still be identified and managed.'
          },
          {
            title: 'Reporting continuity',
            description:
              'Include the granularity and calculation logic that recurring reports will need.'
          },
          {
            title: 'Shared visibility',
            description:
              'Give operations, engineering, and management one traceable data source to work from.'
          }
        ]
      },
      {
        type: 'accordion',
        title: 'Typical Uses',
        items: [
          {
            title: 'Connect plant data',
            paragraphs: [
              'Use this when several systems need the same live values instead of separate data outlets.'
            ]
          },
          {
            title: 'Standardize integration',
            paragraphs: [
              'Use this when each added source brings different naming, interface, or data-definition rules.'
            ]
          },
          {
            title: 'Support reporting',
            paragraphs: [
              'Use this when recurring reports need the same calculation basis each time.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'Bring PI Server in before dashboards, recurring reports, or external integrations start multiplying.',
          'That is when naming, source structure, and calculation logic can still be defined together instead of reconciled manually later.'
        ]
      }
    ]
  },
  ['historians']: {
    seo: {
      title: 'Historians | Rally Technology',
      description:
        'Rally Technology plans historian environments for long-term records, trend comparison, traceability, and reporting.'
    },
    heroFocusItems: ['Traceable history', 'Redundant access', 'Reports ready'],
    introParagraphs: [
      'A historian is not only a place to store records. It has to keep process history retrievable, comparable, and explainable over time.',
      'We focus on retention windows, access patterns, and redundancy so records remain usable months or years later.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'historians',
        imageAlt:
          'Close-up view of server-rack hardware for historian infrastructure',
        layout: 'image-right',
        title: 'Historian design starts with how records will be found later',
        paragraphs: [
          'Historical data often looks complete at collection time, then becomes hard to use when teams need event review, reporting, or audit support.',
          'We set retention, organization, and backup choices around the retrieval scenarios that will matter months or years later.'
        ],
        highlights: ['Traceable history', 'Redundant access', 'Reports ready']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Long-term retention',
            description:
              'Set retention windows around reporting, audit, and event-review needs.'
          },
          {
            title: 'Trend review',
            description:
              'Keep trend data retrievable for comparison across different time ranges.'
          },
          {
            title: 'Redundant access',
            description:
              'Plan local and remote paths so data access does not depend on one route.'
          },
          {
            title: 'Traceability',
            description:
              'Preserve enough context to support quality, compliance, and abnormal-event explanation.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Retention planning',
            paragraphs: [
              'We define how data should be retained, organized, and retrieved so historical records remain useful instead of archive noise.'
            ]
          },
          {
            title: 'Query and reporting',
            paragraphs: [
              'Historian structure is planned to support trend comparison, reporting, and engineering review rather than only data collection.'
            ]
          },
          {
            title: 'Access and redundancy',
            paragraphs: [
              'Local redundancy and remote-access patterns are designed to improve resilience while keeping everyday retrieval practical.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'Bring historian planning in when retention rules, report formats, or audit expectations first take shape.',
          'That is when data granularity, storage layout, and access paths can be designed together instead of patched into traceability later.'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title:
        'Industrial Network and Cybersecurity Architecture | Rally Technology',
      description:
        'Rally Technology plans IT / OT segmentation, Defense in Depth, Zero Trust, HA / DR, and Vulnerability Scanning to reduce cybersecurity and communication risk.'
    },
    heroFocusItems: [
      'IT / OT segmentation',
      'Layered defense',
      'High availability and growth'
    ],
    introParagraphs: [
      'Industrial networking is not only about connecting devices. It has to define IT / OT boundaries, control traffic, remote access, and cybersecurity protection together.',
      'We build layered architecture around site communication and risk conditions, combining segmentation, HA / DR, Zero Trust, and Vulnerability Scanning to reduce downtime and security exposure.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt:
          'Network hardware and connected cabling in an industrial environment',
        layout: 'image-left',
        title:
          'Network and security boundaries need to be set before systems expand',
        paragraphs: [
          'As enterprise IT, industrial equipment, and remote-access needs grow, networks can collect exceptions that are hard to manage while security boundaries become unclear.',
          'We review Compute / Storage / Network needs, Core / Control / Field layering, and IT / OT segmentation so connectivity, permissions, and maintenance ownership have a traceable baseline.'
        ],
        highlights: [
          'IT / OT segmentation',
          'Layered defense',
          'High availability and growth'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Layered architecture',
            description:
              'Structure topology around Core / Control / Field layers and site communication needs to reduce interference.'
          },
          {
            title: 'Access control',
            description:
              'Use IT / OT segmentation, VPN, and identity access management to define who can connect, when, and what they can operate.'
          },
          {
            title: 'Cybersecurity protection',
            description:
              'Combine Defense in Depth, Zero Trust, IPS / Threat Protection, and Vulnerability Scanning to keep risk exposure visible.'
          },
          {
            title: 'Resilience and expansion',
            description:
              'Include HA / DR, redundant topology, and future equipment onboarding in the design.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'IT / OT architecture planning',
            paragraphs: [
              'We align enterprise IT infrastructure and industrial network needs, from Compute / Storage / Network through control-network layering.'
            ]
          },
          {
            title: 'Segmentation and security boundaries',
            paragraphs: [
              'We plan network segmentation, firewalls, VPN, and permission control so changes can be introduced gradually without disrupting existing services.'
            ]
          },
          {
            title: 'Monitoring and risk tracking',
            paragraphs: [
              'Traffic analysis, Vulnerability Scanning, and risk assessment keep network and cybersecurity conditions easier to review over time.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Review network and cybersecurity architecture before new server rooms, production lines, plants, or remote connections expand. The later segmentation, permissions, and redundancy wait, the more they become retrofit work.'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: 'Remote Monitoring and Data | Rally Technology',
      description:
        'Rally Technology supports remote operations for offshore wind and remote sites through Secure Remote Access, SCADA / PLC / HMI maintenance, and OT status monitoring.'
    },
    heroFocusItems: [
      'Secure remote operation',
      'Real-time fault response',
      'Lower site risk'
    ],
    introParagraphs: [
      'Offshore wind and remote sites need maintenance workflows that balance stability, security, and fast response.',
      'We combine OT system experience with cybersecurity architecture to build remote operations that can be operated, monitored, and traced.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: 'Remote monitoring workstation with multiple screens',
        layout: 'image-right',
        title:
          'Remote operations have to manage secure access and operating responsibility together',
        paragraphs: [
          'In high-restriction, hard-to-reach sites, the issue is not only whether a team can connect. It is who can sign in safely, what they can see, how they decide, and what record remains afterward.',
          'We place Secure Remote Access, SCADA / PLC / HMI support, OT network status monitoring, and permission workflows into one operating architecture to reduce travel and site risk.'
        ],
        highlights: [
          'Secure remote operation',
          'Real-time fault response',
          'Lower site risk'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Secure remote access',
            description:
              'Design Secure Remote Access and permission control so remote operation has clear boundaries.'
          },
          {
            title: 'System maintenance support',
            description:
              'Support SCADA / PLC / HMI maintenance and abnormal-condition review so field issues can be narrowed faster.'
          },
          {
            title: 'OT status monitoring',
            description:
              'Integrate OT network and equipment status so maintenance teams can follow critical signals in real time.'
          },
          {
            title: 'Remote event handling',
            description:
              'Establish remote alarm analysis and handling workflows to improve fault diagnosis and response speed.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Common Scenarios',
        columns: 3,
        items: [
          {
            title: 'Offshore wind operations',
            description:
              'Use when offshore wind or remote sites need to reduce travel risk while keeping maintenance responsive.'
          },
          {
            title: 'Remote operation management',
            description:
              'Use when maintenance depends on remote access and login permissions or operating workflows need clearer control.'
          },
          {
            title: 'SCADA / OT centralized management',
            description:
              'Use when SCADA / OT systems need centralized monitoring, analysis, and maintenance support.'
          },
          {
            title: 'Maintenance-cost control',
            description:
              'Use when remote handling can shorten fault isolation and reduce field-maintenance load.'
          }
        ]
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'Design remote access, monitoring, and permission workflows when offshore wind or remote sites are being built.',
          'That is when secure channels, operating responsibility, and event traceability can become one maintenance system instead of add-ons after launch.'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title:
        'Alarm Monitoring and Visualized Operations Management | Rally Technology',
      description:
        'Rally Technology integrates alarm monitoring, event notification, trend analysis, and operations workflows so IT / OT teams can respond to the events that matter.'
    },
    heroFocusItems: [
      'Clear priorities',
      'Faster event handling',
      'Less alarm noise'
    ],
    introParagraphs: [
      'In IT and OT environments, missing a unified monitoring and alarm mechanism makes problems harder to catch in time and leaves operators sorting noise.',
      'We build alarm routing, event notification, and escalation workflows so teams spend more attention on judging and handling critical issues.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt:
          'Monitoring display showing industrial alarm and status information',
        layout: 'image-left',
        title: 'Alarm monitoring has to move real events to the front',
        paragraphs: [
          'When alarms, performance data, Vulnerability Scanning results, and maintenance workflows sit in separate systems, teams struggle to decide which event needs attention first.',
          'We integrate IT / OT equipment monitoring, alarm notification, historical trends, and event management into a visualized and traceable operations workflow.'
        ],
        highlights: [
          'Clear priorities',
          'Faster event handling',
          'Less alarm noise'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Priority order',
            description:
              'Set alarm categories and severity logic so events that need intervention are seen first.'
          },
          {
            title: 'Real-time notification',
            description:
              'Connect event notification and escalation workflows to shorten fault location and response time.'
          },
          {
            title: 'Trend analysis',
            description:
              'Preserve historical data and performance context to support abnormal-condition detection and later review.'
          },
          {
            title: 'Risk tracking',
            description:
              'Connect Vulnerability Scanning results with maintenance events so risk status can be followed.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Integrated monitoring',
            paragraphs: [
              'We integrate IT / OT equipment and system data sources into a centralized monitoring and visual operations view.'
            ]
          },
          {
            title: 'Alarm and event workflow',
            paragraphs: [
              'We plan real-time alarms, notification paths, escalation rules, and event management so responsibility and response order stay clear.'
            ]
          },
          {
            title: 'Data and risk management',
            paragraphs: [
              'Historical trends, performance monitoring, abnormal-condition detection, and vulnerability results support data-driven maintenance judgment.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'When abnormal conditions are hard to detect, monitoring is scattered, or operations still depend heavily on manual handling, organize alarm and event logic first. The later this waits, the more alarm noise can dilute real risk.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
