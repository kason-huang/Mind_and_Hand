---
title: "Being-H0: Vision-Language-Action Pretraining from Large-Scale Human Videos"
zotero_key: ETW3AHCT
authors:
  - "Hao Luo"
  - "Yicheng Feng"
  - "Wanpeng Zhang"
  - "Sipeng Zheng"
  - "Ye Wang"
  - "Zongqing Lu"
url: "https://arxiv.org/abs/2507.15597"
year: 2025
tags:
  - vla
  - dexterous
  - hand-motion
  - pretraining
  - human-video
  - physical-instruction-tuning
  - beingbeyond
source: "[[raw/papers/Luo 等 - 2025 - Being-H0 Vision-Language-Action Pretraining from Large-Scale Human Videos.pdf]]"
wiki: "[[wiki/sources/being-h0]]"
---

## Abstract

Being-H0: first dexterous VLA pretrained from large-scale human videos via Physical Instruction Tuning. UniHand dataset (165M+ samples, 11 sources). Part-level motion tokenization with millimeter precision.

## Key Contributions

- Physical Instruction Tuning: pretrain → align → post-train paradigm
- Part-level motion tokenization (GRQ-VAE, mm-level accuracy)
- UniHand dataset: 165M samples, 1,155 hours, 11 sources
- Real robot: 100% Pour-Cup, 85% Close-Toolbox
- InternVL3 backbone (1B/8B/14B), outperforms GR00T N1.5

## Related Wiki Pages

- [[wiki/sources/being-h0]] — Full source summary
- [[wiki/entities/being-h0-framework]] — Framework entity
- [[wiki/concepts/human-to-robot-transfer]] — Explicit motion modeling
- [[wiki/entities/egodex-dataset]] — UniHand data source (EgoDex)
