# LLM Wiki — Schema & Conventions

> 本项目是一个 **LLM Wiki**（参考 Andrej Karpathy 的 LLM Wiki 模式），
> 由 LLM (Claude Code) 自主维护，用户在 Obsidian 中阅读和浏览。
>
> 主题：**特定课题研究**
> 资料类型：**混合来源**（文章、论文、视频转录、播客笔记等）

---

## 目录结构

```
/
├── CLAUDE.md              ← 本文件 — wiki schema 与工作流定义
├── index.md               ← 内容目录（LLM 维护）
├── log.md                 ← 操作日志（LLM 维护）
│
├── raw/                   ← 原始资料（不可变，LLM 只读不写）
│   ├── articles/          ←   网页文章 / 博客
│   ├── papers/            ←   学术论文 / 技术报告 (PDF/MD)
│   ├── transcripts/       ←   视频 / 播客转录
│   ├── notes/             ←   用户已有的 Obsidian 笔记导入
│   └── assets/            ←   下载的图片、附件等
│
└── wiki/                  ← LLM 生成的百科页面（LLM 全权维护）
    ├── overview.md        ←   整体综述 / 阶段性综合 synthesis
    ├── entities/          ←   人物、组织、项目、作品等实体
    ├── concepts/          ←   核心概念、术语、理论框架
    ├── sources/           ←   每份原始资料的摘要（与 raw/ 一一对应）
    ├── comparisons/       ←   跨来源对比分析、比较表格
    └── queries/           ←   有价值的问答结果归档
```

---

## 页面规范（Page Conventions）

### 通用 YAML Frontmatter

每个 wiki 页面必须包含以下 frontmatter 字段：

```yaml
---
title: 页面标题
type: entity | concept | source | comparison | query | overview
created: 2026-05-27
updated: 2026-05-27
tags:
  - tag1
  - tag2
aliases:
  - 别名1
  - 别名2
source_count: 3          # 仅 source 类型：引用了几份资料
sources:                 # 涉及到的原始资料链接
  - "[[raw/articles/xxx.md]]"
  - "[[raw/papers/yyy.md]]"
---
```

### 页面内容规范

- 使用 **Wiki 链接** `[[page-name]]` 进行内部引用，保持强关联
- 使用 **外部链接** `[text](url)` 引用原文
- 适当使用 `#tag-name` 进行分类
- 对需要强调的矛盾或争议，使用 `> [!warning]` Obsidian callout
- 长文档使用 `##` 二级标题分段

### 页面类型模板

#### Entity 页面 (`wiki/entities/`)
```markdown
---
title: "实体名称"
type: entity
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

## 概述

## 关键信息

## 与其它页面的关联

## 参考资料
```

#### Concept 页面 (`wiki/concepts/`)
```markdown
---
title: "概念名称"
type: concept
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

## 定义

## 发展脉络 / 演变

## 在本课题中的重要性

## 相关概念

## 矛盾 / 待解决的问题

## 参考资料
```

#### Source 摘要页面 (`wiki/sources/`)
```markdown
---
title: "资料标题摘要"
type: source
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
source_count: 1
sources:
  - "[[原始资料路径]]"
---

## 核心论点

## 关键数据 / 证据

## 与已有知识的关联

## 矛盾 / 新发现

## 个人思考（如来自用户）
```

#### Comparison 页面 (`wiki/comparisons/`)
```markdown
---
title: "对比主题"
type: comparison
tags: []
created: YYYY-MM-DD
updated: YYYY-MM-DD
---

## 对比维度

| 维度 | 来源A | 来源B | 来源C |
|------|-------|-------|-------|
| 观点 | ...   | ...   | ...   |

## 综合分析

## 待解决的问题
```

---

## 工作流定义（Workflows）

### 1️⃣ Ingest（资料摄入）

当用户说"帮我处理这份资料"或"请 ingest XXX"时，按以下流程操作：

