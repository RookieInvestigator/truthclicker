
import { Tech, ResourceType } from '../../../types';

export const TIER_6_TECHS: Tech[] = [
  {
    id: 'zero_point_energy',
    name: '零点能提取',
    description: '从真空中提取无限能量。',
    tier: 6,
    costs: { [ResourceType.OPS]: 50000000, [ResourceType.TECH_CAPITAL]: 1200000 }, // Was 2M/50k
    effects: { 
        resourceMultipliers: { [ResourceType.OPS]: 1.0 },
        globalCostReduction: 0.1,
        unlockMessage: '解锁: 零点能模块'
    },
    icon: 'Zap',
    preRequisiteTech: 'wireless_power',
  },
  {
    id: 'psychotronic_generators', 
    name: '精神电子发生器',
    description: '将精神意念转化为物理能量，或者反过来。',
    tier: 6,
    costs: { [ResourceType.MIND_CONTROL]: 25000, [ResourceType.POWER]: 1200000 }, // Was 1k/50k
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 1.0 },
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'v2k_technology'
  },
  {
    id: 'egregore_summoning', 
    name: 'Egregore 召唤',
    description: '当足够多的人相信同一个[谣言]，它就会获得自主意识。',
    tier: 6,
    costs: { [ResourceType.RUMORS]: 150000, [ResourceType.FOLLOWERS]: 300000 }, // Was 5k/10k
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 2.0 },
    },
    icon: 'Ghost',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'library_of_alexandria_backup', 
    name: '亚历山大图书馆备份',
    description: '它没有被烧毁，它被上传到了水晶存储器中。',
    tier: 6,
    costs: { [ResourceType.ANCIENT_WISDOM]: 30000, [ResourceType.KNOWLEDGE]: 15000000 }, // Was 1k/500k
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 3.0 },
    },
    icon: 'Book',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'physics_engine_exploit',
    name: '现实物理引擎漏洞',
    description: '利用现实底层的代码缺陷进行“卡墙”操作。Speedrun Life.',
    tier: 6,
    costs: { [ResourceType.TRUTH]: 5000, [ResourceType.CODE]: 80000000 }, // Was 200/3M
    effects: { 
        globalCostReduction: 0.2,
        artifactRarityBonus: 0.5
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'zero_point_energy',
  },
  {
    id: 'tulpa_engineering', 
    name: 'Tulpa 工程学',
    description: '系统化地创造能够干涉物质世界的思维实体。',
    tier: 6,
    costs: { [ResourceType.CULTURE]: 15000000, [ResourceType.KNOWLEDGE]: 5000000 }, // Was 500k/200k
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.5, [ResourceType.CULTURE]: 1.0 },
        unlockMessage: '虚构入侵现实'
    },
    icon: 'Users',
    preRequisiteTech: 'egregore_summoning'
  },
];
