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
        'Rally Technology designs SCADA and HMI environments that help operators monitor plant status, respond to alarms, and navigate critical information with less friction.'
    },
    heroTitle: 'SCADA and HMI Graphics',
    heroFocusItems: [
      'Readable hierarchy',
      'Alarm context visibility',
      'Maintainable after handover'
    ],
    introParagraphs: [
      'Rally Technology designs SCADA and HMI environments that help operators monitor plant status, respond to alarms, and navigate critical information with less friction.',
      'We focus on readable screens, practical hierarchy, and long-term maintainability so systems continue to support operations after commissioning.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'scada-hmi-graphics',
        imageAlt:
          'Engineer reviewing industrial monitoring screens on a tablet',
        layout: 'image-right',
        title:
          'Design interface systems that operators can read, interpret, and hand over with confidence',
        paragraphs: [
          'SCADA / HMI work is not only about putting more data on a screen. It is about showing the right process state, alarm context, and operating path in the order people need to see it.',
          'Rally Technology aligns naming, navigation, and status logic so the interface still makes sense after commissioning and handover.'
        ],
        highlights: [
          'Readable hierarchy',
          'Alarm context visibility',
          'Maintainable after handover'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Delivery Focus',
        items: [
          {
            title: 'Readable Hierarchy',
            description:
              'Separate process status, alarms, and operating actions so teams can understand the screen quickly.'
          },
          {
            title: 'Faster Operator Response',
            description:
              'Place common actions and abnormal-condition entry points where operators can reach them without extra search time.'
          },
          {
            title: 'Alarm Visibility',
            description:
              'Show alarms in process context rather than as isolated events with no operational meaning.'
          },
          {
            title: 'Maintainability',
            description:
              'Keep naming and screen rules consistent so future point additions do not break the overall structure.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Core Capabilities',
        items: [
          {
            title: 'Screen hierarchy and navigation planning',
            paragraphs: [
              'We structure home, unit, and equipment views so different roles can find the level of information they need without unnecessary steps.'
            ]
          },
          {
            title: 'Alarm and process-context integration',
            paragraphs: [
              'Alarm information should explain what the condition means to the process and what the operator needs to do next.'
            ]
          },
          {
            title: 'Commissioning-to-handover continuity',
            paragraphs: [
              'The interface is shaped to support commissioning, validation, and handover, not only a one-time demo state.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Good SCADA / HMI work is not about filling the screen. It is about helping the site understand conditions, find issues, and act correctly within seconds.'
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Rally Technology',
      description:
        'Rally Technology provides instrumentation and electrical support that connects design intent, field readiness, and commissioning execution.'
    },
    heroTitle: 'I&E Services',
    heroFocusItems: [
      'Field-readiness driven',
      'Cross-discipline coordination',
      'Startup and handover continuity'
    ],
    introParagraphs: [
      'Rally Technology provides instrumentation and electrical support that connects design intent, field readiness, and commissioning execution.',
      'From FAT/SAT to troubleshooting and on-site support, we help teams move complex systems toward safe and stable operation.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'ie-services',
        imageAlt:
          'Close-up view of industrial instrumentation and control hardware',
        layout: 'image-left',
        title:
          'Carry design intent into the field so instrumentation and electrical work reaches real delivery',
        paragraphs: [
          'The value of I&E work is not isolated around one device. It comes from connecting FAT/SAT, commissioning, troubleshooting, and handover into one practical field sequence.',
          'Rally Technology focuses on safe startup, clear issue isolation, and work that remains supportable after the project team leaves the site.'
        ],
        highlights: [
          'Field-readiness driven',
          'Cross-discipline coordination',
          'Startup and handover continuity'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Proof Language',
        items: [
          {
            title: 'Field Readiness',
            description:
              'Clarify startup and acceptance conditions before field work begins so teams know what “ready” looks like.'
          },
          {
            title: 'FAT / SAT Support',
            description:
              'Tie testing, validation, and punch-item closure into the same delivery path instead of treating them as separate activities.'
          },
          {
            title: 'Safer Startup',
            description:
              'Use troubleshooting, calibration, and field response to reduce downtime and startup risk.'
          },
          {
            title: 'Cross-Discipline Coordination',
            description:
              'Align instrumentation, electrical, equipment, and site stakeholders around one working sequence.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Detailed Capabilities',
        items: [
          {
            title: 'Commissioning & FAT/SAT Support',
            paragraphs: [
              'We support commissioning, FAT, and SAT activities to verify automation systems against project requirements before start-up and handover.',
              'These milestones help teams reduce downstream issues, close punch items faster, and build confidence before operations begin.'
            ]
          },
          {
            title: 'On-site Troubleshooting',
            paragraphs: [
              'Our team provides field troubleshooting support to isolate root causes quickly, stabilize operations, and keep issues from expanding into longer outages.',
              'We prioritize practical diagnosis, clear communication, and follow-through until the site can move ahead safely.'
            ]
          },
          {
            title: 'Instrumentation Installation & Calibration',
            paragraphs: [
              'We support installation and calibration workflows that keep sensors, analyzers, and control instruments operating within the accuracy needed for process control and compliance.'
            ]
          },
          {
            title: 'Power Systems Studies',
            paragraphs: [
              'We deliver the study work needed to understand distribution reliability, protection concerns, and operating risk in industrial power environments.',
              'These studies help teams protect equipment, improve operating confidence, and make better decisions about upgrades and loading conditions.'
            ]
          },
          {
            title: 'Gas Analyzing Systems',
            paragraphs: [
              'We support gas-analyzing system integration where composition, quality, and compliance data need to be measured reliably.'
            ]
          },
          {
            title: 'Power Meter Design & Deployment',
            paragraphs: [
              'We plan and deploy power-metering solutions that help clients monitor consumption, understand power quality, and improve the usability of electrical data.'
            ]
          },
          {
            title: 'Security Systems',
            paragraphs: [
              'We coordinate security-system design and integration work that strengthens site resilience and supports safer industrial operations.'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Service Cards',
        columns: 3,
        items: [
          {
            title: 'FAT/SAT Support',
            description:
              'Set up, test, and verify automation systems before handover.'
          },
          {
            title: 'Power Systems Studies',
            description:
              'Protect distribution reliability and operating confidence.'
          },
          {
            title: 'On-site Troubleshooting',
            description:
              'Respond quickly to field issues and stabilize operations.'
          },
          {
            title: 'Gas Analyzing Systems',
            description:
              'Measure gas composition reliably in industrial processes.'
          },
          {
            title: 'Instrumentation Installation & Calibration',
            description:
              'Maintain accurate behavior across sensing and control points.'
          },
          {
            title: 'Power Meter Design & Deployment',
            description:
              'Monitor consumption, quality, and electrical usage data.'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          '"I&E services connect design intent to field readiness, turning engineering packages into systems that can be commissioned and operated with confidence."',
        attribution: 'Rally Technology'
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'Rally Technology covers commissioning support, FAT/SAT execution, and field troubleshooting as part of a broader industrial-automation delivery path.',
          'The team also supports instrumentation installation, calibration, and power-system studies so control systems and electrical infrastructure can move toward safer and more stable operation.',
          'Additional work spans gas-analyzing systems, metering deployment, and security-system coordination to support monitoring, reliability, and operational resilience.'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: 'PLC & DCS Programming and Migration | Rally Technology',
      description:
        'Rally Technology supports PLC and DCS programming, migration planning, and staged system cutover so legacy control environments can move forward without losing operational clarity.'
    },
    heroTitle: 'PLC & DCS Programming and Migration',
    heroFocusItems: [
      'Clear migration path',
      'Cutover risk control',
      'Maintainable logic structure'
    ],
    introParagraphs: [
      'Rally Technology supports PLC and DCS programming, migration planning, and staged system cutover so legacy control environments can move forward without losing operational clarity.',
      'We focus on migration paths that remain practical for the field, not just technically correct on paper.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: 'Engineer using a laptop to review control-system settings',
        layout: 'image-right',
        title:
          'Clarify migration risk first, then land the logic and cutover sequence with less disruption',
        paragraphs: [
          'PLC / DCS migration work touches existing logic, shutdown windows, equipment constraints, and handover documentation. It cannot be handled from one technical angle alone.',
          'Rally Technology structures logic updates, cutover steps, and validation points into a sequence that the site can actually execute.'
        ],
        highlights: [
          'Clear migration path',
          'Cutover risk control',
          'Maintainable logic structure'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Delivery Focus',
        items: [
          {
            title: 'Migration Path Clarity',
            description:
              'Map system boundaries, dependencies, and shutdown constraints before deciding the migration sequence.'
          },
          {
            title: 'Cutover Risk Control',
            description:
              'Define shutdown windows, rollback conditions, and validation steps early to reduce upgrade risk.'
          },
          {
            title: 'Maintainable Logic',
            description:
              'Build logic that is not only executable, but also readable and supportable after go-live.'
          },
          {
            title: 'Lifecycle Upgradeability',
            description:
              'Make future change and support easier after the migration is complete.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Key Capabilities',
        items: [
          {
            title: 'PLC and DCS Programming',
            paragraphs: [
              'We develop control logic and program structures that support readable operation, maintainable change control, and clearer troubleshooting.'
            ]
          },
          {
            title: 'System Migration and Optimization',
            paragraphs: [
              'We plan migrations and upgrade paths that reduce disruption while improving performance, maintainability, and long-term supportability.'
            ]
          },
          {
            title: 'Commitment to Innovation and Security',
            paragraphs: [
              'We pair modernization work with practical security and lifecycle thinking so upgraded control systems remain sustainable after commissioning.'
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
            title: 'Review the installed logic baseline',
            description:
              'Clarify the existing program, dependencies, point lists, and shutdown constraints before migration begins.'
          },
          {
            stepLabel: 'Step 02',
            title: 'Plan the staged cutover path',
            description:
              'Define test windows, cutover logic, and rollback conditions so field work does not rely on assumptions.'
          },
          {
            stepLabel: 'Step 03',
            title: 'Execute development and validation',
            description:
              'Implement control logic in a form that supports testing, site verification, and handover documentation.'
          },
          {
            stepLabel: 'Step 04',
            title: 'Stabilize handover and future support',
            description:
              'Package versions, documents, and operational knowledge so the upgraded system remains easier to maintain.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'The real challenge in control-system migration is not moving old logic onto a new platform. It is keeping the field understandable, operable, and recoverable before and after cutover.'
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: 'PI Server | Rally Technology',
      description:
        'Rally Technology uses PI Server to build practical plant-data infrastructure for monitoring, reporting, and cross-system integration.'
    },
    heroTitle: 'PI Server',
    heroFocusItems: [
      'Expandable data backbone',
      'Reporting-ready structure',
      'Cross-system integration support'
    ],
    introParagraphs: [
      'Rally Technology uses PI Server to build practical plant-data infrastructure for monitoring, reporting, and cross-system integration.',
      'The goal is not only to collect data, but to make data usable for operations, engineering, and management teams.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: 'Industrial data equipment in a dark server-room environment',
        layout: 'image-left',
        title:
          'Turn live plant data into infrastructure that different teams can actually use',
        paragraphs: [
          'PI Server work is not only about connecting points. It is about giving reporting, dashboards, and cross-system workflows a stable data foundation.',
          'Rally Technology focuses on structure, source consistency, and expandability so the platform keeps serving operations after deployment.'
        ],
        highlights: [
          'Expandable data backbone',
          'Reporting-ready structure',
          'Cross-system integration support'
        ]
      },
      {
        type: 'tag-list',
        title: 'Focus Tags',
        items: [
          'Industrial Automation',
          'Operational Visibility',
          'PI Server Expertise',
          'Data-Centric Operations'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Proof Language',
        items: [
          {
            title: 'Usable Data Backbone',
            description:
              'Collect data in a way that supports dashboards, reports, and engineering review instead of leaving information siloed.'
          },
          {
            title: 'Integration Readiness',
            description:
              'Plan naming, source structure, and integration logic so later expansion does not create new fragmentation.'
          },
          {
            title: 'Reporting Continuity',
            description:
              'Build a foundation that supports recurring reporting and traceability, not only one-time setup.'
          },
          {
            title: 'Operations Visibility',
            description:
              'Give operations, engineering, and management a more consistent view of current and historical conditions.'
          }
        ]
      },
      {
        type: 'accordion',
        title: 'Accordion Highlights',
        items: [
          {
            title: '1. Driving Industrial Automation',
            paragraphs: [
              'Use PI Server to connect live plant data with reporting, dashboards, and operational visibility.'
            ]
          },
          {
            title: '2. Enabling PI Server Integration',
            paragraphs: [
              'Structure source data, naming, and integration logic so the platform can expand without becoming harder to manage.'
            ]
          },
          {
            title: '3. Optimizing Operations',
            paragraphs: [
              'When data is stable and understandable, reporting, trend review, and cross-team decisions move faster.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'The value of PI Server comes from turning scattered field data into a long-lived industrial data platform.',
          'Rally Technology helps clients place monitoring, reporting, and cross-system integration on a more stable and maintainable foundation.'
        ]
      }
    ]
  },
  ['historians']: {
    seo: {
      title: 'Historians | Rally Technology',
      description:
        'Rally Technology structures historian environments so long-term plant data remains available for trend review, reporting, compliance, and cross-team analysis.'
    },
    heroTitle: 'Historians',
    heroFocusItems: [
      'Long-term traceability',
      'Redundant access patterns',
      'Trend and report readiness'
    ],
    introParagraphs: [
      'Rally Technology structures historian environments so long-term plant data remains available for trend review, reporting, compliance, and cross-team analysis.',
      'We can support local redundancy and remote-access patterns that improve resilience without making data retrieval harder for operating teams.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'historians',
        imageAlt:
          'Close-up view of server-rack hardware for historian infrastructure',
        layout: 'image-right',
        title:
          'Make historical process data available when teams actually need it',
        paragraphs: [
          'Historian work matters when long-term process records can still be queried, compared, and used to support decision-making later.',
          'Rally Technology focuses on retention windows, retrieval patterns, redundancy, and remote access so the historian remains practical over time.'
        ],
        highlights: [
          'Long-term traceability',
          'Redundant access patterns',
          'Trend and report readiness'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Operational Proof',
        items: [
          {
            title: 'Long-Term Retention',
            description:
              'Keep process records available for long-range comparison, investigation, and traceability.'
          },
          {
            title: 'Trend & Report Support',
            description:
              'Structure data to support recurring reports, trend review, and cross-team analysis.'
          },
          {
            title: 'Redundancy',
            description:
              'Plan local and remote access paths to reduce single-point failure risk.'
          },
          {
            title: 'Compliance Readiness',
            description:
              'Maintain a stronger foundation for compliance, quality review, and operational accountability.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Capability Scope',
        items: [
          {
            title: 'Historian retention architecture',
            paragraphs: [
              'We help define how data should be retained, organized, and retrieved so historical records remain useful instead of archive noise.'
            ]
          },
          {
            title: 'Trend analysis and reporting support',
            paragraphs: [
              'The historian structure should serve trend comparison, reporting, and cross-functional review rather than only data collection.'
            ]
          },
          {
            title: 'Local redundancy and remote availability',
            paragraphs: [
              'We support local redundancy and remote-access patterns that improve resilience while keeping everyday retrieval practical.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'A historian platform is valuable when records remain usable for reporting, review, audit, and engineering decisions long after they were first collected.',
          'Rally Technology builds historian environments around retention, accessibility, and resilience so long-term data can still support operations.'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: 'Network Design | Rally Technology',
      description:
        'Rally Technology plans industrial communication networks that support control traffic, field devices, and plant data systems in a structure that is readable, resilient, and maintainable.'
    },
    heroTitle: 'Network Design',
    heroFocusItems: [
      'Clear topology',
      'Segmentation and resilience',
      'Easier future expansion'
    ],
    introParagraphs: [
      'Rally Technology plans industrial communication networks that support control traffic, field devices, and plant data systems in a structure that is readable, resilient, and maintainable.',
      'We focus on segmentation, reliability, and future supportability so the network can grow with the facility rather than limit it.'
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
          'Clarify topology and boundaries first so later automation integration has a stable foundation',
        paragraphs: [
          'Industrial networking is not only about connecting devices. It is about separating control traffic, data movement, and support access in a way that remains understandable under pressure.',
          'Rally Technology plans for maintainability, segmentation, and future expansion so the network does not become the hidden bottleneck for later work.'
        ],
        highlights: [
          'Clear topology',
          'Segmentation and resilience',
          'Easier future expansion'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Design Priorities',
        items: [
          {
            title: 'Segmentation Clarity',
            description:
              'Define boundaries between control, data, and external access so interference and risk are easier to manage.'
          },
          {
            title: 'Resilience',
            description:
              'Include reliability and failure-mode thinking during design instead of treating it as a later patch.'
          },
          {
            title: 'Maintainability',
            description:
              'Keep naming, topology, and network intent understandable for long-term support.'
          },
          {
            title: 'Future Expansion',
            description:
              'Preserve room for growth so new systems can be added without rebuilding the whole network.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Capability Scope',
        items: [
          {
            title: 'Communication-architecture planning',
            paragraphs: [
              'We help structure how devices, sites, and data systems should connect so the network is easier to understand and support.'
            ]
          },
          {
            title: 'Segmentation and resilience design',
            paragraphs: [
              'Segmentation, redundancy, and failure scenarios are considered early so the network does not become the fragile part of the automation stack.'
            ]
          },
          {
            title: 'Supportability and expansion readiness',
            paragraphs: [
              'Design choices should make future equipment, data systems, and remote-access needs easier to add later.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'A strong network design gives automation systems the foundation they need for visibility, security, and reliable long-term operation.'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: 'Remote Monitoring and Data | Rally Technology',
      description:
        'Rally Technology helps clients build remote visibility and data-continuity workflows that reduce recovery risk, support business continuity, and keep critical information accessible across sites.'
    },
    heroTitle: 'Remote Monitoring and Data',
    heroFocusItems: [
      'Cross-site visibility',
      'Data continuity',
      'Recovery readiness'
    ],
    introParagraphs: [
      'Rally Technology helps clients build remote visibility and data-continuity workflows that reduce recovery risk, support business continuity, and keep critical information accessible across sites.',
      'These solutions help teams monitor status, protect records, and act faster when unexpected issues occur.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: 'Remote monitoring workstation with multiple screens',
        layout: 'image-right',
        title:
          'Plan remote visibility and data continuity together so monitoring does not stop at a single screen',
        paragraphs: [
          'Remote monitoring without continuity and backup planning often looks acceptable until teams need to recover records or review an event under pressure.',
          'Rally Technology brings together cross-site visibility, record protection, and response workflows so remote operations can be more dependable.'
        ],
        highlights: [
          'Cross-site visibility',
          'Data continuity',
          'Recovery readiness'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Operational Proof',
        items: [
          {
            title: 'Cross-Site Visibility',
            description:
              'Make critical site status easier to review across multiple locations without relying on local presence alone.'
          },
          {
            title: 'Record Continuity',
            description:
              'Plan monitoring together with storage continuity so important records are still available later.'
          },
          {
            title: 'Recovery Readiness',
            description:
              'Keep stronger evidence and state history available when teams need to recover or investigate.'
          },
          {
            title: 'Remote Access Control',
            description:
              'Shape remote-visibility patterns around actual operational needs and risk boundaries.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Common Use Cases',
        columns: 3,
        items: [
          {
            title: 'Cross-site monitoring',
            description:
              'Let operations and engineering teams follow important sites without always being on location.'
          },
          {
            title: 'Data backup',
            description:
              'Reduce the risk of losing important records because one storage path fails.'
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
        title: 'Summary',
        paragraphs: [
          'Remote monitoring and data backup work best when visibility, record protection, and recovery readiness are planned as one system.',
          'Rally Technology helps clients reduce cross-site operating risk while keeping critical information accessible when it matters.'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Rally Technology',
      description:
        'Rally Technology develops alarm-monitoring approaches that improve response speed, operational awareness, and day-to-day decision-making in automated facilities.'
    },
    heroTitle: 'Alarm Monitoring',
    heroFocusItems: [
      'Clear prioritization',
      'Faster operator understanding',
      'Less alarm noise'
    ],
    introParagraphs: [
      'Rally Technology develops alarm-monitoring approaches that improve response speed, operational awareness, and day-to-day decision-making in automated facilities.',
      'We focus on making alarm logic easier to manage so teams can act on the right conditions at the right time.'
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
          'Make alarm signals visible, understandable, and easier to prioritize',
        paragraphs: [
          'When alarms are too noisy or poorly structured, the site does not lack information. It lacks clarity about what needs action first.',
          'Rally Technology helps organize alarm conditions, notification logic, and screen presentation so response becomes faster and more consistent.'
        ],
        highlights: [
          'Clear prioritization',
          'Faster operator understanding',
          'Less alarm noise'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Operational Proof',
        items: [
          {
            title: 'Response Speed',
            description:
              'Make critical conditions easier to recognize and act on without extra interpretation time.'
          },
          {
            title: 'Prioritization Clarity',
            description:
              'Establish alarm severity and ordering so teams are not overwhelmed by low-value noise.'
          },
          {
            title: 'Operational Awareness',
            description:
              'Show how each alarm relates to process and equipment context instead of leaving events isolated.'
          },
          {
            title: 'Reduced Noise',
            description:
              'Improve logic so repetitive or low-action alarms do not compete with real priorities.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Capability Scope',
        items: [
          {
            title: 'Alarm-condition and severity structuring',
            paragraphs: [
              'We help organize alarm logic so teams understand which conditions matter most and how they should respond.'
            ]
          },
          {
            title: 'Notification and response workflow design',
            paragraphs: [
              'Notification timing and ownership should be clear enough that the site does not lose time deciding who needs to act.'
            ]
          },
          {
            title: 'Screen and event-context alignment',
            paragraphs: [
              'Alarm visibility is stronger when the operator can immediately see the related process, equipment, and next action.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Well-structured alarm monitoring does not give the site more information. It gives the site less hesitation and faster correct response.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
