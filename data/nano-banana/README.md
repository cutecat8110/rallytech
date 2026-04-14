# nano-banana data workspace

最後更新：2026-04-08

## Purpose

這個資料夾保存 AI 生圖任務的可執行 artifacts，不作為 `public/images` 的全域 inventory owner。
真正的 phase gate 與 workflow owner 仍是 `docs/project/05-Reference-Clone工作流與降級規範.md`。
`public/images` 的 canonical inventory、命名與 lifecycle status 已移到 `data/image-assets/catalog.json`。

## Canonical structure

- `briefs/`
  - brief templates
  - resolved briefs
- `prompts/`
  - prompt text
  - prompt variants
- `manifests/`
  - slot-level manifest
  - candidate history
- `README.md`
  - 結構說明與 owner 邊界

## Current convention

- `briefs/home-hero-brief-template.json`：首頁 Hero 的 brief template
- `prompts/home-hero-v*.txt`：首頁 Hero prompt variants
- `manifests/home-hero.json`：首頁 Hero 的 active manifest 與 candidate history

## Canonical naming rules

- slot id 一律採 kebab-case image role：`<section>-<role>`
- brief template：`briefs/<slot>-brief-template.json`
- prompt seed：`prompts/<slot>-v1.txt`
- active manifest：`manifests/<slot>.json`
- state-aware prompt seed：`prompts/<slot>-<state>-v1.txt`
- generated image 輸出路徑由 script slot definition 明確定義，不靠字串猜測

## Scaffolded slots

- `home-hero`
  - fully wired：已接入既有 generate / promote workflow 與 frontend registry sync
- `about-primary`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI
- `ote-background`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI
- `connector-image`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI
- `mission-square`
  - scaffold only：state-aware slot，`mission / join-us` 可 onboarding、可生成、可記錄 manifest，未接入 UI
- `mission-cutout`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI
- `about-detail`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI
- `services-surface`
  - scaffold only：可 onboarding、可生成、可記錄 manifest，未接入 UI

## Slot onboarding steps

1. 先確認 slot 是否已存在於 `.agents/ai-image-context.md` 的 image role catalog
2. 建立 `briefs/<slot>-brief-template.json`
3. 建立 `prompts/<slot>-v1.txt`
4. 建立 `manifests/<slot>.json`
5. 在 script slot definition layer 補齊：
   - manifest path
   - output directory
   - candidate id prefix
   - default prompt id
   - registry sync rule
6. 若 slot 為 state-aware，需額外定義：
   - states 名稱
   - `prompts/<slot>-<state>-v1.txt`
   - `states.<state>.stock/candidates`
7. 若 slot 為一般單一 image role，維持：
   - `prompts/<slot>-v1.txt`
   - `manifests/<slot>.json`
   - `stock/candidates`
8. 若 slot 尚未接入前端 runtime，文件需明確標示為 `scaffold only`

## Rules

- 這裡保存 execution artifacts，不保存長期品牌 guardrails。
- 長期圖像 guardrails 放在 `.agents/ai-image-context.md`。
- prompt research、recipe 與來源判讀放在 `docs/references/`。
- 生成圖片輸出仍沿用 `public/images/generated/...`；manifest 只保存 metadata 與路徑。
- active stock 的 `stock.src` 與 candidate 的 `sourceReference` 應跟隨 `data/image-assets/catalog.json` 的 canonical stock path（目前首頁為 `/images/stock/home/`）。
- generate / promote workflow 會同步更新 `app/utils/home-page-image-registry.ts` 與 `data/image-assets/catalog.json`。
- 不把這個資料夾當成 `public/images` 的 owner docs；若 inventory 或 naming 規則要改，回到 `data/image-assets/`。
- 若流程規則要改，回到 `docs/project/05-Reference-Clone工作流與降級規範.md`。
