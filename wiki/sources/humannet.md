---
title: "HumanNet: Scaling Human-centric Video Learning to One Million Hours"
type: source
tags:
  - human-centric-video
  - dataset
  - ego-exo
  - scaling
  - embodied-ai
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/Deng and Zhou - 2026 - HumanNet Scaling Human-centric Video Learning to One Million Hours.pdf]]"
---

## 核心论点

HumanNet 提出：**人类中心视频（human-centric video）可以成为具身智能的可扩展数据基础设施**，替代传统依赖真机数据（robot-specific data）的范式。

论文构建了一个 **100 万小时**的人类活动视频语料库，涵盖第一人称（egocentric）和第三人称（exocentric）视角，并通过受控实验验证：**1000 小时自我中心视频预训练 ≈ 100 小时真机数据**。

## 关键数据

| 指标 | 数值 |
|------|------|
| 总时长 | 1,000,000 小时（100 万小时） |
| 物体种类 | 150,000+ |
| 任务种类 | 720,000+ |
| 视角 | 第一人称 + 第三人称 |
| 标注类型 | Caption、运动描述、手部/身体信号 |

## 方法论

### 数据管线（三阶段）

1. **数据收集（Data Collection）**
   - 种子关键词 → 关键词扩展 → 关键词爬取 → 频道爬取 → 现有数据集整合
   - 来源：视频平台搜索、搜索引擎、开源数据集、真实环境自采集

2. **数据处理（Data Processing）**
   - 去重与标准化 → 内容过滤（保留有意义的人类活动） → 质量过滤 → 场景分割 → 视频裁剪

3. **标注（Annotation）**
   - 3D 手部和身体姿态检测
   - 单目 SLAM（用于第一人称视频的相机轨迹估计）
   - 运动重定向（retargeting）到统一人体骨骼
   - LLM 辅助生成 Caption、运动描述、活动分类

### 四个设计原则

| 原则 | 说明 |
|------|------|
| **Scale（规模）** | 足够大以覆盖长尾活动、环境、运动风格 |
| **Viewpoint Diversity（视角多样性）** | 同时保留第一和第三人称，显式索引 |
| **Physical Relevance（物理相关性）** | 保留手-物接近度、全身运动、状态变化等信号 |
| **Pretraining Readiness（预训练就绪）** | 便于现代大规模训练管线使用 |

## 核心验证实验

在 **LingBot-VLA** 架构下进行受控对比，仅改变预训练数据源：

| 预训练数据 | 验证损失表现 |
|-----------|------------|
| Qwen VLM（基线，无额外训练） | 最高 |
| + 100 小时真机 CoBot 数据 | 中 |
| + 1,000 小时 HumanNet 自我中心视频 | **≈ 100h 真机**（部分任务组更优） |
| LingBot（20,000 小时真机数据） | 最低（但差距显著缩小） |

> **结论**：自我中心人类视频是可扩展且成本更低的替代方案，能显著缩小互联网规模感知与具身动作学习之间的差距。

## 与已有知识的关联

- 延续 [[EgoScale]] 的方向（在 20,854 小时人类数据上发现缩放定律），将规模推到 **100 万小时**
- 与 [[SONIC]] 互补：SONIC 需要大规模人类运动数据来训练人形机器人控制器，HumanNet 提供了这种数据源
- 与 **Ego4D、Ego-Exo4D、EPIC-KITCHENS** 等数据集构成递进关系，但规模大 1-2 个数量级

## 矛盾与局限

- **具身鸿沟（Embodiment Gap）**：人类行为≠机器人行为，即使百万小时数据也不能消除这一差距
- **规模引入噪声**：开放世界视频必然包含模糊标签、视角不平衡、质量波动
- **覆盖不均**：百万小时规模可能造成"普遍性幻觉"，实际存在地理、社会经济、职业等偏差
- **隐私与安全**：第一人称视频可能拍摄到 bystanders、敏感场所等

## 外部链接

- 项目页面: https://dagroup-pku.github.io/HumanNet/
- GitHub: https://github.com/DAGroup-PKU/HumanNet/
