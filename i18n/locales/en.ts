import { referencePagesEn } from './reference-pages.generated'
import type { RallyTechLocaleMessages } from './types'

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
      '3F.-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan',
    addressEnglish:
      '3F.-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan'
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
      { label: 'Services', href: '#services' },
      { label: 'OTE', href: '#one-touch-experience' },
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
      ctaLabel: 'Learn More',
      items: [
        {
          title: 'SCADA / HMI Graphics',
          description:
            'Operator-facing visualization for monitoring, alarms, and process control.'
        },
        {
          title: 'I&E Services',
          description:
            'Instrumentation and electrical support spanning FAT, SAT, commissioning, and troubleshooting.'
        },
        {
          title: 'PLC / DCS Programming and Migration',
          description:
            'Control logic development, migration planning, and staged cutover support.'
        },
        {
          title: 'PI Server',
          description:
            'Plant-data infrastructure for monitoring, reporting, and cross-system visibility.'
        },
        {
          title: 'Historians',
          description:
            'Long-term process-data retention for trend analysis, reporting, and traceability.'
        },
        {
          title: 'Network Design',
          description:
            'Industrial communication planning for resilient, maintainable plant networks.'
        },
        {
          title: 'Remote Monitoring and Data',
          description:
            'Remote visibility and data-continuity support across distributed operations.'
        },
        {
          title: 'Alarm Monitoring',
          description:
            'Alarm strategy and notification workflows for safer, more stable operations.'
        }
      ]
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
      title: 'The One-Touch Experience.',
      ctaLabel: 'Learn More',
      items: [
        'Data Integration',
        'Call-Out System Integration and Commissioning',
        'Vibration Analysis',
        'Local/Cloud Historians Deployment',
        'Manure Management System Integration'
      ]
    },
    mission: {
      heading: 'Unlock Your Potential with Rally Technology',
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
          label: 'Join Us!',
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
  footer: {
    connectorHeading: 'Engineering + Design Experts',
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
