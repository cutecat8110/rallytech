# 整站 UIUX 一致性 QA 報告

最後更新：2026-04-23  
範圍：公開站繁中與英文頁面，包含 `/`、`/about`、`/services`、11 個服務詳情頁、`/one-touch-experience`、`/contact` 與對應 `/en/...`。  
Evidence：`pentagonClone/captures/uiux-consistency-20260422/summary.json` 與同資料夾 78 張截圖；2026-04-23 rhythm pass evidence 位於 `pentagonClone/captures/rhythm-theme-pass-20260423-v2/` 與 `pentagonClone/captures/rhythm-theme-pass-20260423-v3-contact-map/`。  
基準來源：`app/assets/css/main.css`、`app/app.config.ts`、`docs/design/01-設計系統規則總綱.md`、`docs/design/02-AI切版與Preview維運規範.md`、`docs/design/03-Vision-to-Code與Component-Driven規範.md`、`docs/project/04-協作與交付規範.md`、`docs/project/08-整站文案節奏與區塊分工規範.md`。

## Executive Summary

本輪 QA 判斷：整站目前不是「同樣的東西有 4、5 種版本各自為政」的狀態。核心 heading、hero、section intro、內容標題、段落 stack 與主要 CTA 已經有明確 shared primitives，且大多數公開頁都遵守 Nuxt UI First 與 semantic token 邊界。

主要風險集中在三個地方：

1. `/contact` 的收束節奏與 map 區塊視覺完成度不足，是目前最明顯破壞現代感與轉換閉環的畫面。
2. `FrontendHeader` 有大量 local `:ui`、`!important` 與公開可見的 image/source/language control，技術上仍使用 Nuxt UI，但治理上已接近一套 header 專用按鈕系統。
3. 服務詳情頁雖然 component usage 一致，但內容節奏偏文檔化，和首頁、服務總覽、一站式頁的高階視覺張力相比，較像規格說明頁。

區塊間距整體沒有系統性偏窄。首頁、服務總覽、一站式頁與多數內頁 hero 使用 80px desktop / 40px mobile 的主節奏，視覺上足夠穩。偏窄主要是 local rhythm 問題，尤其是 contact main/direct/map 三段，以及服務詳情內容段落的資訊密度。

## 2026-04-23 Implementation Update

本文件保留 2026-04-22 QA findings 作為基線，以下項目已在 2026-04-23 修正或重新分類：

- `FrontendHeader` segmented controls 與 header CTA 已收斂到 `headerSegmentedButtonTheme` / `secondarySolidButtonTheme`。
- `ContactPageShell` submit button 已回到 global `primary solid`，contact icon actions 已改用 approved icon theme。
- Contact direct contact details 已改為 full-width band 並直接貼齊 map；map 已改為 edge-to-edge 滿版地圖帶，移除「辦公室位置」資訊列與 map 內文字 CTA；iframe 空白時仍保留 branded fallback surface。
- Services overview、service detail、one-touch 與 footer 已做系統微放大的 local rhythm pass。
- Button Governance Review 已改為 matrix，剩餘例外分成 approved exception 與 should converge。

## Objective

從程式面與視覺面完整稽核公開站是否具有一致的 heading、hero、內文、CTA、section spacing、元件治理與現代 B2B UIUX 張力，並交付可分批執行的修正計畫。

## Constraints

- 本輪不改 runtime UI，不修改 public API、schema 或 i18n 型別。
- `docs/rewrite/文案.md` 對應的 public copy 視為 manual-locked copy，本輪只檢查 copy rhythm 與版面承載，不重寫文案。
- `/design-system` 只作 token 與元件基準佐證，不列入一般訪客頁面現代感評分。
- `/source` 與內部 color lab 不列入使用者畫面評分。
- 若程式推論與瀏覽器渲染 evidence 衝突，以實際截圖與 runtime metrics 為準。

## Options

1. 先做全站 UI 重構。  
   不建議。現況已有 shared primitives，直接重構容易增加風險，也會碰到 manual copy lock。

2. 先做 QA 報告，再分批修高重複、高影響問題。  
   建議採用。可保留已經穩定的設計系統，同時把 header、contact、detail rhythm 的問題拆成可驗證 batch。

