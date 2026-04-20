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
      'Operator-facing graphics for status, alarms, and control actions at the screen level.'
  },
  {
    slug: 'ie-services',
    shortLabel: 'I&E Services',
    formalTitle: 'I&E Services',
    englishTitle: 'I&E Services',
    description:
      'Field and commissioning support for testing, startup, loop checks, and issue isolation.'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC / DCS Programming and Migration',
    formalTitle: 'PLC & DCS Programming and Migration',
    englishTitle: 'PLC & DCS Programming and Migration',
    description:
      'Control logic upgrades, migration sequencing, and cutover support for running systems.'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: 'PI Server',
    englishTitle: 'PI Server',
    description:
      'PI infrastructure for plant data collection, contextualization, and daily use.'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: 'Historians',
    englishTitle: 'Historians',
    description:
      'Long-term process records for trends, reports, traceability, and analysis.'
  },
  {
    slug: 'network-design',
    shortLabel: 'Network Design',
    formalTitle: 'Network Design',
    englishTitle: 'Network Design',
    description:
      'Industrial network architecture that supports stable communications and maintainable expansion.'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: 'Remote Monitoring and Data',
    formalTitle: 'Remote Monitoring and Data',
    englishTitle: 'Remote Monitoring and Data',
    description:
      'Remote visibility and data relay for distributed sites, assets, and backup paths.'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: 'Alarm Monitoring',
    formalTitle: 'Alarm Monitoring',
    englishTitle: 'Alarm Monitoring',
    description:
      'Alarm routing and escalation workflows that connect events to response.'
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
        'Rally Technology supports automation control and monitoring systems for renewable energy, industrial, chemical, pharmaceutical, and EPC projects.'
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
        'Learn how Rally Technology supports automation control and monitoring systems across renewable energy, industrial, chemical, pharmaceutical, and EPC projects.'
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
        'Browse Rally Technology service scopes for control interfaces, field support, control migration, plant-data platforms, industrial networks, remote monitoring, and alarm workflows.'
    },
    hero: {
      title: 'Industrial Automation Service Scopes'
    },
    cardCtaLabel: 'View Details',
    detailBackLabel: 'All Services',
    detailFocusLabel: 'Scope at a Glance'
  },
  oneTouchPage: {
    seo: {
      title: 'One-Touch Experience | Rally Technology',
      description:
        'See how Rally Technology connects SCADA, alarm workflows, vibration monitoring, historians, and utilities data into one cross-system integration flow.'
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
          'Connect plant, equipment, and reporting data so teams can work from one usable operational view.'
      },
      {
        id: 'alarm-workflow',
        title: 'Alarm Workflow and Commissioning',
        description:
          'Align alarm routing, notification logic, and commissioning checks so critical events reach the right team faster.'
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
          'Deploy historian environments that keep process data available for troubleshooting, reporting, and long-term review.'
      },
      {
        id: 'utilities-integration',
        title: 'Utilities and Facilities Integration',
        description:
          'Connect utilities and facilities systems with monitoring, control, and reporting workflows in one cross-system layer.'
      }
    ]
  },
  serviceDetailPages: serviceDetailPagesEn,
  contactPage: {
    seo: {
      title: 'Contact Us | Rally Technology',
      description:
        'Contact Rally Technology about automation integration, control systems, commissioning support, and plant-data delivery.'
    },
    hero: {
      title: 'Contact Us'
    },
    intro: {
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
