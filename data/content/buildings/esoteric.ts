
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
    description: '运行TempleOS。在低清画面中聆听神的随机数。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.CODE]: 10000, [ResourceType.ANCIENT_WISDOM]: 500 },
    baseProduction: { [ResourceType.TRUTH]: 0.001, [ResourceType.CODE]: 10.0, [ResourceType.ANCIENT_WISDOM]: 1.0, [ResourceType.POWER]: -10.0 }, // 0.001 OK
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
    name: '现实稳定协议',
    description: '防止世界因为过多的[正概率]滥用而解体。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 500, [ResourceType.OPS]: 20000 },
    baseProduction: { [ResourceType.REALITY]: 0.0002, [ResourceType.POWER]: -100.0, [ResourceType.OPS]: -50.0 },
    costMultiplier: 1.7,
    icon: 'Anchor',
    unlockRequirement: 0, // Reset
    requireTech: ['quantum_luck'],
  },
  {
    id: 'bicameral_temple', 
    name: '神之声广播塔',
    description: '利用二分心智，向大众右脑广播“神令”。消耗[民俗学]。',
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
    baseProduction: { [ResourceType.KNOWLEDGE]: 5.0, [ResourceType.LORE]: 10.0, [ResourceType.BIOMASS]: -50.0, [ResourceType.PLEASURE]: 5.0, [ResourceType.FUNDS]: -10.0 },
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
    name: '本体论稳定器',
    description: '产生一个绝对真实的“真理场”，防止周围的现实结构因过度探索而发生溶解。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 100, [ResourceType.ANCIENT_WISDOM]: 50 },
    baseProduction: { [ResourceType.REALITY]: 0.0005, [ResourceType.POWER]: -1000.0, [ResourceType.OPS]: -500.0 }, 
    costMultiplier: 1.6,
    icon: 'Anchor',
    unlockRequirement: 0, // Reset
    requireTech: ['reality_tunneling'],
  },
  {
    id: 'anaerobic_meditation_chamber',
    name: '厌氧冥想室',
    description: '移除房间氧气。在濒死状态下，你终于看清世界本质。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.KNOWLEDGE]: 1000 },
    baseProduction: { [ResourceType.KNOWLEDGE]: 1000.0, [ResourceType.OXYGEN]: -2000.0, [ResourceType.REALITY]: -0.0001, [ResourceType.POWER]: -50.0 }, 
    costMultiplier: 1.7,
    icon: 'Wind',
    unlockRequirement: 0,
    requireTech: ['oxygen_toxicity'],
  },
  {
    id: 'probability_blindspot_observatory',
    name: '概率盲点观测台',
    description: '建在两座写字楼夹缝中的违章建筑。那里是地图上的空白，也是自由的飞地。',
    longDescription: '城市规划者痛恨这种地方：死胡同的尽头、立交桥下的阴影、被围栏隔开的“无用空间”。这些是资本主义消化系统的盲肠。\n\n因为没有商业价值，所以那里没有监控，没有广告，甚至物理法则也变得松懈。我们在这里建立据点。不需要服务器，只需要一把折叠椅。在这里，你可以用一块鹅卵石换取一个秘密，或者在墙角的霉斑中解读出明天的彩票号码。',
    category: BuildingCategory.ESOTERIC,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.PROBABILITY]: 50, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.PROBABILITY]: 0.5, [ResourceType.CLUE]: 2.0, [ResourceType.REALITY]: -0.0002 },
    costMultiplier: 1.5,
    icon: 'Eye',
    unlockRequirement: 0,
    requireTech: ['intent_driven_topology']
  }
];
