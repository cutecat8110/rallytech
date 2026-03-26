# 設計文件入口

這個資料夾分成兩類內容：

- 規則文件
  人看得懂、切版會直接用到
- `tokens/`
  Figma 匯出的原始 JSON 與 token 來源

## 先看哪幾份

- [01-設計規則整理.md](/c:/Users/Hao.Wang/Documents/git/rallytech/docs/design/01-%E8%A8%AD%E8%A8%88%E8%A6%8F%E5%89%87%E6%95%B4%E7%90%86.md)
  設計意圖、色彩語意、字體系統、間距、陰影、breakpoints、grid
- [02-AI切版規則.md](/c:/Users/Hao.Wang/Documents/git/rallytech/docs/design/02-AI%E5%88%87%E7%89%88%E8%A6%8F%E5%89%87.md)
  在 Nuxt 專案裡要怎麼實際套用這些規則
- [04-色彩定版與治理.md](/c:/Users/Hao.Wang/Documents/git/rallytech/docs/design/04-%E8%89%B2%E5%BD%A9%E5%AE%9A%E7%89%88%E8%88%87%E6%B2%BB%E7%90%86.md)
  色彩定版版本、唯一來源與後續變更門檻

## 使用方式

- 要看設計怎麼用：看 `01-設計規則整理.md`
- 要看 AI / 前端怎麼落地：看 `02-AI切版規則.md`
- 要看顏色是否已定版與能不能改：看 `04-色彩定版與治理.md`
- 要回頭查原始設計數值：看 `tokens/`

## Tokens 檔案用途

- `tokens/color-primitives.json`
  原始色票
- `tokens/color-semantic.json`
  語意化顏色角色（備註：檔內 `Accent` = 程式端 `accent`、`Surface` = 程式端 `neutral`）
- `tokens/typography-primitives.json`
  字體基礎尺度
- `tokens/typography-semantic.json`
  Display / Headline / Title / Body / Label
- `tokens/layout-primitives.json`
  間距、圓角、容器等基礎尺寸
- `tokens/layout-semantic.json`
  section、header、grid、container 等版面角色
- `tokens/environment.json`
  設計檔環境資訊

## 目前原則

- 頁面切版優先跟著規則文件走
- 色彩定版以 `04-色彩定版與治理.md` 為準
- 全站樣式實作以 `app/assets/css/main.css` + `app.config.ts` + 頁面 `<UTheme>` 為主
- 互動元件遵循「Nuxt UI First」：Nuxt UI 可用就不手刻；僅在無對應能力時才自製
- token JSON 為鏡像資料，需與 `main.css` 保持一致
