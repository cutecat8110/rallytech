# AI Image Usage Logs

此資料夾保存 AI 生圖的每日用量與費用紀錄。

## Naming

- 每日紀錄檔：`YYYY-MM-DD.md`
- 日期以台北時區的生成時間為準。
- 表格內的 Date 欄位使用表單格式 `yyyy/M/d`。

## Required fields

生成腳本送出 API request 前，必須取得：

- Date
- User
- Page Used
- Number of Generations
- Generation Cost

腳本也會追加 candidateId、slot、model 與 outputPath，讓費用紀錄能回查到實際候選圖。

## Usage

```bash
npm run nano:hero:generate -- --usage-user "Hao Wang" --page-used "首頁 / Homepage" --generation-cost "NT$..."
```

缺少 `--usage-user`、`--page-used` 或 `--generation-cost` 時，生成腳本會在 API request 前中止。
