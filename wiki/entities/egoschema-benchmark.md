---
title: "EgoSchema Benchmark"
type: entity
tags:
  - benchmark
  - long-video
  - egocentric
  - video-qa
  - temporal-reasoning
created: 2026-05-27
updated: 2026-05-27
aliases:
  - EgoSchema
---

## 概述

EgoSchema 是 UC Berkeley（Malik Group）发布的超长视频理解基准。基于 Ego4D 构建，包含 **5,063 个多选题问答对**，每个基于 **3 分钟自我中心视频**，总时长超 **250 小时**。核心创新是 **temporal certificate** 概念来度量任务真正的"时间理解长度"。

## 关键信息

- **发布机构**: UC Berkeley (Malik Group)
- **发布年份**: 2023 (arXiv:2308.09126)
- **数据来源**: Ego4D (Ego4D license, 可商用)
- **规模**: 5,063 QA 对, 250+ 小时, 3 分钟/段
- **任务**: 5 选 1 多选题问答

## Benchmark 结果

| 模型 | 参数 | 最高准确率 |
|------|------|-----------|
| InternVideo | 478M | 32.1% |
| mPLUG-Owl | 7.2B | 29.6% |
| FrozenBiLM | 1.2B | 26.9% |
| VIOLET | 198M | 19.6% |
| **人类** | — | **76.2%** |

## 与其它页面的关联

- [[wiki/sources/egoschema|EgoSchema 论文]] — 基准论文的完整摘要
- [[wiki/entities/egodex-dataset|EgoDex]] — 同为 Ego4D 衍生工作
- [[wiki/entities/egoscale-dataset|EgoScale]] — 使用了 EgoSchema 作为长视频理解参考
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]]
