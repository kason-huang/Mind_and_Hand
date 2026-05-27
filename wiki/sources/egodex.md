---
title: "EgoDex: Learning Dexterous Manipulation from Large-Scale Egocentric Video"
type: source
tags:
  - egocentric
  - dataset
  - dexterous-manipulation
  - apple
  - hand-tracking
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/Hoque 等 - 2025 - EgoDex Learning Dexterous Manipulation from Large-Scale Egocentric Video.pdf]]"
---

## 核心论点

EgoDex 提出：用 **Apple Vision Pro** 采集大规模自我中心视频 + 精确 3D 手部追踪数据，作为机器人灵巧操作学习的可扩展数据来源。

## 关键数据

| 指标 | 数值 |
|------|------|
| 总时长 | 829 小时 |
| 视频规格 | 1080p, 30 FPS |
| 总帧数 | 9,000 万帧 |
| 任务数 | 194 个桌面操作任务 |
| 轨迹数 | 338,000 条 |
| 动作类型 | 可逆 / 无需重置 / 需重置 |
| 标注 | 3D 手部骨架（每手 25 关节）、自然语言描述、相机内外参 |
| 存储 | 2.0 TB（压缩后） |

## 与其它数据集对比

| 维度 | EgoDex | Ego4D | DROID | EgoMimic |
|------|--------|-------|-------|----------|
| 轨迹数 | **338K** | 89K | 76K | 2K |
| 任务数 | **194** | n/a | 86 | 3 |
| 帧数 | **90M** | 21M | 19M | 0.4M |
| 灵巧标注 | ✅ 25 joints/hand | ❌ | ❌ | ❌（仅手腕） |

## 核心特点

### Apple Vision Pro 采集
- 多摄像头 + 设备端 SLAM → 精确 3D 手部追踪
- 无需额外硬件（手套、追踪器等），裸手操作
- 高保真 passthrough，采集者自然操作

### 任务多样性
涵盖远超 pick-and-place 的灵巧操作，包括：系鞋带、翻书页、拧螺丝、发牌、接球、装电池等。任务类型分为可逆（inverse 任务对）、无重置（如抛接球）、需重置三类。

### 数据管线
- ARKit 生产级姿态追踪
- GPT-4 从元数据生成自然语言描述
- PyTorch torchcodec 高效视频解码

## 与已有知识的关联

- [[wiki/sources/egoscale|EgoScale]] 使用了 829 小时 EgoDex 数据作为 Stage I 的一部分
- [[wiki/entities/humannet-dataset|HumanNet]] 引用了 EgoDex 作为高精度补充数据来源
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]] — EgoDex 提供了高精度标注的范例

## 外部链接

- GitHub: https://github.com/apple/ml-egodex
