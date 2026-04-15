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
        '雷力科技規劃 SCADA / HMI 畫面，讓現場更快看懂狀態、告警與操作動作。'
    },
    heroFocusItems: ['畫面易判讀', '告警有脈絡', '後續好維護'],
    introParagraphs: [
      '雷力科技規劃 SCADA / HMI 畫面，讓操作端更快看懂狀態、告警與下一步動作。',
      '我們會把畫面層級、命名與導覽一起整理，讓系統在試車、日常操作與後續擴充時都維持一致。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'scada-hmi-graphics',
        imageAlt: '工程人員於控制介面前檢視工業監控畫面',
        layout: 'image-right',
        title: 'SCADA / HMI 畫面要先服務操作判斷',
        paragraphs: [
          '好的圖控不是把更多資料塞進畫面，而是先排出現場要先看什麼、異常時要往哪裡查。',
          '我們把層級、導覽與狀態邏輯一起整理，讓畫面現在好操作，之後新增點位也不容易失序。'
        ],
        highlights: ['畫面易判讀', '告警有脈絡', '後續好維護']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '畫面層級',
            description: '先分清楚狀態、告警與操作，讓操作端不用多找就能判讀。'
          },
          {
            title: '告警脈絡',
            description: '讓告警能連回設備與流程位置，而不是只跳出一個警示。'
          },
          {
            title: '操作動線',
            description: '把常用操作與異常切入點放在更容易抵達的位置。'
          },
          {
            title: '維護規則',
            description: '讓命名與版面規則可持續延伸，不因新增點位而破壞結構。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '層級規劃',
            paragraphs: [
              '協助整理首頁、單元頁與設備頁的閱讀順序，讓不同角色都能快速找到需要的資訊。'
            ]
          },
          {
            title: '告警連結',
            paragraphs: [
              '讓告警不只亮燈，而是能連回設備狀態、流程位置與下一步動作。'
            ]
          },
          {
            title: '命名與延伸',
            paragraphs: [
              '把命名、符號與導覽規則先定清楚，讓後續修改與擴充更容易接手。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'SCADA / HMI 最好在點位與畫面開始擴張前就先納入規劃，避免後續只能靠零碎補丁維持操作。'
        ]
      }
    ]
  },
  'ie-services': {
    seo: {
      title: '儀電整合服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供 I&E 現場支援，協助 FAT / SAT、回路確認、啟動與排障更順利接軌。'
    },
    heroFocusItems: ['現場先就緒', 'FAT / SAT', '啟動支援'],
    introParagraphs: [
      '雷力科技提供 I&E 現場支援，涵蓋 FAT / SAT、回路確認、啟動與現場排障。',
      '重點是讓系統更快進入可施工狀態、問題更快定位，也讓試車決策能在跨團隊之間對齊。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'ie-services',
        imageAlt: '工業控制盤與儀電設備近景',
        layout: 'image-left',
        title: 'I&E 支援要讓現場工作真正往前走',
        paragraphs: [
          'I&E 最怕把測試、啟動、缺失收斂與現場回應拆成各自處理的清單，最後每個環節都在等別人。',
          '我們把驗證節點、故障定位與跨專業交接串成同一條工作節奏，讓啟動更少意外。'
        ],
        highlights: ['現場先就緒', 'FAT / SAT', '啟動支援']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '現場就緒',
            description: '先把啟動條件與驗收節點整理清楚，再往下做儀電協調。'
          },
          {
            title: 'FAT / SAT 收斂',
            description: '讓測試、缺失收斂與試車確認放在同一條工作節奏裡。'
          },
          {
            title: '啟動回應',
            description: '透過回路確認與現場排障，降低啟動窗口的不確定性。'
          },
          {
            title: '跨團隊協調',
            description: '讓儀控、電力、設備與現場窗口用同一組工作重點對齊。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: 'FAT / SAT 支援',
            paragraphs: [
              '協助整理驗證節點與缺失收斂，讓系統在啟動前完成必要確認。'
            ]
          },
          {
            title: '現場故障排除',
            paragraphs: [
              '支援現場快速定位問題、穩定系統，避免異常擴大成長時間停機。'
            ]
          },
          {
            title: '儀表安裝校正',
            paragraphs: [
              '把安裝、校正與驗證流程接好，維持量測與控制點的準確度。'
            ]
          },
          {
            title: '電力系統分析',
            paragraphs: [
              '協助理解配電可靠度、保護協調與運轉風險，支援後續升級與負載決策。'
            ]
          },
          {
            title: '氣體分析系統',
            paragraphs: ['整合氣體分析系統，讓組成、品質與合規資料更可靠可用。']
          },
          {
            title: '電力計量部署',
            paragraphs: [
              '規劃與部署電力計量方案，提升用電與電能品質資料的可視性。'
            ]
          },
          {
            title: '安全系統整合',
            paragraphs: [
              '在需要的專案中協調安全系統工作，支援更安全也更有韌性的現場運轉。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: '常見支援情境',
        columns: 3,
        items: [
          {
            title: 'FAT / SAT 支援',
            description: '在啟動前完成必要測試、驗證與缺失收斂。'
          },
          {
            title: '電力系統分析',
            description: '提早掌握配電可靠度與運轉風險。'
          },
          {
            title: '現場故障排除',
            description: '快速回應現場問題並穩定系統狀態。'
          },
          {
            title: '氣體分析系統',
            description: '讓製程中的氣體量測更可靠。'
          },
          {
            title: '儀表安裝校正',
            description: '維持量測與控制點的準確表現。'
          },
          {
            title: '電力計量部署',
            description: '掌握用電、品質與電力資料。'
          }
        ]
      },
      {
        type: 'quote',
        quote: '「好的 I&E 支援，是在現場必須猜之前，就先把啟動條件釐清。」',
        attribution: '－ 雷力科技'
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          'I&E 支援最好在 FAT 結束前、啟動窗口確定前就先納入。這時回路確認、缺失收斂與現場協調還有空間改變結果。',
          '特別適合儀控、電力與試車工作需要共用一條執行節奏，而不是各自分開推進的專案。'
        ]
      }
    ]
  },
  'plc-dcs-programming-and-migration': {
    seo: {
      title: '控制程式與系統搬遷服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技支援 PLC / DCS 程式開發、搬遷規劃與分階段切換，協助運轉中系統平穩升級。'
    },
    heroFocusItems: ['切換路徑清楚', '風險可控制', '邏輯好維護'],
    introParagraphs: [
      '雷力科技支援 PLC / DCS 程式開發、搬遷規劃與分階段切換，協助運轉中系統平穩升級。',
      '重點是建立現場能執行的切換節奏，同時讓邏輯在測試、切換與後續維護時都保持可讀。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'plc-dcs-programming-and-migration',
        imageAlt: '工程師以筆電檢視控制系統設定',
        layout: 'image-right',
        title: '搬遷規劃必須符合真實停機窗口',
        paragraphs: [
          'PLC / DCS 搬遷同時牽涉既有邏輯、停機限制、相依設備與回切條件，不能只從程式角度切入。',
          '我們把程式變更、驗證節點與切換步驟整理成現場能執行的節奏，降低改造過程中的斷點。'
        ],
        highlights: ['切換路徑清楚', '風險可控制', '邏輯好維護']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '切換邊界',
            description: '先盤點系統邊界、相依條件與停機限制，再鎖定切換順序。'
          },
          {
            title: '停機控制',
            description: '提早定義測試窗口、回切條件與驗證節點，降低改造風險。'
          },
          {
            title: '邏輯可讀',
            description: '讓程式在測試、排查與後續調整時都更容易理解。'
          },
          {
            title: '復原準備',
            description:
              '把文件、版本與運轉脈絡一起整理，讓升級後更容易恢復與接手。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '程式結構',
            paragraphs: [
              '建立更容易閱讀、變更與排查的控制邏輯，讓操作與維護都更有脈絡。'
            ]
          },
          {
            title: '分階段搬遷',
            paragraphs: [
              '依現場條件規劃搬遷路徑與切換節點，在降低干擾的同時提升維護性。'
            ]
          },
          {
            title: '生命週期支援',
            paragraphs: [
              '現代化改造會連同文件與長期維運一起考量，讓新平台不只上線，也能持續使用。'
            ]
          }
        ]
      },
      {
        type: 'process-steps',
        title: '實施節奏',
        items: [
          {
            stepLabel: '步驟 01',
            title: '盤點既有基線',
            description:
              '先整理現有程式、相依設備、點位與停機限制，建立清楚的搬遷範圍。'
          },
          {
            stepLabel: '步驟 02',
            title: '規劃分階段切換',
            description:
              '依現場節奏安排測試、切換與回切條件，避免改造建立在假設上。'
          },
          {
            stepLabel: '步驟 03',
            title: '執行與驗證',
            description:
              '以可讀、可測試的邏輯結構完成開發，並配合現場驗證與操作確認。'
          },
          {
            stepLabel: '步驟 04',
            title: '穩定新基線',
            description:
              '把版本、文件與操作脈絡整理完整，讓升級後的系統更容易維護。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'PLC / DCS 搬遷最好在停機窗口與測試計畫定案前就先納入，這時切換風險、回切邏輯與文件整理還能一起被設計。'
        ]
      }
    ]
  },
  'pi-server': {
    seo: {
      title: '即時資料平台服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技以 PI Server 建立工廠資料平台，支援監看、報表與跨系統使用。'
    },
    heroFocusItems: ['資料骨幹穩定', '報表可使用', '整合更容易'],
    introParagraphs: [
      '雷力科技以 PI Server 建立工廠資料平台，支援監看、報表與跨系統使用。',
      '重點不是多收更多 tags，而是讓不同團隊都能接上同一條可用的資料骨幹。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'pi-server',
        imageAlt: '工業資料設備於伺服器環境中的近景',
        layout: 'image-left',
        title: 'PI Server 要讓工廠資料更容易被使用',
        paragraphs: [
          'PI Server 的工作，不只是在點位接進平台，而是把 tags、脈絡與來源結構整理好，讓監看、報表與整合不會各走各的。',
          '我們會提早規劃命名、資料流向與擴充邏輯，讓平台在新系統加入後仍然好用。'
        ],
        highlights: ['資料骨幹穩定', '報表可使用', '整合更容易']
      },
      {
        type: 'tag-list',
        title: '關鍵標籤',
        items: [
          'Plant data backbone',
          'Operational visibility',
          'PI Server',
          'Cross-system integration'
        ]
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '資料骨幹',
            description: '以可支撐監看、報表與工程檢視的結構收攏工廠資料。'
          },
          {
            title: '脈絡與命名',
            description:
              '先把來源結構與命名整理好，避免後續擴充讓平台變得零碎。'
          },
          {
            title: '報表延續',
            description:
              '建立可支援例行報表與趨勢檢視的基礎，而不只是一套一次性建置。'
          },
          {
            title: '共同視角',
            description: '讓營運、工程與管理端對當前資料有更一致的理解。'
          }
        ]
      },
      {
        type: 'accordion',
        title: '常見用途',
        items: [
          {
            title: '串接工廠資料',
            paragraphs: [
              '用 PI Server 把即時工廠資料接到儀表板、報表與日常營運檢視。'
            ]
          },
          {
            title: '標準化整合',
            paragraphs: [
              '把來源資料、命名與介面整理一致，讓平台擴充後仍然容易管理。'
            ]
          },
          {
            title: '支援報表使用',
            paragraphs: [
              '當資料穩定且容易理解時，報表、趨勢檢視與跨團隊判斷都會更快。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          'PI Server 最適合在工廠需要共用一條穩定的資料骨幹，支援儀表板、報表與跨系統使用時提早納入。',
          '最好在 tags、報表與外部整合大量展開前就先規劃，讓命名與來源邏輯保持一致。'
        ]
      }
    ]
  },
  ['historians']: {
    seo: {
      title: '歷史資料平台服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃 Historian 架構，支援長期記錄、趨勢比對、追溯與報表需求。'
    },
    heroFocusItems: ['長期可追溯', '冗餘可存取', '分析報表就緒'],
    introParagraphs: [
      '雷力科技規劃 Historian 架構，支援長期記錄、趨勢比對、追溯與報表需求。',
      '重點在保留週期、存取方式與冗餘設計，讓資料在幾個月或幾年後仍然可用。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'historians',
        imageAlt: '用於歷史資料平台的伺服器設備近景',
        layout: 'image-right',
        title: 'Historian 的價值在於之後還找得到資料',
        paragraphs: [
          'Historian 真正重要的時候，是製程記錄在一段時間後還能被查詢、比對與說明。',
          '我們會依實際報表、回溯與事件檢視需求安排保留、查詢、遠端取用與冗餘。'
        ],
        highlights: ['長期可追溯', '冗餘可存取', '分析報表就緒']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '長期保留',
            description: '讓重要製程資料可按需求保留，支援長期比較與追溯。'
          },
          {
            title: '趨勢檢視',
            description: '資料結構會配合趨勢、報表與跨部門分析使用。'
          },
          {
            title: '冗餘存取',
            description: '同時考量本地與遠端存取架構，降低單點失效風險。'
          },
          {
            title: '追溯依據',
            description: '為合規、品質與事件調查保留更穩定的資料基礎。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '保留規劃',
            paragraphs: [
              '協助定義資料保留、整理與檢索方式，讓歷史紀錄不是只存下來，而是真的能再被使用。'
            ]
          },
          {
            title: '查詢與報表',
            paragraphs: [
              'Historian 架構會配合趨勢比較、例行報表與工程檢視需求，而不只考慮資料寫入。'
            ]
          },
          {
            title: '存取與冗餘',
            paragraphs: [
              '透過本地冗餘與遠端存取設計，提升資料韌性，同時維持日常查詢便利性。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          'Historian 規劃最好在保留規則、報表需求或稽核期待剛開始被定義時就納入。',
          '這時儲存配置、存取路徑與韌性設計還能為長期使用一起建立，而不是事後補強。'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: '工業網路設計服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃工業網路架構，支撐控制流量、現場設備與工廠資料系統。'
    },
    heroFocusItems: ['拓樸邊界清楚', '區隔兼顧韌性', '後續好擴充'],
    introParagraphs: [
      '雷力科技規劃工業網路架構，支撐控制流量、現場設備與工廠資料系統。',
      '我們會提早定義邊界、區隔與擴充路徑，避免網路成為自動化堆疊裡最脆弱的一層。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt: '網路設備與連接線材近景',
        layout: 'image-left',
        title: '工業網路一開始就要把邊界設清楚',
        paragraphs: [
          '好的工業網路不是先把設備接上去，再回頭補救，而是先分清楚控制流量、資料流與遠端存取需求。',
          '我們把拓樸、區隔與擴充空間一起規劃，讓後續新系統加入時不必重做整個基礎。'
        ],
        highlights: ['拓樸邊界清楚', '區隔兼顧韌性', '後續好擴充']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '邊界清楚',
            description: '先定義控制、資料與外部存取邊界，降低互相干擾與風險。'
          },
          {
            title: '區隔設計',
            description: '在規劃時就把可靠度與故障情境納入，而不是事後補救。'
          },
          {
            title: '維護性',
            description: '讓拓樸、命名與網路意圖在後續維護時仍然容易理解。'
          },
          {
            title: '擴充空間',
            description: '保留新增系統的空間，不用每次擴充都重建網路。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '拓樸規劃',
            paragraphs: [
              '整理設備、站點與資料系統之間的連線關係，建立更容易理解的工業網路架構。'
            ]
          },
          {
            title: '區隔與韌性',
            paragraphs: [
              '在設計階段就把區隔、備援與故障情境納入，避免網路成為自動化系統的脆弱點。'
            ]
          },
          {
            title: '擴充路徑',
            paragraphs: [
              '讓未來新增設備、資料系統或遠端需求時，有清楚的擴充方式可依循。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '網路設計最好在控制、資料或遠端存取系統層層疊上去前就先定好，這時邊界與韌性還能乾淨地被設計。'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: '遠端監控與資料備援服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助建立遠端監看與資料連續性流程，支援分散據點與關鍵紀錄保存。'
    },
    heroFocusItems: ['跨據點可視', '資料連續性', '復原有準備'],
    introParagraphs: [
      '雷力科技協助建立遠端監看與資料連續性流程，支援分散據點與關鍵紀錄保存。',
      '我們把可視化、資料延續與復原準備一起規劃，避免遠端存取有了，紀錄保護卻成為事後補救。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: '多螢幕遠端監控工作站',
        layout: 'image-right',
        title: '遠端可視化要和資料延續一起規劃',
        paragraphs: [
          '遠端監看真正有壓力的時候，不只是看得到畫面，而是還能查狀態、拿紀錄、做復原判斷。',
          '我們把跨據點可視、備援路徑與復原邏輯一起整理，讓遠端作業在異常時也能維持可用。'
        ],
        highlights: ['跨據點可視', '資料連續性', '復原有準備']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '跨據點可視',
            description: '讓重要站點狀態能在多個位置被一致掌握。'
          },
          {
            title: '紀錄延續',
            description:
              '把監看與備援路徑一起規劃，避免只看得到當下卻留不住紀錄。'
          },
          {
            title: '復原準備',
            description: '在需要復原或調查時，保留更完整的狀態與證據。'
          },
          {
            title: '存取邊界',
            description: '依實際營運需求與風險限制設計遠端可視與存取方式。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: '常見情境',
        columns: 3,
        items: [
          {
            title: '跨據點監看',
            description: '讓團隊不必一直在現場，也能掌握重要站點狀態。'
          },
          {
            title: '資料備援',
            description: '降低單一路徑故障造成關鍵紀錄遺失的風險。'
          },
          {
            title: '事件追蹤',
            description: '保留異常回顧與後續改善需要的歷程脈絡。'
          },
          {
            title: '營運連續性',
            description: '在遠端或突發情境下維持資訊取得與判斷節奏。'
          }
        ]
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          '遠端監看與資料連續性最好在站點分工、備援路徑與遠端角色尚未各自分開定義前就先納入。',
          '這時可視化、復原期待與存取邊界還能被設計成同一套工作流程。'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: '告警監控服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技建立告警策略與通知流程，協助團隊更快回應真正需要處理的事件。'
    },
    heroFocusItems: ['優先順序清楚', '操作判讀更快', '降低告警噪音'],
    introParagraphs: [
      '雷力科技建立告警策略與通知流程，協助團隊更快回應真正需要處理的事件。',
      '重點在告警優先順序、事件脈絡與升級邏輯，讓操作端少花時間篩噪音，多把時間用在正確處置。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt: '監控螢幕顯示告警與狀態資訊',
        layout: 'image-left',
        title: '告警監控要先讓優先順序被看懂',
        paragraphs: [
          '當所有事件看起來都很急，或操作端不知道該先處理哪一個時，問題往往不是資訊不夠，而是排序不清楚。',
          '我們把告警條件、升級流程與畫面脈絡一起整理，讓團隊更快判斷嚴重度，也更少猶豫。'
        ],
        highlights: ['優先順序清楚', '操作判讀更快', '降低告警噪音']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '優先在前',
            description:
              '讓真正需要介入的狀況先被看見，而不是被低價值訊息淹沒。'
          },
          {
            title: '分級邏輯',
            description: '把告警分級與排序整理清楚，讓回應期待更容易遵循。'
          },
          {
            title: '畫面脈絡',
            description: '讓告警能連回流程與設備狀態，而不是只留下孤立事件。'
          },
          {
            title: '噪音控制',
            description:
              '減少重複或難以採取行動的告警，避免它們搶走真正的優先事項。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '告警策略',
            paragraphs: [
              '協助整理告警條件，讓團隊知道哪些事件最重要，以及該怎麼回應。'
            ]
          },
          {
            title: '升級流程',
            paragraphs: [
              '把通知時機與處理責任安排清楚，減少現場還要先判斷誰該接手的時間。'
            ]
          },
          {
            title: '畫面脈絡',
            paragraphs: [
              '讓操作端能在畫面中立即看懂告警與流程、設備及下一步動作的關聯。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '告警策略最好在新點位、畫面與通知規則開始大量累積前就先納入，這時優先順序與責任分工還能被乾淨地定義。'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
