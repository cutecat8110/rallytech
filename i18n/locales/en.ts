import { referencePagesEn } from './reference-pages.generated'
import { serviceDetailPagesEn } from './services/en-detail'
import type {
  RallyTechLocaleMessages,
  ServiceCatalogItemMessages
} from './types'

const servicesCatalog = [
  {
    slug: 'scada-hmi-graphics',
    shortLabel: 'SCADA / HMI Graphics',
    formalTitle: 'SCADA and HMI Graphics',
    englishTitle: 'SCADA and HMI Graphics',
    description:
      'Support SCADA / HMI, WinCC OA, and AVEVA System Platform graphics planning that keeps status, alarms, and operator context readable.'
  },
  {
    slug: 'ie-services',
    shortLabel: 'I&E Services',
    formalTitle: 'I&E Services',
    englishTitle: 'I&E Services',
    description:
      'Verify instruments, loops, and commissioning checks so field signals are ready for startup and troubleshooting.'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC / DCS Programming and Migration',
    formalTitle: 'PLC & DCS Programming and Migration',
    englishTitle: 'PLC & DCS Programming and Migration',
    description:
      'Plan control-logic changes, migration steps, and cutover sequencing for systems that must keep running.'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: 'PI Server',
    englishTitle: 'PI Server',
    description:
      'Build PI Server / PI System data foundations that make live process values available for queries, calculations, and cross-system use.'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: 'Historians',
    englishTitle: 'Historians',
    description:
      'Maintain long-term process records for trend review, report follow-up, and abnormal-condition analysis.'
  },
  // Source: docs/rewrite/文案.md items 1-3, mapped as new public services.
  {
    slug: 'it-infrastructure',
    shortLabel: 'IT Infrastructure',
    formalTitle: 'IT Infrastructure Planning and Deployment',
    englishTitle: 'IT Infrastructure Planning and Deployment',
    description:
      'Plan enterprise IT architecture, servers, storage, and virtualization resources for stable operation and future expansion.'
  },
  {
    slug: 'cybersecurity-network',
    shortLabel: 'Cybersecurity Network',
    formalTitle: 'Cybersecurity Network Architecture and Protection',
    englishTitle: 'Cybersecurity Network Architecture and Protection',
    description:
      'Integrate network segmentation, access control, threat protection, and cybersecurity design to reduce IT / OT exposure risk.'
  },
  {
    slug: 'network-design',
    shortLabel: 'Network Design',
    formalTitle: 'Network Design',
    englishTitle: 'Network Design',
    description:
      'Define control-network topology, communication layers, and expansion boundaries for maintainable connectivity.'
  },
  {
    slug: 'offshore-wind-operations',
    shortLabel: 'Offshore Wind Operations',
    formalTitle: 'Offshore Wind Remote Operations and Security Management',
    englishTitle: 'Offshore Wind Remote Operations and Security Management',
    description:
      'Establish offshore wind SCADA monitoring, remote maintenance, and secure access workflows for offshore wind and remote-site operations.'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: 'Remote Monitoring and Data',
    formalTitle: 'Remote Monitoring and Data',
    englishTitle: 'Remote Monitoring and Data',
    description:
      'Connect distributed assets and sites for remote visibility, data relay, and backup paths across infrastructure and remote operations.'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: 'Alarm Monitoring',
    formalTitle: 'Alarm Monitoring',
    englishTitle: 'Alarm Monitoring',
    description:
      'Shape alarm classification, real-time notifications, and escalation rules so events are easier to track through response.'
  },
  {
    slug: 'web-development',
    shortLabel: 'Web Development',
    formalTitle: 'Web Development',
    englishTitle: 'Web Development',
    description:
      'Plan industrial websites and web applications around brand, operations, and real usage needs.'
  }
] satisfies ServiceCatalogItemMessages[]

