## 📊 文献表格 - EgoScale: Scaling Dexterous Manipulation with Diverse Egocen

维度

内容

论文标题

EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data

作者

Ruijie Zheng, Dantong Niu, Yuqi Xie, Jing Wang, Mengda Xu, Yunfan Jiang, Fernando Castañeda, Fengyuan Hu, You Liang Tan, Letian Fu, Trevor Darrell, Furong Huang, Yuke Zhu, Danfei Xu, Linxi Fan（NVIDIA、加州大学伯克利分校、马里兰大学）

发表年份

2026

研究问题

人类数据能否有效支持高自由度灵巧机器人操作？大规模人类数据是否遵循可预测的缩放规律？

研究方法

构建三阶段训练流程：1）在20,854小时第一人称人类视频上预训练VLA模型；2）在少量对齐的人-机器人交互数据上进行中间训练；3）在目标任务上进行后训练。利用流匹配架构和重定向的高自由度手部关节动作空间。

主要发现

1）人类动作预测损失与数据量呈对数线性缩放规律（R²=0.9983），且与下游机器人性能强相关；2）大规模人类预训练后仅需少量对齐中间训练即可实现一次性任务泛化；3）人类预训练策略可跨不同自由度的手部机器人有效迁移。

创新点

1）首次在20k+小时人类视频上发现灵巧操作的清晰缩放定律；2）提出“大规模人类预训练+少量对齐人类-机器人中间训练”的两阶段迁移方案；3）实现一次性任务适应和跨本体的动作先验迁移。

局限性

未观测到当前规模下的性能饱和，但进一步同时扩展人类数据与模型容量可能带来更多提升；弱监督或未标注视频的利用方式未被探索。

与本研究的关联

未提及

  

_👇 以下为系统缓存的原始 Markdown 数据（用于追加填表，请勿修改）：_

| 维度 | 内容 |
|------|------|
| 论文标题 | EgoScale: Scaling Dexterous Manipulation with Diverse Egocentric Human Data |
| 作者 | Ruijie Zheng, Dantong Niu, Yuqi Xie, Jing Wang, Mengda Xu, Yunfan Jiang, Fernando Castañeda, Fengyuan Hu, You Liang Tan, Letian Fu, Trevor Darrell, Furong Huang, Yuke Zhu, Danfei Xu, Linxi Fan（NVIDIA、加州大学伯克利分校、马里兰大学） |
| 发表年份 | 2026 |
| 研究问题 | 人类数据能否有效支持高自由度灵巧机器人操作？大规模人类数据是否遵循可预测的缩放规律？ |
| 研究方法 | 构建三阶段训练流程：1）在20,854小时第一人称人类视频上预训练VLA模型；2）在少量对齐的人-机器人交互数据上进行中间训练；3）在目标任务上进行后训练。利用流匹配架构和重定向的高自由度手部关节动作空间。 |
| 主要发现 | 1）人类动作预测损失与数据量呈对数线性缩放规律（R²=0.9983），且与下游机器人性能强相关；2）大规模人类预训练后仅需少量对齐中间训练即可实现一次性任务泛化；3）人类预训练策略可跨不同自由度的手部机器人有效迁移。 |
| 创新点 | 1）首次在20k+小时人类视频上发现灵巧操作的清晰缩放定律；2）提出“大规模人类预训练+少量对齐人类-机器人中间训练”的两阶段迁移方案；3）实现一次性任务适应和跨本体的动作先验迁移。 |
| 局限性 | 未观测到当前规模下的性能饱和，但进一步同时扩展人类数据与模型容量可能带来更多提升；弱监督或未标注视频的利用方式未被探索。 |
| 与本研究的关联 | 未提及 |
