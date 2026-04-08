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
    introParagraphs: [
      'Rally Technology designs SCADA and HMI environments that help operators monitor plant status, respond to alarms, and navigate critical information with less friction.',
      'We focus on readable screens, practical hierarchy, and long-term maintainability so systems continue to support operations after commissioning.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Rally Technology',
      description:
        'Rally Technology provides instrumentation and electrical support that connects design intent, field readiness, and commissioning execution.'
    },
    heroTitle: 'I&E Services',
    introParagraphs: [
      'Rally Technology provides instrumentation and electrical support that connects design intent, field readiness, and commissioning execution.',
      'From FAT/SAT to troubleshooting and on-site support, we help teams move complex systems toward safe and stable operation.'
    ],
    sidebar: sharedSidebar,
    blocks: [
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
    introParagraphs: [
      'Rally Technology supports PLC and DCS programming, migration planning, and staged system cutover so legacy control environments can move forward without losing operational clarity.',
      'We focus on migration paths that remain practical for the field, not just technically correct on paper.'
    ],
    sidebar: sharedSidebar,
    blocks: [
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
    introParagraphs: [
      'Rally Technology uses PI Server to build practical plant-data infrastructure for monitoring, reporting, and cross-system integration.',
      'The goal is not only to collect data, but to make data usable for operations, engineering, and management teams.'
    ],
    sidebar: sharedSidebar,
    blocks: [
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
            title: '2. Enabling PI Server Integration'
          },
          {
            title: '3. Optimizing Operations'
          }
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
    introParagraphs: [
      'Rally Technology structures historian environments so long-term plant data remains available for trend review, reporting, compliance, and cross-team analysis.',
      'We can support local redundancy and remote-access patterns that improve resilience without making data retrieval harder for operating teams.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'network-design': {
    seo: {
      title: 'Network Design | Rally Technology',
      description:
        'Rally Technology plans industrial communication networks that support control traffic, field devices, and plant data systems in a structure that is readable, resilient, and maintainable.'
    },
    heroTitle: 'Network Design',
    introParagraphs: [
      'Rally Technology plans industrial communication networks that support control traffic, field devices, and plant data systems in a structure that is readable, resilient, and maintainable.',
      'We focus on segmentation, reliability, and future supportability so the network can grow with the facility rather than limit it.'
    ],
    sidebar: sharedSidebar,
    blocks: [
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
    introParagraphs: [
      'Rally Technology helps clients build remote visibility and data-continuity workflows that reduce recovery risk, support business continuity, and keep critical information accessible across sites.',
      'These solutions help teams monitor status, protect records, and act faster when unexpected issues occur.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Rally Technology',
      description:
        'Rally Technology develops alarm-monitoring approaches that improve response speed, operational awareness, and day-to-day decision-making in automated facilities.'
    },
    heroTitle: 'Alarm Monitoring',
    introParagraphs: [
      'Rally Technology develops alarm-monitoring approaches that improve response speed, operational awareness, and day-to-day decision-making in automated facilities.',
      'We focus on making alarm logic easier to manage so teams can act on the right conditions at the right time.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  }
} satisfies ServiceDetailPagesMessages
