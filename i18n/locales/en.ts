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
      { label: 'One-Touch Experience', href: '#one-touch-experience' }
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
      description:
        'Bring equipment data, alarm workflows, historians, and utilities systems into one delivery path.',
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
      kicker: 'Services',
      title: 'Eight Core Services for Industrial Automation Delivery',
      description:
        'From controls and plant data to alarm workflows, these services support the critical path of industrial automation delivery.',
      asideLabel: 'Core industrial automation services'
    },
    cardCtaLabel: 'Learn More',
    detailBackLabel: 'All Services',
    detailFocusLabel: 'Operational Focus'
  },
  serviceDetailPages: serviceDetailPagesEn,
  contactPage: {
    seo: {
      title: 'Contact Us | Rally Technology',
      description:
        'Talk with Rally Technology about automation integration, control systems, commissioning support, and plant-data delivery.'
    },
    hero: {
      title: 'Contact Us',
      description:
        'Start the conversation by aligning your project scope, site context, and next steps.'
    },
    intro: {
      title: 'Turn early discussions into an executable direction',
      paragraphs: [
        'If you are evaluating automation integration, control systems, commissioning support, or plant-data needs, Rally Technology is ready to talk.',
        'We help teams clarify requirements, confirm delivery boundaries, and shape the next step into a workable project direction.'
      ]
    },
    form: {
      title: 'Inquiry Form',
      description:
        'Use this form to organize your contact details and project needs. If you need an immediate response, use the phone or email listed on this page.',
      submitLabel: 'Send Inquiry',
      unavailableTitle: 'Form submission is not available yet',
      unavailableDescription:
        'This release delivers the contact-page flow and form UI first. Please use the phone number or email on this page to reach our team.',
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
          placeholder: 'Example: PLC / DCS migration assessment',
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
          help: 'Include site context, system scope, and the main issues you are evaluating.'
        }
      }
    },
    direct: {
      title: 'Direct Contact Details',
      description:
        'If you are ready to discuss a requirement now, you can also contact Rally Technology directly through the channels below.'
    }
  },
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
