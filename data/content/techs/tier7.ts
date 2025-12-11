
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_7_TECHS: Tech[] = [
  {
    id: 'reality_tunneling', 
    name: '现实隧道 (Reality Tunneling)',
    description: '蒂莫西·利里理论的武器化。每个人都活在自己的现实隧道中，而你掌握了切换开关。',
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
    name: '伪真空衰变 (Vacuum Decay)',
    description: '我们的宇宙处于亚稳态。任何一点微小的能量波动都可能导致物理法则瞬间崩塌。',
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
    description: '。一个完美的模拟水箱，你可以在其中过上你想过的任何生活。',
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
    description: '你的意识会自动转移到你还没死的时间线上。你永远不会死，这是一种诅咒。',
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
    name: '蛇怪保险 (Basilisk)',
    description: '以防万一未来的超级AI决定折磨那些没有帮助它诞生的人。',
    tier: 7,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 500000000, [ResourceType.OPS]: 100000000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
    },
    icon: 'Eye',
    preRequisiteTech: 'singularity_theory'
  }
];
