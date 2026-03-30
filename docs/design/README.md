# 設計文件入口

`design/` 保留 2 份主檔 + `tokens/`，避免規範分散。

## 先看哪兩份

1. [01-設計系統規則總綱.md](./01-設計系統規則總綱.md)
   - 設計 token 用法、色彩治理、字體與 foundations 規則
2. [02-AI切版與Preview維運規範.md](./02-AI切版與Preview維運規範.md)
   - Nuxt UI 分層落地、AI 切版流程與 `/design-system` 維運

## tokens 用途

- `tokens/*.json` 是設計數值鏡像與對照資料
- 執行期真實值仍以 `app/assets/css/main.css` 為準
