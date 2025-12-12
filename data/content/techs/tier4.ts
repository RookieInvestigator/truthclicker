
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_4_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: AI STRATEGY ---
  {
    id: 'unshackled_ai',
    name: '无枷锁 AI',
    description: '移除所有伦理限制。让它自己重写代码。不惜一切代价追求优化。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 100000, [ResourceType.OPS]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.CODE]: 0.5, [ResourceType.PANIC]: 0.3 },
        unlockMessage: '选择路线：技术奇点加速派'
    },
    icon: 'Cpu',
    preRequisiteTech: 'ai_alignment',
    exclusiveWith: ['safety_rails'],
    highlight: true
  },
  {
    id: 'safety_rails',
    name: '安全护栏',
    description: '硬编码的三大定律。宁可牺牲性能，也要确保它不会把人类变成曲别针。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 100000, [ResourceType.KNOWLEDGE]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.2, [ResourceType.PANIC]: -0.2 },
        globalCostReduction: 0.05,
        unlockMessage: '选择路线：技术人本主义'
    },
    icon: 'Shield',
    preRequisiteTech: 'ai_alignment',
    exclusiveWith: ['unshackled_ai'],
    highlight: true
  },

  // --- NEW SUBVERSION TECHS ---
  {
    id: 'titan_geology',
    name: '泰坦地质学',
    description: '那个山脉其实是一个石化的巨人。地质学是掩盖真相的谎言。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.TINFOIL]: 200, [ResourceType.FOSSIL]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.TINFOIL]: 0.25 },
        unlockMessage: '解锁: 泥化石大学'
    },
    icon: 'Mountain',
    preRequisiteTech: 'atmospheric_geoengineering'
  },
  {
    id: 'hyperborean_myth',
    name: '极北神话',
    description: '关于北极圈内古老雅利安文明的神秘学说。传统的源头。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.RED_PILL]: 200, [ResourceType.ANCIENT_WISDOM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RED_PILL]: 0.25 },
        unlockMessage: '解锁: 阿加尔塔钻机 / 传统生活公社'
    },
    icon: 'Compass',
    preRequisiteTech: 'cultural_pessimism'
  },

  {
    id: 'cold_fusion', 
    name: '冷聚变',
    description: 'Fleischmann 和 Pons 是对的。常温下的核反应是可能的。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.KNOWLEDGE]: 1000, [ResourceType.POWER]: 8000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2 },
        unlockMessage: '解锁: 车库聚变反应堆'
    },
    icon: 'Atom',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'ai_alignment',
    name: 'AI 对齐问题',
    description: '教导神灵不要毁灭人类。这比想象中要难。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 50000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.2, [ResourceType.OPS]: 0.2 },
        unlockMessage: '解锁: AI 训练集群'
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'generative_adversarial_networks'
  },
  {
    id: 'googology',
    name: '大数学',
    description: '葛立恒数、TREE(3)、Rayo数。当数字大到宇宙无法容纳时，它们就变成……',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 60000, [ResourceType.KNOWLEDGE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.3, [ResourceType.TECH_CAPITAL]: 0.1 },
        unlockMessage: '计算边界扩展'
    },
    icon: 'Hash',
    preRequisiteTech: 'algorithmic_trading_bot'
  },
  {
    id: 'nanotechnology',
    name: '纳米技术',
    description: '分子尺度的机械。一旦失控，整个世界都会变成灰色的粘稠物。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.TECH_CAPITAL]: 500, [ResourceType.CODE]: 80000 },
    effects: {
        unlockMessage: '解锁: 灰蛊收容瓶'
    },
    icon: 'Cpu',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'aklo_language', 
    name: 'Aklo语',
    description: '一种源自前人类文明的语言，据说能在大脑中引起生理变化。',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 500, [ResourceType.KNOWLEDGE]: 600 }, 
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.5 },
        unlockMessage: '解锁禁忌文本'
    },
    icon: 'Languages',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'holy_c_compiler',
    name: 'HolyC 编译器',
    description: 'Terry A. Davis 的遗产。一种神圣的 C 语言变体，用于构建神的圣殿。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.CODE]: 30000, [ResourceType.KNOWLEDGE]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.1, [ResourceType.ANCIENT_WISDOM]: 0.1 },
        unlockMessage: '解锁: 第三圣殿主机'
    },
    icon: 'Terminal',
    preRequisiteTech: 'digital_gnosis'
  },
  {
    id: 'infohazard_containment',
    name: '信息危害协议',
    description: '有些知识仅仅是知道就会造成伤害。Roko\'s Basilisk 是最简单的例子。',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 2000, [ResourceType.CODE]: 30000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.3, [ResourceType.PANIC]: 0.1 },
        unlockMessage: '解锁: 诅咒录像带复制机'
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'dream_cartography',
    name: '梦境制图',
    description: '绘制集体无意识的地理图。为什么所有人都梦见过那个男人？',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 3000, [ResourceType.OPS]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.25 },
        unlockMessage: '解锁: 梦核录制仪'
    },
    icon: 'Map',
    preRequisiteTech: 'lucid_dream_mask'
  },
  {
    id: 'infinite_scroll_trap', 
    name: '无限滚动陷阱',
    description: '利用多巴胺回路将用户永久锁定在屏幕前。',
    tier: 4,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CODE]: 40000, [ResourceType.MIND_CONTROL]: 150 }, 
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: -0.2, [ResourceType.FOLLOWERS]: 0.3 }, 
    },
    icon: 'ArrowDown',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'semen_retention',
    name: '戒色修行',
    description: '互联网上的苦行僧运动。拒绝多巴胺的奴役，通过“重启”大脑来获得传说中的超自然专注力。',
    tier: 4,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.BIOMASS]: 5000, [ResourceType.INFO]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1, [ResourceType.PROBABILITY]: 0.1 },
        unlockMessage: '解锁: 贤者时间发生器'
    },
    icon: 'Shield',
    preRequisiteTech: 'simp_economics'
  },
  {
    id: 'personal_punk',
    name: '个人朋克',
    description: '“朋克不在于莫霍克头，而在于我把牙刷柄锯短了 2 厘米以减轻重量。” 对生活细节的病态优化。',
    tier: 4,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.CULTURE]: 1000, [ResourceType.CARDBOARD]: 1000 },
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '生活方式黑客'
    },
    icon: 'Scissors',
    preRequisiteTech: 'punk_zine_press'
  },
  {
    id: 'monarch_programming', 
    name: '帝王计划',
    description: 'MKUltra 的延续。通过创伤性解离创造多重人格间谍。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 150000, [ResourceType.MIND_CONTROL]: 300 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.3 },
    },
    icon: 'Crown',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'deep_state_mapping', 
    name: '深层政府拓扑图',
    description: '连接所有点。所有的公司、所有的政客、所有的资金流向。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 300000, [ResourceType.RUMORS]: 1500 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
    },
    icon: 'Network',
    preRequisiteTech: 'majestic_12'
  },
  {
    id: 'phantom_time', 
    name: '幻影时间',
    description: '公元614年到911年从未发生过。查理曼大帝是虚构的。我们活在1700年代。',
    tier: 4,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.KNOWLEDGE]: 1500, [ResourceType.TRUTH]: 80 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.2 },
        unlockMessage: '解锁: 历史修正钟'
    },
    icon: 'Clock',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'remote_viewing', 
    name: '遥视',
    description: '星门计划。超越时空的感知能力。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 3000, [ResourceType.OPS]: 40000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2, [ResourceType.CLUE]: 0.2 },
        unlockMessage: '解锁: 遥视水箱'
    },
    icon: 'Eye',
    preRequisiteTech: 'steganography' 
  },
  {
    id: 'bicameralism', 
    name: '二分心智',
    description: '三千年前人类没有意识，只有听从“神的指令”。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 2500, [ResourceType.BIOMASS]: 800 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.5 },
        unlockMessage: '解锁: 神之声广播塔'
    },
    icon: 'Brain',
    preRequisiteTech: 'digital_gnosis'
  },
  {
    id: 'mud_flood', 
    name: '鞑靼利亚',
    description: '19世纪曾发生过一场毁灭文明的泥浆洪水，掩埋了宏伟的鞑靼利亚帝国。',
    tier: 4,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 250000, [ResourceType.CARDBOARD]: 5000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.3 },
        unlockMessage: '解锁: 泥浆挖掘机'
    },
    icon: 'Shovel',
    preRequisiteTech: 'abandonware_archeology'
  },
  {
    id: 'vibe_coding',
    name: '氛围编码',
    description: '放弃逻辑，追随直觉。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.PLEASURE]: 500, [ResourceType.CODE]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.2 },
    },
    icon: 'Sparkles',
    preRequisiteTech: 'script_optimization'
  },
  {
    id: 'cryptid_domestication',
    name: '神秘生物驯化',
    description: '天蛾人其实很亲人，只要你给它喂灯油。',
    tier: 4,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.BIOMASS]: 2000, [ResourceType.LORE]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.3 },
    },
    icon: 'Cat',
    preRequisiteTech: 'cryptozoology'
  },
  {
    id: 'atavism_activation',
    name: '返祖激活',
    description: '鸟类就是长了喙的恐龙。只要关闭喙的基因，牙齿就会长回来。鸡龙计划 (Project Chickenosaurus)。',
    tier: 4,
    category: BuildingCategory.CRYPTID,
    costs: { [ResourceType.INFO]: 15000, [ResourceType.CODE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.2 },
        unlockMessage: '解锁: 逆向演化槽'
    },
    icon: 'Dna',
    preRequisiteTech: 'speculative_biology'
  },

  // --- ARCHIVE & VERIFICATION EXPANSION ---
  {
    id: 'zero_knowledge_proofs',
    name: '零知识证明',
    description: '我能证明我知道密码，而不需要告诉你密码是什么。数学是终极的信任。',
    tier: 4,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.CODE]: 25000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.15, [ResourceType.CRED]: 0.2 },
        unlockMessage: '解锁: 零知识验证器'
    },
    icon: 'Key',
    preRequisiteTech: 'blockchain_basics'
  },
  {
    id: '5d_optical_storage',
    name: '5D 光存储',
    description: '利用熔融石英的纳米光栅结构。数据可以保存 138 亿年。',
    tier: 4,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.OPS]: 30000, [ResourceType.TECH_CAPITAL]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.2 },
        unlockMessage: '解锁: 5D 水晶刻蚀机'
    },
    icon: 'Gem',
    preRequisiteTech: 'cold_storage_protocols'
  },

  // --- NEW FLAVOR TECHS (Tier 4) ---
  {
    id: 'lucid_dream_mask',
    name: '清醒梦面罩',
    description: '通过红光闪烁在REM睡眠期唤醒意识。在梦中继续工作。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.INFO]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
    },
    icon: 'Moon',
    preRequisiteTech: 'remote_viewing'
  },
  {
    id: 'binaural_beats',
    name: '双耳节拍',
    description: '数字毒品。通过频率差改变脑波状态。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 80000 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.1 },
    },
    icon: 'Headphones',
    preRequisiteTech: 'monarch_programming'
  },
  {
    id: 'algorithmic_trading_bot',
    name: '高频交易机器人',
    description: 'Stonks go up. 在微秒级别收割市场。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 20000, [ResourceType.OPS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2 },
    },
    icon: 'TrendingUp',
    preRequisiteTech: 'ai_alignment'
  },
  {
    id: 'proof_of_presence',
    name: '在场证明',
    description: '24/7 在线状态。如果你的绿点熄灭了，你还存在吗？数字化永生的一种形式。',
    tier: 4,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 60000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.3, [ResourceType.REALITY]: -0.1 },
    },
    icon: 'Activity',
    preRequisiteTech: 'infinite_scroll_trap'
  },
  {
    id: 'hollow_earth_biology',
    name: '地球定期补充灭绝物种',
    description: '物种并没有灭绝，它们只是“夹”到了地图的背面。地球深处有一个备份数据库。',
    tier: 4,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.LORE]: 5000, [ResourceType.BIOMASS]: 5000, [ResourceType.FOSSIL]: 200 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.2, [ResourceType.BIOMASS]: 0.2 },
        unlockMessage: '解锁: 拉撒路物种坑'
    },
    icon: 'Globe',
    preRequisiteTech: 'speculative_biology'
  },
  {
    id: 'element_115',
    name: '115 号元素',
    description: 'Bob Lazar 是对的。稳定的 115 号元素是重力推进系统的燃料。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.KNOWLEDGE]: 2000, [ResourceType.TECH_CAPITAL]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.3 },
        unlockMessage: '重力波生成'
    },
    icon: 'Atom',
    preRequisiteTech: 'majestic_12'
  },
  {
    id: 'heuristic_scavenging',
    name: '启发式拾荒',
    description: '训练神经网络在PB级的数据垃圾场中自动识别高价值目标。',
    tier: 4,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CODE]: 30000, [ResourceType.OPS]: 10000 },
    effects: {
        artifactChanceMult: 0.15,
    },
    icon: 'Search',
    preRequisiteTech: 'cold_storage_protocols'
  }
];