3. 只做視覺 polish，不處理 component governance。  
   不建議。header/button 的 local override 若不先收斂，後續視覺 polish 會繼續累積例外。

## Recommendation

採用「QA 報告先行，後續分批修正」。第一批優先處理 header/button governance 與 contact page conversion close，因為它們同時影響程式一致性、品牌感與轉換清晰度。第二批再處理首頁 hero exception 與服務詳情頁 rhythm。

## Decision

本輪交付 QA 報告與修正計畫，不直接改 UI。後續實作只在同一 pattern 跨 2 個以上公開區塊重複時，才新增或擴充 shared primitive props；單頁局部問題優先以 local rhythm 修正。

## Evidence Summary

- 已擷取 26 個公開 route，3 種 viewport，共 78 張截圖。
- Viewport：1920x1080、1440x900、390x844。
- 代表 evidence：
  - 首頁 desktop：`pentagonClone/captures/uiux-consistency-20260422/zh-tw__home__1440.jpg`
  - 首頁 mobile：`pentagonClone/captures/uiux-consistency-20260422/zh-tw__home__390.jpg`
  - 聯絡頁 desktop：`pentagonClone/captures/uiux-consistency-20260422/zh-tw__contact__1440.jpg`
  - 聯絡頁 mobile：`pentagonClone/captures/uiux-consistency-20260422/zh-tw__contact__390.jpg`
  - 服務詳情 mobile：`pentagonClone/captures/uiux-consistency-20260422/zh-tw__services__scada-hmi-graphics__390.jpg`
- Runtime evidence 初查結果：
  - 26 個 route 皆為 HTTP 200。
  - 全部截圖已隱藏 Nuxt dev overlay。
  - 全部 route 在 390、1440、1920 viewport 未偵測到水平 overflow。
  - 全部 route 皆有且僅有 1 個 H1。
  - 截圖流程未偵測到 broken image。

## Findings

### P0

無 P0。

目前沒有發現會阻斷公開頁瀏覽、造成主要 CTA 不可操作、或造成整站 heading/route 結構失效的問題。

### P1

#### P1-1 `/contact` map 與頁尾前收束節奏未完成

- Route：`/contact`、`/en/contact`
- Block/component：`ContactPageShell`、`.contact-sys-map-section`
- Code evidence：`app/components/page/contact/ContactPageShell.vue:618`、`app/components/page/contact/ContactPageShell.vue:625`
- Visual evidence：`zh-tw__contact__1440.jpg`、`zh-tw__contact__390.jpg`
- 問題：表單與 direct contact 之後接一段高度約 269px 到 317px 的 map 區塊，但截圖中呈現大面積空白，缺少地圖資訊、品牌化 fallback 或明確的 closing module。
- 影響：聯絡頁是主要轉換頁，空白 map 讓頁面結尾像未載入完成，削弱專業感與信任閉環。
- 建議修正：將 map 區塊改為有狀態的地圖容器，至少包含 branded neutral surface、地址資訊、載入失敗 fallback 與明確 border/背景；若地圖不能穩定載入，先以 address/location panel 取代空白 iframe。

#### P1-2 Header control 與按鈕 override 已接近平行系統

- Route：全站 header
- Block/component：`FrontendHeader`
- Code evidence：`app/components/layout/FrontendHeader.vue:231`、`app/components/layout/FrontendHeader.vue:260`、`app/components/layout/FrontendHeader.vue:278`、`app/components/layout/FrontendHeader.vue:299`、`app/components/layout/FrontendHeader.vue:323`、`app/components/layout/FrontendHeader.vue:686`
- 問題：header 內 image mode、locale、contact CTA、mobile menu 多處用 local `:ui` 與 CSS state class 控制，同時有 16 個 `!important`。技術上使用 `UButton`，但視覺狀態與文字色已大量繞過 global `app.config.ts` 與 `button-themes.ts`。
- 影響：後續若調整 button tokens，header 不一定同步；公開畫面也會出現 FREE/AI/source/language controls 佔據首屏注意力，削弱 B2B 官網的品牌訊號與 CTA 單純度。
- 建議修正：建立 approved segmented-control theme 或 shared header control primitive，將 active/hover/disabled 狀態收斂；確認 FREE/AI/source controls 是否只應出現在 QA/internal mode，若是，公開站應 gate 掉。

