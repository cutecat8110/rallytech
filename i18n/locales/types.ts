export type SiteLocaleCode = 'source' | 'en' | 'zh-tw'
export type PublicLocaleCode = Exclude<SiteLocaleCode, 'source'>

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
    href: string
  }>
}

export interface TextPair {
  title: string
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
    items: TextPair[]
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
  footer: FooterMessages
  referencePages: ReferencePagesMessages
}
