import { referencePagesSource } from './reference-pages.generated'
import { productDetailPagesSource } from './products/source-detail'
import { serviceDetailPagesSource } from './services/source-detail'
import type {
  ProductCatalogItemMessages,
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
    slug: 'it-infrastructure',
    shortLabel: 'IT Infrastructure',
    formalTitle: 'IT Infrastructure Planning and Deployment',
    englishTitle: 'IT Infrastructure Planning and Deployment',
    description:
      'Manual rewrite source service: IT architecture, servers, storage, virtualization, HA/DR, and system performance foundations.'
  },
  {
    slug: 'cybersecurity-network',
    shortLabel: 'Cybersecurity Network',
    formalTitle: 'Cybersecurity Network Architecture and Protection',
    englishTitle: 'Cybersecurity Network Architecture and Protection',
    description:
      'Manual rewrite source service: network segmentation, access control, intrusion protection, Zero Trust, and vulnerability checks.'
  },
  {
    slug: 'network-design',
    shortLabel: 'Network Design',
    formalTitle: 'Network Design',
    englishTitle: 'Network Design',
    description: 'Specialized Historian data solutions for RNG companies.'
  },
  {
    slug: 'offshore-wind-operations',
    shortLabel: 'Offshore Wind Operations',
    formalTitle: 'Offshore Wind Remote Operations and Security Management',
    englishTitle: 'Offshore Wind Remote Operations and Security Management',
    description:
      'Manual rewrite source service: secure remote operations, monitoring, maintenance response, and safety management for offshore wind sites.'
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
  },
  {
    slug: 'web-development',
    shortLabel: 'Web Development',
    formalTitle: 'Web Development',
    englishTitle: 'Web Development',
    description:
      'Kevin manual copy source service for corporate websites, product and service pages, member portals, admin systems, and integration-ready web platforms.'
  }
] satisfies ServiceCatalogItemMessages[]

