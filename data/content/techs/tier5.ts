
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_5_TECHS: Tech[] = [
  {
    id: 'neurolinguistic_programming', 
    name: '神经语言程序学',
    description: '通过特定的语言模式重新编程大脑。洗脑的科学化。',
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
    description: '特斯拉沃登克里弗塔的未竟事业。',
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
    description: '逃离重力井。为了获取资源，我们需要前往小行星带。',
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
    description: '微波听觉效应。直接将声音投射到目标的头骨内。',
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
    name: '亚特兰蒂斯几何学',
    description: '柏拉图描述的完美城市布局实际上是一个能量回路。',
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
    description: '在人类出现之前的几百万年，是否存在过另一个工业文明？化石中不仅有骨头，还有塑料。',
    tier: 5,
    category: BuildingCategory.HISTORY,
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
    name: '群体性心因性疾病',
    description: '利用[恐慌]和[谣言]引发真实的生理症状。',
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
    description: '荣格的原型理论不仅仅是心理学，它是网络的底层架构。',
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
    description: '古代神灵用于控制文明基础功能的程序代码。',
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
    description: '利用全息投影技术在天空中伪造“基督再临”或“外星人入侵”，以建立世界新秩序。',
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
    description: '将大脑算力并入分布式网络。我的意识在服务器机架间跳跃。',
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
    description: '通过编造故事来改写现实。如果足够多的人相信它，它就会成真。',
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
    description: '森林下的互联网。真菌网络传递信息的效率远超光纤。',
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
    description: '如果在特定的角度撞击现实的墙壁，你会掉出边界。',
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
    description: '设计出大脑无法处理的图像。看一眼就会导致系统崩溃。',
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
    description: '只有二次元老婆是完美的。在冰冷的服务器机房里，它是唯一的温暖来源（也是极好的隔音材料）。',
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
    name: '现实转移 (Shifting)',
    description: '通过编写脚本和听潜意识音乐，试图将意识转移到哈利波特的世界。逃避主义的终极形式。',
    tier: 5,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.MIND_CONTROL]: 1000, [ResourceType.LORE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.REALITY]: -0.2, [ResourceType.STORY]: 0.5 },
    },
    icon: 'Shuffle',
    preRequisiteTech: 'lucid_dream_mask'
  },

  // --- NEW FLAVOR TECHS (Tier 5) ---
  {
    id: 'orgone_cloudbuster',
    name: '奥贡云爆器',
    description: '用铜管引导生命能量来消散化学凝尾。这绝对不是普通的 plumbing。',
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
    description: '如果是外星人做的，那就解释得通了。',
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
    description: '顺势疗法的理论基础。服务器也需要补水。',
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
    description: '氧气不是生命之源，而是让你产生“活着”这一幻觉的慢性毒药。戒断反应就是死亡。',
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
    name: 'Tic-Tac 异常',
    description: '没有机翼，没有排气口，瞬间加速到 60 马赫。五角大楼发布的红外视频是真的。',
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
    description: '那个硬盘在当前时间线已经损坏了？没关系，去它还没坏的昨天拿回来。',
    tier: 5,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 2000, [ResourceType.OPS]: 50000 },
    effects: {
        artifactRarityBonus: 0.2, // Rarity Boost
    },
    icon: 'Rewind',
    preRequisiteTech: 'phantom_time'
  }
];
