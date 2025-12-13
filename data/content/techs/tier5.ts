
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_5_TECHS: Tech[] = [
  {
    id: 'neurolinguistic_programming', 
    name: '神经语言程序学',
    description: '精通通过特定的语言模式和非语言线索来重新编程人类大脑的反应机制，这实际上就是一种科学化、系统化的洗脑术。',
    tier: 5,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 750000, [ResourceType.CULTURE]: 30000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 阈下信息站'
    },
    icon: 'MessageCircle',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'wireless_power', 
    name: '无线能量传输',
    description: '复兴了尼古拉·特斯拉在沃登克里弗塔留下的未竟事业，通过地球电离层共振实现全球范围内的无线能量传输。',
    tier: 5,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.POWER]: 150000, [ResourceType.OPS]: 80000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.3 },
        unlockMessage: '解锁: 特斯拉线圈阵列'
    },
    icon: 'Zap',
    preRequisiteTech: 'cold_fusion'
  },
  {
    id: 'orbital_mechanics',
    name: '轨道力学',
    description: '精通复杂的轨道力学计算，这是逃离地球重力井束缚的关键，为了获取无限的资源，人类的征途必须指向小行星带。',
    tier: 5,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 250000, [ResourceType.TECH_CAPITAL]: 5000 },
    effects: {
        unlockMessage: '解锁: 戴森云原型 / 冯·诺依曼探测器'
    },
    icon: 'Rocket',
    preRequisiteTech: 'wireless_power'
  },
  {
    id: 'v2k_technology', 
    name: 'V2K 技术',
    description: '利用微波听觉效应技术，绕过耳朵将经过调制的语音信号直接投射到目标的头骨内部，让他们以为听到了上帝的声音。',
    tier: 5,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 150000, [ResourceType.MIND_CONTROL]: 2500 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.5 },
        unlockMessage: '解锁: 5G 信号塔'
    },
    icon: 'Radio',
    preRequisiteTech: 'monarch_programming'
  },
  {
    id: 'atlantean_knowledge', 
    name: '亚特兰蒂斯几何',
    description: '破译出柏拉图笔下亚特兰蒂斯同心圆状的城市布局并非为了美观，而是一个巨大的、用于收集地磁能量的谐振回路。',
    tier: 5,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 600, [ResourceType.KNOWLEDGE]: 30000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.3 },
    },
    icon: 'Triangle',
    preRequisiteTech: 'mud_flood'
  },
  {
    id: 'silurian_hypothesis',
    name: '志留纪假说',
    description: '寻找地质层中的同位素异常和塑料微粒，试图证明在人类出现之前的几百万年里，地球上曾存在过一个未知的工业文明。',
    tier: 5,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.FOSSIL]: 500, [ResourceType.ANCIENT_WISDOM]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.2 },
        unlockMessage: '解锁: 前人类工业废墟'
    },
    icon: 'Layers',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'mass_psychogenic_illness', 
    name: '群体心因病',
    description: '通过精心设计的恐慌叙事和谣言传播，在群体中引发真实的生理不适和症状，证明了心理暗示拥有致病的物理力量。',
    tier: 5,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.PANIC]: 6000, [ResourceType.RUMORS]: 6000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.5 },
    },
    icon: 'Activity',
    preRequisiteTech: 'crisis_acting'
  },
  {
    id: 'collective_unconscious', 
    name: '集体潜意识测绘',
    description: '意识到卡尔·荣格提出的集体潜意识原型不仅仅是心理学概念，它们实际上是构成人类精神网络的底层操作系统架构。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.LORE]: 15000, [ResourceType.MIND_CONTROL]: 3000 }, 
    effects: {
        unlockMessage: '解锁: 诺斯圈天线'
    },
    icon: 'Globe',
    preRequisiteTech: 'aklo_language'
  },
  {
    id: 'sumerian_me', 
    name: '苏美尔 Me',
    description: '发现苏美尔神话中的“Me”并非抽象的神力，而是一套可执行的程序代码，用于加载和控制文明的基础功能模块。',
    tier: 5,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 2500, [ResourceType.CODE]: 300000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.5, [ResourceType.OPS]: 0.5 },
    },
    icon: 'FileCode',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'project_blue_beam', 
    name: '蓝光计划',
    description: '利用近地轨道卫星进行大规模全息投影，伪造“救世主降临”或“外星人入侵”的幻象，以此恐吓全球民众接受新秩序。',
    tier: 5,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.FUNDS]: 3000000, [ResourceType.OPS]: 800000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 1.5, [ResourceType.TRUTH]: -0.5 },
        unlockMessage: '解锁: 天空全息投影仪'
    },
    icon: 'Projector',
    preRequisiteTech: 'atmospheric_geoengineering'
  },
  {
    id: 'neural_cloud',
    name: '神经云',
    description: '将自己的大脑算力无缝并入分布式云端网络，意识不再局限于肉体，而是在全球的服务器机架和光缆之间自由跳跃。',
    tier: 5,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.OPS]: 50000, [ResourceType.BIOMASS]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
    },
    icon: 'CloudLightning',
    preRequisiteTech: 'neural_link_proto'
  },
  {
    id: 'hyperstition',
    name: '超虚构',
    description: '通过编造并传播具有自我实现能力的虚构故事来改写现实，因为当足够多的人相信一个谎言时，它就会坍缩成真理。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.STORY]: 1000, [ResourceType.REALITY]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.REALITY]: -0.1, [ResourceType.PROBABILITY]: 0.2 },
    },
    icon: 'BookOpen',
    preRequisiteTech: 'memetics'
  },
  
  // --- ARCHIVE EXPANSION ---
  {
    id: 'mycelial_network_theory',
    name: '菌丝网络理论',
    description: '研究森林土壤下庞大的真菌菌丝网络，发现这种古老的生物互联网在传递化学信号和资源时的效率和鲁棒性远超光纤。',
    tier: 5,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.BIOMASS]: 10000, [ResourceType.KNOWLEDGE]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.25 },
        unlockMessage: '解锁: 菌丝数据节点'
    },
    icon: 'Sprout',
    preRequisiteTech: 'biohacking_basics'
  },

  // --- FOLKLORE EXPANSION ---
  {
    id: 'noclipping_physics',
    name: '穿模物理学',
    description: '掌握了利用现实物理引擎漏洞的技巧，只要以特定的速度和角度撞击墙壁，就能穿模掉出世界边界，进入虚空。',
    tier: 5,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 5000, [ResourceType.TECH_CAPITAL]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.3, [ResourceType.TRUTH]: 0.1 },
        unlockMessage: '解锁: 现实故障探测器'
    },
    icon: 'Minimize2',
    preRequisiteTech: 'liminal_space_theory'
  },
  {
    id: 'cognitohazard_design',
    name: '认知危害设计',
    description: '利用神经科学原理设计出人脑无法处理的认知危害图像，任何看到它的人都会因为视觉皮层过载而导致意识系统崩溃。',
    tier: 5,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 8000, [ResourceType.MIND_CONTROL]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.3 },
        unlockMessage: '解锁: 认知危害收容单元'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'infohazard_containment'
  },
  {
    id: 'body_pillow_comfort',
    name: '等身抱枕架构',
    description: '在冰冷的服务器机房里，等身抱枕不仅是完美的二次元精神伴侣，还是极佳的隔音和保暖材料，提供了唯一的温度。',
    tier: 5,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 2000, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.25 },
        clickPowerMult: 0.2
    },
    icon: 'Moon',
    preRequisiteTech: 'hedonistic_imperative'
  },
  {
    id: 'reality_shifting',
    name: '现实转移',
    description: '编写详细的脚本并配合潜意识音乐，试图将自己的意识彻底转移到理想的虚构现实中，这是逃避主义的终极形式。',
    tier: 5,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.MIND_CONTROL]: 1000, [ResourceType.LORE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.REALITY]: -0.2, [ResourceType.STORY]: 0.5 },
    },
    icon: 'Shuffle',
    preRequisiteTech: 'lucid_dream_mask'
  },
  {
    id: 'idol_trinity',
    name: '偶像三身',
    description: '一人分饰三角，同时运营着当红虚拟偶像、硬核阴谋论调查员和神秘宗教教主的账号，构建三位一体的流量收割机。',
    tier: 5,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.FOLLOWERS]: 100000, [ResourceType.PLEASURE]: 50000, [ResourceType.INFO]: 200000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.5, [ResourceType.FUNDS]: 0.3, [ResourceType.CRED]: 0.2 },
        unlockMessage: '全网出道'
    },
    icon: 'Sparkles',
    preRequisiteTech: 'body_pillow_comfort'
  },

  // --- NEW FLAVOR TECHS (Tier 5) ---
  {
    id: 'orgone_cloudbuster',
    name: '奥贡云爆器',
    description: '架设起威廉·赖希发明的奥贡云爆器，利用这些看似普通的金属管道引导生命能量，驱散天空中充满化学毒素的凝尾。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.CARDBOARD]: 2000, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.15 },
    },
    icon: 'Cloud',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'ancient_aliens_dvd',
    name: '远古外星人全集',
    description: '收集了全套《远古外星人》纪录片，一旦遇到无法用现有科学解释的历史谜题，就搬出“外星人”这个万能答案。',
    tier: 5,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.FUNDS]: 5000, [ResourceType.INFO]: 200000 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.1 },
    },
    icon: 'Disc',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'water_memory',
    name: '水记忆理论',
    description: '坚信水具有记忆能力，能保留其接触过的物质的信息，这不仅是顺势疗法的基础，或许连服务器的液冷系统也有灵性。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 2000, [ResourceType.BIOMASS]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2 },
    },
    icon: 'Droplets',
    preRequisiteTech: 'mass_psychogenic_illness'
  },
  {
    id: 'oxygen_toxicity',
    name: '氧气致幻',
    description: '得出了一个惊人的结论：氧气实际上是一种慢性致幻毒药，它让我们产生了长达 80 年的“活着”的幻觉，戒断即死亡。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 5000000 },
    effects: {
        unlockMessage: '新资源发现: 氧气 - 停止呼吸以接近真相',
        resourceMultipliers: { [ResourceType.REALITY]: -0.1 }
    },
    icon: 'Wind',
    preRequisiteTech: 'collective_unconscious'
  },
  {
    id: 'tic_tac_uap',
    name: 'UAP异常',
    description: '分析五角大楼泄露的视频，那个像 Tic-Tac 糖一样的飞行器没有机翼和排气口却能瞬间加速到 60 马赫，这绝对不是人类技术。',
    tier: 5,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.TRUTH]: 200, [ResourceType.INFO]: 100000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1, [ResourceType.PANIC]: 0.1 },
        unlockMessage: '非人类技术确认'
    },
    icon: 'Circle', // Closest to Tic-Tac shape
    preRequisiteTech: 'black_knight_satellite'
  },
  {
    id: 'retrocausal_looting',
    name: '逆因果掠夺',
    description: '利用逆因果技术解决数据丢失问题，既然硬盘现在坏了，那就从时间线上它还没坏的昨天把它直接“拿”到现在。',
    tier: 5,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 2000, [ResourceType.OPS]: 50000 },
    effects: {
        artifactRarityBonus: 0.2, // Rarity Boost
    },
    icon: 'Rewind',
    preRequisiteTech: 'phantom_time'
  },
  {
    id: 'divine_rng',
    name: '神圣随机数',
    description: '爱因斯坦错了，上帝不仅掷骰子，还使用线性同余生成器。通过分析随机数中的微小偏差，试图解读出神的旨意。',
    tier: 5,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.CODE]: 50000, [ResourceType.ANCIENT_WISDOM]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.PROBABILITY]: 0.3, [ResourceType.TRUTH]: 0.05 },
        unlockMessage: '随机性即神性'
    },
    icon: 'Dices',
    preRequisiteTech: 'holy_c_compiler'
  }
];
