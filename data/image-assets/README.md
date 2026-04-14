# Image Asset Catalog

最後更新：2026-04-08（phase 2 canonical path migration）

## Purpose

`data/image-assets/catalog.json` 是 `public/images` 的唯一 canonical inventory。
它以「每個實體檔案一筆 record」為原則，統一管理 brand、legacy stock path 與 AI generated assets。

這份 catalog 解決的是資產治理問題：

- 哪個檔案目前是 active
- 哪個檔案只是 candidate history 或 deprecated archive
- 哪個 runtime / manifest / doc 正在使用它
- 哪個舊檔已經被什麼新檔取代

## Ownership boundary

- `data/image-assets/catalog.json`
  - canonical inventory owner
  - naming policy owner
  - lifecycle status owner
- `data/nano-banana/manifests/*`
  - AI execution history owner
  - candidate metadata owner
  - slot-level stock / candidate lineage owner
- `app/utils/home-page-image-registry.ts`
  - runtime projection only
  - 前端讀取用的精簡資料
- `docs/references/首頁媒體素材來源.md`
  - appendix only
  - 保留人類可讀的素材來源與授權筆記

若上述來源衝突，先修正 manifest 或 catalog，再由 workflow 同步 registry。

## Record schema

每筆 record 固定包含以下欄位：

- `assetId`
  - kebab-case 唯一識別碼
- `kind`
  - `brand | stock | ai-generated`
- `status`
  - `active | candidate-history | deprecated`
- `publicPath`
  - 檔案在 `public/` 下的公開路徑
- `canonicalName`
  - canonical 命名；第一階段可與實際 disk filename 不同
- `scope`
  - 目前使用情境，例如 `homepage`、`brand-system`
- `slot`
  - image role / slot id；brand 可為 `null`
- `state`
  - state-aware slot 專用，例如 `mission`、`join-us`
- `source`
  - 來源系統或供應者
- `licenseNote`
  - 授權或使用註記
- `sourceReference`
  - 外部來源頁，或 AI candidate 使用的 stock reference
- `manifestPath`
  - 若資產由 Nano manifest 管理，記錄對應 manifest 路徑
- `usedBy`
  - 目前引用點清單
- `replacedBy`
  - 被取代時記錄新的 `assetId`
- `notes`
  - lifecycle 備註與治理說明

## Naming rules

- `assetId` 必須是 lowercase kebab-case。
- brand 的 canonical 命名一律採 kebab-case，例如 `rallytech-logo-text-only.svg`。
- active stock 的 canonical path 一律採 `/images/stock/<scope>/`。
- `public/images/demo/**` 現在只保留給 deprecated legacy stock 檔案。
- `public/images/generated/**` 保留現有 slot-aware 路徑與 candidate naming：
  - 單一 slot：`<slot>-<timestamp>-<suffix>`
  - state-aware slot：`<slot>-<state>-<timestamp>-<suffix>`

## Status lifecycle

- `active`
  - brand / stock：目前正在 runtime、manifest 或正式治理鏈中使用
  - ai-generated：promoted candidate，或目前 manifest 中最新的可用 candidate
- `candidate-history`
  - AI 舊候選圖，仍保留可追溯歷史，但不是當前主要 candidate
- `deprecated`
  - 已退出目前治理鏈，但基於比對、回溯或品牌存檔而保留在 disk 上

## Update flow

1. 手動新增 brand / stock 檔案時：
   - 先新增檔案
   - 再手動更新 `catalog.json`
   - 最後執行 `npm run audit:image-assets`
2. 若要把 phase 1 legacy active 資產正式切到 canonical path：
   - 先執行 `npm run migrate:image-assets:phase2 -- --dry-run`
   - 確認 rename plan 後，再執行 `npm run migrate:image-assets:phase2`
3. 透過 Nano generate / promote 產生或升級 AI candidate 時：
   - 先更新 manifest
   - workflow 會同步更新 runtime registry
   - workflow 也會同步更新 `catalog.json` 的 AI records
4. 若只改 reference docs：
   - 不得把 docs 當 canonical owner
   - docs 只能反映已存在於 catalog / manifest 的事實

## Deprecated policy

- deprecated record 必須有 `notes`
- 若存在明確替代項，應填入 `replacedBy`
- deprecated records 在 phase 2 之後仍可保留 legacy path
- 若要真正搬 deprecated 路徑或刪檔，應另開安全遷移任務

## Commands

- `npm run audit:image-assets`
  - 驗證 disk / catalog / manifest / registry / reference doc 是否一致
- `npm run migrate:image-assets:phase2`
  - 把 active brand / stock 從 legacy path 遷移到 canonical path
- `npm run migrate:image-assets:phase2 -- --dry-run`
  - 只輸出 rename plan 與 preflight 結果，不改檔
- `npm run audit:image-assets -- --json`
  - 輸出 JSON summary，適合 CI 或批次盤點
- `npm run audit:image-assets -- --fail-on-deprecated-without-replacement`
  - 對 deprecated records 開啟更嚴格 replacement 檢查
