
import { Tech, ResourceType } from '../../../types';

export const TIER_5_TECHS: Tech[] = [
  {
    id: 'neurolinguistic_programming', 
    name: '神经语言程序学 (NLP)',
    description: '通过特定的语言模式重新编程大脑。洗脑的科学化。',
    tier: 5,
    costs: { [ResourceType.INFO]: 750000, [ResourceType.CULTURE]: 30000 }, // Was 50k/2k
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 阈下信息站'
    },
    icon: 'MessageCircle',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'wireless_power', 
    name: '无线能量传输',
    description: '特斯拉沃登克里弗塔的未竟事业。',
    tier: 5,
    costs: { [ResourceType.POWER]: 150000, [ResourceType.OPS]: 80000 }, // Was 10k/5k
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.3 },
        unlockMessage: '解锁: 特斯拉线圈阵列'
    },
    icon: 'Zap',
    preRequisiteTech: 'cold_fusion'
  },
  {
    id: 'v2k_technology', 
    name: 'V2K 技术 (Voice-to-Skull)',
    description: '微波听觉效应。直接将声音投射到目标的头骨内。',
    tier: 5,
    costs: { [ResourceType.OPS]: 150000, [ResourceType.MIND_CONTROL]: 2500 }, // Was 10k/200
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.5 },
        unlockMessage: '解锁: 5G 信号塔'
    },
    icon: 'Radio',
    preRequisiteTech: 'monarch_programming'
  },
  {
    id: 'atlantean_knowledge', 
    name: '亚特兰蒂斯几何学',
    description: '柏拉图描述的完美城市布局实际上是一个能量回路。',
    tier: 5,
    costs: { [ResourceType.ANCIENT_WISDOM]: 600, [ResourceType.KNOWLEDGE]: 30000 }, // Was 50/2000
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.3 },
    },
    icon: 'Triangle',
    preRequisiteTech: 'mud_flood'
  },
  {
    id: 'mass_psychogenic_illness', 
    name: '群体性心因性疾病',
    description: '利用[恐慌]和[谣言]引发真实的生理症状。',
    tier: 5,
    costs: { [ResourceType.PANIC]: 6000, [ResourceType.RUMORS]: 6000 }, // Was 500/500
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.5 },
    },
    icon: 'Activity',
    preRequisiteTech: 'crisis_acting'
  },
  {
    id: 'collective_unconscious', 
    name: '集体潜意识测绘',
    description: '荣格的原型理论不仅仅是心理学，它是网络的底层架构。',
    tier: 5,
    costs: { [ResourceType.LORE]: 15000, [ResourceType.MIND_CONTROL]: 3000 }, // Was 1000/200
    effects: {
        unlockMessage: '解锁: 诺斯圈天线'
    },
    icon: 'Globe',
    preRequisiteTech: 'aklo_language'
  },
  {
    id: 'sumerian_me', 
    name: '苏美尔 Me (神力)',
    description: '古代神灵用于控制文明基础功能的程序代码。',
    tier: 5,
    costs: { [ResourceType.ANCIENT_WISDOM]: 2500, [ResourceType.CODE]: 300000 }, // Was 200/20k
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.5, [ResourceType.OPS]: 0.5 },
    },
    icon: 'FileCode',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'project_blue_beam', 
    name: '蓝光计划 (Project Blue Beam)',
    description: '利用全息投影技术在天空中伪造“基督再临”或“外星人入侵”，以建立世界新秩序。',
    tier: 5,
    costs: { [ResourceType.FUNDS]: 3000000, [ResourceType.OPS]: 800000 }, // Was 200k/50k
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 1.5, [ResourceType.TRUTH]: -0.5 },
        unlockMessage: '解锁: 天空全息投影仪'
    },
    icon: 'Projector',
    preRequisiteTech: 'atmospheric_geoengineering'
  },
];