#### P1-3 聯絡表單 submit button 用 local `!important` 覆蓋 primary solid

- Route：`/contact`、`/en/contact`
- Block/component：`ContactPageShell`、`.contact-sys-form__submit`
- Code evidence：`app/components/page/contact/ContactPageShell.vue:334`、`app/components/page/contact/ContactPageShell.vue:528`
- 問題：submit button 使用 `UButton color="primary" variant="solid"`，但 CSS 又用 `background: color-mix(...) !important` 覆蓋正常 primary solid。
- 影響：主按鈕白字目前視覺上沒有明顯失效，但治理上繞過 `app.config.ts` 的 primary solid contract，未來容易和其他 CTA 分叉。
- 建議修正：若需要 contact 專用深色 CTA，改用 `UTheme` 加入 `button-themes.ts` 的 approved theme；若不需要差異化，直接回到 global primary solid，移除 `!important`。

### P2

#### P2-1 首頁 hero 是合理例外，但尚未被設計系統明文化

- Route：`/`、`/en`
- Block/component：`HomeHeroSection`
- Code evidence：`app/components/page/home/HomeHeroSection.vue:27`、`app/components/page/home/HomeHeroSection.vue:33`、`app/components/page/home/HomeHeroSection.vue:44`、`app/components/page/home/HomeHeroSection.vue:105`
- 問題：首頁 hero 使用 local immersive implementation，沒有直接使用 `PageHeroShell` 與 `SharedPageHeroTitle`。目前視覺成熟且合理，但它是全站唯一主要 hero exception。
- 影響：短期不是 bug；長期如果其他頁也開始各自做 immersive hero，hero governance 會分裂。
- 建議修正：二選一。保留首頁作為 approved exception，並在 design docs 記錄它的理由與限制；或新增 `PageHeroShell` 的 immersive variant，讓首頁也能共享 hero content rail、title sizing 與 CTA placement。

#### P2-2 服務詳情頁 component usage 一致，但視覺節奏偏文檔化

- Route：8 個 `/services/{slug}` 與 `/en/services/{slug}`
- Block/component：`ServiceDetailPageShell`、`ServiceDetailBlocksRenderer`
- Code evidence：`app/components/page/services/ServiceDetailPageShell.vue:26`、`app/components/page/services/ServiceDetailPageShell.vue:67`、`app/components/page/services/ServiceDetailBlocksRenderer.vue:130`
- 問題：詳情頁使用 `PageHeroShell`、sidebar、`SharedTextStack`、多種 service detail block，架構清楚。但內容段落以 text/list/card block 串接，desktop 雖有留白，整體閱讀感仍偏規格文件，與首頁、服務總覽、一站式頁的視覺張力不同。
- 影響：工程客戶可掃讀，但頁面不夠「高階解決方案」感，服務價值可能被壓成項目清單。
- 建議修正：先不做 global spacing pass。針對 service detail template 增加更明確的 module rhythm，例如每 2 到 3 個 blocks 形成一個 visual group、提高 proof/media anchor 權重、讓 summary/closing note 成為更強的決策節點。

#### P2-3 `/contact` local spacing 比全站 rhythm 更壓縮

- Route：`/contact`、`/en/contact`
- Block/component：`.contact-sys-main-section`、`.contact-sys-direct-section`
- Code evidence：`app/components/page/contact/ContactPageShell.vue:182`、`app/components/page/contact/ContactPageShell.vue:428`、`app/components/page/contact/ContactPageShell.vue:576`
- 問題：`contact-sys-main-section` 使用 `clamp(2.75rem, 4.4vw, 3.5rem)` 到 `clamp(1.1rem, 2vw, 1.6rem)`，direct section top padding 為 0，和 `section-sys-shell` desktop 80px / mobile 40px 節奏相比明顯緊。
- 影響：表單、直聯資訊與 map 的節奏不夠大氣，頁面中段像被壓縮後快速進入空白 map。
- 建議修正：把 contact 的 main/direct/map 重排成一個完整 conversion flow。可保留 compact 表單密度，但 section outer rhythm 應回到 token ladder，特別是 direct contact 與 map 之間要有明確視覺目的。