1. **读取** `raw/` 下的原始资料文件
2. **讨论**：与用户讨论关键发现和值得注意的点
3. **写入 wiki/sources/**：创建或更新该资料的摘要页面
4. **更新相关页面**：找到并更新 wiki 中受影响的 entity / concept 页面（可能涉及 5-15 个页面）
5. **更新 index.md**：在对应分类下添加/更新链接和摘要
6. **追加 log.md**：新增一条日志条目

> **原则**：一次只 ingest 一份资料，与用户交互后再推进下一份。

### 2️⃣ Query（查询问答）

当用户提问时，按以下流程操作：

1. **读取 index.md**，确定相关页面
2. **深入阅读**相关 wiki 页面
3. **合成答案**，引用 wiki 页面作为来源（使用 Wiki 链接）
4. **可选归档**：如果答案有长期价值，写入 `wiki/queries/` 并更新 index.md

### 3️⃣ Lint（定期健康检查）

按用户要求执行，检查：

- ❌ 页面之间的矛盾（contradictions）
- ⚠️ 被新资料取代的过时说法
- 🔗 没有入链的孤儿页面
- 📝 被反复提到但缺少独立页面的概念
- 🕳️ 可补全的数据缺口

lint 结果写入 log.md，并附上修复建议。

### 4️⃣ 日志规范

每条 log 条目格式：

```markdown
## [2026-05-27] ingest | Source Title
- 新建: [[wiki/sources/xxx]], [[wiki/concepts/yyy]]
- 更新: [[wiki/entities/zzz]] (新增矛盾标注)
```

这种格式可用 `grep "^## \[" log.md | tail -5` 快速查看最近操作。

---

## Zotero 集成

你的 Zotero 数据库位于 `C:\Users\Administrator\Zotero\zotero.sqlite`，包含 **228+ PDF 论文**。

### 查询工具

一个标准化工具已在 `.claude/skills/zotero-query.js`，支持：

| 命令 | 用途 |
|------|------|
| `node .claude/skills/zotero-query.js collections` | 列出所有文库及其子文库 |
| `node .claude/skills/zotero-query.js collection <名称>` | 查某个文库中的论文及 PDF 路径 |
| `node .claude/skills/zotero-query.js search <关键词>` | 按关键词搜索论文 |
| `node .claude/skills/zotero-query.js papers <文库ID>` | 按文库 ID 列出论文 |

### 提取论文到 raw/papers/

```bash
# 先用查询工具找到论文的 PDF 路径
node .claude/skills/zotero-query.js collection ego

# 然后拷贝到 raw/papers/
cp "<PDF路径>" "raw/papers/"
```

详细文档见 [[zotero-skill.md]]。

---

## Obsidian 配置建议

- **附件路径**：建议在 Obsidian 设置 → 文件与链接 → 将"附件文件夹路径"设为 `raw/assets/`
- **Web Clipper**：用 Obsidian Web Clipper 将网页存到 `raw/articles/`
- **图片下载**：在 Obsidian 中为"Download attachments for current file"绑定快捷键（如 Ctrl+Shift+D），裁剪文章后可一键下载所有图片到本地
- **Dataview**：推荐安装 Dataview 插件，可利用 frontmatter 自动生成动态表格
- **Graph View**：Obsidian 的图谱视图是查看 wiki 结构的最佳方式

---

## 使用示例

```markdown
用户: "我刚把一篇关于 RLHF 的文章存到 raw/articles/ 里了，帮我处理一下。"

你 (LLM):
1. 读取 raw/articles/ 下的新文章
2. 与用户讨论关键发现
3. 创建 wiki/sources/rlhf-overview.md
4. 更新 wiki/concepts/reinforcement-learning.md、wiki/entities/openai.md 等
5. 在 index.md 的 Sources 和 Concepts 分类下添加条目
6. 在 log.md 追加: ## [2026-05-27] ingest | RLHF 概述
```

---

## 注意事项

- **不要修改 `raw/` 目录下的文件**，它们是不可变资料来源
- **不要在 wiki 页面中使用 emoji** 除非用户明确要求
- **保持链接完整性**：每次修改后检查是否有断裂的 Wiki 链接
- **CLAUDE.md 本身也是 wiki 的一部分** — 随着工作流优化，可以随时和用户一起迭代本文件
