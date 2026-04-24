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
    description:
      '承接 SCADA / HMI、WinCC OA 與 AVEVA System Platform 類監控畫面規劃，讓狀態、告警與操作脈絡更容易判讀。'
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
      '把即時製程資料收進 PI Server / PI System 架構，建立可查詢、計算與跨系統使用的工業資料平台。'
  },
  {
    slug: 'historians',
    shortLabel: 'Historians',
    formalTitle: '歷史資料平台服務',
    englishTitle: 'Historians',
    description:
      '保存長期製程紀錄，讓趨勢回顧、報表追蹤與異常排查有穩定資料來源。'
  },
  // Source: docs/rewrite/文案.md items 1-3, mapped as new public services.
  {
    slug: 'it-infrastructure',
    shortLabel: 'IT 建置',
    formalTitle: 'IT 基礎建設規劃與建置服務',
    englishTitle: 'IT Infrastructure Planning and Deployment',
    description:
      '規劃企業 IT 架構、伺服器、儲存與虛擬化資源，支撐穩定營運與未來擴充。'
  },
  {
    slug: 'cybersecurity-network',
    shortLabel: '資安網路建置',
    formalTitle: '資安網路架構與防護整合服務',
    englishTitle: 'Cybersecurity Network Architecture and Protection',
    description:
      '整合網路分段、存取控管、威脅防護與資安設計，降低企業 IT / OT 環境的暴露風險。'
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
    slug: 'offshore-wind-operations',
    shortLabel: '離岸風場維運',
    formalTitle: '離岸風場遠端維運與安全管理服務',
    englishTitle: 'Offshore Wind Remote Operations and Security Management',
    description:
      '建立離岸風場 SCADA 監控、遠端維運與安全連線流程，支援 offshore wind monitoring 與偏遠場域穩定運作。'
  },
  {
    slug: 'remote-monitoring-and-data',
    shortLabel: '遠端監控與資料備援',
    formalTitle: '遠端監控與資料備援服務',
    englishTitle: 'Remote Monitoring and Data',
    description:
      '讓分散設備與站點資料能遠端查看、回傳與備援，支援 infrastructure monitoring 與跨據點營運判讀。'
  },
  {
    slug: 'alarm-monitoring',
    shortLabel: '告警監控',
    formalTitle: '告警監控服務',
    englishTitle: 'Alarm Monitoring',
    description:
      '規劃告警分類、即時通知與升級規則，讓事件從發生到處置更容易追蹤。'
  },
  {
    slug: 'web-development',
    shortLabel: '網頁開發',
    formalTitle: '網頁開發服務',
    englishTitle: 'Web Development',
    description:
      '依據品牌定位、營運流程與實際使用情境，規劃工業網站與 Web 應用的架構、介面流程與技術實作。'
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
        '雷力科技提供 SCADA、PI Server、Historian、工業網路設計與離岸風場維運整合，支援再生能源、工業自動化與跨系統監控需求。'
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
        '了解雷力科技如何以 SCADA、PI Server、Historian、工業網路設計與離岸風場維運整合，支援再生能源與工業專案。'
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
    partners: {
      kicker: '合作夥伴',
      title: '合作夥伴與平台生態',
      description:
        '從 Siemens WinCC OA 到 AVEVA PI 與 Palo Alto Networks，雷力把控制、資料與資安平台放進同一套可交付的整合脈絡。',
      proofLabel: 'WinCC OA Partner proof 已由官方合作夥伴頁支撐',
      items: [
        {
          name: 'Siemens',
          tag: '自動化平台',
          description:
            '對應控制系統、SCADA 架構與現場自動化專案常見的 Siemens 生態。',
          image: {
            src: '/images/brand/siemens-platform-badge.svg',
            alt: 'Siemens 平台視覺標章'
          }
        },
        {
          name: 'WinCC OA',
          tag: '官方 Partner proof',
          description:
            '以 WinCC OA Partner 基礎支撐 SCADA / HMI 監控平台規劃、畫面與交付工作。',
          image: {
            src: '/images/brand/wincc-oa-platform-badge.svg',
            alt: 'WinCC OA 平台視覺標章'
          }
        },
        {
          name: 'AVEVA PI',
          tag: 'PI / Historian',
          description:
            '承接 AVEVA PI / OSIsoft PI System 類即時資料、Historian 與跨系統資料使用情境。',
          image: {
            src: '/images/brand/aveva-pi-platform-badge.svg',
            alt: 'AVEVA PI 平台視覺標章'
          }
        },
        {
          name: 'Palo Alto Networks',
          tag: 'IT / OT 資安',
          description:
            '對應工業網路分段、遠端存取與 IT / OT security handoff 的資安平台脈絡。',
          image: {
            src: '/images/brand/palo-alto-networks-platform-badge.svg',
            alt: 'Palo Alto Networks 平台視覺標章'
          }
        }
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
      title: '服務項目 | 雷力科技 Rally Technology',
      description:
        '瀏覽雷力科技的 SCADA / HMI、PI Server、Historian、WinCC OA、AVEVA System Platform、工業網路設計、資安設計、離岸風場維運、遠端監控與告警整合服務。'
    },
    hero: {
      title: '工業自動化服務範圍'
    },
    intro: {
      kicker: '服務導覽',
      title: '依系統層級找到對應服務',
      description:
        '先確認需求落在哪一層：SCADA / HMI、PLC / DCS、PI Server / Historian、工業網路、資安防護、離岸風場維運、遠端監控、告警通知或跨系統整合，再進入對應服務內容。'
    },
    cardCtaLabel: '查看詳情',
    detailBackLabel: '所有服務',
    detailFocusLabel: '快速看懂',
    contextsSection: {
      kicker: '常見產業情境',
      title: '把關鍵字放回真正的專案場景',
      description:
        '我們以既有服務頁承接再生能源、離岸風場、能源管理、油氣與基礎設施監控等需求，而不是把不相干的詞硬塞進同一頁。',
      items: [
        {
          title: '再生能源與離岸風場 SCADA',
          description:
            '承接 renewable energy SCADA、wind farm SCADA system 與 offshore wind farm monitoring 等需求，整合 SCADA、遠端連線、告警回應與離岸風場維運流程。'
        },
        {
          title: '能源管理與公用廠務整合',
          description:
            '從 EMS、energy management system 到 utilities / facilities integration，將公用系統、HVAC、chiller 與報表資料接回監看與分析流程。'
        },
        {
          title: '油氣與偏遠場域監控',
          description:
            '以 Historian、remote monitoring、alarm workflow 與資料連續性設計，支援 oil & gas、remote site 與高合規場域的紀錄與營運判讀。'
        },
        {
          title: '港口與交通基礎設施',
          description:
            '支援 port energy management、traffic & transport 與 infrastructure monitoring 情境，讓跨站點狀態、事件與維運節奏更容易掌握。'
        },
        {
          title: '工廠與廠務監測',
          description:
            '把中央監控、空調、冰機與工廠資料分析接到同一套自動化與監看架構，減少系統各自為政。'
        },
        {
          title: '跨系統報表與營運視角',
          description:
            '用 PI Server、Historian 與一站式整合流程串接監看、報表、趨勢與工程檢視，建立可延續的 industrial data platform。'
        }
      ]
    },
    technologySection: {
      kicker: '技術與交付焦點',
      title: '從平台名稱回到可交付的系統能力',
      description:
        '搜尋會找平台名詞，但真正會累積排名的，是每個平台在頁面裡被清楚說明成什麼工作內容、什麼交付邊界。',
      items: [
        {
          title: 'SCADA / HMI 與 SCADA package 規劃',
          description:
            '承接 SCADA system integrator、SCADA package、real-time industrial monitoring system 等需求，聚焦畫面層級、告警脈絡與可維護的操作流程。'
        },
        {
          title: 'WinCC OA 與 AVEVA System Platform',
          description:
            '以既有監控平台能力承接 WinCC OA 與 AVEVA System Platform 類專案，讓 operator graphics、alarm workflow 與 cross-system integration 有一致結構。'
        },
        {
          title: 'PI Server / PI System / Historians',
          description:
            '把 PI Server、PI System、Historian 與 trend reporting 接回工業資料平台，支援 industrial analytics、traceability 與 recurring reporting。'
        },
        {
          title: 'PLC / DCS 與試車整合',
          description:
            '將 PLC / DCS programming、migration、FAT / SAT 與 commissioning support 接在同一條可驗證的交付路徑上。'
        },
        {
          title: '工業網路設計與資安設計',
          description:
            '把 industrial network design、IT / OT segmentation、remote access 與 cybersecurity handoff 提早納入，降低後續擴充與維護風險。'
        },
        {
          title: '工業網站與 Web 應用',
          description:
            '從 custom industrial website design 到 industrial web application development，規劃內容架構、流程與後續可維運的數位平台。'
        }
      ]
    }
  },
  oneTouchPage: {
    seo: {
      title: '一站式整合 | 雷力科技 Rally Technology',
      description:
        '了解雷力科技如何把 SCADA、告警流程、PI Server / Historian、振動監測、能源管理與公用廠務資料接在同一層跨系統整合流程。'
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
          '串接 SCADA、PI Server、Historian、設備與報表資料，讓團隊能在同一個可用的營運視角下工作。'
      },
      {
        id: 'alarm-workflow',
        title: '告警流程與試車',
        secondaryTitle: 'Alarm Workflow and Commissioning',
        description:
          '對齊告警路由、即時通知邏輯與試車驗證，讓關鍵事件能更快送到正確窗口。'
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
          '規劃 Historian 與 PI 類資料環境，讓製程資料持續支援排查、報表與長期回顧。'
      },
      {
        id: 'utilities-integration',
        title: '公用與廠務整合',
        secondaryTitle: 'Utilities and Facilities Integration',
        description:
          '把 EMS、公用與廠務系統含 HVAC / chiller 監測接進同一層監控、控制與報表流程，形成跨系統整合視角。'
      }
    ]
  },
  serviceDetailPages: serviceDetailPagesZhTw,
  contactPage: {
    seo: {
      title: '聯絡我們 | 雷力科技 Rally Technology',
      description:
        '與雷力科技討論 SCADA、PI Server、工業網路設計、離岸風場維運與跨系統監控整合需求。'
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
