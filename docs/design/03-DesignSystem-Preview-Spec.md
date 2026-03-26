# Design System Preview 展示頁設計規格

> 這份文件描述目前 `/design-system` 的已實作版本，作為設計與前端共同基準。

## 1. 目的

- 提供設計系統（tokens + Nuxt UI）活體展示頁，讓團隊快速對照規則與實作。
- 集中驗證 `RALLY-COLOR-LOCK-v1` 在展示頁中的一致性。
- 當 token 或區塊元件調整時，作為回歸檢查錨點。

## 2. 視覺定調（Tone / Differentiation）

### Tone（調性）

- **深色骨架 + 白色內容章節**：外層以 `Secondary 900` 承接科技感，內容章節以白色面板維持可讀性。
- **克制且清楚**：減少碎卡片堆疊，改用「章節級容器」建立段落感。

### Differentiation（記憶點）

- Hero 與章節標題維持深色品牌語氣；內容展示區維持中性閱讀對比。
- 色彩區塊直接揭露語意角色、色階與治理規則，強化「角色優先」的用色決策。

## 3. 內容架構（對齊目前實作）

1. **Hero（深色首屏）**
   - 顯示色彩定版版本：`RALLY-COLOR-LOCK-v1`
   - Quick links 導向頁內 anchor
   - Snapshot 區塊說明三層樣式架構與 行動按鈕範式

2. **Overview（白色導覽章節）**
   - 以 Foundations / Layout 兩欄列出展示主題與說明
   - 統一圖示來源：`@iconify-json/ic` baseline

3. **Foundations 章節**
   - 深色章節標題條（Foundations）
   - 白色內容面板依序包含：
     - Color
     - Typography
     - Icons
     - Radius
     - Shadows
     - Space

4. **Layout 章節**
   - 深色章節標題條（Layout）
   - 白色內容面板依序包含：
     - Breakpoints
     - Grid
     - Header Height

## 4. 版面與樣式規則

### 4.1 Token 來源

色彩執行期唯一真實來源為 `app/assets/css/main.css`。  
`docs/design/tokens/color-semantic.json` 與 `docs/design/tokens/color-primitives.json` 為鏡像檔，需與 `main.css` 同步。  
定版與變更流程依 `docs/design/04-色彩定版與治理.md`。

### 4.2 套用分層

- `app.config.ts`（全域預設）
- `<UTheme>`（頁面 / 區塊）
- 元件 `:ui` / `class`（單點例外）

### 4.3 節奏與容器

- 區塊垂直節奏使用 `section-sys-shell` / `section-sys-shell--compact`
- 內容寬度統一由 `page-sys-shell` 控制
- 章節容器採「深色章節標題 + 白色內容面板」以建立清楚段落感

## 5. 維運要求

- 新增或調整色彩 token 時，需同步更新：
  - `app/assets/css/main.css`
  - `docs/design/tokens/color-semantic.json`
  - `docs/design/tokens/color-primitives.json`
  - `app/components/page/design-system/ColorSection.vue`
  - `docs/design/04-色彩定版與治理.md`（必要時）
- 若調整 `/design-system` 結構，必須同步更新本文件。

---

> 備註：本頁為內部預覽用途（`robots: noindex, nofollow`）。
