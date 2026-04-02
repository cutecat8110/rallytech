# AI切版與Preview維運規範

最後更新：2026-04-02

## 文件目的

- 定義 Nuxt UI 在本專案的 implementation order、覆寫順序與 preview 驗證方式。
- 讓 AI / 前端在切版時知道該先用 `app/app.config.ts`、何時用 `<UTheme>`、何時用 `:ui`，以及何時把樣式留在元件本地。

## 適用角色

- 前端：確認 Nuxt UI 覆寫策略與 component-local styling 邊界。
- 設計：確認 preview 與實作是否遵循 design system，而不是各頁各寫一套。
- AI agent：在切版前先套用這份執行規範，不直接跳進自由發揮。

## 1. Nuxt UI First

原則：

1. 能用 Nuxt UI 就不用手刻互動元件。
2. 前端內容調整進入實作前，必須先確認本輪已啟用 `nuxt-ui` skill；若不可用，需先停止實作並回報阻礙、影響與待決策項。
3. semantic colors 優先於 raw color classes；先用 `primary / secondary / neutral`，再決定色階。
4. page / section 層優先使用 Nuxt UI component props、semantic utility classes 與 `<UTheme>`。

## 2. Implementation Order

覆寫順序固定為：

1. `app/app.config.ts`
   - 全域 component theme bridge
2. `<UTheme :ui="...">`
   - 頁面 / 區塊級變體
3. 元件 `:ui`
   - 單個 Nuxt UI 元件的 slot override
4. component local class / local `<style scoped>`
   - 單一區塊專屬 geometry、spacing、crop、overlay

補充：

- `main.css` 不在 implementation order 內扮演「section 專屬樣式總倉」。
- `main.css` 只提供 shared tokens、semantic vars 與 shared primitives。
- 四層 ownership 的正式定義仍以 `01` 為準；本檔只負責實作順序與落地方式。

## 3. `app/app.config.ts` 的用法

`app/app.config.ts` 只負責：

- `ui.colors`
- Nuxt UI global theme
- `slots / variants / compoundVariants / defaultVariants`

不負責：

- route 條件樣式
- page-specific layout
- 只在單一區塊存在的 visual grammar

使用原則：

- 只放真正跨頁一致的 component theme。
- 需對齊元件原本的 theme shape，不自行發明不相容結構。
- 若只是單一 section 的按鈕語氣差異，優先 `<UTheme>`，不要硬塞回全域。

## 4. `<UTheme>`、`:ui` 與 local style 的用法

### `<UTheme>`

適用情境：

- 同一區塊內多個 Nuxt UI 元件需要同一組語氣
- 需要一組 block-level theme，但不想污染全域 `app.config.ts`

### `:ui`

適用情境：

- 單一元件 slot 需要局部修正
- 只影響一個 component instance 的 slot class

### local `<style scoped>`

適用情境：

- 單一 section 的 spacing 微調
- crop / object-position / overlay density
- breakout geometry、複合圖形、單點 layout grammar

規則：

- 不用 `class` 長期覆寫整個 component shell。
- 只用在一個 block 的規則，預設留在 local `<style scoped>`。

## 5. Nuxt UI 結構對齊規則

### Slots-based components

例如 `Button`、`Card`、`Input`、`Select`：

- theme 以 `slots` 為主
- `app.config.ts` 必須用相同結構覆寫

### Flat-base components

例如 `Container`：

- theme 只有 `base`
- 只能用 `base` 或 `class` 覆寫，不要硬塞 `slots`

## 6. 強制規則與禁止事項

- `UButton` 使用 `color="primary" + variant="solid"` 時，文字必須維持白字。
- `UButton` 標準內容優先使用 `label / icon / leadingIcon / trailingIcon`；不要把手寫 `<span>` / `<UIcon>` 當常態。
- 若 `UButton` 必須保留自訂 slot 內容，需在前一行加 `<!-- ubutton-allow-custom-content -->`，且只放行下一個 `UButton`。
- `UInput / UTextarea / USelect` 的殼層樣式，必須優先收斂在 `app/app.config.ts` 或 `<UTheme>` / `:ui`。
- 不在 template 直接寫散落 hex 與 `var(--...)` 作為常態。
- 不把單一 section 的 selector 長期堆到 `main.css`。
- 避免 `!important`；若必要使用需寫明原因。

## 7. Preview 與驗證

`/design-system` 的用途：

- 驗證 tokens 與 semantic variables 是否正確映射到 Nuxt UI
- 驗證 shared layout shells 與 component theme 是否一致
- 驗證 global bridge 變更沒有破壞首頁與代表性頁面

基本驗證：

1. `npm run lint`
2. `npm run typecheck`
3. 抽查首頁與 `/design-system`
4. 若本輪涉及 clone fidelity，搭配 Playwright / browser capture 驗證實際渲染

## 8. 與 `01 / 03` 的邊界

- `01` 是 foundations、semantic-first 與 ownership matrix 主檔。
- `02` 是 Nuxt UI implementation order 與 preview 維運主檔。
- `03` 是 Vision-to-Code grammar、Architecture Pack 與 Implementation Contract 主檔。

## 9. 依賴文件

- 設計系統總綱：[`./01-設計系統規則總綱.md`](./01-設計系統規則總綱.md)
- Vision-to-Code：[`./03-Vision-to-Code與Component-Driven規範.md`](./03-Vision-to-Code與Component-Driven規範.md)
- 交付與工具基線：[`../project/04-協作與交付規範.md`](../project/04-協作與交付規範.md)
