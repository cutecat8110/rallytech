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
        title: '適合優先評估 WinCC OA 的情境',
        items: [
          {
            title: '多系統連線',
            description:
              'PLC、通訊協定、SCADA Server 與操作站需要在不同現場條件下協同運作。'
          },
          {
            title: '備援與多操作站',
            description:
              '系統不能只看單機畫面，還要預先整理備援切換、使用者角色與操作站分工。'
          },
          {
            title: '畫面標準化',
            description:
              '設備狀態、告警與製程脈絡需要整理成操作員可判斷、可追蹤的日常監控畫面。'
          },
          {
            title: '後續擴充維護',
            description:
              '未來可能加入報表、排程、配方、Web、BACnet 或維護相關擴充，需要先留下可延展的結構。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '雷力如何協助導入',
        items: [
          {
            title: '架構與基礎環境規劃',
            paragraphs: [
              '在畫面與 Tag 工作深入前，先釐清伺服器角色、網路邊界、備援期望、使用者權限與部署假設。'
            ]
          },
          {
            title: 'SCADA / HMI 實作',
            paragraphs: [
              '依現場監控方式建立操作畫面、設備頁、告警脈絡、導覽與狀態資訊。'
            ]
          },
          {
            title: 'PLC 與通訊協調',
            paragraphs: [
              '協調 S7、EtherNet/IP、OPC 與專案所需通訊，讓 SCADA 層取得可使用、可追蹤的訊號。'
            ]
          },
          {
            title: '擴充與交接準備',
            paragraphs: [
              '整理物件結構、命名、註記與未來擴充路徑，降低後續改版時重新摸索系統的成本。'
            ]
          }
        ]
      },
      {
        type: 'card-grid',
        title: '導入前需要先釐清的事',
        columns: 3,
        items: [
          {
            title: '備援模型',
            description:
              '在伺服器與網路設計定案前，先確認單機、備援、分散式與多使用者運轉需求。'
          },
          {
            title: '畫面標準',
            description:
              '提早定義命名、色彩、告警、導覽與物件重用規則，讓畫面在後續擴充時仍保持一致。'
          },
          {
            title: '擴充路徑',
            description:
              '判斷未來是否可能需要報表、排程、配方、影像、BACnet、Web 存取或維護相關擴充。'
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '如果專案已經涉及多站點監控、備援切換、操作畫面重整或未來擴充，WinCC OA 的架構與維護規則應在畫面實作前先整理。'
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
      'AVEVA 適合需要把 HMI、SCADA、Historian 與營運資料放在同一套工廠模型裡管理的場域。',
      '雷力科技協助專案團隊整理 System Platform、InTouch HMI、Historian Tag、報表與 Dashboard 使用情境，讓平台不只收資料，也能被操作與維護團隊長期使用。'
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
        title: 'AVEVA 平台能支撐的工作',
        items: [
          {
            title: 'System Platform',
            description:
              '當 SCADA、MES 或 IIoT 需要集中式工廠模型、共用模板與一致設定時，可作為核心基礎。'
          },
          {
            title: 'InTouch HMI',
            description:
              '支援即時製程可視性、情境感知、操作導覽與現代化圖控畫面。'
          },
          {
            title: 'Historian',
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
        title: '雷力如何協助整理 AVEVA 架構',
        items: [
          {
            title: '工廠模型與模板規劃',
            paragraphs: [
              '定義區域、設備、物件與命名結構，讓 System Platform 在新增資產與畫面後仍保持可讀性。'
            ]
          },
          {
            title: 'HMI 與操作流程',
            paragraphs: [
              '依操作員回應製程狀態的方式，設計畫面階層、告警脈絡、導覽與狀態呈現。'
            ]
          },
          {
            title: 'Historian 與報表準備',
            paragraphs: [
              '與營運及工程使用者確認 Tag 選取、資料解析度假設、趨勢畫面、查詢需求與報表邊界。'
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
        title: '導入前需要先釐清的事',
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
            title: '資料用途',
            description:
              '把 Historian、趨勢、報表與 Dashboard 範圍綁定實際營運問題，避免只收資料卻沒有決策路徑。'
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
        title: '適合優先整理 Siemens PLC 的情境',
        items: [
          {
            title: 'PLC 交付週期',
            description:
              '需要規格協助、結構化程式、模擬思維測試、系統設計、試車與啟用後支援。'
          },
          {
            title: '硬體脈絡',
            description:
              '需要同時檢視現行控制器、遠端 I/O、舊型平台與切換限制。'
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
        title: '雷力如何協助導入',
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
        title: '導入前需要先釐清的事',
        columns: 3,
        items: [
          {
            title: '控制器世代',
            description:
              '先確認專案核心是現行控制器、遠端 I/O，或舊型硬體，再決定工具與搬遷範圍。'
          },
          {
            title: '網路與協定路徑',
            description:
              '把 Fieldbus、Serial、Cellular、備援協定與其他通訊需求放進試車及維護風險一起評估。'
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
      }
    ]
  }
} satisfies ProductDetailPagesMessages
