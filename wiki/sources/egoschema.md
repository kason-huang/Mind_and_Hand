---
title: "EgoSchema: A Diagnostic Benchmark for Very Long-form Video Language Understanding"
type: source
tags:
  - benchmark
  - long-video
  - egocentric
  - video-qa
  - temporal-reasoning
  - ego4d
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/EgoSchema.txt]]"
---

## 核心论点

EgoSchema 提出一个诊断性基准，用于评估多模态系统对**超长视频**的语言理解能力。关键创新是引入 **temporal certificate（时态证书）** 概念，衡量视频任务真正需要观看多长的片段才能回答，而非仅看视频剪辑总时长。

## 关键数据

| 指标 | 数值 |
|------|------|
| 问答对 | 5,063 个 |
| 视频总时长 | 250+ 小时 |
| 每段视频长度 | 3 分钟 |
| 选项数 | 5 选 1 |
| 中位数证书长度 | ~100 秒 |
| 来源 | Ego4D |

## 模型表现

| 模型 | 参数 | 设置 | 准确率 |
|------|------|------|--------|
| 随机猜测 | — | — | 20.0% |
| VIOLET (2022) | 198M | 75 帧 | 19.6% |
| FrozenBiLM (2022) | 1.2B | 90 帧 | 26.9% |
| mPLUG-Owl (2023) | 7.2B | 10 帧 | 29.6% |
| InternVideo (2022) | 478M | 90 帧 | 32.1% |
| **人类** | — | 无限制 | **76.2%** |

> 当前最佳模型（2023 年）准确率 < 33%，人类达 76%，差距巨大。

## 核心贡献

### 1. Temporal Certificate（时态证书）

定义：验证者需要观看的最小视频子片段集合，才能确信标注答案正确。

- **证书长度**：子片段时长之和
- 与视频总长度**弱相关**（一段 3 分钟视频可能仅需 2 秒即可回答）
- EgoSchema 中位数证书长度 **~100 秒**，是第二名（LVU）的 **5.7 倍**，是其它视频理解数据集的 **10~100 倍**

### 2. 数据管线

四阶段流程：

1. **Stage I (原始过滤)**：从 Ego4D 筛选 3 分钟片段，每个至少 30 条人工标注的叙述
2. **Stage II (QA 生成)**：链式调用 LLM（GPT-4、Bard、Claude）生成问答对，采用 Q(AW)-shot 策略
3. **Stage III (QA 过滤)**：规则过滤 + LLM 盲测过滤（剔除无需视频即可回答的问题）
4. **Stage IV (人工策展)**：两轮人工验证，97% 通过率

### 3. 时间理解分层

基于证书长度提出视频任务分类：

| 类别 | 证书长度 | 示例 |
|------|---------|------|
| Short video | ~1 秒 | Kinetics 动作分类 |
| Long-form video | ~10 秒 | NextQA, AGQA |
| Very long-form video | ~100 秒 | **EgoSchema** |

## 关键发现

- **人类效率**：1 分钟内达 67% 准确率，1 fps 视频下达 67.2%
- **模型饱和**：帧数增加后性能很快饱和（~30 帧后不再提升），说明当前架构缺乏真正的长时建模能力
- **盲测不可解**：LLM 盲测（无视频输入）仅 ~20%（随机水平），证明问题真正依赖视觉理解

## 与已有知识的关联

- [[wiki/sources/egoscale|EgoScale]] — EgoScale 等论文引用了 EgoSchema 作为长视频理解基准
- [[wiki/entities/egodex-dataset|EgoDex]] — 同为 Ego4D 衍生工作，但 EgoDex 关注灵巧操作数据
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]] — EgoSchema 提供了长视频理解评估的挑战性视角
- [[wiki/concepts/scaling-law-for-embodied-ai|Scaling Law for Embodied AI]] — 与 EgoScale 的缩放定律互补，缩放的是数据量，这里评估的是模型上限

## 外部链接

- 项目主页: https://egoschema.github.io
