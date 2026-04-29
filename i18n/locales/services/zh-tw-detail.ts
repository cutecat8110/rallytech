/* eslint-disable @stylistic/quote-props */
import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: '服務項目',
  contactHeading: '聯絡我們'
} as const

export const serviceDetailPagesZhTw = {
  'scada-hmi-graphics': {
    seo: {
      title: 'SCADA / HMI 圖控 | Rally Technology',
      description:
        '雷力科技規劃 SCADA / HMI、WinCC OA 與 AVEVA System Platform 類畫面，讓現場更快看懂狀態、告警與操作動作。'
    },
    heroFocusItems: [],
    introParagraphs: [
      'SCADA / HMI 圖控把現場設備、流程狀態、告警、趨勢與操作動作整理成操作端能判讀的畫面。',
      '雷力協助專案團隊規劃畫面層級、告警脈絡與命名規則，讓系統在試車、日常操作與後續擴充時保持一致。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'scada-hmi-graphics',
        imageAlt: '工程人員檢視工業監控畫面',
        layout: 'image-right',
        title: '讓操作端更快看懂現場狀態',
        paragraphs: [
          '好的圖控不是把所有資料塞進同一張畫面，而是讓操作人員在正常運轉、異常告警與交接時，都能快速知道目前狀態、影響範圍與下一步動作。',
          '我們會依流程、設備與使用角色安排畫面結構，讓 SCADA / HMI 不只是監看介面，而是現場判斷與操作協調的共同語言。'
        ],
        highlights: ['狀態判讀', '告警脈絡', '操作動線']
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '從畫面架構到維護規則一起規劃',
        items: [
          {
            title: '畫面層級',
            description:
              '依流程、設備與操作角色安排 overview、單元畫面與細節畫面，避免資訊堆疊。'
          },
          {
            title: '告警脈絡',
            description:
              '讓告警、趨勢與設備狀態能互相對照，協助現場判斷影響範圍與處置順序。'
          },
          {
            title: '命名與圖形規則',
            description:
              '建立 tag、設備名稱、顏色與圖形使用規則，降低後續擴充與維護成本。'
          },
          {
            title: '平台與交付銜接',
            description:
              '配合 WinCC OA、AVEVA System Platform 等平台條件，整理畫面交付與維護方式。'
          }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: false,
        title: '適合提早整理的 SCADA / HMI 情境',
        items: [
          {
            title: '新系統建置',
            description: '在設計初期就定義畫面架構、操作邏輯與告警呈現。'
          },
          {
            title: '既有畫面重整',
            description:
              '既有畫面可使用，但資訊層級、顏色、命名或操作動線需要一致化。'
          },
          {
            title: '告警資訊太零散',
            description:
              '操作端收到告警，卻不容易看出設備關聯、影響範圍與處置順序。'
          },
          {
            title: '點位持續擴充',
            description: '系統新增設備與 tags 後，仍要讓畫面可閱讀、可維護。'
          }
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: '儀電整合 | Rally Technology',
      description:
        '雷力科技提供 I&E 現場支援，協助 FAT / SAT、回路確認、啟動與排障更順利接軌。'
    },
    heroFocusItems: [],
    introParagraphs: [
      'I&E 支援把現場訊號、儀表、電力與試車節點放回同一條工作線，讓問題能在施工、測試與啟動之間被追蹤。',
      '雷力協助專案團隊銜接 FAT / SAT、回路確認、現場排障與啟動支援，讓跨團隊協調更容易收斂。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'ie-services',
        imageAlt: '工業控制盤與儀電設備近景',
        layout: 'image-left',
        title: '讓現場支援真正推動試車進度',
        paragraphs: [
          'I&E 服務的價值不只在單點處理儀表或電氣問題，而是在測試、缺失收斂與啟動階段，讓各項現場工作能連續往前。',
          '我們會把訊號、回路、設備狀態與現場回應整理成可追蹤的節奏，協助團隊更快定位問題並完成交接。'
        ],
        highlights: ['FAT / SAT', '回路確認', '現場排障']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: '現場支援的重點',
        items: [
          {
            title: '測試前準備',
            description:
              '讓測試條件、文件、訊號與現場窗口在 FAT / SAT 前先對齊。'
          },
          {
            title: '問題快速定位',
            description: '把訊號異常、設備反應與控制邏輯放在同一個脈絡判斷。'
          },
          {
            title: '缺失收斂',
            description: '協助團隊追蹤 punch list、修正狀態與驗收前的剩餘風險。'
          }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '把測試、啟動與現場問題放在同一條工作線',
        items: [
          {
            title: 'FAT / SAT 支援',
            description:
              '協助測試前準備、測試中問題確認與測試後缺失收斂，讓驗證結果能接上現場作業。'
          },
          {
            title: '現場故障排除',
            description:
              '針對訊號異常、設備狀態與操作回應進行定位，縮短現場等待與來回確認時間。'
          },
          {
            title: '儀表與電力支援',
            description:
              '支援儀表安裝校正、電力系統分析與電力計量部署，讓現場基礎條件更穩定。'
          },
          {
            title: '系統與安全銜接',
            description:
              '配合氣體分析、安全系統與控制平台需求，讓 I&E 工作能和整體系統交付一致。'
          }
        ]
      },
      {
        type: 'quote',
        quote:
          '現場問題很少只屬於單一設備。越早把訊號、回路、控制邏輯與驗收節點放在一起看，試車越容易收斂。',
        attribution: 'Rally Technology I&E project team'
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '需要現場協調與快速收斂時，I&E 支援應提早進場',
        paragraphs: [
          '當 FAT / SAT、啟動或驗收節點接近，或訊號、回路、儀表與控制系統之間的問題需要跨團隊釐清時，提早納入 I&E 支援能降低現場等待與反覆確認。'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: 'PLC / DCS 程式與搬遷 | Rally Technology',
      description:
        '雷力科技支援 PLC / DCS 程式開發、搬遷規劃與分階段切換，協助運轉中系統平穩升級。'
    },
    heroFocusItems: [],
    introParagraphs: [
      'PLC / DCS 程式開發與搬遷通常發生在系統仍要運轉的情境，因此重點不是只把邏輯搬過去，而是讓切換路徑可執行、風險可控制。',
      '雷力協助盤點既有邏輯、停機限制與相依設備，規劃可驗證、可回復、後續也容易維護的控制系統更新方式。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageRole: 'detail-feature',
        imageAlt: '工程師以筆電檢視控制系統設定',
        layout: 'image-right',
        title: '把程式變更放進真實停機窗口裡規劃',
        paragraphs: [
          '控制系統搬遷牽涉既有邏輯、設備相依性、操作習慣與回切條件，若只從程式角度處理，很容易在切換時放大現場風險。',
          '我們會先確認運轉基線與切換邊界，再安排測試、分階段導入與回復準備，讓升級過程更可控。'
        ],
        highlights: ['分階段切換', '停機控制', '回復準備']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '搬遷前必須先看清楚的風險',
        items: [
          {
            title: '既有邏輯不是黑盒',
            description:
              '先整理命名、模組關係與相依設備，避免新系統承接舊問題。'
          },
          {
            title: '停機窗口有限',
            description: '把切換拆成可測試、可驗證、可回復的單元。'
          },
          {
            title: '交接要能延續',
            description: '版本、測試紀錄與維護依據需在搬遷後留下清楚基線。'
          }
        ]
      },
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageRole: 'overview-card',
        imageAlt: 'PLC 控制盤與現場設備',
        layout: 'image-left',
        title: '讓控制邏輯在切換前後都能被理解',
        paragraphs: [
          '程式開發、修改與搬遷不只交付可運轉的邏輯，也要讓後續操作、維護與擴充能接得上。',
          '雷力在規劃時會同步考量 I/O、操作流程、異常條件與文件基線，讓新舊系統之間有可追蹤的轉換路徑。'
        ],
        highlights: ['I/O 對照', '異常條件', '版本基線']
      },
      {
        type: 'process-steps',
        eyebrow: false,
        title: '依停機風險安排的導入節奏',
        items: [
          {
            title: '盤點既有基線',
            description: '確認現行程式、I/O、操作流程、設備相依與現場限制。'
          },
          {
            title: '規劃分階段切換',
            description: '將搬遷內容拆成可測試、可驗證、可回復的切換單元。'
          },
          {
            title: '執行與驗證',
            description: '依停機窗口完成切換、測試與異常處理，保留可追蹤紀錄。'
          },
          {
            title: '穩定新基線',
            description: '完成交接、版本整理與後續維護依據，讓團隊能延續管理。'
          }
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: 'PI Server | Rally Technology',
      description:
        '雷力科技以 PI Server / PI System 建立工廠資料平台，支援監看、報表、工業分析與跨系統使用。'
    },
    heroFocusItems: [],
    introParagraphs: [
      'PI Server 的重點不是把更多 tags 收進平台，而是讓工廠資料進來之後能被查詢、報表、分析與跨系統使用。',
      '雷力協助整理資料來源、命名規則與使用情境，讓 PI System 成為團隊能長期接上的資料骨幹。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'pi-server',
        imageRole: 'detail-feature',
        imageAlt: '工業資料設備於伺服器環境中的近景',
        layout: 'image-left',
        title: '讓工廠資料更容易被使用',
        paragraphs: [
          '即時資料平台真正被需要時，往往是不同團隊要看同一批資料、追同一個趨勢，或把現場資訊接到報表與其他系統。',
          '我們會把 tags、來源、命名與資料脈絡整理好，避免平台只累積資料，卻難以被日常工作使用。'
        ],
        highlights: ['資料骨幹', '命名脈絡', '報表整合']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: 'PI System 建置時的重點',
        items: [
          {
            title: '可查詢',
            description:
              '資料命名、描述與設備關係需要讓不同角色找得到、看得懂。'
          },
          {
            title: '可報表',
            description: '日常監看、趨勢與管理報表應能共用一致資料基礎。'
          },
          {
            title: '可整合',
            description: '平台資料要能支援後續分析、應用系統或跨部門使用。'
          }
        ]
      },
      {
        type: 'accordion',
        eyebrow: '常見用途',
        title: 'PI Server 常見導入用途',
        items: [
          {
            title: '日常監看與趨勢檢視',
            paragraphs: [
              '將現場即時資料整理成可查詢的趨勢與狀態紀錄，支援操作與工程判斷。'
            ]
          },
          {
            title: '報表與營運資料整合',
            paragraphs: [
              '把原本分散在控制系統、Excel 或人工彙整流程中的資料，接到更穩定的報表基礎。'
            ]
          },
          {
            title: '跨系統資料使用',
            paragraphs: [
              '為後續 MES、能源管理、分析平台或內部應用建立一致的工廠資料來源。'
            ]
          }
        ],
        note: '實際範圍會依既有系統、資料品質與使用角色規劃。'
      },
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'pi-server',
        imageRole: 'overview-card',
        imageAlt: '伺服器機櫃與資料平台設備',
        layout: 'image-right',
        title: '從資料來源到使用情境一起整理',
        paragraphs: [
          'PI Server 的長期價值來自資料能被持續使用，而不是一次性完成接點。',
          '雷力會協助定義資料接入優先順序、tag 命名、設備關聯與報表需求，讓平台在點位成長後仍維持可管理。'
        ],
        highlights: ['資料接入', 'tag 命名', '平台維護']
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '當資料開始跨團隊使用，就需要先整理平台基線',
        paragraphs: [
          '若現場資料分散在多個系統、報表仰賴人工整理，或後續準備導入分析與應用整合，PI Server 的資料架構、命名與治理規則就應該提早規劃。'
        ]
      }
    ]
  },
  historians: {
    seo: {
      title: 'Historians | Rally Technology',
      description:
        '雷力科技規劃 historian 架構，支援長期紀錄、趨勢比較、追溯、報表與能源場域資料保存。'
    },
    heroFocusItems: [],
    introParagraphs: [
      'Historian 的價值在於時間拉長之後，製程、品質或能源資料仍然找得到、比得出來，也能說明當時發生了什麼。',
      '雷力協助規劃資料保存、存取與備援方式，讓長期紀錄不只是備份，而是能被營運與分析持續使用的資料資產。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'historians',
        imageRole: 'detail-feature',
        imageAlt: '歷史資料平台伺服器設備',
        layout: 'image-right',
        title: '把長期紀錄變成可追溯的營運資料',
        paragraphs: [
          '當問題在數週、數月或數年後才被追問，資料需要能被找回、比對，也能支援團隊說清楚當時的條件。',
          'Historian 架構需要同時考量資料量、保存週期、報表需求、存取方式與備援策略。'
        ],
        highlights: ['長期保存', '趨勢比較', '備援存取']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '長期資料平台要守住的事',
        items: [
          {
            title: '追溯',
            description: '能回看過去事件、製程狀態與品質條件。'
          },
          {
            title: '比較',
            description: '能跨時間檢視趨勢、能耗、效率或異常變化。'
          },
          {
            title: '保存',
            description: '能依營運與稽核需求維持資料可用性與備援。'
          }
        ]
      },
      {
        type: 'accordion',
        eyebrow: '常見用途',
        title: 'Historian 常見用途',
        items: [
          {
            title: '製程追溯',
            paragraphs: [
              '回看特定時間的製程狀態、警報、設備條件與事件前後變化。'
            ]
          },
          {
            title: '趨勢與效率分析',
            paragraphs: [
              '比較不同週期的產能、能耗或關鍵參數，支援改善與管理判斷。'
            ]
          },
          {
            title: '報表與稽核資料',
            paragraphs: ['將長期紀錄整理成可查詢、可匯出、可交付的報表依據。']
          },
          {
            title: '資料保留與備援',
            paragraphs: ['依資料量、保存週期與重要性規劃儲存、備份與復原方式。']
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '當資料需要被長期查詢與說明，historian 架構就要提早規劃',
        paragraphs: [
          '資料保存不是容量問題而已。只要團隊需要長期趨勢、品質追溯、能源分析或稽核報表，就應先規劃保存週期、查詢方式、備援與交接規則。'
        ]
      }
    ]
  },
  'it-infrastructure': {
    seo: {
      title: 'IT 建置 | Rally Technology',
      description:
        '雷力科技協助規劃企業 IT 架構、伺服器、儲存與虛擬化資源，建立穩定且具擴展性的營運基礎。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '建立穩定且具擴展性的 IT 架構，讓系統長期支撐企業營運。',
      '透過完整的架構規劃與分階段導入，整合伺服器、儲存與虛擬化資源，提升系統穩定性與管理效率，並確保未來擴充彈性。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'it-infrastructure',
        imageAlt: '工程師檢查資料中心機櫃中的伺服器設備',
        layout: 'image-right',
        title: '建立能長期支撐營運的 IT 底座',
        paragraphs: [
          '企業 IT 環境的設計，已從單純設備部署轉變為影響營運穩定與服務品質的關鍵因素。',
          '我們以系統整體生命週期為核心，從架構設計、建置導入到後續維運整合，協助企業建立高可用、可擴展且具備韌性的 IT 基礎環境。'
        ],
        highlights: ['架構穩定可靠', '系統整合簡化', '支援未來擴充']
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '核心項目',
        items: [
          {
            title: 'IT 整體架構規劃',
            description:
              '整合 Compute / Storage / Network 條件，建立可維護的架構基礎。'
          },
          {
            title: '虛擬化與資源整合平台建置',
            description: '提升資源使用效率、管理可視性與後續擴充彈性。'
          },
          {
            title: '高可用與備援設計',
            description: '規劃 HA / DR 機制，降低單點故障與營運中斷風險。'
          },
          {
            title: '跨系統整合與效能優化',
            description: '讓新舊系統導入、驗證與維運銜接更平順。'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '服務價值',
        items: [
          {
            title: '企業等級穩定性',
            description: '建立具備企業等級穩定性的 IT 基礎架構。'
          },
          {
            title: '降低營運風險',
            description: '降低系統單點故障與營運中斷風險。'
          },
          {
            title: '提升管理可視性',
            description: '提升資源整合效率與管理可視性。'
          },
          { title: '支撐業務成長', description: '支撐未來業務成長與系統擴展。' }
        ]
      },
      {
        type: 'process-steps',
        eyebrow: '導入方式',
        title: '以現況盤點與分階段驗證降低導入風險',
        items: [
          {
            title: '現況盤點',
            description: '確認既有設備、容量、效能瓶頸與維運限制。'
          },
          {
            title: '標準化架構設計',
            description: '建立伺服器、儲存、網路與虛擬化資源的目標架構。'
          },
          {
            title: '分階段導入與驗證',
            description: '確保新舊系統平順銜接並降低導入風險。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '新建機房、系統老化或準備導入虛擬化時，應先整理 IT 基礎架構',
        paragraphs: [
          '當企業準備新建 IT 環境、處理系統老化或效能瓶頸，或導入虛擬化與備援機制時，應先確立架構、容量與維運基線。'
        ]
      }
    ]
  },
  'cybersecurity-network': {
    seo: {
      title: '資安網路建置 | Rally Technology',
      description:
        '雷力科技以分層防禦、Zero Trust、VPN、IAM 與弱點掃描協助企業建立可控且可視的安全網路環境。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '建立分層防禦與存取控管機制，全面降低企業資安風險。',
      '透過網路分段、零信任架構與弱點掃描機制，持續檢視與強化資安防護能力，讓企業從被動防禦提升至主動風險管理。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'cybersecurity-network',
        imageAlt: '工程師檢視核心交換器與資安網路設備',
        layout: 'image-left',
        title: '把資安防護建立在可控的網路架構上',
        paragraphs: [
          '現代企業的資安防護，必須建立在網路架構之上，而非單一設備防禦。',
          '我們以分層防禦（Defense in Depth）與零信任（Zero Trust）為設計原則，協助企業打造具備可控性與可視性的安全網路環境。'
        ],
        highlights: ['網路分段控管', '降低攻擊風險', '持續弱點檢測']
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '核心項目',
        items: [
          {
            title: 'IT / OT Segmentation',
            description: '重新定義網路邊界、區段與存取控管。'
          },
          {
            title: '進階威脅防護',
            description: '整合防火牆、IPS 與 Threat Protection 能力。'
          },
          {
            title: 'VPN 安全架構',
            description: '建立 Site-to-Site 與 Remote Access 的安全連線架構。'
          },
          {
            title: '身分與存取管理',
            description: '導入 IAM 機制，強化身分、權限與存取控管。'
          },
          {
            title: 'Zero Trust 架構',
            description: '規劃與導入零信任架構，降低過度信任帶來的風險。'
          },
          {
            title: '弱點掃描與風險評估',
            description: '持續執行弱點掃描與風險評估，強化主動風險管理。'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '服務價值',
        items: [
          {
            title: '降低橫向移動風險',
            description: '降低內部滲透與攻擊擴散機會。'
          },
          {
            title: '建立安全邊界',
            description: '讓網路邊界、權限與流量關係可視且可控。'
          },
          {
            title: '提升防護與應變',
            description: '提升整體資安防護層級與應變能力。'
          },
          {
            title: '支援遠端作業',
            description: '支援跨據點與遠端作業安全需求。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '當網路未分段、遠端連線增加或面臨稽核要求時，資安架構應優先整理',
        paragraphs: [
          '透過流量分析與風險評估，重新定義網路邊界與信任模型，並逐步導入分段與存取控管策略，在不影響既有服務的前提下完成轉型。'
        ]
      }
    ]
  },
  'offshore-wind-operations': {
    seo: {
      title: '離岸風場維運 | Rally Technology',
      description:
        '雷力科技協助離岸風場建立安全遠端連線、SCADA / PLC / HMI 維運支援、OT 監測與告警事件處理流程。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '在高限制環境中，建立安全且可遠端操作的維運管理機制。',
      '透過安全連線與監控系統整合，讓離岸風場在有限人力條件下仍能即時處理異常，確保設備穩定運作並降低維運成本。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'offshore-wind-operations',
        imageAlt: '離岸風場與海上電力基礎設施',
        layout: 'image-right',
        title: '為高風險、低可達性的場域建立遠端維運基線',
        paragraphs: [
          '離岸風場屬於高風險、低可達性的特殊場域，系統維運需同時兼顧穩定性、安全性與即時性。',
          '我們結合 OT 系統經驗與資安架構能力，提供專為離岸風場設計的遠端維運解決方案。'
        ],
        highlights: ['遠端安全操作', '即時故障處理', '降低現場風險']
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '核心項目',
        items: [
          {
            title: 'Secure Remote Access',
            description: '設計安全遠端連線架構、權限與操作紀錄。'
          },
          {
            title: 'SCADA / PLC / HMI 維運支援',
            description: '支援遠端可視、問題分析與維護回應。'
          },
          {
            title: 'OT 網路與設備狀態監測',
            description: '掌握關鍵風電系統與設備運作狀態。'
          },
          {
            title: '告警事件遠端分析與處理',
            description: '建立事件判斷、升級與處理流程。'
          },
          {
            title: '維運權限與操作流程控管',
            description: '讓遠端維運具備清楚權限、操作流程與追蹤依據。'
          }
        ]
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '服務價值',
        items: [
          {
            title: '降低現場維運風險',
            description: '大幅降低人員往返與現場維運風險。'
          },
          {
            title: '提升反應速度',
            description: '提升故障診斷與處理反應速度。'
          },
          {
            title: '穩定關鍵風電系統',
            description: '確保關鍵風電系統穩定運作。'
          },
          {
            title: '符合資安要求',
            description: '建立符合資安要求的遠端維運機制。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '離岸風場、偏遠場域或集中 OT 管理需求，應提早建立遠端維運機制',
        paragraphs: [
          '透過安全通道與權限控管設計，整合 SCADA 與網路監控系統，建立可遠端操作、可監控且可追蹤的維運體系。'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: '工業網路設計 | Rally Technology',
      description:
        '雷力科技依 Core / Control / Field 分層模型規劃工業網路，提升通訊穩定並降低系統與資安風險。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '透過分層與隔離設計，確保設備穩定運作並降低通訊風險。',
      '依據 Core / Control / Field 分層模型設計網路架構，提升通訊效率與穩定性，同時降低系統異常與資安風險。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'network-design',
        imageRole: 'detail-feature',
        imageAlt: '工業網路設備與線纜',
        layout: 'image-left',
        title: '先定義控制層級，再設計通訊路徑',
        paragraphs: [
          '工業網路是連結設備、控制系統與監控平台的關鍵基礎，其設計直接影響生產穩定性與安全性。',
          '我們依據工業通訊特性與資安需求，設計高可靠且具備隔離能力的網路架構。'
        ],
        highlights: ['分層架構清晰', '設備通訊穩定', '降低系統風險']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '工業網路設計的服務價值',
        items: [
          {
            title: '穩定不中斷',
            description: '確保生產系統穩定與不中斷。'
          },
          {
            title: '降低通訊風險',
            description: '降低設備異常與通訊風險。'
          },
          {
            title: '強化資安防護',
            description: '強化工業環境資安防護能力。'
          },
          {
            title: '可管理且可擴展',
            description: '提供可管理且可擴展的網路架構。'
          }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '核心項目',
        items: [
          {
            title: '分層式架構設計',
            description: '依 Core / Control / Field 設計工業網路拓撲。'
          },
          {
            title: 'IT / OT 網路分段與隔離',
            description: '定義區段、邊界與通訊路徑。'
          },
          {
            title: '高可用性與備援拓撲',
            description: '降低單點故障與通訊中斷風險。'
          },
          {
            title: '通訊延遲與封包優化',
            description: '改善設備通訊效率與穩定性。'
          },
          {
            title: '工業資安防護整合',
            description: '將資安防護納入工業網路架構，降低系統異常與資安風險。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title: '新建產線、網路混亂或設備通訊不穩時，應先重整工業網路架構',
        paragraphs: [
          '依據現場設備與通訊需求進行盤點，建立標準化網路拓撲，並透過分段與測試機制逐步導入，避免影響生產運作。'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: '遠端監控與資料備援 | Rally Technology',
      description:
        '雷力科技協助建立遠端監看、infrastructure monitoring 與資料連續性流程，支援分散據點、油氣場域與關鍵紀錄保存。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '遠端監控與資料備援要同時回答三件事：看得到、傳得回，異常後還查得到。',
      '雷力把可視化、資料延續與復原準備一起規劃，協助分散據點、油氣場域與關鍵基礎設施降低監控中斷與資料遺失風險。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: '多螢幕遠端監控工作站',
        layout: 'image-right',
        title: '遠端可視化要和資料延續一起規劃',
        paragraphs: [
          '遠端監看真正有壓力的時候，不只是看得到畫面，而是還能查狀態、拿紀錄、做復原判斷。',
          '我們協助整理資料回傳、監控介面、存取邊界與備援流程，讓團隊在異常發生時能更快掌握狀況。'
        ],
        highlights: ['跨據點可視', '資料連續性', '復原準備']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: '遠端場域需要一起考量',
        items: [
          {
            title: '可視',
            description:
              '跨據點掌握設備狀態、系統資訊與 infrastructure monitoring。'
          },
          {
            title: '可留',
            description: '關鍵紀錄能持續保存，降低資料中斷與遺失風險。'
          },
          { title: '可回復', description: '異常後能取得狀態、紀錄與復原依據。' }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: false,
        columns: 2,
        title: '適合導入遠端監控與資料備援的場景',
        items: [
          {
            title: '跨據點監看',
            description: '多個場域需要一致方式掌握狀態與異常。'
          },
          {
            title: '資料備援需求',
            description: '關鍵紀錄需要延續保存，避免中斷後無法追溯。'
          },
          {
            title: '偏遠或油氣場域',
            description: '到場成本高，需要遠端判斷與維運支援。'
          },
          {
            title: '營運連續性規劃',
            description: '需要把監控、紀錄與復原準備一起納入系統設計。'
          }
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: '告警監控 | Rally Technology',
      description:
        '雷力科技整合告警監控、即時通知、趨勢分析與維運流程，協助 IT / OT 團隊建立可持續維護的 industrial alarm notification system。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '建立告警路由與升級流程，協助團隊快速回應真正需要處理的事件。',
      '重點在告警優先順序與事件升級邏輯，讓操作端減少時間處理雜訊，將更多資源投入在關鍵問題的判斷與處理。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'alarm-monitoring',
        imageAlt: '監控螢幕顯示告警與狀態資訊',
        layout: 'image-left',
        title: '把告警、事件與維運流程接在一起',
        paragraphs: [
          '在 IT 與 OT 整合環境中，缺乏統一監控與告警機制，將導致問題無法即時掌握。',
          '我們提供跨系統的監控與告警整合，建立可視化且具備分析能力的維運管理平台。'
        ],
        highlights: ['優先順序清楚', '事件快速處理', '降低告警噪音']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        tone: 'dark',
        title: '告警系統要讓團隊更快判斷',
        items: [
          {
            title: '即時掌握狀態',
            description: '即時掌握系統與設備運作狀態。'
          },
          { title: '縮短處理時間', description: '縮短故障定位與處理時間。' },
          {
            title: '提升維運效率',
            description: '提升維運效率與服務品質。'
          },
          { title: '數據驅動維運', description: '建立數據驅動的營運決策能力。' }
        ]
      },
      {
        type: 'capability-list',
        eyebrow: false,
        title: '核心項目',
        items: [
          {
            title: 'IT / OT 設備整合監控',
            description: '整合設備、系統狀態與效能資訊。'
          },
          {
            title: '即時告警與事件通知',
            description: '建立告警優先順序、通知與事件升級機制。'
          },
          {
            title: '歷史數據與趨勢分析',
            description: '結合歷史數據與趨勢分析，支援狀態回看與判斷。'
          },
          {
            title: '效能監測與異常偵測',
            description: '持續觀察效能變化與異常訊號，協助團隊提早發現問題。'
          },
          {
            title: '維運流程與事件管理整合',
            description: '整合事件管理與權限控管，讓維運回應能被追蹤。'
          },
          {
            title: '弱點掃描結果整合與風險追蹤',
            description: '把弱點掃描結果納入維運脈絡，持續追蹤風險處理狀態。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '適用時機',
        title:
          '系統異常難以即時發現、缺乏集中告警或維運仰賴人工時，告警流程應先重整',
        paragraphs: [
          '整合多系統數據來源，建立統一監控平台與告警邏輯，並結合維運流程與權限控管，形成完整的運維體系。'
        ]
      }
    ]
  },
  'web-development': {
    seo: {
      title: '網頁開發 | Rally Technology',
      description:
        '雷力科技提供客製化網頁開發服務，依據品牌定位、營運流程與實際使用情境，規劃網站架構、介面流程與技術實作。'
    },
    heroFocusItems: [],
    introParagraphs: [
      '雷力科技提供客製化的網頁開發服務，從企業官網、產品服務頁、會員入口到後台管理系統，依據品牌定位、營運流程與實際使用情境，規劃網站架構、介面流程與技術實作，讓網站不只是展示頁面，而是能真正支撐業務與管理的數位平台。',
      '我們採用業界頂尖規格標準進行前端、後端、資料整合、測試與部署，兼顧效能、安全性、維護性與後續擴充彈性。無論是新建網站、舊站改版或功能升級，都能在一致架構下穩定推進。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        eyebrow: false,
        mediaSlot: 'web-development',
        imageAlt: '桌機與筆電顯示網站介面及開發工作畫面',
        layout: 'image-right',
        title: '網頁開發的重點，是讓企業網站真正成為可持續運作的數位平台',
        paragraphs: [
          '好的網頁開發，不只是把畫面做出來，而是讓品牌呈現、內容管理、互動流程與系統資料能在同一個平台上長期穩定運作。',
          '我們會先釐清資訊架構、使用情境與系統邊界，再整合前端、後端、後台流程與外部串接，讓網站在內容增加、功能擴充或需要連接其他系統時，仍然保持一致、清楚且易於管理。'
        ],
        highlights: ['貼合企業需求', '前後端整合完整', '穩定上線且可持續擴充']
      },
      {
        type: 'proof-strip',
        eyebrow: false,
        title: '重點項目',
        items: [
          {
            title: '商業貼合架構',
            description:
              '依企業品牌、服務內容與實際流程規劃網站結構，不以制式模板限制需求。'
          },
          {
            title: '前後端整合',
            description:
              '同步建置頁面、功能、後台與資料流程，讓網站真正具備營運支撐能力。'
          },
          {
            title: '標準化交付',
            description:
              '採用主流框架、版本控管、測試與部署流程，提升品質、安全與維護效率。'
          },
          {
            title: '擴充與維護',
            description:
              '預留未來新增頁面、語系、模組與系統整合的空間，避免每次調整都需要重做。'
          }
        ]
      },
      {
        type: 'process-steps',
        eyebrow: '承接內容與做法',
        title: '從需求梳理到上線後維護一起規劃',
        items: [
          {
            stepLabel: '01',
            title: '需求梳理與架構規劃',
            description:
              '先確認目標受眾、內容層級、功能需求與資料邊界，再進入設計與開發。'
          },
          {
            stepLabel: '02',
            title: '介面設計與響應式體驗',
            description: '讓網站在桌機與行動裝置上都保持清楚、一致且易於使用。'
          },
          {
            stepLabel: '03',
            title: '前後端建置',
            description:
              '整合前台頁面、商業邏輯、資料處理與後台管理，形成完整可運作的系統。'
          },
          {
            stepLabel: '04',
            title: '後台與內容流程設計',
            description:
              '協助企業在上線後更有效率地更新內容、維護資料與管理日常操作。'
          },
          {
            stepLabel: '05',
            title: 'API 與系統串接',
            description:
              '依需求整合表單、會員、CRM、ERP 或其他內外部系統，讓資料流更順暢。'
          },
          {
            stepLabel: '06',
            title: '測試、部署與成長規劃',
            description:
              '在上線前建立驗證機制，也為後續擴充與維運預留穩定基礎。'
          }
        ]
      },
      {
        type: 'card-grid',
        eyebrow: '實務焦點',
        columns: 2,
        title: '常見支援情境',
        items: [
          {
            title: '企業官網建置',
            description: '完整呈現品牌形象、服務內容與聯絡入口。'
          },
          {
            title: '產品與服務頁',
            description: '更清楚地說明價值、差異與解決方案。'
          },
          {
            title: '會員與後台系統',
            description: '支援帳號機制、管理流程與內容維護需求。'
          },
          {
            title: '活動與專案頁面',
            description: '為特定推廣、招商或活動建立更聚焦的數位頁面。'
          },
          {
            title: '多語系網站',
            description: '讓不同語系內容在一致架構下更容易管理與延伸。'
          },
          {
            title: '商業系統整合',
            description: '讓網站從單純展示延伸為可與營運流程連動的數位入口。'
          }
        ]
      },
      {
        type: 'summary',
        eyebrow: '導入時機',
        title: '適合提早納入的情境',
        paragraphs: [
          '當企業準備建置新官網、改版既有網站、優化數位流程，或需要將網站與會員、表單、CRM、ERP 等系統進一步整合時，就應該提早導入完整的網頁開發規劃。',
          '越早確立架構與資料流，後續的擴充、維護與改版成本就越能被有效控制。'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
