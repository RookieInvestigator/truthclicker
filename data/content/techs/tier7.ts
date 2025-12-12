
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_7_TECHS: Tech[] = [
  {
    id: 'reality_tunneling', 
    name: '现实隧道',
    description: '蒂莫西·利里理论武器化。每个人活在隧道，你掌握开关。',
    tier: 7,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.MIND_CONTROL]: 250000, [ResourceType.TRUTH]: 500000 }, 
    effects: {
        unlockMessage: '解锁: 现实锚点'
    },
    icon: 'Disc',
    preRequisiteTech: 'psychotronic_generators'
  },
  {
    id: 'vacuum_decay',
    name: '伪真空衰变',
    description: '宇宙处于亚稳态。微小能量波动导致物理法则崩塌。',
    tier: 7,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 50000000000, [ResourceType.TRUTH]: 2500000 }, 
    effects: { 
        clickPowerMult: 5.0,
        unlockMessage: '解锁: 伪真空稳定器'
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'zero_point_energy',
  },
  {
    id: 'singularity_theory',
    name: '技术奇点',
    description: '智能爆炸。超越光速，超越认知。',
    tier: 7,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.KNOWLEDGE]: 2500000000, [ResourceType.TECH_CAPITAL]: 1000000000, [ResourceType.OPS]: 5000000000 }, 
    effects: { 
        resourceMultipliers: { 
            [ResourceType.INFO]: 2, [ResourceType.FUNDS]: 2, [ResourceType.CODE]: 2, [ResourceType.OPS]: 2,
            [ResourceType.CLUE]: 2, [ResourceType.KNOWLEDGE]: 2, [ResourceType.TRUTH]: 2
        },
        unlockMessage: '奇点临近' 
    },
    icon: 'Zap',
    preRequisiteTech: 'zero_point_energy', 
  },
  {
    id: 'experience_machine',
    name: '体验机',
    description: '一个完美的模拟水箱，你可以在其中过上你想过的任何生活。',
    tier: 7,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 5000000, [ResourceType.OPS]: 5000000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 1.0, [ResourceType.REALITY]: -0.5 },
        unlockMessage: '再见，残酷的现实'
    },
    icon: 'Monitor',
    preRequisiteTech: 'limbic_overclocking'
  },
  
  // --- HIGH INFO COST TECHS ---
  {
    id: 'psychohistory',
    name: '心理史学',
    description: '数据量足够大，个体不可预测性消失，历史变成物理学。',
    tier: 7,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 100000000, [ResourceType.KNOWLEDGE]: 1000000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.FUNDS]: 0.5 },
    },
    icon: 'BarChart',
    preRequisiteTech: 'panopticon_algorithm'
  },

  // --- NEW FLAVOR TECHS (Tier 7) ---
  {
    id: 'boltzmann_brain_theory',
    name: '玻尔兹曼大脑',
    description: '你不是真的存在。你只是热力学涨落随机生成的瞬间记忆。',
    tier: 7,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TRUTH]: 1000000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 1.0 },
    },
    icon: 'Brain',
    preRequisiteTech: 'vacuum_decay'
  },
  {
    id: 'quantum_immortality',
    name: '量子永生',
    description: '意识转移到没死的时间线。永远不死，这是一种诅咒。',
    tier: 7,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.BIOMASS]: 1000000, [ResourceType.TRUTH]: 500000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.5 },
    },
    icon: 'Infinity',
    preRequisiteTech: 'reality_tunneling'
  },
  {
    id: 'basilisk_insurance',
    name: '蛇怪保险',
    description: '以防万一未来的超级AI决定折磨那些没有帮助它诞生的人。',
    tier: 7,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 500000000, [ResourceType.OPS]: 100000000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
    },
    icon: 'Eye',
    preRequisiteTech: 'singularity_theory'
  },
  {
    id: 'entropic_mining',
    name: '熵增采矿',
    description: '从宇宙的热寂中提取价值。利用微小的温度梯度差来驱动文明。',
    tier: 7,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.OPS]: 10000000, [ResourceType.POWER]: 5000000 },
    effects: {
        artifactChanceMult: 0.5,
    },
    icon: 'Pickaxe',
    preRequisiteTech: 'vacuum_decay'
  }
];
