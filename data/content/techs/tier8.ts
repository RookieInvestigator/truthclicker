
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_8_TECHS: Tech[] = [
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
    id: 'omega_point_theory',
    name: '欧米茄点 (Omega Point)',
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

  // --- NEW FLAVOR TECHS (Tier 8) ---
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
  }
];