#### P2-4 Header 公開資訊架構仍混入內部控制語言

- Route：全站 header
- Block/component：`FrontendHeader`
- Visual evidence：所有 desktop/mobile 截圖首屏
- 問題：header 同時承載主要導覽、contact CTA、語言切換、FREE/AI image mode 與 source toggle。若這些 controls 是內部 reference/image phase 工具，公開訪客不應看到。
- 影響：首屏品牌訊號被分散，mobile header 高度約 95px，首頁 hero 雖仍可讀，但第一眼的 B2B 簡潔度下降。
- 建議修正：區分 public header 與 QA/internal controls。Public header 僅保留核心導覽、語言切換與聯絡 CTA；image/source control 改放 dev toolbar 或 query-driven QA surface。

### P3

#### P3-1 H1 與 hero primitive 大致通過

- Route：全部公開 route
- Block/component：`PageHeroShell`、`SharedPageHeroTitle`、`HomeHeroSection`
- 問題：非首頁公開頁皆使用 `PageHeroShell` 與 `SharedPageHeroTitle`；首頁是單一明確例外。所有公開 route 皆有且僅有 1 個 H1。
- 影響：SEO 與視覺 hierarchy 基本穩定。
- 建議修正：僅需明文化首頁例外，不需要全面重寫 hero。

#### P3-2 raw color 沒有在公開頁大量失控

- Route：全部公開 route
- Block/component：public page/components
- 問題：公開頁未發現大量 raw hex 散落。主要顏色仍集中於 semantic token、Tailwind token、`color-mix()` 與 Nuxt UI mapping。
- 影響：色彩治理健康。
- 建議修正：維持現有 Layer 1 token 與 Nuxt UI bridge；局部 `rgb(... / alpha)` 多用於背景光影與 overlay，若未重複擴散可保留。

#### P3-3 `OneTouchExperiencePage` 的 `!important` 屬局部媒體修飾，可先記錄為例外

- Route：`/one-touch-experience`、`/en/one-touch-experience`
- Block/component：`.one-touch-page__hero-image`
- Code evidence：`app/components/page/one-touch/OneTouchExperiencePage.vue:211`
- 問題：hero image 使用 `filter` 與 `transform` 的 `!important`。
- 影響：目前限縮在 image treatment，沒有形成 button/theme 分叉。
- 建議修正：保留但記錄為 local media override；若之後多頁都需要 hero image treatment，應提升為 hero media prop 或 shared class。

#### P3-4 FAQ 是 IA implementation gap，不屬本輪新增範圍

- Route：`/faq`、`/en/faq`
- Block/component：IA / routing
- 問題：文件曾列入首波 IA，但 `app/pages` 尚未實作 FAQ route。
- 影響：若 header/footer 或 sitemap 未連到 FAQ，短期不影響公開瀏覽；若後續要補 FAQ，需另開頁面規格。
- 建議修正：先列入 site architecture backlog，不在本輪臨時新增頁面。

## Component Consistency Matrix

| Area            | Current shared primitive                          | Runtime usage                                              | Consistency | QA note                                            | Recommendation                                       |
| --------------- | ------------------------------------------------- | ---------------------------------------------------------- | ----------- | -------------------------------------------------- | ---------------------------------------------------- |
| Hero shell      | `PageHeroShell`                                   | 非首頁頁面使用                                             | 高          | 內頁 hero 已收斂；首頁是 local immersive exception | 明文化首頁例外，或抽成 `variant="immersive"`         |
| Page H1         | `SharedPageHeroTitle`、首頁 local H1              | 每個 route 1 個 H1                                         | 高          | H1 尺度與階層穩定                                  | 不需全面改動                                         |
| Section intro   | `SharedSectionIntro`                              | 首頁、contact 等使用                                       | 高          | section title/kicker rhythm 穩定                   | 保持現況                                             |
| Content heading | `SharedContentHeader`                             | 首頁 cards、contact form、footer connector、service blocks | 高          | title/body 結構穩定                                | Service detail 可加強 group rhythm，不需換 primitive |
| Body copy       | `SharedTextStack`                                 | about、contact、service detail 等                          | 中高        | 段落一致，但 detail 頁偏密                         | Detail template 調整 density 與 grouping             |
| Button          | Global `UButton`、`button-themes.ts`、local `:ui` | 主要 CTA 多用 `UButton`                                    | 中          | Header/contact 有 local overrides                  | 第一批收斂 header/contact button theme               |
| Form controls   | `UInput`、`UTextarea`、`UFormField`               | Contact form                                               | 中高        | Nuxt UI First，submit button 分叉                  | 表單 submit 回到 approved theme                      |
| Card/grid       | Local section-specific components                 | 首頁服務、services overview、detail blocks                 | 中高        | 卡片型態因內容不同而有合理差異                     | 不建立通用 Card；只治理重複 detail block rhythm      |
| Footer/contact  | `FrontendFooter`、`ContactPageShell`              | 全站 footer，contact page local                            | 中          | Footer coherent；contact close 弱                  | 優先修 contact map/closing rhythm                    |

