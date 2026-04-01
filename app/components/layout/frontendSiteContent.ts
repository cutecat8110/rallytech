type NavigationItem = {
  label: string
  to: string
}

type ContactItem = {
  label: string
  value: string
  href?: string
}

export const siteSupportLabel = '可靠工業自動化交付支援'

export const primaryNavItems = [
  { label: '關於我們', to: '/#about' },
  { label: '服務項目', to: '/#services' },
  { label: '一站式整合', to: '/#one-touch-experience' },
  { label: '聯絡我們', to: '/#contact' }
] satisfies NavigationItem[]

export const footerNavItems = [
  { label: '關於我們', to: '/#about' },
  { label: '服務項目', to: '/#services' },
  { label: '交付流程', to: '/#process' },
  { label: '一站式整合', to: '/#one-touch-experience' }
] satisfies NavigationItem[]

export const topbarContactItems = [
  {
    label: '服務專線',
    value: '+886-3-552-9933',
    href: 'tel:+88635529933'
  },
  {
    label: '聯絡信箱',
    value: 'sales@rallytech.com.tw',
    href: 'mailto:sales@rallytech.com.tw'
  }
] satisfies ContactItem[]

export const footerContactItems = [
  {
    label: '聯絡電話',
    value: '+886-3-552-9933',
    href: 'tel:+88635529933'
  },
  {
    label: '電子郵件',
    value: 'sales@rallytech.com.tw',
    href: 'mailto:sales@rallytech.com.tw'
  },
  {
    label: '服務據點',
    value: '302081 新竹縣竹北市惟馨街 95 號 3 樓之 5'
  }
] satisfies ContactItem[]

export const siteSummary =
  '雷力科技專注工業自動化整合、控制系統導入與資料平台建置，讓專案從規劃、現場執行到交接都維持清楚可執行的節奏。'

export const siteFooterTagline =
  'Engineering and automation delivery for stable industrial operations.'
