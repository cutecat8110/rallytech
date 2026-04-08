import { referencePagesSource } from './reference-pages.generated'
import { serviceDetailPagesSource } from './services/source-detail'
import type {
  RallyTechLocaleMessages,
  ServiceCatalogItemMessages
} from './types'

const servicesCatalog = [
  {
    slug: 'scada-hmi-graphics',
    shortLabel: 'SCADA and HMI Graphics',
    formalTitle: 'SCADA and HMI Graphics',
    englishTitle: 'SCADA and HMI Graphics',
    description: 'SCADA systems for modern industrial operation monitoring.'
  },
  {
    slug: 'ie-services',
    shortLabel: 'I&E Services',
    formalTitle: 'I&E Services',
    englishTitle: 'I&E Services',
    description:
      'Comprehensive I&E services including FAT/SAT and on-site troubleshooting.'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC & DCS Programming and Migration',
    formalTitle: 'PLC & DCS Programming and Migration',
    englishTitle: 'PLC & DCS Programming and Migration',
    description:
      'Expert PLC & DCS programming and migration for control systems.'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: 'PI Server',
    englishTitle: 'PI Server',
    description: 'Advanced PI Server implementation for robust data automation.'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: 'Historians',
    englishTitle: 'Historians',
    description:
      'Efficient Network Design for optimized industrial communication.'
  },
  {
    slug: 'network-design',
    shortLabel: 'Network Design',
    formalTitle: 'Network Design',
    englishTitle: 'Network Design',
    description: 'Specialized Historian data solutions for RNG companies.'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: 'Remote Monitoring and Data',
    formalTitle: 'Remote Monitoring and Data',
    englishTitle: 'Remote Monitoring and Data',
    description:
      'Remote Monitoring and Data Backup for operational reliability.'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: 'Alarm Monitoring',
    formalTitle: 'Alarm Monitoring',
    englishTitle: 'Alarm Monitoring',
    description:
      'Alarm Monitoring to ensure safety and efficiency in RNG facilities.'
  }
] satisfies ServiceCatalogItemMessages[]

const messages = {
  company: {
    displayName: 'Pentagon Engineering',
    legalName: 'Pentagon Engineering',
    englishName: 'Pentagon Engineering',
    chineseName: '',
    foundedYear: '2010 / 2022 source conflict',
    phoneDisplay: '630.550.6902',
    phoneHref: 'tel:6305506902',
    faxDisplay: '',
    faxHref: '',
    email: 'info@pentagoneng.com',
    emailHref: 'mailto:info@pentagoneng.com',
    address: '',
    addressEnglish: ''
  },
  nav: {
    homeAriaLabel: 'Pentagon Engineering source homepage',
    logoAlt: 'Pentagon Engineering',
    contactCta: 'Contact',
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
      { label: 'OTE', href: '#one-touch-experience' },
      { label: 'Contact', href: '#contact' }
    ]
  },
  home: {
    seo: {
      title: 'Pentagon Engineering Source Reference',
      description:
        'Hidden source-reference locale for proofreading Pentagon Engineering homepage content and known anomalies.'
    },
    hero: {
      kicker: 'Turnkey Solutions, since 2010',
      title: 'Shaping Automation for Tomorrow’s Industries',
      description: '',
      ctaLabel: 'Our Services',
      imageAlt: 'Pentagon Engineering source hero background'
    },
    about: {
      kicker: '',
      title: 'A Leader in Instrumentation and Controls Automation',
      description:
        'Welcome to Pentagon Engineering, a leader in industrial automation. Founded in 2022, we specialize in Instrumentation and Controls Automation, combining cutting-edge technology with efficiency to transform business operations globally.',
      mediaLabel: 'About image source-reference composite',
      primaryImageAlt: 'Pentagon Engineering source about reference image',
      detailImageAlt:
        'Pentagon Engineering source about detail reference image',
      points: [
        {
          title: 'Expertise',
          description:
            'Seasoned professionals delivering comprehensive technical insight.'
        },
        {
          title: 'Technology',
          description:
            'Utilizing the latest in engineering and automation for innovation.'
        },
        {
          title: 'Partnerships',
          description:
            'Collaborating with leaders for advanced engineering solutions.'
        }
      ]
    },
    services: {
      kicker: 'Our Services',
      title: 'Develop Comprehensive Solutions',
      ctaLabel: 'Read more'
    },
    process: {
      kicker: '',
      title: 'Our Process',
      steps: [
        { number: '01', title: 'Client Requirements' },
        { number: '02', title: 'Planning' },
        { number: '03', title: 'Implementation' },
        { number: '04', title: 'Evaluation' }
      ]
    },
    oneTouch: {
      title: 'The One-Touch Experience.',
      ctaLabel: 'Read More',
      items: [
        'Data Integration',
        'Call-Out System Integration and Commissioning',
        'Vibration Analysise',
        'Local/Cloud Historians Deployment',
        'Manure Management System Integration'
      ]
    },
    mission: {
      heading: 'Unlock Your Potential with Pentagon Engineering',
      tabs: [
        {
          value: 'mission',
          label: 'Our Mission',
          title: 'Our Mission',
          description:
            'Pentagon Engineering champions engineering excellence to enhance global business, offering innovative tools and solutions for industry advancement and productivity.',
          ctaLabel: 'Read More',
          imageAlt: 'Pentagon Engineering source mission reference image'
        },
        {
          value: 'join-us',
          label: 'Join Us!',
          title: 'Join Us!',
          description: `Join us in our journey of innovation. Visit our website for our services, case studies, and our impact on various industries. Contact us to unlock your organization's engineering potential.`,
          ctaLabel: 'Read More',
          imageAlt: 'Pentagon Engineering source join-us reference image'
        }
      ]
    }
  },
  servicesCatalog,
  servicesPage: {
    seo: {
      title: 'Services | Pentagon Engineering Source Reference',
      description:
        'Hidden source-reference services overview used to proofread service naming and card copy against the live reference site.'
    },
    hero: {
      kicker: 'Services',
      title: 'Services',
      description:
        'Source-reference layer retained for proofreading against the live Pentagon Engineering services overview.'
    },
    cardCtaLabel: 'Read more'
  },
  serviceDetailPages: serviceDetailPagesSource,
  footer: {
    connectorHeading: 'Engineering + Design Experts',
    ctaLabel: 'Contact Us',
    brandLine: 'Pentagon Engineering',
    phoneLabel: 'Contact Us',
    faxLabel: 'Fax',
    emailLabel: 'Mail Us',
    addressLabel: 'Address',
    copyright: '© 2023 Pentagon Engineering. Powered by Fidelity Creative'
  },
  referencePages: referencePagesSource
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
