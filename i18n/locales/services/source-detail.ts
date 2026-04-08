import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: 'Main Services',
  contactHeading: 'Contact'
} as const

export const serviceDetailPagesSource = {
  'scada-hmi-graphics': {
    seo: {
      title: 'SCADA and HMI Graphics | Pentagon Engineering Source Reference',
      description:
        'Our SCADA systems are the backbone of modern industrial processes, allowing you to monitor, control, and optimize your operations in real-time.'
    },
    heroTitle: 'SCADA and HMI Graphics',
    introParagraphs: [
      'Our SCADA systems are the backbone of modern industrial processes, allowing you to monitor, control, and optimize your operations in real-time. Pentagon Engineering has a proven track record in designing, developing, and implementing SCADA systems. With years of experience in the field, we possess a deep understanding of the industry’s nuances and challenges.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Pentagon Engineering Source Reference',
      description:
        'Pentagon Engineering specializes in various aspects of industrial automation, including Commissioning and FAT/SAT Support, essential for ensuring the quality and efficiency of automation systems.'
    },
    heroTitle: 'I&E Services',
    introParagraphs: [],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'capability-list',
        title: 'Detailed Capabilities',
        items: [
          {
            title: 'Commissioning & FAT/SAT Support',
            paragraphs: [
              'In industrial automation, “Commissioning” and “FAT/SAT Support” are crucial processes related to the setup, testing, and validation of automation systems and equipment.',
              'Pentagon Engineering provides the FAT and SAT support that ensures that the automation equipment and systems used in industrial automation meet quality and performance standards, minimizing the risk of issues during commissioning and regular operations.'
            ]
          },
          {
            title: 'On-site Troubleshooting',
            paragraphs: [
              'On-site troubleshooting is essential for minimizing downtime, optimizing productivity, ensuring safety, and maintaining the efficiency of industrial automation systems. It requires combining technical expertise, problem-solving skills, and a systematic approach to identify and resolve issues in real-world industrial environments quickly.',
              'Here at Pentagon Engineering, we provide our customers with essential on-site support and can be at your place within 24 hours after you let us know about your problem.'
            ]
          },
          {
            title: 'Instrumentation Installation & Calibration',
            paragraphs: [
              'These are two essential aspects of industrial automation that ensure the accurate and reliable operation of sensors, measurement devices, and control instruments within an automation system. Calibration ensures that measurement instruments provide accurate data critical for quality control, process optimization, regulatory compliance, and safety within industrial automation systems.'
            ]
          },
          {
            title: 'Power Systems Studies',
            paragraphs: [
              'Our team provides these studies that are vital for ensuring the reliability, safety, and efficiency of power distribution in industrial environments.',
              'At Pentagon Engineering, we ensure that power systems studies are critical for industrial automation because they help maintain system reliability, prevent equipment damage, improve energy efficiency, and enhance safety.'
            ]
          },
          {
            title: 'Gas Analyzing Systems',
            paragraphs: [
              'Gas Analyzing Systems in industrial automation are specialized instruments and systems designed to monitor, analyze, and measure the composition and characteristics of gases within industrial processes, manufacturing facilities, or environmental monitoring applications.'
            ]
          },
          {
            title: 'Power Meter Design & Deployment',
            paragraphs: [
              'Power meter design and deployment in industrial automation refers to selecting, installing, and utilizing power meters and associated equipment to monitor and measure electrical power consumption, quality, and distribution within an industrial facility. Here at Pentagon, we have already delivered numerous electrical metering projects that help our customers improve their consumption and power data quality.'
            ]
          },
          {
            title: 'Security Systems',
            paragraphs: [
              'Security systems within the realm of industrial automation encompass a comprehensive set of approaches, technologies, and methodologies meticulously crafted to shield industrial processes, facilities, and data from a wide spectrum of security perils and vulnerabilities. At Pentagon, we ensure that these security protocols and systems are imperative for upholding the safety, resilience, and credibility of industrial endeavors.'
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
            description: 'Setup, test, validate automation systems.'
          },
          {
            title: 'Power Systems Studies',
            description: 'Ensuring safe, efficient power distribution.'
          },
          {
            title: 'On-site Troubleshooting',
            description: 'Quick, expert problem-solving in automation.'
          },
          {
            title: 'Gas Analyzing Systems',
            description: 'Monitoring gases in industrial processes.'
          },
          {
            title: 'Instrumentation Installation & Calibration',
            description: 'Accurate operation of automation sensors.'
          },
          {
            title: 'Power Meter Design & Deployment',
            description: 'Monitor, measure industrial power usage.'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          '"I&E Services are the unsung heroes of industry, turning complex systems into symphonies of efficiency and progress, ensuring a safer, smarter future."',
        attribution: 'Dmytro Moshnyi'
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'Pentagon Engineering specializes in various aspects of industrial automation, including Commissioning and FAT/SAT Support, essential for ensuring the quality and efficiency of automation systems.',
          'They offer rapid on-site troubleshooting to address industrial automation issues, minimizing downtime and optimizing productivity. Their services also extend to Instrumentation Installation & Calibration and Power Systems Studies, crucial for maintaining accuracy in control instruments and ensuring reliable power distribution.',
          'Additionally, Pentagon provides expertise in Gas Analyzing Systems, Power Meter Design & Deployment, and comprehensive Security Systems, catering to diverse needs in industrial environments for monitoring, energy management, and security.'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title:
        'PLC & DCS Programming and Migration | Pentagon Engineering Source Reference',
      description:
        'At Pentagon Engineering, we take pride in being at the forefront of industrial automation, specializing in PLC (Programmable Logic Controller) and DCS (Distributed Control System) programming and migration.'
    },
    heroTitle: 'PLC & DCS Programming and Migration',
    introParagraphs: [
      'At Pentagon Engineering, we take pride in being at the forefront of industrial automation, specializing in PLC (Programmable Logic Controller) and DCS (Distributed Control System) programming and migration. With our extensive experience and commitment to innovation, we are your trusted partner in optimizing, upgrading, and securing your control systems for the future.'
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
              'Specializing in Programmable Logic Controller and Distributed Control System programming, Pentagon Engineering offers expert solutions in automation control.'
            ]
          },
          {
            title: 'System Migration and Optimization',
            paragraphs: [
              'Our team excels in migrating and upgrading existing control systems to enhance efficiency and performance.'
            ]
          },
          {
            title: 'Commitment to Innovation and Security',
            paragraphs: [
              'With a strong focus on innovation, we ensure your control systems are not only optimized but also secured for future challenges.'
            ]
          }
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: 'PI Server | Pentagon Engineering Source Reference',
      description:
        'Our team is dedicated to driving industrial automation to new heights, and our expertise extends to the powerful PI Server.'
    },
    heroTitle: 'PI Server',
    introParagraphs: [
      'Our team is dedicated to driving industrial automation to new heights, and our expertise extends to the powerful PI Server. With a wealth of experience and an unwavering commitment to excellence, we empower industries worldwide with robust, data-centric automation systems that optimize operations and facilitate intelligent decision-making.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'tag-list',
        title: 'Focus Tags',
        items: [
          'Industrial Automation',
          'Global Industry Impact',
          'Expertise in PI Server',
          'Data-Centric Systems'
        ]
      },
      {
        type: 'accordion',
        title: 'Accordion Highlights',
        note: 'Only the first accordion item shows visible body copy in the current render.',
        items: [
          {
            title: '1. Driving Industrial Automation',
            paragraphs: [
              'Elevating automation with cutting-edge technology and expertise.'
            ]
          },
          {
            title: '2. Empowering with PI Server:'
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
      title: 'Historians | Pentagon Engineering Source Reference',
      description:
        'Historian data is pivotal in the seamless operation of oil and gas, specifically of RNG companies.'
    },
    heroTitle: 'Historians',
    introParagraphs: [
      'Historian data is pivotal in the seamless operation of oil and gas, specifically of RNG companies. It ensures operational efficiency, regulatory compliance, product quality, and informed decision-making. Moreover, it bolsters sustainability initiatives, facilitates resource optimization, and empowers these firms to advance towards a greener and more sustainable energy landscape.',
      'Here at Pentagon Engineering, we developed a double-redundant microhistorian solution that provides you with local redundant storage as well as a cloud-based solution that allows you to have access to your data from any place on Earth without even being connected to the remote site.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'network-design': {
    seo: {
      title: 'Network Design | Pentagon Engineering Source Reference',
      description:
        'Network design in industrial automation involves the meticulous planning, organization, and optimization of communication systems.'
    },
    heroTitle: 'Network Design',
    introParagraphs: [
      'Network design in industrial automation involves the meticulous planning, organization, and optimization of communication systems. These networks are the lifeblood of industrial processes, facilitating data flow, control, and decision-making across the entire ecosystem.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'closing-note',
        paragraphs: [
          'Network design is the silent hero of industrial automation. It empowers precision, scalability, security, and cost-efficiency, all backed by our specialized expertise. When it comes to industrial automation, efficiency starts with network design.'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title:
        'Remote Monitoring and Data | Pentagon Engineering Source Reference',
      description:
        'Here at Pentagon Engineering, we make sure that remote monitoring and data backup are integral to the smooth and efficient operation of oil and gas companies.'
    },
    heroTitle: 'Remote Monitoring and Data',
    introParagraphs: [
      'Here at Pentagon Engineering, we make sure that remote monitoring and data backup are integral to the smooth and efficient operation of oil and gas companies. These technologies improve operational reliability, reduce downtime, enhance safety and compliance, and provide valuable data for optimization and decision-making. Additionally, our professional team offers peace of mind by ensuring data integrity and business continuity in the face of unexpected challenges.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Pentagon Engineering Source Reference',
      description:
        'Alarm monitoring is essential for the safe, efficient, and compliant operation of RNG facilities.'
    },
    heroTitle: 'Alarm Monitoring',
    introParagraphs: [
      'Alarm monitoring is essential for the safe, efficient, and compliant operation of RNG facilities. It contributes to safety, process optimization, preventive maintenance, environmental compliance, and overall operational resilience. Our team implements a comprehensive alarm monitoring system as a crucial step in ensuring the success and sustainability of RNG production operations.'
    ],
    sidebar: sharedSidebar,
    blocks: []
  }
} satisfies ServiceDetailPagesMessages
