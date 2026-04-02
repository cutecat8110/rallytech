# Nano Banana 提示詞與生成流程

最後更新：2026-04-02

## 文件目的

- 收斂目前 `Nano Banana 2 / Pro` 的可用研究結論。
- 把 B2B 工業控制網站 Hero 圖的出圖流程寫成可重複執行的 SOP。
- 避免每次生成都從零開始，或只靠直覺調 prompt。
- `home-hero` 是第一個完整範例；其他 slot 應沿用相同 onboarding 結構擴張。
- `mission-square` 是第一個 state-aware onboarding 範例；同一 slot 內可承接 `mission` 與 `join-us` 兩個 state。
- `about-detail` 與 `services-surface` 是本輪新增的一般單一 slot 範例；兩者不接受 state，僅擴張 image role catalog。

## 適用情境

- 首頁 Hero 圖
- About / OTE / Mission 等首頁主視覺替換
- 需要「可直接商用感」而不是模板 AI 圖感的網站圖片

## 研究來源分級

本文件將 Nano Banana 提示詞研究分成三層，避免把不同可信度的資訊混成同一種結論。

### A. 官方文件

依 2026-04-02 官方文件：

- `Nano Banana 2` = `gemini-3.1-flash-image-preview`
- `Nano Banana Pro` = `gemini-3-pro-image-preview`
- `Nano Banana` = `gemini-2.5-flash-image`

已確認重點：

- Gemini 原生圖像能力支援 `text`、`image`、或 `text + image` 組合輸入。
- `Nano Banana Pro` 明確定位為較適合 professional asset production。
- `Nano Banana 2` 偏向高效率、高吞吐量開發情境，不等於最終商用 Hero 品質最佳。

結論：

- 若目標是網站正式 Hero 圖，不應預設 `Flash Image` 一次就能達到最終商用品質。
- `Flash Image` 較適合：
  - 構圖探索
  - prompt 方向測試
  - 快速候選圖
- `Pro Image` 較適合：
  - 正式主視覺
  - 高保真品牌資產
  - 對構圖與質感要求高的最終稿

### B. 社群研究與外部方法論

#### 1. `last30days-skill`

Repo：<https://github.com/mvanhorn/last30days-skill>

這個 skill 的角色不是直接出圖，而是研究近 30 天社群與網路對某個主題的最佳實務。

它適合拿來研究：

- `Nano Banana Pro prompting`
- `Gemini 3 Pro Image website hero prompts`
- `B2B industrial control room hero image prompting`
- `AI image prompting for photoreal industrial website hero`

它不直接解決：

- 生成品質
- 本地 prompt 模板治理
- 我們專案的候選圖 / promotion 流程

結論：

- `last30days-skill` 應作為「研究層」工具，而不是「生成層」工具。
- 若未來要安裝，可把它納入 prompt research 工作流，但不取代本 repo 的 prompt template 與 manifest。

#### 2. JSON Prompting Playbook

使用者已補充正文內容，因此目前可確認的高信心方法論包括：

- 用結構化欄位取代單段散文 prompt
- `subject` 優先拆成 list，而不是塞在一個長句裡
- `colorRestriction` 是高優先欄位，直接影響整體色彩一致性
- `madeOutOf` / 材質描述會影響光線與表面反應
- `lens`、`aperture`、`lighting.direction` 都應視為可控攝影決策
- 若執行環境支援 seed，應固定 seed 後一次只改一個欄位

但要注意：

- 這些 schema 與 generation params 來自外部方法論，並不等於目前本 repo 生成腳本已完整支援所有欄位。
- 目前 repo 內的 Gemini 腳本主要仍依賴 prompt 文字、aspect ratio、image size 與 reference image；`seed`、`guidance_scale`、`steps` 目前未納入既有腳本介面。

#### 3. 20 Nano Banana 2 Prompts You Need to Start Using Immediately

使用者另提供一份聚焦於 Nano Banana 2 的 Notion prompt 集合作為外部參考來源。

本輪採用方式如下：

- 視為社群方法論參考，不視為逐字權威來源。
- 只吸收高信心、可重複、可商用的 prompt pattern。
- 不逐字轉錄、也不假設 20 條 prompt 原文都已被完整驗證。
- 其價值主要在於幫我們建立「recipe / pattern library」，而不是取代本 repo 的 brief、manifest 與 promotion 流程。

