---
name: asset-sourcing-licensing
description: 在 RallyTech 類型網站任務中，需要為頁面或區塊挑選可重用的 demo images、整理搜尋關鍵字、記錄來源與授權備註時使用。特別適合 Unsplash、Pexels、Pixabay 等公開來源的素材篩選與下載紀錄；若任務是 AI 生圖或品牌變體，改用 `brand-variation-director` 或 `imagegen`。
---

# Asset Sourcing Licensing

把素材 sourcing 當成可追蹤的內容供應流程，不只是找一張能看的圖。這個 skill 負責為 RallyTech 類型頁面挑選安全、合適、可回溯的 demo images，並保留來源與授權紀錄。

## Workflow

1. Define the image job first.
   - Identify page, block, aspect ratio, and message.
   - Decide whether the image should show plant environments, control rooms, instrumentation, teams, abstract technology, or another category.
2. Search in this order.
   - Unsplash
   - Pexels
   - Pixabay
3. Record every selected asset.
   - keyword
   - page or block usage
   - source site
   - photographer or creator
   - asset page URL
   - download URL
   - licensing or use note
   - suggested local filename
4. Review visual fit before download.
   - Prefer industrial, engineering, process, controls, plant, instrumentation, or field-operation cues.
   - Reject generic handshake, random office, obvious startup stock, unrelated people shots, and visible competitor branding.
5. Keep the sourcing log with the implementation.
   - Do not drop a downloaded file into the site without a source note.

## Licensing Rules

- Use official API or official download paths.
- For Unsplash, follow the API guidelines and trigger the official download tracking flow.
- Do not rely on screenshot capture or hotlinking as the final asset workflow.
- If API keys are missing, prepare the shortlist and required metadata first, then wait for keys before final download.

## Output Shape

For each candidate, provide:

- usage target
- search keywords
- source
- photographer
- license or use note
- download URL
- suggested filename

## Tools and References

- Run `scripts/fetch-stock-candidates.mjs` when API keys are available and we need a quick candidate list.
- Load `references/rallytech-source-priority.md` for source order, API env vars, and usage notes.
- Load `references/rallytech-selection-rubric.md` for what good industrial B2B imagery looks like.
