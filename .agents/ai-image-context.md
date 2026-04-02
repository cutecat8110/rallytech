# AI Image Context

最後更新：2026-04-02

## Purpose

這份文件提供 AI 生圖任務的長期上下文。
它只保存跨任務、長期有效的圖像 guardrails，不保存 prompt 版本、manifest、candidate ID 或生成歷程。

## Source of truth

1. `docs/project/05-Reference-Clone工作流與降級規範.md`
2. `docs/project/01-專案策略與基線總綱.md`
3. `docs/design/01-設計系統規則總綱.md`
4. `docs/references/README.md`
5. `docs/references/首頁媒體素材來源.md`

若本檔與上述文件衝突，以 `project/05` 的 phase gate 與最新 references 判讀為準。

## Role in the system

- `.agents`：保存長期有效的品牌圖像上下文
- `docs/references`：保存研究附錄、對照筆記、素材來源與 prompt methodology
- `data/nano-banana`：保存可執行的 brief、prompt 與 manifest

本檔不負責：

- prompt text
- prompt version history
- candidate history
- active manifest state
- generated asset file list

## Image role catalog

- `home-hero`：首頁第一屏主視覺，必須承載品牌可信度與 headline safe area
- `about-primary`：關於區塊主圖，偏高科技建築或現代設施立面
- `about-detail`：關於區塊的輔助建築細節圖
- `services-surface`：服務區塊背景氣氛圖，不可搶過內容可讀性
- `ote-background`：One-Touch Experience 背景 poster frame
- `mission-square`：Mission / Join Us tabs 左側小方圖
- `mission-cutout`：Mission 區塊右側單一人物 cutout
- `connector-image`：Engineering + Design Experts / footer connector 的 breakout 圖像

補充：

- `mission-square` 是雙 state image role：
  - `mission`
  - `join-us`
- `mission-cutout` 維持單一固定圖像角色，不隨 tab 切換

## Long-lived visual guardrails

### Allowed signals

- 工業自動化、控制整合、監控中心、現代設施、可信工程場景
- 乾淨、克制、可商用的 B2B 攝影語氣
- 真實材質：玻璃、金屬、複合控制台、受控螢幕光
- 可承載網頁 copy 的安全構圖與負空間

### Disallowed signals

- 泛辦公室 stock 感
- 過度科幻、HUD 疊圖、漂浮電路圖樣
- generic fake dashboard 或假 SaaS analytics 介面
- 嵌入式 headline、按鈕、網站 UI 或可讀文字
- 紫藍霓虹、cyberpunk 光效、塑膠 AI sheen
- 與雷力工控語境無關的人像主導場景

## Fidelity boundary

### Phase 1

- 先用 source / licensed visuals 對齊 image role、構圖與 page fidelity
- 不把 AI 生圖混進第一輪 clone 驗收

### Phase 2

- 在 fidelity pass 後，才進入 `imagegen / Nano` 品牌變體
- 變體只能調整圖像方向、質感與品牌一致性，不能破壞 reference hierarchy

## Acceptance heuristics

一張 AI 候選圖至少要滿足：

- 與指定 `image role` 相符
- 與 reference 的構圖類型與視覺重心同類型
- 能夠支援頁面上的 copy / CTA 疊加
- 沒有明顯品牌衝突、授權風險或 AI artifact
- 對雷力的工控 / B2B / modern technology 語境加分，而不是拉偏

## Handoff rule

- 長期規則改這份檔案
- prompt methodology 與 recipe 改 `docs/references/Nano-Banana-*`
- active brief / prompt / manifest 改 `data/nano-banana/`
- 新 slot onboarding 先對照 image role catalog，再到 `data/nano-banana/` scaffold 對應 brief / prompt / manifest
- `about-detail` 與 `services-surface` 都是單一 slot、無 state；不得誤建成 paired-slot 或 state-aware runtime
