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
      'Operator-facing visualization for monitoring, alarms, and process control.'
  },
  {
    slug: 'ie-services',
    shortLabel: 'I&E Services',
    formalTitle: 'I&E Services',
    englishTitle: 'I&E Services',
    description:
      'Instrumentation and electrical support spanning FAT, SAT, commissioning, and troubleshooting.'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC / DCS Programming and Migration',
    formalTitle: 'PLC & DCS Programming and Migration',
    englishTitle: 'PLC & DCS Programming and Migration',
    description:
      'Control logic development, migration planning, and staged cutover support.'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: 'PI Server',
    englishTitle: 'PI Server',
    description:
      'Plant-data infrastructure for monitoring, reporting, and cross-system visibility.'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: 'Historians',
    englishTitle: 'Historians',
    description:
      'Long-term process-data retention for trend analysis, reporting, and traceability.'
  },
  {
    slug: 'network-design',
    shortLabel: 'Network Design',
    formalTitle: 'Network Design',
    englishTitle: 'Network Design',
    description:
      'Industrial communication planning for resilient, maintainable plant networks.'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: 'Remote Monitoring and Data',
    formalTitle: 'Remote Monitoring and Data',
    englishTitle: 'Remote Monitoring and Data',
    description:
      'Remote visibility and data-continuity support across distributed operations.'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: 'Alarm Monitoring',
    formalTitle: 'Alarm Monitoring',
    englishTitle: 'Alarm Monitoring',
    description:
      'Alarm strategy and notification workflows for safer, more stable operations.'
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
      '3F-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan'
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
      { label: 'About', href: '#about' },
      { label: 'Services', href: '/services' },
      { label: 'One-Touch Experience', href: '#one-touch-experience' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  home: {
    seo: {
      title: 'Rally Technology',
      description:
        'Founded in 2014, Rally Technology delivers industrial automation, controls, instrumentation, plant-data integration, and field execution support.'
    },
    hero: {
      kicker: 'Turnkey automation delivery',
      title: 'Industrial Automation Delivery for Reliable Operations',
      description:
        'Connecting control systems, plant data, and field execution for modern industrial projects.',
      ctaLabel: 'Explore Services',
      imageAlt:
        'Engineering team reviewing industrial systems in a control room'
    },
    about: {
      kicker: 'About',
      title:
        'A Trusted Partner for Controls, Instrumentation, and Industrial Data',
      description:
        'Founded in 2014, Rally Technology helps industrial teams connect instrumentation, control systems, commissioning, and plant data into delivery plans that remain clear from kickoff through handover.',
      mediaLabel: 'Modern technology facility facade image pair',
      primaryImageAlt: 'Modern high-tech commercial building',
      detailImageAlt: 'Modern glass facade detail',
      points: [
        {
          title: 'Expertise',
          description:
            'Controls, instrumentation, commissioning, and site coordination managed as one delivery path.'
        },
        {
          title: 'Technology',
          description:
            'SCADA, PLC / DCS, PI, historians, and industrial networks planned for maintainability.'
        },
        {
          title: 'Collaboration',
          description:
            'Owners, vendors, and site teams aligned around the same project priorities.'
        }
      ]
    },
    services: {
      kicker: 'Our Services',
      title: 'Integrated Support for Industrial Automation Projects',
      ctaLabel: 'Learn More'
    },
    process: {
      kicker: 'Our Process',
      title: 'Delivery Process',
      steps: [
        { number: '01', title: 'Requirements Alignment' },
        { number: '02', title: 'Technical Planning' },
        { number: '03', title: 'Implementation' },
        { number: '04', title: 'Validation and Handover' }
      ]
    },
    oneTouch: {
      title: 'One-Touch Experience',
      ctaLabel: 'Learn More',
      items: [
        'Data Integration',
        'Call-Out System Integration and Commissioning',
        'Vibration Analysis',
        'Local/Cloud Historians Deployment',
        'Utilities and Facilities System Integration'
      ]
    },
    mission: {
      heading: 'Turn Project Complexity into Stable Operations',
      tabs: [
        {
          value: 'mission',
          label: 'Our Mission',
          title: 'Turn Project Complexity into Stable Operations',
          description:
            'Rally Technology helps clients build automation environments that are easier to operate, maintain, and extend while keeping controls, data, and field execution on the same delivery rhythm.',
          ctaLabel: 'Explore Our Mission',
          imageAlt: 'Engineer reviewing industrial equipment at a control panel'
        },
        {
          value: 'join-us',
          label: 'Partner With Us',
          title:
            'Work with Rally Technology to align system integration, field delivery, and long-term operations',
          description:
            'We use cross-functional coordination, clear ownership, and field-aware delivery to keep clients, contractors, and operations teams aligned on the same project priorities.',
          ctaLabel: 'Start a Conversation',
          imageAlt: 'Engineering technicians collaborating beside equipment'
        }
      ]
    }
  },
  servicesCatalog,
  servicesPage: {
    seo: {
      title: 'Services | Rally Technology',
      description:
        'Browse Rally Technology services across SCADA / HMI, PLC / DCS, PI Server, historians, industrial networking, remote monitoring, and alarm workflows.'
    },
    hero: {
      kicker: 'Services Overview',
      title: 'Eight Core Services for Industrial Automation Delivery',
      description:
        'From controls and plant data to field-ready alarm workflows, these services anchor how we deliver industrial automation projects.'
    },
    cardCtaLabel: 'Learn More'
  },
  serviceDetailPages: serviceDetailPagesEn,
  footer: {
    connectorHeading: 'Engineering and Automation Delivery Experts',
    ctaLabel: 'Contact Us',
    brandLine: 'Rally Technology',
    phoneLabel: 'Phone',
    faxLabel: 'Fax',
    emailLabel: 'Email',
    addressLabel: 'Address',
    copyright: '© {year} Rally Technology. All rights reserved.'
  },
  referencePages: referencePagesEn
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
