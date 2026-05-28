---
title: "Embodied AI Research — Wiki Overview"
type: overview
tags:
  - embodied-ai
  - human-centric
  - vla
  - humanoid
created: 2026-05-27
updated: 2026-05-27
---

# Embodied AI 研究综合综述

> 本 wiki 围绕 **具身智能（Embodied AI）** 课题，聚焦于如何通过大规模人类数据来训练机器人。
> 主题贯穿：数据基础设施 → 表征学习 → 策略学习 → 系统集成。

## 当前核心脉络

### 1. 数据：从 Ego 到 Human-Centric

具身智能面临的最大瓶颈是**数据规模不足**。当前的研究趋势是用**人类视频替代机器人数据**：

- **EgoScale** (20K 小时) — 发现 log-linear 缩放定律 $L = 0.024 - 0.003\ln(D)$，$R^2=0.9983$
- **HumanNet** (1M 小时) — 规模增长 50 倍，验证 1,000h 人类视频 ≈ 100h 真机数据
- **Being-H0** — 物理指令微调，用 UniHand 数据集（11 个来源、1155 小时）预训练灵巧 VLA
- **EgoDex** — 用 Apple Vision Pro 采集高精度自我中心视频，829 小时表格操作
- **EgoSchema** — 超长视频理解基准，>250 小时视频，5,000+ 问答对；引入 temporal certificate 概念，模型 < 33% vs 人类 76%

### 2. 模型：从 MLP 到 Foundation Model

人形机器人控制正在从小模型向大模型过渡：

- **EgoScale**: 基于流的 VLA 模型（VLM backbone + DiT action expert），256 GPU 训练
- **SONIC**: 1.2M → 42M 参数，验证运动追踪的缩放属性，99.6% 追踪成功率
- **SONIC 通用 Token 空间**: 同一策略处理 VR/视频/文本/音乐/VLA 五种输入

### 3. 方法：从 Reward Engineering 到 Data-Driven

| 方法 | 代表工作 |
|------|---------|
| 人类预训练 + 对齐中训练 | EgoScale (两阶段配方) |
| 通用 Token 空间跨实体迁移 | SONIC (编码器-量化器-解码器) |
| 物理指令微调（显式运动建模） | Being-H0 (三阶段: 预训练/对齐/后训练) |
| 大规模人类视频预训练替代真机 | HumanNet (1M 小时验证) |
| One-shot 迁移 | EgoScale (88% 折衣成功率) |

### 4. 关键缩放定律

| 工作 | 缩放维度 | 发现 |
|------|---------|------|
| EgoScale | 人类数据量 (1K→20K 小时) | 验证损失 ~ log-linear 下降 |
| SONIC | 模型/数据/算力三维 | 性能随三轴一致提升 |
| HumanNet | 人类数据量 (1K→1M 小时) | 1,000h 人类 ≈ 100h 真机 |

## 当前已知论文一览

| 论文 | 作者 | 核心贡献 | 数据规模 |
|------|------|---------|---------|
| EgoScale | NVIDIA | 缩放定律 + 两阶段迁移配方 | 20K 小时 |
| HumanNet | 北大 | 1M 小时管线 + 人类≈真机验证 | 1M 小时 |
| SONIC | NVIDIA | 通用人形全身追踪 + Token 空间 | 100M 帧 |
| Being-H0 | Luo et al. | Physical Instruction Tuning + 灵巧 VLA 预训练 | 1155 小时 |
| MimicPlay | Wang et al. | 分层模仿学习 + 人类玩耍数据 | 10 分钟/场景 |
| EgoSchema | Mangalam et al. | 超长视频理解基准 + 时态证书 | >250 小时 |
| EgoDex | Hoque et al. | Apple Vision Pro 高精度采集 | 829 小时 |

## 下阶段方向

- 将 HumanNet 的数据与 SONIC 的通用 token 空间结合
- EgoScale 的缩放定律在更大规模（>100K 小时）上是否仍然成立
- 从灵巧操作到全身移动操作的扩展
- 更多论文待 ingest

## 待解决的问题

- 具身鸿沟仍然存在，人类数据不能完全替代机器人数据
- 不同数据集之间的标准化和统一 benchmark
- 人类视频 vs 动捕数据 vs 真机数据的效率对比
- 隐私和安全性问题
