import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: 'Services',
  contactHeading: 'Contact Us'
} as const

export const serviceDetailPagesEn = {
  'scada-hmi-graphics': {
    seo: {
      title: 'SCADA and HMI Graphics | Rally Technology',
      description:
        'Rally Technology designs SCADA / HMI graphics that make plant status, alarms, and operator actions easier to read.'
    },
    heroFocusItems: ['Readable screens', 'Alarm context', 'Easy upkeep'],
    introParagraphs: [
      'Rally Technology designs SCADA / HMI graphics that help operators read status, alarms, and next actions at a glance.',
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
        title: 'SCADA / HMI screens built for real operator use',
        paragraphs: [
          'Good graphics do not start with fitting more data on a page. They start with deciding what the operator needs first, what can wait, and where abnormal conditions should lead.',
          'We align hierarchy, navigation, and status logic so the screens are easier to operate now and easier to extend later.'
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
              'Separate status, alarms, and actions so teams can read the screen without extra scanning.'
          },
          {
            title: 'Alarm context',
            description:
              'Show alarms with related equipment and process context instead of leaving them isolated.'
          },
          {
            title: 'Operator flow',
            description:
              'Place common actions and abnormal-entry points where operators can reach them quickly.'
          },
          {
            title: 'Maintenance rules',
            description:
              'Keep naming and layout standards consistent so later point additions do not break the interface.'
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
          'Bring SCADA / HMI planning in before tag growth and screen expansion begin, so later additions do not turn the interface into patchwork.'
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
      'Rally Technology supports instrumentation and electrical work across FAT / SAT, loop checks, startup, and field troubleshooting.',
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
        title: 'I&E support that keeps field work moving',
        paragraphs: [
          'I&E work becomes difficult when testing, startup, punch closure, and field response are handled as separate tasks. The site needs one working sequence.',
          'We coordinate validation points, troubleshooting, and cross-discipline handoffs so startup moves with fewer surprises.'
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
              'Clarify startup conditions and acceptance points before site work begins.'
          },
          {
            title: 'FAT / SAT closure',
            description:
              'Keep testing, punch closure, and commissioning checks on the same working sequence.'
          },
          {
            title: 'Startup response',
            description:
              'Use troubleshooting and loop checks to reduce surprises during startup windows.'
          },
          {
            title: 'Cross-team coordination',
            description:
              'Align instrumentation, electrical, equipment, and site teams around one execution rhythm.'
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
              'Complete the checks and punch closure needed before startup.'
          },
          {
            title: 'Power Systems Studies',
            description:
              'Review distribution reliability and operating risk early.'
          },
          {
            title: 'Field Troubleshooting',
            description:
              'Respond quickly to field issues and stabilize operation.'
          },
          {
            title: 'Gas Analysis Systems',
            description:
              'Keep gas-composition measurement reliable in process use.'
          },
          {
            title: 'Instrument Calibration',
            description: 'Maintain the accuracy of sensing and control points.'
          },
          {
            title: 'Power Metering',
            description: 'Track consumption, quality, and electrical-use data.'
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
          'Bring I&E support in before FAT closes and before startup windows are fixed. That is when loop checks, punch closure, and field coordination still change the outcome.',
          'It is most useful when instrumentation, electrical, and commissioning tasks need one execution rhythm instead of separate work lists.'
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
      'Rally Technology supports PLC / DCS programming, migration planning, and staged cutover for running systems.',
      'The work centers on a sequence the field can execute, with logic that stays readable during testing, cutover, and later maintenance.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: 'Engineer using a laptop to review control-system settings',
        layout: 'image-right',
        title: 'Migration planning has to fit the real shutdown window',
        paragraphs: [
          'PLC / DCS migration touches existing logic, shutdown limits, dependencies, and rollback conditions. It is not only a programming task.',
          'We structure program changes, validation points, and cutover steps so the site can move without losing operational clarity.'
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
              'Map system boundaries, dependencies, and outage limits before locking the sequence.'
          },
          {
            title: 'Shutdown control',
            description:
              'Define test windows, rollback conditions, and validation steps early.'
          },
          {
            title: 'Logic readability',
            description:
              'Keep program structure understandable for testing, troubleshooting, and later change.'
          },
          {
            title: 'Recovery readiness',
            description:
              'Prepare documents and operating context so the upgraded system is easier to restore and support.'
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
          'Bring PLC / DCS migration in before shutdown windows and test plans are locked. That is when cutover risk, rollback logic, and documentation can still be designed together.'
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
      'Rally Technology uses PI Server to build plant-data platforms for monitoring, reporting, and cross-system use.',
      'The goal is to create a data backbone other teams can actually connect to, not simply to collect more tags.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: 'Industrial data equipment in a dark server-room environment',
        layout: 'image-left',
        title: 'PI Server should make plant data easier to use',
        paragraphs: [
          'PI Server work is about shaping tags, context, and source structure so monitoring, reporting, and integration do not drift apart.',
          'We plan naming, data paths, and expansion logic early so the platform remains usable as new systems connect.'
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
              'Collect plant data in a structure that supports dashboards, reports, and engineering review.'
          },
          {
            title: 'Context and naming',
            description:
              'Set up source structure and naming rules before later expansion creates fragmentation.'
          },
          {
            title: 'Reporting continuity',
            description:
              'Build a foundation that supports recurring reporting instead of one-time setup only.'
          },
          {
            title: 'Shared visibility',
            description:
              'Give operations, engineering, and management a more consistent view of current conditions.'
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
              'Use PI Server to connect live plant data with dashboards, reports, and day-to-day operating review.'
            ]
          },
          {
            title: 'Standardize integration',
            paragraphs: [
              'Structure source data, naming, and interfaces so the platform can expand without becoming harder to manage.'
            ]
          },
          {
            title: 'Support reporting',
            paragraphs: [
              'When data is stable and understandable, reporting, trend review, and cross-team decisions move faster.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'PI Server is most useful when a site needs one stable plant-data backbone for dashboards, reports, and cross-system use.',
          'Bring it in before tags, reports, and external integrations proliferate, so naming and source logic stay consistent.'
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
      'Rally Technology plans historian environments for long-term records, trend comparison, traceability, and reporting.',
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
        title: 'Historian design is about records you can still retrieve later',
        paragraphs: [
          'A historian is valuable when process records can still be queried, compared, and explained long after collection.',
          'We plan retention, retrieval, remote access, and redundancy around the way teams actually review events and produce reports.'
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
              'Keep process records available for comparison, investigation, and traceability over time.'
          },
          {
            title: 'Trend review',
            description:
              'Structure stored data so recurring reports and cross-team analysis are easier to run.'
          },
          {
            title: 'Redundant access',
            description:
              'Plan local and remote access paths to reduce single-point failure risk.'
          },
          {
            title: 'Traceability',
            description:
              'Maintain a stronger record base for compliance, quality review, and event investigation.'
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
          'Bring historian planning in when retention rules, reporting needs, or audit expectations are first being defined.',
          'That is the point where storage layout, access paths, and resilience can be designed for long-term use instead of retrofitted later.'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: 'Network Design | Rally Technology',
      description:
        'Rally Technology plans industrial network architecture for control traffic, field devices, and plant data systems.'
    },
    heroFocusItems: ['Clear topology', 'Resilient segments', 'Room to expand'],
    introParagraphs: [
      'Rally Technology plans industrial network architecture for control traffic, field devices, and plant data systems.',
      'We define boundaries, segmentation, and growth paths early so the network does not become the weak point of the automation stack.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt:
          'Network hardware and connected cabling in an industrial environment',
        layout: 'image-left',
        title: 'Industrial networks need clear boundaries from the start',
        paragraphs: [
          'Good network design separates control traffic, data movement, remote access, and support needs before field devices start accumulating.',
          'We structure topology, segmentation, and expansion room together so later systems can be added without reworking the whole foundation.'
        ],
        highlights: ['Clear topology', 'Resilient segments', 'Room to expand']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Clear boundaries',
            description:
              'Define control, data, and external-access boundaries so interference and risk are easier to manage.'
          },
          {
            title: 'Segmentation',
            description:
              'Include reliability and failure-mode thinking during design instead of treating it as a later patch.'
          },
          {
            title: 'Maintainability',
            description:
              'Keep topology, naming, and network intent understandable for long-term support.'
          },
          {
            title: 'Expansion room',
            description:
              'Preserve room for growth so new systems can be added without rebuilding the whole network.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Topology planning',
            paragraphs: [
              'We structure how devices, sites, and data systems should connect so the network is easier to understand and support.'
            ]
          },
          {
            title: 'Segmentation and resilience',
            paragraphs: [
              'Segmentation, redundancy, and failure scenarios are considered early so the network does not become the fragile part of the automation stack.'
            ]
          },
          {
            title: 'Expansion path',
            paragraphs: [
              'Design choices keep future equipment, data systems, and remote-access needs easier to add later.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Set network design before new control, data, or remote-access systems are layered on top. That is when boundaries and resilience can still be designed cleanly.'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: 'Remote Monitoring and Data | Rally Technology',
      description:
        'Rally Technology helps build remote monitoring and data-continuity workflows for distributed sites and critical records.'
    },
    heroFocusItems: [
      'Remote visibility',
      'Data continuity',
      'Recovery readiness'
    ],
    introParagraphs: [
      'Rally Technology helps build remote monitoring and data-continuity workflows for distributed sites and critical records.',
      'We plan visibility, continuity, and recovery together so remote access does not leave record protection as an afterthought.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: 'Remote monitoring workstation with multiple screens',
        layout: 'image-right',
        title: 'Remote visibility works best with continuity planning',
        paragraphs: [
          'Remote monitoring is only reliable when teams can still review status, retrieve records, and recover evidence after an abnormal event.',
          'We combine cross-site visibility, backup paths, and recovery logic so remote operations stay usable under pressure.'
        ],
        highlights: [
          'Remote visibility',
          'Data continuity',
          'Recovery readiness'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Cross-site visibility',
            description:
              'Make important site status easier to review across multiple locations.'
          },
          {
            title: 'Record continuity',
            description:
              'Plan monitoring together with backup paths so important records remain available later.'
          },
          {
            title: 'Recovery readiness',
            description:
              'Keep stronger evidence and state history available when teams need to recover or investigate.'
          },
          {
            title: 'Access boundaries',
            description:
              'Shape remote visibility around actual operational needs and clear risk limits.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Common Scenarios',
        columns: 3,
        items: [
          {
            title: 'Cross-site monitoring',
            description:
              'Let teams follow important sites without always being on location.'
          },
          {
            title: 'Data backup',
            description:
              'Reduce the risk of losing critical records when one storage path fails.'
          },
          {
            title: 'Event review',
            description:
              'Preserve the context needed for incident review and future improvement.'
          },
          {
            title: 'Business continuity',
            description:
              'Keep information access and decision support moving during remote or unexpected conditions.'
          }
        ]
      },
      {
        type: 'summary',
        title: 'When to Bring It In',
        paragraphs: [
          'Bring remote monitoring and data-continuity planning in before sites, backup paths, and remote roles are all defined separately.',
          'That is when visibility, recovery expectations, and access boundaries can still be designed as one workflow.'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Rally Technology',
      description:
        'Rally Technology develops alarm strategies and notification workflows that help teams respond to the right events faster.'
    },
    heroFocusItems: ['Clear priorities', 'Faster judgment', 'Less alarm noise'],
    introParagraphs: [
      'Rally Technology develops alarm strategies and notification workflows that help teams respond to the right events faster.',
      'We focus on alarm priority, context, and escalation so operators spend less time sorting noise and more time acting on real conditions.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt:
          'Monitoring display showing industrial alarm and status information',
        layout: 'image-left',
        title: 'Alarm monitoring should make priorities obvious',
        paragraphs: [
          'Alarm systems fail when every event looks urgent or when operators cannot tell what needs action first.',
          'We organize alarm conditions, escalation flow, and screen context so teams can judge severity faster and respond with less hesitation.'
        ],
        highlights: ['Clear priorities', 'Faster judgment', 'Less alarm noise']
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Priority first',
            description:
              'Make critical conditions easier to recognize before low-value noise takes over attention.'
          },
          {
            title: 'Severity logic',
            description:
              'Set alarm severity and ordering clearly so response expectations are easier to follow.'
          },
          {
            title: 'Context on screen',
            description:
              'Show how each alarm relates to process and equipment context instead of leaving events isolated.'
          },
          {
            title: 'Noise control',
            description:
              'Reduce repetitive or low-action alarms so they do not compete with real priorities.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Alarm strategy',
            paragraphs: [
              'We help organize alarm conditions so teams understand which events matter most and how they should respond.'
            ]
          },
          {
            title: 'Escalation flow',
            paragraphs: [
              'Notification timing and ownership are arranged clearly so the site loses less time deciding who needs to act.'
            ]
          },
          {
            title: 'Screen context',
            paragraphs: [
              'Alarm visibility is stronger when operators can immediately see the related process, equipment, and next action.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Bring alarm strategy in before new points, screens, and notification rules pile up. That is when priority and response ownership can still be set cleanly.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
