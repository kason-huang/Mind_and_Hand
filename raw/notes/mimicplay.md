---
title: "MimicPlay: Long-Horizon Imitation Learning by Watching Human Play"
zotero_key: B6BNGBEB
authors:
  - "Chen Wang"
  - "Linxi Fan"
  - "Jiankai Sun"
  - "Ruohan Zhang"
  - "Li Fei-Fei"
  - "Danfei Xu"
  - "Yuke Zhu"
  - "Anima Anandkumar"
url: "https://arxiv.org/abs/2302.12422"
year: 2023
tags:
  - imitation-learning
  - hierarchical
  - human-play-data
  - long-horizon
  - manipulation
  - corl
  - stanford
  - nvidia
source: "[[raw/papers/Wang 等 - 2023 - MimicPlay Long-Horizon Imitation Learning by Watching Human Play.pdf]]"
wiki: "[[wiki/sources/mimicplay]]"
---

## Abstract

MimicPlay introduces a hierarchical imitation learning framework: high-level planner from cheap human play data (10 min) + low-level controller from small robot demos (20/task). 14 long-horizon tasks, 83% success (vs baselines 37%).

## Key Contributions

- 3D-aware latent plans from human play data (GMM for multimodality)
- KL divergence loss for human-robot visual domain adaptation
- Video prompting: human videos as robot task specification
- Real-time re-planning at 17Hz
- 10 min human data ≈ 3 hours robot teleoperation

## Related Wiki Pages

- [[wiki/sources/mimicplay]] — Full source summary
- [[wiki/concepts/human-to-robot-transfer]] — Hierarchical planning method
- [[wiki/concepts/human-centric-video-learning]] — Human play data paradigm
