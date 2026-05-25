---
zotero-key: 6WPMEBTH
zt-attachments:
  - "4535"
title: "Robot Learning: A Tutorial"
---
# Robot Learning: A Tutorial

[Zotero](zotero://select/library/items/6WPMEBTH) [attachment](<file:///C:/Users/Administrator/Zotero/storage/KDYFKIDP/Capuano%20%E7%AD%89%20-%202025%20-%20Robot%20Learning%20A%20Tutorial.pdf>)

> [!note] Page 1
> 
> and our goal is to equip the reader with the conceptual understanding and practical tools necessary to contribute to developments in robot learning, with ready-to-use examples implemented in lerobot
> ^LHKQUBH4aKDYFKIDPp1

> [!note] Page 2
> 
> too valuable to be cast aside in favor of purely learning-based methods.
> ^LRUV69R9aKDYFKIDPp2

> [!note] Page 3
> 
> leveraging large amounts of data and computation rather than human expertise and modeling skills to develop autonomous systems
> ^M5LP4W8AaKDYFKIDPp3

> [!note] Page 3
> 
> (1) monolithic perception-to-action control pipelines and (2) multi-modal data-driven feature extraction strategies, together with (3) reduced reliance on precise models of the world and (4) a better positioning to benefit from the growing availability of open robotics data.
> ^WBCTF93XaKDYFKIDPp3

> [!note] Page 3
> 
> With a strong focus on accessible, real-world robots (1) lerobot supports many, openly available, robotic platforms for manipulation, locomotion and even whole-body control. lerobotalso implements a (2) unified, low-level approach to reading/writing robot configurations to extend support for other robot platforms with relatively low effort. The library introduces LeRobotDataset, (3) a native robotics dataset’s format currently being used by the community to efficiently record and share datasets. lerobot also supports many state-of-the-art (SOTA) algorithms in robot learning—mainly based on Reinforcement Learning (RL) and Behavioral Cloning (BC) techniques—with efficient implementations in Pytorch, and extended support to experimentation and experiments tracking.
> ^5AN9BUAEaKDYFKIDPp3

> [!note] Page 4
> 
> including sensorimotor readings, multiple camera feeds and teleoperation status
> ^AZ3D8ESPaKDYFKIDPp4

> [!note] Page 4
> 
> handling multi-modal, time-series data, and it is designed to seamlessly integrate with the PyTorch and Hugging Face ecosystems.
> ^625QSIJ7aKDYFKIDPp4

> [!note] Page 4
> 
> Tabular Data: Low-dimensional, high-frequency data such as joint states,
> ^M4PJINFVaKDYFKIDPp4

> [!note] Page 4
> 
> we merge data from different episodes into the same high-level structure. Concretely, this means that any given tabular collection and video will not typically contain information about one episode only, but rather a concatenation of the information available in multiple episodes. This keeps the pressure on the file system limited, both locally and on remote storage providers like Hugging Face,
> ^XAXFRBCMaKDYFKIDPp4

> [!note] Page 5
> 
> features (e.g., observation.state, action), their shapes, and data types.
> ^5ZYKK66ZaKDYFKIDPp5

> [!note] Page 5
> 
> for each feature
> ^V3RASJT9aKDYFKIDPp5

> [!note] Page 5
> 
> data normalization for most policy models and accessible externally via dataset.meta.stats.
> ^K9XEDI4SaKDYFKIDPp5

> [!note] Page 9
> 
> (1) generalize across tasks and embodiments (2) reduce dependency on human expertise (3) leverage historical trends on the production of data
> ^RJHVTBPEaKDYFKIDPp9

> [!note] Page 9
> 
> traditional explicit models—dynamics-based1 methods, leveraging precise descriptions of the mechanics of robots’ rigid bodies and their interactions with eventual obstacles in the environment—to implicit models—learning-based methods, treating artificial motion as a statistical pattern to learn given multiple sensorimotor readings
> ^MKNYTTFSaKDYFKIDPp9

> [!note] Page 10
> 
> the generated motion modifies (1) the absolute state of the environment (via dexterity), (2) the relative state of the robot with respect to its environment (exercising mobility skills), or (3) a combination of the two
> ^S2SBMCJAaKDYFKIDPp10

> [!note] Page 10
> 
> planning-based
> ^Z53TPIZMaKDYFKIDPp10

> [!note] Page 10
> 
> Robot manipulators typically consist of a series of links and joints, articulated in a chain finally connected to an end-effector
> ^5HCH8H89aKDYFKIDPp10

> [!note] Page 11
> 
> The SO-100 arm is a 6-dof manipulator arm
> ^33YLKJBXaKDYFKIDPp11

> [!note] Page 11
> 
> Deriving an intuition as per why learning-based approaches are gaining popularity in the robotics community requires briefly analyzing traditional approaches for manipulation, leveraging tools like forward and inverse kinematics (FK, IK) and control theory.
> ^6DYPJBTRaKDYFKIDPp11

> [!note] Page 11
> 
> This effectively reduces the degrees of freedom of the SO-100 from the original 5+1 (5 joints + 1 gripper) to 2+1 (shoulder lift, elbow flex + gripper).
> ^6CX93JZ2aKDYFKIDPp11

> [!note] Page 12
> 
> Deriving the end-effector’s pose—position and orientation—in some m-dimensional space p ∈ P ⊂ Rm starting from the configuration q ∈ Q ⊂ Rn of a n-joints robot is referred to as forward kinematics (FK), whereas identifying the configuration corresponding to any given target pose is termed inverse kinematics (IK).
> ^TVMP29DWaKDYFKIDPp12

> [!note] Page 12
> 
> n that, FK is used to map a robot configuration into the corresponding end-effector pose, whereas IK is used to reconstruct the configuration(s) given an end-effector pose.
> ^4WH68GM3aKDYFKIDPp12

> [!note] Page 13
> 
> Following trajectories with diff-IK is a valid option in well-controlled and static environments (e.g., industrial manipulators in controlled manufacturing settings), and relies on the ability to define a set of target velocities to track [p ̇0∗, p ̇1∗, . . . , p ̇∗  k]—an error-prone task largely requiring human expertise. Furthermore, diff-IK relies on the ability to (1) access J(q) ∀q ∈ Q and (2) compute its pseudo-inverse at every iteration of a given control cycle—a challenging assumption in highly dynamical settings, or for complex kinematic chains.
> 
> ---
> 1. 正运动学（FK）是 “关节角度→末端位置” 的正算
> 2. 逆运动学（IK）是 “目标位置→关节角度” 的反算，但只能解决终点问题，轨迹追踪成本高
> 3. 微分逆运动学（Diff-IK）通过雅可比矩阵，把问题从 “求角度” 变成 “求速度”，用闭式解实现了高效的实时轨迹追踪，但也有环境依赖和计算前提的局限。
> ^QL4S57ILaKDYFKIDPp13

> [!note] Page 13
> 
> 2.3.1 Adding Feedback Loops
> ^CT7G6YG7aKDYFKIDPp13

> [!note] Page 13
> 
> 
> 
> ---
> 精确计算的不现实性->基于反馈的持续迭代
> ^BDBKVRFMaKDYFKIDPp13

> [!note] Page 13
> 
> in the presence of modeling/tracking errors, or in the presence of non-modeled dynamics
> ^U64TATY8aKDYFKIDPp13

> [!note] Page 13
> 
> challenging to model analytically
> ^IUJU993MaKDYFKIDPp13

> [!note] Page 13
> 
> linearization, PID control, Linear Quatratic Regulator (LQR) or Model-Predictive Control (MPC)
> ^9WPYL2ETaKDYFKIDPp13

> [!note] Page 13
> 
> Nonetheless, feedback control presents its challenges as well: tuning gains remains laborious and system-specific. Further, manipulation tasks present intermittent contacts inducing hybrid dynamics (mode switches) and discontinuities in the Jacobian
> 
> ---
> 你选中的这一段，讲了三件事：
> <b>diff-IK 很脆</b>
> 模型不准、环境扰动、跟踪误差 → 立刻崩。
> <b>所以要加反馈环</b>
> 实时测误差 → 实时修正动作
> 公式：
> 𝑞̇ = 𝐽⁺(𝑝̇∗ + 𝑘𝑝 Δ𝑝)
> <b>但反馈也很难</b>
> 调参累死碰到物体动力学突变只能保守、缓慢、笨笨地动
> 传统机器人靠模型 + 反馈，难建模、难调参、难适应变化；
> 这就是为什么现在要做学习型机器人（RL / 模仿学习）。
> ^3BXCHEEAaKDYFKIDPp13

> [!note] Page 13
> 
> 
> 
> ---
> 传统机器人靠模型 + 反馈，难建模、难调参、难适应变化；这就是为什么现在要做学习型机器人（RL / 模仿学习）。
> ^QKRW72N4aKDYFKIDPp13

> [!note] Page 14
> 
> 
> 
> ---
> Intergration Challenges 核心问题：
> 模块割裂：每个环节都是独立开发的（比如感知是 CV 团队做，控制是控制团队做），接口不统一，误差会逐级放大。
> 系统脆弱：只要某一环出问题（比如感知识别错了物体），后面的规划和控制就会全部失效。
> 调试成本极高：模块间的耦合问题很难定位，牵一发而动全身，很难整体优化。
> ^8CFULXIMaKDYFKIDPp14

> [!note] Page 14
> 
> 
> 
> ---
> Undermodeling issues核心问题：
> 传统控制依赖精确的解析动力学模型，但现实世界的很多物理效应（比如摩擦、接触、柔性形变）根本没法精准建模：
> 摩擦力模型本身就需要大量参数（静摩擦、动摩擦、粘滞摩擦等）
> 不同材质、不同表面的摩擦特性差异巨大，很难通用
> 一旦模型不准，控制器的性能就会大幅下降，甚至完全失效。
> ^8IDTGRZSaKDYFKIDPp14

> [!note] Page 14
> 
> 
> 
> ---
> 核心问题：
> 传统机器人方法根本没法利用这些大规模数据：
> 解析模型和控制器是基于单任务、单机器人设计的，无法从跨任务、跨场景的海量数据中学习通用规律
> 模型的性能上限由 “专家调参” 决定，而不是由数据规模决定，无法享受大数据带来的红利
> ^VLDZGAXGaKDYFKIDPp14

> [!note] Page 14
> 
> 
> 
> ---
> Multimodality challenges 核心问题：
> 1. 传统方法需要为每种模态单独设计手工特征 / 处理流程：
> 陀螺仪数据要做滤波、姿态解算
> 深度图要做去噪、点云处理
> RGB 图像要做目标检测、语义分割
> 这些处理逻辑很难统一，而且需要大量人工调参，无法端到端地利用多模态信息。
> ^KGQSSCGAaKDYFKIDPp14

> [!note] Page 14
> 
> Pipelining these specific modules proved error-prone, and brittleness emerges—alongside compounding errors—whenever changes incur (e.g., changes in lighting for sensing, occlusion/failure of sensors, control failures). Adapting such a stack to new tasks or robotic platforms often entails re-specifying objectives, constraints, and heuristics at multiple stages, incurring significant engineering overhead
> ^PDE6J5CZaKDYFKIDPp14

> [!note] Page 14
> 
> with little opportunity to reuse solutions across tasks
> ^AEMUE29PaKDYFKIDPp14

> [!note] Page 15
> 
> Taken together, these limitations (Figure 8) motivate the exploration of learning-based approaches that can (1) integrate perception and control more tightly, (2) adapt across tasks and embodiments with reduced expert modeling interventions and (3) scale gracefully in performance as more robotics data becomes available
> ^L8SXC7YBaKDYFKIDPp15

> [!note] Page 16
> 
> multiple components
> ^9BYD6NCAaKDYFKIDPp16

> [!note] Page 17
> 
> Still, two major classes of methods gained prominence: Reinforcement Learning (RL) and Behavioral Cloning (BC) (Figure 10).
> ^WK3X58NEaKDYFKIDPp17

> [!note] Page 17
> 
> oundation models are still largely trained to reproduce trajectories contained in a (large) training set of input demonstrations
> ^NCARKISTaKDYFKIDPp17

> [!note] Page 17
> 
> currently available in lerobot
> ^3XS32XJYaKDYFKIDPp17

> [!note] Page 17
> 
> a scalar quantity (reward )
> ^STLVERZYaKDYFKIDPp17

> [!note] Page 18
> 
> Representing robotics problems via MDPs offers several advantages
> ^CUHCVTMMaKDYFKIDPp18

> [!note] Page 18
> 
> including (1) incorporating uncertainty through MDP’s inherently stochastic formulation and (2) providing a theoretically-sound framework for learning without an explicit model of the environment dynamics
> ^DPAFU5K6aKDYFKIDPp18

> [!note] Page 18
> 
> Lastly, γ ∈ [0, 1) represent the discount factor regulating preference for immediate versus long-term reward (with an effective horizon equal to 1  1−γ )
> ^6X53QP5FaKDYFKIDPp18

> [!note] Page 18
> 
> 
> 
> ---
> 因为折扣回报是首项为 1、公比γ的无穷等比数列，求和结果就是 1−γ1​
> ^PX8F42NNaKDYFKIDPp18

> [!note] Page 18
> 
> olicies P(at|st) are typically indicated as π(at|st), often parametrized via θ, yielding πθ(at|st), and are traine by optimizing the (discounted) return associated to a given τ , i.e. the (random) sum of measured rewards over an arbitrary trajectory,
> ^SSPVBBMGaKDYFKIDPp18

> [!note] Page 19
> 
> In that, agents seek to learn control strategies (policies, πθ) maximizing the expected return Eτ∼πθ G(τ ).
> ^WWZSNXSQaKDYFKIDPp19

> [!note] Page 19
> 
> 
> 
> ---
> 策略 πθ​ 的好坏，等于它在环境里所有可能轨迹的平均总奖励。
> ^8C8C93JXaKDYFKIDPp19

> [!note] Page 19
> 
> 
> 
> ---
> 一条轨迹发生的概率 = 初始状态概率 × 每一步 “按策略选动作” 的概率 × 每一步 “环境按动力学转移” 的概率，全部乘起来。
> ^GNBM8JMNaKDYFKIDPp19

> [!note] Page 19
> 
> 
> 
> ---
> P：当机器人用策略 πθ​ 在环境 D 里行动时，走完这条完整轨迹的可能性
> ^MC7BUPFVaKDYFKIDPp19

> [!note] Page 19
> 
> π∗ = arg maxθ J(πθ)
> ^PHFHAKTLaKDYFKIDPp19

> [!note] Page 19
> 
> Qπ(st, at) = Est+1∼P(•|st,at)[rt + γVπ(st+1)] (9)  Vπ(st) = Eat∼π(•|st)[Qπ(st, at)],
> ^IXWJVLRSaKDYFKIDPp19

> [!note] Page 20
> 
> RL proved extremely effective in providing a platform to (1) leverage a unified, streamlined perception-to-action pipeline, (2) natively integrate propioperception with multi-modal high-dimensional sensory streams (3) disregard a description of the environment dynamics, by focusing on observed interaction data rather than modeling, and (4) anchor policies in the experience collected and stored in datasets.
> ^5GWZD2FUaKDYFKIDPp20

> [!note] Page 20
> 
> data-driven feature extraction and a disregard for explicit
> ^WNRMU2S8aKDYFKIDPp20

> [!note] Page 20
> 
> safety and learning efficiency
> ^9E7J4RA4aKDYFKIDPp20

> [!note] Page 20
> 
> due the discrepancy between real and simulated environments (reality gap, Figure 14)
> ^RIWQYYPVaKDYFKIDPp20

> [!note] Page 20
> 
> Domain randomization (Tobin et al., 2017) (DR) is a popular technique to overcome the reality gap, and consists in randomizing the parameters of the simulated environment during training, aiming at inducing robustness to specific disturbances.
> ^H9Q6GJHHaKDYFKIDPp20

> [!note] Page 20
> ^922Q7H6HaKDYFKIDPp20

> [!note] Page 20
> 
> In this, DR is typically employed to increase the diversity of scenarios over the course of training, improving on the performace sim-to-real transferred policies
> ^GZLMDFZ9aKDYFKIDPp20

> [!note] Page 20
> 
> While effective in transfering policies across the reality gap in real-world robotics (Tobin et al., 2017; Akkaya et al., 2019; Ji et al., 2023; Tiboni et al., 2024), DR often requires extensive manual engineering.
> ^92T5J76EaKDYFKIDPp20

> [!note] Page 20
> 
> 
> 
> ---
> 所以说sim2real的gap本质是一个泛化的问题，如果你在sim里面可以大规模泛化，其实大概率是可以解决sim2real的
> ^ZFLMCM2YaKDYFKIDPp20

> [!note] Page 21
> 
> 
> 
> ---
> 随机化太少（低熵）：模型只适应仿真 → 真实世界迁移失败
> 随机化太多/过度正则化：模型学不到规律 → 效果变差；→ 必须找到中间平衡点！
> ^JVWMMPZKaKDYFKIDPp21

> [!note] Page 21
> ^PIVZZXIVaKDYFKIDPp21

> [!note] Page 21
> 
> On the one hand, distributions with low entropy might risk to cause failure at transfer time, due to the limited robustness induced over the course of training. On the other hand, excessive randomization may cause over-regularization and hinder performance
> ^3RRFFKNAaKDYFKIDPp21

> [!note] Page 21
> 
> automatically select the randomization distribution
> ^FCZ9FU68aKDYFKIDPp21

> [!note] Page 21
> 
> complicated tasks’ dense reward function
> ^RVSRQWYBaKDYFKIDPp21

> [!note] Page 21
> 
> To make the most of (1) the growing number of openly available datasets and (2) relatively inexpensive robots like the SO-100, RL could (1) be anchored in already-collected trajectories—limiting erratic and dangerous exploration—and (2) train in the real-world directly—bypassing the aforementioned issues with low-fidelity simulations. In such a context, sample-efficient learning is also paramount, as training on the real-world is inherently time-bottlenecked
> ^YH4K4ISZaKDYFKIDPp21

> [!note] Page 21
> 
> a replay buffer used over the course of training
> ^LR324RI7aKDYFKIDPp21

> [!note] Page 21
> 
> 
> 
> ---
> 利用公开数据与低成本硬件，让强化学习基于演示、在现实世界安全高效地训练，不再依赖不准确的仿真。
> ^PUFI2629aKDYFKIDPp21

> [!note] Page 22
> 
> DQN parametrizes the Q-function using a neural network with parameters θ, updating the parameters by sequentially minimizing the expected squared temporal-difference error (TD-error, δi):
> ^7PYTYIKNaKDYFKIDPp22

> [!note] Page 22
> 
> 
> 
> ---
> 公式 1（Loss）：
> 让神经网络的预测 Q 值，逼近标准答案 yi​预测越准，Loss 越小。
> 公式 2（yi​）：
> 标准答案 = 现在奖励 + 未来能拿到的最大奖励
> ^TJY8KK5VaKDYFKIDPp22

> [!note] Page 22
> 
> TD-error δi and loss function eq. 11 via Monte-Carlo (MC) estimates
> ^5KV4854SaKDYFKIDPp22

> [!note] Page 22
> 
> continous control problems
> ^Q5DLAVMDaKDYFKIDPp22

> [!note] Page 22
> 
> by using a deterministic function of the state st as policy, μφ(st) = at,
> ^TAAMI2DYaKDYFKIDPp22

> [!note] Page 23
> 
> 
> 
> ---
> 熵（Entropy）logπ(a∣s)：动作被选到的概率对数
> 前面加负号：概率越低，值越大
> α：熵的权重
> 
> 未来总收益 = 当前奖励 + 未来最优收益 - 动作的 “死板惩罚”
> ^SBS33T5KaKDYFKIDPp23

> [!note] Page 23
> 
> 
> 
> ---
> 用 “大量随机采样” 来近似算数学期望、积分、平均值，就叫蒙特卡洛估计
> ^SQBXDJKAaKDYFKIDPp23

> [!note] Page 23
> ^8MGE4ZPMaKDYFKIDPp23

> [!note] Page 23
> 
> Monte-Carlo (MC) estimates.
> ^9T5F85T7aKDYFKIDPp23

> [!note] Page 24
> 
> 
> 
> ---
> 1. 底层用 SAC 做稳定训练
> 2. 用离线数据集 + 在线数据混合提升样本效率
> 3. 用奖励分类器解决复杂任务的奖励设计难题
> 4. 用免重置、并行训练加速现实世界迭代
> 5. 用「人在回路」兜底，既保证训练安全，又让机器人能快速学会复杂操作任务。
> ^5UQ7PWZ5aKDYFKIDPp24

> [!note] Page 24
> 
> 
> 
> ---
> 这段讲 SERL 如何解决现实世界强化学习的三大难题：
> 奖励难写 → 用奖励分类器，从成功 / 失败视频中学奖励
> 重置环境慢 → 训练前向 / 反向双控制器，机器人自己重置
> 策略不通用 → 用末端初始坐标系，让策略适应不同初始位置
> ^LIV6DC2AaKDYFKIDPp24

> [!note] Page 24
> 
> Building on off-policy deep Q-learning with replay buffers, entropy regularization for better exploration, expert demonstrations to guide learning, and a series of tools and recommendations for real-world training using reward classifiers
> ^53XLFPBNaKDYFKIDPp24

> [!note] Page 24
> 
> human interactions during training
> ^ZTZTJP4YaKDYFKIDPp24

> [!note] Page 24
> 
> Human-in-the-Loop, Sample Efficient Robot reinforcement Learning (HIL-SERL) (
> ^PY2LLJ46aKDYFKIDPp24

> [!note] Page 24
> 
> and employs prior data to (1) train a reward classifier and (2) bootstrap RL training on expert trajectories
> ^GR94CGJFaKDYFKIDPp24

> [!note] Page 24
> 
> HIL-SERL implementation supported by lerobot.
> ^N86JXL9PaKDYFKIDPp24

> [!note] Page 24
> 
> we first show how to train a reward classifier from a custom set of demonstrations, then define the Actor and Learner components, and finally, we bring them together in a complete script showing how to use HIL-SERL in practice.
> ^LY6ZY4TWaKDYFKIDPp24

> [!note] Page 32
> 
> lead to specification gaming or convergence to local optima,
> ^L9GVLUY2aKDYFKIDPp32

> [!note] Page 32
> 
> 
> 
> ---
> 现实世界强化学习（RL）有两大硬伤：训练成本太高、奖励函数难设计，而行为克隆（BC）靠模仿人类演示，完美绕开了这两个坑。
> ^5MTCLHE6aKDYFKIDPp32

> [!note] Page 33
> 
> and generative models prove more effective than point-wise policies at dealing with multimodal demonstration datasets.
> ^WVLS52EHaKDYFKIDPp33

> [!note] Page 34
> 
> Finally, empirical evidence suggests the performance of BC scales naturally with growing corpora of demonstrations collected across tasks, embodiments, and environments.
> ^YIPZCXDCaKDYFKIDPp34

> [!note] Page 34
> 
> While conceptually elegant, point-estimate policies f : O 7→ A learned by solving eq. 18 have been observed to suffer from (1) compounding errors
> ^527GWVESaKDYFKIDPp34

> [!note] Page 34
> 
> poor fit to multimodal distribution
> ^6UTJPAGBaKDYFKIDPp34

> [!note] Page 35
> 
> 
> 
> ---
> (A) 小误差会不断累积，让机器人偏离正常状态，最终失败。
> (B) 无法处理多模态动作，把多种正确解法平均成错误动作。
> 因此机器人学习必须使用生成式策略（扩散 / 流匹配），才能解决这两个问题。
> ^6ZCQXAI3aKDYFKIDPp35

> [!note] Page 35
> 
> 
> 
> ---
> point-estimate policies 就是只输出单一动作的确定性策略，简单直接，但会因为累积误差和无法处理多模态动作，在真实机器人任务里表现很差，所以现在大家才会用扩散模型、VAE 这类生成式策略来替代它。
> 它是生成式模型，能表示多模态动作分布，不会把多个正确路径平均成错误动作。
> 它采用动作分块预测，一次性生成多步动作序列，大幅缓解了误差累积问题，同时对分布偏移更鲁棒。
> ^SJ34ZC5AaKDYFKIDPp35

> [!note] Page 35
> 
> (A) covariate shifts
> ^Y7MJWWIDaKDYFKIDPp35

> [!note] Page 35
> 
> 
> 
> ---
> 1. 带隐变量的生成式机器人策略，能通过调整隐变量 z，在同一个场景下，让同一个关节的概率分布随任务意图（抓 / 推）完全反转，从而实现多模态、多任务的行为控制。
> ^ML4T5P29aKDYFKIDPp35

> [!note] Page 35
> 
> ntuitively, latent variable in a single latent model may contain information regarding the task being performed, which directly results in the likelihood of the same observation-action pair being different for two different tasks. When (A) picking a block the likelihoo
> 
> ---
> <b>解决了多模态动作问题</b>
> 同一个场景下，机器人可以有多种合理的行为（比如既可以抓也可以推）。普通的行为克隆只能输出单一动作，会把两种行为的平均值变成错误动作；而带隐变量 z 的生成模型，可以通过调整 z 来选择不同的合理行为。
> <b>隐变量 z 就是 “行为意图”</b>
> 模型把不同的任务目标（抓 / 推）编码到了隐变量 z 里，同一个状态下，改变 z 就能改变机器人的行为模式，实现多任务控制。
> <b>概率分布随任务目标变化</b>
> 模型学到的不是 “固定的关节角度”，而是 “在某个任务意图下，关节角度的概率分布”，这让机器人能灵活应对同一状态下的多种合理行为。
> ^36DX69ZXaKDYFKIDPp35

> [!note] Page 35
> 
> of a wide gripper’s opening should be higher than narrower one, while it should be the opposite when (B) pushing the block.
> 
> ---
> 而扩散模型是<b>生成式概率模型</b>，它输出的是<b>一整个动作分布</b>，而不是一个固定值：
> 同一个场景下，模型可以生成<b>多种不同但都合理的动作序列</b>（比如从左边绕、从右边绕）。它不会强迫模型去 “平均” 这些动作，而是把所有合理的路径都表示成分布里的不同样本。对应你上一张图，就是同一个场景下，通过不同的采样，可以生成 “抓取” 或 “推动” 两种完全不同的动作意图。
> ^DGUCTHU4aKDYFKIDPp35

> [!note] Page 35
> 
> To address poor multimodal fitting, Florence et al. (2022) propose learning the generative model p(o, a) underlying the samples in D, rather than explicitly learning a prediction function f : a = f (o).
> ^WMASZGR9aKDYFKIDPp35

> [!note] Page 35
> 
> that (1) new samples (o, a) ∼ pθ(•) resemble those stored in D, and (2) high likelihood is assigned to the observed regions of the unobservable p.
> ^36K9E36FaKDYFKIDPp35

> [!note] Page 36
> 
> The latent variable model
> 
> ---
> 这正是解决你之前提到的 “单点策略缺陷” 的关键：
> <b>解决多模态问题</b>
> 同一个场景下，机器人可以有多种合理行为（抓 / 推），这些行为会被编码到隐变量空间的不同位置。模型不再被迫输出一个 “平均动作”，而是可以通过调整 z，生成所有合理的行为。
> <b>学习到 “行为意图”</b>
> 隐变量 z 不再是单纯的噪声，而是模型从数据中学到的 “行为意图” 表示。这样模型能理解不同动作背后的目标，而不是只模仿表面的关节角度。
> <b>实现可控生成</b>
> 推理时，你可以通过调整 z 来控制机器人的行为模式：比如想让它 “抓取” 就选对应的 z，想让它 “推动” 就选另一个，而不用修改模型本身。
> ^S8FMTRJNaKDYFKIDPp36

> [!note] Page 36
> ^M2F5TVS7aKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> decode: 把latent/意图翻译为o,a
> ^SWW7FTX6aKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 隐变量z的分布，均值与方差
> 训练时，用它把人类演示编码成隐变量；推理时也可以用它推断当前动作的意图
> ^8KN6YBLMaKDYFKIDPp36

> [!note] Page 36
> 
> used in GM posits samples (o, a) are influenced from an unobservable latent variable z ∈ Z,
> ^AVHIMS68aKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 我们看到的演示数据分布，是由 “不同意图下的行为分布”，按意图的出现概率加权组合出来的
> ^K2K53SBFaKDYFKIDPp36

> [!note] Page 36
> 
> z could be interpreted as some high level representation of the underlying task being performed by the human demonstrator.
> ^GN32AIV8aKDYFKIDPp36

> [!note] Page 36
> 
> While the latent space Z typically has a much richer structure than the set of all actual tasks performed,
> ^4FWUTV36aKDYFKIDPp36

> [!note] Page 36
> 
> Given a dataset D consisting of N i.i.d. observation-action pairs, the log-likelihood of all datapoints under θ (in Bayesian terms, the evidence pθ(D)) can be written as:
> ^GA444F36aKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 变分推断：引入推断分布q，也就是encoder
> 来近似真实分布p
> ^NGXVDSA4aKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 数据集 D 在生成模型 p_θ 下的 log 概率（对数似然）
> ^Z483FVSGaKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 全概率公式
> ^UARKZ8CNaKDYFKIDPp36

> [!note] Page 36
> 
> 
> 
> ---
> 现在我们不用算复杂的积分了，只需要从 q 分布里采样 z，然后求平均就行；但是呢，E里面有神经网络没法求解析解，直接计算会导致梯度爆炸等问题，所以没发直接最大化，我们就用jesen不等式，logE(X) >= E(logX),log移动到里面就能算了
> ^LRMWHC2QaKDYFKIDPp36

> [!note] Page 36
> ^852IWXTJaKDYFKIDPp36

> [!note] Page 36
> 
> q. 23 is rarely tractable when the distribution p is modeled with approximators such as neural networks, especially for high-dimensional, unstructured data.
> 
> ---
> <b>带隐变量的生成模型，如何最大化演示数据的对数似然（log-likelihood）。</b>
> 它用概率论的基本公式，把 “求数据分布” 的问题，一步步转化为可计算的形式，并指出：当用神经网络建模时，这个目标是不可直接计算的，所以才需要用 VAE 这类变分方法来近似。
> ^ZIQIILT7aKDYFKIDPp36

> [!note] Page 37
> 
> (Evidence LOwer Bound, ELBO)
> ^5MVLEH28aKDYFKIDPp37

> [!note] Page 37
> 
> 
> 
> ---
> maximize ELBO = 最大化重建精度 + 让隐变量分布接近先验
> 重建→ 让模型根据 z 生成出正确的 (o,a)
> 正则项→ 让推断分布 q 不要太离谱，尽量接近先验 p (z)（通常是高斯）
> q 是学习出来的 “实际后验”，p 是我们规定的 “理想先验”。
> 我们希望 q 尽量靠近 p，这样隐空间才规整、可控、不乱来。
> 最大化 ELBO= 让重建更准 + 让隐空间更规整
> ^K5MIXBU5aKDYFKIDPp37

> [!note] Page 37
> 
> ELBOD(θ, φ) =  N  X  i=0  Ez∼qφ(•|(o,a)i) log pθ((o, a)i|z) − DKL qφ(z|(o, a)i)∥p(z)
> 
> ---
> 一、公式里每一项 → 对应模型里的什么？
> 1. <b>\(q_\phi(z | o,a)\) → Encoder（编码器）</b>
> 输入：观测 o（图像 / 关节）+ 动作 a输出：隐变量 z 的分布（均值、方差）由参数 \(\phi\) 控制
> <b>对应训练：</b>
> 你给模型一段人类演示 (o,a)，它输出 z 应该是什么。
> 2. <b>\(p(z)\) → 先验分布（固定为标准高斯）</b>
> 固定的：\(z \sim \mathcal{N}(0, I)\)不学习，只是用来<b>约束 q</b>
> 3. <b>\(p_\theta(o,a | z)\) → Decoder（解码器）</b>
> 输入：隐变量 z输出：预测的观测 o、动作 a由参数 \(\theta\) 控制
> <b>对应训练：</b>
> 给模型一个 z，让它生成正确的动作。
> 二、训练过程（一步一步对应公式）
> 训练步骤 1：取一个演示样本
> 从数据集取：
> \((o,a) \leftarrow \text{人类演示}\)
> 训练步骤 2：用 Encoder 得到 z 的分布
> \(q_\phi(z | o,a) = \text{Encoder}(o,a)\)
> 输出：均值 \(\mu\)，方差 \(\sigma\)
> <b>对应公式里的：\(q_\phi(z|o,a)\)</b>
> 训练步骤 3：从 q 中采样 z
> \(z \sim q_\phi(z | o,a)\)
> （用重参数化技巧）
> 训练步骤 4：用 Decoder 重建 (o,a)
> \(\hat{o},\hat{a} = \text{Decoder}(z)\)
> <b>对应公式：\(p_\theta(o,a|z)\)</b>
> 训练步骤 5：计算两个 Loss
> ① 重建 Loss（让生成更准）
> \(\mathcal{L}_{\text{rec}} = - \log p_\theta(o,a|z)\)
> = 预测动作 \(\hat{a}\) 和真实动作 a 的 MSE / 交叉熵
> <b>越小越好</b>
> ② KL Loss（让 z 不乱跑）
> \(\mathcal{L}_{\text{KL}} = D_{KL}\big( q_\phi(z|o,a) \parallel p(z) \big)\)
> = 让 Encoder 输出的分布接近标准高斯
> <b>越小越好</b>
> 训练步骤 6：总 Loss（最终要最小化这个）
> \(\mathcal{L} = \mathcal{L}_{\text{rec}} + \mathcal{L}_{\text{KL}}\)
> <b>最小化 Loss = 最大化 ELBO</b>
> ^DI982JXUaKDYFKIDPp37

> [!note] Page 37
> 
> learning a VAE amounts to (1) reconstructing the examples in D by minimizing (1) the reconstruction loss Lrec—a standard supervised learning objective for regression—while (2) regularizing the latent representation by minimizing Lreg
> ^5DGQRMI5aKDYFKIDPp37

> [!note] Page 37
> 
> the likelihood pθ and (approximate) posterior qφ for such model.
> ^GRRGWRYMaKDYFKIDPp37

> [!note] Page 38
> 
> are another class of GMs which treat the similar problem of approximating an underlying unknown data distribution—variational inference
> ^CDUKJ4T3aKDYFKIDPp38

> [!note] Page 38
> 
> For example, in a robotics setting, one might naturally distinguish between high-level trajectory planning (higher up in the hierarchy, t → T ) and fine-grained motion adjustments (closer to empirical observations, t → 0)
> ^NZPPZBIKaKDYFKIDPp38

> [!note] Page 38
> 
> DMs are a particular instantiation of HMLV models for which the posterior is fixed to q(zt|zt−1) = N (zt  √1 − βt, βtI),
> ^CVJHBHJEaKDYFKIDPp38

> [!note] Page 38
> 
> DMs approximate the process of sampling from the unknown p(o, a) by (1) sampling from an easy-to-sample distribution (e.g., Gaussian) and (2) learning to reconstruct high-likelihood samples under the unknown distribution.
> ^4YH22TLKaKDYFKIDPp38

> [!note] Page 39
> 
> here we: used eq. 30 and multiplied by 1 = q(z1:T |z0)  q(z1:T |z0) in eq. 33; used Jensen’s inequality in eq. 35; used the law of conditional probability for both numerator and denominator in eq. 36; stepped forward and backward the products in the numerator and denominator products in eq. 37, respectively; reindexed the product terms in eq. 38; removed out-of-expectation variables in eq. 41; used the defintion of KL-divergence in eq. 42. In turn, eq. 42 provides an optimization targe
> ^RJNCGCIZaKDYFKIDPp39

> [!note] Page 39
> 
> where the former term is equivalent to the reconstruction term in eq. 27 and the latter term can be obtained in closed form
> ^VFE9FI6PaKDYFKIDPp39

> [!note] Page 40
> 
> that permits to reconstruct samples from the unknown target distribution by iteratively denoising samples of a tractable, easy-to-sample distribution.
> ^L998LJERaKDYFKIDPp40

> [!note] Page 40
> 
> 
> 
> ---
> 模型学的是噪声预测器 \(\epsilon_\theta\)，但这个预测器的核心作用，就是近似 Score Field；推理时我们靠的就是这个近似的 Score Field，一步步把噪声变回动作
> ^4QY2FIKFaKDYFKIDPp40

> [!note] Page 40
> 
> 
> 
> ---
> 扩散模型先把真实数据 “污染” 成纯噪声，
> 再学习怎么把纯噪声 “还原” 成真实数据。
> 还原靠的就是学习一张 “方向地图”（位移场），
> 跟着箭头走，就能从噪声变回高质量机器人动作。
> “如果你现在在这个位置，往箭头方向走，就能离真实的机器人动作更近一步。”
> 箭头的方向：告诉你「该往哪走」才能减少噪声、回到真实数据分布。
> 箭头的长度：告诉你「该走多远」，梯度越强，离真实数据越远，需要修正的幅度就越大
> ^6MEYEGITaKDYFKIDPp40

> [!note] Page 41
> 
> 
> 
> ---
> 期望算不出来，用蒙特卡洛（采样平均）近似
> 假设输出是高斯分布，log 概率变成 MSE
> VAE 训练 = 最小化 MSE（重建） + 最小化 KL（正则）
> KL 让隐空间 z 规整、稳定、可控
> ^44JD4UVRaKDYFKIDPp41

> [!note] Page 41
> 
> 
> 
> ---
> 横轴 Observation - q₂：机器人 SO-100 机械臂的肘部关节观测值
> （比如关节位置 / 角度）。
> 纵轴 Action - q₂ʰ：人类遥操作时，主臂同一关节的目标位置。
> 这两个量，都是同一个关节的状态：一个是机械臂当前的状态（观测），一个是人类想要它到达的状态（动作）。
> 为什么是对角线的：遥操作时，你动主臂的肘部，机械臂的肘部会跟着同步运动。
> 当机械臂完美复现你的动作时，它的观测值（当前位置）就等于你主臂的动作值（目标位置）。
> 所以，大量遥操作数据点就会落在 y=x 这条对角线上。
> 颜色越亮（越黄），代表落在这个位置的样本越多。右上角的亮黄色区域，就是人类操作最频繁、数据最密集的状态点。
> ^BT3DXH4WaKDYFKIDPp41

> [!note] Page 41
> 
> 
> 
> ---
> t随机选一个扩散步数, z_0从数据集里取一个干净的轨迹,ε随机采样高斯噪声，α ̄tz0 + ε√1 − α ̄给动作加噪
> ^W8USQL6KaKDYFKIDPp41

> [!note] Page 41
> 
> 
> 
> ---
> 主去噪项：核心的噪声预测与去除项
> 随机噪声项目：保持动作的多样性
> ^2CKEVDRCaKDYFKIDPp41

> [!note] Page 41
> 
> its efficiency at inference time
> ^HI5NB59NaKDYFKIDPp41

> [!note] Page 41
> 
> large number (hundreds) of compute-expensive
> ^Q3IPN3F8aKDYFKIDPp41

> [!note] Page 42
> 
> 
> 
> ---
> 直观展示了流匹配（Flow Matching）的核心思想：用向量场（箭头）驱动数据，从初始分布平滑 “流” 向目标分布。
> 向量场的方向和最终的分布变化是一一对应的，整个流动过程清晰、可控、没有随机性的 “冲散”，更容易被模型学习和还原。
> ^6JLXPCCHaKDYFKIDPp42

> [!note] Page 42
> 
> Instead of a stochastic, discrete, multi-step denoising process, FM aims to learn a deterministic, continuous, differentiable flow ψ : [0, 1]×Z 7→ Z, formalized starting from a (possibly time-dependent) vector field v : [0, 1]×Z 7→ Z transporting over time samples from a simple prior distribution p0—e.g., a standard Gaussian—to a more complex, typically unknown data distribution p1
> ^ZJZ2WW8TaKDYFKIDPp42

> [!note] Page 42
> 
> show how DMs can be seen as a specific instance of FM where the conditional target vector field v learned by the noise regressor εθ corresponds to:
> ^MC58LEPWaKDYFKIDPp42

> [!note] Page 43
> 
> 
> 
> ---
> 扩散模型是快速、对称地向四周扩散，很快就会丢失数据的方向信息，变成纯高斯噪声，流匹配是沿着数据本身的方向平滑扩散，在加噪过程中能更长时间地保留原始数据的模式信息。扩散模型：它的加噪过程是各向同性的，噪声在所有方向上均匀增加，所以很快就会把原始数据的方向 “冲没”。
> 流匹配模型：它的加噪过程是沿着数据分布的方向流动的，更像一个 “平滑变形”，而不是随机加噪，所以数据模式消失得更慢。
> 扩散模型：训练时模型需要学习从纯噪声恢复数据，难度更高，需要更多的时间步和计算资源。
> 流匹配模型：因为它的前向过程保留了更多数据模式，模型学习起来更容易，而且逆向生成时也能更稳定地还原出高质量的动作。
> ^3P4NQTKCaKDYFKIDPp43

> [!note] Page 43
> 
> g a less randomic pattern,
> ^LQX7JU5AaKDYFKIDPp43

> [!note] Page 43
> 
> In practice, FM can be applied to generative modeling by learning a vector field regressor vθ(z, t) to approximate a given target vector field u(t, z).
> ^5CMVZYMKaKDYFKIDPp43

> [!note] Page 43
> 
> where z0 ∼ p0(•) and z1 ∼ p1(•). Note how in eq. 49—differently from eq. 44—time is assumed to be varying continuously t ∼ U([0, 1]) rather than discretely t ∼ U({0, ∆t, 2∆t, . . . , 1}), a
> ^YD39YL8RaKDYFKIDPp43

> [!note] Page 43
> 
> t inference time, samples are generated by starting with z0 ∼ p0 and iteratively refined according to  dz  dt = vθ(zt, t) for t ∈ [0, 1]—an operation that can be numerically carried out with standard ODE solvers, and that in  practice is often carried out numerically via forward-
> ^CTWW4I37aKDYFKIDPp43

> [!note] Page 43
> 
> 
> 
> ---
> 不再逐时间步单步预测动作，而是一次性预测未来一整段动作序列（chunk 动作块），并用 Transformer 做时序建模，从根源解决传统行为克隆 BC 的两大致命问题：多模态平均坍塌、误差累积漂移。（Chunk + Transformer：把整段动作轨迹作为一个整体模态建模，不强行平均，能保留多种可行行为模式）
> ^6W4TPU4CaKDYFKIDPp43

> [!note] Page 43
> 
> mitigate error compounding, learning high-fidelity autonomous behaviors via BC.
> ^QPRBSWTAaKDYFKIDPp43

> [!note] Page 44
> 
> Notice how in eq. 50 we are now also learning a new set of parameters ω for the prior distribution in the latent space. Effectively, this enables conditioning latent-space sampling (and thus reconstruction) during training (and potentially inference too), providing useful when learning inherently conditional distributions like policies. Further, ACT is trained as a β-CVA
> ^GKQSEU23aKDYFKIDPp44

> [!note] Page 44
> 
> In ACT (Figure 30), inference for a given observation o ∈ O could be performed by (1) defining a prior pω(z|o) for the latent variable z and (2) decoding an action chunk from a sampled latent z ∼ pω(•|o), similarily to how sampling from standard VAEs takes place, with the exception that vanilla VAEs typically pose p(z|o) ≡ p(z) ∼ N (0, I) and thus skip (1).
> ^F72AL9EQaKDYFKIDPp44

> [!note] Page 45
> 
> 
> 
> ---
> ACT 是一个 CVAE + Transformer 的组合模型：
> 用 CVAE（条件变分自编码器）建模动作的潜在分布
> 用 Transformer 作为解码器，根据观测和潜在向量，一次性生成未来一整段动作块 a_{t:t+H_a}。
> ^658DKKJLaKDYFKIDPp45

> [!note] Page 48
> 
> thanks to their inherent capability to deal with multimodal data, and their training stability
> ^R5WBTTGTaKDYFKIDPp48

> [!note] Page 49
> 
> 
> 
> ---
> 1. 顶部输入：带噪动作序列 \(\tilde{a}_{t:t+H_a}\)
> 这是扩散模型的核心输入：带噪声的动作块
> 训练时：给真实的专家动作序列加噪
> 推理时：初始是纯高斯噪声，然后一步步去噪
> 热力图展示了动作块的分布：横轴是时间步（0-30），
> 纵轴是关节号，颜色代表动作数值大小。
> ^FN8TPEHLaKDYFKIDPp49

> [!note] Page 49
> 
> 
> 
> ---
> 2. 底部输入：观测序列 \(O_{t-H_o:t}\)
> 
> 这是机器人的条件信息：过去 \(H_o\) 帧的图像 + 关节状态
> 每一张图都附带了对应的关节数据（比如 [-1.3628, 78.2137, ...]）
> 模型的目标是：在这些观测条件下，生成合理的未来动作
> ^ISG925LPaKDYFKIDPp49

> [!note] Page 49
> 
> Similarily to ACT (Zhao et al., 2023), Chi et al. (2024) (1) adopt a modified observation-conditioned target distribution instead of the full joint p(o, a), and (2) predict multiple actions into the future instead of a single action.
> ^EABDCP4IaKDYFKIDPp49

> [!note] Page 49
> 
> 
> 
> ---
> 上一节 4.2 Action Chunking with Transformers 提出一个核心范式：
> 不用逐帧预测单步动作，改成一次性预测未来一整段动作块（Action Chunk），
> 用 Transformer 建模时序，缓解误差累积、多模态平均坍塌。
> 但Transformer Chunk 策略仍有短板：
> 本质还是确定性回归，对同一观测下多种可行动作建模能力弱；
> 难以精准拟合机器人遥操作那种多模态、连续分布的动作轨迹；
> 泛化性、抗扰动能力有限。
> 于是本节引出：Diffusion Policy 扩散策略
> 把「动作分块 Action Chunk」+「扩散模型生成建模」结合，
> 用条件扩散模型直接建模未来动作序列的概率分布，而不是只学一条确定轨迹。
> ^GP4H7FBSaKDYFKIDPp49

> [!note] Page 49
> 
> claim the combination of (1) conditioning on a horizon of previous observatio  
> and (2) predicting multiple actions into the future allows DP to commit to specific modes in the data at inferen  
> time, which proves essential for good performance and avoiding undecisivenes
> ^6BF8ECIPaKDYFKIDPp49

> [!note] Page 49
> 
> Then, a U-Net (Ronneberger et al., 2015) is trained to regress the noise added into a ̃t:t+Ha , conditioned on observation information at every layer, thus seeking to optimize eq. 51. At inference time, the noise predictor is used to predict the quantity of noise at every
> ^A6RZAVXQaKDYFKIDPp49

> [!note] Page 50
> 
> 
> 
> ---
> 承接 4.2 Action Chunking：Diffusion Policy 是动作分块范式的升级，把确定性的 Transformer 回归，换成了概率性的扩散生成。
> 呼应你之前学的扩散模型 / Score Field：这里的 1D-UNet 就是噪声预测器，学习的就是动作序列分布的分数场，推理时跟着箭头去噪。
> 引出后续流匹配（Flow Matching）：Diffusion Policy 的缺点是去噪步数多、推理慢，流匹配就是为了解决这个问题，用确定性向量场替代随机加噪。
> ^LD4BIHR7aKDYFKIDPp50

> [!note] Page 52
> 
> Predicting series of actions instead of single commands proved essential in learning complex, multimodal behavior
> ^HFGMKQQAaKDYFKIDPp52

> [!note] Page 52
> 
> interleaves chunk prediction At ← π(ot) and chunk consumption at ← PopFront(At),
> ^IG9H7UMUaKDYFKIDPp52

> [!note] Page 52
> 
> to then aggregate the predicted chunks on overlapping sections.
> ^7C5Q5LBAaKDYFKIDPp52

> [!note] Page 52
> 
> A less resource-intensive approach is to entirely exhaust the chunk A before predicting a new chunk of actions, a strategy we refer to as synchronous (sync) inference.
> ^ASYMAVEYaKDYFKIDPp52

> [!note] Page 53
> 
> 
> 
> ---
> ACT：每一步都重新推理 + 重叠平滑 → 算力爆炸
> 异步推理：只在动作快用完时才推理 + 后台并行算 → 算力省、反应快
> ^YMJ2Q3JYaKDYFKIDPp53

> [!note] Page 53
> 
> by decoupling action chunk prediction A from action execution at ← PopFront(At)
> ^8PN68SF4aKDYFKIDPp53

> [!note] Page 53
> 
> This decoupled stack, which we refer to as asynchronous (async) inference (1),
> ^ZGXRUHEFaKDYFKIDPp53

> [!note] Page 53
> 
> . In async inference, a RobotClient sends an observation ot to a PolicyServer, receiving an action chunk At once inference is complete
> ^8VZVKB48aKDYFKIDPp53

> [!note] Page 54
> 
> 
> 
> ---
> 这张图直观展示了异步推理中，触发阈值 g 和观测过滤如何影响动作队列的变化：g 越大，队列越满、推理越频繁；加入观测过滤后，既能避免重复算力浪费，又能通过兜底机制保证队列不空，实现了流畅度和算力消耗的平衡。
> ^BUQ96IDTaKDYFKIDPp54

> [!note] Page 54
> 
> First, let l be a random variable modeling the time needed to receive an action chunk A after sending an observation o, i.e. the sum of (1) the time to send across the observation o between the RobotClient and PolicyServer, tC→S
> ^GIY8EFCRaKDYFKIDPp54

> [!note] Page 57
> 
> shifting the previously task-specific paradigm towards combining (1) an initial, task-agnostic large-scale pre-training stage and a (2) task-specific, adjustment phase.
> ^W7YEDGHYaKDYFKIDPp57

> [!note] Page 57
> 
> holds the premise to surpass traditionally siloed approaches
> ^SM3NSGBZaKDYFKIDPp57

> [!note] Page 57
> 
> learning single-task policies such as ACT or Diffusion Policy, in this section we present advancements in developing generalist, multi-task, policies, capable of performing a wide range of tasks across different environments and embodiments, and guided by unstructured instructions typically given in plain, natural language
> ^8LNDLDN5aKDYFKIDPp57

> [!note] Page 58
> 
> predicated
> ^YKB4FWMEaKDYFKIDPp58

> [!note] Page 58
> 
> architectural innovation and (joint) data-compute scaling
> ^9M9WGKXVaKDYFKIDPp58

> [!note] Page 58
> 
> in stark
> ^5FYLICZDaKDYFKIDPp58

> [!note] Page 58
> 
> intrinsically embodied and thus task-specific
> ^PFYU4MHUaKDYFKIDPp58

> [!note] Page 58
> 
> Thus, the high degree of fragmentation of robotics datasets and tasks has traditionally led to the development of specialist policies, trained on small, task-specific datasets, developed to perform well at their designated task but that fail to generalize to new deployment scenarios
> ^NA7ZD6EAaKDYFKIDPp58

> [!note] Page 58
> 
> latent variable model trained on 25k+ demonstrations, the field has now evolved into π0, a transformer-based model trained on 10M+ demonstrations and exhibiting strong few-shot capabilities across tasks and embodiments.
> ^FZET8FJMaKDYFKIDPp58

> [!note] Page 58
> 
> everaging (1) a more powerful architecture and (2) scaling up the dataset used
> ^D737QZBTaKDYFKIDPp58

> [!note] Page 59
> 
> 
> 
> ---
> 1. 通用机器人成功的关键 = 正确的模型架构（Transformer） + 大规模、高质量、多任务 / 多机身数据集
> 2. 机器人以前的问题
> 数据太少、太小、任务专用
> 数据异构：不同机器人、不同任务不通用
> 直接混合数据会导致负迁移（越学越差）
> → 只能做专用机器人，做不出通用机器人
> ^2P5ZKWUFaKDYFKIDPp59

> [!note] Page 59
> 
> co-fine-tuning
> ^GWAREW68aKDYFKIDPp59

> [!note] Page 59
> 
> ask, it can still combine its semantic understanding of images, so that when asked which object between (1) a piece of paper, (2) a pair of headphones or (3) a rock may be used instead of a hammer, it correctly answers (3)
> ^4TCTX9X8aKDYFKIDPp59

> [!note] Page 59
> 
> 22 different robot embodiments and 21 institutions across the world, and resulted in a total 1.4M of cross-embodiments, cross-tasks, openly-available trajectories
> ^86FBVILVaKDYFKIDPp59

> [!note] Page 59
> 
> Besides the contribution of an aggregate, large scale dataset, O’Neill et al. (2025) also demonstrated significant positive transfer across tasks and embodiments, showing that a single model trained on multi-embodiment data can outperform specialist models trained on their respective single-embodiment datasets
> ^VE5A5NQFaKDYFKIDPp59

> [!note] Page 59
> 
> Figure 36 shows the current trends in robot learning in terms of size and nature of the robotics datasets contributed, together with the size and accessibility of the available models.
> ^CWTA59M4aKDYFKIDPp59

> [!note] Page 60
> 
> Procedurally, VLAs complement advanced Vision-Language Model (VLM) backbones with action-specific modules (1) adopting mid-sized action experts to model continuous actions distributions p(at:t+Ha |ot)—avoiding discrete action tokens entirely—and (2) relying on action chunking (Zhao et al., 2023, Section 4) as a strategy to reduce error compounding when predicting multiple actions learning from inherently non-i.i.d. data, such as demonstration dat
> ^U7RRIB2EaKDYFKIDPp60

> [!note] Page 61
> 
> π0 (Black et al., 2024) introduce a VLA consisting of a MoE architecture consisting of (1) a pre-trained VLM backbone (Gemma 2.6B (Team et al., 2024)) and (2) a dedicated action expert used to generate continuous actions via flow matching.
> ^SHR7GNHQaKDYFKIDPp61

> [!note] Page 61
> 
> (late-fusion
> ^A5HQYUQMaKDYFKIDPp61

> [!note] Page 61
> 
> a blockwise causal attention mask
> ^TXJR9GCIaKDYFKIDPp61

> [!note] Page 62
> 
> 
> 
> ---
> 从数据集中拿一组真实的「观测 ot​ + 动作块 a」
> 生成一个带噪动作：在 a 和噪声 ϵ 之间做插值
> 把带噪动作和观测喂给模型，让它预测修正向量场
> 用 MSE 损失，让模型的预测向量，和「从噪声到真实动作」的位移向量一致
> 训练完成后，模型就学会了：从纯噪声开始，一步步修正，得到合理的动作块
> ^CAAMJ27AaKDYFKIDPp62

> [!note] Page 62
> 
> Flow matching (Lipman et al., 2023, Section4.1.3) can be seen as a continuous time, deterministic generalization of diffusion processes, and has proven effective in modeling highly complex multi-modal distributions, including those over images and video
> ^87E876IUaKDYFKIDPp62

> [!note] Page 62
> 
> In particular, the action expert is implemented as a conditional flow matching mode
> ^M7D5JY5NaKDYFKIDPp62

> [!note] Page 62
> 
> Interestingly, differently from a standard flow matching pipeline (Lipman et al., 2023), τ is not sampled from a uniform distribution τ ∼ U([0, 1]), but rather obtained from τ ∼ Beta(1.5, 1) defined on the [0, s], s < 1 support (Figure 38).
> ^X9VBL7APaKDYFKIDPp62

> [!note] Page 62
> 
> Besides adopting a MoE architecture with a VLM backbone initialized from a pre-trained model and trained jointly with an action expert via flow matching, π0 also relies on a unique pre-training corpus comprising of a mix of proprietary and open data totaling 10M+ trajectories
> ^G8SPID2WaKDYFKIDPp62

> [!note] Page 64
> 
> SmolVLA (Shukor et al., 2025) is an entirely open-source research effort, which aims at democratizing the developments of robotics foundation models by open sourcing the model alongside the data used as well as the training recipes.
> ^M375MPWMaKDYFKIDPp64

> [!note] Page 65
> 
> VLM backbone with a dedicated action expert,
> ^MXFBMLIDaKDYFKIDPp65

> [!note] Page 65
> 
> In contrast with π0, the action expert interleaves cross-attention (CA) and self-attention (SA) layers, a choice shown to yield higher success and smoother action chunks in practice.
> ^YSALNNYZaKDYFKIDPp65

> [!note] Page 65
> 
> While in the expert SA layers tokens are used to obtain queries, keys and values, CA layers use action tokens only as queries, and instead project visual, language and proprioperceptive tokens from the VLM backbone to a shared embedding space to then obtain key
> ^HYSICGJRaKDYFKIDPp65

> [!note] Page 67
> 
> This tutorial has charted the paradigmatic shift transforming robotics
> ^VUMPDFJWaKDYFKIDPp67

> [!note] Page 67
> 
> learn complex, multimodal behaviors from human demonstrations
> ^59I3GF7ZaKDYFKIDPp67
