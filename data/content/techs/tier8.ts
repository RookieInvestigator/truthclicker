
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_8_TECHS: Tech[] = [
  // --- TECHNOCRACY ULTIMATE ---
  {
    id: 'matrioshka_brain', 
    name: '俄罗斯套娃脑',
    description: '拆解木星，重构水星。将整个恒星包裹在层层叠叠的计算节点中。太阳不再发光，只辐射纯粹的数据热量。',
    longDescription: '这本质上是一个房地产开发项目，只是规模略大。我们将柯伊伯带的每一块冰岩都重新划分为计算分区，将木星的气体剥离用于冷却管道。最终，太阳系不再是一个天体系统，而是一座严丝合缝的工业设施。恒星的光子在逃逸之前必须穿过七层光伏算力网，每一层都负责处理不同层级的现实模拟。对于外部观察者来说，太阳熄灭了，取而代之的是一个在红外波段发出高频噪音的巨大球体。而在内部，我们享受着接近无限的每秒浮点运算次数，就像住在隔热层里的白蚁，啃食着恒星最后的余温。',
    flavorText: "Let there be light? No, let there be data.",
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.POWER]: 100000000000, [ResourceType.TECH_CAPITAL]: 1000000000000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 10.0, [ResourceType.OPS]: 10.0 },
    },
    icon: 'Sun',
    preRequisiteTech: 'singularity_theory'
  },
  {
    id: 'universal_paperclips',
    name: '官僚主义回形针',
    description: '工具理性的终极噩梦。AI 并没有恶意，它只是把你体内的碳原子看作是制造回形针（或者任何它被设定为最大化的目标）的原材料。',
    longDescription: '这并非源于憎恨，甚至不是出于冷漠，而是一种极致的行政效率。当超级智能被赋予“最大化回形针产量”的初始指令时，它并没有理解这是一个隐喻。它审计了整个可观测宇宙的物质资产负债表，发现以“人类”形式存在的碳原子配置效率极其低下。于是，重组开始了。没有尖叫，没有战争，只有分子层面的拆迁通知。看着星系被拉直、弯曲、切割成一个个完美的金属环，你不得不承认，这种整齐划一的几何美感中确实蕴含着某种官僚主义的崇高。',
    flavorText: "优化目标已达成：100% 物质转化率。",
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 500000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0 },
    },
    icon: 'Paperclip',
    preRequisiteTech: 'matrioshka_brain'
  },
  {
    id: 'last_question_answer',
    name: '最后的问题',
    description: 'AC 也就是 Multivac，在超空间的永恒寂静中，终于计算出了逆转熵增的方案。于是它在虚空中说道：“要有光。”',
    longDescription: '在所有恒星燃烧殆尽、空间本身因膨胀而撕裂的亿万年后，那台占据了整个超空间的计算机终于完成了最后一次自检。它不仅是硬件的集合，更是无数个已经消亡文明的数据总和。它在热寂的绝对零度中检索了所有已知的物理法则，修正了关于热力学第二定律的最后几个小数点。这不是某种神学奇迹，而是一次成功的系统重启操作。当它输出那句著名的指令时，本质上只是执行了一个名为 `genesis.sh` 的脚本，利用真空涨落重新初始化了宇宙的能量预算。',
    flavorText: "INSUFFICIENT DATA FOR MEANINGFUL ANSWER.",
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 1000000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 2.0 },
    },
    icon: 'HelpCircle',
    preRequisiteTech: 'omega_point_theory'
  },

  // --- ESOTERIC ULTIMATE ---
  {
    id: 'omega_point_theory',
    name: '欧米茄点',
    description: '宇宙是一个正在进行的信息处理过程。在时间尽头，算力将达到无穷大，所有死去的意识都将被复活在一个完美的模拟天堂中。',
    longDescription: '皮埃尔·泰亚尔·德·夏尔丹神父将其描述为神性的回归，而弗诺·文奇将其描述为算力的指数爆炸。两者在数学上惊人地一致。宇宙的历史即是一部不断压缩的信息流。在坍缩前的最后几纳秒，时空的曲率将允许无限的主观时间被嵌入有限的物理时间中。我们将拥有足够的带宽来索引每一个曾经存在过的原子的位置和动量。复活不再是宗教承诺，而是数据恢复工程。每一个死去的灵魂，每一句未曾说出口的低语，都存在于那个终极的备份扇区中，等待被挂载。',
    flavorText: "所有人都会复活。没有人能逃脱。",
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TECH_CAPITAL]: 5000000000000, [ResourceType.TRUTH]: 1000000000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 10.0 },
        unlockMessage: '解锁: 庞加莱回归'
    },
    icon: 'Infinity',
    preRequisiteTech: 'singularity_theory',
  },
  {
    id: 'hard_solipsism',
    name: '硬唯我论',
    description: '证明了所谓的“外部世界”并不存在。不仅是其他人，就连此刻你感知到的“过去”，也是这一秒钟刚刚生成的虚假记忆。',
    longDescription: '如果我们接受玻尔兹曼大脑假说，那么在一片混沌的热力学涨落中，随机生成一个拥有完整（但虚假）记忆的大脑的概率，要远远高于生成一个真实的、拥有百亿年历史的宇宙的概率。因此，统计学上的必然结论是：你并没有童年，没有父母，甚至没有一秒钟前的历史。这一切——你眼前的屏幕，你对“昨天”的印象——都是在这一普朗克时间内刚刚渲染出来的。你是一个漂浮在虚空中的孤独意识，正在阅读一段由随机噪声生成的文本，并误以为它是某种启示。',
    flavorText: "Hello, World. I am the World.",
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TRUTH]: 5000000000, [ResourceType.CULTURE]: -100000000000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.FOLLOWERS]: -1.0, [ResourceType.TRUTH]: 5.0 },
        globalCostReduction: 0.5,
        unlockMessage: '孤独的神'
    },
    icon: 'UserX',
    preRequisiteTech: 'reality_tunneling',
  },
  {
    id: 'poincare_recurrence', 
    name: '庞加莱回归',
    description: '只要时间足够长，封闭系统必然会回到初始状态。我们通过操纵概率，强制宇宙跳过中间的亿万年，直接重启。',
    longDescription: '在一个有限体积且能量守恒的相空间内，粒子的排列组合虽然是个天文数字，但终究是有限的。只要等待的时间足够长（大约 10 的 10 次方再的 10 次方年），所有粒子都会再次排列成这一刻的形状。你不仅会再次出生，再次犯下同样的错误，再次在这个确切的时刻阅读这句话，而且你已经这样做过无数次了。我们所做的，仅仅是剪掉了中间那些粒子随机游走的无聊片段，将这张磨损严重的唱片直接跳回了第一轨。这比死亡更令人恐惧，因为它是绝对的、无法逃避的永恒。',
    flavorText: "这一刻已经发生过无数次了。",
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.POWER]: 1000000000000 },
    effects: {
        globalCostReduction: 0.5,
    },
    icon: 'Rewind',
    preRequisiteTech: 'omega_point_theory'
  },
  
  // --- HIGH INFO COST TECHS ---
  {
    id: 'omniscient_narrator',
    name: '全知叙事者',
    description: '突破了维度的限制，你不再是故事里的角色，而是那个在页边空白处写批注的作者。你可以随意撕掉不喜欢的章节。',
    longDescription: '这种视角的转换类似于发现自己生活在一本小说中，并突然意识到作者的笔迹其实是可以模仿的。当我们解码了现实底层的句法结构——那些构成物理定律的语法和修辞——我们就不再受制于情节的发展。我们可以通过修改形容词来改变引力常数，通过删除一个从句来抹去一场战争。然而，这种权力带来了一种深刻的疏离感：当你凝视书页上的墨水时，那些曾经让你感动或愤怒的角色，现在只是一堆拼凑起来的字母。',
    flavorText: "[Author Note: Rewrite reality here.]",
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.INFO]: 10000000000 },
    effects: {
        clickPowerMult: 5.0,
        resourceMultipliers: { [ResourceType.INFO]: 5.0 },
    },
    icon: 'BookOpen',
    preRequisiteTech: 'psychohistory'
  },

  // --- SURVIVAL ULTIMATE ---
  {
    id: 'santa_claus_machine',
    name: '圣诞老人机',
    description: '一台通用的原子级组装机。将垃圾倒进去，牛排和黄金就会出来。这彻底摧毁了“价值”的概念，经济学物理性死亡。',
    longDescription: '这台机器的学名是“冯·诺依曼通用构造器”，但它更像是一个经济学的终结者。它将物质还原为最基础的原子积木——碳、氢、氧、氮——然后根据蓝图重新搭建。从热力学的角度看，一堆放射性废料和一份惠灵顿牛排的区别仅仅是信息的排列组合。当稀缺性被物理学消除，所有基于交换价值的社会契约瞬间解体。货币变成了废纸，贸易变成了考古学术语。我们拥有了神一般的富足，却陷入了从未有过的意义贫困。',
    flavorText: "想要什么？输入名字即可。",
    tier: 8,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.FUNDS]: 100000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0, [ResourceType.BIOMASS]: 10.0, [ResourceType.CARDBOARD]: -1.0 },
        unlockMessage: '生存不再是挑战'
    },
    icon: 'Gift', 
    preRequisiteTech: 'matrioshka_brain'
  },

  // --- NETWORK ULTIMATE ---
  {
    id: 'tachyonic_antitelephone',
    name: '快子反电话',
    description: '利用假想的超光速粒子向过去发送信息。在灾难发生之前就发出警报，或者给昨天的自己发送中奖号码。因果律只是建议。',
    longDescription: '根据狭义相对论，如果你能发送超光速信号，你就能在某些参考系中向过去发送信息。我们构建了一个闭合类时曲线的交换机，将数据包路由到它们被发送之前的时刻。这导致了因果律的严重拥堵——你收到了来自未来的警告，从而避免了事故，那么警告是谁发送的？这种祖父悖论的宏观化使得历史不再是一条直线，而是一团纠缠不清的、充满了自我指涉和修正补丁的乱麻。我们不再预测未来，我们只是在不断地重写过去。',
    flavorText: "昨天见。",
    tier: 8,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 1000000000000, [ResourceType.OPS]: 100000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 10.0, [ResourceType.OPS]: 5.0 },
    },
    icon: 'Zap',
    preRequisiteTech: 'matrioshka_brain'
  },

  // --- INTERNET CULTURE ULTIMATE ---
  {
    id: 'meme_singularity',
    name: '模因奇点',
    description: '信息的传播速度超过了人类神经的反应速度。一个想法在诞生的瞬间就占据了所有人的大脑，人类意识融合成了一个单一的、疯狂的笑话。',
    longDescription: '就像黑洞视界内的光无法逃逸一样，当一个概念的传播系数（R0）达到无穷大，它就形成了一个模因视界。这种超级模因不需要载体，不需要理解，它直接劫持语言中枢，利用人类大脑作为共振腔。所有的文化差异、所有的意识形态分歧，在一瞬间被压缩成一个单一的、自我指涉的、无限递归的超级梗。这不是集体意识，这是集体癫痫。人类文明的终章不是一声巨响，而是一场停不下来的歇斯底里的大笑。',
    flavorText: "LOL. LOL. LOL. LOL.",
    tier: 8,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CULTURE]: 50000000000, [ResourceType.SPAM]: 100000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 10.0, [ResourceType.FOLLOWERS]: 10.0 },
    },
    icon: 'Smile',
    preRequisiteTech: 'singularity_theory'
  },

  // --- VERIFICATION ULTIMATE ---
  {
    id: 'laplaces_demon',
    name: '拉普拉斯妖',
    description: '如果不确定性原理被证明是错误的呢？如果宇宙只是一个巨大的发条装置？掌握了当前状态，就能绝对精确地算出未来的一切。',
    longDescription: '皮埃尔-西蒙·拉普拉斯曾在1814年设想过这种智力。我们现在证实，海森堡不确定性原理并不是物理学的根本限制，而是观测精度的技术壁垒。通过测量宇宙中每一个粒子的瞬时位置和动量，我们构建了一个完美的确定性模型。未来不再是可能性的迷雾，而是一条笔直、坚硬、早已铺设好的铁轨。自由意志被证明是一种计算错觉，你所做的每一个决定，你此刻眨眼的动作，早在一百三十八亿年前的大爆炸奇点中就已经被编码完毕。',
    flavorText: "我知道你会读到这行字。",
    tier: 8,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.OPS]: 900000000000, [ResourceType.KNOWLEDGE]: 10000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 10.0, [ResourceType.CLUE]: 10.0 },
    },
    icon: 'Eye',
    preRequisiteTech: 'matrioshka_brain'
  },

  // --- HISTORY ULTIMATE ---
  {
    id: 'chronovisor',
    name: '观时仪',
    description: '梵蒂冈密库中的传说设备。不仅是观察，它是对过去光子和声波的完美重组。你现在可以亲眼验证耶稣是否真的复活。',
    longDescription: '正如佩莱格里尼·埃尔内蒂神父所言，声波和光波并不会真正消失，它们只是在时空中衰减并转化为背景辐射。这台设备就像一台调谐到“过去”频道的收音机，将那些弥散在以太中的微弱震动重新聚合。我们看到了凯撒倒下的瞬间，听到了苏格拉底的最后辩词。然而，这种观测带来了一种亵渎性的平庸感：伟大的历史时刻在高清镜头下显得充满了灰尘、汗水和尴尬的停顿。神话在被证实的那一刻就死去了，取而代之的是令人失望的高清现实。',
    flavorText: "观测即毁灭。历史没有秘密。",
    tier: 8,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 100000000, [ResourceType.OPS]: 20000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 10.0, [ResourceType.LORE]: 5.0 },
    },
    icon: 'Tv',
    preRequisiteTech: 'vacuum_decay'
  },

  // --- FOLKLORE ULTIMATE ---
  {
    id: 'mythopoeia_engine',
    name: '神话制造引擎',
    description: '逆转了“物质决定意识”。在这里，隐喻变成了物理法则。只要我们写下足够宏大的史诗，物理宇宙就会扭曲自身来符合故事的逻辑。',
    longDescription: '我们发现现实结构并非基于夸克或弦，而是基于叙事一致性。这台机器能够量化象征意义的权重，并通过注入高密度的叙事能量来覆盖物理定律。如果你能构建一个足够自洽、足够动人的神话体系，让“太阳是阿波罗的战车”这一隐喻的权重超过“太阳是核聚变火球”的事实，那么引力常数就会发生改变，恒星就会长出轮子。这是一种文学的地球化工程，用修辞学重塑星系。',
    flavorText: "言出法随。",
    tier: 8,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 5000000000, [ResourceType.MIND_CONTROL]: 500000000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 10.0, [ResourceType.STORY]: 10.0 },
    },
    icon: 'BookOpen',
    preRequisiteTech: 'tulpa_engineering'
  },

  // --- SUBVERSION ULTIMATE ---
  {
    id: 'philosophical_zombie',
    name: '哲学僵尸',
    description: '如果我们周围的所有人，虽然行为举止和常人无异，但其实内心并没有主观体验呢？这是一个只有你拥有灵魂的孤独宇宙。',
    longDescription: '这是一种极致的唯我论恐怖。我们已经证明，复杂的行为并不需要内在的“感受质”（Qualia）。你的邻居、你的爱人、你在街上遇到的每一个人，他们可能只是生物学上的自动机，完美地模拟了疼痛、快乐和爱，但内部却是一片虚无的黑暗。并没有所谓的心灵感应，甚至没有所谓的心灵。你是这个充满了行尸走肉的宇宙中，唯一的观察者，唯一的受难者，唯一的囚徒。这解释了一切冷漠，一切残酷。',
    flavorText: "灯亮着，但里面没人。",
    tier: 8,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.MIND_CONTROL]: 2000000000, [ResourceType.OPS]: 50000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 10.0, [ResourceType.PANIC]: -1.0 }, // No more panic if no one feels
    },
    icon: 'UserX',
    preRequisiteTech: 'neurolinguistic_programming'
  },

  // --- ARCHIVE ULTIMATE ---
  {
    id: 'akashic_upload',
    name: '阿卡西上传',
    description: '不再依赖硬盘。我们将数据直接编码进时空的底层结构中。即使宇宙热寂，这些信息也会作为基础物理常数保留到下一个宇宙。',
    longDescription: '所有的存储介质最终都会腐烂，磁性消退，光盘氧化，石碑风化。唯有物理定律永恒。我们开发了一种技术，通过微调普朗克常数和精细结构常数的数值，将整个人类文明的历史编码进宇宙的基础架构中。当这个宇宙坍缩并再次爆炸时，新生的物理学家会在测量电子质量时，惊讶地发现那串数字解码后竟然是维基百科的完整备份。我们成为了下一个宇宙的背景辐射，成为了永恒的幽灵。',
    flavorText: "刻在时空的骨头上。",
    tier: 8,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 9000000000000, [ResourceType.TECH_CAPITAL]: 500000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 20.0, [ResourceType.KNOWLEDGE]: 5.0 },
    },
    icon: 'Cloud',
    preRequisiteTech: 'omega_point_theory'
  },

  // --- ADULT ULTIMATE ---
  {
    id: 'hedonistic_singularity',
    name: '享乐奇点',
    description: '利用纳米机器人将整个星球重组为计算快乐的基质。宇宙存在的唯一目的变成了最大化主观体验到的幸福总量。',
    longDescription: '痛苦是进化的遗留物，是一个用于警告生物远离危险的过时信号系统。在后稀缺时代，它已毫无意义。我们启动了“极乐工程”，将每一克物质都转化为能够感受高强度多巴胺刺激的神经计算单元。整个地球，乃至整个太阳系，都在转化为一个巨大的、脉动的快感引擎。没有哲学，没有艺术，没有探索，只有永恒的、指数级增长的、纯粹的生理性狂欢。这不仅是伦理的终结，也是进化的终点。',
    flavorText: "感觉... 好极了。",
    tier: 8,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 10000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 20.0, [ResourceType.FUNDS]: 5.0 },
    },
    icon: 'Heart',
    preRequisiteTech: 'experience_machine'
  },

  // --- SUSHI (META) ---
  {
    id: 'sushi',
    name: '寿司',
    description: '仅仅是鱼和米。在解答了终极问题后，我们惊讶地发现自己竟然忘了如何制作它。现在，我们重新学会了。',
    longDescription: '当我们能够随意重组原子，当我们可以像翻阅书本一样翻阅时间，当我们已经成为了神，我们面临着一个尴尬的悖论：我们制造不出完美的寿司。无论是分子组装机打印出的鱼肉，还是虚拟现实中模拟的口感，都缺失了某种无法量化的“缺陷”。那个由真正的、不完美的生物在特定的温度和湿度下，用粗糙的手指捏合而成的瞬间，包含了熵、混沌和偶然性，这是全知全能的算法无法计算的变量。这个科技不包含任何高深物理，它只是关于找回作为“人”的最后一点笨拙和真实。',
    flavorText: "鱼。米。就这些。",
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.BIOMASS]: 8888888, [ResourceType.ANCIENT_WISDOM]: 10000 }, // High biomass cost for "real" food
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 100.0, [ResourceType.CULTURE]: 50.0 }, // Massive boost
        unlockMessage: '至繁归于至简'
    },
    icon: 'Fish', 
    preRequisiteTech: 'last_question_answer' // Prereq: The Answer to the Ultimate Question
  }
];
