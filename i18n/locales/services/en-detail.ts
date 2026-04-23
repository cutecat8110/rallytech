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
  // Source: docs/rewrite/文案.md items 1-3, mapped as new public services.
  'it-infrastructure': {
    seo: {
      title: 'IT Infrastructure Planning and Deployment | Rally Technology',
      description:
        'Rally Technology plans enterprise IT architecture, servers, storage, and virtualization resources for stable and expandable foundations.'
    },
    heroFocusItems: [
      'Stable architecture',
      'Simpler integration',
      'Room to scale'
    ],
    introParagraphs: [
      'IT infrastructure is not a one-off equipment purchase. It is the foundation that connects servers, storage, networks, virtualization, backup, and operational support.',
      'We help teams assess the current environment, plan the architecture, and define a practical deployment sequence so daily operations, recovery, and future growth have a clearer base.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'it-infrastructure',
        imageAlt:
          'Engineer reviewing server equipment beside data center racks',
        layout: 'image-right',
        title: 'IT infrastructure should be planned as an operating foundation',
        paragraphs: [
          'Enterprise IT environments depend on servers, storage, virtualization, backup, and access control working together. Without a shared plan, later expansion and maintenance become a set of disconnected fixes.',
          'Rally Technology organizes resource allocation, system integration, and maintenance boundaries so the environment can support daily operations and project growth.'
        ],
        highlights: [
          'Stable architecture',
          'Simpler integration',
          'Room to scale'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Architecture planning',
            description:
              'Plan server, storage, network, and virtualization architecture around operating needs and the current environment.'
          },
          {
            title: 'Resource integration',
            description:
              'Bring compute, storage, and platform resources into a more maintainable management model.'
          },
          {
            title: 'High availability',
            description:
              'Include HA / DR and data protection early so single failures create less operational impact.'
          },
          {
            title: 'Performance tuning',
            description:
              'Adjust resource allocation for the expected workload while preserving expansion flexibility.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'IT architecture planning',
            paragraphs: [
              'Assess existing equipment, system needs, and expansion limits to define an infrastructure roadmap that fits the business environment.'
            ]
          },
          {
            title: 'Virtualization and resource integration',
            paragraphs: [
              'Plan server virtualization, storage layout, and resource-management practices that make the foundation easier to operate.'
            ]
          },
          {
            title: 'Backup and recovery design',
            paragraphs: [
              'Define availability, backup, and disaster-recovery logic around service importance so teams have a workable recovery path.'
            ]
          }
        ]
      },
      {
        type: 'process-steps',
        title: 'Deployment Flow',
        items: [
          {
            stepLabel: '01',
            title: 'Assess the current state',
            description:
              'Review existing equipment, workloads, data-retention needs, and maintenance pain points.'
          },
          {
            stepLabel: '02',
            title: 'Design the architecture',
            description:
              'Plan server, storage, virtualization, backup, and management boundaries.'
          },
          {
            stepLabel: '03',
            title: 'Deploy in phases',
            description:
              'Sequence implementation around risk and timing to reduce disruption to current operations.'
          },
          {
            stepLabel: '04',
            title: 'Validate and hand over',
            description:
              'Confirm performance, backup behavior, and operations documentation so the team can manage the environment.'
          }
        ]
      }
    ]
  },
  'cybersecurity-network': {
    seo: {
      title:
        'Cybersecurity Network Architecture and Protection | Rally Technology',
      description:
        'Rally Technology integrates network segmentation, access control, threat protection, and vulnerability checks to reduce cybersecurity risk.'
    },
    heroFocusItems: [
      'Segmented access',
      'Lower attack risk',
      'Ongoing vulnerability checks'
    ],
    introParagraphs: [
      'Cybersecurity network deployment starts with clear access boundaries between users, systems, data, and devices.',
      'We help plan segmentation, protection, remote access, and vulnerability-check workflows so organizations can keep operations efficient while reducing exposure.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'cybersecurity-network',
        imageAlt: 'Engineer adjusting a core network switch in a data center',
        layout: 'image-left',
        title: 'Cybersecurity networks need maintainable protection boundaries',
        paragraphs: [
          'Connecting systems through a firewall is not enough. Long-term protection depends on understandable zones, permissions, monitoring, and vulnerability response.',
          'Rally Technology connects segmentation, access control, intrusion protection, and assessment cadence so IT / OT teams can see where risk sits and keep the controls maintainable.'
        ],
        highlights: [
          'Segmented access',
          'Lower attack risk',
          'Ongoing vulnerability checks'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Network segmentation',
            description:
              'Separate network zones by role, system, and risk level to reduce lateral-movement exposure.'
          },
          {
            title: 'Access control',
            description:
              'Define VPN, authentication, and permission logic for both remote and internal access.'
          },
          {
            title: 'Threat protection',
            description:
              'Integrate firewalls, IPS, and monitoring mechanisms to increase abnormal-activity visibility.'
          },
          {
            title: 'Vulnerability checks',
            description:
              'Use regular assessments and remediation tracking so protection does not stop at initial deployment.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Cybersecurity network architecture',
            paragraphs: [
              'Map critical systems, user roles, and data flows before defining segmentation, isolation, and protection-device placement.'
            ]
          },
          {
            title: 'Remote access and Zero Trust',
            paragraphs: [
              'Design verification, authorization, and access workflows around user roles and operating scenarios to reduce the exposed surface.'
            ]
          },
          {
            title: 'Vulnerability assessment and follow-up',
            paragraphs: [
              'Plan assessment, risk ranking, and remediation guidance so cybersecurity work has clear priorities.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Bring cybersecurity network planning in before new systems, remote maintenance, or cross-team data connections are finalized. That is when segmentation and access boundaries can still be designed cleanly.'
        ]
      }
    ]
  },
  'offshore-wind-operations': {
    seo: {
      title:
        'Offshore Wind Remote Operations and Security Management | Rally Technology',
      description:
        'Rally Technology builds secure remote connections, monitoring, maintenance response, and safety-management workflows for offshore wind and remote sites.'
    },
    heroFocusItems: [
      'Secure remote operation',
      'Faster fault response',
      'Lower site risk'
    ],
    introParagraphs: [
      'Offshore wind operations are shaped by weather, travel constraints, and site risk, so remote visibility, remote support, and safety workflows need to be planned together.',
      'We help build secure remote connections, monitoring, and alarm-response workflows so teams can judge conditions faster, plan action, and reduce unnecessary site visits.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'offshore-wind-operations',
        imageAlt:
          'Offshore wind turbines and offshore electrical infrastructure',
        layout: 'image-right',
        title:
          'Offshore wind operations need remote support and safety designed together',
        paragraphs: [
          'Remote-site maintenance pressure is not only about equipment. Teams also need to know who can connect safely, how events are evaluated, when dispatch is needed, and how site risk is controlled.',
          'Rally Technology combines remote access, SCADA / PLC / HMI support, alarm monitoring, and permission workflows so operations teams can keep a steadier maintenance rhythm.'
        ],
        highlights: [
          'Secure remote operation',
          'Faster fault response',
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
              'Plan VPN, permissions, and connection workflows to reduce the safety and security risk of remote maintenance.'
          },
          {
            title: 'Equipment visibility',
            description:
              'Connect SCADA, control systems, and key signals so teams can support remote review and follow-up.'
          },
          {
            title: 'Event response',
            description:
              'Define alarm, dispatch, and escalation logic so abnormal events reach the right response path faster.'
          },
          {
            title: 'Safety management',
            description:
              'Include permissions, records, and maintenance workflows in the management model to lower operating risk.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Scope and Method',
        items: [
          {
            title: 'Remote operations architecture',
            paragraphs: [
              'Plan remote access, monitoring data, and operating permissions so teams can support the site within a defined safety boundary.'
            ]
          },
          {
            title: 'SCADA / PLC / HMI support',
            paragraphs: [
              'Support monitoring screens, control signals, and equipment status so teams can evaluate abnormal conditions and maintain systems.'
            ]
          },
          {
            title: 'Alarm and incident management',
            paragraphs: [
              'Organize alarm priorities, notifications, and escalation flow so remote-site incidents do not stall at information gaps.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'When It Fits',
        paragraphs: [
          'Use this service when wind farms, offshore substations, or remote sites need remote support, lower dependence on site visits, or a clearer model for maintenance permissions and incident response.'
        ]
      }
    ]
  },
  // Source: docs/rewrite/文案.md item 4, backfilled into the existing network-design service.
  'network-design': {
    seo: {
      title: 'Network Design | Rally Technology',
      description:
        'Rally Technology plans industrial networks around Core / Control / Field layers to improve communication stability and reduce system risk.'
    },
    heroFocusItems: [
      'Clear layered architecture',
      'Stable device communication',
      'Lower system risk'
    ],
    introParagraphs: [
      'Industrial network design focuses on Core / Control / Field layers, field-device communication, and control-data exchange so automation systems have a stable network foundation.',
      'We define topology, segmentation, redundancy, and maintenance paths early so the control network does not become a system-risk source during expansion or abnormal conditions.'
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
          'Industrial networks need clear control layers and communication paths',
        paragraphs: [
          'Good industrial networks do not start by connecting equipment and repairing the structure later. They start by defining the communication tasks and risk boundaries of the Core, Control, and Field layers.',
          'We plan topology, network isolation, redundancy paths, and communication performance together so control systems stay stable during daily operation and later expansion.'
        ],
        highlights: [
          'Clear layered architecture',
          'Stable device communication',
          'Lower system risk'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Layered architecture',
            description:
              'Organize communication responsibilities around Core / Control / Field layers so network roles are easier to understand.'
          },
          {
            title: 'IT / OT separation',
            description:
              'Clarify control-network boundaries from other networks to reduce traffic interference and access risk.'
          },
          {
            title: 'High-availability topology',
            description:
              'Include redundancy, failure scenarios, and critical paths in the design to improve site communication resilience.'
          },
          {
            title: 'Communication performance',
            description:
              'Review latency, packet flow, and device connection needs to reduce downtime caused by unstable communication.'
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
              'We structure how controllers, field devices, switches, and data systems connect so the industrial network topology stays clear.'
            ]
          },
          {
            title: 'Segmentation and isolation',
            paragraphs: [
              'We plan IT / OT boundaries, VLANs, and network-zone isolation to reduce unexpected traffic and access risk.'
            ]
          },
          {
            title: 'Stability and performance',
            paragraphs: [
              'Redundancy topology, latency, and packet paths are included in the design to improve field-device communication stability.'
            ]
          },
          {
            title: 'Industrial cybersecurity handoff',
            paragraphs: [
              'Protection and monitoring interfaces are reserved within the industrial network scope so later security controls can align with the control-network boundary.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Set industrial network design before control systems, field devices, and data platforms expand heavily. That is when layers, isolation, and redundancy can still be designed cleanly.'
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
      'Remote monitoring and data backup have to answer three questions together: can teams see it, can data return, and can records still be reviewed after an event?',
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
  // Source: docs/rewrite/文案.md item 5, backfilled into the existing alarm-monitoring service.
  'alarm-monitoring': {
    seo: {
      title:
        'Alarm Monitoring and Visualized Operations Management | Rally Technology',
      description:
        'Rally Technology integrates alarm monitoring, event notification, trend analysis, and maintenance workflows so IT / OT teams can respond to the right events faster.'
    },
    heroFocusItems: [
      'Clear priorities',
      'Faster event response',
      'Less alarm noise'
    ],
    introParagraphs: [
      'Alarm monitoring and system maintenance need to make priority, event context, and the next response path clear to IT / OT teams.',
      'We align conditions, notifications, trend analysis, and escalation logic so teams spend less time sorting noise and more time acting on events that need attention.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt:
          'Monitoring display showing industrial alarm and status information',
        layout: 'image-left',
        title:
          'Alarm monitoring should connect events with maintenance workflows',
        paragraphs: [
          'When every event looks urgent, or maintenance teams cannot tell what needs action first, the problem is often unclear priority, notification, and context rather than a lack of information.',
          'We organize alarm conditions, real-time notification, escalation flow, and trend analysis so teams can judge severity faster and track follow-up more clearly.'
        ],
        highlights: [
          'Clear priorities',
          'Faster event response',
          'Less alarm noise'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Key Priorities',
        items: [
          {
            title: 'Alarm priority',
            description:
              'Make critical conditions easier to recognize before low-value noise takes over attention.'
          },
          {
            title: 'Real-time notification',
            description:
              'Define notification timing, recipients, and escalation rules so events move into response faster.'
          },
          {
            title: 'Trend analysis',
            description:
              'Connect alarms back to equipment status and historical trends instead of leaving events isolated.'
          },
          {
            title: 'Risk tracking',
            description:
              'Record response history and improvement actions so operations teams can keep reducing repeat risk.'
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
              'We help integrate system status, equipment signals, and critical alarms so IT / OT teams can evaluate events from one clearer view.'
            ]
          },
          {
            title: 'Alarm and event workflow',
            paragraphs: [
              'Alarm conditions, recipients, escalation rules, and response ownership are defined clearly so events spend less time stalled in triage.'
            ]
          },
          {
            title: 'Data and risk management',
            paragraphs: [
              'Trend analysis and event records help operations teams track recurring risks and plan follow-up improvements.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Bring alarm monitoring and system-maintenance planning in before new points, screens, and notification rules pile up. That is when priorities, ownership, and follow-up methods can still be defined cleanly.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