本輪可直接吸收的高信心規則包括：

- 疊加技術訊號：`lens + aperture + light source + time of day + motion type`
- 使用明確空間定位：`left / right / behind / foreground / background`
- 指定可辨識的視覺標準：例如 `corporate photography style`、`Amazon listing quality`、`Vogue editorial`
- 針對不同 use case 寫 prompt family，而不是所有題材共用一種寫法

### C. 本 repo 實測結論

真正用於專案決策的高優先資訊，仍以本 repo 候選圖與人工判讀為準，例如：

- 哪一種 prompt 會產生嵌入式假標題 / 假按鈕
- 哪一種 reference 用法更容易出現 office-stock 感
- 哪一種 negative constraint 能有效降低 HUD / fake dashboard / AI sheen

結論：

- `官方文件` 用來定模型能力與合理邊界。
- `社群研究與外部方法論` 用來找可借鏡的 pattern。
- `本 repo 實測` 才是最後要回寫到 SOP 與 prompt template 的專案真相來源。

## 目前這張 Hero 候選圖的問題

目前候選圖：

- `data/nano-banana/manifests/home-hero.json`
- `home-hero-20260401091817773-8vhfv7`

人工判讀問題如下：

1. 場景太像一般辦公室 + 控制室混合圖，沒有強烈的工業控制中心真實感。
2. 玻璃牆上的電路視覺元素過度裝飾，像 AI 主動加上的「科技感貼圖」。
3. 螢幕內容偏 generic dashboard，不像真實 SCADA / HMI / historian 監控畫面。
4. 構圖沒有網站 Hero 的主視覺節奏，視覺重心過散。
5. 人物背影與座椅比例雖然不算失真，但整體仍偏 stock-like / synthetic corporate scene。
6. 光線偏平，沒有高端 B2B 官網常見的「乾淨、克制、可承載文案」的攝影感。

結論：

- 問題不只在 prompt 太短，而是 brief 還不夠像 art direction。
- 我們現在描述了「題材」，但還沒鎖住「網站 Hero 視覺語法」。

## 為什麼目前 prompt 會出現差的 AI 圖感

目前 prompt 雖然有：

- 場景
- 鏡頭
- 光線
- 品牌語氣
- avoid list

但仍有三個缺口：

### 1. 缺少「真實性錨點」

現在 prompt 有提 `SCADA and HMI displays`，但沒有指定：

- 控制室的空間型態
- 控制台材質
- 真實工業控制中心會出現與不會出現的元素
- 哪些 UI 感覺是「可信」，哪些是「AI 想像科技介面」

模型就會用自己的平均值去補，結果常變成假科技感。

### 2. 缺少「商用網站 Hero 構圖規範」

現在 prompt 雖然有提 negative space，但仍不夠明確：

- 左右哪一側留白
- 主體應該是 room、screen wall、還是 operator
- 前景 / 中景 / 背景誰主誰次
- 視覺節點要幾個

模型因此容易把畫面做成「很多東西都重要」，而不是首頁 Hero。

### 3. 缺少「不該出現的企業 stock/AI 特徵」

目前 avoid list 還不夠貼近我們的失敗案例，應該明確排除：

- 泛辦公室桌機與過多 office chair 視覺
- 虛假的 HUD / 發光 circuit overlay
- 隨機白板、假流程圖、假報表
- 看起來像模板 SaaS dashboard 的 UI
- 中央過於呆板的人物背影

## Pattern-Based Workflow

這一輪開始，Nano Banana 的流程固定為：

`brief -> 選 pattern -> 指派 reference 角色 -> 生成 -> failure labeling -> 下一輪單變數迭代`

### Phase 1：先定圖像 brief，不直接定 prompt

每次先寫 6 個欄位：

1. `business_goal`
2. `page_role`
3. `visual_message`
4. `reality_anchor`
5. `composition_rule`
6. `disallowed_ai_signals`

範例：

