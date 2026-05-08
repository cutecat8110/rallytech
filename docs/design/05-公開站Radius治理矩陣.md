# 公開站 Radius 治理矩陣

最後更新：2026-05-07

## 文件目的

- 定義公開站圓角的唯一語意階層，避免 input、button、card、media、dropdown 與 sidebar 各自為政。
- 讓「現代化工業控制」維持精密、克制、可讀，而不是走過度圓潤的 SaaS 風格。
- 明確區分一般 surface token 與品牌敘事型不對稱 geometry。

## Radius Contract

| 類型                     | Token               | 使用場景                                                                         | Owner                                                    |
| ------------------------ | ------------------- | -------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Micro mark               | `rounded-xs` / 1px  | 細線框、角標線、微型工業標記、brand motif                                        | Component local style                                    |
| Precision control        | `rounded-sm` / 2px  | Button、icon utility、segmented control、mission tabs                            | `app.config.ts` / `button-themes.ts` / local `UTabs :ui` |
| Field / compact surface  | `rounded-md` / 4px  | Input、textarea、select、dropdown items、mobile nav row、small cards、icon tiles | `app.config.ts` / local `:ui` / component local style    |
| Standard card            | `rounded-lg` / 6px  | Product/service cards、content panels、proof strips、contact info cards          | Component local style / `surface-sys-card`               |
| Large media / overlay    | `rounded-xl` / 8px  | Dropdown shell、large media frame、page visual panel                             | Component local style                                    |
| Circular exception       | `rounded-full`      | Process dial、floating return action、status dot、真正圓形圖示容器               | Component local style + 本文件治理                       |
| Brand narrative geometry | Named local pattern | One-touch、hero、editorial asymmetric industrial cut                             | Local CSS variables + 本文件治理                         |

## 使用規則

- 一般 card、panel、media 不得使用 raw `rem`、raw `px` 或 `clamp(...)` 作為 `border-radius`；必須回到既有 token。
- 半徑大於 8px 時，只能是必要的 `rounded-full` circular exception 或具名 `brand narrative geometry`。
- navigation text link、desktop sidebar line nav、結構分隔線不建立 box surface，可使用 `0`。
- icon tile 若是方形容器使用 `rounded-md`；icon-only action button 仍依按鈕治理使用 `rounded-sm`。
- badge、一般 CTA、card、media surface 與裝飾條不得使用 `rounded-full`；`back-to-top` 這類 icon-only floating return action 例外。
- 交付流程的圓形屬於 `process dial / industrial gauge`，可使用外圈、內圈、icon 容器與步驟號碼的 `rounded-full`。
- `/design-system-color-lab` 是 internal preview，不作為公開站 radius contract。

## Brand Narrative Geometry

- 允許用於首頁 hero、one-touch 視覺、editorial media stack 等承接品牌記憶點的敘事容器。
- 必須以 component-local CSS variables 命名，例如 `--one-touch-brand-media-main-arc`，不得裸寫任意大圓角。
- 小角仍應回到 token，例如 `var(--radius-lg)`；大型品牌敘事容器優先使用斜切、缺角、角標線或儀控刻度，不以大圓角建立記憶點。
- 不得把敘事容器的 radius promotion 成全域 token。

## QA Checklist

1. Controls computed radius = 2px。
2. Fields computed radius = 4px。
3. Compact surfaces computed radius = 4px。
4. Standard cards computed radius = 6px。
5. Large media / overlay computed radius = 8px。
6. 所有大於 8px 的 radius 必須是必要的 circular exception 或具名 brand narrative geometry。
7. radius cleanup 不得新增 hover lift、shadow upgrade 或 scale motion。