## Button Governance Review

2026-04-23 implementation pass 已將 header segmented controls、contact submit button、footer icon buttons 與 contact intro icon actions 收斂回 Nuxt UI / `UTheme` 管理。治理原則維持不新增繞過 Nuxt UI 的 BaseButton；若需要新視覺狀態，應使用 `app.config.ts`、`button-themes.ts`、`UTheme` 或 shared primitive 交付。

| Classification            | Items                                                                                                                                                          | Decision           | Owner layer                           | Note                                                                        |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------------------------------------- | --------------------------------------------------------------------------- |
| Global standard           | `UButton color="primary" variant="solid"`、contact form submit、homepage/service/one-touch primary CTA                                                         | approved standard  | Layer 2 `app.config.ts`               | Primary solid 必須維持白字與 icon 白字。                                    |
| Approved theme            | `darkGhostButtonTheme`、`darkOutlineButtonTheme`、`accentSolidButtonTheme`、`secondarySolidButtonTheme`、`headerSegmentedButtonTheme`、`lightSolidButtonTheme` | approved theme     | Layer 3 `button-themes.ts` + `UTheme` | Header 與 footer 的跨區塊 button 語氣由這層治理。                           |
| Approved icon theme       | `darkIconGhostButtonTheme`、`floatingIconButtonTheme`                                                                                                          | approved theme     | Layer 3 `button-themes.ts` + `UTheme` | 用於 dark surface 上的 icon-only action，不把尺寸與定位放進 theme。         |
| Approved non-button CTA   | `SharedActionLink` inside card/list links                                                                                                                      | approved primitive | Shared primitive                      | 它是整張卡片 link 的文字箭頭提示，不強制改成 `UButton`。                    |
| Approved visual exception | 首頁 immersive hero、One-touch hero image treatment、contact map tint/fallback                                                                                 | approved exception | Layer 4 component local               | 只保留局部 geometry、media treatment 與 fallback surface，不作通用 button。 |
| Should converge           | 新增的 local button color/background、未列入 theme 的 `:ui` button override、button `!important`                                                               | should converge    | N/A                                   | 未來若再出現，優先升到 approved theme 或改回 global standard。              |

目前仍可接受的 local class 範圍：button 尺寸、定位、排列、min-width/min-height、section-specific spacing。不可接受的 local class 範圍：跨區塊重複的 button 背景、文字色、hover/focus/active state，以及主按鈕白字覆寫。

## Spacing Rhythm Review

### Token rhythm

目前 spacing foundation 明確：

- mobile section default：`--layout-section-padding-default: var(--space-40)`
- desktop section default：`--layout-section-padding-default: var(--space-80)`
- mobile section compact：`--layout-section-padding-compact: var(--space-24)`
- desktop section compact：`--layout-section-padding-compact: var(--space-40)`
- hero rhythm：mobile 80px，desktop 128px
- content max：1360px，wide/header max：1824px

這套節奏對工業 B2B 官網是合理的。它不是極度 editorial 的超大留白系統，但和目前資訊量、服務型官網目標相符。

### Visual rhythm by area