const productsCatalog = [
  {
    slug: 'wincc-oa',
    shortLabel: 'WinCC OA',
    formalTitle: 'WinCC Open Architecture Development',
    englishTitle: 'WinCC Open Architecture Development',
    categoryLabel: 'DMC source: SCADA / HMI',
    description:
      'Source notes for WinCC OA: open architecture SCADA / HMI, distributed and redundant systems, PLC interfacing, and WinCC OA extensions.',
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
    formalTitle: 'AVEVA Programming',
    englishTitle: 'AVEVA Programming',
    categoryLabel: 'DMC source: SCADA / HMI',
    description:
      'Source notes for AVEVA: System Platform, InTouch HMI, Historian, visualization, data management, and operations intelligence.',
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/aveva-programming/',
    badge: {
      src: '/images/brand/aveva-logo.svg',
      alt: 'AVEVA official logo'
    }
  },
  {
    slug: 'siemens-plc',
    shortLabel: 'Siemens S7 PLC',
    formalTitle: 'Siemens S7 PLC Programming',
    englishTitle: 'Siemens S7 PLC Programming',
    categoryLabel: 'DMC source: PLC Programming',
    description:
      'Source notes for Siemens PLC: S7 / SIMATIC hardware, TIA Portal, WinCC, PLC / HMI programming, commissioning, migration, and PROFIBUS / PROFINET.',
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
    address: 'Chicago, Illinois',
    addressEnglish: 'Chicago, Illinois',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Chicago%2C%20Illinois&output=embed',
    mapDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Chicago%2C%20Illinois'
  },
  nav: {
    homeAriaLabel: 'Pentagon Engineering source homepage',
    logoAlt: 'Pentagon Engineering',
    contactCta: 'Contact Us',
    mobileOpenLabel: 'Open menu',
    mobileCloseLabel: 'Close menu',
    languageLabel: 'Switch language',
    languageOptions: {
      ['zh-tw']: '中文',
      en: '英文'
    },
    items: [
      { label: 'About', href: '#about' },
      { label: 'Products', href: '/products' },
      { label: 'Services', href: '/services' },
      { label: 'Unified Customer Journey', href: '/one-touch-experience' }
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
      kicker: 'Work Process',
      title: 'Our Working Process',
      steps: [
        { number: '01', title: 'Client Requirements' },
        { number: '02', title: 'Planning' },
        { number: '03', title: 'Implementation' },
        { number: '04', title: 'Evaluation' }
      ]
    },
    oneTouch: {
      title: 'Unified Customer Journey',
      description:
        'Integrate plant data, alarm workflows, historians, and utilities systems in one delivery path.',
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
          description:
            "Join us in our journey of innovation. Visit our website for our services, case studies, and our impact on various industries. Contact us to unlock your organization's engineering potential.",
          ctaLabel: 'Read More',
          imageAlt: 'Pentagon Engineering source join-us reference image'
        }
      ]
    }
  },
  aboutPage: {
    seo: {
      title: 'About | Pentagon Engineering Source Reference',
      description:
        'Hidden source-reference About page used to proofread page structure and visible copy.'
    },
    hero: {
      title: 'About Us'
    },
    intro: {
      kicker: 'About Us',
      title: 'Cutting-Edge Automation, Expert Engineering',
      paragraphs: [
        'Pentagon Engineering emerged with a vision to revolutionize industrial automation processes through state-of-the-art engineering and an unwavering commitment to quality. What began as a humble endeavor has evolved into a global powerhouse, boasting a team of passionate engineers, scientists, and industry experts who share a common goal: to empower industries with innovative Instrumentation and Controls engineering solutions.'
      ]
    },
    capabilities: {
      title: 'Elevating Your Experience with Top-Tier Services',
      items: [
        'System Integration',
        'I&E Services',
        'Procurement / EPC',
        'Security Systems',
        'Industrial Panels Building',
        'Wireless Infrastructure',
        'UPS Systems Developing',
        'Detailed Design & Modeling'
      ]
    },
    partners: {
      kicker: 'Partnerships',
      title: 'Platform partners and technology references',
      description:
        'This source layer keeps the partnership cue while the public locales use Rally Technology platform proof and partner-context wording.',
      items: [
        {
          name: 'Siemens',
          tag: 'Automation platform',
          description:
            'User-provided platform reference for the public About partner section.',
          image: {
            src: '/images/brand/siemens-logo.svg',
            alt: 'Siemens platform visual badge'
          }
        },
        {
          name: 'WinCC OA',
          tag: 'Partner proof',
          description:
            'Official partner-proof reference used by the public About partner section.',
          image: {
            src: '/images/brand/wincc-oa-logo.svg',
            alt: 'WinCC OA platform visual badge'
          }
        },
        {
          name: 'AVEVA PI',
          tag: 'PI / Historian',
          description:
            'User-provided AVEVA PI and OSIsoft platform reference for the public About partner section.',
          image: {
            src: '/images/brand/aveva-logo.svg',
            alt: 'AVEVA PI platform visual badge'
          }
        },
        {
          name: 'Palo Alto Networks',
          tag: 'IT / OT security',
          description:
            'User-provided Palo Alto platform reference for the public About partner section.',
          image: {
            src: '/images/brand/palo-alto-networks-logo.svg',
            alt: 'Palo Alto Networks platform visual badge'
          }
        }
      ]
    },
    process: {
      kicker: 'Work Process',
      title: 'Our Working Process',
      steps: [
        { number: '01', title: 'Client Requirements' },
        { number: '02', title: 'Planning' },
        { number: '03', title: 'Implementation' },
        { number: '04', title: 'Evaluation' }
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
      title: 'Core Services for Industrial Automation Delivery'
    },
    intro: {
      kicker: 'Source Guide',
      title: 'Map source services to system, data, and site needs',
      description:
        'Use this hidden source layer to compare how the reference service categories support operator screens, control logic, plant data, networks, remote monitoring, and alarm workflows.'
    },
    cardCtaLabel: 'Read more',
    detailBackLabel: 'All Services',
    detailFocusLabel: 'Source Reference Focus'
  },
  productsCatalog,
  productsPage: {
    seo: {
      title: 'Products | DMC Source Reference Notes',
      description:
        'Hidden source-reference product overview used to proofread DMC source notes for WinCC OA, AVEVA, and Siemens S7 PLC pages.'
    },
    hero: {
      title: 'Products'
    },
    intro: {
      kicker: 'Source Guide',
      title: 'Map product references to platform integration pages',
      description:
        'Use this hidden source layer to compare DMC product-page emphasis against the Rally public copy rewrite boundary.'
    },
    cardCtaLabel: 'Read source notes',
    detailBackLabel: 'All Products'
  },
  oneTouchPage: {
    seo: {
      title: 'Unified Customer Journey | Pentagon Engineering Source Reference',
      description:
        'Hidden source-reference Unified Customer Journey page used to proofread page structure and visible copy.'
    },
    hero: {
      title: 'Unified Customer Journey',
      imageAlt: 'Pentagon Engineering source one-touch page hero background'
    },
    modules: [
      {
        id: 'data-integration',
        title: 'Data Integration',
        description:
          'Data integration in engineering is the process of harmonizing and consolidating data from various sources and systems within an organization. Here at Pentagon, we ensure that this integration creates a unified dataset that improves decision-making, streamlines operations, and enhances overall project management.'
      },
      {
        id: 'alarm-workflow',
        title: 'Call-Out System Integration and Commissioning',
        description:
          'Efficient project execution is our priority. Our engineering and construction company specializes in seamless call-out system integration and commissioning. From concept to completion, we ensure your systems are fully integrated, tested, and ready for operation.'
      },
      {
        id: 'vibration-analysis',
        title: 'Vibration Analysis',
        description:
          'Efficient project execution is our priority. Our engineering and construction company specializes in seamless call-out system integration and commissioning. From concept to completion, we ensure your systems are fully integrated, tested, and ready for operation.'
      },
      {
        id: 'historian-deployment',
        title: 'Local/Cloud Historians Deployment',
        description:
          'We provide superior services with the Local/Cloud Historians Deployment. Elevate your data management with our local/cloud historians execution. Seamlessly store, access, and analyze critical data for better decision-making and project efficiency.'
      },
      {
        id: 'utilities-integration',
        title: 'Manure Management System Integration',
        description:
          'We are experts in Manure Management System Integration. We seamlessly combine technology and sustainability for efficient and eco-friendly solutions. Elevate your farming practices with us.'
      }
    ]
  },
  serviceDetailPages: serviceDetailPagesSource,
  productDetailPages: productDetailPagesSource,
  contactPage: {
    seo: {
      title: 'Contact Us | Pentagon Engineering Source Reference',
      description:
        'Hidden source-reference contact page used to proofread contact-page structure and visible copy.'
    },
    hero: {
      title: 'Contact Us'
    },
    intro: {
      kicker: 'Contact Us',
      title: 'Contact Us',
      paragraphs: [
        'If you are evaluating automation integration, control systems, commissioning support, or plant-data needs, contact Pentagon Engineering.',
        'The source reference frames the contact page as the place to clarify the next step and turn early conversations into a project direction.'
      ]
    },
    form: {
      title: 'Contact Form',
      description:
        'This source-reference page keeps the visible contact form structure and the direct-contact block from the live contact page.',
      submitLabel: 'Send Inquiry',
      unavailableTitle: 'Form submission is not available yet',
      unavailableDescription:
        'This implementation currently delivers routing and UI only. Use the direct contact details on this page if you need to reach the team.',
      fields: {
        name: {
          label: 'Your Name',
          placeholder: 'Enter your name',
          help: 'Provide the main contact person for this inquiry.'
        },
        company: {
          label: 'Company / Organization',
          placeholder: 'Enter your company or organization',
          help: 'This field is added for the B2B implementation contract.'
        },
        email: {
          label: 'Your Email',
          placeholder: 'you@example.com',
          help: 'Use the email address that should receive follow-up.'
        },
        subject: {
          label: 'Subject',
          placeholder: 'Enter the subject',
          help: 'Summarize the topic of your inquiry.'
        },
        phone: {
          label: 'Phone',
          placeholder: 'Enter a phone number',
          help: 'Leave a number if direct coordination is helpful.'
        },
        details: {
          label: 'Message',
          placeholder:
            'Describe your request, current situation, or project scope',
          help: 'Use this field to capture the visible request details from the contact flow.'
        }
      }
    },
    actions: {
      phoneLabel: 'Call Pentagon Engineering',
      faxLabel: 'Send a fax',
      emailLabel: 'Send an email',
      directionsLabel: 'Open directions'
    },
    direct: {
      title: 'Direct Contact Details',
      description:
        'The live reference also provides direct phone, location, and email details alongside the form.',
      cards: {
        phoneTitle: 'Phone Number',
        faxLabel: 'Fax',
        locationTitle: 'Location',
        emailTitle: 'Email Address'
      }
    },
    map: {
      eyebrow: 'Location',
      title: 'Reference Map',
      description:
        'The live reference continues with a full-width map embed after the direct-contact strip.',
      ctaLabel: 'Open in Google Maps',
      iframeTitle: 'Pentagon Engineering source-reference map'
    },
    closing: {
      ctaHeading: 'Engineering + Design Experts',
      ctaLabel: 'Contact Us',
      newsletterHeading: 'Newsletter',
      newsletterDescription:
        'Subscribe to our newsletter to receive updates on the latest news!',
      newsletterPlaceholder: 'Subscribe with us',
      newsletterButtonLabel: 'Subscribe',
      newsletterUnavailableTitle: 'Newsletter signup is not available yet',
      newsletterUnavailableDescription:
        'This implementation keeps the contact-page footer UI, but newsletter signup is not connected in this project.',
      contactsHeading: 'Contacts'
    }
  },
  footer: {
    connectorHeading: 'Engineering + Design Experts',
    ctaLabel: 'Contact Us',
    brandLine: 'Pentagon Engineering',
    newsletterHeading: 'Newsletter',
    newsletterDescription:
      'Subscribe to our newsletter to receive updates on the latest news!',
    newsletterPlaceholder: 'Subscribe with us',
    newsletterButtonLabel: 'Subscribe',
    newsletterUnavailableTitle: 'Newsletter signup is not available yet',
    newsletterUnavailableDescription:
      'This footer keeps the reference-style UI only. Newsletter signup is not connected in this release.',
    contactsHeading: 'Contacts',
    phoneLabel: 'Contact Us',
    faxLabel: 'Fax',
    emailLabel: 'Mail Us',
    addressLabel: 'Address',
    backToTopLabel: 'Back to top',
    copyright: '© 2023 Pentagon Engineering. Powered by Fidelity Creative'
  },
  referencePages: referencePagesSource
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
