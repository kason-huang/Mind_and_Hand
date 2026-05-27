---
title: "EgoScale Dataset & Framework"
type: entity
tags:
  - dataset
  - egocentric
  - dexterous-manipulation
  - nvidia
created: 2026-05-27
updated: 2026-05-27
aliases:
  - EgoScale
  - NVIDIA EgoScale
---

## 概述

EgoScale 是 NVIDIA GEAR Lab 提出的人类到灵巧操作迁移框架，包含 20,854 小时自我中心人类视频数据集和对应的 VLA 模型。首次在具身智能领域发现了清晰的 **log-linear 缩放定律**。

## 关键信息

- **发布机构**: NVIDIA GEAR Lab（林智伟等）
- **发布时间**: 2026 年 2 月
- **数据规模**: 20,854 小时自我中心视频
- **机器人平台**: Galaxea R1 Pro (22-DoF Sharpa Hand), Unitree G1 (7-DoF tri-finger)
- **训练算力**: 256 GB200 GPUs

## 与其它页面的关联

- [[wiki/concepts/scaling-law-for-embodied-ai|Scaling Law for Embodied AI]] — 发现 log-linear 缩放定律
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — 两阶段训练配方
- [[wiki/entities/humannet-dataset|HumanNet]] — 将缩放定律验证扩展到 1M 小时

## 实验任务

| 任务 | 描述 | 难度 |
|------|------|------|
| Shirt Rolling | 双手协作折叠卷起 T 恤 | 中 |
| Card Sorting | 分离卡片并插入正确卡槽 | 高 |
| Tongs Fruit Transfer | 使用镊子夹取水果 | 高 |
| Bottle Cap Unscrewing | 旋转打开瓶盖 | 中 |
| Syringe Liquid Transfer | 用注射器抽取/注入液体 | 极高（长程多步） |

## 参考资料

- [[wiki/sources/egoscale|EgoScale 论文摘要]]
