---
title: "SONIC: Supersizing Motion Tracking for Natural Humanoid Whole-Body Control"
zotero_key: IBKAELC4
authors:
  - "Zhengyi Luo"
  - "Ye Yuan"
  - "Tingwu Wang"
  - "Linxi 'Jim' Fan"
  - "Yuke Zhu"
url: "https://arxiv.org/abs/2511.07820"
year: 2025
tags:
  - humanoid
  - motion-tracking
  - whole-body
  - vla
  - token-space
source: "[[raw/papers/Luo et al. - 2025 - SONIC Supersizing Motion Tracking for Natural Humanoid Whole-Body Control.pdf]]"
wiki: "[[wiki/sources/sonic]]"
---

## Abstract

SONIC trains a humanoid whole-body control foundation model with universal token space, enabling cross-embodiment transfer across VR, video, text, music, and VLA modalities.

## Key Contributions

- 1.2M → 42M parameter scaling, 99.6% tracking success
- Universal token space for 5 modalities
- 3 encoders → FSQ quantizer → universal token → 2 decoders architecture
- VLA integration at 95% success

## Related Wiki Pages

- [[wiki/sources/sonic]] — Full source summary
- [[wiki/entities/sonic-framework]] — Framework entity
- [[wiki/concepts/human-to-robot-transfer]] — Universal token space method
- [[wiki/concepts/scaling-law-for-embodied-ai]] — Scaling trends
