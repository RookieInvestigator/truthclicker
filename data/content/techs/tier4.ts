
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
    name: '大数 (Googology)',
    description: '葛立恒数、TREE(3)、Rayo数。当数字大到宇宙无法容纳时，它们就变成了神学。',
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
    name: 'Aklo 语',
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
    id: 'infohazard_containment',
    name: '信息危害 (Infohazard) 协议',
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
    id: 'monarch_programming', 
    name: '帝王计划 (Project Monarch)',
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
    name: '幻影时间假说',
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
    name: '遥视 (Remote Viewing)',
    description: '星门计划（Project Stargate）。超越时空的感知能力。',
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
    name: '二分心智 (Bicameralism)',
    description: '三千年前人类没有意识，只有听从“神的指令”（右脑幻听）。',
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
    name: '泥浆洪水理论 (Tartaria)',
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

  // --- ARCHIVE & VERIFICATION EXPANSION ---
  {
    id: 'zero_knowledge_proofs',
    name: '零知识证明 (ZKP)',
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
    name: '5D 光存储技术',
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
  }
];
