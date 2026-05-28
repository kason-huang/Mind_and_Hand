# LLM Wiki Activity Log

> 按时间顺序记录所有 wiki 操作。每条记录以 `## [日期] 操作类型 | 标题` 开头，便于 grep 检索。

---

## [2026-05-27] ingest | MimicPlay: Long-Horizon Imitation Learning by Watching Human Play
- **新建**: [[wiki/sources/mimicplay]] (论文摘要)
- **更新**: [[wiki/overview]] (加入 MimicPlay 到论文列表)
- **更新**: [[wiki/concepts/human-to-robot-transfer]] (分层隐式规划方法)
- **更新**: [[index.md]] (添加新条目)

## [2026-05-27] ingest | Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos
- **新建**: [[wiki/sources/being-h0]] (论文摘要)
- **新建**: [[wiki/entities/being-h0-framework]] (实体)
- **更新**: [[wiki/overview]] (加入 Being-H0 到论文列表和方法表)
- **更新**: [[wiki/concepts/human-to-robot-transfer]] (显式运动建模方法)
- **更新**: [[index.md]] (添加新条目)

## [2026-05-27] ingest | EgoSchema: A Diagnostic Benchmark for Very Long-form Video Language Understanding
- **新建**: [[wiki/sources/egoschema]] (论文摘要)
- **新建**: [[wiki/entities/egoschema-benchmark]] (实体)
- **新建**: [[wiki/concepts/temporal-certificate]] (核心概念)
- **更新**: [[wiki/overview]] (加入 EgoSchema 到论文列表)
- **更新**: [[index.md]] (添加新条目)

## [2026-05-27] ingest | EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video
- **新建**: [[wiki/sources/egodex]] (论文摘要)
- **新建**: [[wiki/entities/egodex-dataset]] (实体)
- **更新**: [[wiki/overview]] (加入 EgoDex 到论文列表)
- **更新**: [[index.md]] (添加新条目)

## [2026-05-27] ingest | SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control
- **新建**: [[wiki/sources/sonic]] (论文摘要)
- **新建**: [[wiki/entities/sonic-framework]] (实体)
- **更新**: [[wiki/concepts/human-to-robot-transfer]] (通用 token 空间方法)
- **更新**: [[wiki/concepts/scaling-law-for-embodied-ai]] (运动追踪缩放)
- **更新**: [[index.md]] (添加新条目)

## [2026-05-27] ingest | EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data
- **新建**: [[wiki/sources/egoscale]] (论文摘要)
- **新建**: [[wiki/entities/egoscale-dataset]] (实体)
- **更新**: [[wiki/concepts/scaling-law-for-embodied-ai]] (加入 EgoScale 缩放定律公式)
- **更新**: [[wiki/concepts/human-to-robot-transfer]] (加入 EgoScale 两阶段配方)
- **更新**: [[index.md]] (添加新实体条目)

## [2026-05-27] ingest | HumanNet: Scaling Human-centric Video Learning to One Million Hours
- **新建**: [[wiki/sources/humannet]] (论文摘要)
- **新建**: [[wiki/concepts/human-centric-video-learning]] (核心概念)
- **新建**: [[wiki/concepts/human-to-robot-transfer]] (核心概念)
- **新建**: [[wiki/concepts/scaling-law-for-embodied-ai]] (核心概念)
- **新建**: [[wiki/entities/humannet-dataset]] (实体)
- **新建**: [[wiki/overview]] (综合综述，首次创建)
- **更新**: [[index.md]] (添加来源、概念、实体条目)

## [2026-05-28] query | Ego Data for Robotics 逻辑链归档
- **新建**: [[wiki/queries/ego-data-for-robotics]] (问答沉淀)
- **更新**: [[index.md]] (添加 Queries 条目)

## [2026-05-28] export | 生成 ZotLit 风格论文笔记
- **新建**: [[raw/notes/humannet]], [[raw/notes/sonic]], [[raw/notes/egoscale]], [[raw/notes/egodex]], [[raw/notes/egoschema]], [[raw/notes/being-h0]], [[raw/notes/mimicplay]]
- **说明**: 从 Zotero 导出元数据，为 raw/papers/ 中 7 篇论文创建笔记

## [2026-05-27] init | LLM Wiki 初始化
- **新建目录**: `raw/`, `wiki/` 及其子目录
- **新建文件**: `index.md`, `log.md`, `.claude/CLAUDE.md`
- **配置**: `.claude/CLAUDE.md` schema 文件 — 定义了页面规范、工作流和目录结构
- **新建 agent**: `.claude/agents/llm-wiki.json` — 专用 LLM Wiki 维护助手

## 说明
- 用户选择主题: **特定课题研究**
- 资料类型: **混合来源**（文章、论文、视频转录、播客笔记等）
- 后续可根据需求迭代 CLAUDE.md 和目录结构
