import type { ServiceDetailPagesMessages } from '../types'

const sharedSidebar = {
  servicesHeading: '服務項目',
  contactHeading: '聯絡我們'
} as const

// Manual copy lock: relevant mapped public service detail copy comes from
// docs/rewrite/文案.md (2026-04-22).
// Do not rewrite these i18n messages without a new manual rewrite source.
export const serviceDetailPagesZhTw = {
  'scada-hmi-graphics': {
    seo: {
      title: '監控與人機介面圖控服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃 SCADA / HMI 畫面，讓現場更快看懂狀態、告警與操作動作。'
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
        title: '圖控整理的難點在資訊優先順序',
        paragraphs: [
          '現場畫面一旦累積太多狀態、趨勢與按鈕，操作端最容易失去的是先後順序，而不是資料量。',
          '我們會把總覽、設備頁與異常入口整理成可延伸的閱讀路徑，讓新增點位時仍能維持同一套邏輯。'
        ],
        highlights: ['畫面易判讀', '告警有脈絡', '後續好維護']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '畫面層級',
            description:
              '把總覽、單元與設備資訊分層，讓值班人員先看到需要處理的狀態。'
          },
          {
            title: '告警脈絡',
            description: '把告警放回設備與流程位置，協助判斷來源與影響範圍。'
          },
          {
            title: '操作動線',
            description: '把常用控制、確認與異常入口放進同一條操作路徑。'
          },
          {
            title: '維護規則',
            description:
              '保留命名、符號與版面規則，讓後續修改不必重新猜設計意圖。'
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
          '當點位、畫面或角色權限準備擴張時，就該先把圖控規則定下來；越早收斂，後續越不需要用零碎補丁維持操作。'
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
        title: '現場收斂的關鍵在共同節點',
        paragraphs: [
          'I&E 工作常卡在誰完成確認、誰接下一步、哪個缺失會影響啟動；問題不是清單不夠，而是節點沒有共用。',
          '我們會把測試結果、缺失狀態與現場回應串回同一張節奏表，讓跨專業協作有共同依據。'
        ],
        highlights: ['現場先就緒', 'FAT / SAT', '啟動支援']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '現場就緒',
            description: '確認啟動前必備條件、未決事項與責任窗口。'
          },
          {
            title: 'FAT / SAT 收斂',
            description: '把測試結果、缺失分類與收斂狀態放在同一個追蹤脈絡。'
          },
          {
            title: '啟動回應',
            description: '讓回路、訊號與設備問題可被快速帶回對應責任。'
          },
          {
            title: '跨團隊協調',
            description: '用共同節點對齊儀控、電力、設備與施工窗口。'
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
            description: '適合需要把工廠測試結果帶進現場啟動前確認的專案。'
          },
          {
            title: '電力系統分析',
            description: '適合新增負載、盤體調整或保護設定需要重新確認前。'
          },
          {
            title: '現場故障排除',
            description: '適合啟動或運轉中出現訊號落差，需要縮小排查範圍時。'
          },
          {
            title: '氣體分析系統',
            description: '適合分析儀訊號需要接回控制或資料流程的場景。'
          },
          {
            title: '儀表安裝校正',
            description: '適合新裝或更換儀表後，需要回到現場條件確認讀值時。'
          },
          {
            title: '電力計量部署',
            description: '適合新增監測點或整理既有電表資料來源時。'
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
          '在 FAT 尚未收尾、啟動窗口尚可調整時納入 I&E 支援，最能避免缺失被帶進現場。',
          '若儀控、電力與試車團隊需要共用同一套判斷依據，這個階段就應先安排。'
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
        title: '搬遷風險通常藏在相依條件',
        paragraphs: [
          '控制系統更新最容易失控的地方，不只在程式本身，而是在設備相依、操作習慣、回切條件與測試順序沒有被一起盤點。',
          '我們會把變更範圍拆成可驗證的單元，讓現場能依序確認，而不是到切換當天才發現缺口。'
        ],
        highlights: ['切換路徑清楚', '風險可控制', '邏輯好維護']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '切換邊界',
            description:
              '把受影響設備、訊號與操作介面圈出來，確認每一段切換的責任範圍。'
          },
          {
            title: '停機控制',
            description: '先定義可測、可退與不可中斷的條件，讓窗口使用有依據。'
          },
          {
            title: '邏輯可讀',
            description: '讓命名、模組與註記支援測試追蹤，不只支援上線。'
          },
          {
            title: '復原準備',
            description: '保留版本、備份與操作脈絡，讓異常時有可回到的基線。'
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
          '在停機窗口、測試範圍與回切條件被鎖定前納入 PLC / DCS 搬遷規劃，才能把風險控制設進流程，而不是留到現場補救。'
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
        title: 'PI Server 的難點在資料進來之後',
        paragraphs: [
          '當 tag 來源、命名與計算規則各自成長，平台很快會從資料骨幹變成難以理解的集合。',
          '我們會先整理哪些資料要被監看、哪些要支援報表、哪些會被其他系統取用，再決定結構與擴充方式。'
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
            description:
              '讓 tag、來源與計算結果可被不同用途共用，而不是分散成多套資料。'
          },
          {
            title: '脈絡與命名',
            description: '先訂規則，讓後續新增資料仍能被辨識與管理。'
          },
          {
            title: '報表延續',
            description: '把例行報表需要的粒度與計算方式納入平台設計。'
          },
          {
            title: '共同視角',
            description: '讓操作、工程與管理端使用同一份可追溯資料。'
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
              '適合多個系統需要共用同一批即時值，而不是各自建立資料出口的情境。'
            ]
          },
          {
            title: '標準化整合',
            paragraphs: [
              '適合每次新增來源都出現不同命名、介面或資料口徑時，先把擴充規則收斂。'
            ]
          },
          {
            title: '支援報表使用',
            paragraphs: [
              '適合例行報表需要固定計算基礎，避免每次產出前都重新對資料。'
            ]
          }
        ]
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          'PI Server 適合在儀表板、例行報表或外部串接開始增加前先納入。',
          '這時命名、來源與計算邏輯還能一起被定義，避免未來靠人工對照維持資料可用性。'
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
        title: 'Historian 要先想清楚未來怎麼查',
        paragraphs: [
          '歷史資料最常見的問題，是當下都有存，等到要追事件、做報表或回應稽核時，才發現粒度、保留與存取方式不夠一致。',
          '我們會依查詢情境決定保留策略、資料整理與備援方式，讓時間拉長後仍能找到可說明的紀錄。'
        ],
        highlights: ['長期可追溯', '冗餘可存取', '分析報表就緒']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '長期保留',
            description: '依報表、稽核與事件回顧需求設定保留週期。'
          },
          {
            title: '趨勢檢視',
            description: '讓趨勢資料能被穩定取出，支援不同時間尺度的比較。'
          },
          {
            title: '冗餘存取',
            description: '規劃本地與遠端路徑，讓資料存取不依賴單一路徑。'
          },
          {
            title: '追溯依據',
            description: '保留足以支撐品質、合規與異常說明的紀錄脈絡。'
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
          'Historian 應在保留規則、報表格式或稽核期待剛開始成形時就納入。',
          '這時資料粒度、儲存配置與存取路徑還能一起設計，避免日後才補齊追溯能力。'
        ]
      }
    ]
  },
  'network-design': {
    seo: {
      title: '工業網路與資安網路架構服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技規劃 IT / OT 網路分段、分層防禦、Zero Trust、HA / DR 與弱點掃描，協助企業降低資安與通訊風險。'
    },
    heroFocusItems: ['IT / OT 分段控管', '分層防禦設計', '高可用與擴充'],
    introParagraphs: [
      '工業網路不只是把設備接上線，而是要把 IT / OT 邊界、控制流量、遠端存取與資安防護一起規劃。',
      '我們依現場通訊與風險條件建立分層架構，整合網路分段、HA / DR、Zero Trust 與弱點掃描，降低營運中斷與資安風險。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'network-design',
        imageAlt: '網路設備與連接線材近景',
        layout: 'image-left',
        title: '網路與資安邊界要在系統擴張前先定清楚',
        paragraphs: [
          '當企業 IT、工業設備與遠端連線需求一路增加，網路很容易累積成難以管理的例外規則，資安邊界也會變得模糊。',
          '我們會先盤點 Compute / Storage / Network、Core / Control / Field 分層與 IT / OT segmentation，讓連線、權限與維護責任有可追蹤的基線。'
        ],
        highlights: ['IT / OT 分段控管', '分層防禦設計', '高可用與擴充']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '分層架構',
            description:
              '依 Core / Control / Field 與現場通訊需求整理網路拓樸，降低互相干擾。'
          },
          {
            title: '存取控管',
            description:
              '以 IT / OT segmentation、VPN 與身分存取管理定義誰能連、何時能連、能操作什麼。'
          },
          {
            title: '資安防護',
            description:
              '結合 Defense in Depth、Zero Trust、IPS / Threat Protection 與 Vulnerability Scanning，持續檢視風險暴露。'
          },
          {
            title: '韌性擴充',
            description:
              '把 HA / DR、備援拓樸與未來設備接入納入設計，支撐後續擴充。'
          }
        ]
      },
      {
        type: 'capability-list',
        title: '承接內容與做法',
        items: [
          {
            title: 'IT / OT 架構規劃',
            paragraphs: [
              '整合企業 IT 基礎建設與工業網路需求，從 Compute / Storage / Network 到控制網路分層建立一致設計。'
            ]
          },
          {
            title: '分段與安全邊界',
            paragraphs: [
              '規劃網路分段、防火牆、VPN 與權限控管，在不影響既有服務的前提下逐步導入。'
            ]
          },
          {
            title: '監測與風險追蹤',
            paragraphs: [
              '透過流量分析、弱點掃描與風險評估，持續檢視網路與資安防護狀態。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '新建機房、產線、工廠或遠端連線需求增加前，應先完成網路與資安架構盤點；越晚處理，分段、權限與備援越容易變成事後補救。'
        ]
      }
    ]
  },
  'remote-monitoring-and-data': {
    seo: {
      title: '遠端監控與資料備援服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技提供離岸風場與偏遠場域遠端維運支援，整合 Secure Remote Access、SCADA / PLC / HMI 維運與 OT 狀態監測。'
    },
    heroFocusItems: ['遠端安全操作', '即時故障處理', '降低現場風險'],
    introParagraphs: [
      '離岸風場與偏遠場域的系統維運，需要同時兼顧穩定性、安全性與即時反應。',
      '我們結合 OT 系統經驗與資安架構能力，建立可遠端操作、可監控且可追蹤的維運管理機制。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'remote-monitoring-and-data',
        imageAlt: '多螢幕遠端監控工作站',
        layout: 'image-right',
        title: '遠端維運要同時處理安全連線與操作責任',
        paragraphs: [
          '在高限制、低可達性的場域，問題不只是能不能連線，而是異常發生時誰能安全登入、看到什麼、怎麼判斷與留下紀錄。',
          '我們會把 Secure Remote Access、SCADA / PLC / HMI 支援、OT 網路狀態監測與權限流程放在同一套維運架構中，降低人員往返與現場風險。'
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
              '設計 Secure Remote Access 與權限控管，讓遠端操作有清楚邊界。'
          },
          {
            title: '系統維運支援',
            description:
              '支援 SCADA / PLC / HMI 系統維運與異常判斷，協助現場快速收斂問題。'
          },
          {
            title: 'OT 狀態監測',
            description:
              '整合 OT 網路與設備狀態，讓維運團隊能即時掌握關鍵訊號。'
          },
          {
            title: '事件遠端處理',
            description:
              '建立告警事件遠端分析與處理流程，提升故障診斷與回應速度。'
          }
        ]
      },
      {
        type: 'card-grid',
        title: '常見情境',
        columns: 3,
        items: [
          {
            title: '離岸風場維運',
            description:
              '適合高風險、低可達性的風場或偏遠場域，需要降低人員往返風險時。'
          },
          {
            title: '遠端操作管理',
            description:
              '適合維運需仰賴遠端操作，且必須控管登入權限與操作流程時。'
          },
          {
            title: 'SCADA / OT 集中管理',
            description: '適合 SCADA / OT 系統需要集中監看、分析與維護支援時。'
          },
          {
            title: '維運成本控制',
            description:
              '適合希望透過遠端處理縮短故障定位時間，降低現場維運負擔時。'
          }
        ]
      },
      {
        type: 'summary',
        title: '適合提早納入的情境',
        paragraphs: [
          '離岸風場或偏遠場域建置時，就應把遠端連線、監控與權限流程一起設計。',
          '這時安全通道、操作責任與事件追蹤還能形成同一套維運體系，避免上線後才補齊遠端管理。'
        ]
      }
    ]
  },
  'alarm-monitoring': {
    seo: {
      title: '告警監控與可視化維運管理服務 | 雷力科技 Rally Technology',
      description:
        '雷力科技整合告警監控、事件通知、趨勢分析與維運流程，協助 IT / OT 團隊快速回應真正需要處理的事件。'
    },
    heroFocusItems: ['優先順序清楚', '事件快速處理', '降低告警噪音'],
    introParagraphs: [
      '在 IT 與 OT 整合環境中，缺乏統一監控與告警機制，會讓問題難以及時掌握，也讓操作端花時間處理雜訊。',
      '我們建立告警路由、事件通知與升級流程，讓團隊把更多資源放在關鍵問題的判斷與處理。'
    ],
    sidebar: sharedSidebar,
    blocks: [
      {
        type: 'media-feature',
        mediaSlot: 'alarm-monitoring',
        imageAlt: '監控螢幕顯示告警與狀態資訊',
        layout: 'image-left',
        title: '告警監控的核心是把真正的事件排到前面',
        paragraphs: [
          '當告警、效能數據、弱點掃描與維運流程分散在不同系統，團隊很難判斷哪個事件需要先處理。',
          '我們會整合 IT / OT 設備監控、告警通知、歷史趨勢與事件管理，形成可視化且可追蹤的維運管理流程。'
        ],
        highlights: ['優先順序清楚', '事件快速處理', '降低告警噪音']
      },
      {
        type: 'proof-strip',
        title: '重點項目',
        items: [
          {
            title: '優先順序',
            description:
              '建立告警分類與嚴重度邏輯，讓真正需要介入的事件先被看見。'
          },
          {
            title: '即時通知',
            description: '整合事件通知與升級流程，縮短故障定位與處理時間。'
          },
          {
            title: '趨勢分析',
            description: '保留歷史數據與效能監測脈絡，支援異常偵測與後續判斷。'
          },
          {
            title: '風險追蹤',
            description: '把弱點掃描結果與維運事件串接，讓風險狀態可被追蹤。'
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
              '整合 IT / OT 設備與系統資料來源，建立集中監控與可視化維運視角。'
            ]
          },
          {
            title: '告警與事件流程',
            paragraphs: [
              '規劃即時告警、通知路徑、升級規則與事件管理，讓責任與處置順序更清楚。'
            ]
          },
          {
            title: '數據與風險管理',
            paragraphs: [
              '結合歷史趨勢、效能監測、異常偵測與弱點結果，支援資料驅動的維運判斷。'
            ]
          }
        ]
      },
      {
        type: 'closing-note',
        paragraphs: [
          '當系統異常難以即時發現、監控分散或維運流程仍仰賴人工時，就應先整理告警與事件管理邏輯；越晚處理，告警噪音越容易稀釋真正的風險。'
        ]
      }
    ]
  }
} satisfies ServiceDetailPagesMessages