const messages = {
  company: {
    displayName: 'Rally Technology',
    legalName: 'Rally Technology Co., Ltd.',
    englishName: 'Rally Technology Co., Ltd.',
    chineseName: '雷力科技股份有限公司',
    foundedYear: '2014',
    phoneDisplay: '+886-3-552-9933',
    phoneHref: 'tel:+88635529933',
    faxDisplay: '+886-3-552-9797',
    faxHref: 'tel:+88635529797',
    email: 'sales@rallytech.com.tw',
    emailHref: 'mailto:sales@rallytech.com.tw',
    address:
      '3F-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan',
    addressEnglish:
      '3F-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan',
    mapEmbedUrl:
      'https://www.google.com/maps?q=3F-5%2C%20No.%2095%2C%20Weixin%20St.%2C%20Zhubei%20City%2C%20Hsinchu%20County%20302081%2C%20Taiwan&output=embed',
    mapDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=3F-5%2C%20No.%2095%2C%20Weixin%20St.%2C%20Zhubei%20City%2C%20Hsinchu%20County%20302081%2C%20Taiwan'
  },
  nav: {
    homeAriaLabel: 'Rally Technology homepage',
    logoAlt: 'Rally Technology',
    contactCta: 'Contact Us',
    mobileOpenLabel: 'Open menu',
    mobileCloseLabel: 'Close menu',
    nanoToggleAvailable: 'Toggle homepage Nano candidate images',
    nanoToggleUnavailable: 'No homepage Nano candidate images are available',
    languageLabel: 'Switch language',
    languageOptions: {
      ['zh-tw']: '中文',
      en: '英文',
      source: '原始文案'
    },
    items: [
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'One-Touch Experience', href: '/one-touch-experience' }
    ]
  },
  home: {
    seo: {
      title: 'Rally Technology',
      description:
        'Rally Technology supports SCADA, PI Server, historians, industrial network design, and offshore wind operations for renewable energy and industrial automation projects.'
    },
    hero: {
      kicker: 'Automation Control and Monitoring',
      title: 'Automation Control and Monitoring for Industrial Operations',
      description:
        'Rally Technology helps project and site teams connect control, monitoring, and commissioning work into one clearer delivery path.',
      ctaLabel: 'View Services',
      imageAlt:
        'Engineering team reviewing industrial systems in a control room'
    },
    about: {
      kicker: 'Why Rally',
      title: 'A Delivery Partner for Control, Monitoring, and Commissioning',
      description:
        'Founded in 2014, Rally Technology supports automation control, monitoring systems, commissioning, and customized system delivery across project and site environments.',
      mediaLabel: 'Rally Technology office logo wall and workspace image pair',
      primaryImageAlt: 'Rally Technology office logo wall',
      detailImageAlt: 'Rally Technology open office workspace',
      points: [
        {
          title: 'Company Role',
          description:
            'Supports control systems, monitoring platforms, commissioning, and custom integration work.'
        },
        {
          title: 'Quality and Partners',
          description:
            'ISO 9001, ISO 45001, and WinCC OA Partner credentials support consistent delivery.'
        },
        {
          title: 'Project Contexts',
          description:
            'Commonly aligned with renewable energy, offshore wind, chemical, pharmaceutical, EPC, and industrial facilities.'
        }
      ]
    },
    services: {
      kicker: 'Services',
      title: 'Core Service Scopes',
      ctaLabel: 'View Details'
    },
    process: {
      kicker: 'Delivery Process',
      title: 'How Work Moves Forward',
      steps: [
        { number: '01', title: 'Scope Review' },
        { number: '02', title: 'Technical Planning' },
        { number: '03', title: 'Implementation Support' },
        { number: '04', title: 'Validation and Handover' }
      ]
    },
    oneTouch: {
      title: 'One-Touch Experience',
      description:
        'Use one integration layer to connect SCADA, alarm workflows, historian data, and utilities information.',
      ctaLabel: 'View Integration Flow',
      items: [
        'SCADA Data',
        'Alarm Workflow',
        'Historian Data',
        'Utilities Data',
        'Cross-System Flow'
      ]
    },
    mission: {
      heading: 'How Rally Works with Project Teams',
      tabs: [
        {
          value: 'mission',
          label: 'Professional and Prompt',
          title: 'Clarify scope early and keep follow-through moving',
          description:
            'We keep decisions, interfaces, and next actions visible so work does not stall between design, meetings, and site execution.',
          ctaLabel: 'Discuss Your Project',
          imageAlt: 'Engineer reviewing industrial equipment at a control panel'
        },
        {
          value: 'join-us',
          label: 'Teamwork and Integrity',
          title:
            'Coordinate owners, vendors, and site teams around clear responsibilities',
          description:
            'We value direct communication, practical coordination, and handoffs people can actually execute.',
          ctaLabel: 'Start an Inquiry',
          imageAlt: 'Engineering technicians collaborating beside equipment'
        }
      ]
    }
  },
  aboutPage: {
    seo: {
      title: 'About Us | Rally Technology',
      description:
        'Learn how Rally Technology supports SCADA, PI Server, historians, industrial network design, and offshore wind operations across renewable energy and industrial projects.'
    },
    hero: {
      title: 'About Us'
    },
    intro: {
      kicker: 'About Us',
      title: 'Automation Integration for Project and Site Delivery',
      paragraphs: [
        'Founded in 2014, Rally Technology focuses on automation control and monitoring systems integration. We support controls, instrumentation, commissioning, plant data, and customized system delivery across renewable energy, industrial, chemical, pharmaceutical, and EPC project environments.',
        'Professionalism, promptness, teamwork, and integrity shape how we work. ISO 9001, ISO 45001, and WinCC OA Partner credentials support delivery that stays clearer to validate, hand over, and maintain.'
      ]
    },
    capabilities: {
      title: 'Core Integration Capabilities',
      items: [
        'System Integration',
        'I&E Services',
        'FAT / SAT',
        'SCADA / HMI',
        'PLC / DCS',
        'PI / Historian',
        'Industrial Networks',
        'One-Touch Integration'
      ]
    },
    partners: {
      kicker: 'Partners',
      title: 'Partner and platform ecosystem',
      description:
        'From Siemens WinCC OA to AVEVA PI and Palo Alto Networks, Rally connects control, data, and security platforms into one delivery context.',
      proofLabel:
        'WinCC OA Partner proof is supported by the official partner page',
      items: [
        {
          name: 'Siemens',
          tag: 'Automation platform',
          description:
            'Aligns with Siemens ecosystems commonly found in controls, SCADA architecture, and site automation projects.',
          image: {
            src: '/images/brand/siemens-platform-badge.svg',
            alt: 'Siemens platform visual badge'
          }
        },
        {
          name: 'WinCC OA',
          tag: 'Official partner proof',
          description:
            'Supports SCADA / HMI platform planning, operator graphics, and delivery work through the WinCC OA Partner foundation.',
          image: {
            src: '/images/brand/wincc-oa-platform-badge.svg',
            alt: 'WinCC OA platform visual badge'
          }
        },
        {
          name: 'AVEVA PI',
          tag: 'PI / Historian',
          description:
            'Covers AVEVA PI / OSIsoft PI System style real-time data, historian, and cross-system data use cases.',
          image: {
            src: '/images/brand/aveva-pi-platform-badge.svg',
            alt: 'AVEVA PI platform visual badge'
          }
        },
        {
          name: 'Palo Alto Networks',
          tag: 'IT / OT security',
          description:
            'Fits industrial network segmentation, remote access, and IT / OT security handoff contexts.',
          image: {
            src: '/images/brand/palo-alto-networks-platform-badge.svg',
            alt: 'Palo Alto Networks platform visual badge'
          }
        }
      ]
    },
    process: {
      kicker: 'Delivery Process',
      title: 'How Work Moves Forward',
      steps: [
        { number: '01', title: 'Scope Review' },
        { number: '02', title: 'Technical Planning' },
        { number: '03', title: 'Implementation Support' },
        { number: '04', title: 'Validation and Handover' }
      ]
    }
  },
  servicesCatalog,
  servicesPage: {
    seo: {
      title: 'Services | Rally Technology',
      description:
        'Browse Rally Technology service scopes for SCADA / HMI, PI Server, historians, WinCC OA, AVEVA System Platform, industrial network design, cybersecurity architecture, offshore wind operations, remote monitoring, and alarm workflows.'
    },
    hero: {
      title: 'Industrial Automation Service Scopes'
    },
    intro: {
      kicker: 'Service Guide',
      title: 'Find the right service by system layer',
      description:
        'Use this overview to locate the layer that needs work: SCADA / HMI, PLC / DCS, PI Server / historians, industrial networks, cybersecurity, offshore wind operations, remote monitoring, alarm notification, or cross-system integration.'
    },
    cardCtaLabel: 'View Details',
    detailBackLabel: 'All Services',
    detailFocusLabel: 'Scope at a Glance',
    contextsSection: {
      kicker: 'Common Project Contexts',
      title: 'Turn search terms back into real project situations',
      description:
        'We use existing service scopes to support renewable energy, offshore wind, energy management, oil and gas, and infrastructure monitoring work instead of forcing unrelated keywords onto one page.',
      items: [
        {
          title: 'Renewable energy and offshore wind SCADA',
          description:
            'Support renewable energy SCADA, wind farm SCADA system, and offshore wind farm monitoring work by aligning SCADA, remote access, alarm response, and maintenance workflow.'
        },
        {
          title: 'Energy management and utilities integration',
          description:
            'Connect EMS, energy management system, and utilities / facilities integration needs so HVAC, chiller, and reporting data feed back into one monitoring flow.'
        },
        {
          title: 'Oil and gas and remote-site monitoring',
          description:
            'Use historians, remote monitoring, alarm workflow, and data-continuity planning to support oil and gas, remote assets, and higher-compliance operating environments.'
        },
        {
          title: 'Ports and transport infrastructure',
          description:
            'Support port energy management, traffic and transport, and infrastructure monitoring situations where teams need clearer cross-site status and maintenance coordination.'
        },
        {
          title: 'Factory and facility monitoring',
          description:
            'Bring central monitoring, HVAC, chiller systems, and plant-data analysis into one automation and monitoring structure instead of leaving each system isolated.'
        },
        {
          title: 'Cross-system reporting and operations visibility',
          description:
            'Use PI Server, historians, and one-touch integration logic to connect monitoring, reporting, trend review, and engineering follow-up in one industrial data platform.'
        }
      ]
    },
    technologySection: {
      kicker: 'Platform and Delivery Focus',
      title:
        'Translate platform names into work that can actually be delivered',
      description:
        'Searches may start with platform names, but rankings improve when those platforms are clearly explained as real scope, operating boundary, and delivery method.',
      items: [
        {
          title: 'SCADA / HMI and SCADA package planning',
          description:
            'Support SCADA system integrator, SCADA package, and real-time industrial monitoring system work with screen hierarchy, alarm context, and maintainable operator flow.'
        },
        {
          title: 'WinCC OA and AVEVA System Platform',
          description:
            'Use existing monitoring-platform capability to support WinCC OA and AVEVA System Platform projects with clearer operator graphics, alarm workflow, and cross-system consistency.'
        },
        {
          title: 'PI Server / PI System / historians',
          description:
            'Bring PI Server, PI System, historians, and trend reporting into one plant-data foundation that supports industrial analytics, traceability, and recurring reporting.'
        },
        {
          title: 'PLC / DCS and commissioning integration',
          description:
            'Keep PLC / DCS programming, migration, FAT / SAT, and commissioning support on one execution path the site can validate and maintain.'
        },
        {
          title: 'Industrial network design and cybersecurity design',
          description:
            'Bring industrial network design, IT / OT segmentation, remote access, and cybersecurity handoff in early so expansion and maintenance risk stay lower later.'
        },
        {
          title: 'Industrial websites and web applications',
          description:
            'From custom industrial website design to industrial web application development, structure content, user flow, and operations support into one maintainable digital platform.'
        }
      ]
    }
  },
  oneTouchPage: {
    seo: {
      title: 'One-Touch Experience | Rally Technology',
      description:
        'See how Rally Technology connects SCADA, alarm workflows, PI Server / historians, vibration monitoring, energy management, and utilities data into one cross-system integration flow.'
    },
    hero: {
      title: 'One-Touch Experience',
      imageAlt: 'Industrial control room and monitoring systems'
    },
    modules: [
      {
        id: 'data-integration',
        title: 'Data Integration',
        description:
          'Connect SCADA, PI Server, historian, equipment, and reporting data so teams can work from one usable operational view.'
      },
      {
        id: 'alarm-workflow',
        title: 'Alarm Workflow and Commissioning',
        description:
          'Align alarm routing, real-time notification logic, and commissioning checks so critical events reach the right team faster.'
      },
      {
        id: 'vibration-analysis',
        title: 'Vibration Analysis',
        description:
          'Support vibration-monitoring workflows that surface abnormal conditions earlier and help maintenance teams act with better context.'
      },
      {
        id: 'historian-deployment',
        title: 'Local / Cloud Historian Deployment',
        description:
          'Deploy historian and PI-style data environments that keep process data available for troubleshooting, reporting, and long-term review.'
      },
      {
        id: 'utilities-integration',
        title: 'Utilities and Facilities Integration',
        description:
          'Connect EMS, utilities, and facilities systems including HVAC and chiller monitoring with monitoring, control, and reporting workflows in one cross-system layer.'
      }
    ]
  },
  serviceDetailPages: serviceDetailPagesEn,
  contactPage: {
    seo: {
      title: 'Contact Us | Rally Technology',
      description:
        'Contact Rally Technology about SCADA, PI Server, industrial network design, offshore wind operations, and cross-system monitoring integration.'
    },
    hero: {
      title: 'Contact Us'
    },
    intro: {
      kicker: 'Contact Us',
      title: 'Start an Inquiry',
      paragraphs: [
        'Use this page when you need to discuss automation integration, control systems, commissioning support, or plant-data delivery.',
        'We review the scope, confirm the working boundary, and help define the next practical step.'
      ]
    },
    form: {
      title: 'Contact Form',
      description:
        'Share your contact details and key project information so we can review the scope more clearly.',
      submitLabel: 'Send Inquiry',
      unavailableTitle: 'Form submission is not available yet',
      unavailableDescription:
        'This release includes the contact-page flow and form UI first. Please reach us by phone or email for now.',
      fields: {
        name: {
          label: 'Name',
          placeholder: 'Enter your name',
          help: 'Provide the main contact person for this inquiry.'
        },
        company: {
          label: 'Company / Organization',
          placeholder: 'Enter your company or organization',
          help: 'For B2B inquiries, include the organization you represent.'
        },
        email: {
          label: 'Email',
          placeholder: 'you@example.com',
          help: 'We will reply to this email address.'
        },
        subject: {
          label: 'Subject',
          placeholder: 'Example: SCADA upgrade or PLC / DCS migration review',
          help: 'Summarize the topic of your inquiry in one line.'
        },
        phone: {
          label: 'Phone',
          placeholder: 'Enter a phone number',
          help: 'Leave a number if direct coordination is helpful.'
        },
        details: {
          label: 'Project Details',
          placeholder:
            'Describe the current situation, scope, timing, or key constraints',
          help: 'Include site context, current system boundaries, timing, and the main issue you are evaluating.'
        }
      }
    },
    actions: {
      phoneLabel: 'Call Us',
      faxLabel: 'Fax Us',
      emailLabel: 'Email Us',
      directionsLabel: 'Get Directions'
    },
    direct: {
      title: 'Direct Contact',
      description:
        'If you are ready to move forward, you can also reach us through the channels below.',
      cards: {
        phoneTitle: 'Phone / Fax',
        faxLabel: 'Fax',
        locationTitle: 'Office',
        emailTitle: 'Email'
      }
    },
    map: {
      eyebrow: 'Visit',
      title: 'Office Location',
      description:
        'Use the map to confirm our office location before a visit or in-person discussion.',
      ctaLabel: 'View on Google Maps',
      iframeTitle: 'Rally Technology office location on Google Maps'
    },
    closing: {
      ctaHeading: 'Industrial Automation Integration Partner',
      ctaLabel: 'Contact Us',
      newsletterHeading: 'Newsletter',
      newsletterDescription: 'Subscribe for updates from Rally Technology.',
      newsletterPlaceholder: 'Your email',
      newsletterButtonLabel: 'Subscribe',
      newsletterUnavailableTitle: 'Newsletter signup is not available yet',
      newsletterUnavailableDescription:
        'Newsletter signup is not available yet. Please contact us by phone or email for now.',
      contactsHeading: 'Contact'
    }
  },
  footer: {
    connectorHeading: 'Industrial Automation Integration Partner',
    ctaLabel: 'Contact Us',
    brandLine: 'Rally Technology',
    newsletterHeading: 'Newsletter',
    newsletterDescription: 'Subscribe for updates from Rally Technology.',
    newsletterPlaceholder: 'Your email',
    newsletterButtonLabel: 'Subscribe',
    newsletterUnavailableTitle: 'Newsletter signup is not available yet',
    newsletterUnavailableDescription:
      'Newsletter signup is not available yet. Please contact us by phone or email for now.',
    contactsHeading: 'Contact',
    phoneLabel: 'Phone',
    faxLabel: 'Fax',
    emailLabel: 'Email',
    addressLabel: 'Address',
    backToTopLabel: 'Back to Top',
    copyright: '© {year} Rally Technology. All rights reserved.'
  },
  referencePages: referencePagesEn
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
