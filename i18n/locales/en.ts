import { referencePagesEn } from './reference-pages.generated'
import { productDetailPagesEn } from './products/en-detail'
import { serviceDetailPagesEn } from './services/en-detail'
import type {
  ProductCatalogItemMessages,
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
      'Turn SCADA / HMI data, PI Server, historians, alarms, reports, and admin workflows into maintainable browser-based platforms.'
  }
] satisfies ServiceCatalogItemMessages[]

const productsCatalog = [
  {
    slug: 'wincc-oa',
    shortLabel: 'WinCC OA',
    formalTitle: 'WinCC OA SCADA Platform Integration',
    englishTitle: 'WinCC OA SCADA Platform Integration',
    categoryLabel: 'SCADA Platform',
    description:
      'For projects that need distributed SCADA, redundancy, and operator-screen standards, Rally helps plan WinCC OA architecture, PLC communication, and handover.',
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/wincc-open-architecture-development/',
    badge: {
      src: '/images/brand/wincc-oa-logo.svg',
      alt: 'WinCC OA official logo'
    }
  },
  {
    slug: 'aveva',
    shortLabel: 'AVEVA',
    formalTitle: 'AVEVA System Platform Integration',
    englishTitle: 'AVEVA System Platform Integration',
    categoryLabel: 'SCADA and Operations Platform',
    description:
      'For sites using System Platform, InTouch HMI, and Historian together, Rally helps organize the plant model, data context, and reporting use cases.',
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/aveva-programming/',
    badge: {
      src: '/images/brand/aveva-logo.svg',
      alt: 'AVEVA official logo'
    }
  },
  {
    slug: 'siemens-plc',
    shortLabel: 'Siemens PLC',
    formalTitle: 'Siemens PLC Automation Integration',
    englishTitle: 'Siemens PLC Automation Integration',
    categoryLabel: 'PLC Platform',
    description:
      'For new builds, upgrades, and migrations on Siemens S7 / SIMATIC systems, Rally supports TIA Portal engineering, HMI / SCADA coordination, and commissioning handover.',
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/plc-programming/siemens-s7-plc-programming/',
    badge: {
      src: '/images/brand/siemens-logo.svg',
      alt: 'Siemens official logo'
    }
  }
] satisfies ProductCatalogItemMessages[]

