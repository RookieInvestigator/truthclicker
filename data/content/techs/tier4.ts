
import { Tech, ResourceType } from '../../../types';

export const TIER_4_TECHS: Tech[] = [
  {
    id: 'cold_fusion', 
    name: '冷聚变',
    description: 'Fleischmann 和 Pons 是对的。常温下的核反应是可能的。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 1000, [ResourceType.POWER]: 8000 }, // Was 200/1000
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2 },
        unlockMessage: '解锁: 车库聚变反应堆'
    },
    icon: 'Atom',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'aklo_language', 
    name: 'Aklo 语',
    description: '一种源自前人类文明的语言，据说能在大脑中引起生理变化。',
    tier: 4,
    costs: { [ResourceType.LORE]: 500, [ResourceType.KNOWLEDGE]: 600 }, // Was 100/100
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.5 },
        unlockMessage: '解锁禁忌文本'
    },
    icon: 'Languages',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'infinite_scroll_trap', 
    name: '无限滚动陷阱',
    description: '利用多巴胺回路将用户永久锁定在屏幕前。',
    tier: 4,
    costs: { [ResourceType.CODE]: 40000, [ResourceType.MIND_CONTROL]: 150 }, // Was 5000/20
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: -0.2, [ResourceType.FOLLOWERS]: 0.3 }, // Turns spam into followers
    },
    icon: 'ArrowDown',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'monarch_programming', 
    name: '帝王计划 (Project Monarch)',
    description: 'MKUltra 的延续。通过创伤性解离创造多重人格间谍。',
    tier: 4,
    costs: { [ResourceType.INFO]: 150000, [ResourceType.MIND_CONTROL]: 300 }, // Was 20000/50
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.3 },
    },
    icon: 'Crown',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'deep_state_mapping', 
    name: '深层政府拓扑图',
    description: '连接所有点。所有的公司、所有的政客、所有的资金流向。',
    tier: 4,
    costs: { [ResourceType.INFO]: 300000, [ResourceType.RUMORS]: 1500 }, // Was 50000/200
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
    },
    icon: 'Network',
    preRequisiteTech: 'majestic_12'
  },
  {
    id: 'phantom_time', 
    name: '幻影时间假说',
    description: '公元614年到911年从未发生过。查理曼大帝是虚构的。我们活在1700年代。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 1500, [ResourceType.TRUTH]: 80 }, // Was 200/10
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.2 },
        unlockMessage: '解锁: 历史修正钟'
    },
    icon: 'Clock',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'remote_viewing', 
    name: '遥视 (Remote Viewing)',
    description: '星门计划（Project Stargate）。超越时空的感知能力。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 3000, [ResourceType.OPS]: 40000 }, // Was 500/5000
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2, [ResourceType.CLUE]: 0.2 },
        unlockMessage: '解锁: 遥视水箱'
    },
    icon: 'Eye',
    preRequisiteTech: 'audio_engineering'
  },
  {
    id: 'bicameralism', 
    name: '二分心智 (Bicameralism)',
    description: '三千年前人类没有意识，只有听从“神的指令”（右脑幻听）。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 2500, [ResourceType.BIOMASS]: 800 }, // Was 300/100
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.5 },
        unlockMessage: '解锁: 神之声广播塔'
    },
    icon: 'Brain',
    preRequisiteTech: 'audio_engineering'
  },
  {
    id: 'mud_flood', 
    name: '泥浆洪水理论 (Tartaria)',
    description: '19世纪曾发生过一场毁灭文明的泥浆洪水，掩埋了宏伟的鞑靼利亚帝国。',
    tier: 4,
    costs: { [ResourceType.INFO]: 250000, [ResourceType.CARDBOARD]: 5000 }, // Was 30000/500
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.3 },
        unlockMessage: '解锁: 泥浆挖掘机'
    },
    icon: 'Shovel',
    preRequisiteTech: 'abandonware_archeology'
  },
];
