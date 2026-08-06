# 235's page

用 [Astro](https://astro.build) 打造的個人部落格 / 筆記網站。

## 🚀 專案結構

```text
/
├── public/                     # 靜態資源（favicon 等）
├── src/
│   ├── components/              # 共用元件（導覽列、頁尾、搜尋列）
│   ├── content/
│   │   ├── posts/                # 部落格文章（Markdown）
│   │   └── notes/                # 筆記（Markdown）
│   ├── layouts/                 # 頁面版型（Layout / PostLayout / NoteLayout）
│   ├── pages/                   # 路由頁面
│   │   ├── blog.astro            # 文章列表
│   │   ├── notes.astro           # 筆記列表
│   │   ├── browse.astro          # 分類 / 標籤瀏覽
│   │   ├── timeline.astro        # 時間軸
│   │   ├── about.astro           # 關於我
│   │   ├── categories/           # 分類頁
│   │   ├── tags/                 # 標籤頁
│   │   └── rss.xml.ts            # RSS Feed
│   ├── plugins/                  # 自訂 remark / rehype 插件
│   ├── styles/global.css         # 全站樣式（含亮 / 暗色主題變數）
│   └── content.config.ts         # 內容集合（content collections）設定
└── package.json
```

想更了解 Astro 專案結構，可參考 [官方文件](https://docs.astro.build/en/basics/project-structure/)。

## 🧞 常用指令

在專案根目錄的終端機執行：

| 指令                       | 說明                                  |
| :------------------------- | :------------------------------------ |
| `npm install`               | 安裝相依套件                          |
| `npm run dev`                | 啟動本機開發伺服器 `localhost:4321`    |
| `npm run build`              | 建置正式版網站到 `./dist/`             |
| `npm run preview`            | 建置後本機預覽，部署前先確認           |
| `npm run astro ...`          | 執行 Astro CLI 指令，如 `astro add`、`astro check` |
| `npm run astro -- --help`    | 查看 Astro CLI 說明                    |

## 想了解更多？

歡迎參考 [Astro 官方文件](https://docs.astro.build) 或加入 [Discord 伺服器](https://astro.build/chat)。
