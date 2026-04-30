export type SiteLocaleCode = 'source' | 'en' | 'zh-tw'
export type PublicLocaleCode = Exclude<SiteLocaleCode, 'source'>
export type NavItemHref = `#${string}` | `/${string}`

export type ServiceSlug =
  | 'scada-hmi-graphics'
  | 'ie-services'
  | 'plc-dcs-programming-and-migration'
  | 'pi-server'
  | 'historians'
  | 'it-infrastructure'
  | 'cybersecurity-network'
  | 'network-design'
  | 'offshore-wind-operations'
  | 'remote-monitoring-and-data'
  | 'alarm-monitoring'
  | 'web-development'

export type ProductSlug = 'wincc-oa' | 'aveva' | 'siemens-plc'

export type OneTouchModuleId =
  | 'data-integration'
  | 'alarm-workflow'
  | 'vibration-analysis'
  | 'historian-deployment'
  | 'utilities-integration'

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
  mapEmbedUrl: string
  mapDirectionsUrl: string
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

export interface ProductCatalogItemMessages {
  slug: ProductSlug
  shortLabel: string
  formalTitle: string
  englishTitle: string
  categoryLabel: string
  description: string
  sourceUrl: string
  badge: {
    src: string
    alt: string
  }
}

export interface AboutPageMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
  }
  intro: {
    kicker: string
    title: string
    paragraphs: string[]
  }
  capabilities: {
    title: string
    items: string[]
  }
  partners: {
    kicker: string
    title: string
    description: string
    proofLabel: string
    items: Array<{
      name: string
      tag: string
      description: string
      image: {
        src: string
        alt: string
      }
    }>
  }
  process: {
    kicker: string
    title: string
    steps: Array<{
      number: string
      title: string
    }>
  }
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
    description: string
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
    title: string
  }
  intro: {
    kicker: string
    title: string
    description: string
  }
  cardCtaLabel: string
  detailBackLabel: string
  detailFocusLabel: string
}

export interface ProductsPageMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
  }
  intro: {
    kicker: string
    title: string
    description: string
  }
  cardCtaLabel: string
  detailBackLabel: string
}

export interface OneTouchModuleMessages {
  id: OneTouchModuleId
  title: string
  secondaryTitle?: string
  description: string
}

export interface OneTouchPageMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
    imageAlt: string
  }
  modules: OneTouchModuleMessages[]
}

export interface ServiceDetailSidebarMessages {
  servicesHeading: string
  contactHeading: string
}

export interface ServiceDetailCapabilityItemMessages {
  title: string
  paragraphs?: string[]
  description?: string
}

export interface ServiceDetailProofItemMessages {
  title: string
  description: string
}

export interface ServiceDetailAccordionItemMessages {
  title: string
  paragraphs?: string[]
}

export interface ServiceDetailProcessStepItemMessages {
  stepLabel?: string
  title: string
  description: string
}

export interface ServiceDetailBlockBaseMessages {
  type:
    | 'media-feature'
    | 'proof-strip'
    | 'capability-list'
    | 'card-grid'
    | 'quote'
    | 'summary'
    | 'tag-list'
    | 'accordion'
    | 'process-steps'
    | 'closing-note'
  title?: string
  eyebrow?: string | false
}

export interface ServiceDetailMediaFeatureBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'media-feature'
  mediaSlot: ServiceSlug
  imageRole?: 'overview-card' | 'detail-hero' | 'detail-feature'
  imageAlt: string
  layout: 'image-left' | 'image-right'
  title: string
  paragraphs: string[]
  highlights: string[]
}

export interface ServiceDetailProofStripBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'proof-strip'
  tone?: 'light' | 'dark'
  items: ServiceDetailProofItemMessages[]
}

export interface ServiceDetailCapabilityListBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'capability-list'
  items: ServiceDetailCapabilityItemMessages[]
}

export interface ServiceDetailCardGridBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'card-grid'
  items: TextPair[]
  columns?: 2 | 3
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

export interface ServiceDetailProcessStepsBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'process-steps'
  items: ServiceDetailProcessStepItemMessages[]
}

export interface ServiceDetailClosingNoteBlockMessages extends ServiceDetailBlockBaseMessages {
  type: 'closing-note'
  paragraphs: string[]
}

export type ServiceDetailBlockMessages =
  | ServiceDetailMediaFeatureBlockMessages
  | ServiceDetailProofStripBlockMessages
  | ServiceDetailCapabilityListBlockMessages
  | ServiceDetailCardGridBlockMessages
  | ServiceDetailQuoteBlockMessages
  | ServiceDetailSummaryBlockMessages
  | ServiceDetailTagListBlockMessages
  | ServiceDetailAccordionBlockMessages
  | ServiceDetailProcessStepsBlockMessages
  | ServiceDetailClosingNoteBlockMessages

export interface ServiceDetailPageMessages {
  seo: {
    title: string
    description: string
  }
  heroFocusItems: string[]
  introParagraphs: string[]
  sidebar: ServiceDetailSidebarMessages
  blocks: ServiceDetailBlockMessages[]
}

