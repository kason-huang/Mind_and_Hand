---
title: "SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control"
type: source
tags:
  - humanoid
  - motion-tracking
  - nvidia
  - whole-body-control
  - scaling
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/Luo et al. - 2025 - SONIC Supersizing Motion Tracking for Natural Humanoid Whole-Body Control.pdf]]"
---

## 核心论点

SONIC 提出：**运动追踪（motion tracking）是人形机器人控制的天然可缩放基任务**。

通过沿三个轴（模型大小、数据量、算力）同时扩展，训练出一个通用人形机器人控制器，能产生自然、鲁棒的全身运动，且支持多模态输入。

## 关键数据

| 指标 | 数值 |
|------|------|
| 模型参数 | 1.2M → 42M |
| 训练数据 | 100M+ 帧 / 700 小时动捕数据 |
| 训练算力 | 9,000 GPU hours (128 GPUs × 3 天) |
| 机器人平台 | Unitree G1 人形机器人 |
| 控制频率 | 实时（<5 ms 推理延迟） |

## 方法论

### 通用控制策略架构

```
运动生成器 →  专用编码器  →  量化器  →  通用 Token  →  解码器  →  电机指令
                │
     ┌──────────┼──────────┐
机器人编码器  混合编码器  人类编码器
```

### 三种运动命令类型

| 类型 | 编码器 | 用途 |
|------|--------|------|
| Robot Motion | 机器人编码器 | 交互式手柄控制、运动规划追踪 |
| Human Motion | 人类编码器 | 视频遥操作、文本/音乐控制 |
| Hybrid Motion | 混合编码器 | VR 3-point 遥操作、VLA 集成 |

### 关键技术

1. **通用 Token 空间**：通过 FSQ 向量量化器将不同实体映射到共享潜在空间
2. **生成式运动规划器**：自回归 masked token 预测，<5 ms 推理，支持 0.8-2.4s 运动段
3. **缩放训练**：bin-based 自适应运动采样 + PPO + distributed training

## 关键结果

### 缩放趋势

在 0.4M → 100M 帧、1.2M → 42M 参数、0.5K → 9K GPU hours 三个维度上均观察到**一致性能提升**。

### 与 SOTA 对比

| 指标 | SONIC | GMT | BeyondMimic | Any2Track |
|------|-------|-----|-------------|-----------|
| 成功率 | **99.6%** | 94.3% | 84.2% | 58.3% |
| MPJPE (mm) | **40.9** | 42.7 | 65.0 | 57.4 |

### 真机部署

在 Unitree G1 上 **50 条未见轨迹 100% 成功率**（零样本）。

### VLA 集成

GR00T N1.5 VLA 模型在 300 条 VR 遥操作轨迹上微调后，通过 SONIC 执行达到 **95% 任务成功率**（apple-to-plate 移动操作）。

## 与已有知识的关联

- [[wiki/entities/egoscale-dataset|EgoScale]] 提供了 SONIC 所需的大规模人类运动数据来源
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — SONIC 的通用 token 空间是一种新的跨实体迁移方法
- [[wiki/concepts/scaling-law-for-embodied-ai|Scaling Law for Embodied AI]] — 验证了运动追踪的缩放属性

## 矛盾与局限

- 运动追踪依赖高质量动捕数据，扩展性不如 HumanNet 的网络视频方案
- 安全性、合规性、能效长期部署尚未正式处理
- 噪声输入（如视频姿态估计错误）时的鲁棒性需要改进
- 与 VLA 集成仅展示了概念验证，尚未扩展到丰富的任务分布

## 外部链接

- 项目页面: https://nvlabs.github.io/SONIC/