- `business_goal`: 建立雷力科技在工業自動化與控制整合上的可信度
- `page_role`: 首頁 Hero
- `visual_message`: 現代化、可交付、真實控制中心，而不是概念藝術
- `reality_anchor`: 玻璃隔間控制室、雙層操作台、真實 SCADA 監控牆、乾淨設備材質
- `composition_rule`: 畫面右側保留文案安全區；左中為主要視覺；僅 1 個主焦點
- `disallowed_ai_signals`: HUD 疊圖、泛辦公室感、假儀表板、過度霓虹、科幻 UI

並補上這次新增的流程欄位：

- `source_refs`
- `recipe_ids`
- `reference_roles`
- `overlay_policy`
- `iteration_hypothesis`
- `technical_signals`
- `spatial_positioning`
- `visual_standard`
- `color_restriction`
- `material_notes`

用途如下：

- `source_refs`：記錄這輪 brief 依據哪些官方 / 外部 / repo 實測來源整理。
- `recipe_ids`：對應 [Nano-Banana-提示詞模式附錄.md](./Nano-Banana-提示詞模式附錄.md) 中選用的 recipe。
- `reference_roles`：明確標記每張 reference image 的責任，不讓模型自由平均混合。
- `overlay_policy`：固定網站 Hero 的文字疊加策略，例如 `empty-safe-area-no-embedded-text`。
- `iteration_hypothesis`：只描述這一輪要驗證的一個假設。
- `technical_signals`：記錄鏡頭、光圈、光源、時間、動態等技術訊號。
- `spatial_positioning`：把關鍵主體放置規則寫成導演式指令，而不是模糊氣氛描述。
- `visual_standard`：指定本輪想調用的已知訓練集視覺語法。
- `color_restriction`：限制可接受的色彩範圍，避免模型自動飽和化。
- `material_notes`：定義材質與表面反應，避免塑膠 AI 光澤。

### Phase 2：先選 recipe，再組 prompt

不要每次都從空白 prompt 開始。

流程固定為：

1. 先看 [Nano-Banana-提示詞模式附錄.md](./Nano-Banana-提示詞模式附錄.md)
2. 選 2 到 4 個最相關的 `recipe_ids`
3. 先把 recipe 轉成 brief 欄位，再組成 prompt

這樣做的目的不是把 prompt 模板化到僵硬，而是把高頻成功模式沉澱成可重用的 pattern library。

### Phase 3：用 JSON 結構寫 prompt

不要直接寫長段散文 prompt。改成結構化 JSON prompt。

對目前專案最重要的不是追求最複雜 schema，而是讓以下欄位穩定存在：

- `subject`
- `scene`
- `reality_anchors`
- `composition`
- `lighting`
- `technical_signals`
- `spatial_positioning`
- `visual_standard`
- `color_restriction`
- `material_notes`
- `avoid`

欄位建議：

```json
{
  "asset_type": "website hero image",
  "business_context": "Taiwanese industrial automation company",
  "goal": "Build trust and modern industrial capability",
  "scene": "A real industrial automation control center behind glass",
  "subject": "A clean control room with authentic SCADA wall displays and one operator used as scale only",
  "reality_anchors": [
    "glass-partitioned control room",
    "matte metal console surfaces",
    "large industrial monitoring wall",
    "credible process-control screens",
    "architectural interior photography"
  ],
  "composition": {
    "format": "16:9",
    "hero_safe_area": "right side",
    "focal_structure": "one primary focal point, one secondary depth cue",
    "camera": "wide interior architectural photo, eye-level or slightly elevated"
  },
  "lighting": {
    "style": "soft premium commercial interior lighting",
    "contrast": "controlled",
    "mood": "high-trust, modern, calm"
  },
  "commercial_constraints": [
    "usable as a homepage hero image",
    "clean negative space for headline and CTA",
    "premium B2B website aesthetic",
    "photorealistic"
  ],
  "avoid": [
    "futuristic HUD overlays",
    "fake generic dashboards",
    "office-stock atmosphere",
    "random whiteboards",
    "too many chairs or desks dominating the scene",
    "cyberpunk glow",
    "cartoonish rendering",
    "obvious AI texture artifacts"
  ]
}
```

### Phase 4：先指派 reference 角色，再做 image-to-image

依 Google 官方能力，Gemini 支援 `text + image`。

對我們現在這種網站 Hero 情境，應優先使用：

