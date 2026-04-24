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
        '雷力科技規劃 SCADA / HMI、WinCC OA 與 AVEVA System Platform 類畫面，讓現場更快看懂狀態、告警與操作動作。'
    },
    heroFocusItems: ['畫面易判讀', '告警有脈絡', '後續好維護'],
    introParagraphs: [
      '進入 SCADA / HMI 圖控前，先釐清操作端在正常、異常與交接時需要哪些判斷線索。',
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
        type: 'tag-list',
        title: '平台與交付焦點',
        items: [
          'SCADA package',
          'WinCC OA',
          'AVEVA System Platform',
          'Operator graphics'
        ]
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
      'I&E 支援的重點，是把現場訊號、回路狀態與試車節點放回同一條可追蹤的工作線。',
      '目標是讓系統更快進入可施工狀態、問題更快定位，也讓試車決策能在跨團隊之間對齊。'
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
      'PLC / DCS 更新通常發生在系統仍要運轉的情境，因此首要工作是把現場能執行的步驟拆清楚。',
      '重點是建立可驗證、可切換、可回看的節奏，同時讓邏輯在測試、切換與後續維護時都保持可讀。'
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
        '雷力科技以 PI Server / PI System 建立工廠資料平台，支援監看、報表、工業分析與跨系統使用。'
    },
    heroFocusItems: ['資料骨幹穩定', '報表可使用', '整合更容易'],
    introParagraphs: [
      'PI Server 的首屏重點，是確認點位進入平台後，還能被日常查詢、計算與跨系統串接。',
      '我們會先看資料來源、命名與使用情境，讓平台成為團隊能接上的資料骨幹，而不是只收更多 tags。'
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
          'PI Server',
          'PI System',
          'Industrial data platform',
          'Industrial analytics',
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
        '雷力科技規劃 Historian 架構，支援長期記錄、趨勢比對、追溯、報表與能源場域資料保留需求。'
    },
    heroFocusItems: ['長期可追溯', '冗餘可存取', '分析報表就緒'],
    introParagraphs: [
      'Historian 不是只把資料存起來，而是讓時間拉長後仍能查到、比對並說明製程狀況。',
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
          '這時儲存配置、存取路徑與韌性設計還能為長期使用一起建立，而不是事後補強；對 oil & gas、能源與高合規場域尤其重要。'
        ]
      }
    ]
  },
  // 來源：docs/rewrite/文案.md 第 1-3 項，新增為公開服務。
  'it-infrastructure': {
    seo: {
      title: 'IT 基礎建設規劃與建置服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃企業 IT 架構、伺服器、儲存與虛擬化資源，協助建立穩定且可擴充的基礎環境。'
    },
    heroFocusItems: ['架構穩定可靠', '系統整合簡化', '支援未來擴充'],
    introParagraphs: [
      'IT 基礎建設不是單點設備採購，而是把伺服器、儲存、網路與虛擬化資源整理成可維運、可擴充的營運底座。',
      '我們協助盤點現況、規劃架構與導入順序，讓企業在日常維運、異常復原與後續擴充時都有清楚依據。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'it-infrastructure',
        imageAlt: '工程人員在資料中心機櫃旁檢視伺服器設備',
        layout: 'image-right',
        title: 'IT 基礎建設要先把營運底座規劃清楚',
        paragraphs: [
          '企業 IT 環境牽涉伺服器、儲存、虛擬化、備援與權限管理，若缺少整體規劃，後續擴充與維運很容易變成各自補洞。',
          '雷力科技協助把資源配置、系統整合與維護邊界一次整理，讓基礎環境能穩定支撐日常營運與專案成長。'
        ],
        highlights: ['架構穩定可靠', '系統整合簡化', '支援未來擴充']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '架構規劃',
            description:
              '依據營運需求與既有環境，規劃伺服器、儲存、網路與虛擬化架構。'
          },
          {
            title: '資源整合',
            description:
              '整合運算、儲存與平台資源，降低分散管理造成的維運負擔。'
          },
          {
            title: '高可用備援',
            description:
              '把 HA / DR 與資料保護納入設計，降低單點故障對營運的影響。'
          },
          {
            title: '效能優化',
            description:
              '依使用情境調整資源配置，讓基礎環境保有足夠效能與擴充彈性。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: 'IT 整體架構規劃',
            paragraphs: [
              '盤點現有設備、系統需求與擴充限制，建立適合企業營運的基礎建設藍圖。'
            ]
          },
          {
            title: '虛擬化與資源整合',
            paragraphs: [
              '規劃伺服器虛擬化、儲存配置與資源管理方式，讓基礎環境更容易維運。'
            ]
          },
          {
            title: '備援與復原設計',
            paragraphs: [
              '依照服務重要性規劃高可用、備份與災難復原邏輯，讓異常發生時有可執行的復原路徑。'
            ]
          }
        ]
      },
      {
        type: 'process-steps',
        title: '導入節奏',
        items: [
          {
            stepLabel: '01',
            title: '現況盤點',
            description: '確認既有設備、系統負載、資料保存需求與維運痛點。'
          },
          {
            stepLabel: '02',
            title: '架構設計',
            description: '規劃伺服器、儲存、虛擬化、備援與管理邊界。'
          },
          {
            stepLabel: '03',
            title: '分階段導入',
            description: '依風險與時程安排部署順序，降低對現有營運的影響。'
          },
          {
            stepLabel: '04',
            title: '驗證交接',
            description: '完成效能、備援與維運文件確認，讓團隊能接手日常管理。'
          }
        ]
      }
    ]
  },
  'cybersecurity-network': {
    seo: {
      title: '資安網路架構與防護整合服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技整合網路分段、存取控管、資安設計與弱點檢測，協助企業降低 IT / OT 資安風險。'
    },
    heroFocusItems: ['網路分段控管', '降低攻擊風險', '持續弱點檢測'],
    introParagraphs: [
      '資安網路建置的核心，是先把使用者、系統、資料與設備之間的存取邊界定義清楚。',
      '我們協助規劃分段、防護、遠端存取與資安設計所需的弱點檢測機制，讓企業在維持營運效率的同時降低暴露風險。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'cybersecurity-network',
        imageAlt: '工程人員在資料中心調整核心網路交換器',
        layout: 'image-left',
        title: '資安網路要讓防護邊界可被維護',
        paragraphs: [
          '只把設備接上防火牆並不足夠，真正能長期維持的資安架構需要清楚的區段、權限、監測與弱點處理流程。',
          '雷力科技把網路分段、存取控管、入侵防護與檢測節奏串在一起，讓 IT / OT 團隊能看懂風險位置，也能持續維護。'
        ],
        highlights: ['網路分段控管', '降低攻擊風險', '持續弱點檢測']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '網路分段',
            description:
              '依角色、系統與風險層級切分網路區域，降低橫向移動風險。'
          },
          {
            title: '存取控管',
            description:
              '建立 VPN、身分驗證與權限邏輯，讓遠端與內部存取都有邊界。'
          },
          {
            title: '威脅防護',
            description: '整合防火牆、IPS 與監測機制，提升異常行為的可視性。'
          },
          {
            title: '弱點檢測',
            description: '以定期檢測與改善追蹤，讓資安防護不是一次性建置。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '資安網路架構規劃',
            paragraphs: [
              '盤點重要系統、使用者角色與資料流，規劃分段、隔離與防護設備配置。'
            ]
          },
          {
            title: '遠端存取與 Zero Trust',
            paragraphs: [
              '依照角色與情境設計驗證、授權與存取流程，降低遠端維護帶來的暴露面。'
            ]
          },
          {
            title: '弱點掃描與改善追蹤',
            paragraphs: [
              '安排檢測、風險分級與修補建議，讓資安改善有清楚優先順序。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '資安網路最適合在新系統、遠端維運或跨部門資料串接前先納入，這時分段與存取邊界還能被乾淨地設計。'
        ]
      }
    ]
  },
  'offshore-wind-operations': {
    seo: {
      title: '離岸風場遠端維運與安全管理服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技建立離岸風場 SCADA 監控、遠端連線、維運回應與安全管理流程，支援 offshore wind monitoring system 與偏遠場域穩定運作。'
    },
    heroFocusItems: ['遠端安全操作', '即時故障處理', '降低現場風險'],
    introParagraphs: [
      '離岸風場維運受天候、交通與現場風險限制，遠端可視、遠端支援與安全流程需要一開始就一起規劃。',
      '我們協助建立安全遠端連線、監控與告警回應流程，讓團隊能更快判斷狀況、安排處置並降低不必要到場。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'offshore-wind-operations',
        imageAlt: '海上離岸風機與海上電力設施',
        layout: 'image-right',
        title: '離岸風場維運要把遠端與安全一起設計',
        paragraphs: [
          '偏遠場域的維運壓力不只在設備本身，也在於誰能安全連線、如何判斷事件、何時需要派工，以及現場風險如何被控管。',
          '雷力科技把遠端連線、SCADA / PLC / HMI 支援、告警監控與權限流程整合，協助維運團隊維持更穩定的作業節奏。'
        ],
        highlights: ['遠端安全操作', '即時故障處理', '降低現場風險']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '安全遠端連線',
            description:
              '規劃 VPN、權限與連線流程，降低遠端維護造成的安全風險。'
          },
          {
            title: '設備狀態監控',
            description: '整合 SCADA、控制系統與關鍵訊號，支援遠端判斷與追蹤。'
          },
          {
            title: '事件處理流程',
            description:
              '建立告警、派工與升級邏輯，讓異常能更快進入正確處理路徑。'
          },
          {
            title: '安全管理',
            description:
              '把權限、紀錄與維運流程納入管理，降低現場與遠端操作風險。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '遠端維運架構',
            paragraphs: [
              '規劃遠端連線、監控資料與操作權限，讓維運團隊能在安全邊界內支援現場。'
            ]
          },
          {
            title: 'SCADA / PLC / HMI 支援',
            paragraphs: [
              '協助處理監控畫面、控制訊號與現場設備狀態，支援異常判斷與系統維護。'
            ]
          },
          {
            title: '告警與事件管理',
            paragraphs: [
              '整理告警優先順序、通知與升級流程，讓偏遠場域事件不會卡在資訊斷點。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '適合導入的情境',
        paragraphs: [
          '當風場、海上變電站或偏遠站點需要離岸風場 SCADA 監控、降低到場依賴，或重新整理維運權限與事件處理流程時，這項服務可以先成為維運架構的起點。'
        ]
      }
    ]
  },
  // 來源：docs/rewrite/文案.md 第 4 項，回填既有工業網路服務。
  'network-design': {
    seo: {
      title: '工業網路設計服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技依據 Core / Control / Field 分層模型規劃工業網路，提升通訊穩定並降低系統風險。'
    },
    heroFocusItems: ['分層架構清晰', '設備通訊穩定', '降低系統風險'],
    introParagraphs: [
      '工業網路設計聚焦 Core / Control / Field 分層、現場設備通訊與控制資料交換，讓自動化系統有清楚且穩定的網路基礎。',
      '我們會提早定義拓樸、區隔、備援與維護路徑，避免控制網路在擴充或異常時成為系統風險來源。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt: '網路設備與連接線材近景',
        layout: 'image-left',
        title: '工業網路要先把控制分層與通訊路徑設清楚',
        paragraphs: [
          '好的工業網路不是先把設備接上去再補救，而是先分清楚 Core、Control 與 Field 各層的通訊任務與風險邊界。',
          '我們把拓樸、網段隔離、備援路徑與通訊效能一起規劃，讓控制系統在日常運轉與後續擴充時都能維持穩定。'
        ],
        highlights: ['分層架構清晰', '設備通訊穩定', '降低系統風險']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '分層式架構',
            description:
              '依 Core / Control / Field 分層整理通訊任務，讓網路角色更清楚。'
          },
          {
            title: 'IT / OT 區隔',
            description: '釐清控制網路與其他網路邊界，降低流量干擾與存取風險。'
          },
          {
            title: '高可用拓樸',
            description:
              '把備援、故障情境與關鍵路徑納入設計，提升現場通訊韌性。'
          },
          {
            title: '通訊效能',
            description:
              '評估延遲、封包與設備連線需求，降低通訊不穩造成的停機風險。'
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
              '整理控制器、現場設備、交換器與資料系統之間的連線關係，建立清楚的工業網路拓樸。'
            ]
          },
          {
            title: '分段與隔離',
            paragraphs: [
              '規劃 IT / OT 邊界、VLAN 與網段隔離，降低非預期流量與存取風險。'
            ]
          },
          {
            title: '穩定與效能',
            paragraphs: [
              '將備援拓樸、通訊延遲與封包路徑納入設計，提升現場設備通訊穩定度。'
            ]
          },
          {
            title: '工業資安防護整合',
            paragraphs: [
              '在工業網路範圍內預留防護與監測介面，讓後續資安控管能與控制網路邊界銜接。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '工業網路設計最好在控制系統、現場設備與資料平台大量擴充前就先定好，這時分層、隔離與備援還能被乾淨地設計。'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: '遠端監控與資料備援服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技協助建立遠端監看、infrastructure monitoring 與資料連續性流程，支援分散據點、油氣場域與關鍵紀錄保存。'
    },
    heroFocusItems: ['跨據點可視', '資料連續性', '復原有準備'],
    introParagraphs: [
      '遠端監控與資料備援要同時回答三件事：看得到、傳得回，異常後還查得到。',
      '我們把可視化、資料延續與復原準備一起規劃，避免遠端存取有了，紀錄保護卻成為事後補救，這也常見於 oil & gas 與遠端基礎設施場景。'
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
  // 來源：docs/rewrite/文案.md 第 5 項，回填既有告警監控服務。
  'alarm-monitoring': {
    seo: {
      title: '告警監控與可視化維運管理服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技整合告警監控、即時通知、趨勢分析與維運流程，協助 IT / OT 團隊建立可持續維護的 industrial alarm notification system。'
    },
    heroFocusItems: ['優先順序清楚', '事件快速處理', '降低告警噪音'],
    introParagraphs: [
      '告警監控與系統維運的首要任務，是讓 IT / OT 團隊看得出優先順序、事件脈絡與下一步處置路徑。',
      '我們會把條件、即時通知、趨勢分析與升級邏輯對齊，讓團隊少花時間篩噪音，多把時間用在真正需要處理的事件。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt: '監控螢幕顯示告警與狀態資訊',
        layout: 'image-left',
        title: '告警監控要把事件與維運流程接在一起',
        paragraphs: [
          '當所有事件看起來都很急，或維運團隊不知道該先處理哪一個時，問題往往不是資訊不夠，而是排序、通知與脈絡不清楚。',
          '我們把告警條件、即時通知、升級流程與趨勢分析一起整理，讓團隊更快判斷嚴重度，也更容易追蹤後續處置。'
        ],
        highlights: ['優先順序清楚', '事件快速處理', '降低告警噪音']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '告警優先順序',
            description:
              '讓真正需要介入的狀況先被看見，而不是被低價值訊息淹沒。'
          },
          {
            title: '即時通知',
            description:
              '把通知時機、對象與升級規則定義清楚，縮短事件進入處理的時間。'
          },
          {
            title: '趨勢分析',
            description:
              '讓告警能連回設備狀態與歷史趨勢，而不是只留下孤立事件。'
          },
          {
            title: '風險追蹤',
            description:
              '記錄事件處置與後續改善，讓維運團隊能持續降低重複風險。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: '整合監控',
            paragraphs: [
              '協助整合系統狀態、設備訊號與關鍵告警，讓 IT / OT 團隊能在同一個視角判讀事件。'
            ]
          },
          {
            title: '告警與事件流程',
            paragraphs: [
              '把告警條件、通知對象、升級規則與處理責任安排清楚，減少事件卡在判斷階段的時間。'
            ]
          },
          {
            title: '數據與風險管理',
            paragraphs: [
              '透過趨勢分析與事件紀錄追蹤常見風險，協助維運團隊安排後續改善。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '告警監控與系統維運最好在新點位、畫面與通知規則開始大量累積前就先納入，這時優先順序、責任分工與追蹤方式還能被乾淨地定義。'
        ]
      }
    ]
  },
  'web-development': {
    seo: {
      title: '網頁開發服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供客製化工業網站與 Web 應用開發服務，依據品牌定位、營運流程與實際使用情境，規劃網站架構、介面流程與技術實作。'
    },
    heroFocusItems: ['貼合企業需求', '前後端整合完整', '穩定上線且可持續擴充'],
    introParagraphs: [
      '雷力科技提供客製化的工業網站與 Web 應用開發服務，從企業官網、產品服務頁、會員入口到後台管理系統，依據品牌定位、營運流程與實際使用情境，規劃網站架構、介面流程與技術實作，讓網站不只是展示頁面，而是能真正支撐業務與管理的數位平台。',
      '我們採用業界頂尖規格標準進行前端、後端、資料整合、測試與部署，兼顧效能、安全性、維護性與後續擴充彈性。無論是新建網站、舊站改版或功能升級，都能在一致架構下穩定推進。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'web-development',
        imageAlt: '桌機與筆電顯示網站介面及開發工作畫面',
        layout: 'image-right',
        title: '網頁開發的重點，是讓企業網站真正成為可持續運作的數位平台',
        paragraphs: [
          '好的網頁開發，不只是把畫面做出來，而是讓品牌呈現、內容管理、互動流程與系統資料能在同一個平台上長期穩定運作。',
          '我們會先釐清資訊架構、使用情境與系統邊界，再整合前端、後端、後台流程與外部串接，讓網站在內容增加、功能擴充或需要連接其他系統時，仍然保持一致、清楚且易於管理。'
        ],
        highlights: ['客製規劃', '標準開發', '穩定交付']
      },
      {
        type: 'proof-strip',
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
        title: '承接內容與做法',
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
        title: '實務焦點',
        columns: 3,
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
        title: '導入時機',
        paragraphs: [
          '當企業準備建置新官網、改版既有網站、優化數位流程，或需要將網站與會員、表單、CRM、ERP 等系統進一步整合時，就應該提早導入完整的網頁開發規劃。越早確立架構與資料流，後續的擴充、維護與改版成本就越能被有效控制。'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