const messages = {
  company: {
    displayName: 'Rally Technology',
    legalName: 'Rally Technology Co., Ltd.',
    englishName: 'Rally Technology Co., Ltd.',
    chineseName: '雷力科技股份有限公司',
    foundedYear: '2014',
    taxId: '24740602',
    phoneDisplay: '+886-3-552-9933',
    phoneHref: 'tel:+88635529933',
    faxDisplay: '+886-3-552-9797',
    faxHref: 'tel:+88635529797',
    email: 'sales@rallytech.com.tw',
    emailHref: 'mailto:sales@rallytech.com.tw',
    linkedinUrl: 'https://tw.linkedin.com/company/rally-technology-co-ltd',
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
    languageLabel: 'Switch language',
    languageOptions: {
      ['zh-tw']: '中文',
      en: '英文'
    },
    items: [
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Unified Customer Journey', href: '/one-touch-experience' }
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
      title: 'Unified Customer Journey',
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
        'Unified Customer Journey'
      ]
    },
    partners: {
      kicker: 'Partners',
      title: 'Partners and technology platforms',
      description:
        'Rally works across control, monitoring, data, and security platforms to clarify interfaces and keep delivery easier to validate, hand over, and maintain.',
      items: [
        {
          name: 'Siemens',
          tag: 'Control and automation platform',
          description:
            'Supports Siemens control systems and SCADA architecture by clarifying interface coordination, site testing, and handover needs.',
          image: {
            src: '/images/brand/siemens-logo.svg',
            alt: 'Siemens platform visual badge'
          }
        },
        {
          name: 'WinCC OA',
          tag: 'SCADA / HMI platform',
          description:
            'Connects monitoring graphics, alarm context, system validation, and maintenance needs so operator-facing work is easier to read and hand over.',
          image: {
            src: '/images/brand/wincc-oa-logo.svg',
            alt: 'WinCC OA platform visual badge'
          }
        },
        {
          name: 'AVEVA PI',
          tag: 'Data platform / Historian',
          description:
            'Supports live data, historical records, reports, and traceability so data platforms connect with site and operations needs.',
          image: {
            src: '/images/brand/aveva-logo.svg',
            alt: 'AVEVA PI platform visual badge'
          }
        },
        {
          name: 'Palo Alto Networks',
          tag: 'IT / OT security',
          description:
            'Supports industrial network segmentation, remote access, and cybersecurity handoff to reduce interface risk across IT / OT environments.',
          image: {
            src: '/images/brand/palo-alto-networks-logo.svg',
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
      title: 'Find the service scope behind your system, data, and site needs',
      description:
        'From operator screens and control logic to plant data, industrial networks, remote monitoring, and alarm workflows, Rally helps project teams clarify the current system state and connect the next planning, delivery, and handover steps.'
    },
    cardCtaLabel: 'View Details',
    detailBackLabel: 'All Services',
    detailFocusLabel: 'Scope at a Glance'
  },
  productsCatalog,
  productsPage: {
    seo: {
      title: 'Products | Rally Technology',
      description:
        'Explore Rally Technology product-platform capabilities for WinCC OA, AVEVA, and Siemens PLC projects across SCADA / HMI, operations data, and control-system delivery.'
    },
    hero: {
      title: 'Product Platforms'
    },
    intro: {
      kicker: 'Product Platforms',
      title:
        'Bring SCADA, operations data, and control platforms into the site',
      description:
        'From WinCC OA and AVEVA to Siemens PLC, Rally helps project teams clarify platform roles, system interfaces, and maintenance handover so product platforms connect with real operator workflows, data use, and delivery needs.'
    },
    cardCtaLabel: 'View Product',
    detailBackLabel: 'All Products'
  },
  oneTouchPage: {
    seo: {
      title: 'Unified Customer Journey | Rally Technology',
      description:
        'See how Rally Technology connects SCADA, alarm workflows, PI Server / historians, vibration monitoring, energy management, and utilities data into one cross-system integration flow.'
    },
    hero: {
      title: 'Unified Customer Journey',
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
  productDetailPages: productDetailPagesEn,
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
      sendingLabel: 'Sending',
      unavailableTitle: 'Form submission is not available yet',
      unavailableDescription:
        'This release includes the contact-page flow and form UI first. Please reach us by phone or email for now.',
      successTitle: 'Inquiry sent',
      successDescription:
        'We have received your contact details and will follow up based on the information provided.',
      errorTitle: 'Submission failed',
      submitErrorDescription:
        'The form cannot be submitted right now. Please try again later, or reach us by phone or email.',
      validationErrorDescription:
        'Check the required fields, email format, and content length before sending again.',
      verificationRequiredDescription:
        'Complete the bot verification before sending the form.',
      verificationFailedDescription:
        'Verification did not pass. Please complete the verification again before sending.',
      verificationUnavailableDescription:
        'The verification service is not configured yet. Please reach us by phone or email for now.',
      serviceErrorDescription:
        'The form passed verification, but the mail service is temporarily unavailable. Please try again later.',
      rateLimitedDescription:
        'Too many submissions were sent in a short time. Please try again later.',
      turnstileLabel: 'Cloudflare Turnstile verification',
      verifyingLabel: 'Loading verification',
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
        phoneTitle: 'Phone',
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
    brandProofLine:
      'Industrial automation, monitoring systems, and data integration services',
    linksHeading: 'Key Links',
    links: [
      {
        label: 'Services',
        to: '/services'
      },
      {
        label: 'Products',
        to: '/products'
      },
      {
        label: 'Unified Customer Journey',
        to: '/one-touch-experience'
      },
      {
        label: 'Contact Us',
        to: '/contact'
      }
    ],
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
    linkedinLabel: 'LinkedIn',
    addressLabel: 'Address',
    backToTopLabel: 'Back to Top',
    copyright:
      'Copyright © 雷力科技股份有限公司 統編:24740602 Rally Technology Co., Ltd. All Rights Reserved'
  },
  referencePages: referencePagesEn
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
