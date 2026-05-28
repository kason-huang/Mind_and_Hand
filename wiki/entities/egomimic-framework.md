---
title: "EgoMimic Framework"
type: entity
tags:
  - framework
  - imitation-learning
  - egocentric
  - act
  - cross-embodiment
  - georgia-tech
  - stanford
created: 2026-05-28
updated: 2026-05-28
---

## 概述

EgoMimic 是一个 full-stack 模仿学习框架，由 Georgia Tech 和 Stanford 联合提出（Kareer et al., arXiv:2410.24221, Oct 2024）。它使用 **Project Aria 智能眼镜**采集人类自我中心视频和 3D 手部追踪数据，与少量机器人遥操作数据联合训练统一操作策略。

## 关键信息

- **机构**: Georgia Tech, Stanford University
- **论文**: arXiv:2410.24221, Oct 2024
- **项目页面**: https://egomimic.github.io/
- **核心算法**: ACT (Action Chunking Transformer) 改进版
- **数据采集设备**: Project Aria 眼镜（75g 头戴式）
- **机器人平台**: 双臂 ViperX 300 S + Aria 眼镜作为主传感器

### 系统组成

1. **人类数据采集子系统**: Aria 眼镜 → 自我中心 RGB + 3D 手部追踪（MPS）+ SLAM
2. **机器人硬件子系统**: 2× ViperX 300 S 臂（倒装）+ RealSense D405 腕部相机 + Aria 眼镜主相机
3. **数据对齐模块**: 坐标帧统一 + 动作高斯归一化 + SAM 视觉遮罩
4. **策略学习模块**: 共享 ResNet-18 编码器 + Transformer + 双输出头（pose/joint）

## 与其它页面的关联

- [[wiki/sources/mimicplay|MimicPlay]] — 同实验室的前作，分层方法 vs EgoMimic 统一方法
- [[wiki/entities/egodex-dataset|EgoDex Dataset]] — 互补性数据采集路线（Vision Pro vs Aria）
- [[wiki/entities/being-h0-framework|Being-H0 Framework]] — 显式运动 tokenization 方向的对比
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — 贡献了"统一共训"这一新桥梁策略
- [[wiki/concepts/scaling-law-for-embodied-ai|Scaling Law for Embodied AI]] — 提供微观尺度验证（1h hand >> 1h robot）
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]] — 人类视频作为一等数据源

## 参考资料

- [[wiki/sources/egomimic]] — 详细论文摘要
- [[raw/notes/egomimic]] — ZotLit 风格笔记
