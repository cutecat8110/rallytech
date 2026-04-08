# source 異常集中檔

最後更新：2026-04-08
來源網址：https://pentagoneng.com/（multi-page anomaly index）

## 文件目的

- 集中記錄跨頁或不適合放在單一 block 內的 `source` 異常。
- 把頁面可見但仍需保留的殘留內容留在各頁 block 內，只把跨頁判讀問題集中在這裡。

## 使用原則

- 先看各頁 `source` block；只有遇到跨頁、跨區塊或明顯衝突時，再回來查這份異常索引。
- 這份檔案不重複抄寫整頁內容，只保留足以影響對照判讀的重點。
- `source` block 以 full-page screenshot 與畫面實際可見文字為準；raw DOM inventory 若撈到 hidden/inactive 區塊，只記在 anomaly，不直接寫回 block content。

## 2026-04-07 i18n recrawl 補充

- 重新以 `scripts/capture-page.mjs` 擷取 `IA-參考站與目標站對照.md` 列出的首頁、共享頁與 8 個服務頁。
- 證據輸出位置：`artifacts/i18n-reference-recrawl-20260407/`。
- 多個頁面仍出現 `archicwp.websitelayout.net` 類型的外部 template 壞圖；這些只作為 source anomaly，不可被整理進 runtime i18n image source。
- i18n migration 僅遷移文字、區塊順序、備註與可本地化 alt fallback；正式圖片來源仍以首頁 image registry / 授權清單為準。
- `About Image`、`Icon Image`、`Why Us`、`Shape Image`、泛用 `Image` 等破圖 placeholder 只當成 anomaly / diagnostics，不算有效原文，也不可被整理進 `source` runtime copy。
- 部分頁面在 raw DOM inventory 會出現 inactive tab 或隱藏模板殘留，例如首頁 `Join us in our journey...`、一站式整合頁的 team members、I&E 頁的 `Financial Consulting / Expert Engineer` 卡片；若 full-page screenshot 未實際顯示，就不納入 `source` block content。

## 00 首頁

- `Turnkey Solutions, since 2010` 與 `Founded in 2022` 同時可見，年份敘事互相衝突。
- 服務卡片 `Network Design` 與 `Historians` 的敘述互相對調。
- 服務卡片標題出現 `Detailed Design & Modeling`，但內文實際是 Alarm Monitoring 敘述。
- `Vibration Analysise` 存在 typo。

## 02 FAQ

- 頁面目前沒有 FAQ 問答內容，實際可見的是 `Coming Soon` 加上一組聯絡表單。

## 04 一站式整合

- `Vibration Analysis` 區塊文案與 `Call-Out System Integration and Commissioning` 區塊重複。

## 服務 04 PI Server

- accordion 目前只有第 1 項有展開後可見文案；第 2、3 項只有標題。
