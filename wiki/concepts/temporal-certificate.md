---
title: "Temporal Certificate（时态证书）"
type: concept
tags:
  - benchmark
  - evaluation
  - long-video
  - temporal-reasoning
created: 2026-05-27
updated: 2026-05-27
aliases:
  - 时态证书
  - certificate length
  - temporal certificate set
---

## 定义

Temporal Certificate（时态证书）由 EgoSchema 提出，定义为：**验证者需要观看的最小视频子片段集合**，以确信标注答案正确。证书集合中各子片段的时长之和即为 **证书长度（Certificate Length）**。

## 核心思想

证书长度的核心价值在于**解耦"搜索"与"理解"**：
- 视频总时长包含大量无关帧
- 真正需要的信息可能只分布在少数片段中
- 证书长度衡量的是"理解所需的最少时间跨度"，而非"视频有多长"

## 分类体系

基于证书长度可将视频任务分为三个层级：

| 层级 | 证书长度 | 代表性数据集 | 所需理解能力 |
|------|---------|-------------|-------------|
| Short video | ~1 秒 | Kinetics, UCF101, HVU-Action | 单帧/短时动作识别 |
| Long-form video | ~10 秒 | NextQA, AGQA, iVQA, ActivityNet-QA | 短时动作序列理解 |
| Very long-form | ~100 秒 | **EgoSchema** | 抽象推理、长程叙事理解 |

## 关键观察

证书长度与视频总长度的**弱相关**表明：
- 长视频 ≠ 长时间理解任务
- 精心设计的基准需要确保证书长度真正长
- 许多自称"长视频"的数据集实际证书长度很短（< 10 秒）

## 元规则（Meta-rules）

证书长度估计依赖数据集的隐含规则。例如：
- Kinetics 的互斥标签（一段视频只属于一个动作类）大幅缩短所需证书
- 如果不考虑元规则，证书长度会被高估

## 与已有知识的关联

- [[wiki/sources/egoschema|EgoSchema]] — 提出 temporal certificate 概念的论文
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]] — 长视频理解是核心能力之一
