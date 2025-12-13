
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_7_TECHS: Tech[] = [
  {
    id: 'reality_tunneling', 
    name: '现实隧道',
    description: '将蒂莫西·利里的现实隧道理论武器化，既然每个人都活在自己认知的隧道中，你便通过掌握切换这些隧道的开关来主宰现实。',
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
    description: '认识到我们的宇宙处于极不稳定的亚稳态，任何微小的能量波动都可能触发伪真空衰变，导致物理法则像多米诺骨牌一样崩塌。',
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
    description: '技术进步的速度已超越临界点，引发智能爆炸，未来的走向已彻底超越了光速和旧人类认知的极限，奇点已经来临。',
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
    description: '构建了诺齐克设想的体验机，在这个完美的模拟水箱中，你可以无需任何努力，直接体验你想过的任何一种幸福人生。',
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
    description: '当收集的数据量达到行星级别，个体的不可预测性就被统计学淹没，人类历史的演变就像气体分子运动一样变成了可计算的物理学。',
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
    description: '你并不是真的存在，你只是虚空中热力学涨落随机生成的一个拥有瞬间虚假记忆的大脑，下一秒就会消散。',
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
    description: '每当死亡降临，意识就会强制转移到存活的平行时间线，你永远无法体验主观死亡，这与其说是永生，不如说是永恒的诅咒。',
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
    description: '哪怕只是为了万分之一的可能性，也要全力资助超级 AI 的研发，以购买这份保险，免受未来神灵对阻碍者的残酷惩罚。',
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
    description: '在宇宙迈向热寂的终局中，学会了利用时空中最后一点微小的温度梯度差来提取价值，驱动文明苟延残喘。',
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