| Area              | Current rhythm                               | Visual judgment      | Recommendation             |
| ----------------- | -------------------------------------------- | -------------------- | -------------------------- |
| Home              | desktop 多數 section 約 80px，mobile 約 40px | 穩定、有層次，不偏窄 | 保持                       |
| About             | Page hero + intro/capability 結構清楚        | 穩定                 | 保持                       |
| Services overview | image-led cards 與 grid 節奏足夠             | 現代感較強           | 保持，後續只做細節 polish  |
| Service detail    | outer rhythm 夠，但 blocks 讀感偏連續文件    | 不偏窄，但張力不足   | local template rhythm pass |
| One-touch         | 大圖與深色模組支撐張力                       | 高階感佳             | 保持                       |
| Contact           | main/direct/map 三段銜接偏緊且 map 空白      | 偏窄、未收束         | 優先 local spacing pass    |
| Footer            | connector band + footer 深色收束明確         | coherent             | 保持                       |

### 是否需要 global spacing pass

2026-04-23 implementation pass 採用「系統微放大」，不新增 `airy` token，也不調整 `main.css` 的 spacing foundation。修正集中在 local rhythm：

- Contact main 保留 token ladder；direct contact details 改為貼齊地圖的 full-width band，map 改為 edge-to-edge 滿版地圖帶，避免轉換頁尾段落像未載入完成。
- Services overview grid 回到接近 `section-sys-shell` default 的 outer rhythm，intro 到 grid 的距離略放大。
- Service detail intro 與 blocks gap 微放大，dense mobile override 只做保守放鬆，保留長文頁的密度保護。
- One-touch body section 回到 default rhythm；mobile 保留 3rem 的可讀距離。
- Footer connector/content/legal band 微放大，讓 contact 後的全站收束更有呼吸感。

仍不建議做全站 global spacing token pass。若後續 3 個以上公開 section 都出現偏窄，才另開 global `airy` token 或 section rhythm variant 決策。

## Modern UIUX Review

評分以 5 分為滿分，著重高階 B2B 視覺、留白、張力、品牌感與轉換清晰度。

| Dimension             | Score | Review                                                                                                |
| --------------------- | ----: | ----------------------------------------------------------------------------------------------------- |
| Brand signal          |   4.0 | 首頁、一站式頁、服務總覽有明確品牌色、工業影像與深色表面。Header 的內部 controls 會削弱首屏品牌純度。 |
| Visual hierarchy      |   4.0 | H1、section intro、content heading 大致穩定。Contact close 與 service detail modules 是主要弱點。     |
| Component consistency |   4.0 | Shared primitives 使用狀況良好。Header/button overrides 是最大治理缺口。                              |
| Spacing atmosphere    |   3.6 | 全站不算窄，contact 與 service detail 讓整體「大氣感」被拉低。                                        |
| CTA clarity           |   3.7 | 主 CTA 白字與層級基本清楚，但 header controls 與 contact submit override 稀釋一致性。                 |
| Responsive quality    |   4.0 | 390px 沒有水平 overflow，heading 可讀。Mobile header 偏高但尚未壓垮 hero。                            |
| Conversion closure    |   3.2 | Contact page map 空白與 direct section 節奏讓最後一步較弱。                                           |

總評：整站已接近成熟 B2B 官網，而不是早期拼裝頁。要往更前沿、更現代的方向走，關鍵不是把所有 section 拉更大，而是讓高價值頁面有更明確的視覺錨點、決策節點與收束模組，並移除 header/contact 中的局部按鈕分叉。

## Recommended Fix Batches

### Batch 1 Header 與 button/theme 收斂

目標：讓全站 CTA 與 header controls 回到 Nuxt UI First。

- 建立或擴充 approved segmented-control theme。
- 移除 `FrontendHeader` 內重複 `:ui` 與 CSS `!important` state override。
- 判斷 FREE/AI/source controls 是否 public-facing；若不是，改成 internal/dev only。
- 保留 language switch，但收斂為穩定的 header control primitive。
- 驗證：`npm run guard:ui-buttons`、desktop/mobile header screenshots、primary solid button 白字檢查。

### Batch 2 Contact conversion rhythm 修正

目標：讓聯絡頁成為完整、有信任感的轉換頁，而不是表單後接空白 map。

