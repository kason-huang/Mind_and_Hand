---
title: "Human-to-Robot Transfer"
type: concept
tags:
  - embodied-ai
  - transfer-learning
  - imitation-learning
created: 2026-05-27
updated: 2026-05-27
---

## 定义

将人类演示的行为数据（视频、运动捕捉、遥操作记录等）转化为机器人可执行的策略或表示的过程。核心挑战在于跨越人类与机器人之间的**具身鸿沟（Embodiment Gap）**。

## 主要方法

| 方法 | 描述 | 代表工作 |
|------|------|---------|
| **视觉表征预训练** | 用人类视频预训练视觉编码器，再迁移到机器人策略 | R3M, HumanNet |
| **动作重定向** | 将人体运动映射到机器人运动学空间 | SONIC, Being-H0 |
| **隐式对齐** | 用少量配对的人类-机器人数据做中间训练（mid-training） | EgoScale |
| **统一 token 空间** | 人类与机器人共享同一潜在表示空间 | SONIC |

## 缩放定律

多个工作表明，人类数据规模与下游机器人性能之间存在可预测的缩放关系：
- EgoScale 首次在 20K 小时人类数据上验证了这一规律
- HumanNet 将规模推到 1M 小时，并证明 1,000h 人类视频 ≈ 100h 真机数据

## 参考资料

- [[wiki/sources/humannet|HumanNet]]
- [[wiki/sources/egoscale|EgoScale]]
- [[wiki/sources/sonic|SONIC]]
