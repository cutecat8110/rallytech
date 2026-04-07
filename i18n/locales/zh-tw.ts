import { referencePagesZhTw } from './reference-pages.generated'
import type { RallyTechLocaleMessages } from './types'

const messages = {
  company: {
    displayName: '雷力科技 Rally Technology',
    legalName: '雷力科技股份有限公司',
    englishName: 'Rally Technology Co., Ltd.',
    chineseName: '雷力科技股份有限公司',
    foundedYear: '2014',
    phoneDisplay: '+886-3-552-9933',
    phoneHref: 'tel:+88635529933',
    faxDisplay: '+886-3-552-9797',
    faxHref: 'tel:+88635529797',
    email: 'sales@rallytech.com.tw',
    emailHref: 'mailto:sales@rallytech.com.tw',
    address: '302081 新竹縣竹北市惟馨街 95 號 3 樓之 5',
    addressEnglish:
      '3F.-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan'
  },
  nav: {
    homeAriaLabel: '雷力科技首頁',
    logoAlt: '雷力科技',
    contactCta: '聯絡我們',
    mobileOpenLabel: '開啟選單',
    mobileCloseLabel: '關閉選單',
    nanoToggleAvailable: '切換首頁 Nano 候選圖片',
    nanoToggleUnavailable: '目前尚未有可切換的首頁 Nano 候選圖片',
    languageLabel: '切換語言',
    languageOptions: {
      ['zh-tw']: '中文',
      en: '英文',
      source: '原始文案'
    },
    items: [
      { label: '關於我們', href: '#about' },
      { label: '服務項目', href: '#services' },
      { label: '一站式整合', href: '#one-touch-experience' },
      { label: '聯絡我們', href: '#contact' }
    ]
  },
  home: {
    seo: {
      title: '雷力科技 Rally Technology',
      description:
        '雷力科技成立於 2014 年，提供工業自動化交付、儀控整合、控制系統、工廠資料與現場執行支援。'
    },
    hero: {
      kicker: 'Turnkey automation delivery',
      title: '工業自動化交付，為可靠運轉而設計',
      description: '串接控制系統、工廠資料與現場執行，支撐現代工業專案。',
      ctaLabel: '探索服務',
      imageAlt: '工程團隊於監控室檢視工業系統'
    },
    about: {
      kicker: 'About',
      title: '值得信賴的儀控、控制與工業資料整合夥伴',
      description:
        '雷力科技成立於 2014 年，協助工業團隊把儀控、控制系統、試車驗收與工廠資料整合成一條從啟動到交接都清楚可執行的交付路徑。',
      mediaLabel: '現代高科技建築與設施立面雙圖組合',
      primaryImageAlt: '現代高科技商業大樓',
      detailImageAlt: '高科技建築玻璃立面細節',
      points: [
        {
          title: '專業能力',
          description: '控制、儀控、試車驗收與現場協調以同一條交付路徑管理。'
        },
        {
          title: '技術基礎',
          description:
            '以 SCADA、PLC / DCS、PI、Historian 與工業網路作為整合核心。'
        },
        {
          title: '協作方式',
          description: '讓業主、廠商與現場團隊對齊在同一組專案重點上。'
        }
      ]
    },
    services: {
      kicker: 'Our Services',
      title: '支援工業自動化專案的整合型服務',
      ctaLabel: '了解更多',
      items: [
        {
          title: 'SCADA / HMI 圖控',
          description: '建立可監看、可操作、可追溯的監控介面。'
        },
        {
          title: '儀電整合',
          description: '支援 FAT、SAT、試車驗收與現場故障排除。'
        },
        {
          title: 'PLC / DCS 程式與搬遷',
          description: '提供控制邏輯開發、搬遷規劃與分階段切換支援。'
        },
        {
          title: 'PI Server',
          description: '建立即時資料採集、監看與跨系統整合基礎。'
        },
        {
          title: 'Historians',
          description: '支援長期資料保存、趨勢分析與追溯需求。'
        },
        {
          title: '工業網路設計',
          description: '規劃穩定、可維護且具擴充性的工業通訊網路。'
        },
        {
          title: '遠端監控與資料備援',
          description: '強化跨據點監看、資料持續性與備援能力。'
        },
        {
          title: '告警監控',
          description: '建立告警分級、通知邏輯與應變流程。'
        }
      ]
    },
    process: {
      kicker: 'Our Process',
      title: '交付流程',
      steps: [
        { number: '01', title: '需求對齊' },
        { number: '02', title: '技術規劃' },
        { number: '03', title: '分階段實作' },
        { number: '04', title: '驗證與交接' }
      ]
    },
    oneTouch: {
      title: 'The One-Touch Experience.',
      ctaLabel: '了解更多',
      items: [
        '資料整合｜Data Integration',
        '告警通報系統整合與試車｜Call-Out System Integration and Commissioning',
        '振動分析｜Vibration Analysis',
        '本地 / 雲端歷史資料部署｜Local/Cloud Historians Deployment',
        '糞污管理系統整合｜Manure Management System Integration'
      ]
    },
    mission: {
      heading: 'Unlock Your Potential with Rally Technology',
      tabs: [
        {
          value: 'mission',
          label: 'Our Mission',
          title: '把專案複雜度轉成穩定可維運的系統',
          description:
            '雷力科技協助客戶建立更容易操作、維護與延伸的自動化環境，讓控制、資料與現場執行能在同一條節奏上推進。',
          ctaLabel: '了解我們的使命',
          imageAlt: '工程師於控制盤前檢視與調整工業設備'
        },
        {
          value: 'join-us',
          label: 'Join Us!',
          title: '與雷力合作，把系統整合、現場交付與長期運維放進同一個團隊視角',
          description:
            '我們用跨域協作、清楚分工與現場導向的交付方式，讓客戶、承包商與操作端都能在同一個專案重點上對齊。',
          ctaLabel: '展開合作對話',
          imageAlt: '工程技術人員於設備旁協作與交流'
        }
      ]
    }
  },
  footer: {
    connectorHeading: 'Engineering + Design Experts',
    ctaLabel: '聯絡我們',
    brandLine: '雷力科技 Rally Technology',
    phoneLabel: '電話',
    faxLabel: '傳真',
    emailLabel: '電子郵件',
    addressLabel: '地址',
    copyright: '© {year} 雷力科技。版權所有。'
  },
  referencePages: referencePagesZhTw
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
