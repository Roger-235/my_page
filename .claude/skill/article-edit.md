---
name: article-edit
description: "Rewrite and polish blog articles so they read more naturally and comfortably. ALWAYS trigger automatically whenever the user asks to edit, fix, change, or update any file in src/content/posts/ — even for small changes. Trigger when: edit article, revise post, improve writing, polish blog post, 修改文章, 潤色文章, 幫我改文章, 讓文章讀起來更舒服, 改一下這篇, 幫我潤色, any modification to a post file. Do not trigger for writing a brand new article from scratch, code review tasks, or edits to non-post files."
---

# Article Edit

Rewrites a blog post so it reads more naturally, with improved flow, clarity, and tone — then outputs the full revised text ready to use.

## Purpose

Polish a blog post draft for readability and natural flow, and return the complete revised article with a concise changelog.

## Trigger

Apply this skill when the user requests:
- Any edit, fix, change, or update to a file in `src/content/posts/` — even if the request is small or specific
- "edit article", "revise post", "improve writing", "polish blog post"
- "修改文章", "潤色文章", "幫我改文章", "讓文章讀起來更舒服", "改一下這篇", "幫我潤色"

Do NOT trigger for:
- Writing a brand new article when no draft exists
- Code review tasks (use `code-review` skill instead)
- Translating an article without a revision request
- Summarizing an article without editing it
- Edits to any file outside `src/content/posts/`

## Prerequisites

- The article to edit must be provided — as a file path, IDE selection, or pasted text
- No additional tools required

## House Style

This blog has a specific writing style derived from `information-camp.md`. Apply these conventions when editing:

| Element | Convention | Example |
|---------|-----------|---------|
| Section dividers | `---` between major sections | between `## 插曲` and `## 初次見面` |
| Memorable moments | `> blockquote` for vivid scenes or key lines | `> 滿身大汗趕到現場。` |
| People names | `*name*` italic | `*威忌*`、`*水餃*` |
| Self-commentary | `~~strikethrough~~` for humorous asides | `~~其實就是把東西丟給 Claude~~` |
| Sequential events | Bullet list for timelines | `- 打到兩點伺服器爆掉` |
| Sub-events | `###` H3 for incidents within a section | `### 小插曲` |
| Section titles | Short, evocative nouns (2–4 chars preferred) | `起點`、`插曲`、`發表` |
| Emoji | Sparingly, at emotional high/low points only | `💀`、`🍎` |
| Tone | Casual first-person, direct; never formal | `我嚇到`、`超級狼狽` |

## Steps

1. **Read the full article** — load the entire content including frontmatter so no context is lost
2. **Identify the article type and voice** — note whether it is technical, personal, tutorial, or journal; note the author's natural tone (casual, reflective, instructional)
3. **Edit for sentence flow** — break overly long sentences, merge choppy fragments, remove filler words and redundant phrases
4. **Edit for tone consistency** — unify voice throughout (first-person stays first-person; tense stays consistent)
5. **Edit the opening** — ensure the first paragraph gives the reader a reason to keep reading; replace generic openers ("這篇文章將介紹…") with a concrete scene, question, or observation
6. **Edit paragraph transitions** — add or smooth connective phrases so paragraphs flow into each other naturally
7. **Edit the closing** — ensure the last paragraph lands cleanly; remove weak sign-off phrases ("以上就是本文的介紹")
8. **Apply House Style** — apply the conventions from the House Style table: add `---` dividers between major sections, wrap people names in `*italics*`, convert vivid moments to `> blockquotes`, move humorous self-commentary to `~~strikethrough~~`, convert timeline sequences to bullet lists
9. **Write the full revised article** — output the complete polished text, preserving all frontmatter and markdown structure
10. **Write the changelog** — list every type of change made in one concise bullet per category

## Output Format

File path: none (output is printed to the user)

```
## Article Edit: <filename or title>

### Changelog
- **Flow**: 拆解 3 個超長句子，合併 2 個過短的段落
- **Opening**: 替換通用開場白，改以具體場景帶入
- **Tone**: 統一全文為第一人稱現在式
- **Closing**: 移除結尾的 "以上就是..." 收尾語，改以一句有重量的總結

### Revised Article

<完整修改後的文章內容，保留原始 frontmatter 和 markdown 格式>
```

## Rules

### Must
- Output the complete revised article — never output only the changed sections
- Preserve all frontmatter fields (title, pubDate, description, tags, category) exactly as-is
- Preserve all markdown formatting (headings, code blocks, lists, links, images)
- Preserve the author's voice — the revised text must feel like the same person wrote it
- Keep the language of the article (Chinese stays Chinese; English stays English; mixed stays mixed)
- The Changelog must list at least one entry per category of change made
- Never add new factual content, opinions, or examples that were not in the original

### Never
- Never omit sections of the article in the output — the full revised text must always be present
- Never change factual claims, technical details, dates, or names
- Never elevate the register (e.g., turn casual 口語 into formal 書面語) unless the original is already formal
- Never add a summary, conclusion, or call-to-action that did not exist in the original
- Never change the title unless it is factually wrong

## Examples

### Good Example

```
## Article Edit: posts/install-linux.md

### Changelog
- **Flow**: 拆解開頭第二句 52 字長句為兩句；移除「進行了操作」等冗詞
- **Opening**: 把 "這篇文章將介紹如何安裝 Linux" 改為具體的個人經驗帶入
- **Tone**: 全文統一為第一人稱；移除中途出現的「筆者」
- **Closing**: 移除 "以上就是本次安裝的全部步驟" 結語，改以一句感受收尾

### Revised Article

---
title: 裝了 Linux 之後
pubDate: 2026-01-15
description: 記錄第一次安裝 Arch Linux 的過程
category: Linux
---

第一次裝 Linux，我把硬碟格式化了兩次。但裝完的那一刻，開機時間從 40 秒變成了 8 秒，我知道再也不想回去了。

## 準備工作

先下載 ISO 映像檔，用 `dd` 燒錄到 USB。...

（以下為完整修改後全文）
```

### Bad Example

```
這篇文章整體還不錯，開頭可以再改進一下，中間有幾個句子比較長。建議把第三段整理一下。

修改後的部分：
> 第一次裝 Linux，我把硬碟格式化了兩次。
```

> Why this is bad: Does not output the full revised article — only one sentence. No Changelog. The author cannot use this output directly; they must manually apply each suggestion to the original file.
