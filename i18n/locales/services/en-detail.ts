/* eslint-disable @stylistic/quote-props */
import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: 'Services',
  contactHeading: 'Contact Us'
} as const

export const serviceDetailPagesEn = {
  'scada-hmi-graphics': {
    seo: {
      title: 'SCADA / HMI Graphics | Rally Technology',
      description:
        'Rally Technology designs SCADA / HMI, WinCC OA, and AVEVA System Platform graphics that make plant status, alarms, and operator actions easier to read.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'SCADA / HMI graphics turn equipment status, process conditions, alarms, trends, and operator actions into screens the site team can read and act on.',
      'Rally helps project teams plan screen hierarchy, alarm context, and naming rules so the system stays consistent through commissioning, daily operation, and later expansion.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'scada-hmi-graphics',
        imageAlt: 'Engineer reviewing industrial monitoring screens',
        layout: 'image-right',
        title: 'Help operators read site conditions faster',
        paragraphs: [
          'Good graphics are not built by placing every value on one screen. They help operators understand current state, affected equipment, and the next action during normal operation, abnormal alarms, and shift handover.',
          'We organize screens around process flow, equipment context, and user roles so SCADA / HMI becomes a shared operating language, not only a monitoring interface.'
        ],
        highlights: ['Status clarity', 'Alarm context', 'Operator flow']
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Plan the screen structure and upkeep rules together',
        items: [
          {
            title: 'Screen hierarchy',
            description:
              'Define overview, unit, and detailed screens around process flow, equipment, and operator roles.'
          },
          {
            title: 'Alarm context',
            description:
              'Connect alarms with trends and equipment status so the team can judge impact and priority.'
          },
          {
            title: 'Naming and graphic rules',
            description:
              'Set naming, color, and graphic conventions that make later expansion easier to maintain.'
          },
          {
            title: 'Platform handoff',
            description:
              'Align the graphics with WinCC OA, AVEVA System Platform, or the selected project platform.'
          }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: false,
        title: 'When SCADA / HMI planning should start early',
        items: [
          {
            title: 'New system delivery',
            description:
              'Screen structure, operating logic, and alarm presentation need to be defined before build-out.'
          },
          {
            title: 'Existing screen cleanup',
            description:
              'The system works, but hierarchy, color, naming, or operator flow need to become consistent.'
          },
          {
            title: 'Scattered alarm context',
            description:
              'Operators receive alarms but cannot quickly see related equipment, impact, or next action.'
          },
          {
            title: 'Ongoing point growth',
            description:
              'New equipment and tags keep being added, and the graphics need to remain readable and maintainable.'
          }
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Rally Technology',
      description:
        'Rally Technology provides I&E field support across FAT / SAT, loop checks, startup, and troubleshooting so site work can move forward with less friction.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'I&E support connects field signals, instruments, power systems, and commissioning milestones into one trackable workstream.',
      'Rally helps project teams coordinate FAT / SAT, loop checks, troubleshooting, startup support, and handover so field issues can close faster.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'ie-services',
        imageAlt: 'Industrial control cabinet and instrumentation equipment',
        layout: 'image-left',
        title: 'Field support that keeps commissioning moving',
        paragraphs: [
          'I&E service is not only about handling a single instrument or electrical issue. It keeps testing, punch-list closure, and startup work connected.',
          'We bring signal status, loops, equipment response, and field coordination into a clear rhythm so teams can locate problems and complete handover with less back-and-forth.'
        ],
        highlights: ['FAT / SAT', 'Loop checks', 'Field troubleshooting']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: 'What field support needs to cover',
        items: [
          {
            title: 'Test readiness',
            description:
              'Align test conditions, documents, signals, and site contacts before FAT / SAT.'
          },
          {
            title: 'Issue location',
            description:
              'Read signal, equipment response, and control logic in the same context.'
          },
          {
            title: 'Punch-list closure',
            description:
              'Track open items, correction status, and remaining acceptance risk.'
          }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Connect testing, startup, and site response',
        items: [
          {
            title: 'FAT / SAT support',
            description:
              'Support test preparation, live issue tracking, and post-test closure so validation connects to site work.'
          },
          {
            title: 'Field troubleshooting',
            description:
              'Locate signal, equipment, and response issues to reduce waiting time during field execution.'
          },
          {
            title: 'Instrumentation and power support',
            description:
              'Support calibration, power studies, and metering deployment where field readiness depends on stable basics.'
          },
          {
            title: 'System and safety handoff',
            description:
              'Connect gas analysis, safety systems, and control platform needs with the overall delivery plan.'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          'Field issues rarely belong to one device alone. When signals, loops, control logic, and acceptance milestones are reviewed together, commissioning closes faster.',
        attribution: 'Rally Technology I&E project team'
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Bring I&E support in before field issues start slowing acceptance',
        paragraphs: [
          'When FAT / SAT, startup, or acceptance dates are approaching, or when signal, loop, instrument, and control-system issues need cross-team clarification, early I&E support reduces waiting time and repeated confirmation.'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: 'PLC / DCS Programming and Migration | Rally Technology',
      description:
        'Rally Technology supports PLC / DCS programming, migration planning, and staged cutovers for control systems that need to keep operating through upgrades.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'PLC / DCS programming and migration often happen while the plant still needs to operate, so the work must be planned around executable cutover paths and controlled risk.',
      'Rally reviews installed logic, shutdown constraints, and equipment dependencies to build a control-system upgrade path that can be tested, recovered, and maintained.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageRole: 'detail-feature',
        imageAlt: 'Engineer reviewing control system settings on a laptop',
        layout: 'image-right',
        title: 'Plan program changes around the real shutdown window',
        paragraphs: [
          'Control-system migration touches installed logic, equipment dependencies, operator habits, and rollback conditions. Treating it only as a programming task can create avoidable field risk.',
          'We define the operating baseline and cutover boundary first, then plan testing, staged migration, and recovery readiness.'
        ],
        highlights: ['Staged cutover', 'Shutdown control', 'Recovery readiness']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Risks to clarify before migration',
        items: [
          {
            title: 'Logic is not a black box',
            description:
              'Naming, module relationships, and dependencies need to be understood before the new system inherits old problems.'
          },
          {
            title: 'Shutdown time is limited',
            description:
              'Changes should be split into testable, verifiable, and recoverable cutover units.'
          },
          {
            title: 'Handover must continue',
            description:
              'Versions, test records, and maintenance references should remain clear after migration.'
          }
        ]
      },
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageRole: 'overview-card',
        imageAlt: 'PLC cabinet and field control equipment',
        layout: 'image-left',
        title: 'Keep control logic readable before and after the cutover',
        paragraphs: [
          'Programming, modification, and migration should deliver logic that operates reliably and can still be maintained later.',
          'Rally considers I/O, operating flow, abnormal conditions, and documentation baselines so the transition from old to new remains traceable.'
        ],
        highlights: ['I/O mapping', 'Abnormal conditions', 'Version baseline']
      },
      {
        type: 'process-steps',
        eyebrow: false,
        title: 'A cutover rhythm built around operating risk',
        items: [
          {
            title: 'Review the installed baseline',
            description:
              'Confirm existing programs, I/O, operating flow, dependencies, and site limits.'
          },
          {
            title: 'Plan staged migration',
            description:
              'Divide the change into testable, verifiable, and recoverable cutover units.'
          },
          {
            title: 'Execute and validate',
            description:
              'Complete cutover, testing, and issue handling within the planned window.'
          },
          {
            title: 'Stabilize the new baseline',
            description:
              'Prepare handover, version records, and maintenance references for the upgraded system.'
          }
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: 'PI Server | Rally Technology',
      description:
        'Rally Technology builds PI Server / PI System data platforms that support plant monitoring, reporting, industrial analytics, and cross-system use.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'PI Server is not only about collecting more tags. It is about making plant data searchable, reportable, analyzable, and usable across systems.',
      'Rally helps teams organize data sources, naming rules, and use cases so PI System becomes a data backbone the organization can keep using.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'pi-server',
        imageRole: 'detail-feature',
        imageAlt: 'Industrial data equipment in a server environment',
        layout: 'image-left',
        title: 'Make plant data easier to use',
        paragraphs: [
          'A real-time data platform becomes valuable when different teams need the same data, the same trend, or the same reporting source.',
          'We organize tags, sources, naming, and context so the platform does not simply collect data, but supports daily work.'
        ],
        highlights: ['Data backbone', 'Naming context', 'Reporting integration']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: 'What a PI System baseline should support',
        items: [
          {
            title: 'Searchable',
            description:
              'Names, descriptions, and equipment context should help different roles find and understand data.'
          },
          {
            title: 'Reportable',
            description:
              'Monitoring, trends, and management reports should share a consistent data foundation.'
          },
          {
            title: 'Integratable',
            description:
              'Platform data should support later analytics, applications, and cross-team use.'
          }
        ]
      },
      {
        type: 'accordion',
        eyebrow: 'Common Uses',
        title: 'Typical PI Server use cases',
        items: [
          {
            title: 'Monitoring and trend review',
            paragraphs: [
              'Turn real-time site data into searchable trends and records for operations and engineering review.'
            ]
          },
          {
            title: 'Reports and operating data',
            paragraphs: [
              'Move data from scattered systems, spreadsheets, or manual reporting into a steadier reporting foundation.'
            ]
          },
          {
            title: 'Cross-system data use',
            paragraphs: [
              'Prepare a consistent plant data source for MES, energy management, analytics platforms, or internal applications.'
            ]
          }
        ],
        note: 'The final scope depends on installed systems, data quality, and user roles.'
      },
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'pi-server',
        imageRole: 'overview-card',
        imageAlt: 'Server racks and data-platform equipment',
        layout: 'image-right',
        title: 'Organize the data source and the use case together',
        paragraphs: [
          'PI Server creates long-term value when data remains usable beyond the initial tag connection.',
          'Rally helps define ingestion priorities, tag naming, equipment relationships, and reporting needs so the platform remains manageable as point counts grow.'
        ],
        highlights: ['Data ingestion', 'Tag naming', 'Platform upkeep']
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'When plant data starts crossing teams, establish the platform baseline first',
        paragraphs: [
          'If data is split across systems, reports rely on manual preparation, or analytics and integration are coming next, PI Server naming, architecture, and governance should be planned early.'
        ]
      }
    ]
  },
  historians: {
    seo: {
      title: 'Historians | Rally Technology',
      description:
        'Rally Technology plans historian architectures for long-term records, trend comparison, traceability, reporting, and energy-site data retention.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'A historian is valuable when process, quality, or energy data can still be found, compared, and explained after time has passed.',
      'Rally helps plan retention, access, and redundancy so long-term records remain usable operating data, not only backups.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'historians',
        imageRole: 'detail-feature',
        imageAlt: 'Server equipment used for historian data platforms',
        layout: 'image-right',
        title: 'Turn long-term records into traceable operating data',
        paragraphs: [
          'When a question comes weeks, months, or years later, data has to be available enough to retrieve, compare, and explain what happened.',
          'Historian architecture needs to account for data volume, retention period, reporting needs, access, and redundancy.'
        ],
        highlights: [
          'Long-term retention',
          'Trend comparison',
          'Redundant access'
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'What long-term data platforms need to protect',
        items: [
          {
            title: 'Traceability',
            description:
              'Review past events, process states, and quality conditions.'
          },
          {
            title: 'Comparison',
            description:
              'Compare trends, energy use, efficiency, and abnormal changes over time.'
          },
          {
            title: 'Retention',
            description:
              'Keep records available for operating, reporting, and audit needs.'
          }
        ]
      },
      {
        type: 'accordion',
        eyebrow: 'Common Uses',
        title: 'Typical historian use cases',
        items: [
          {
            title: 'Process traceability',
            paragraphs: [
              'Review process states, alarms, equipment conditions, and event changes around a specific time period.'
            ]
          },
          {
            title: 'Trends and efficiency analysis',
            paragraphs: [
              'Compare production, energy, or key parameters across operating cycles to support improvement decisions.'
            ]
          },
          {
            title: 'Reports and audit records',
            paragraphs: [
              'Turn long-term records into searchable, exportable, and deliverable reporting references.'
            ]
          },
          {
            title: 'Retention and redundancy',
            paragraphs: [
              'Plan storage, backup, and recovery around data volume, retention period, and business importance.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Plan historian architecture before long-term records become hard to explain',
        paragraphs: [
          'When teams need long-range trends, quality traceability, energy analysis, or audit-ready reports, retention periods, query paths, redundancy, and handover rules should be defined early.'
        ]
      }
    ]
  },
  'it-infrastructure': {
    seo: {
      title: 'IT Infrastructure | Rally Technology',
      description:
        'Rally Technology plans enterprise IT architecture, servers, storage, and virtualization resources to create a stable and scalable operating foundation.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Build a stable and scalable IT architecture that can support enterprise operations over time.',
      'Through complete architecture planning and phased deployment, Rally integrates servers, storage, and virtualization resources to improve stability, management efficiency, and future scalability.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'it-infrastructure',
        imageAlt: 'Engineer checking server equipment in a data center rack',
        layout: 'image-right',
        title: 'Build an IT foundation that can support operations over time',
        paragraphs: [
          'Enterprise IT design has moved beyond equipment installation. It now directly affects operating stability and service quality.',
          'We plan the full lifecycle across architecture design, deployment, and maintenance handover so enterprise IT environments stay available, scalable, and resilient.'
        ],
        highlights: [
          'Reliable architecture',
          'Simplified integration',
          'Room for growth'
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Core scope',
        items: [
          {
            title: 'IT architecture planning',
            description:
              'Build a maintainable foundation across compute, storage, and network resources.'
          },
          {
            title: 'Virtualization and resource integration',
            description:
              'Improve utilization, management visibility, and future scalability.'
          },
          {
            title: 'HA and DR design',
            description:
              'Reduce single points of failure and business interruption risk.'
          },
          {
            title: 'System integration and performance optimization',
            description:
              'Connect old and new systems through deployment, validation, and handover.'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Service value',
        items: [
          {
            title: 'Enterprise-grade stability',
            description:
              'Establish an IT foundation with stronger operating resilience.'
          },
          {
            title: 'Lower interruption risk',
            description:
              'Reduce single points of failure and operating downtime.'
          },
          {
            title: 'Better resource visibility',
            description:
              'Improve resource integration efficiency and management visibility.'
          },
          {
            title: 'Support future growth',
            description:
              'Keep architecture ready for business expansion and system growth.'
          }
        ]
      },
      {
        type: 'process-steps',
        eyebrow: 'Deployment Method',
        title:
          'Reduce deployment risk through assessment and phased validation',
        items: [
          {
            title: 'Assess the current state',
            description:
              'Review existing equipment, capacity, performance bottlenecks, and operations limits.'
          },
          {
            title: 'Design the standard architecture',
            description:
              'Define target compute, storage, network, and virtualization resources.'
          },
          {
            title: 'Deploy and validate in phases',
            description:
              'Connect old and new systems smoothly while reducing implementation risk.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Plan IT infrastructure before new rooms, aging systems, or virtualization projects move too far',
        paragraphs: [
          'When building a new IT environment, addressing aging systems or performance bottlenecks, or introducing virtualization and redundancy, architecture, capacity, and operations baselines should be defined first.'
        ]
      }
    ]
  },
  'cybersecurity-network': {
    seo: {
      title: 'Cybersecurity Network | Rally Technology',
      description:
        'Rally Technology uses Defense in Depth, Zero Trust, VPN, IAM, and vulnerability scanning to build controllable and visible security network environments.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Build layered defense and access control mechanisms to reduce enterprise cybersecurity risk.',
      'Through network segmentation, Zero Trust architecture, and vulnerability scanning, Rally helps organizations move from passive defense to active risk management.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'cybersecurity-network',
        imageAlt:
          'Engineer reviewing core switch and cybersecurity network equipment',
        layout: 'image-left',
        title: 'Build cybersecurity on a controllable network architecture',
        paragraphs: [
          'Modern enterprise cybersecurity has to be built on the network architecture, not only on individual security devices.',
          'We use Defense in Depth and Zero Trust as design principles to create secure network environments that are visible, controllable, and maintainable.'
        ],
        highlights: [
          'Network segmentation',
          'Lower attack risk',
          'Continuous vulnerability checks'
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Core scope',
        items: [
          {
            title: 'IT / OT segmentation',
            description:
              'Redefine network boundaries, zones, and access control.'
          },
          {
            title: 'Advanced threat protection',
            description:
              'Integrate firewalls, IPS, and threat-protection capabilities.'
          },
          {
            title: 'VPN security architecture',
            description:
              'Design secure Site-to-Site and Remote Access connectivity.'
          },
          {
            title: 'Identity and access management',
            description:
              'Use IAM mechanisms to strengthen identity, permissions, and access control.'
          },
          {
            title: 'Zero Trust architecture',
            description:
              'Plan and introduce Zero Trust architecture to reduce risk from over-trusted access.'
          },
          {
            title: 'Vulnerability scanning and risk assessment',
            description:
              'Run vulnerability scanning and risk assessment as part of active risk management.'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Service value',
        items: [
          {
            title: 'Reduce lateral movement',
            description: 'Lower internal penetration and attack-spread risk.'
          },
          {
            title: 'Create security boundaries',
            description:
              'Make boundaries, permissions, and traffic relationships visible and controllable.'
          },
          {
            title: 'Improve defense and response',
            description:
              'Raise the overall security protection level and response capability.'
          },
          {
            title: 'Support remote work',
            description: 'Support secure cross-site and remote operating needs.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Prioritize security architecture when segmentation, remote access, or audits become pressing',
        paragraphs: [
          'Traffic analysis and risk assessment help redefine network boundaries and trust models before segmentation and access-control policies are introduced without disrupting existing services.'
        ]
      }
    ]
  },
  'offshore-wind-operations': {
    seo: {
      title: 'Offshore Wind Operations | Rally Technology',
      description:
        'Rally Technology supports secure remote access, SCADA / PLC / HMI maintenance, OT monitoring, and alarm-event workflows for offshore wind operations.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Build a safe and remotely operable maintenance model for highly constrained environments.',
      'By integrating secure connectivity and monitoring systems, Rally helps offshore wind teams respond to abnormal conditions with limited manpower while improving stability and reducing maintenance cost.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'offshore-wind-operations',
        imageAlt: 'Offshore wind turbines and marine power infrastructure',
        layout: 'image-right',
        title:
          'Establish a remote operations baseline for high-risk, low-access sites',
        paragraphs: [
          'Offshore wind farms are high-risk, low-access environments where maintenance must balance stability, safety, and response speed.',
          'Rally combines OT system experience with cybersecurity architecture to provide remote operations solutions designed for offshore wind environments.'
        ],
        highlights: [
          'Secure remote operations',
          'Fast incident handling',
          'Lower site risk'
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Core scope',
        items: [
          {
            title: 'Secure Remote Access',
            description:
              'Design remote connectivity, permissions, and operation records.'
          },
          {
            title: 'SCADA / PLC / HMI support',
            description:
              'Support remote visibility, issue analysis, and maintenance response.'
          },
          {
            title: 'OT network and equipment monitoring',
            description:
              'Track key wind-power systems and equipment conditions.'
          },
          {
            title: 'Remote alarm-event analysis',
            description:
              'Create event judgment, escalation, and response workflows.'
          },
          {
            title: 'Maintenance permission and workflow control',
            description:
              'Keep remote maintenance governed by clear permissions, procedures, and traceable records.'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Service value',
        items: [
          {
            title: 'Lower site risk',
            description:
              'Reduce personnel travel and field-maintenance exposure.'
          },
          {
            title: 'Faster response',
            description: 'Improve fault diagnosis and response speed.'
          },
          {
            title: 'Stable wind-power systems',
            description: 'Keep critical wind-power systems operating reliably.'
          },
          {
            title: 'Security-ready operations',
            description:
              'Establish a remote maintenance mechanism aligned with security expectations.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Remote operations should be planned early for offshore, remote, or centralized OT environments',
        paragraphs: [
          'Secure tunnels, permission control, SCADA integration, and network monitoring should be planned together to create operations that are remote, visible, and traceable.'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: 'Network Design | Rally Technology',
      description:
        'Rally Technology plans industrial networks around Core / Control / Field layers to improve communication stability and reduce system and cybersecurity risk.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Use layered and isolated design to keep equipment communication stable and reduce system risk.',
      'Rally designs industrial networks around Core / Control / Field layers to improve communication efficiency and reliability while reducing operational and cybersecurity risk.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'network-design',
        imageRole: 'detail-feature',
        imageAlt: 'Industrial network equipment and connected cabling',
        layout: 'image-left',
        title: 'Define control layers before communication paths',
        paragraphs: [
          'The industrial network connects equipment, control systems, and monitoring platforms. Its design directly affects production stability and safety.',
          'We design reliable, segmented network architectures around industrial communication characteristics and cybersecurity needs.'
        ],
        highlights: [
          'Clear layered architecture',
          'Stable device communication',
          'Reduced system risk'
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Service value of industrial network design',
        items: [
          {
            title: 'Stable production systems',
            description:
              'Keep production systems stable and reduce interruption risk.'
          },
          {
            title: 'Lower communication risk',
            description: 'Reduce equipment abnormality and communication risk.'
          },
          {
            title: 'Stronger industrial security',
            description:
              'Strengthen cybersecurity protection for industrial environments.'
          },
          {
            title: 'Manageable and scalable',
            description:
              'Provide a network architecture that can be managed and expanded.'
          }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Core scope',
        items: [
          {
            title: 'Layered architecture design',
            description:
              'Design industrial network topology around Core / Control / Field layers.'
          },
          {
            title: 'IT / OT segmentation and isolation',
            description: 'Define zones, boundaries, and communication paths.'
          },
          {
            title: 'High availability and redundancy',
            description:
              'Reduce single points of failure and communication interruption.'
          },
          {
            title: 'Latency and packet optimization',
            description:
              'Improve equipment communication efficiency and stability.'
          },
          {
            title: 'Industrial cybersecurity integration',
            description:
              'Include cybersecurity protection in the industrial network architecture to reduce system and security risk.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Revisit industrial networks when new lines, messy topology, or unstable communication appear',
        paragraphs: [
          'Inventory site equipment and communication needs, define a standard topology, and introduce segmentation and testing in phases to avoid disrupting production.'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: 'Remote Monitoring and Data | Rally Technology',
      description:
        'Rally Technology helps establish remote monitoring, infrastructure monitoring, and data continuity workflows for distributed sites and critical records.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Remote monitoring and data backup need to answer three questions at once: can the team see the site, can data return reliably, and can records still be retrieved after an incident?',
      'Rally plans visibility, data continuity, and recovery readiness together for distributed sites, oil and gas environments, and critical infrastructure.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: 'Multi-screen remote monitoring workstation',
        layout: 'image-right',
        title: 'Plan remote visibility together with data continuity',
        paragraphs: [
          'Remote visibility matters most when the team needs more than a live screen. They also need status, records, and recovery context.',
          'We organize data return, monitoring views, access boundaries, and backup processes so teams can understand conditions faster when incidents occur.'
        ],
        highlights: [
          'Cross-site visibility',
          'Data continuity',
          'Recovery readiness'
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: 'Remote sites need three capabilities together',
        items: [
          {
            title: 'Visible',
            description:
              'Track equipment status, system information, and infrastructure monitoring across sites.'
          },
          {
            title: 'Retained',
            description:
              'Keep critical records available and reduce interruption or data-loss risk.'
          },
          {
            title: 'Recoverable',
            description:
              'Access status, records, and recovery references after abnormal events.'
          }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: false,
        columns: 2,
        title: 'Where remote monitoring and data backup fit',
        items: [
          {
            title: 'Cross-site monitoring',
            description:
              'Multiple sites need one consistent way to understand status and abnormal events.'
          },
          {
            title: 'Data continuity',
            description:
              'Critical records need to continue after an interruption so they remain traceable.'
          },
          {
            title: 'Remote or oil and gas sites',
            description:
              'Site access is costly, so teams need stronger remote diagnosis and support.'
          },
          {
            title: 'Business continuity planning',
            description:
              'Monitoring, records, and recovery preparation need to be designed together.'
          }
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Rally Technology',
      description:
        'Rally Technology integrates alarm monitoring, real-time notification, trend analysis, and operations workflows for sustainable IT / OT alarm management.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Build alarm routing and escalation workflows so teams can respond quickly to the events that truly need attention.',
      'The focus is alarm priority and escalation logic, helping operators spend less time filtering noise and more time judging and resolving key issues.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'alarm-monitoring',
        imageAlt: 'Monitoring screens showing alarms and status information',
        layout: 'image-left',
        title: 'Connect alarms, events, and operations response',
        paragraphs: [
          'In integrated IT / OT environments, fragmented monitoring and alarm logic make it harder to detect issues in time.',
          'Rally integrates cross-system monitoring and alarms into a visual operations platform with analysis capability.'
        ],
        highlights: [
          'Clear priorities',
          'Fast event handling',
          'Reduced alarm noise'
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: 'Alarm systems should help teams decide faster',
        items: [
          {
            title: 'Real-time status',
            description:
              'Understand system and equipment conditions as they change.'
          },
          {
            title: 'Shorter response time',
            description: 'Reduce the time needed to locate and resolve faults.'
          },
          {
            title: 'Higher maintenance efficiency',
            description: 'Improve maintenance efficiency and service quality.'
          },
          {
            title: 'Data-driven operations',
            description: 'Build a stronger data basis for operations decisions.'
          }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: 'Core scope',
        items: [
          {
            title: 'IT / OT integrated monitoring',
            description:
              'Bring equipment, system status, and performance signals into one view.'
          },
          {
            title: 'Real-time alarms and notifications',
            description:
              'Define alarm priority, notification, and escalation mechanisms.'
          },
          {
            title: 'Historical data and trend analysis',
            description:
              'Connect historical data and trend analysis to support status review and judgment.'
          },
          {
            title: 'Performance monitoring and abnormal detection',
            description:
              'Track performance changes and abnormal signals so teams can identify issues earlier.'
          },
          {
            title: 'Operations workflow and event management',
            description:
              'Integrate event management and permission control so maintenance response remains traceable.'
          },
          {
            title: 'Vulnerability findings and risk tracking',
            description:
              'Bring vulnerability findings into the maintenance context and track risk handling over time.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'When to Bring It In',
        title:
          'Reorganize alarm workflows when issues are found late or response depends on manual coordination',
        paragraphs: [
          'Multiple data sources, a unified monitoring platform, alarm logic, operations workflows, and permission control should be connected into a complete operations-management model.'
        ]
      }
    ]
  },
  'web-development': {
    seo: {
      title: 'Web Development | Rally Technology',
      description:
        'Rally Technology provides custom web development for corporate websites, service pages, member portals, and admin systems based on brand, workflows, and real operating needs.'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Rally Technology provides custom web development services for corporate websites, product and service pages, member portals, and admin systems. We define the site structure, user flow, and technical implementation around each client’s brand, business process, and real operating needs, so the website becomes more than a visual presence.',
      'We work to high industry standards across frontend, backend, integrations, testing, and deployment, with close attention to performance, security, maintainability, and scalability. Whether the project is a new build, a redesign, or a functional upgrade, the result is delivered on a stable and extensible foundation.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'web-development',
        imageAlt:
          'Desktop and laptop screens showing website interfaces and development work',
        layout: 'image-right',
        title:
          'Web development should turn a company website into a digital platform the business can truly operate on',
        paragraphs: [
          'Strong web development is not only about polished pages. It is about making brand presentation, content management, user interaction, and connected data work together reliably over time.',
          'We begin by clarifying information architecture, user scenarios, and system boundaries, then implement the frontend, backend, admin workflow, and integrations in a coordinated way.'
        ],
        highlights: [
          'Tailored to business needs',
          'Integrated across frontend and backend',
          'Built for stable launch and future growth'
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: 'Key priorities',
        items: [
          {
            title: 'Business-fit architecture',
            description:
              'We shape the website structure around real business goals, services, and workflows instead of forcing the project into a generic template.'
          },
          {
            title: 'Integrated implementation',
            description:
              'We build pages, functions, admin tools, and data flow together so the platform works as one system.'
          },
          {
            title: 'Standards-based delivery',
            description:
              'We use leading frameworks, version control, testing, and deployment practices to improve quality, security, and long-term maintainability.'
          },
          {
            title: 'Scalable foundation',
            description:
              'We leave room for future pages, languages, modules, and integrations so expansion does not require starting over.'
          }
        ]
      },
      {
        type: 'process-steps',
        eyebrow: 'Scope and Method',
        title: 'Plan from discovery through launch and future growth',
        items: [
          {
            stepLabel: '01',
            title: 'Discovery and architecture planning',
            description:
              'We define audience, content structure, feature scope, and data boundaries before design and development begin.'
          },
          {
            stepLabel: '02',
            title: 'Interface and responsive experience',
            description:
              'We create clear interfaces that remain consistent and usable across desktop and mobile.'
          },
          {
            stepLabel: '03',
            title: 'Frontend and backend development',
            description:
              'We implement customer-facing pages, business logic, content handling, and admin functions as one coordinated build.'
          },
          {
            stepLabel: '04',
            title: 'CMS and workflow support',
            description:
              'We structure the backend so teams can manage updates, content, and daily operations more efficiently after launch.'
          },
          {
            stepLabel: '05',
            title: 'API and system integration',
            description:
              'We connect forms, memberships, CRM, ERP, or other systems where the website needs reliable data exchange.'
          },
          {
            stepLabel: '06',
            title: 'Testing, launch, and growth planning',
            description:
              'We prepare validation, deployment, and future expansion so the platform stays stable as it evolves.'
          }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: 'Applied Focus',
        columns: 2,
        title: 'Typical support scenarios',
        items: [
          {
            title: 'Corporate websites',
            description:
              'Present the company clearly across brand, services, and contact channels.'
          },
          {
            title: 'Product and service pages',
            description:
              'Explain value, differentiation, and solutions in a more structured way.'
          },
          {
            title: 'Member and admin systems',
            description:
              'Support account-based features, operational workflows, and managed content.'
          },
          {
            title: 'Campaign and project pages',
            description:
              'Build focused digital experiences for launches, promotions, or lead-generation goals.'
          },
          {
            title: 'Multilingual websites',
            description:
              'Keep multiple language versions aligned within one maintainable structure.'
          },
          {
            title: 'Business system integration',
            description:
              'Extend the website into an active business touchpoint instead of leaving it as a standalone front end.'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: 'Timing Considerations',
        title: 'When to bring web development planning in early',
        paragraphs: [
          'Bring web development planning in early when launching a new corporate website, redesigning an existing one, improving digital workflows, or preparing to connect the site with memberships, forms, CRM, ERP, or internal systems.',
          'The earlier the structure and data flow are defined, the easier it is to control future expansion, maintenance, and redesign costs.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
