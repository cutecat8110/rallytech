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
    heroFocusItems: [
      'Monitor in real time',
      'Respond to alarms faster',
      'Keep screens practical over time'
    ],
    introParagraphs: [
      'Our SCADA systems are the backbone of modern industrial processes, allowing you to monitor, control, and optimize your operations in real-time. Pentagon Engineering has a proven track record in designing, developing, and implementing SCADA systems. With years of experience in the field, we possess a deep understanding of the industry’s nuances and challenges.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'scada-hmi-graphics',
        imageAlt: 'Operator-facing SCADA interface reference image',
        layout: 'image-right',
        title: 'SCADA Systems for Real-Time Industrial Operations',
        paragraphs: [
          'Our SCADA systems are designed to monitor, control, and optimize industrial processes in real time, while giving operators a clearer picture of what is happening across the facility.',
          'Pentagon Engineering combines interface design, automation understanding, and practical field experience so the screens remain useful beyond the first launch.'
        ],
        highlights: [
          'Monitor in real time',
          'Respond to alarms faster',
          'Keep screens practical over time'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Real-Time Visibility',
            description:
              'SCADA work should make the operation easier to monitor and interpret in live conditions.'
          },
          {
            title: 'Alarm Response',
            description:
              'Operators should be able to identify abnormal situations with less friction.'
          },
          {
            title: 'Operational Control',
            description:
              'Screens should help teams move from information to action without losing process context.'
          },
          {
            title: 'Long-Term Use',
            description:
              'A useful interface should still support the plant after commissioning is finished.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Source Reference Capabilities',
        items: [
          {
            title: 'Real-time monitoring and control',
            paragraphs: [
              'SCADA systems serve as the backbone of modern industrial processes by helping teams monitor, control, and optimize plant operations.'
            ]
          },
          {
            title: 'Industry understanding',
            paragraphs: [
              'Pentagon Engineering emphasizes years of field experience and understanding of the industry’s nuances and challenges.'
            ]
          },
          {
            title: 'Practical interface value',
            paragraphs: [
              'The point of the interface is not just visual presentation. It is to support real operators in live industrial conditions.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'In source-reference terms, SCADA is positioned as the operational backbone that helps industrial teams monitor, control, and optimize in real time.'
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: 'I&E Services | Pentagon Engineering Source Reference',
      description:
        'Pentagon Engineering specializes in various aspects of industrial automation, including Commissioning and FAT/SAT Support, essential for ensuring the quality and efficiency of automation systems.'
    },
    heroFocusItems: [
      'Commissioning support',
      'Field troubleshooting',
      'Instrumentation and power studies'
    ],
    introParagraphs: [],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'ie-services',
        imageAlt: 'Instrumentation and electrical panel reference image',
        layout: 'image-left',
        title: 'I&E Services connect setup, validation, and field execution',
        paragraphs: [
          'Pentagon Engineering positions I&E Services as a bridge between design intent, FAT/SAT validation, field readiness, and safe operation.',
          'The reference language leans heavily on commissioning, troubleshooting, calibration, and the practical ability to support sites when problems appear.'
        ],
        highlights: [
          'Commissioning support',
          'Field troubleshooting',
          'Instrumentation and power studies'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Commissioning & FAT/SAT',
            description:
              'The source positions setup, testing, and validation as crucial to quality and efficiency.'
          },
          {
            title: 'On-site Response',
            description:
              'The reference emphasizes quick troubleshooting and field support in real industrial environments.'
          },
          {
            title: 'Accuracy & Reliability',
            description:
              'Instrumentation installation and calibration are framed around accurate and reliable operation.'
          },
          {
            title: 'Safety & Resilience',
            description:
              'Power studies and security systems are presented as part of safer, more resilient industrial work.'
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
        columns: 3,
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
    heroFocusItems: [
      'Programming expertise',
      'Migration and optimization',
      'Innovation and security'
    ],
    introParagraphs: [
      'At Pentagon Engineering, we take pride in being at the forefront of industrial automation, specializing in PLC (Programmable Logic Controller) and DCS (Distributed Control System) programming and migration. With our extensive experience and commitment to innovation, we are your trusted partner in optimizing, upgrading, and securing your control systems for the future.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: 'PLC / DCS engineering reference image',
        layout: 'image-right',
        title:
          'Programming and migration are framed as modernization with control',
        paragraphs: [
          'The source reference presents PLC and DCS work as a way to optimize, upgrade, and secure control systems for the future.',
          'It emphasizes expertise, innovation, and the ability to move legacy environments toward more capable automation platforms.'
        ],
        highlights: [
          'Programming expertise',
          'Migration and optimization',
          'Innovation and security'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Programming Expertise',
            description:
              'The reference positions PLC and DCS development as a core industrial-automation capability.'
          },
          {
            title: 'Migration & Optimization',
            description:
              'System upgrades are framed as a path toward higher efficiency and performance.'
          },
          {
            title: 'Innovation',
            description:
              'Modernization is tied to innovation and continuous improvement.'
          },
          {
            title: 'Security',
            description:
              'The source also links migration work to better preparation for future security challenges.'
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
      },
      {
        type: 'process-steps',
        title: 'Source Reference Delivery Path',
        items: [
          {
            stepLabel: 'Step 01',
            title: 'Assess the current control environment',
            description:
              'Review the installed PLC / DCS baseline and identify where upgrades or migration are needed.'
          },
          {
            stepLabel: 'Step 02',
            title: 'Plan migration and optimization',
            description:
              'Frame the upgrade path around performance improvement, system clarity, and future readiness.'
          },
          {
            stepLabel: 'Step 03',
            title: 'Implement programming changes',
            description:
              'Apply programming expertise to deliver updated control behavior and system modernization.'
          },
          {
            stepLabel: 'Step 04',
            title: 'Prepare for the future',
            description:
              'The reference framing ends with a strong emphasis on innovation and security for future challenges.'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'In source-reference terms, PLC / DCS migration is not only an upgrade project. It is a forward-looking modernization step.'
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
    heroFocusItems: [
      'Industrial automation',
      'Data-centric systems',
      'Operational optimization'
    ],
    introParagraphs: [
      'Our team is dedicated to driving industrial automation to new heights, and our expertise extends to the powerful PI Server. With a wealth of experience and an unwavering commitment to excellence, we empower industries worldwide with robust, data-centric automation systems that optimize operations and facilitate intelligent decision-making.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: 'PI Server source-reference media image',
        layout: 'image-left',
        title:
          'PI Server is framed as a data-centric foundation for industrial automation',
        paragraphs: [
          'The source reference presents PI Server as a powerful platform that helps drive industrial automation to new heights.',
          'Its language emphasizes robust, data-centric automation systems that support optimization and intelligent decision-making.'
        ],
        highlights: [
          'Industrial automation',
          'Data-centric systems',
          'Operational optimization'
        ]
      },
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
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Industrial Automation',
            description:
              'PI Server is positioned as part of a broader push to elevate automation capability.'
          },
          {
            title: 'Global Industry Impact',
            description:
              'The source framing uses global-industry language to reinforce scale and confidence.'
          },
          {
            title: 'PI Server Expertise',
            description:
              'PI Server is presented as a clear area of specialist capability.'
          },
          {
            title: 'Data-Centric Systems',
            description:
              'The platform is tied to intelligent decision-making through stronger plant data usage.'
          }
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
            title: '2. Empowering with PI Server:',
            paragraphs: [
              'The source language frames PI Server as an enabling platform for modern industrial data use.'
            ]
          },
          {
            title: '3. Optimizing Operations',
            paragraphs: [
              'Operational optimization is one of the headline outcomes attached to PI Server in the source reference.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'The source reference presents PI Server as a major contributor to robust, data-centric industrial automation systems.',
          'It is positioned as a platform that supports monitoring, decision-making, and operational optimization.'
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
    heroFocusItems: [
      'Operational efficiency',
      'Regulatory compliance',
      'Double-redundant microhistorian'
    ],
    introParagraphs: [
      'Historian data is pivotal in the seamless operation of oil and gas, specifically of RNG companies. It ensures operational efficiency, regulatory compliance, product quality, and informed decision-making. Moreover, it bolsters sustainability initiatives, facilitates resource optimization, and empowers these firms to advance towards a greener and more sustainable energy landscape.',
      'Here at Pentagon Engineering, we developed a double-redundant microhistorian solution that provides you with local redundant storage as well as a cloud-based solution that allows you to have access to your data from any place on Earth without even being connected to the remote site.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'historians',
        imageAlt: 'Historian server-room source-reference image',
        layout: 'image-right',
        title:
          'Historian data is framed as essential for efficiency, compliance, and sustainability',
        paragraphs: [
          'The source reference ties historian data to the oil and gas sector, specifically RNG companies, and positions it as pivotal to seamless operation.',
          'Its claims combine operational efficiency, regulatory compliance, product quality, informed decision-making, and sustainability goals in one narrative.'
        ],
        highlights: [
          'Operational efficiency',
          'Regulatory compliance',
          'Double-redundant microhistorian'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Long-Term Data Value',
            description:
              'Historian data is positioned as essential to decision-making and process understanding over time.'
          },
          {
            title: 'Compliance & Quality',
            description:
              'The source explicitly connects historian use to compliance and product quality.'
          },
          {
            title: 'Double Redundancy',
            description:
              'A double-redundant microhistorian solution is one of the strongest source-specific claims.'
          },
          {
            title: 'Cloud Access Anywhere',
            description:
              'The source highlights cloud access from any place on Earth without local site connection.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Source Reference Capabilities',
        items: [
          {
            title: 'Historian data for operational continuity',
            paragraphs: [
              'The source reference frames historian data as pivotal to smooth operation in oil, gas, and RNG environments.'
            ]
          },
          {
            title: 'Reporting, quality, and compliance support',
            paragraphs: [
              'Historian data is directly tied to reporting, product quality, regulatory compliance, and informed decision-making.'
            ]
          },
          {
            title: 'Double-redundant storage architecture',
            paragraphs: [
              'Pentagon Engineering highlights a double-redundant microhistorian solution with local storage plus cloud-based access.'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'In source-reference language, historians support efficiency, compliance, sustainability, and better decision-making.',
          'The differentiating source claim is a double-redundant microhistorian solution with local redundancy and cloud accessibility.'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: 'Network Design | Pentagon Engineering Source Reference',
      description:
        'Network design in industrial automation involves the meticulous planning, organization, and optimization of communication systems.'
    },
    heroFocusItems: [
      'Communication-system planning',
      'Control and data flow',
      'Silent hero positioning'
    ],
    introParagraphs: [
      'Network design in industrial automation involves the meticulous planning, organization, and optimization of communication systems. These networks are the lifeblood of industrial processes, facilitating data flow, control, and decision-making across the entire ecosystem.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt: 'Industrial network hardware source-reference image',
        layout: 'image-left',
        title:
          'Network design is positioned as the lifeblood of industrial communication',
        paragraphs: [
          'The source reference frames network design as the meticulous planning, organization, and optimization of communication systems in industrial automation.',
          'It emphasizes data flow, control, and decision-making across the ecosystem, then closes with a strong “silent hero” positioning statement.'
        ],
        highlights: [
          'Communication-system planning',
          'Control and data flow',
          'Silent hero positioning'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Precision',
            description:
              'Network design is presented as foundational to precise industrial automation.'
          },
          {
            title: 'Scalability',
            description:
              'The reference explicitly ties network design to scalable industrial systems.'
          },
          {
            title: 'Security',
            description:
              'Security appears as one of the direct benefits attributed to good network design.'
          },
          {
            title: 'Cost-Efficiency',
            description:
              'The source closes by tying network design to cost-efficiency as well as operational strength.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Source Reference Capabilities',
        items: [
          {
            title: 'Planning and organization of communication systems',
            paragraphs: [
              'The source describes network design as a meticulous planning and organization discipline for industrial communication.'
            ]
          },
          {
            title: 'Data flow, control, and decision support',
            paragraphs: [
              'Networks are framed as the structures that enable data flow, control, and decision-making across the industrial ecosystem.'
            ]
          },
          {
            title: 'Scalability, security, and efficiency',
            paragraphs: [
              'The closing source claims tie network design to precision, scalability, security, and cost-efficiency.'
            ]
          }
        ]
      },
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
    heroFocusItems: [
      'Operational reliability',
      'Data integrity',
      'Business continuity'
    ],
    introParagraphs: [
      'Here at Pentagon Engineering, we make sure that remote monitoring and data backup are integral to the smooth and efficient operation of oil and gas companies. These technologies improve operational reliability, reduce downtime, enhance safety and compliance, and provide valuable data for optimization and decision-making. Additionally, our professional team offers peace of mind by ensuring data integrity and business continuity in the face of unexpected challenges.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: 'Remote monitoring source-reference image',
        layout: 'image-right',
        title:
          'Remote monitoring and data backup are framed as business-continuity essentials',
        paragraphs: [
          'The source reference anchors this service in oil and gas companies and treats remote monitoring and data backup as integral to smooth and efficient operation.',
          'Its language leans on reliability, downtime reduction, safety, compliance, and peace of mind through data integrity and continuity.'
        ],
        highlights: [
          'Operational reliability',
          'Data integrity',
          'Business continuity'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Operational Reliability',
            description:
              'The source directly connects remote monitoring to more reliable operation.'
          },
          {
            title: 'Reduced Downtime',
            description:
              'Lower downtime is one of the clear operational outcomes claimed in the reference.'
          },
          {
            title: 'Safety & Compliance',
            description:
              'Safety and compliance appear alongside remote monitoring and backup in the source message.'
          },
          {
            title: 'Peace of Mind',
            description:
              'The source explicitly describes data integrity and business continuity as a peace-of-mind benefit.'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Source Reference Themes',
        columns: 3,
        items: [
          {
            title: 'Remote Monitoring',
            description:
              'Improve visibility into site operation without relying on continuous local presence.'
          },
          {
            title: 'Data Backup',
            description:
              'Preserve operational records and support business continuity during unexpected challenges.'
          },
          {
            title: 'Optimization',
            description:
              'Use collected information to support optimization and decision-making.'
          },
          {
            title: 'Business Continuity',
            description:
              'Keep the company operating more smoothly when disruptions appear.'
          }
        ]
      },
      {
        type: 'summary',
        title: 'Summary',
        paragraphs: [
          'The source reference treats remote monitoring and data backup as an integral part of reliable, safe, and compliant operation.',
          'Data integrity and business continuity are presented as key source-level benefits.'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: 'Alarm Monitoring | Pentagon Engineering Source Reference',
      description:
        'Alarm monitoring is essential for the safe, efficient, and compliant operation of RNG facilities.'
    },
    heroFocusItems: [
      'Safe operation',
      'Preventive maintenance',
      'Operational resilience'
    ],
    introParagraphs: [
      'Alarm monitoring is essential for the safe, efficient, and compliant operation of RNG facilities. It contributes to safety, process optimization, preventive maintenance, environmental compliance, and overall operational resilience. Our team implements a comprehensive alarm monitoring system as a crucial step in ensuring the success and sustainability of RNG production operations.'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt: 'Alarm monitoring source-reference image',
        layout: 'image-left',
        title:
          'Alarm monitoring is framed as essential to safe, efficient, and compliant RNG operations',
        paragraphs: [
          'The source reference specifically links alarm monitoring to RNG facilities and positions it as essential to safe, efficient, and compliant operation.',
          'It combines safety, process optimization, preventive maintenance, environmental compliance, and resilience into one broad service narrative.'
        ],
        highlights: [
          'Safe operation',
          'Preventive maintenance',
          'Operational resilience'
        ]
      },
      {
        type: 'proof-strip',
        title: 'Source Reference Focus',
        items: [
          {
            title: 'Safety',
            description:
              'The source makes safety one of the primary justifications for alarm monitoring.'
          },
          {
            title: 'Process Optimization',
            description:
              'Alarm monitoring is also framed as part of better process optimization.'
          },
          {
            title: 'Preventive Maintenance',
            description:
              'Maintenance readiness is one of the explicit outcomes listed in the source.'
          },
          {
            title: 'Environmental Compliance',
            description:
              'The source ties alarm monitoring to environmental compliance as well as resilience.'
          }
        ]
      },
      {
        type: 'capability-list',
        title: 'Source Reference Capabilities',
        items: [
          {
            title: 'Alarm monitoring for safe operation',
            paragraphs: [
              'The source positions alarm monitoring as a crucial part of safe and efficient facility operation.'
            ]
          },
          {
            title: 'Support for optimization and maintenance',
            paragraphs: [
              'Process optimization and preventive maintenance are both direct themes in the reference copy.'
            ]
          },
          {
            title: 'Compliance and resilience',
            paragraphs: [
              'Environmental compliance, operational resilience, and sustainability are all tied to alarm-monitoring success in the source.'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'In source-reference language, alarm monitoring is described as a crucial step in the success and sustainability of RNG production operations.'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