- `現有 stock Hero` 作為構圖參考
- 必要時加第 2 張 reference 作為材質 / 空間風格參考

推薦角色分工：

- `Reference 1`: 構圖與鏡頭節奏
- `Reference 2`: 空間材質與工業可信度

不要讓單一 reference 同時承擔：

- 構圖
- 材質
- 風格
- UI 可信度

否則模型常會平均混合，導致假圖感。

### Phase 5：生成後先做 failure labeling

每張候選圖都先標記失敗類型，再決定下一輪怎麼改。建議至少判讀以下欄位：

- `fake-ui`
- `office-stock`
- `embedded-copy`
- `hud-overlay`
- `flat-lighting`
- `bad-safe-area`
- `weak-industrial-credibility`
- `composition-drift`

目的：

- 讓下一輪修改是針對可命名的失敗模式
- 避免每次都用模糊的「感覺不好」來調 prompt

### Phase 6：一次只改一個維度

每輪生成只改一種變數：

- 只改構圖
- 或只改真實性錨點
- 或只改 lighting
- 或只改人物存在感

不要同時大改全部欄位，否則無法知道哪個變更真的有效。

### Phase 6.5：優先修改高槓桿欄位

若要提高網站 Hero 的可用率，優先修改順序建議如下：

1. `overlay_policy`
2. `color_restriction`
3. `visual_standard`
4. `technical_signals`
5. `reality_anchors`
6. `spatial_positioning`
7. `material_notes`

原因：

- 這些欄位比單純堆更多形容詞更能穩定控制結果。
- 先改高槓桿欄位，較容易知道是哪個變更帶來了品質提升或退化。

### Phase 7：promotion 前先過商用檢查

每張候選圖都先過以下 checklist：

1. 一眼看上去像真實商業攝影，不像 AI 合成
2. 可以承載首頁 H1 + CTA，不擁擠
3. 沒有 generic fake dashboard
4. 沒有過度裝飾的科技感元素
5. 沒有 stock-office 感
6. 與雷力科技的 B2B 工業控制語境相符

只要其中兩項不成立，就不進 promote。

## Hero 圖建議 prompt 模板

以下模板偏向 `image + text` 模式，但用途是「生成網站 Hero 背景圖」，不是直接把網站 copy 畫進圖片：

```json
{
  "asset_type": "homepage hero background image",
  "business_context": "Rally Technology, Taiwanese industrial automation and control systems company",
  "goal": "Create a commercially usable B2B website hero image that feels real, modern, trustworthy, and directly relevant to industrial control integration",
  "reference_usage": {
    "image_1": "preserve overall room composition, lens feel, and website-safe framing",
    "image_2": "optional material and lighting reference only"
  },
  "scene": "A real industrial control center with glass partitions, integrated monitoring wall, and clean engineering consoles",
  "subject": "One operator may appear only as scale support, but the room itself is the hero",
  "reality_anchors": [
    "credible SCADA-style monitoring wall",
    "matte consoles and hardware",
    "modern industrial architecture",
    "clean and restrained control room details"
  ],
  "composition": {
    "format": "16:9",
    "hero_safe_area": "right side reserved as empty architectural negative space for later website headline and CTA overlay",
    "focal_structure": "left-center primary focus with strong depth",
    "camera": "architectural interior photography, eye-level, realistic perspective"
  },
  "lighting": {
    "style": "premium commercial interior photography",
    "mood": "confident, calm, high-trust",
    "surface_behavior": "controlled reflections, no plastic AI sheen"
  },
  "commercial_constraints": [
    "must feel suitable for a modern B2B technology website",
    "must look photorealistic",
    "must avoid visual clutter",
    "must not feel like concept art or synthetic office stock",
    "the image itself must contain no embedded headline text, no button, and no website UI"
  ],
  "avoid": [
    "HUD overlays",
    "floating circuit graphics",
    "generic fake analytics dashboards",
    "random whiteboards",
    "crowded desks",
    "too many office chairs",
    "sci-fi glow",
    "cartoon textures",
    "obvious AI artifacts",
    "embedded copy",
    "button graphics",
    "website mockup overlay"
  ]
}
```

## 與 `last30days-skill` 的搭配方式

