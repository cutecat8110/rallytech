import { referencePagesZhTw } from './reference-pages.generated'
import { serviceDetailPagesZhTw } from './services/zh-tw-detail'
import type {
  RallyTechLocaleMessages,
  ServiceCatalogItemMessages
} from './types'

const servicesCatalog = [
  {
    slug: 'scada-hmi-graphics',
    shortLabel: 'SCADA / HMI 圖控',
    formalTitle: '監控與人機介面圖控服務',
    englishTitle: 'SCADA and HMI Graphics',
    description: '建立可監看、可操作、可追溯的監控介面。'
  },
  {
    slug: 'ie-services',
    shortLabel: '儀電整合',
    formalTitle: '儀電整合服務',
    englishTitle: 'I&E Services',
    description: '支援 FAT、SAT、試車驗收與現場故障排除。'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC / DCS 程式與搬遷',
    formalTitle: '控制程式與系統搬遷服務',
    englishTitle: 'PLC & DCS Programming and Migration',
    description: '提供控制邏輯開發、搬遷規劃與分階段切換支援。'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: '即時資料平台服務',
    englishTitle: 'PI Server',
    description: '建立即時資料採集、監看與跨系統整合基礎。'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: '歷史資料平台服務',
    englishTitle: 'Historians',
    description: '支援長期資料保存、趨勢分析與追溯需求。'
  },
  {
    slug: 'network-design',
    shortLabel: '工業網路設計',
    formalTitle: '工業網路設計服務',
    englishTitle: 'Network Design',
    description: '規劃穩定、可維護且具擴充性的工業通訊網路。'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: '遠端監控與資料備援',
    formalTitle: '遠端監控與資料備援服務',
    englishTitle: 'Remote Monitoring and Data',
    description: '強化跨據點監看、資料持續性與備援能力。'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: '告警監控',
    formalTitle: '告警監控服務',
    englishTitle: 'Alarm Monitoring',
    description: '建立告警分級、通知邏輯與應變流程。'
  }
] satisfies ServiceCatalogItemMessages[]

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
      '3F-5, No. 95, Weixin St., Zhubei City, Hsinchu County 302081, Taiwan',
    mapEmbedUrl:
      'https://www.google.com/maps?q=3F-5%2C%20No.%2095%2C%20Weixin%20St.%2C%20Zhubei%20City%2C%20Hsinchu%20County%20302081%2C%20Taiwan&output=embed',
    mapDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=3F-5%2C%20No.%2095%2C%20Weixin%20St.%2C%20Zhubei%20City%2C%20Hsinchu%20County%20302081%2C%20Taiwan'
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
      { label: '服務項目', href: '/services' },
      { label: '一站式整合', href: '#one-touch-experience' }
    ]
  },
  home: {
    seo: {
      title: '雷力科技 Rally Technology',
      description:
        '雷力科技成立於 2014 年，提供工業自動化交付、儀控整合、控制系統、工廠資料與現場執行支援。'
    },
    hero: {
      kicker: '自動化整合交付',
      title: '工業自動化交付，為可靠運轉而設計',
      description: '串接控制系統、工廠資料與現場執行，支撐現代工業專案。',
      ctaLabel: '探索服務',
      imageAlt: '工程團隊於監控室檢視工業系統'
    },
    about: {
      kicker: '關於雷力',
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
      kicker: '服務項目',
      title: '支援工業自動化專案的整合型服務',
      ctaLabel: '了解更多'
    },
    process: {
      kicker: '專案流程',
      title: '交付流程',
      steps: [
        { number: '01', title: '需求對齊' },
        { number: '02', title: '技術規劃' },
        { number: '03', title: '分階段實作' },
        { number: '04', title: '驗證與交接' }
      ]
    },
    oneTouch: {
      title: '一站式整合體驗',
      description:
        '把現場設備、告警邏輯、歷史資料與廠務系統整理成同一套可交付的整合路徑。',
      ctaLabel: '了解更多',
      items: [
        '資料整合',
        '告警通報系統整合與試車',
        '振動分析',
        '本地 / 雲端歷史資料部署',
        '公用與廠務系統整合'
      ]
    },
    mission: {
      heading: '把整合能力轉成穩定交付',
      tabs: [
        {
          value: 'mission',
          label: '我們的使命',
          title: '我們的使命',
          description:
            '雷力科技協助客戶建立更容易操作、維護與延伸的自動化環境，讓控制、資料與現場執行維持同一條交付節奏。',
          ctaLabel: '了解我們的使命',
          imageAlt: '工程師於控制盤前檢視與調整工業設備'
        },
        {
          value: 'join-us',
          label: '合作邀請',
          title: '合作邀請',
          description:
            '以跨域協作、清楚分工與現場導向的交付方式，讓客戶、承包商與操作團隊對齊在同一組專案重點上。',
          ctaLabel: '展開合作對話',
          imageAlt: '工程技術人員於設備旁協作與交流'
        }
      ]
    }
  },
  servicesCatalog,
  servicesPage: {
    seo: {
      title: '服務項目 | 雷力科技 Rally Technology',
      description:
        '瀏覽雷力科技 8 項核心服務，從 SCADA / HMI、PLC / DCS、PI Server 到工業網路與告警監控，快速掌握可承接的工業自動化交付範圍。'
    },
    hero: {
      kicker: '服務項目',
      title: '工業自動化交付的 8 項核心服務',
      description:
        '從監控圖控、控制程式到 plant data 與告警流程，承接工業自動化專案的關鍵交付。',
      asideLabel: '核心工業自動化服務'
    },
    cardCtaLabel: '了解更多',
    detailBackLabel: '所有服務',
    detailFocusLabel: '交付焦點'
  },
  serviceDetailPages: serviceDetailPagesZhTw,
  contactPage: {
    seo: {
      title: '聯絡我們 | 雷力科技 Rally Technology',
      description:
        '與雷力科技討論自動化整合、控制系統、試車支援與工廠資料需求。'
    },
    hero: {
      title: '聯絡我們',
      description: '與雷力科技討論專案範圍、現場條件與下一步執行方向。'
    },
    intro: {
      title: '從需求對話開始',
      paragraphs: [
        '若您正在評估自動化整合、控制系統、試車支援或工廠資料需求，歡迎與雷力科技聯繫。',
        '我們協助團隊快速釐清需求、確認協作邊界，並把前期討論整理成後續可執行的專案方向。'
      ]
    },
    form: {
      title: '需求表單',
      description:
        '先整理您的聯絡資訊與需求內容；若需立即聯繫，請直接使用電話或 Email。',
      submitLabel: '送出聯絡需求',
      unavailableTitle: '送出功能尚未開放',
      unavailableDescription:
        '這一版聯絡頁先完成導流與表單介面，請先透過頁面上的電話或 Email 與我們聯繫。',
      fields: {
        name: {
          label: '姓名',
          placeholder: '請輸入您的姓名',
          help: '請填寫主要聯絡人姓名。'
        },
        company: {
          label: '公司 / 單位',
          placeholder: '請輸入公司或單位名稱',
          help: 'B2B 專案建議填寫所屬公司或單位。'
        },
        email: {
          label: 'Email',
          placeholder: 'you@example.com',
          help: '我們會以此信箱回覆。'
        },
        subject: {
          label: '主旨',
          placeholder: '例如：PLC / DCS 搬遷評估',
          help: '用一句話說明這次洽詢主題。'
        },
        phone: {
          label: '聯絡電話',
          placeholder: '請輸入可聯繫電話',
          help: '若方便即時聯繫，可留下電話。'
        },
        details: {
          label: '需求內容',
          placeholder: '請描述現況、需求範圍、期望時程或關鍵限制',
          help: '請盡量提供現場背景、系統範圍與目前遇到的問題。'
        }
      }
    },
    direct: {
      title: '直接聯絡方式',
      description:
        '若您已經準備好進一步對談，也可以直接透過以下方式與雷力科技聯繫。',
      cards: {
        phoneTitle: '電話與傳真',
        faxLabel: '傳真',
        locationTitle: '公司位置',
        emailTitle: '電子郵件'
      }
    },
    map: {
      eyebrow: '位置',
      title: '辦公室地點',
      description:
        '若需安排拜訪或現場會談，可先透過地圖確認雷力科技辦公室位置。',
      ctaLabel: '在 Google Maps 開啟',
      iframeTitle: '雷力科技辦公室 Google Maps 位置'
    }
  },
  footer: {
    connectorHeading: '工程與自動化整合專家',
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
