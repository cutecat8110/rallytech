import { referencePagesZhTw } from './reference-pages.generated'
import { serviceDetailPagesZhTw } from './services/zh-tw-detail'
import type {
  RallyTechLocaleMessages,
  ServiceCatalogItemMessages
} from './types'

// Manual copy lock: services overview copy maps docs/rewrite/文案.md (2026-04-22).
// Do not rewrite this public i18n copy without a new manual rewrite source.
const servicesCatalog = [
  {
    slug: 'scada-hmi-graphics',
    shortLabel: 'SCADA / HMI 圖控',
    formalTitle: '監控與人機介面圖控服務',
    englishTitle: 'SCADA and HMI Graphics',
    description:
      '把操作端需要看的狀態、告警與控制動作整理成清楚畫面，降低判讀與交接成本。'
  },
  {
    slug: 'ie-services',
    shortLabel: '儀電整合',
    formalTitle: '儀電整合服務',
    englishTitle: 'I&E Services',
    description: '確認儀表、回路與試車檢查，協助設備訊號一路銜接到啟動與排障。'
  },
  {
    slug: 'plc-dcs-programming-and-migration',
    shortLabel: 'PLC / DCS 程式與搬遷',
    formalTitle: '控制程式與系統搬遷服務',
    englishTitle: 'PLC & DCS Programming and Migration',
    description: '處理控制邏輯調整、程式搬遷與切換規劃，讓既有系統能分段更新。'
  },
  {
    slug: 'pi-server',
    shortLabel: 'PI Server',
    formalTitle: '即時資料平台服務',
    englishTitle: 'PI Server',
    description:
      '把即時製程資料收進 PI 架構，建立可查詢、計算與日常操作使用的資料基礎。'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: '歷史資料平台服務',
    englishTitle: 'Historians',
    description:
      '保存長期製程紀錄，讓趨勢回顧、報表追蹤與異常排查有穩定資料來源。'
  },
  {
    slug: 'network-design',
    shortLabel: '工業網路設計',
    formalTitle: '工業網路設計服務',
    englishTitle: 'Network Design',
    description:
      '整理控制網路拓樸、通訊分層與擴充邊界，支撐穩定連線與後續維護。'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: '遠端監控與資料備援',
    formalTitle: '遠端監控與資料備援服務',
    englishTitle: 'Remote Monitoring and Data',
    description:
      '讓分散設備與站點資料能遠端查看、回傳與備援，降低現場到場依賴。'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: '告警監控',
    formalTitle: '告警監控服務',
    englishTitle: 'Alarm Monitoring',
    description:
      '規劃告警分類、通知路徑與升級規則，讓事件從發生到處置更容易追蹤。'
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
      { label: '關於我們', href: '/about' },
      { label: '服務項目', href: '/services' },
      { label: '一站式整合', href: '/one-touch-experience' }
    ]
  },
  home: {
    seo: {
      title: '雷力科技 Rally Technology',
      description:
        '雷力科技專注自動化控制與監控系統整合，服務再生能源、工業、化工、製藥與 EPC 專案。'
    },
    hero: {
      kicker: '自動化控制與監控整合',
      title: '自動化控制與監控整合，支援工業現場運轉',
      description:
        '協助專案與現場團隊把控制、監控與試車工作接在同一條較清楚的交付路徑上。',
      ctaLabel: '查看服務',
      imageAlt: '工程團隊於監控室檢視工業系統'
    },
    about: {
      kicker: '為什麼選擇雷力',
      title: '承接控制、監控與試車交付的整合夥伴',
      description:
        '雷力科技成立於 2014 年，承接自動化控制、監控系統、試車支援與客製系統交付，服務專案端與現場端需求。',
      mediaLabel: '雷力科技辦公室 Logo 牆與辦公區雙圖組合',
      primaryImageAlt: '雷力科技辦公室 Logo 品牌牆',
      detailImageAlt: '雷力科技開放式辦公區環境',
      points: [
        {
          title: '公司角色',
          description: '承接控制系統、監控平台、試車支援與客製整合工作。'
        },
        {
          title: '品質與合作',
          description:
            '以 ISO 9001、ISO 45001 與 WinCC OA Partner 基礎支撐穩定交付。'
        },
        {
          title: '常見場域',
          description: '常見於再生能源、離岸風電、化工、製藥、EPC 與工業場域。'
        }
      ]
    },
    services: {
      kicker: '服務項目',
      title: '工業自動化服務範圍',
      ctaLabel: '查看詳情'
    },
    process: {
      kicker: '交付流程',
      title: '工作怎麼往下走',
      steps: [
        { number: '01', title: '範圍確認' },
        { number: '02', title: '技術規劃' },
        { number: '03', title: '執行支援' },
        { number: '04', title: '驗證與交接' }
      ]
    },
    oneTouch: {
      title: '一站式整合',
      description:
        '把 SCADA、告警流程、Historian 與公用系統資料接在同一層整合邏輯裡。',
      ctaLabel: '查看整合方式',
      items: [
        'SCADA 資料',
        '告警流程',
        'Historian 資料',
        '公用系統資料',
        '跨系統流程'
      ]
    },
    mission: {
      heading: '雷力怎麼跟專案團隊合作',
      tabs: [
        {
          value: 'mission',
          label: '專業與迅速',
          title: '先把範圍與介面釐清，再讓後續跟得上',
          description:
            '我們重視提早釐清決策、系統介面與下一步工作，避免設計、會議與現場執行之間斷線。',
          ctaLabel: '討論需求',
          imageAlt: '工程師於控制盤前檢視與調整工業設備'
        },
        {
          value: 'join-us',
          label: '團隊與誠信',
          title: '讓業主、廠商與現場團隊對齊在清楚分工上',
          description:
            '我們重視直接溝通、務實協調與可執行的交接，讓合作不只停在會議結論。',
          ctaLabel: '開始洽詢',
          imageAlt: '工程技術人員於設備旁協作與交流'
        }
      ]
    }
  },
  aboutPage: {
    seo: {
      title: '關於我們 | 雷力科技 Rally Technology',
      description:
        '了解雷力科技如何以自動化控制與監控系統整合，支援再生能源、工業、化工、製藥與 EPC 專案。'
    },
    hero: {
      title: '關於我們'
    },
    intro: {
      kicker: '關於我們',
      title: '面向專案與現場交付的自動化整合',
      paragraphs: [
        '雷力科技成立於 2014 年，專注自動化控制與監控系統整合，承接控制、儀控、試車驗收、工廠資料與客製系統交付，服務再生能源、工業、化工、製藥與 EPC 等專案情境。',
        '我們以專業、迅速、團隊、誠信看待工作方式。ISO 9001、ISO 45001 與 WinCC OA Partner 是交付基礎，目標是讓系統在驗證、交接與後續維護上都更清楚。'
      ]
    },
    capabilities: {
      title: '核心整合能力',
      items: [
        '系統整合',
        '儀電整合',
        'FAT / SAT',
        'SCADA / HMI',
        'PLC / DCS',
        'PI / Historian',
        '工業網路',
        '一站式整合'
      ]
    },
    process: {
      kicker: '交付流程',
      title: '工作怎麼往下走',
      steps: [
        { number: '01', title: '範圍確認' },
        { number: '02', title: '技術規劃' },
        { number: '03', title: '執行支援' },
        { number: '04', title: '驗證與交接' }
      ]
    }
  },
  servicesCatalog,
  servicesPage: {
    seo: {
      title: 'IT / OT 整合與資安防護解決方案 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供橫跨 IT 與 OT 的整合服務，涵蓋企業 IT 基礎建設、工業網路、資安防護、遠端維運與告警監控。'
    },
    hero: {
      title: 'IT / OT 整合與資安防護解決方案'
    },
    intro: {
      kicker: '服務導覽',
      title: '從 IT 基礎建設到 OT 現場維運',
      description:
        '先從系統層級判斷需求：操作介面、現場儀電、控制邏輯、資料平台、IT / OT 網路、遠端維運或告警事件，再進入對應服務內容。'
    },
    cardCtaLabel: '查看詳情',
    detailBackLabel: '所有服務',
    detailFocusLabel: '快速看懂'
  },
  oneTouchPage: {
    seo: {
      title: '一站式整合 | 雷力科技 Rally Technology',
      description:
        '了解雷力科技如何把 SCADA、告警流程、振動監測、Historian 與公用廠務資料接在同一層跨系統整合流程。'
    },
    hero: {
      title: '一站式整合',
      imageAlt: '工業控制室與監控系統畫面'
    },
    modules: [
      {
        id: 'data-integration',
        title: '資料整合',
        secondaryTitle: 'Data Integration',
        description:
          '串接現場、設備與報表資料，讓團隊能在同一個可用的營運視角下工作。'
      },
      {
        id: 'alarm-workflow',
        title: '告警流程與試車',
        secondaryTitle: 'Alarm Workflow and Commissioning',
        description:
          '對齊告警路由、通知邏輯與試車驗證，讓關鍵事件能更快送到正確窗口。'
      },
      {
        id: 'vibration-analysis',
        title: '振動分析',
        secondaryTitle: 'Vibration Analysis',
        description:
          '支援振動監測與判讀流程，協助維護團隊更早掌握異常並判斷下一步。'
      },
      {
        id: 'historian-deployment',
        title: '本地 / 雲端 Historian 部署',
        secondaryTitle: 'Local / Cloud Historian Deployment',
        description:
          '規劃 Historian 環境，讓製程資料持續支援排查、報表與長期回顧。'
      },
      {
        id: 'utilities-integration',
        title: '公用與廠務整合',
        secondaryTitle: 'Utilities and Facilities Integration',
        description:
          '把公用與廠務系統接進同一層監控、控制與報表流程，形成跨系統整合視角。'
      }
    ]
  },
  serviceDetailPages: serviceDetailPagesZhTw,
  contactPage: {
    seo: {
      title: '聯絡我們 | 雷力科技 Rally Technology',
      description:
        '與雷力科技討論自動化整合、控制系統、試車支援與工廠資料需求。'
    },
    hero: {
      title: '聯絡我們'
    },
    intro: {
      kicker: '聯絡我們',
      title: '開始洽詢',
      paragraphs: [
        '若您要討論自動化整合、控制系統、試車支援或工廠資料需求，可從這裡開始。',
        '我們會先協助確認範圍、釐清工作邊界，整理出下一步可執行的方向。'
      ]
    },
    form: {
      title: '聯絡表單',
      description: '留下聯絡資訊與專案重點，讓我們更快理解範圍並回覆。',
      submitLabel: '送出洽詢',
      unavailableTitle: '送出功能尚未開放',
      unavailableDescription:
        '此版本先完成聯絡頁與表單介面，請先透過電話或 Email 與我們聯繫。',
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
          placeholder: '例如：SCADA 升級或 PLC / DCS 搬遷評估',
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
          help: '請盡量提供現場背景、目前系統邊界、時程與主要問題。'
        }
      }
    },
    actions: {
      phoneLabel: '來電洽詢',
      faxLabel: '傳真聯繫',
      emailLabel: '來信洽詢',
      directionsLabel: '查看地圖'
    },
    direct: {
      title: '直接聯絡',
      description: '若已準備好進一步對談，也可直接透過以下方式與我們聯繫。',
      cards: {
        phoneTitle: '電話 / 傳真',
        faxLabel: '傳真',
        locationTitle: '公司地址',
        emailTitle: '電子郵件'
      }
    },
    map: {
      eyebrow: '位置',
      title: '辦公室位置',
      description: '若需安排拜訪或現場會談，可先確認辦公室位置。',
      ctaLabel: '查看 Google Maps',
      iframeTitle: '雷力科技辦公室 Google Maps 位置'
    },
    closing: {
      ctaHeading: '工業自動化整合夥伴',
      ctaLabel: '聯絡我們',
      newsletterHeading: '電子報',
      newsletterDescription: '訂閱電子報，掌握雷力科技最新消息。',
      newsletterPlaceholder: '輸入 Email',
      newsletterButtonLabel: '訂閱',
      newsletterUnavailableTitle: '電子報訂閱功能尚未開放',
      newsletterUnavailableDescription:
        '電子報功能尚未開放，請先透過電話或 Email 與我們聯繫。',
      contactsHeading: '聯絡方式'
    }
  },
  footer: {
    connectorHeading: '工業自動化整合夥伴',
    ctaLabel: '聯絡我們',
    brandLine: '雷力科技 Rally Technology',
    newsletterHeading: '電子報',
    newsletterDescription: '訂閱電子報，掌握雷力科技最新消息。',
    newsletterPlaceholder: '輸入 Email',
    newsletterButtonLabel: '訂閱',
    newsletterUnavailableTitle: '電子報訂閱功能尚未開放',
    newsletterUnavailableDescription:
      '電子報功能尚未開放，請先透過電話或 Email 與我們聯繫。',
    contactsHeading: '聯絡方式',
    phoneLabel: '電話',
    faxLabel: '傳真',
    emailLabel: '電子郵件',
    addressLabel: '地址',
    backToTopLabel: '回到頂端',
    copyright: '© {year} 雷力科技。版權所有。'
  },
  referencePages: referencePagesZhTw
} satisfies RallyTechLocaleMessages

export default defineI18nLocale(() => messages)
