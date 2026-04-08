export type SiteLocaleCode = 'source' | 'en' | 'zh-tw'
export type PublicLocaleCode = Exclude<SiteLocaleCode, 'source'>
export type NavItemHref = `#${string}` | `/${string}`

export type ServiceSlug =
  | 'scada-hmi-graphics'
  | 'ie-services'
  | 'plc-dcs-programming-and-migration'
  | 'pi-server'
  | 'historians'
  | 'network-design'
  | 'remote-monitoring-and-data'
  | 'alarm-monitoring'

export interface CompanyMessages {
  displayName: string
  legalName: string
  englishName: string
  chineseName: string
  foundedYear: string
  phoneDisplay: string
  phoneHref: string
  faxDisplay: string
  faxHref: string
  email: string
  emailHref: string
  address: string
  addressEnglish: string
}

export interface NavMessages {
  homeAriaLabel: string
  logoAlt: string
  contactCta: string
  mobileOpenLabel: string
  mobileCloseLabel: string
  nanoToggleAvailable: string
  nanoToggleUnavailable: string
  languageLabel: string
  languageOptions: Record<SiteLocaleCode, string>
  items: Array<{
    label: string
    href: NavItemHref
  }>
}

export interface TextPair {
  title: string
  description: string
}

export interface ServiceCatalogItemMessages {
  slug: ServiceSlug
  shortLabel: string
  formalTitle: string
  englishTitle: string
  description: string
}

export interface HomeMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    kicker: string
    title: string
    description: string
    ctaLabel: string
    imageAlt: string
  }
  about: {
    kicker: string
    title: string
    description: string
    mediaLabel: string
    primaryImageAlt: string
    detailImageAlt: string
    points: TextPair[]
  }
  services: {
    kicker: string
    title: string
    ctaLabel: string
  }
  process: {
    kicker: string
    title: string
    steps: Array<{
      number: string
      title: string
    }>
  }
  oneTouch: {
    title: string
    ctaLabel: string
    items: string[]
  }
  mission: {
    heading: string
    tabs: Array<{
      value: 'mission' | 'join-us'
      label: string
      title: string
      description: string
      ctaLabel: string
      imageAlt: string
    }>
  }
}

export interface ServicesPageMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    kicker: string
    title: string
    description: string
  }
  cardCtaLabel: string
}

export interface ServiceDetailSidebarMessages {
  servicesHeading: string
  contactHeading: string
}

export interface ServiceDetailCapabilityItemMessages {
  title: string
  paragraphs: string[]
}

export interface ServiceDetailAccordionItemMessages {
  title: string
  paragraphs?: string[]
}

export interface ServiceDetailBlockBaseMessages {
  type:
    | 'capability-list'
    | 'card-grid'
    | 'quote'
    | 'summary'
    | 'tag-list'
    | 'accordion'
    | 'closing-note'
  title?: string
}

export interface ServiceDetailCapabilityListBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'capability-list'
  items: ServiceDetailCapabilityItemMessages[]
}

export interface ServiceDetailCardGridBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'card-grid'
  items: TextPair[]
}

export interface ServiceDetailQuoteBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'quote'
  quote: string
  attribution: string
}

export interface ServiceDetailSummaryBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'summary'
  paragraphs: string[]
}

export interface ServiceDetailTagListBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'tag-list'
  items: string[]
}

export interface ServiceDetailAccordionBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'accordion'
  items: ServiceDetailAccordionItemMessages[]
  note?: string
}

export interface ServiceDetailClosingNoteBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'closing-note'
  paragraphs: string[]
}

export type ServiceDetailBlockMessages =
  | ServiceDetailCapabilityListBlockMessages
  | ServiceDetailCardGridBlockMessages
  | ServiceDetailQuoteBlockMessages
  | ServiceDetailSummaryBlockMessages
  | ServiceDetailTagListBlockMessages
  | ServiceDetailAccordionBlockMessages
  | ServiceDetailClosingNoteBlockMessages

export interface ServiceDetailPageMessages {
  seo: {
    title: string
    description: string
  }
  heroTitle: string
  introParagraphs: string[]
  sidebar: ServiceDetailSidebarMessages
  blocks: ServiceDetailBlockMessages[]
}

export type ServiceDetailPagesMessages = Record<
  ServiceSlug,
  ServiceDetailPageMessages
>

export interface FooterMessages {
  connectorHeading: string
  ctaLabel: string
  brandLine: string
  phoneLabel: string
  faxLabel: string
  emailLabel: string
  addressLabel: string
  copyright: string
}

export interface ReferencePageBlockMessages {
  heading: string
  role: string | null
  content: readonly string[]
  notes: readonly string[]
}

export interface ReferencePageMessages {
  key: string
  title: string
  docPath: string
  sourceUrl: string
  lastUpdated: string
  blockMap: readonly string[]
  blocks: readonly ReferencePageBlockMessages[]
  raw: string
}

export type ReferencePagesMessages = Record<string, ReferencePageMessages>

export interface RallyTechLocaleMessages {
  company: CompanyMessages
  nav: NavMessages
  home: HomeMessages
  servicesCatalog: ServiceCatalogItemMessages[]
  servicesPage: ServicesPageMessages
  serviceDetailPages: ServiceDetailPagesMessages
  footer: FooterMessages
  referencePages: ReferencePagesMessages
}