若未來要裝 `last30days-skill`，建議只用它來研究，不直接出圖。

建議研究 query：

- `Nano Banana Pro prompting for photorealistic B2B website hero images`
- `Gemini 3 Pro Image industrial control room prompt techniques`
- `AI image prompting for realistic industrial control center photography`
- `How people avoid AI look in Gemini image generation for web hero images`

使用時機：

1. 新模型剛更新時
2. 我們連續 3 次出圖都不滿意時
3. 要切換 `Flash Image` 到 `Pro Image` 前

## 本 repo 建議落地方式

owner 邊界固定如下：

- 長期圖像 guardrails：`.agents/ai-image-context.md`
- execution brief / prompt / manifest：`data/nano-banana/`
- research appendix 與 prompting methodology：`docs/references/`

對 `mission-square` 這類 state-aware slot，execution 規則固定為：

- manifest 使用 `states.<state>.stock/candidates`
- prompt seed 使用 `<slot>-<state>-v1.txt`
- candidate id 需包含 state，避免不同 tab 候選混在一起

對 `about-detail`、`services-surface` 這類一般單一 slot，execution 規則固定為：

- manifest 使用一般 `stock/candidates` 結構
- prompt seed 使用 `<slot>-v1.txt`
- 不接受 `--state`
- 不宣稱已接入前端 runtime

1. 先決定 slot id，例如 `home-hero`、`about-primary`、`ote-background`、`connector-image`
2. 建立 `data/nano-banana/briefs/<slot>-brief-template.json`
3. 先選 [Nano-Banana-提示詞模式附錄.md](./Nano-Banana-提示詞模式附錄.md) 的 `recipe_ids`
4. prompt 模板放在 `data/nano-banana/prompts/`
5. active manifest 放在 `data/nano-banana/manifests/<slot>.json`
6. `home-hero` 目前是第一個 fully wired 範例；其他 slot 先以 scaffold 形式擴張
7. 每次生成都保留 resolved prompt
8. 每次只改一個 prompt 維度
9. 每一輪候選圖在 manifest 裡記下：
   - `what changed`
   - `why changed`
   - `result judgment`
10. promotion 前用本文件 checklist 做人工判讀

## 從本次新增研究吸收的固定規則

### 1. 疊加技術訊號，不要只寫風格形容詞

對 photoreal B2B Hero 而言，至少同時指定：

- lens
- aperture
- light source
- time of day
- motion / stillness rule

只寫 `premium`、`modern`、`cinematic`，通常不夠。

### 2. 用導演式空間描述，不要只丟氣氛詞

比起：

- `high-tech industrial mood`

更應該寫成：

- `monitoring wall in the left-center`
- `empty safe area on the right`
- `operator as a secondary depth cue`
- `glass partition in the foreground`

### 3. 明確點名視覺標準

對商用圖像有幫助的視覺標準包括：

- `corporate photography style`
- `architectural interior photography`
- `Amazon listing quality`
- `Vogue editorial`

但只使用與目標場景真的相符的標準，不能為了高級感亂套。

### 4. 色彩限制是高槓桿欄位

若不限制色彩，模型容易：

- 過度飽和
- 偏向假科技藍紫光
- 背景色與材質色互相污染

因此每輪都應盡量寫出 `color_restriction`。

### 5. 材質不是附屬資訊

寫出：

- `matte metal`
- `glass partition`
- `composite console surface`
- `soft screen glow without plastic sheen`

會比只寫 `modern control room` 更接近商用真實感。

## 本輪結論

- 問題不是單純「要不要更長 prompt」。
- 真正缺的是：
  - 商用網站 Hero 的 art direction
  - 真實性錨點
  - anti-AI-signal 約束
  - 結構化 prompt 流程
- 若要追求正式站可用 Hero，下一步應優先測：
  - `更強的 JSON prompt`
  - `兩張 reference 的角色分工`
  - `Nano Banana Pro` 作為正式稿模型
- 實測補充：
  - 若 prompt 提到「可承載首頁 headline / CTA」，模型可能誤解成要直接把標題與按鈕畫進圖片。
  - 因此 Hero prompt 應改寫成「保留空白供後續網頁疊字」，並明確禁止任何內嵌文字、按鈕與網站 UI。
