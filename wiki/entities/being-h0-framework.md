---
title: "Being-H0 Framework"
type: entity
tags:
  - vla
  - dexterous
  - hand-motion
  - pretraining
  - human-video
  - beingbeyond
created: 2026-05-27
updated: 2026-05-27
aliases:
  - Being-H0
---

## 概述

Being-H0 是 BeingBeyond 与北京大学、中国人民大学联合发布的灵巧 VLA（Vision-Language-Action）基础模型。首次在大规模人类视频上通过**显式手部运动建模**预训练灵巧操作模型，再通过后训练适配真实机器人。

## 关键信息

- **发布机构**: BeingBeyond / 北京大学 / 中国人民大学
- **发布时间**: 2025年7月
- **架构**: InternVL3 骨干 + 运动 tokenizer
- **模型规模**: 1B / 8B / 14B 参数
- **训练数据**: UniHand 数据集（165M+ 样本）
- **训练算力**: 32 × A800-80G

## 核心特点

### Physical Instruction Tuning
区别于传统 VLA 的隐式学习（如 GR00T），Being-H0 采用**显式手部运动建模**：先在大规模人类视频上学习预测手部运动，再通过后训练适配机器人。

### Part-Level Motion Tokenization
将手腕和手指运动分别用独立 codebook 量化，精度达毫米级。

### 训练后直接适配机器人
后训练阶段用 MLP 投影 + learnable query tokens 将运动先验转化为机器人可执行的动作。

## 与其它页面的关联

- [[wiki/sources/being-h0|Being-H0 论文]] — 完整论文摘要
- [[wiki/sources/egodex|EgoDex]] — UniHand 最大数据来源
- [[wiki/entities/egodex-dataset|EgoDex Dataset]]
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — 显式运动建模的迁移方法
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]]
