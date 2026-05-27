---
title: "EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data"
type: source
tags:
  - egocentric
  - dexterous-manipulation
  - scaling-law
  - vla
  - human-to-robot
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/Zheng 等 - 2026 - EgoScale Scaling Dexterous Manipulation with Diverse Egocentric Human Data.pdf]]"
---

## 核心论点

EgoScale 证明：**人类到机器人的灵巧操作迁移本质上是一个缩放现象（scaling phenomenon）**。

在 20,854 小时自我中心人类视频上预训练 VLA 模型，发现了清晰的 **log-linear 缩放定律**，且该验证损失与下游真机性能强相关。

## 关键数据

| 指标 | 数值 |
|------|------|
| 人类预训练数据 | 20,854 小时 |
| 场景数 | 9,869 |
| 任务数 | 6,015 |
| 物体数 | 43,237 |
| 对齐中训练数据 | 50 小时人类 + 4 小时机器人 |
| 灵巧手自由度 | 22-DoF Sharpa Hand |
| 训练算力 | 256 GB200 GPU, 100K steps |

## 方法论

### 三阶段训练

```
Stage I:  人类预训练 (20K 小时, 100K steps, 256 GPU)
  ↓
Stage II: 对齐中训练 (50h 人类 + 4h 机器人, 50K steps, 冻结语言骨干)
  ↓
Stage III: 下游任务微调 (10K steps, 每个任务 100 条演示)
```

### 人类动作表示

- **手腕级**: 相对腕部运动（SE(3)变换），消除全局摄像机运动影响
- **手部手指**: 通过优化重定向将 21 个人手关键点映射为 22-DoF 灵巧手关节空间
- 对比实验表明：**全关节重定向 > 指尖表示 > 仅手腕**

### 模型架构

基于流的 VLA 模型（类似 GR00T N1），包含：
- 视觉语言骨干（VLM backbone）
- 扩散变换器（DiT）动作专家
- 轻量级实体条件 MLP 适配器（处理不同机器人的状态/动作空间）

## 核心发现

### 缩放定律

$$L = 0.024 - 0.003 \times \ln(D)$$

其中 $D$ 为人类预训练数据小时数，$R^2 = 0.9983$。

- 1K → 20K 小时：下游任务完成分数从 0.30 单调提升至 0.71，未见饱和
- 小数据集（1-2K 小时）出现过拟合，大数据集（10-20K 小时）稳定改善

### 一键迁移（One-Shot Transfer）

对齐中训练后，仅用 **1 条机器人演示** + 100 条人类演示即可适应新任务：
- Fold Shirt: **88% 成功率**
- Unscrew Bottle: **55% 成功率**

### 跨实体迁移

人类预训练 + 中训练可迁移到完全不同 kinematic 的机器人：
- Galaxea R1 Pro (22-DoF Sharpa Hand) → Unitree G1 (7-DoF tri-finger)
- 比从零训练高 **30%+ 绝对成功率**

## 与已有知识的关联

- [[wiki/sources/humannet|HumanNet]] 将 EgoScale 的缩放定律验证扩展到 1M 小时
- [[wiki/concepts/scaling-law-for-embodied-ai|具身智能缩放定律]] — EgoScale 是最早发现明确缩放定律的工作之一
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — EgoScale 的两阶段训练配方是核心方法之一
- 与 [[wiki/sources/sonic|SONIC]] 互补：EgoScale 关注灵巧操作，SONIC 关注全身运动追踪

## 矛盾与局限

- 在 20K 小时内未见饱和，但更大规模是否仍保持 log-linear 尚待验证
- 人类动作通过重定向获得，存在信息损失
- 对齐中训练需要匹配的视角和场景设置，限制了扩展性

## 外部链接

- 项目页面: https://research.nvidia.com/labs/gear/egoscale/