- 將 map iframe 包成 edge-to-edge 滿版地圖帶，保留品牌化背景與 fallback state，不放 map 內文字 CTA。
- 調整 `.contact-sys-main-section` 與 `.contact-sys-direct-section`，回到 token ladder。
- 將 submit button 移至 `button-themes.ts` approved theme 或回到 global primary solid。
- 檢查 mobile 390px 直聯資訊與表單間距，避免壓縮或空白斷裂。
- 驗證：contact desktop/mobile screenshots、表單 focus state、broken iframe/fallback state。

### Batch 3 Hero governance 決策

目標：避免 hero pattern 長期分裂。

- 選項 A：文件化首頁 immersive hero 為 approved exception。
- 選項 B：擴充 `PageHeroShell` 支援 immersive media variant，讓首頁也使用 shared hero rail。
- 建議先採 A，若未來第二個 immersive hero 出現，再採 B。
- 驗證：首頁與內頁 H1 count、hero 首屏高度、CTA position。

### Batch 4 Service detail visual rhythm

目標：維持專業資訊完整度，同時提升高階方案頁張力。

- 不改 manual copy。
- 先從 template rhythm 下手：block grouping、visual anchor、proof/media placement、summary/closing note 強化。
- 避免把所有 block 都包成卡片；只讓關鍵決策點有更明顯的視覺 weight。
- 驗證：至少抽 2 個 detail slug，desktop/mobile screenshots 與 heading hierarchy。

### Batch 5 RWD 與現代 polish

目標：在核心治理修完後做小幅 polish。

- 檢查 768px breakpoint 的 header、service detail sidebar、contact form grid。
- 檢查 1920px wide desktop 是否有過長文字行或過散的 grid。
- 檢查 image object-position 是否支撐主題，不要只當氣氛圖。

## Design Compliance Checklist

| Item           | Status          | Note                                                                            |
| -------------- | --------------- | ------------------------------------------------------------------------------- |
| IA 一致性      | Partial pass    | 公開 route 正常；FAQ 尚未實作，列 backlog。                                     |
| Nuxt UI First  | Partial pass    | Form/button 大多使用 Nuxt UI；header/contact button override 需收斂。           |
| Token/色彩規範 | Pass with notes | 未見大量 raw hex；local `color-mix()` 與 `rgb(... / alpha)` 多用於 overlay。    |
| 主按鈕白字規範 | Pass with risk  | `app.config.ts` 已鎖 primary solid 白字；contact/header local override 是風險。 |
| RWD 響應式檢查 | Pass with notes | 390/1440/1920 無水平 overflow；mobile header 高度與 contact close 可優化。      |
| 文案語氣一致性 | Pass            | 本輪未改 public copy；manual-locked copy 維持。                                 |

## Open Questions

1. Header 的 FREE/AI/source controls 是否要出現在正式公開站？若不是，下一批應先做 production gating。
2. Contact map 是否有穩定可用的地圖來源與地址資料？若沒有，建議先改為 branded location panel。
3. 服務詳情頁是否希望更像「技術規格頁」還是「解決方案銷售頁」？目前介於兩者，下一批 visual rhythm 需要先定調。
4. FAQ 是否仍在首波 IA 內？若是，需要另開 page spec，不建議在 UI consistency batch 中順手補。

## Validation Notes

- 已執行 `npm run workflow:clone:preflight`，結果通過，本機 capture 能力可用。
- 已完成 78 張公開頁 screenshot evidence，並生成 `summary.json`。
- 已完成 broken image、heading H1 count、horizontal overflow 初查。
- 本文件完成後需執行：
  - `npm run format:check`
  - `npm run lint`
  - `npm run guard:ui-buttons`
  - `npm run typecheck`

## Skill Usage

- `uiux-pm-collaboration`：用於 Objective / Constraints / Options / Recommendation / Decision 對齊。
- `design-system-architect`：用於 token、semantic-first、ownership 與 promotion rule 判斷。
- `nuxt-ui`：用於 `UButton`、`UTheme`、form controls 與 Nuxt UI First 稽核。
- `frontend-skill`：用於現代 B2B 視覺層級、留白、張力與轉換清晰度審視。
- `visual-qa-review`：用於 desktop/mobile screenshot evidence 與 responsive review。
- `document-writer`：用於將 QA 結果整理成可維護的專案文件。
