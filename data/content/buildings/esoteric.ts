
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const ESOTERIC_BUILDINGS: Building[] = [
  {
    id: 'orgone_accumulator',
    name: '奥贡能量收集器',
    description: '威廉·赖希的禁忌发明。收集生命能量。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.CARDBOARD]: 500, [ResourceType.BIOMASS]: 100 },
    baseProduction: { [ResourceType.BIOMASS]: 5.0, [ResourceType.LORE]: 1.0, [ResourceType.POWER]: 10.0 }, 
    costMultiplier: 1.4,
    icon: 'Box',
    unlockRequirement: 0, // Reset
    requireTech: ['pseudoscience_marketing'],
  },
  {
    id: 'temple_os_rig',
    name: '第三圣殿主机',
    description: '一台完全运行 TempleOS 的机器。在 640x480 的 16 色画面中聆听神的随机数。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.CODE]: 10000, [ResourceType.ANCIENT_WISDOM]: 500 },
    baseProduction: { [ResourceType.TRUTH]: 0.001, [ResourceType.CODE]: 10.0, [ResourceType.ANCIENT_WISDOM]: 1.0 }, // 0.001 OK
    costMultiplier: 1.6,
    icon: 'Monitor',
    unlockRequirement: 0,
    requireTech: ['holy_c_compiler'],
  },
  {
    id: 'tinfoil_faraday_cage',
    name: '全身法拉第笼',
    description: '彻底隔绝所有电磁波。在这里，你只能听到自己的血液流动。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.FUNDS]: 2000, [ResourceType.TINFOIL]: 500 }, // Costs Tinfoil now
    baseProduction: { [ResourceType.TRUTH]: 0.005, [ResourceType.PANIC]: -5.0, [ResourceType.MIND_CONTROL]: -2.0 }, 
    costMultiplier: 1.5,
    icon: 'Shield',
    unlockRequirement: 0, // Reset
    requireTech: ['conspiracy_101'],
  },
  {
    id: 'probability_manipulator',
    name: '概率操纵器',
    description: '利用量子观测效应，强行塌缩出有利的结果。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.OPS]: 5000, [ResourceType.FUNDS]: 10000 },
    baseProduction: { [ResourceType.PROBABILITY]: 0.1, [ResourceType.POWER]: -50.0 }, 
    costMultiplier: 1.6,
    icon: 'Dices',
    unlockRequirement: 0, // Reset
    requireTech: ['quantum_luck'],
  },
  {
    id: 'reality_stabilizer',
    name: '最终用户许可协议',
    description: '防止世界因为过多的[正概率]滥用而解体。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 500, [ResourceType.OPS]: 20000 },
    baseProduction: { [ResourceType.REALITY]: 0.0002, [ResourceType.POWER]: -100.0 },
    costMultiplier: 1.7,
    icon: 'Anchor',
    unlockRequirement: 0, // Reset
    requireTech: ['quantum_luck'],
  },
  {
    id: 'bicameral_temple', 
    name: '神之声广播塔',
    description: '利用二分心智理论，向大众右脑广播“神的指令”。消耗[民俗学]作为燃料。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.KNOWLEDGE]: 1000, [ResourceType.OPS]: 10000 },
    baseProduction: { [ResourceType.FOLLOWERS]: 100, [ResourceType.CULTURE]: 5.0, [ResourceType.MIND_CONTROL]: 10.0, [ResourceType.POWER]: -500.0, [ResourceType.LORE]: -10.0 }, 
    costMultiplier: 1.6,
    icon: 'Radio',
    unlockRequirement: 0, // Reset
    requireTech: ['bicameralism'],
  },
  {
    id: 'dmt_extraction_lab',
    name: 'DMT 提取室',
    description: '从含羞草根皮中提取精神分子。通往其他维度的钥匙。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.BIOMASS]: 5000, [ResourceType.FUNDS]: 2000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 5.0, [ResourceType.LORE]: 10.0, [ResourceType.BIOMASS]: -50.0, [ResourceType.PLEASURE]: 5.0 },
    costMultiplier: 1.5,
    icon: 'FlaskConical',
    unlockRequirement: 0, // Reset
    requireTech: ['biohacking_basics'],
  },
  {
    id: 'astral_projection_pod',
    name: '星体投射舱',
    description: '感官剥夺水箱。让意识离开肉体。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.FUNDS]: 10000, [ResourceType.OPS]: 2000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 10.0, [ResourceType.CLUE]: 5.0, [ResourceType.POWER]: -200.0, [ResourceType.TRUTH]: 0.005 }, // Nerfed
    costMultiplier: 1.6,
    icon: 'Eye',
    unlockRequirement: 0, // Reset
    requireTech: ['remote_viewing'],
  },
  {
    id: 'noosphere_antenna', 
    name: '诺斯圈天线',
    description: '接入人类集体潜意识思维层。需要消耗[隐秘知识]来维持连接。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.LORE]: 2000, [ResourceType.ANCIENT_WISDOM]: 100 },
    baseProduction: { [ResourceType.TRUTH]: 0.005, [ResourceType.MIND_CONTROL]: 20.0, [ResourceType.POWER]: -1000.0, [ResourceType.KNOWLEDGE]: -5.0 }, // Nerfed
    costMultiplier: 1.8,
    icon: 'Wifi',
    unlockRequirement: 0, // Reset
    requireTech: ['collective_unconscious'],
  },
  {
    id: 'chaos_magick_sigil',
    name: '混沌魔法印记',
    description: '通过自慰和专注来充能的符号。利用[快感]改变概率。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.LORE]: 5000, [ResourceType.PLEASURE]: 1000 },
    baseProduction: { [ResourceType.PROBABILITY]: 0.05, [ResourceType.LORE]: -10.0, [ResourceType.PLEASURE]: -50.0 }, 
    costMultiplier: 1.5,
    icon: 'Star',
    unlockRequirement: 0, // Reset
    requireTech: ['symbolism_decoding'],
  },
  {
    id: 'reality_anchor', 
    name: '现实锚点',
    description: '消耗[真相]来防止因过度探索而导致的现实崩溃。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 100, [ResourceType.ANCIENT_WISDOM]: 50 },
    baseProduction: { [ResourceType.REALITY]: 0.0005, [ResourceType.POWER]: -1000.0 }, // Removed TRUTH consumption
    costMultiplier: 1.6,
    icon: 'Anchor',
    unlockRequirement: 0, // Reset
    requireTech: ['reality_tunneling'],
  },
  {
    id: 'anaerobic_meditation_chamber',
    name: '厌氧冥想室',
    description: '移除房间内的氧气。在这种濒死状态下，你终于看清了世界的本质。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.KNOWLEDGE]: 1000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 1000.0, [ResourceType.OXYGEN]: -2000.0, [ResourceType.REALITY]: -0.0001 }, 
    costMultiplier: 1.7,
    icon: 'Wind',
    unlockRequirement: 0,
    requireTech: ['oxygen_toxicity'],
  }
];
