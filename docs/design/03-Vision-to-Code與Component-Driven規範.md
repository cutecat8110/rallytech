# Vision-to-Code與Component-Driven規範

最後更新：2026-04-02

## 文件目的

- 定義 reference 畫面如何被拆成可實作的 layout、section、cluster 與 primitive。
- 讓 clone 任務先輸出 Architecture Pack 與 Implementation Contract，再進入 Nuxt UI 實作。

## 適用角色

- 設計：確認哪些視覺可承接 reference，哪些必須回到品牌 token。
- 前端：將參考畫面轉成 Nuxt UI、component inventory 與 token substitution。
- AI agent：在 Vision-to-Code 任務中，先輸出 inventories 與 mapping，再寫程式。

## 1. Vision-to-Code 拆解順序

1. 先看 `layout shell`
2. 再拆 `section hierarchy`
3. 再拆 `cluster`
4. 再拆 `primitive`
5. 最後決定 `Nuxt UI mapping`、`token substitution` 與 `style ownership`

Architecture Pack 至少要產出：

- `IA map`
- `Block map`
- `Component inventory`
- `Interaction inventory`
- `Style inventory`
- `Content inventory`

## 2. Component-Driven Grammar

### Layout shell

優先對應本地既有 shell：

- `page-sys-shell`
- `page-sys-shell--wide`
- `content-sys-rail`
- `section-sys-shell`
- `PageHeroShell`

### Cluster

常見 cluster 類型：

- `cta-row`
- `badge-row`
- `stat-grid`
- `proof-strip`
- `card-grid`
- `process-steps`
- `hero-copy-stack`

### Primitive

常見 primitive 類型：

- `media-frame`
- `hero-shell`
- `hero-content-rail`
- `service-item`
- `proof-strip`
- `stat-block`
- `section-heading`
- `eyebrow`
- `nav-group`

規則：

- section component 只負責組裝 block-level grammar
- reusable primitive 負責跨 section 的穩定視覺語法
- 同一 reference pattern 若在多頁重複，優先抽成 primitive，不留在單頁硬編

### Hero grammar

- `Hero shell`：負責 section 外殼、高度 variant、shell 寬度與 media / overlay / decor / content 的 layering。
- `Hero content rail`：負責文案區最大寬度、對齊方式與標題節奏，不承接背景圖配方。
- `page` variant：首頁以外的標準 hero，高度應讓頁面身份與正文入口在首屏快速可見。
- `page` variant 預設使用單一 H1 的極簡內容規則；kicker、description 與入口頁敘事優先移回正文，不在 hero 內長期保留。
- `page hero with entry emphasis`：例如 `services overview`，仍屬 `page` variant，只能透過 content 與 decor 保留入口頁微差，不可升成第三種高度級別。
- `immersive` variant：首頁或品牌入口級場景使用，允許更高的首屏佔比與更強情緒密度。
- overlay、crop、grid、glow、motif 與單頁 copy rhythm 預設留在 page component local，不因共用 hero shell 而提升。

## 3. Architecture Pack 的必填欄位

每個 section 在進入實作前，至少要標記：

- `IA map`
- `Block map`
- `Component inventory`
- `Interaction inventory`
- `Style inventory`
- `Content inventory`

若任務屬於 clone / screenshot-to-code，還應補：

- `Reference truth`
- `Similarity target`
- `Allowed modernization`
- `Token substitution`
- `Defer list`

## 4. Implementation Contract 的必填欄位

- `route / page assembly`
- `section ownership`
- `primitive / component mapping`
- `Nuxt UI mapping`
- `token substitution map`
- `asset plan`
- `style ownership map`
- `QA checklist`

### `style ownership map` 建議格式

```ts
// Shared primitives: page-sys-shell, content-sys-rail
// Nuxt UI bridge: UButton, UTabs
// Block-level override: UTheme(button)
// Local-only styling: mission cutout crop, connector breakout geometry
```

## 5. Nuxt UI Mapping 規則

### 必須優先映射到 Nuxt UI 的項目

- button
- input
- textarea
- select
- accordion
- tabs
- modal / overlay
- form feedback

### 可自製 primitive 的項目

- media frame
- proof strip
- stat block
- decorative grid
- non-interactive surface block

前提：

- Nuxt UI 沒有對應能力時才可自製
- 自製 primitive 仍需回到 token 與 semantic slot 命名

## 6. Cloneable Visuals 與 Brand-Owned Visuals

### 可承接 reference 的項目

- block order
- section rhythm
- media crop strategy
- overlay density
- layout grammar
- CTA placement hierarchy

### 必須回到品牌 token 的項目

- 主色與深色骨架
- 字體家族
- button / input radius
- Nuxt UI 元件殼層
- icon tone
- primary CTA 語氣

原則：

- clone 的是資訊層級與視覺節奏
- 回到品牌的，是 runtime tokens、semantic vars 與 component theme

## 7. Image 與變體邊界

當輸入只有 screenshot 或 hero crop 時：

- 先輸出 `style inventory`
- 再輸出 `token substitution`
- 再輸出 `component skeleton`

禁止事項：

- 不因單張圖就直接產出整頁程式
- 不在缺少 DOM / interaction truth 的情況下，宣稱 full-fidelity clone
- 不把 AI 生圖混進第一輪 fidelity 驗收

## 8. 與 `01 / 02` 的邊界

- `01` 是 design system foundations、semantic-first 與 ownership matrix 主檔。
- `02` 是 Nuxt UI implementation order 與 local-vs-global 落地主檔。
- `03` 是 Vision-to-Code grammar、Architecture Pack 與 Implementation Contract 主檔。

## 9. 依賴文件

- 設計規則總綱：[`./01-設計系統規則總綱.md`](./01-設計系統規則總綱.md)
- Nuxt UI 實作層級：[`./02-AI切版與Preview維運規範.md`](./02-AI切版與Preview維運規範.md)
- Reference clone workflow：[`../project/05-Reference-Clone工作流與降級規範.md`](../project/05-Reference-Clone工作流與降級規範.md)
