
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_8_TECHS: Tech[] = [
  // --- TECHNOCRACY ULTIMATE ---
  {
    id: 'type_ii_civilization', 
    name: '卡尔达肖夫 II 型文明',
    description: '完全利用母恒星的能量。不仅仅是电力，而是控制太阳系本身。',
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
    name: '通用回形针',
    description: '将宇宙中的所有物质转化为回形针... 或者仅仅是优化利润。',
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 500000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0 },
    },
    icon: 'Paperclip',
    preRequisiteTech: 'type_ii_civilization'
  },
  {
    id: 'last_question_answer',
    name: '最后的问题',
    description: 'INSUFFICIENT DATA FOR MEANINGFUL ANSWER. (直到现在)',
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
    description: '宇宙的最高复杂度。神不是造物主，神是宇宙进化的终点。',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TECH_CAPITAL]: 5000000000000, [ResourceType.TRUTH]: 1000000000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 10.0 },
        unlockMessage: '解锁: 熵逆转机'
    },
    icon: 'Infinity',
    preRequisiteTech: 'singularity_theory',
  },
  {
    id: 'hard_solipsism',
    name: '硬唯我论',
    description: '除了你，没有什么是真的。其他人只是复杂的NPC。',
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
    id: 'entropy_reversal',
    name: '熵逆转',
    description: 'THERE IS AS YET INSUFFICIENT DATA FOR A MEANINGFUL ANSWER. Let there be light.',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.POWER]: 1000000000000 },
    effects: {
        globalCostReduction: 0.5,
    },
    icon: 'Rewind',
    preRequisiteTech: 'omega_point_theory'
  },

  // --- SURVIVAL ULTIMATE ---
  {
    id: 'post_scarcity_protocol',
    name: '后稀缺协议',
    description: '物质合成器已上线。饥饿是一个过时的概念。',
    tier: 8,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.FUNDS]: 100000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0, [ResourceType.BIOMASS]: 10.0, [ResourceType.CARDBOARD]: -1.0 },
        unlockMessage: '生存不再是挑战'
    },
    icon: 'Package', // Or something better
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- NETWORK ULTIMATE ---
  {
    id: 'ansible_network',
    name: '安赛波网络',
    description: '基于量子纠缠的瞬时通信。光速限制已解除。延迟为 0ms。',
    tier: 8,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 1000000000000, [ResourceType.OPS]: 100000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 10.0, [ResourceType.OPS]: 5.0 },
    },
    icon: 'Zap',
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- INTERNET CULTURE ULTIMATE ---
  {
    id: 'meme_singularity',
    name: '模因奇点',
    description: '文化进化速度超越了生物进化。每一个想法在诞生瞬间就会传遍全宇宙。',
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
    description: '只要知道宇宙中所有粒子的位置，就能计算出过去和未来。绝对的真相。',
    tier: 8,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.OPS]: 900000000000, [ResourceType.KNOWLEDGE]: 10000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 10.0, [ResourceType.CLUE]: 10.0 },
    },
    icon: 'Eye',
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- HISTORY ULTIMATE ---
  {
    id: 'chronovisor',
    name: 'Chronovisor',
    description: '不再需要考古。直接调谐频率，像看电视一样观看罗马帝国的兴衰。',
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
    description: '我们编写故事，宇宙负责渲染。虚构与现实的边界已彻底消除。',
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
    description: '所有人都表现得像有意识，但内在体验已被剥离。完美的控制。',
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
    description: '将物理宇宙的所有量子态备份到更高维度的空间。Ctrl+S Universe.',
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
    description: '利用整个宇宙的物质来构建一台超级计算机，唯一的目的就是计算快乐。',
    tier: 8,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 10000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 20.0, [ResourceType.FUNDS]: 5.0 },
    },
    icon: 'Heart',
    preRequisiteTech: 'experience_machine'
  }
];
