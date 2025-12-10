
import { Tech, ResourceType } from '../../../types';

export const TIER_7_TECHS: Tech[] = [
  {
    id: 'reality_tunneling', 
    name: '现实隧道 (Reality Tunneling)',
    description: '蒂莫西·利里理论的武器化。每个人都活在自己的现实隧道中，而你掌握了切换开关。',
    tier: 7,
    costs: { [ResourceType.MIND_CONTROL]: 250000, [ResourceType.TRUTH]: 500000 }, // Was 5k/10k
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
    costs: { [ResourceType.OPS]: 50000000000, [ResourceType.TRUTH]: 2500000 }, // Was 1B/50k
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
    costs: { [ResourceType.KNOWLEDGE]: 2500000000, [ResourceType.TECH_CAPITAL]: 1000000000, [ResourceType.OPS]: 5000000000 }, // Was 50M/20M/100M
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
];
