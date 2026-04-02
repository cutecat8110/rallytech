# Nano Banana 提示詞模式附錄

最後更新：2026-04-02

## 文件目的

- 把外部研究來源中可重複、可商用、可驗證的 prompt pattern 整理成 recipe。
- 作為 [Nano-Banana-提示詞與生成流程.md](./Nano-Banana-提示詞與生成流程.md) 的附錄，不直接取代核心 SOP。
- 幫助每次生成前先選 pattern，而不是臨場從零拼 prompt。

## 使用方式

1. 先決定 slot id，並建立 `data/nano-banana/briefs/<slot>-brief-template.json`
2. 從本附錄選 2 到 4 個 `recipe_ids`
3. 把選中的 recipe 轉成 brief 欄位與 JSON prompt
4. prompt seed 以 `data/nano-banana/prompts/<slot>-v1.txt` 起步
5. 生成後用相同 recipe id 回看是否真的解決了對應失敗模式

補充：

- `home-hero` 是目前第一個完整範例。
- `about-primary`、`ote-background`、`connector-image` 已完成 scaffold，可沿用相同 recipe workflow。
- `mission-square` 是目前第一個 state-aware 範例，需先決定 `mission / join-us` state 再選 recipe。

## Recipe Library

### 1. `hero-background-right-safe-area`

- 適用情境：首頁 Hero 背景圖需要右側保留網頁疊字空間。
- 要強調的欄位：`asset_type`、`composition.hero_safe_area`、`commercial_constraints`、`overlay_policy`
- 常見失敗訊號：右側被主體塞滿、產生假標題或假按鈕、畫面雜訊太多無法上 H1。
- 何時不用：圖片本身就是完整廣告圖或社群貼文，不需要後續網頁疊字。

### 2. `operator-as-scale-only`

- 適用情境：需要人物存在感，但人物不是品牌主角。
- 要強調的欄位：`subject`、`composition.focal_structure`、`avoid`
- 常見失敗訊號：人物變成主角、背影過大、姿態像 stock photo 演戲。
- 何時不用：主題本來就是人物肖像、團隊形象照、工程師互動畫面。

### 3. `dual-reference-industrial-realism`

- 適用情境：單張 reference 無法同時穩住構圖與材質可信度。
- 要強調的欄位：`reference_usage`、`reference_roles`
- 常見失敗訊號：模型把構圖、材質、風格混成平均值，最後既不像控制中心，也不像網站 Hero。
- 何時不用：只做純 text-to-image 探索，或目前只有單一高品質 reference 可用。

### 4. `industrial-realism-anchors`

- 適用情境：畫面需要明確脫離 generic tech office，靠近真實工業控制中心。
- 要強調的欄位：`scene`、`reality_anchors`、`visual_message`
- 常見失敗訊號：像辦公室監控室、假科技展場、漂浮科幻面板、過度抽象的 dashboard。
- 何時不用：主題本來就不是現實空間，而是概念性品牌視覺或抽象背景。

### 5. `anti-stock-anti-hud`

- 適用情境：生成結果常出現 stock-office 感或 AI 自動加上的科技貼圖。
- 要強調的欄位：`disallowed_ai_signals`、`avoid`
- 常見失敗訊號：玻璃上出現電路線、HUD 疊圖、莫名白板、過多椅子與桌面、假流程圖。
- 何時不用：使用者明確要 futuristic / sci-fi / interface-heavy 視覺。

### 6. `empty-safe-area-no-embedded-text`

- 適用情境：網站 Hero 背景圖不能內嵌任何 copy、button 或 UI 元素。
- 要強調的欄位：`overlay_policy`、`commercial_constraints`、`avoid`
- 常見失敗訊號：模型直接畫標題、按鈕、假網站 mockup、可讀文字或亂碼數字。
- 何時不用：本次就是要生成帶標題的廣告圖、海報或社群素材。

### 7. `artifact-rescue`

