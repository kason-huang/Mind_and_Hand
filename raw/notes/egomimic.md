---
title: "EgoMimic: Scaling Imitation Learning via Egocentric Video"
zotero_key: L6SD6TEH
authors:
  - "Simar Kareer"
  - "Dhruv Patel"
  - "Ryan Punamiya"
  - "Pranay Mathur"
  - "Shuo Cheng"
  - "Chen Wang"
  - "Judy Hoffman"
  - "Danfei Xu"
url: "https://arxiv.org/abs/2410.24221"
year: 2024
tags:
  - imitation-learning
  - egocentric
  - act
  - cross-embodiment
  - bimanual
  - project-aria
  - georgia-tech
  - stanford
source: "[[raw/papers/Kareer 等 - EgoMimic Scaling Imitation Learning via Egocentric Video.pdf]]"
wiki: "[[wiki/sources/egomimic]]"
---

## Abstract

EgoMimic presents a full-stack framework for scaling manipulation via human embodiment data. Uses Project Aria glasses for egocentric video + 3D hand tracking, a low-cost bimanual manipulator, cross-domain alignment (Gaussian normalization, SAM masking), and a unified ACT-based policy co-trained on human and robot data. 34-228% improvement over ACT, generalization to unseen scenes.

## Key Contributions

- Full-stack system: human data capture (Aria) → alignment → unified policy
- Cross-domain alignment: action normalization (+38%), SAM visual masking (+13-26%)
- Unified ACT co-training: shared encoder, pose + joint prediction heads
- Treats human data as first-class embodiment data (not just for planning)
- Scaling: 1h hand data (1400 demos) >> 1h robot data (135 demos)
- Generalization: 85% SR on unseen colors vs ACT 25%; 63 pts on unseen scenes vs MimicPlay 4 pts

## Related Wiki Pages

- [[wiki/sources/egomimic]] — Full source summary
- [[wiki/entities/egomimic-framework]] — Framework entity
- [[wiki/concepts/human-to-robot-transfer]] — Unified co-training method
- [[wiki/concepts/human-centric-video-learning]] — Human data paradigm
