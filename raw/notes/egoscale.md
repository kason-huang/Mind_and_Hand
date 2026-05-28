---
title: "EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data"
zotero_key: QQHC832W
authors:
  - "Ruijie Zheng"
  - "Dantong Niu"
  - "Yuqi Xie"
  - "Danfei Xu"
  - "Linxi Fan"
url: "https://arxiv.org/abs/2602.16710"
year: 2026
tags:
  - scaling-law
  - dexterous
  - egocentric
  - vla
  - manipulation
  - nvidia
source: "[[raw/papers/Zheng 等 - 2026 - EgoScale Scaling Dexterous Manipulation with Diverse Egocentric Human Data.pdf]]"
wiki: "[[wiki/sources/egoscale]]"
---

## Abstract

EgoScale proposes a scaling law for dexterous manipulation from egocentric human data: L = 0.024 - 0.003ln(D), R² = 0.9983. 20K hours of data, 194 tasks, two-stage training recipe.

## Key Contributions

- Log-linear scaling law for human-to-robot transfer
- Two-stage recipe: Stage I human pretraining + Stage II robot alignment
- One-shot transfer: 88% shirt folding, 55% unscrewing
- 256 GPU training, DiT-based action expert

## Related Wiki Pages

- [[wiki/sources/egoscale]] — Full source summary
- [[wiki/entities/egoscale-dataset]] — Dataset entity
- [[wiki/concepts/scaling-law-for-embodied-ai]] — Core scaling law
- [[wiki/concepts/human-to-robot-transfer]] — Two-stage transfer method