- 適用情境：上一輪圖已接近可用，但有局部 AI artifact 或材質錯誤。
- 要強調的欄位：`iteration_hypothesis`、`avoid`、`lighting.surface_behavior`
- 常見失敗訊號：塑膠質感、螢幕邊緣錯亂、玻璃反射不合理、局部透視怪異。
- 何時不用：整體構圖與主題都還錯，這時應先重設 scene / composition，而不是救 artifact。

### 8. `composition-rescue`

- 適用情境：題材正確，但視覺節奏不適合首頁 Hero。
- 要強調的欄位：`composition.format`、`composition.focal_structure`、`composition.camera`
- 常見失敗訊號：主體置中太滿、前後景沒有層次、沒有文案安全區、視覺重心過散。
- 何時不用：當主要問題是題材不對或工業可信度太弱，先修 scene / reality anchors。

### 9. `technical-signal-stack`

- 適用情境：需要把 photoreal / cinematic / commercial image 做得更像真實攝影，而不是 AI 氣氛圖。
- 要強調的欄位：`technical_signals`、`lighting`、`composition.camera`
- 常見失敗訊號：雖然主題對了，但光線、景深、動態模糊、攝影感都不可信。
- 何時不用：純插畫、抽象背景、極簡 icon 素材，不需要真實攝影物理。

### 10. `spatial-director-language`

- 適用情境：模型容易把元素擠在一起、位置亂掉、前後景失控。
- 要強調的欄位：`spatial_positioning`、`composition.focal_structure`
- 常見失敗訊號：safe area 被侵占、主體沒有層次、背景元素跑到主視覺上。
- 何時不用：只做極簡單物件特寫、構圖本身非常單純時。

### 11. `named-visual-standard`

- 適用情境：需要快速把輸出拉向既有商業視覺語法，例如企業形象照、電商主圖、時尚 editorial。
- 要強調的欄位：`visual_standard`、`commercial_constraints`
- 常見失敗訊號：畫面像 generic AI art，沒有明確商業類型感。
- 何時不用：目標本身就是新奇概念風格，或已經有非常明確的自定藝術方向。

### 12. `color-material-control`

- 適用情境：色彩容易亂飽和，或表面反光像塑膠、假材質。
- 要強調的欄位：`color_restriction`、`material_notes`
- 常見失敗訊號：霓虹偏色、背景色污染主體、金屬不金屬、玻璃不玻璃。
- 何時不用：黑白稿、單色線稿、完全風格化的插圖。

## Pattern 選用原則

- 每輪優先選 2 到 4 個 recipe，不要一次把全部 pattern 都堆進 prompt。
- 先選最能對應上輪失敗標籤的 recipe，再決定 prompt 文字。
- 如果上一輪失敗屬於 `embedded-copy`，優先選 `empty-safe-area-no-embedded-text`，不要先去加更多鏡頭描述。
- 如果上一輪失敗屬於 `office-stock` 或 `weak-industrial-credibility`，優先選 `industrial-realism-anchors` 與 `anti-stock-anti-hud`。
- 如果上一輪失敗屬於 `composition-drift` 或 `bad-safe-area`，優先選 `hero-background-right-safe-area` 與 `composition-rescue`。
- 如果上一輪失敗屬於 `flat-lighting` 或整體畫面像 AI 假攝影，優先選 `technical-signal-stack`。
- 如果上一輪失敗屬於 `bad-safe-area` 或元素亂跑，優先選 `spatial-director-language`。
- 如果上一輪失敗屬於 `plastic-sheen` 或 `oversaturated-look`，優先選 `color-material-control`。

## 外部來源註記

本附錄的 pattern 來自以下來源的高信心模式蒐整，不代表逐字轉錄：

- Google Gemini image generation 官方文件
- `last30days-skill` 的 Nano Banana Pro prompting 研究定位
- 使用者提供的 `The JSON Prompting Playbook`
- 使用者提供的 `20 Nano Banana 2 Prompts You Need to Start Using Immediately`
- 本 repo 的 Hero 候選圖實測與人工判讀

因此：

- 若外部方法論與本 repo 實測衝突，以本 repo 實測為準。
- 若社群 prompt pattern 很吸引人，但不符合 B2B 工業控制商用場景，不直接納入正式 prompt。
