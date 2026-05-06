/* eslint-disable @stylistic/quote-props */
import type { ProductDetailPagesMessages } from '../types'

export const productDetailPagesZhTw = {
  'wincc-oa': {
    seo: {
      title: 'WinCC OA | 雷力科技',
      description:
        '雷力科技協助 WinCC OA SCADA 平台規劃、分散式架構、備援、操作畫面標準、PLC 通訊與維護交接。'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/wincc-open-architecture-development/',
    heroFocusItems: ['SCADA / HMI 平台', '分散式架構', 'WinCC OA Partner 基礎'],
    introParagraphs: [
      'WinCC OA 適合需要開放式 SCADA 架構、分散式運轉、備援規劃，以及可隨現場需求演進的操作流程。',
      '雷力科技看待 WinCC OA 時，不只處理畫面本身，也會一併檢查 PLC 通訊、網路條件、HMI 標準、告警脈絡、歷史資料交接、擴充需求與後續維護方式。'
    ],
    sidebar: {
      productsHeading: '產品'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: '先把 SCADA 架構與操作模型定清楚',
        paragraphs: [
          'WinCC OA 可支援需要整合多套控制系統、通訊路徑、伺服器角色與操作站的工業 SCADA / HMI 環境。',
          '這類平台可以依需求規劃為單機、備援、單使用者、多使用者或分散式架構，因此專案前期的架構判斷會直接影響後續擴充與維護。',
          '雷力會把畫面背後的結構一起整理：Tag 組織、告警行為、PLC 連線、擴充準備，以及現場可接手的維護模型。'
        ],
        highlights: [
          '分散式 SCADA',
          '備援系統',
          '操作畫面標準',
          'PLC 與通訊協定介接',
          '擴充規劃'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'dark',
        title: 'WinCC OA 導入範圍',
        mediaId: 'partner-ecosystem',
        mediaPlacement: 'after',
        items: [
          {
            title: '開放式架構 IT 基礎環境',
            description:
              '在應用程式與畫面工作擴大前，先規劃開放式架構所需的伺服器、網路、權限與部署基礎。'
          },
          {
            title: '分散式系統',
            description:
              '針對多操作站或多站點 SCADA 需求，整理角色、通訊與操作責任。'
          },
          {
            title: '備援系統',
            description:
              '在試車壓力升高前，先定義備援期望、切換行為與維護責任。'
          },
          {
            title: '高速通訊的獨立機台系統',
            description:
              '支援需要通訊時序、操作反應與現場可靠性的 standalone machine systems。'
          },
          {
            title: 'HMI 與任意 PLC 介接',
            description:
              '協調 HMI 點位與 PLC 資料，讓畫面、告警與狀態資訊能對應可追蹤的現場訊號。'
          },
          {
            title: 'PLC 程式設計',
            description:
              '當控制邏輯會影響操作層時，一併對齊 PLC 邏輯、通訊期望與 SCADA 整合細節。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '適用產業情境',
        items: [
          {
            title: 'Pharmaceutical',
            paragraphs: [
              'WinCC OA 可支援需要操作可視性、受控變更與可維護紀錄的製藥生產環境。'
            ]
          },
          {
            title: 'Machine Tool',
            paragraphs: [
              '當機台系統需要獨立控制、高速通訊與清楚的機台狀態可視性時，可評估 WinCC OA。'
            ]
          },
          {
            title: 'Oil and Gas',
            paragraphs: [
              '分散式資產、網路監控與備援規劃，讓 WinCC OA 可作為油氣營運的候選平台。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Optional extensions 規劃',
        mediaId: 'optional-extensions',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'WinCC OA Operator',
            description: '依現場監控與回應方式，規劃操作員使用的工具與畫面。'
          },
          {
            title: 'Options for Web Functions',
            description:
              '當遠端或分散式團隊需要受控可視性時，預先評估 Web 存取情境。'
          },
          {
            title: 'WinCC OA Videos',
            description: '當影像確認能改善操作回應時，協調影像脈絡與操作畫面。'
          },
          {
            title: 'WinCC OA BACnet',
            description:
              '若建築或廠務資料需要納入 SCADA 視圖，需先評估 BACnet 整合方式。'
          },
          {
            title: 'WinCC OA Scheduler',
            description: '支援排程動作或操作時段需要被顯示、追蹤與維護的情境。'
          },
          {
            title: 'WinCC OA Recipes',
            description:
              '當操作員需要一致的產品、批次或機台設定參數時，需規劃配方管理。'
          },
          {
            title: 'WinCC OA GIS Reviewer',
            description: '分散式資產需要地理脈絡時，可納入地圖式檢視規劃。'
          },
          {
            title: 'WinCC OA Report',
            description: '提早整理報表需求，讓資料結構、命名與審閱方式能對齊。'
          },
          {
            title: 'WinCC OA CommCenter',
            description: '把通訊與通知需求放進告警與營運流程一起規劃。'
          },
          {
            title: 'Advanced Maintenance Suite',
            description: '當維護流程需要連回 SCADA 模型時，需一併整理維護脈絡。'
          }
        ]
      },
      {
        type: 'process-steps',
        title: '從架構檢視到可維護運轉',
        items: [
          {
            stepLabel: '01',
            title: '確認 SCADA 操作模型',
            description:
              '先釐清單機、分散式、備援或高速機台需求，再進入畫面與 extension 設計。'
          },
          {
            stepLabel: '02',
            title: '規劃連線與擴充邊界',
            description:
              '整理 PLC 介面、通訊協定、使用者角色、Web 存取、報表、影像、BACnet、排程、配方、GIS 與維護需求。'
          },
          {
            stepLabel: '03',
            title: '建立操作流程',
            description:
              '把架構決策轉成 HMI 標準、告警脈絡、導覽、診斷方式與現場可執行的操作程序。'
          },
          {
            stepLabel: '04',
            title: '交接給長期維護',
            description:
              '整理系統結構、extension 假設與支援模型，讓現場能維護並延伸平台。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '以 WinCC OA Partner 能力基礎，雷力可協助專案團隊把平台服務、產業條件與 extension 路徑整理成啟用後仍可維護的導入計畫。'
        ]
      }
    ]
  },
  aveva: {
    seo: {
      title: 'AVEVA | 雷力科技',
      description:
        '雷力科技協助 AVEVA System Platform、InTouch HMI 與 Historian 規劃，整合 SCADA 可視性、工廠模型、營運資料與維護交接。'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/hmi-and-scada-programming/aveva-programming/',
    heroFocusItems: ['System Platform', 'InTouch HMI', 'Historian 與營運資料'],
    introParagraphs: [
      'AVEVA 前身為 Wonderware，適合需要把 HMI、SCADA、資料管理與營運智慧放在同一套工廠模型裡管理的場域。',
      '雷力科技協助專案團隊整理 System Platform、InTouch HMI、Historian 資料、報表與 Dashboard 使用情境，讓平台不只收資料，也能被操作與維護團隊長期使用。'
    ],
    sidebar: {
      productsHeading: '產品'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: '讓工廠模型、操作畫面與資料脈絡接在一起',
        paragraphs: [
          'AVEVA System Platform 可透過模型導向架構與集中式設定，作為 SCADA、MES 與 IIoT 應用的基礎。',
          'InTouch HMI 負責操作端監控與控制視覺化；Historian 則保存即時與歷史生產資料，支援趨勢、分析、報表、Dashboard 與自訂查詢。',
          '雷力會把這些元件連成可用的操作模型：清楚的物件結構、畫面標準、資料命名，以及現場可以接手的維護路徑。'
        ],
        highlights: [
          '模型導向工廠架構',
          '可重用物件模板',
          '操作視覺化',
          'Historian 資料',
          '報表與 Dashboard'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'light',
        title: 'AVEVA 產品覆蓋範圍',
        mediaId: 'partner-ecosystem',
        mediaPlacement: 'after',
        items: [
          {
            title: 'AVEVA System Platform',
            description:
              '當 SCADA、MES 或 IIoT 需要集中式工廠模型、共用模板與一致設定時，可作為核心基礎。'
          },
          {
            title: 'AVEVA InTouch HMI',
            description:
              '支援即時製程可視性、情境感知、操作導覽與現代化圖控畫面。'
          },
          {
            title: 'AVEVA Historian',
            description:
              '建立生產資料收集、趨勢檢視、分析支援與報表 / Dashboard 資料集的基礎。'
          },
          {
            title: '營運資料使用',
            description:
              '把即時狀態、歷史脈絡與工程查詢串在同一套資料語言中，讓問題討論更容易對焦。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '雷力承接範圍',
        items: [
          {
            title: 'System Platform 架構',
            paragraphs: [
              '定義區域、設備、物件與命名結構，讓 object-oriented plant model 在新增資產、模板與畫面後仍保持可讀性。'
            ]
          },
          {
            title: 'InTouch HMI 與操作流程',
            paragraphs: [
              '依操作員回應製程狀態的方式，設計畫面階層、告警脈絡、導覽與狀態呈現。'
            ]
          },
          {
            title: 'Historian 與報表準備',
            paragraphs: [
              '與營運及工程使用者確認 Tag 選取、即時與歷史資料存取、資料解析度假設、趨勢畫面、查詢需求與報表邊界。'
            ]
          },
          {
            title: '整合與交接',
            paragraphs: [
              '協調 AVEVA 與 PLC、SCADA、網路及資料系統關係，並整理平台結構供後續維護。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: '導入重點',
        columns: 3,
        items: [
          {
            title: '模型階層',
            description:
              '在畫面與 Historian Tag 擴大前，先定義廠區、區域、產線、設備與物件規則。'
          },
          {
            title: '模板治理',
            description:
              '確認哪些內容應標準化、哪些可依設備差異調整，以及未來修改如何審查。'
          },
          {
            title: '資料彙整與監控',
            description:
              '把即時視覺化、Historian 趨勢、報表、Dashboard 與自訂查詢綁定實際營運問題，避免只收資料卻沒有決策路徑。'
          }
        ]
      },
      {
        type: 'process-steps',
        title: '從工廠模型到可使用的營運資料',
        items: [
          {
            stepLabel: '01',
            title: '定義工廠模型',
            description:
              '在模板、圖控與 Historian Tag 擴散前，先對齊區域、設備、物件與命名規則。'
          },
          {
            stepLabel: '02',
            title: '建立 HMI 與資料標準',
            description:
              '依實際營運決策，整理 InTouch 畫面、告警脈絡、Historian Tag、報表、Dashboard 與查詢需求。'
          },
          {
            stepLabel: '03',
            title: '整合控制與資料系統',
            description:
              '協調 AVEVA 與 PLC、SCADA、網路、MES、報表及維護團隊的介面。'
          },
          {
            stepLabel: '04',
            title: '準備維護交接',
            description:
              '文件化物件結構、模板規則、資料假設與支援責任，讓現場能接手維護。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '當團隊需要用同一套模型討論設備、畫面、告警、趨勢與報表時，AVEVA 的導入重點應先放在資料結構與維護規則，而不是只完成單一畫面或單一報表。'
        ]
      }
    ]
  },
  'siemens-plc': {
    seo: {
      title: 'Siemens S7 PLC | 雷力科技',
      description:
        '雷力科技協助 Siemens S7 PLC、TIA Portal、HMI 協調、系統搬遷、試車、網路整合與可維護交接。'
    },
    sourceUrl:
      'https://www.dmcinfo.com/services/manufacturing-automation-and-intelligence/plc-programming/siemens-s7-plc-programming/',
    heroFocusItems: ['S7 PLC 工程', 'TIA Portal 與 SIMATIC 脈絡', '試車與搬遷'],
    introParagraphs: [
      'Siemens S7 專案通常位在機台控制、製程協調、HMI 可視性、網路整合與未來搬遷決策的核心。',
      '雷力科技會把 Siemens PLC 工作視為完整工程週期：釐清規格、規劃程式結構、協調 HMI / SCADA 訊號、測試通訊、支援試車，並交付現場能維護的系統。'
    ],
    sidebar: {
      productsHeading: '產品'
    },
    blocks: [
      {
        type: 'platform-overview',
        title: '把 Siemens PLC 放進控制、畫面與網路一起規劃',
        paragraphs: [
          'Siemens S7 環境可能包含現行控制器、遠端 I/O、舊型設備、工程工具、HMI / SCADA 軟體、DCS 脈絡與工業網路。',
          '成功的專案不只是撰寫程式，而是需要清楚規格、有結構的 PLC Block、命名規範、HMI 協調、可行的模擬或分階段測試、試車支援，以及舊系統搬遷規劃。',
          '雷力會把 Siemens PLC 工作與周邊系統一起協調：操作畫面、SCADA Tag、告警、Historian 資料、網路邊界、現場設備與長期維護文件。'
        ],
        highlights: [
          '現行與舊型控制器',
          'TIA Portal 與 SIMATIC 脈絡',
          'HMI 與 SCADA 協調',
          '搬遷規劃',
          '工業網路整合'
        ]
      },
      {
        type: 'proof-strip',
        tone: 'light',
        title: 'Siemens PLC 導入範圍',
        items: [
          {
            title: 'PLC 交付週期',
            description:
              '需要規格協助、結構化程式、模擬思維測試、系統設計、試車與啟用後支援。'
          },
          {
            title: '硬體脈絡',
            description:
              '需要同時檢視 S7-1500、S7-1200、ET 200SP、舊型 S7、S5、TI 控制器與切換限制。'
          },
          {
            title: '軟體脈絡',
            description:
              '把工程工具、HMI / SCADA 軟體、DCS 脈絡與資料系統期望連回專案範圍。'
          },
          {
            title: '整合情境',
            description:
              '常見於遠端通訊、Fieldbus、機器視覺、資料串接、備援協定與高速機台控制等工程情境。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '雷力承接範圍',
        items: [
          {
            title: '規格與控制設計',
            paragraphs: [
              '把機台或製程行為轉成 PLC 結構、順序邏輯、連鎖、告警、操作動作與可測試的驗收項目。'
            ]
          },
          {
            title: 'PLC / HMI / SCADA 協調',
            paragraphs: [
              '對齊 PLC Tag、HMI 畫面、SCADA 點位、Historian 需求、告警處理與操作流程。'
            ]
          },
          {
            title: '搬遷與相容性規劃',
            paragraphs: [
              '在改動既有系統前，先評估舊型控制器、Step 7 或 SIMATIC Manager 脈絡、網路限制、I/O 假設與切換風險。'
            ]
          },
          {
            title: '試車與交接',
            paragraphs: [
              '支援分段測試、通訊檢查、現場問題定位、啟動協調與維護團隊所需文件。'
            ]
          },
          {
            title: 'DCS 與 Siemens 周邊脈絡',
            paragraphs: [
              '依專案需求，協調 Siemens PLC 範圍與 DCS、HMI / SCADA、網路設計、驗證需求及上層資料 / 報表系統。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Siemens 硬體覆蓋範圍',
        mediaId: 's7-1200',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'S7-1500 / F / T / R / H / HF',
            description:
              '適用於機台、製程、安全、備援與較高可用性架構的現行控制器家族。'
          },
          {
            title: 'S7-1200 / F / G2',
            description:
              '適用於機台、skid、小型系統與分散式控制需求的 compact 控制器。'
          },
          {
            title: 'SIMATIC ET 200SP',
            description:
              '遠端 I/O 與分散式控制脈絡，需與網路與盤體設計一起規劃。'
          },
          {
            title: 'S7-300 / F / T',
            description:
              '舊型平台脈絡，常見於支援、搬遷、相容性檢查與分階段汰換。'
          },
          {
            title: 'S7-400 / H',
            description:
              '大型或備援舊系統脈絡，切換方式與停機假設需要更謹慎地規劃。'
          },
          {
            title: 'S7-200、S5 與 TI-505',
            description:
              '較舊控制器家族，通常需要先做搬遷評估，再改動既有系統。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'Siemens 軟體覆蓋範圍',
        mediaId: 'tia-portal',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'TIA Portal',
            description: '現行 Siemens 控制器、HMI 與試車工作的工程環境。'
          },
          {
            title: 'SIMATIC Manager / Step 7',
            description: '舊型工程脈絡，可能需要支援、文件整理或搬遷規劃。'
          },
          {
            title: 'WinCC 與 WinCC OA',
            description:
              'HMI / SCADA 軟體脈絡，需要對齊 PLC Tag、告警與操作流程。'
          },
          {
            title: 'WinCC Basic / Comfort / Advanced',
            description: 'Panel 與機台層 HMI 範圍，用於操作可視性與現場控制。'
          },
          {
            title: 'WinCC Professional / Unified',
            description: '較大型 HMI / SCADA 與現代化視覺化脈絡，支援廠級營運。'
          },
          {
            title: 'PCS7、PCS neo、SIMATIC IT 與 SIMOTION',
            description: 'DCS、MES、運動控制與上層整合需求的 Siemens 生態脈絡。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: '服務與整合覆蓋範圍',
        columns: 3,
        items: [
          {
            title: 'PLC 與 HMI 程式設計',
            description:
              '規劃 PLC 邏輯與 HMI 行為，讓操作員能看懂、診斷並支援控制行為。'
          },
          {
            title: 'Service calls 與 automation support',
            description:
              '協助現場團隊定位控制、通訊與啟用問題，提供實務工程支援。'
          },
          {
            title: 'Platform integration',
            description:
              '把 PLC 範圍接到 SCADA、MES、Historian、報表或外部資料系統需求。'
          },
          {
            title: 'SCADA software',
            description:
              '協調 PLC Tag、告警、操作畫面與監控點位和上位系統的關係。'
          },
          {
            title: 'Legacy system migration',
            description: '在替換前評估舊控制器、軟體工具、I/O 假設與切換風險。'
          },
          {
            title: 'PROFIBUS / PROFINET integration',
            description:
              '以試車、診斷與可維護性為前提，規劃 fieldbus 與工業乙太網路徑。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: 'DCS 與產業情境',
        mediaId: 'pcs7',
        mediaPlacement: 'after',
        columns: 3,
        items: [
          {
            title: 'PCS7 與 PCS neo DCS',
            description:
              '大型製程環境可能需要 FEED study、規格、程式、安裝、qualification 與試車規劃。'
          },
          {
            title: '製程與機台產業',
            description:
              'Siemens PLC 範圍可能出現在航太、汽車、食品飲料、醫療製藥、油氣、包裝與 converting lines。'
          },
          {
            title: '可重用邏輯標準',
            description:
              '定義 Block 結構、命名、文件與測試期望，避免後續修改只依賴個人記憶。'
          }
        ]
      },
      {
        type: 'process-steps',
        title: '從控制邏輯到試車交接',
        items: [
          {
            stepLabel: '01',
            title: '確認機台或製程範圍',
            description:
              '釐清順序、安全邊界、連鎖、網路限制、HMI 需求與搬遷假設。'
          },
          {
            stepLabel: '02',
            title: '設計控制結構',
            description:
              '規劃 PLC Block、Tag 命名、告警行為、通訊點位、模擬方式與 SCADA / HMI 介面。'
          },
          {
            stepLabel: '03',
            title: '測試與試車',
            description: '依序驗證邏輯、I/O、通訊、告警、操作動作與現場行為。'
          },
          {
            stepLabel: '04',
            title: '支援切換與交接',
            description: '收斂搬遷風險，整理關鍵行為，協助系統交給現場維護。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          'Siemens PLC 專案若能把控制器選型、軟體脈絡、HMI / SCADA 訊號、網路假設、搬遷風險與試車證據放在同一條交付路徑上，後續維護會清楚很多。'
        ]
      }
    ]
  }
} satisfies ProductDetailPagesMessages