export type ServiceDetailPagesMessages = Record<
  ServiceSlug,
  ServiceDetailPageMessages
>

export interface ProductDetailSidebarMessages {
  productsHeading: string
}

export interface ProductDetailProofItemMessages {
  title: string
  description: string
}

export interface ProductDetailCapabilityItemMessages {
  title: string
  paragraphs?: string[]
  description?: string
}

export interface ProductDetailProcessStepItemMessages {
  stepLabel?: string
  title: string
  description: string
}

export interface ProductDetailBlockBaseMessages {
  type:
    | 'platform-overview'
    | 'proof-strip'
    | 'capability-list'
    | 'card-grid'
    | 'tag-list'
    | 'process-steps'
    | 'closing-note'
  title?: string
  eyebrow?: string | false
}

export interface ProductDetailPlatformOverviewBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'platform-overview'
  title: string
  paragraphs: string[]
  highlights: string[]
}

export interface ProductDetailProofStripBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'proof-strip'
  tone?: 'light' | 'dark'
  items: ProductDetailProofItemMessages[]
}

export interface ProductDetailCapabilityListBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'capability-list'
  items: ProductDetailCapabilityItemMessages[]
}

export interface ProductDetailCardGridBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'card-grid'
  items: TextPair[]
  columns?: 2 | 3
}

export interface ProductDetailTagListBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'tag-list'
  items: string[]
}

export interface ProductDetailProcessStepsBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'process-steps'
  items: ProductDetailProcessStepItemMessages[]
}

export interface ProductDetailClosingNoteBlockMessages extends ProductDetailBlockBaseMessages {
  type: 'closing-note'
  paragraphs: string[]
}

export type ProductDetailBlockMessages =
  | ProductDetailPlatformOverviewBlockMessages
  | ProductDetailProofStripBlockMessages
  | ProductDetailCapabilityListBlockMessages
  | ProductDetailCardGridBlockMessages
  | ProductDetailTagListBlockMessages
  | ProductDetailProcessStepsBlockMessages
  | ProductDetailClosingNoteBlockMessages

export interface ProductDetailPageMessages {
  seo: {
    title: string
    description: string
  }
  sourceUrl: string
  heroFocusItems: string[]
  introParagraphs: string[]
  sidebar: ProductDetailSidebarMessages
  blocks: ProductDetailBlockMessages[]
}

export type ProductDetailPagesMessages = Record<
  ProductSlug,
  ProductDetailPageMessages
>

export interface ContactPageFieldMessages {
  label: string
  placeholder: string
  help: string
}

export interface ContactPageDirectCardMessages {
  phoneTitle: string
  faxLabel: string
  locationTitle: string
  emailTitle: string
}

export interface ContactPageActionMessages {
  phoneLabel: string
  faxLabel: string
  emailLabel: string
  directionsLabel: string
}

export interface ContactPageMapMessages {
  eyebrow: string
  title: string
  description: string
  ctaLabel: string
  iframeTitle: string
}

export interface ContactPageClosingMessages {
  ctaHeading: string
  ctaLabel: string
  newsletterHeading: string
  newsletterDescription: string
  newsletterPlaceholder: string
  newsletterButtonLabel: string
  newsletterUnavailableTitle: string
  newsletterUnavailableDescription: string
  contactsHeading: string
}

export interface ContactPageMessages {
  seo: {
    title: string
    description: string
  }
  hero: {
    title: string
  }
  intro: {
    kicker: string
    title: string
    paragraphs: string[]
  }
  form: {
    title: string
    description: string
    submitLabel: string
    unavailableTitle: string
    unavailableDescription: string
    fields: {
      name: ContactPageFieldMessages
      company: ContactPageFieldMessages
      email: ContactPageFieldMessages
      subject: ContactPageFieldMessages
      phone: ContactPageFieldMessages
      details: ContactPageFieldMessages
    }
  }
  actions: ContactPageActionMessages
  direct: {
    title: string
    description: string
    cards: ContactPageDirectCardMessages
  }
  map: ContactPageMapMessages
  closing: ContactPageClosingMessages
}

export interface FooterMessages {
  connectorHeading: string
  ctaLabel: string
  brandLine: string
  newsletterHeading: string
  newsletterDescription: string
  newsletterPlaceholder: string
  newsletterButtonLabel: string
  newsletterUnavailableTitle: string
  newsletterUnavailableDescription: string
  contactsHeading: string
  phoneLabel: string
  faxLabel: string
  emailLabel: string
  addressLabel: string
  backToTopLabel: string
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
  aboutPage: AboutPageMessages
  servicesCatalog: ServiceCatalogItemMessages[]
  servicesPage: ServicesPageMessages
  productsCatalog: ProductCatalogItemMessages[]
  productsPage: ProductsPageMessages
  oneTouchPage: OneTouchPageMessages
  serviceDetailPages: ServiceDetailPagesMessages
  productDetailPages: ProductDetailPagesMessages
  contactPage: ContactPageMessages
  footer: FooterMessages
  referencePages: ReferencePagesMessages
}
