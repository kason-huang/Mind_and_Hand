---
title: "Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos"
type: source
tags:
  - vla
  - dexterous
  - hand-motion
  - pretraining
  - human-video
  - physical-instruction-tuning
created: 2026-05-27
updated: 2026-05-27
source_count: 1
sources:
  - "[[raw/papers/Luo 等 - 2025 - Being-H0 Vision-Language-Action Pretraining from Large-Scale Human Videos.pdf]]"
---

## 核心论点

Being-H0 提出将**人手作为"基础操作器"（foundation manipulator）**，通过大规模人类视频预训练灵巧 VLA 模型。核心创新是 **Physical Instruction Tuning（物理指令微调）**，将 LMM 领域的视觉指令微调扩展到物理动作领域。

## 关键信息

- **作者**: Hao Luo, Ye Wang 等（北京大学、中国人民大学、BeingBeyond）
- **发布时间**: 2025年7月（arXiv:2507.15597）
- **架构**: InternVL3 (1B/8B/14B) + 手部运动 tokenizer
- **数据集**: UniHand（150M+ 样本，11 个来源，1,100+ 小时）
- **训练**: 32 NVIDIA A800-80G GPUs

## 核心贡献

### 1. Physical Instruction Tuning（物理指令微调）

三阶段范式：

| 阶段 | 内容 | 作用 |
|------|------|------|
| **预训练** | 在大规模人类视频上预测手部运动 | 建立视觉-语言-动作基础能力 |
| **物理空间对齐** | 统一多源数据的坐标系 + 弱透视投影对齐 | 赋予 3D 空间推理能力 |
| **后训练** | MLP 投影适配到具体机器人 | 将人手运动迁移到机械手 |

### 2. Part-Level Motion Tokenization（部位级运动令牌化）

基于 **GRQ-VAE**（分组残差量化）的专用 tokenizer：
- 将手腕和手指**分开建模**（各用独立的 codebook）
- 毫米级重建精度
- 128 tokens/秒/手
- 使用 MANO-D162（关节角度 + 6D 旋转 + 手腕平移）作为运动特征

### 3. UniHand 数据集

| 维度 | 数值 |
|------|------|
| 总样本数 | 165M+ 指令样本 |
| 轨迹数 | 444K |
| 帧数 | 130M+ |
| 时长 | 1,155+ 小时 |
| 数据来源 | 11 个（动捕/VR/伪标注） |

主要来源：
- **动捕**: ARCTIC, FPHA, H2O, HOI4D, HOT3D, OAKINK2, TACO, DexYCB
- **VR 录制**: EgoDex（最大单一来源，338K 轨迹）
- **伪标注**: Taste-Rob, HoloAssist

训练子集 UniHand-2.5M 按任务类型和数据源均衡采样。

### 4. 模型架构

- **视觉编码器**: InternViT-300M（动态高分辨率策略）
- **LLM 骨干**: InternLM3 / Qwen2.5（1B/8B/14B）
- **运动令牌化**: GRQ-VAE，分层残差量化，部位级 codebook
- **统一自回归架构**: 视觉、语言、运动共享注意力机制
- **后训练**: 非自回归 MLP 投影 + learnable query tokens

## 主要结果

### 手部运动生成（14B 模型）

| 指标 | Head Split | Tail Split |
|------|:---------:|:----------:|
| MPJPE | **6.87 cm** | **8.11 cm** |
| MWTE | **5.19 cm** | **7.41 cm** |
| 有效生成率 | **100%** | — |

### 真实机器人灵巧操作

| 任务 | 成功率 |
|------|:-----:|
| Pour-Cup（倒水） | **100%** |
| Close-Toolbox（关工具箱） | **85%** |
| Close-Lid（盖盖子） | **60%** |
| Pick-Place（抓取放置） | 50-60% |

## 与已有知识的关联

- [[wiki/sources/egodex|EgoDex]] — UniHand 的最大数据来源（338K 轨迹）
- [[wiki/sources/egoscale|EgoScale]] — 同为 VLA 模型，但 Being-H0 专注灵巧操作
- [[wiki/concepts/human-to-robot-transfer|Human-to-Robot Transfer]] — 显式手部运动建模 vs 隐式学习的关键对比
- [[wiki/concepts/human-centric-video-learning|Human-Centric Video Learning]] — 大规模人类视频预训练的又一例证

## 外部链接

- 项目主页: https://beingbeyond.github.io/Being-H0
