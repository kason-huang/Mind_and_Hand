---
title: "SONIC Framework"
type: entity
tags:
  - humanoid
  - motion-tracking
  - nvidia
  - whole-body-control
created: 2026-05-27
updated: 2026-05-27
aliases:
  - SONIC
  - NVIDIA SONIC
---

## 概述

SONIC（Supersizing mOtion tracking for Natural humanoId Control）是 NVIDIA 提出的通用人形机器人全身运动追踪框架。通过在 100M+ 帧动捕数据上大规模训练，实现了自然、鲁棒的全身控制，并支持 VR 遥操作、视频控制、文本命令、音乐控制等多种输入方式。

## 关键信息

- **发布机构**: NVIDIA（罗正一等）
- **发布时间**: 2025 年 12 月
- **机器人平台**: Unitree G1
- **模型参数**: 1.2M → 42M
- **训练数据**: 100M+ 帧（700+ 小时动捕）
- **训练算力**: 9,000 GPU hours

## 能力矩阵

| 能力 | 输入方式 | 实时性 |
|------|---------|--------|
| 运动追踪 | 动捕数据 | ✅ 实时 |
| 交互式导航 | 手柄 (速度/方向/风格) | ✅ <5ms |
| VR 全身遥操作 | PICO 头显 + 追踪器 | ✅ 121.9ms 延迟 |
| VR 3-point 遥操作 | PICO 头显 + 手柄 | ✅ 轻量级 |
| 视频遥操作 | 单目摄像头 60fps | ✅ 实时 |
| 文本控制 | 自然语言 | ✅ 零样本 |
| 音乐控制 | 音频输入 | ✅ 实时 |
| VLA 集成 | VLA 模型输出 | ✅ 95% 成功率 |

## 与其它页面的关联

- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — 通用 token 空间
- [[wiki/concepts/scaling-law-for-embodied-ai|Scaling Law for Embodied AI]] — 运动追踪缩放验证
- [[wiki/entities/humannet-dataset|HumanNet]] — 互补的数据来源

## 参考资料

- [[wiki/sources/sonic|SONIC 论文摘要]]
