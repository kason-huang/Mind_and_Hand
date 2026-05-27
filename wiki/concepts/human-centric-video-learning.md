---
title: "Human-Centric Video Learning"
type: concept
tags:
  - embodied-ai
  - dataset
  - scaling
  - representation-learning
created: 2026-05-27
updated: 2026-05-27
---

## 定义

利用大规模人类活动视频（第一人称和/或第三人称）来训练具身智能模型，使模型能从人类行为中学习物理交互的先验知识，而不完全依赖机器人真机数据。

## 发展脉络

- **Ego4D (2022)**：3,670 小时自我中心视频，聚焦日常活动理解
- **Ego-Exo4D (2024)**：1,286 小时第一+第三人称配对视频，技能型活动
- **EgoScale (2026)**：20,854 小时自我中心视频，发现人类数据规模与灵巧操作性能之间的缩放定律
- **HumanNet (2026)**：**1,000,000 小时**，首次验证 1,000h 人类视频 ≈ 100h 真机数据

## 在本课题中的重要性

这是将互联网规模的人类视频转化为具身智能训练信号的核心路径。关键在于：人类视频的获取成本远低于机器人遥操作数据，且天然覆盖长尾场景。

## 核心挑战

1. **具身鸿沟**：人类与机器人的运动学、动力学差异
2. **视角差异**：自我中心 vs 第三人称的信息互补
3. **标注噪声**：开放世界视频的自动标注不可靠
4. **规模 vs 质量**：更大规模意味着更多噪声，如何平衡

## 相关概念

- [[Human-to-Robot Transfer]]
- [[Ego-Exo Learning]]
- [[Scaling Law for Embodied AI]]

## 参考资料

- [[wiki/sources/humannet|HumanNet]]
- [[wiki/sources/egoscale|EgoScale]]
