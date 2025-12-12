
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const ADULT_BUILDINGS: Building[] = [
  {
    id: 'asmr_mic',
    name: 'ASMR 录音棚',
    description: '用双耳麦克风捕捉咀嚼声和耳语。通过听觉刺激产生[快感]。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.FUNDS]: 300, [ResourceType.CARDBOARD]: 50 },
    baseProduction: { [ResourceType.PLEASURE]: 0.2, [ResourceType.FUNDS]: 0.5 },
    costMultiplier: 1.15,
    icon: 'Mic',
    unlockRequirement: 0, // Reset
    requireTech: ['rule_34'],
  },
  {
    id: 'onlyfans_account',
    name: 'OnlyFans 页面',
    description: '出售你穿着编程袜调试Linux内核的照片。硬核且有利可图。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.FUNDS]: 3000, [ResourceType.INFO]: 5000 },
    baseProduction: { [ResourceType.FUNDS]: 25, [ResourceType.FOLLOWERS]: 2, [ResourceType.PLEASURE]: 1.0 },
    costMultiplier: 1.35,
    icon: 'Camera',
    unlockRequirement: 0, // Reset
    requireTech: ['programming_socks'],
  },
  {
    id: 'camgirl_setup',
    name: '直播间',
    description: '带有环形灯和绿幕的房间。将[快感]直接转化为[资金]。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.FUNDS]: 5000, [ResourceType.PLEASURE]: 100 },
    baseProduction: { [ResourceType.FUNDS]: 40, [ResourceType.PLEASURE]: 2.0, [ResourceType.FOLLOWERS]: 5.0 },
    costMultiplier: 1.3,
    icon: 'Video',
    unlockRequirement: 0, // Reset
    requireTech: ['rule_34'],
  },
  {
    id: 'gacha_simulator',
    name: '抽卡模拟器',
    description: '利用人类的赌博本能。0.6% 的概率也是概率。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.CODE]: 5000, [ResourceType.OPS]: 2000 },
    baseProduction: { [ResourceType.PLEASURE]: 5.0, [ResourceType.PROBABILITY]: 0.01, [ResourceType.FUNDS]: 10.0 },
    costMultiplier: 1.25,
    icon: 'Gem',
    unlockRequirement: 0, // Reset
    requireTech: ['rule_34'],
  },
  {
    id: 'egirl_bathwater',
    name: '洗澡水灌装线',
    description: '将普通的自来水贴上标签。这是现代炼金术。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.FUNDS]: 8000, [ResourceType.BIOMASS]: 500 },
    baseProduction: { [ResourceType.FUNDS]: 100, [ResourceType.BIOMASS]: -2.0, [ResourceType.PLEASURE]: 3.0 },
    costMultiplier: 1.3,
    icon: 'Droplets',
    unlockRequirement: 0, // Reset
    requireTech: ['simp_economics'],
  },
  {
    id: 'retention_cell',
    name: '贤者永恒',
    description: '在欲望消退后的绝对冷静中，[算力]达到了巅峰。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.BIOMASS]: 5000, [ResourceType.LORE]: 1000 },
    baseProduction: { [ResourceType.OPS]: 300.0, [ResourceType.PROBABILITY]: 0.02, [ResourceType.PLEASURE]: -30.0 }, // Consumes Pleasure
    costMultiplier: 1.4,
    icon: 'Shield',
    unlockRequirement: 0, // Reset
    requireTech: ['semen_retention'],
  },
  {
    id: 'parasocial_bot',
    name: '准社会机器人',
    description: '让粉丝觉得你真的是他们的女朋友。批量生成虚假的亲密感。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.CODE]: 15000, [ResourceType.PLEASURE]: 1000 },
    baseProduction: { [ResourceType.FOLLOWERS]: 30, [ResourceType.MIND_CONTROL]: 0.5, [ResourceType.PLEASURE]: 5.0 },
    costMultiplier: 1.35,
    icon: 'Heart',
    unlockRequirement: 0, // Reset
    requireTech: ['ai_content_farm'],
  },
  {
    id: 'teledildonics_rig',
    name: '远程触觉装置',
    description: '通过互联网传输物理触感。赛博性爱硬件。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.OPS]: 20000, [ResourceType.TECH_CAPITAL]: 1000 },
    baseProduction: { [ResourceType.PLEASURE]: 20.0, [ResourceType.POWER]: -50.0 },
    costMultiplier: 1.4,
    icon: 'Zap',
    unlockRequirement: 0, // Reset
    requireTech: ['hedonistic_imperative'],
  },
  {
    id: 'dopamine_miner',
    name: '多巴胺矿机',
    description: '直接量化大脑的奖赏回路。将[快感]转化为[算力]。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.PLEASURE]: 5000, [ResourceType.TECH_CAPITAL]: 500 },
    baseProduction: { [ResourceType.OPS]: 100.0, [ResourceType.PLEASURE]: -10.0 },
    costMultiplier: 1.4,
    icon: 'Activity',
    unlockRequirement: 0, // Reset
    requireTech: ['hedonistic_imperative'],
  },
  {
    id: 'succubus_summoning',
    name: '魅魔召唤符文',
    description: '用纯粹的欲望作为祭品。实体化的色欲恶魔。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.PLEASURE]: 20000, [ResourceType.LORE]: 5000 },
    baseProduction: { [ResourceType.PLEASURE]: 50.0, [ResourceType.REALITY]: -0.0001, [ResourceType.BIOMASS]: -10.0 },
    costMultiplier: 1.5,
    icon: 'Flame',
    unlockRequirement: 0, // Reset
    requireTech: ['tulpa_engineering'],
  },
  {
    id: 'wirehead_chair',
    name: 'Wirehead',
    description: '刺激大脑快乐中枢。不需要食物睡眠，只需要电流。',
    category: BuildingCategory.ADULT,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 5000, [ResourceType.OPS]: 50000 },
    baseProduction: { [ResourceType.PLEASURE]: 200.0, [ResourceType.BIOMASS]: -50.0, [ResourceType.REALITY]: -0.0002 },
    costMultiplier: 1.6,
    icon: 'Zap',
    unlockRequirement: 0, // Reset
    requireTech: ['hedonistic_imperative'],
  }
];
