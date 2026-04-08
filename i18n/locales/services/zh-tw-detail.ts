import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: '服務項目',
  contactHeading: '聯絡我們'
} as const

export const serviceDetailPagesZhTw = {
  'scada-hmi-graphics': {
    seo: {
      title: '監控與人機介面圖控服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃可讀性高、操作邏輯清楚的 SCADA 與 HMI 畫面，協助現場團隊更有效率地監看狀態、回應告警與執行操作。'
    },
    heroTitle: '監控與人機介面圖控服務｜SCADA and HMI Graphics',
    introParagraphs: [
      '雷力科技規劃可讀性高、操作邏輯清楚的 SCADA 與 HMI 畫面，協助現場團隊更有效率地監看狀態、回應告警與執行操作。',
      '我們重視畫面層級、資訊排序與長期維護性，讓系統在試車完成後仍能穩定支援日常運轉。'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'ie-services': {
    seo: {
      title: '儀電整合服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供貫穿設計、現場就緒與試車階段的 I&E 支援，協助儀控與電力相關工作更順利落地。'
    },
    heroTitle: '儀電整合服務｜I&E Services',
    introParagraphs: [
      '雷力科技提供貫穿設計、現場就緒與試車階段的 I&E 支援，協助儀控與電力相關工作更順利落地。',
      '從 FAT / SAT 到現場故障排除與現地支援，我們協助團隊把複雜系統推向更安全、穩定的運轉狀態。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'capability-list',
        title: '詳細能力說明',
        items: [
          {
            title: '試車驗收與 FAT/SAT 支援｜Commissioning & FAT/SAT Support',
            paragraphs: [
              '雷力科技協助處理試車、FAT 與 SAT 驗證工作，讓自動化系統能在啟動前依照專案需求完成檢查與交付確認。',
              '這些節點能幫助團隊更快收斂缺失、降低後續異常，並提升交接前的整體信心。'
            ]
          },
          {
            title: '現場故障排除｜On-site Troubleshooting',
            paragraphs: [
              '我們提供現場排除支援，協助團隊更快定位根因、穩定系統狀態，避免問題擴大成長時間停機。',
              '重點在於實務判斷、清楚溝通與處理到底，讓現場能安全地往下一步推進。'
            ]
          },
          {
            title: '儀表安裝與校正｜Instrumentation Installation & Calibration',
            paragraphs: [
              '我們協助規劃與落實儀表安裝、校正與驗證流程，讓量測點與控制點維持符合製程需求的準確度。'
            ]
          },
          {
            title: '電力系統分析｜Power Systems Studies',
            paragraphs: [
              '我們提供工業電力環境所需的分析工作，協助理解配電可靠度、保護協調與運轉風險。',
              '這些分析有助於保護設備、提升操作信心，並支援負載與升級決策。'
            ]
          },
          {
            title: '氣體分析系統｜Gas Analyzing Systems',
            paragraphs: [
              '我們協助整合工業現場的氣體分析系統，讓組成、品質與合規相關數據能被可靠量測與使用。'
            ]
          },
          {
            title: '電力計量設計與部署｜Power Meter Design & Deployment',
            paragraphs: [
              '我們規劃並部署電力計量方案，協助客戶掌握用電、電能品質與電力資料的可用性。'
            ]
          },
          {
            title: '安全系統｜Security Systems',
            paragraphs: [
              '我們協調安全系統的設計與整合工作，提升現場韌性並支援更安全的工業運轉。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: '服務卡片摘要',
        items: [
          {
            title: 'FAT / SAT 支援',
            description: '在交接前完成系統測試、驗證與確認。'
          },
          {
            title: '電力系統分析',
            description: '提升配電可靠度與操作信心。'
          },
          {
            title: '現場故障排除',
            description: '快速回應現場問題並穩定系統。'
          },
          {
            title: '氣體分析系統',
            description: '在工業製程中可靠量測氣體組成。'
          },
          {
            title: '儀表安裝與校正',
            description: '維持量測與控制點的準確表現。'
          },
          {
            title: '電力計量設計與部署',
            description: '掌握用電、品質與電力使用資料。'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          '「儀電整合服務的價值，在於把設計端的意圖真正帶到現場，讓系統能被安全驗證、穩定啟動、持續運轉。」',
        attribution: '－ 雷力科技'
      },
      {
        type: 'summary',
        title: '摘要',
        paragraphs: [
          '雷力科技把試車驗收、FAT / SAT 與現場故障排除視為同一條工業自動化交付路徑的一部分。',
          '團隊也支援儀表安裝校正與電力系統分析，協助控制系統與電力基礎設施走向更安全、更穩定的運轉狀態。',
          '另外也涵蓋氣體分析系統、電力計量部署與安全系統協調，支援現場在監測、可靠度與韌性上的需求。'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: '控制程式與系統搬遷服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助處理 PLC 與 DCS 的程式開發、搬遷規劃與分階段切換，讓既有控制系統升級時仍能維持清楚的操作與交付節奏。'
    },
    heroTitle: '控制程式與系統搬遷服務｜PLC & DCS Programming and Migration',
    introParagraphs: [
      '雷力科技協助處理 PLC 與 DCS 的程式開發、搬遷規劃與分階段切換，讓既有控制系統升級時仍能維持清楚的操作與交付節奏。',
      '我們重視的是現場真正走得通的搬遷路徑，而不只是紙面上的技術正確。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'capability-list',
        title: '核心能力',
        items: [
          {
            title: 'PLC 與 DCS 程式開發',
            paragraphs: [
              '我們建立更容易閱讀、維護與排查的控制邏輯與程式結構，讓操作與變更管理更清楚。'
            ]
          },
          {
            title: '系統搬遷與優化',
            paragraphs: [
              '我們規劃搬遷路徑與升級節點，降低切換干擾，同時提升系統效能與後續維護性。'
            ]
          },
          {
            title: '創新與安全並重',
            paragraphs: [
              '在現代化改造過程中，我們同步考量安全、生命週期與交接落地，讓升級後的控制系統更可長期維運。'
            ]
          }
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: '即時資料平台服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助客戶把 PI Server 建成可實際支撐監看、報表與跨系統整合的工業資料骨幹。'
    },
    heroTitle: '即時資料平台服務｜PI Server',
    introParagraphs: [
      '雷力科技協助客戶把 PI Server 建成可實際支撐監看、報表與跨系統整合的工業資料骨幹。',
      '我們不只重視資料蒐集，更重視這些資料是否真正能被營運、工程與管理團隊拿來使用。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'tag-list',
        title: '重點標籤',
        items: [
          '工業自動化',
          '營運可視化',
          'PI Server 專業能力',
          '資料導向運營'
        ]
      },
      {
        type: 'accordion',
        title: '摺疊重點',
        items: [
          {
            title: '1. 推動工業自動化',
            paragraphs: [
              '以 PI Server 串接即時資料、報表、儀表板與現場可視化需求。'
            ]
          },
          {
            title: '2. 啟用 PI Server 整合'
          },
          {
            title: '3. 優化營運'
          }
        ]
      }
    ]
  },
  ['historians']: {
    seo: {
      title: '歷史資料平台服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助規劃 historian 架構，讓長期製程資料能穩定支援趨勢分析、報表、合規與跨單位決策。'
    },
    heroTitle: '歷史資料平台服務｜Historians',
    introParagraphs: [
      '雷力科技協助規劃 historian 架構，讓長期製程資料能穩定支援趨勢分析、報表、合規與跨單位決策。',
      '我們可支援本地冗餘與遠端存取架構，提升韌性，同時維持資料取得的便利性。'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'network-design': {
    seo: {
      title: '工業網路設計服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃工業通訊網路架構，讓控制流量、現場設備與資料系統都能在更清楚、可維護且具韌性的結構下運作。'
    },
    heroTitle: '工業網路設計服務｜Network Design',
    introParagraphs: [
      '雷力科技規劃工業通訊網路架構，讓控制流量、現場設備與資料系統都能在更清楚、可維護且具韌性的結構下運作。',
      '我們重視區隔、可靠度與後續支援性，讓網路能隨著廠區成長，而不是成為限制。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'closing-note',
        paragraphs: [
          '穩定的網路設計，是自動化系統建立可視化、安全性與長期可靠運轉的基礎。'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: '遠端監控與資料備援服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助建立遠端可視化與資料持續性流程，降低復原風險，支援跨據點營運與資訊不中斷。'
    },
    heroTitle: '遠端監控與資料備援服務｜Remote Monitoring and Data',
    introParagraphs: [
      '雷力科技協助建立遠端可視化與資料持續性流程，降低復原風險，支援跨據點營運與資訊不中斷。',
      '這類方案能幫助團隊掌握狀態、保護紀錄，並在突發狀況發生時更快採取行動。'
    ],
    sidebar: sharedSidebar,
    blocks: []
  },
  'alarm-monitoring': {
    seo: {
      title: '告警監控服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助建立告警監控策略，提升自動化現場的反應速度、操作可視性與日常判斷效率。'
    },
    heroTitle: '告警監控服務｜Alarm Monitoring',
    introParagraphs: [
      '雷力科技協助建立告警監控策略，提升自動化現場的反應速度、操作可視性與日常判斷效率。',
      '我們重視的是讓告警邏輯更容易管理，讓團隊在正確時機對正確條件做出回應。'
    ],
    sidebar: sharedSidebar,
    blocks: []
  }
} satisfies ServiceDetailPagesMessages
