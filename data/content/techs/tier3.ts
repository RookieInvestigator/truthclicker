
import { Tech, ResourceType } from '../../../types';

export const TIER_3_TECHS: Tech[] = [
  // --- NETWORK ---
  {
    id: 'tor_network',
    name: '洋葱路由 (Tor)',
    description: '进入深网。访问 .onion 站点。',
    tier: 3,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CODE]: 2000 }, // Was 5000/500
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.3 },
        unlockMessage: '解锁: 暗网集市' 
    },
    icon: 'Globe',
    preRequisiteTech: 'p2p_sharing', 
  },
  {
    id: 'dark_fiber', 
    name: '暗光纤 (Dark Fiber)',
    description: '连接到那些铺设了但从未投入使用的光缆。无限的带宽。',
    tier: 3,
    costs: { [ResourceType.FUNDS]: 30000, [ResourceType.OPS]: 8000 }, // Was 8000/2000
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.3 },
        unlockMessage: '解锁: 骨干网窃听点'
    },
    icon: 'Zap',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'dead_internet_theory', 
    name: '死互联网理论',
    description: '大部分网络流量都是机器人。你可能是唯一的人类。',
    tier: 3,
    costs: { [ResourceType.INFO]: 40000, [ResourceType.OPS]: 4000 }, // Was 10000/1000
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '解锁: 僵尸评论工厂'
    },
    icon: 'Bot',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'dead_theory_bot', 
    name: '死理论验证机器人',
    description: '如果互联网已死，那就利用尸体。',
    tier: 3,
    costs: { [ResourceType.CODE]: 12000, [ResourceType.SPAM]: 2000 }, // Was 3000/500
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
        recycleEfficiency: 0.1
    },
    icon: 'Skull',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'wiki_wars', 
    name: '编辑战策略',
    description: '如何在维基百科上修改历史而不被封禁。控制真相的定义权。',
    tier: 3,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CULTURE]: 500 }, // Was 5000/100
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2, [ResourceType.TRUTH]: 0.05 },
        unlockMessage: '解锁: 维基贡献者脚本'
    },
    icon: 'Edit',
    preRequisiteTech: 'irc_mastery'
  },

  // --- HISTORY ---
  {
    id: 'oopart_studies', 
    name: '欧帕兹 (OOPArt) 研究',
    description: 'Out-of-place artifacts。这些文物不应该存在于那个时代。',
    tier: 3,
    costs: { [ResourceType.CLUE]: 200, [ResourceType.KNOWLEDGE]: 100 }, // Was 50/20
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.3 },
        unlockMessage: '解锁: 欧帕兹收藏馆'
    },
    icon: 'Box',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'majestic_12', 
    name: 'Majestic-12 文件',
    description: '1947年成立的秘密委员会。负责回收外星飞船。',
    tier: 3,
    costs: { [ResourceType.CLUE]: 500, [ResourceType.INFO]: 40000 }, // Was 100/10000
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.2, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '解锁: MJ-12 影子服务器'
    },
    icon: 'FileText',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'black_knight_satellite', 
    name: '黑骑士卫星 (Black Knight)',
    description: '它在极地轨道上运行了13000年。特斯拉曾接收过它的信号。',
    tier: 3,
    costs: { [ResourceType.OPS]: 12000, [ResourceType.INFO]: 32000 }, // Was 3000/8000
    effects: {
        resourceMultipliers: { [ResourceType.STORY]: 0.3 },
        unlockMessage: '解锁: 黑骑士卫星解码器'
    },
    icon: 'Satellite',
    preRequisiteTech: 'audio_engineering'
  },
  {
    id: 'atmospheric_geoengineering', 
    name: '大气地球工程',
    description: '所谓的“化学凝尾 (Chemtrails)”其实是平流层气溶胶注入计划。',
    tier: 3,
    costs: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.FUNDS]: 25000 }, // Was 20/5000
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
        unlockMessage: '解锁: 凝尾喷洒机'
    },
    icon: 'CloudRain',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'fluoride_calcification', 
    name: '松果体钙化研究',
    description: '水中的氟化物不仅仅为了牙齿健康，它是为了封闭你的“第三只眼”。',
    tier: 3,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.BIOMASS]: 250 }, // Was 5000/50
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
        unlockMessage: '解锁: 氟化物添加系统'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pseudoscience_marketing'
  },
  {
    id: 'crisis_acting', 
    name: '危机演员 (Crisis Actors)',
    description: '那些在不同新闻悲剧中出现的同一张面孔。一切都是剧本。',
    tier: 3,
    costs: { [ResourceType.FUNDS]: 20000, [ResourceType.RUMORS]: 250 }, // Was 5000/50
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.3 },
        unlockMessage: '谣言传播加速'
    },
    icon: 'Drama',
    preRequisiteTech: 'clickbait_tactics'
  },
  {
    id: 'social_engineering', 
    name: '社会工程学',
    description: '人是系统中最薄弱的环节。',
    tier: 3,
    costs: { [ResourceType.INFO]: 12000, [ResourceType.CRED]: 100 }, // Was 3000/20
    effects: {
        unlockMessage: '解锁: 谣言磨坊 / 网络水军基地'
    },
    icon: 'Users',
    preRequisiteTech: 'spam_algorithms'
  },
  {
    id: 'targeted_individuals', 
    name: '受控个体 (Gang Stalking)',
    description: '不是你在发疯，而是真的有一群人在街角用红颜色车灯给你发信号。',
    tier: 3,
    costs: { [ResourceType.INFO]: 35000, [ResourceType.CRED]: 250 }, // Was 8000/50
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2, [ResourceType.CRED]: -0.1 },
        unlockMessage: '解锁: 集体骚扰中心'
    },
    icon: 'Users',
    preRequisiteTech: 'social_engineering'
  },
  {
    id: 'conspiracy_101',
    name: '阴谋论入门',
    description: '质疑一切。鸟是无人机吗？地球是平的吗？',
    tier: 3,
    costs: { [ResourceType.INFO]: 5000 }, // Was 1200
    effects: { 
        artifactRarityBonus: 0.1, 
        unlockMessage: '解锁类别: 阴谋论' 
    },
    icon: 'Eye',
    preRequisiteTech: 'forum_culture',
  },
  {
    id: 'memetics', 
    name: '模因论',
    description: '思想像病毒一样传播。理查德·道金斯的噩梦。',
    tier: 3,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.CULTURE]: 250 }, // Was 5000/50
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 模因战中心 / 叙事纺织机'
    },
    icon: 'Dna',
    preRequisiteTech: 'forum_culture'
  },
];
