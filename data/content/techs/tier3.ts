
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_3_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: INFORMATION WARFARE ---
  {
    id: 'disinformation_campaign',
    name: '虚假信息战',
    description: '真相并不重要，重要的是情绪。用谣言淹没真相。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.FUNDS]: 5000, [ResourceType.SPAM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.4, [ResourceType.PANIC]: 0.2 },
        unlockMessage: '选择路线：混乱散布者'
    },
    icon: 'Megaphone',
    preRequisiteTech: 'social_engineering',
    exclusiveWith: ['fact_check_protocol'],
    highlight: true
  },
  {
    id: 'fact_check_protocol',
    name: '事实核查协议',
    description: '在噪音中建立信号。验证来源，交叉比对，还原真相。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 15000, [ResourceType.CODE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.3, [ResourceType.PANIC]: -0.1 },
        unlockMessage: '选择路线：真相守护者'
    },
    icon: 'FileSearch',
    preRequisiteTech: 'social_engineering',
    exclusiveWith: ['disinformation_campaign'],
    highlight: true
  },

  // --- NEW SUBVERSION TECHS ---
  {
    id: 'avian_surveillance',
    name: '鸟类监控论',
    description: '如果它会飞，它就是间谍。鸟类是政府的无人机。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.TINFOIL]: 20, [ResourceType.INFO]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.TINFOIL]: 0.2 },
        unlockMessage: '解锁: 鸟类干扰器'
    },
    icon: 'Feather',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'cultural_pessimism',
    name: '文化悲观主义',
    description: '文明正不可逆转地衰退。只有回归传统才能拯救我们。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.RED_PILL]: 10, [ResourceType.CULTURE]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RED_PILL]: 0.2 },
        unlockMessage: '解锁: 红丸播客工作室'
    },
    icon: 'Frown',
    preRequisiteTech: 'conspiracy_101'
  },

  // --- NETWORK ---
  {
    id: 'tor_network',
    name: '洋葱路由',
    description: '进入深网。访问 .onion 站点。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CODE]: 2000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.3 },
        unlockMessage: '解锁: 暗网集市' 
    },
    icon: 'Globe',
    preRequisiteTech: 'p2p_sharing', 
  },
  {
    id: 'dark_fiber', 
    name: '暗光纤',
    description: '连接到那些铺设了但从未投入使用的光缆。无限的带宽。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.FUNDS]: 30000, [ResourceType.OPS]: 8000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.3 },
        unlockMessage: '解锁: 骨干网窃听点'
    },
    icon: 'Zap',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'dead_internet_theory', 
    name: '死互联网理论',
    description: '大部分网络流量都是机器人。你可能是唯一的人类。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 40000, [ResourceType.OPS]: 4000 }, 
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '解锁: 僵尸评论工厂'
    },
    icon: 'Bot',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'dead_theory_bot', 
    name: '死理论机器人',
    description: '如果互联网已死，那就利用尸体。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 12000, [ResourceType.SPAM]: 2000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
        recycleEfficiency: 0.1
    },
    icon: 'Skull',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'generative_adversarial_networks',
    name: '生成对抗网络',
    description: '两个AI相互博弈，一个生成假象，一个鉴别真伪。',
    tier: 3,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 15000, [ResourceType.OPS]: 3000 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.2 },
        unlockMessage: '解锁: 深伪演播室 / VTuber'
    },
    icon: 'Copy',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'drone_avionics',
    name: '无人机航电',
    description: '自制的飞行控制器。能够执行超视距任务。',
    tier: 3,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 10000, [ResourceType.OPS]: 2000 },
    effects: {
        unlockMessage: '解锁: 披萨无人机'
    },
    icon: 'Send',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'wiki_wars', 
    name: '编辑战策略',
    description: '如何在维基百科上修改历史而不被封禁。控制真相的定义权。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CULTURE]: 500 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2, [ResourceType.TRUTH]: 0.05 },
        unlockMessage: '解锁: 维基贡献者脚本'
    },
    icon: 'Edit',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'geocities_excavation',
    name: '老网页挖掘',
    description: '恢复闪烁的GIF和标签。死去的个人主页里藏着灵魂。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
    },
    icon: 'Layout',
    preRequisiteTech: 'abandonware_archeology'
  },

  // --- FOLKLORE EXPANSION ---
  {
    id: 'liminal_space_theory',
    name: '阈限空间',
    description: '熙熙攘攘但现在空无一人的场所带来的诡异氛围。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 300, [ResourceType.INFO]: 8000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2, [ResourceType.PANIC]: 0.1 },
        unlockMessage: '解锁: 阈限空间测量员'
    },
    icon: 'Maximize',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'quantum_randonauting',
    name: '量子随机漫步',
    description: '利用量子随机数生成器打破决定论的泡沫。意念引导现实。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.CODE]: 4000, [ResourceType.LORE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: Randonauting 服务器'
    },
    icon: 'MapPin',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'ritual_protocols',
    name: '网络仪式协议',
    description: '电梯游戏、一个人的捉迷藏。这些不仅仅是游戏，是API调用。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 500, [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.25 },
        unlockMessage: '解锁: 电梯游戏站点'
    },
    icon: 'Book',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'digital_dowsing',
    name: '数字探龙针',
    description: '鼠标画五角星。若光标颤抖，说明埋藏着高价值文件。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 800, [ResourceType.INFO]: 5000 },
    effects: {
        artifactChanceMult: 0.1, 
        artifactRarityBonus: 0.05
    },
    icon: 'MapPin',
    preRequisiteTech: 'ritual_protocols'
  },

  // --- ARCHIVE & VERIFICATION EXPANSION ---
  {
    id: 'underwater_cooling',
    name: '水下散热工程',
    description: '海水是免费的冷却剂。如果能解决防水问题，就能拥有无限算力。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.OPS]: 5000, [ResourceType.FUNDS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 海底数据礁'
    },
    icon: 'Waves',
    preRequisiteTech: 'deduplication'
  },
  {
    id: 'graph_theory_analysis',
    name: '图论分析',
    description: '连接点与点。信息不再是孤岛，而是巨大的网络结构。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.25 },
        unlockMessage: '解锁: 引用关系绘图仪'
    },
    icon: 'Network',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'cold_storage_protocols',
    name: '冷存储协议',
    description: '将不再需要的数据冻结起来。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.CODE]: 1000 },
    effects: {
        recycleEfficiency: 0.1,
        unlockMessage: '解锁: 北极代码库'
    },
    icon: 'Snowflake',
    preRequisiteTech: 'data_hoarding_basics'
  },

  // --- HISTORY ---
  {
    id: 'oopart_studies', 
    name: '欧帕兹研究',
    description: 'OOPArt。这些文物不应该存在于那个时代。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.CLUE]: 200, [ResourceType.KNOWLEDGE]: 100 }, 
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.3 },
        unlockMessage: '解锁: 欧帕兹收藏馆'
    },
    icon: 'Box',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'paleo_virology',
    name: '古病毒学',
    description: '冻土融化，古老病毒苏醒。潘多拉魔盒其实是个冰块。',
    tier: 3,
    category: BuildingCategory.CRYPTID,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.1 },
        unlockMessage: '解锁: 冻土钻探机'
    },
    icon: 'Thermometer',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'majestic_12', 
    name: 'MJ-12 文件',
    description: '1947年成立的秘密委员会。负责回收外星飞船。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.CLUE]: 500, [ResourceType.INFO]: 40000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.2, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '解锁: MJ-12 影子服务器'
    },
    icon: 'FileText',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'black_knight_satellite', 
    name: '黑骑士卫星',
    description: '它在极地轨道上运行了13000年。特斯拉曾接收过它的信号。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.OPS]: 12000, [ResourceType.INFO]: 32000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.STORY]: 0.3 },
        unlockMessage: '解锁: 黑骑士卫星解码器'
    },
    icon: 'Satellite',
    preRequisiteTech: 'radio_theory'
  },
  {
    id: 'atmospheric_geoengineering', 
    name: '气溶胶注入',
    description: '所谓的“化学凝尾”其实是改变气候的工程计划。',
    tier: 3,
    category: BuildingCategory.SUBVERSION, // Root
    costs: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.FUNDS]: 25000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
        unlockMessage: '解锁: 凝尾喷洒机'
    },
    icon: 'CloudRain',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'fluoride_calcification', 
    name: '松果体钙化研究',
    description: '水中的氟化物不只为牙齿，而是为了封闭“第三只眼”。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.BIOMASS]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
        unlockMessage: '解锁: 氟化物添加系统'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pseudoscience_marketing'
  },
  {
    id: 'asmr_psyops',
    name: 'ASMR 心理战',
    description: '将低语和咀嚼声武器化。通过极致放松瓦解防御机制。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.PLEASURE]: 100, [ResourceType.MIND_CONTROL]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
    },
    icon: 'Headphones',
    preRequisiteTech: 'social_engineering'
  },
  {
    id: 'crisis_acting', 
    name: '危机演员',
    description: '那些在不同新闻悲剧中出现的同一张面孔。一切都是剧本。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.FUNDS]: 20000, [ResourceType.RUMORS]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.3 },
        unlockMessage: '谣言传播加速'
    },
    icon: 'Drama',
    preRequisiteTech: 'clickbait_tactics'
  },
  {
    id: 'social_engineering', 
    name: '社会工程学',
    description: '人是系统中最薄弱的环节。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 12000, [ResourceType.CRED]: 100 }, 
    effects: {
        unlockMessage: '解锁: 谣言磨坊 / 网络水军基地'
    },
    icon: 'Users',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'targeted_individuals', 
    name: '受控个体',
    description: '不是发疯，真的有一群人在街角用红车灯给你发信号。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 35000, [ResourceType.CRED]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2, [ResourceType.CRED]: -0.1 },
        unlockMessage: '解锁: 集体骚扰中心'
    },
    icon: 'Users',
    preRequisiteTech: 'social_engineering'
  },
  {
    id: 'conspiracy_101',
    name: '阴谋论入门',
    description: '质疑一切。鸟是无人机吗？地球是平的吗？',
    tier: 3,
    category: BuildingCategory.SUBVERSION, // Entry point for Subversion
    costs: { [ResourceType.INFO]: 5000 }, 
    effects: { 
        artifactRarityBonus: 0.1, 
        unlockMessage: '解锁类别: 阴谋论' 
    },
    icon: 'Eye',
    preRequisiteTech: 'forum_culture',
  },
  {
    id: 'memetics', 
    name: '模因论',
    description: '思想像病毒一样传播。理查德·道金斯的噩梦。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.CULTURE]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 模因战中心 / 叙事纺织机'
    },
    icon: 'Dna',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'simp_economics',
    name: '舔狗经济学',
    description: '为了听一句“谢谢大哥”而倾家荡产。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.PLEASURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2, [ResourceType.PLEASURE]: 0.1 },
        unlockMessage: '解锁: 洗澡水灌装线'
    },
    icon: 'Heart',
    preRequisiteTech: 'rule_34'
  },
  {
    id: 'character_worship',
    name: '怪谈崇拜',
    description: '杰夫杀手是被误解的偶像。在硬盘深处为他建立祭坛。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.LORE]: 200, [ResourceType.PLEASURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
        clickPowerMult: 0.15
    },
    icon: 'Heart',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'quantum_luck',
    name: '量子观测学',
    description: '只要你不看，猫就既是活的又是死的。',
    tier: 3,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.OPS]: 5000, [ResourceType.CLUE]: 50 },
    effects: {
        unlockMessage: '解锁: 概率操纵器'
    },
    icon: 'Dices',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'hedonistic_imperative',
    name: '享乐主义命令',
    description: '生物工程的终极目标是消除所有痛苦。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 200, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.3 },
        unlockMessage: '解锁: 远程触觉反馈'
    },
    icon: 'Smile',
    preRequisiteTech: 'rule_34'
  },

  // --- NEW FLAVOR TECHS (Tier 3) ---
  {
    id: 'mixers_and_tumblers',
    name: '混币服务',
    description: '洗钱 101。确保资金来源不可追踪。',
    tier: 3,
    category: BuildingCategory.CAPITAL, // Changed
    costs: { [ResourceType.FUNDS]: 15000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.15 },
    },
    icon: 'Shuffle',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'glitch_aesthetic',
    name: '故障美学',
    description: '数据损坏也是一种艺术形式。拥抱混乱。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 30000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.15 },
        unlockMessage: '解锁: 数据损坏艺术室'
    },
    icon: 'ZapOff',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'no_log_vpn',
    name: '无日志 VPN',
    description: '位于废弃石油钻井平台上的服务器。我们什么都没看见。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.FUNDS]: 5000 },
    effects: {
        globalCostReduction: 0.05,
    },
    icon: 'Shield',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'aesthetics_police',
    name: '视觉风格纠察',
    description: '“是Outrun不是Vaporwave！” 对美学标签的病态执着。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CULTURE]: 200, [ResourceType.SPAM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.25, [ResourceType.SPAM]: 0.1 },
    },
    icon: 'Palette',
    preRequisiteTech: 'glitch_aesthetic'
  },
  {
    id: 'speculative_biology',
    name: '猜想演化',
    description: '人类被基因改造会怎样？推演未来的恐怖生态。',
    tier: 3,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.BIOMASS]: 500, [ResourceType.INFO]: 15000, [ResourceType.FOSSIL]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: 未来演化沙盘'
    },
    icon: 'Dna',
    preRequisiteTech: 'cryptozoology'
  },
  {
    id: 'foo_fighters',
    name: '不明飞行物档案',
    description: '二战飞行员报告的发光球体。既非纳粹也非盟军武器。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.LORE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.1, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '天空之眼'
    },
    icon: 'Plane',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'simulation_realism',
    name: '模拟真实主义',
    description: '为赢坦克装甲厚度的争论，发送真实的军事机密文件。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.CRED]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 0.2 },
        unlockMessage: '解锁: 游戏论坛泄密者'
    },
    icon: 'Gamepad2',
    preRequisiteTech: 'wiki_wars'
  }
];
