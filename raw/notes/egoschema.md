---
title: "EgoSchema: A Diagnostic Benchmark for Very Long-form Video Language Understanding"
zotero_key: AHZG36ZJ
authors:
  - "Karttikeya Mangalam"
  - "Raiymbek Akshkulakov"
  - "Jitendra Malik"
url: "https://arxiv.org/abs/2308.09126"
year: 2023
tags:
  - benchmark
  - long-video
  - egocentric
  - video-qa
  - temporal-reasoning
  - ego4d
source: "[[raw/papers/Mangalam 等 - 2023 - EgoSchema A Diagnostic Benchmark for Very Long-form Video Language Understanding.pdf]]"
wiki: "[[wiki/sources/egoschema]]"
---

## Abstract

EgoSchema introduces a diagnostic benchmark for very long-form video-language understanding. 5,063 QA pairs over 250+ hours of egocentric video. Introduces temporal certificate sets as a metric.

## Key Contributions

- Temporal certificate concept (median ~100s, 5.7x longer than next dataset)
- Models < 33% vs humans 76% — massive gap
- 4-stage data pipeline: filtering → LLM generation → filtering → human curation
- Zero-shot evaluation of FrozenBiLM, VIOLET, mPLUG-Owl, InternVideo

## Related Wiki Pages

- [[wiki/sources/egoschema]] — Full source summary
- [[wiki/entities/egoschema-benchmark]] — Benchmark entity
- [[wiki/concepts/temporal-certificate]] — Core concept
