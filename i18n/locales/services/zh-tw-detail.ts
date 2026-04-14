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
    heroFocusItems: ['畫面層級清楚', '警報脈絡易辨識', '交接後仍可維護'],
    introParagraphs: [
      '雷力科技規劃可讀性高、操作邏輯清楚的 SCADA 與 HMI 畫面，協助現場團隊更有效率地監看狀態、回應告警與執行操作。',
      '我們重視畫面層級、資訊排序與長期維護性，讓系統在試車完成後仍能穩定支援日常運轉。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'scada-hmi-graphics',
        imageAlt: '工程人員於控制介面前檢視工業監控畫面',
        layout: 'image-right',
        title: '以操作者為中心建立可讀、可判斷、可交接的畫面系統',
        paragraphs: [
          'SCADA / HMI 圖控不只是把資料放上螢幕，而是把現場真正需要先看什麼、何時需要介入、發生異常時要往哪裡查清楚整理出來。',
          '雷力科技會把命名、導航、狀態切換與警報資訊一起納入設計，讓畫面在交接後仍能被不同角色快速理解。'
        ],
        highlights: ['畫面層級清楚', '警報脈絡易辨識', '交接後仍可維護']
      },
      {
        type: 'proof-strip',
        title: '交付重點',
        items: [
          {
            title: 'Readable Hierarchy',
            description:
              '先區分狀態、流程、警報與操作動作，讓現場在短時間內看懂畫面。'
          },
          {
            title: 'Faster Operator Response',
            description:
              '把常用操作與異常切入點放在容易抵達的位置，降低反應時間。'
          },
          {
            title: 'Alarm Visibility',
            description: '警報資訊不孤立顯示，而是連回設備與流程脈絡一起判讀。'
          },
          {
            title: 'Maintainability',
            description:
              '命名與畫面規則可持續擴充，不因後續新增點位就破壞整體一致性。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '能力重點',
        items: [
          {
            title: '畫面層級與導覽規劃',
            paragraphs: [
              '我們協助建立主頁、單元頁、設備頁之間的閱讀順序，讓不同角色都能快速找到自己要看的資訊。'
            ]
          },
          {
            title: '警報與流程脈絡整合',
            paragraphs: [
              '警報不只是一個紅點，而是要能讓操作端知道這個狀態對流程、設備與下一步操作代表什麼。'
            ]
          },
          {
            title: '試車到交接的一致性',
            paragraphs: [
              '畫面邏輯會配合試車、驗收與交接節奏整理，減少正式上線後才重新學習整套介面的成本。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '好的 SCADA / HMI 不是把資料塞滿畫面，而是讓現場在幾秒內看懂狀態、找到問題、做出正確動作。'
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: '儀電整合服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供貫穿設計、現場就緒與試車階段的 I&E 支援，協助儀控與電力相關工作更順利落地。'
    },
    heroTitle: '儀電整合服務｜I&E Services',
    heroFocusItems: ['現場就緒導向', '跨儀控與電力協調', '試車與交接同一節奏'],
    introParagraphs: [
      '雷力科技提供貫穿設計、現場就緒與試車階段的 I&E 支援，協助儀控與電力相關工作更順利落地。',
      '從 FAT / SAT 到現場故障排除與現地支援，我們協助團隊把複雜系統推向更安全、穩定的運轉狀態。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'ie-services',
        imageAlt: '工業控制盤與儀電設備近景',
        layout: 'image-left',
        title: '把設計端意圖帶進現場，讓儀控與電力工作真正走到交付',
        paragraphs: [
          'I&E 服務的價值，不在於單點處理某一台設備，而在於把 FAT / SAT、試車、現場故障排除與後續交接串成同一條工作節奏。',
          '雷力科技著重的是現場是否能安全啟動、問題是否能被清楚定位，以及交接後是否還能持續維護。'
        ],
        highlights: ['現場就緒導向', '跨儀控與電力協調', '試車與交接同一節奏']
      },
      {
        type: 'proof-strip',
        title: '交付證據',
        items: [
          {
            title: 'Field Readiness',
            description:
              '先把現場啟動與驗收條件整理清楚，再進行儀電與控制協調。'
          },
          {
            title: 'FAT / SAT Support',
            description:
              '把測試、驗證與缺失收斂放進同一條交付路徑，不讓試車只停留在文件層。'
          },
          {
            title: 'Safer Startup',
            description:
              '故障定位、校正與現地排除都以降低停機風險與安全風險為優先。'
          },
          {
            title: 'Cross-Discipline Coordination',
            description: '儀控、電力、設備與現場窗口可以用同一組工作重點對齊。'
          }
        ]
      },
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
        columns: 3,
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
    heroFocusItems: ['搬遷路徑清楚', '切換風險可控', '邏輯結構可維護'],
    introParagraphs: [
      '雷力科技協助處理 PLC 與 DCS 的程式開發、搬遷規劃與分階段切換，讓既有控制系統升級時仍能維持清楚的操作與交付節奏。',
      '我們重視的是現場真正走得通的搬遷路徑，而不只是紙面上的技術正確。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: '工程師以筆電檢視控制系統設定',
        layout: 'image-right',
        title: '先把搬遷風險拆清楚，再把邏輯與切換節奏穩定落地',
        paragraphs: [
          'PLC / DCS 搬遷往往牽涉既有邏輯、現場停機窗口、設備限制與交接文件，不適合只用單一技術視角處理。',
          '雷力科技會把程式結構、切換路徑與驗證節點整理成現場能執行的工作順序，降低改造時的斷點與混亂。'
        ],
        highlights: ['搬遷路徑清楚', '切換風險可控', '邏輯結構可維護']
      },
      {
        type: 'proof-strip',
        title: '交付重點',
        items: [
          {
            title: 'Migration Path Clarity',
            description: '先盤點既有系統邊界與依賴，再決定搬遷與切換順序。'
          },
          {
            title: 'Cutover Risk Control',
            description:
              '把停機窗口、回切條件與驗證節點提前說清楚，降低改造風險。'
          },
          {
            title: 'Maintainable Logic',
            description: '程式不只可執行，也要讓後續調整與排查有清楚脈絡。'
          },
          {
            title: 'Lifecycle Upgradeability',
            description: '讓升級後的系統更容易延伸、接手與長期支援。'
          }
        ]
      },
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
      },
      {
        type: 'process-steps',
        title: '實施節奏',
        items: [
          {
            stepLabel: 'Step 01',
            title: '盤點既有邏輯與切換邊界',
            description:
              '先整理現有程式、點位、相依設備與停機限制，建立清楚的搬遷範圍。'
          },
          {
            stepLabel: 'Step 02',
            title: '規劃分階段切換方案',
            description:
              '根據現場節奏安排測試、切換與回切條件，讓改造不影響關鍵運轉。'
          },
          {
            stepLabel: 'Step 03',
            title: '執行程式開發與驗證',
            description:
              '以可閱讀、可交接的邏輯結構完成程式開發，並配合試車與驗證流程。'
          },
          {
            stepLabel: 'Step 04',
            title: '完成交接與後續支援',
            description:
              '把文件、版本與現場經驗一併整理，讓升級後的系統更容易接手與維護。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '控制系統搬遷的關鍵不只是把舊程式搬到新平台，而是讓現場在切換前後都維持可理解、可操作、可回復。'
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: '即時資料平台服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助客戶把 PI Server 建成可實際支援監看、報表與跨系統整合的工業資料骨幹。'
    },
    heroTitle: '即時資料平台服務｜PI Server',
    heroFocusItems: [
      '資料骨幹可持續擴充',
      '報表與監看可實際使用',
      '跨系統整合就緒'
    ],
    introParagraphs: [
      '雷力科技協助客戶把 PI Server 建成可實際支援監看、報表與跨系統整合的工業資料骨幹。',
      '我們不只重視資料蒐集，更重視這些資料是否真正能被營運、工程與管理團隊拿來使用。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: '暗色環境中的工業資料與伺服設備',
        layout: 'image-left',
        title: '把即時資料轉成可被跨角色使用的營運基礎',
        paragraphs: [
          'PI Server 的重點不在於單純把點位接進來，而是讓資料可以被報表、監看、異常分析與跨系統整合穩定使用。',
          '雷力科技著重資料架構、來源一致性與後續擴充，避免平台上線後只剩資料累積，卻沒有真正支援決策。'
        ],
        highlights: [
          '資料骨幹可持續擴充',
          '報表與監看可實際使用',
          '跨系統整合就緒'
        ]
      },
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
        type: 'proof-strip',
        title: '應用證據',
        items: [
          {
            title: 'Usable Data Backbone',
            description: '資料不只被收集，更能穩定供應給監看、報表與追蹤流程。'
          },
          {
            title: 'Integration Readiness',
            description: '平台規劃會考慮既有控制系統與後續資料應用的串接需求。'
          },
          {
            title: 'Reporting Continuity',
            description:
              '讓報表與歷史追蹤不是一次性專案，而是日常運營的一部分。'
          },
          {
            title: 'Operations Visibility',
            description: '讓工程、營運與管理端可以用一致的資料基礎對齊狀態。'
          }
        ]
      },
      {
        type: 'accordion',
        title: '擴充重點',
        items: [
          {
            title: '1. 推動工業自動化',
            paragraphs: [
              '以 PI Server 串接即時資料、報表、儀表板與現場可視化需求，讓資料在自動化架構中真正流動。'
            ]
          },
          {
            title: '2. 啟用 PI Server 整合',
            paragraphs: [
              '把現場資料來源、命名與整合邏輯整理好，才能讓平台後續擴充不被各自為政的來源拖累。'
            ]
          },
          {
            title: '3. 優化營運',
            paragraphs: [
              '當資料能被穩定取得並正確理解，報表、趨勢分析與跨部門判斷才會真正加速。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '摘要',
        paragraphs: [
          'PI Server 的價值，在於把分散的現場資料整理成長期可使用的工業資料平台。',
          '雷力科技協助客戶讓監看、報表與跨系統整合建立在更穩定、更容易維護的資料基礎上。'
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
    heroFocusItems: ['長期保留可追溯', '冗餘與遠端存取', '報表與趨勢分析就緒'],
    introParagraphs: [
      '雷力科技協助規劃 historian 架構，讓長期製程資料能穩定支援趨勢分析、報表、合規與跨單位決策。',
      '我們可支援本地冗餘與遠端存取架構，提升韌性，同時維持資料取得的便利性。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'historians',
        imageAlt: '伺服設備與機架近景',
        layout: 'image-right',
        title: '讓歷史資料在需要時真的拿得到、查得到、用得上',
        paragraphs: [
          'Historian 的價值在於把長期累積的製程資料整理成可追溯、可分析、可支援決策的基礎，而不只是把資料放進另一套資料庫。',
          '雷力科技重視保留週期、查詢效率、冗餘與遠端存取方式，讓資料能在不同場景下穩定被調用。'
        ],
        highlights: ['長期保留可追溯', '冗餘與遠端存取', '報表與趨勢分析就緒']
      },
      {
        type: 'proof-strip',
        title: '應用重點',
        items: [
          {
            title: 'Long-Term Retention',
            description: '讓重要製程資料可以按需要保留，支援追溯與長期比較。'
          },
          {
            title: 'Trend & Report Support',
            description: '資料結構會配合趨勢檢視、報表整理與跨部門分析使用。'
          },
          {
            title: 'Redundancy',
            description: '本地與遠端存取架構會一起考量，降低單點失效風險。'
          },
          {
            title: 'Compliance Readiness',
            description: '讓合規、品質與追蹤需求有更穩定的資料基礎可依循。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '能力範圍',
        items: [
          {
            title: '歷史資料保留架構',
            paragraphs: [
              '我們協助規劃資料保留策略與架構，讓長期製程紀錄能被穩定保存與檢索。'
            ]
          },
          {
            title: '趨勢分析與報表應用支撐',
            paragraphs: [
              '架構設計會配合趨勢比較、例行報表與跨部門使用情境，而不是只考慮資料寫入。'
            ]
          },
          {
            title: '本地冗餘與遠端可取用性',
            paragraphs: [
              '透過本地冗餘與遠端存取設計，提升資料韌性，同時維持日常查詢便利性。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '摘要',
        paragraphs: [
          'Historian 平台的核心，不只是留下資料，而是讓資料在之後的分析、報表、稽核與決策中仍然可用。',
          '雷力科技以長期保留、可查詢性與冗餘設計為主軸，協助客戶建立更穩定的歷史資料環境。'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: '工業網路設計服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃工業通訊網路架構，讓控制流量、現場設備與資料系統都能在更清楚、可維護且具韌性的結構下運作。'
    },
    heroTitle: '工業網路設計服務｜Network Design',
    heroFocusItems: ['網路邊界與拓樸清楚', '區隔與韌性並重', '後續擴充更容易'],
    introParagraphs: [
      '雷力科技規劃工業通訊網路架構，讓控制流量、現場設備與資料系統都能在更清楚、可維護且具韌性的結構下運作。',
      '我們重視區隔、可靠度與後續支援性，讓網路能隨著廠區成長，而不是成為限制。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt: '網路設備與連接線材近景',
        layout: 'image-left',
        title: '先把拓樸與邊界設計清楚，後續自動化整合才有可靠地基',
        paragraphs: [
          '工業網路不是只把設備連起來，而是要把控制流量、資料流與支援需求分清楚，才能在問題發生時快速定位與處理。',
          '雷力科技會把可維護性、區隔與擴充性一起納入規劃，避免網路成為後續系統整合的瓶頸。'
        ],
        highlights: ['網路邊界與拓樸清楚', '區隔與韌性並重', '後續擴充更容易']
      },
      {
        type: 'proof-strip',
        title: '設計重點',
        items: [
          {
            title: 'Segmentation Clarity',
            description:
              '把控制、資料與外部連線的邊界先定清楚，降低干擾與風險。'
          },
          {
            title: 'Resilience',
            description:
              '規劃時一併考慮可靠度與故障情境，避免單點失效拖垮整體。'
          },
          {
            title: 'Maintainability',
            description: '讓網路命名、拓樸與設備配置在後續維護時仍易於理解。'
          },
          {
            title: 'Future Expansion',
            description: '保留升級與擴充空間，讓新系統加入時不需推翻原本架構。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '能力範圍',
        items: [
          {
            title: '通訊架構規劃',
            paragraphs: [
              '我們協助整理設備、站點與資料系統的連線關係，建立更容易理解的工業網路架構。'
            ]
          },
          {
            title: '區隔與韌性設計',
            paragraphs: [
              '在設計階段就把區隔、備援與故障情境納入考量，避免網路成為自動化系統的脆弱點。'
            ]
          },
          {
            title: '維護與擴充支援性',
            paragraphs: [
              '讓後續新增設備、資料系統或遠端需求時，有清楚的擴充路徑可依循。'
            ]
          }
        ]
      },
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
    heroFocusItems: ['跨據點可視性', '資料連續性', '突發狀況復原準備'],
    introParagraphs: [
      '雷力科技協助建立遠端可視化與資料持續性流程，降低復原風險，支援跨據點營運與資訊不中斷。',
      '這類方案能幫助團隊掌握狀態、保護紀錄，並在突發狀況發生時更快採取行動。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: '多螢幕遠端監控工作站',
        layout: 'image-right',
        title: '遠端可視與資料連續性必須一起規劃，才不會只剩單點監看',
        paragraphs: [
          '遠端監控若缺少資料持續性與備援規劃，往往在真正需要回溯或復原時才暴露斷點。',
          '雷力科技會把跨據點監看、紀錄保護與異常回應節奏一併納入設計，讓遠端作業更可依賴。'
        ],
        highlights: ['跨據點可視性', '資料連續性', '突發狀況復原準備']
      },
      {
        type: 'proof-strip',
        title: '應用證據',
        items: [
          {
            title: 'Cross-Site Visibility',
            description: '讓多據點或遠端站點的關鍵狀態可以被統一掌握。'
          },
          {
            title: 'Record Continuity',
            description:
              '把監看與資料保存一起規劃，避免只看到當下、卻留不住紀錄。'
          },
          {
            title: 'Recovery Readiness',
            description: '在復原或事件追查時，有更完整的資料與狀態可依循。'
          },
          {
            title: 'Remote Access Control',
            description:
              '遠端可視化與存取方式會配合實際營運需求與風險控制來設計。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: '常見應用',
        columns: 3,
        items: [
          {
            title: '跨據點監看',
            description: '讓營運與工程端不用到現場，也能掌握重要站點狀態。'
          },
          {
            title: '資料備援',
            description: '避免單點儲存造成紀錄遺失或復原困難。'
          },
          {
            title: '事件追蹤',
            description: '保留關鍵歷程，支援異常回顧與後續改善。'
          },
          {
            title: '營運連續性',
            description: '在遠端或突發情境下仍能維持資訊取得與判斷節奏。'
          }
        ]
      },
      {
        type: 'summary',
        title: '摘要',
        paragraphs: [
          '遠端監控與資料備援的核心，在於把可視化、紀錄保護與復原準備放進同一套設計邏輯。',
          '雷力科技協助客戶降低跨據點營運風險，並讓重要資料在需要時仍能被取用。'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: '告警監控服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助建立告警監控策略，提升自動化現場的反應速度、操作可視性與日常判斷效率。'
    },
    heroTitle: '告警監控服務｜Alarm Monitoring',
    heroFocusItems: ['告警優先順序清楚', '操作端更快理解', '降低噪音與誤判'],
    introParagraphs: [
      '雷力科技協助建立告警監控策略，提升自動化現場的反應速度、操作可視性與日常判斷效率。',
      '我們重視的是讓告警邏輯更容易管理，讓團隊在正確時機對正確條件做出回應。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt: '監控螢幕顯示告警與狀態資訊',
        layout: 'image-left',
        title: '讓告警訊號能被看見、被理解、被正確排序處理',
        paragraphs: [
          '告警太多、太雜或缺少優先順序時，現場往往不是看不到問題，而是不知道哪個問題該先處理。',
          '雷力科技會協助整理告警條件、通知邏輯與操作端畫面呈現，讓反應更快也更一致。'
        ],
        highlights: ['告警優先順序清楚', '操作端更快理解', '降低噪音與誤判']
      },
      {
        type: 'proof-strip',
        title: '應用重點',
        items: [
          {
            title: 'Response Speed',
            description: '讓真正需要介入的狀態更快被辨識與處理。'
          },
          {
            title: 'Prioritization Clarity',
            description: '把告警分級與排序建立清楚，減少資訊噪音。'
          },
          {
            title: 'Operational Awareness',
            description: '讓操作端知道每一則告警與設備、流程之間的關聯。'
          },
          {
            title: 'Reduced Noise',
            description:
              '透過更好的邏輯整理，減少重複、無效或難以採取行動的告警。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '能力範圍',
        items: [
          {
            title: '告警條件與分級整理',
            paragraphs: [
              '協助建立更容易理解與維護的告警邏輯，讓現場知道哪些狀況需要優先處理。'
            ]
          },
          {
            title: '通知與回應流程設計',
            paragraphs: [
              '把通知節奏與處理責任整理清楚，避免告警發生後仍要花時間判斷誰該接手。'
            ]
          },
          {
            title: '畫面與事件脈絡整合',
            paragraphs: [
              '讓操作端能在畫面中快速理解告警與設備、流程、下一步動作的關聯。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '告警監控做得好，現場處理的不是更多訊息，而是更少的猶豫與更快的正確反應。'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
