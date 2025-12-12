
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const SUBVERSION_BUILDINGS: Building[] = [
  // --- TIER 1-2 ---
  {
    id: 'flat_earth_model',
    name: '地平模型摊位',
    description: '制作精美的圆盘地球模型。解释为什么澳大利亚不存在。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.CARDBOARD]: 500, [ResourceType.RUMORS]: 50 },
    baseProduction: { [ResourceType.SPAM]: 2.0, [ResourceType.FOLLOWERS]: 1.0, [ResourceType.TINFOIL]: 0.5 }, // Tinfoil
    costMultiplier: 1.2,
    icon: 'Disc',
    unlockRequirement: 0, 
    requireTech: ['conspiracy_101'],
  },
  {
    id: 'troll_farm', 
    name: '网络水军基地',
    description: '成千上万个虚假账号。操纵政治舆论，激化社会矛盾。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 8000, [ResourceType.SPAM]: 1000 },
    baseProduction: { [ResourceType.RUMORS]: 2.0, [ResourceType.PANIC]: 0.5, [ResourceType.RED_PILL]: 0.2, [ResourceType.FUNDS]: -20.0, [ResourceType.INFO]: -100.0 }, // Red Pill
    costMultiplier: 1.3,
    icon: 'Users',
    unlockRequirement: 0, 
    requireTech: ['social_engineering'],
  },
  {
    id: 'reptilian_mask_factory',
    name: '蜥蜴人伪装服工厂',
    description: '生产逼真的人皮面具。他们就生活在我们中间，眼睛会横向眨动。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.BIOMASS]: 1000, [ResourceType.FUNDS]: 5000 },
    baseProduction: { [ResourceType.RUMORS]: 3.0, [ResourceType.FUNDS]: 50.0, [ResourceType.TINFOIL]: 0.5 }, // Tinfoil
    costMultiplier: 1.3,
    icon: 'Smile',
    unlockRequirement: 0, 
    requireTech: ['conspiracy_101'],
  },
  
  // --- TIER 3 (NEW EXPANSION) ---
  {
    id: 'birds_drone_jammer',
    name: '鸟类干扰器',
    description: '鸟类在1986年就被里根政府杀光了，现在的全是监控无人机。干扰它们的信号传输。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.OPS]: 3000, [ResourceType.TINFOIL]: 50 },
    baseProduction: { [ResourceType.TINFOIL]: 1.5, [ResourceType.INFO]: 20.0, [ResourceType.CRED]: -1.0 }, // Tinfoil
    costMultiplier: 1.3,
    icon: 'WifiOff',
    unlockRequirement: 0,
    requireTech: ['avian_surveillance'],
  },
  {
    id: 'based_podcast_studio',
    name: '红丸播客工作室',
    description: '两个对着麦克风抽雪茄的男人。讨论西方文明的衰落和现代性的谎言。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 5000, [ResourceType.RED_PILL]: 20 },
    baseProduction: { [ResourceType.RED_PILL]: 0.8, [ResourceType.FOLLOWERS]: 10.0, [ResourceType.FUNDS]: 10.0 }, // Red Pill
    costMultiplier: 1.35,
    icon: 'Mic',
    unlockRequirement: 0,
    requireTech: ['cultural_pessimism'],
  },

  // --- TIER 3 EXISTING ---
  {
    id: 'crisis_actor_agency',
    name: '危机演员中介',
    description: '招募演员在新闻发布会上哭泣。一切都是剧本，一切都是为了控制你。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 10000, [ResourceType.CRED]: 500 },
    baseProduction: { [ResourceType.PANIC]: 2.0, [ResourceType.RUMORS]: 5.0, [ResourceType.RED_PILL]: 0.3, [ResourceType.FUNDS]: -50.0 }, // Red Pill
    costMultiplier: 1.35,
    icon: 'Drama',
    unlockRequirement: 0, 
    requireTech: ['crisis_acting'],
  },
  {
    id: 'deepfake_studio', 
    name: '深伪演播室',
    description: '生成不存在的政客发表煽动性演讲。现实已被篡改。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.OPS]: 5000, [ResourceType.TECH_CAPITAL]: 10 },
    baseProduction: { [ResourceType.STORY]: 2.0, [ResourceType.RUMORS]: 3.0, [ResourceType.RED_PILL]: 0.4, [ResourceType.POWER]: -50.0, [ResourceType.OPS]: -50.0 }, // Red Pill
    costMultiplier: 1.4,
    icon: 'Video',
    unlockRequirement: 0, 
    requireTech: ['ai_content_farm'],
  },
  {
    id: 'subliminal_msg_station', 
    name: '阈下信息站',
    description: '在流行歌曲中植入指令。服从。消费。繁殖。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.CULTURE]: 5000, [ResourceType.OPS]: 10000 },
    baseProduction: { [ResourceType.FOLLOWERS]: 20, [ResourceType.MIND_CONTROL]: 0.8, [ResourceType.POWER]: -100.0, [ResourceType.CULTURE]: -2.0 }, 
    costMultiplier: 1.4,
    icon: 'Radio',
    unlockRequirement: 0, 
    requireTech: ['neurolinguistic_programming'],
  },

  // --- TIER 4 (NEW EXPANSION) ---
  {
    id: 'mud_fossil_university',
    name: '泥化石大学',
    description: '那个山脉其实是一个石化的巨人心脏。地质学是谎言，世界是生物构成的。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.TINFOIL]: 500, [ResourceType.FOSSIL]: 100 },
    baseProduction: { [ResourceType.TINFOIL]: 2.5, [ResourceType.FOSSIL]: 5.0, [ResourceType.ANCIENT_WISDOM]: 0.2 }, // Tinfoil
    costMultiplier: 1.45,
    icon: 'Mountain',
    unlockRequirement: 0,
    requireTech: ['titan_geology'],
  },
  {
    id: 'alpha_male_bootcamp',
    name: '阿尔法训练营',
    description: '通过冰水浴、生吃内脏和吼叫来恢复被现代社会剥夺的男子气概。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.RED_PILL]: 200 },
    baseProduction: { [ResourceType.RED_PILL]: 2.0, [ResourceType.FUNDS]: 200.0, [ResourceType.BIOMASS]: 10.0 }, // Red Pill
    costMultiplier: 1.45,
    icon: 'Swords',
    unlockRequirement: 0,
    requireTech: ['cultural_pessimism'],
  },

  // --- TIER 4 EXISTING ---
  {
    id: 'game_forum_leaker',
    name: '游戏论坛泄密者',
    description: '为了赢得关于坦克装甲厚度的争论，直接上传了机密军事手册。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.OPS]: 2000, [ResourceType.CRED]: 1000 },
    baseProduction: { [ResourceType.TECH_CAPITAL]: 0.2, [ResourceType.PANIC]: 1.0, [ResourceType.FUNDS]: -10.0 },
    costMultiplier: 1.35,
    icon: 'Gamepad2',
    unlockRequirement: 0,
    requireTech: ['simulation_realism'],
  },
  {
    id: 'shadow_ban_algo',
    name: 'Shadowban算法优化',
    description: '让不受欢迎的声音消失在虚空中。他们甚至不知道自己被禁言了。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.CODE]: 20000, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.MIND_CONTROL]: 1.0, [ResourceType.SPAM]: -10.0, [ResourceType.RED_PILL]: 0.1, [ResourceType.OPS]: -20.0 }, // Red Pill
    costMultiplier: 1.35,
    icon: 'EyeOff',
    unlockRequirement: 0, 
    requireTech: ['spam_algorithms'],
  },
  {
    id: 'false_flag_planner',
    name: '伪旗行动策划室',
    description: '设计一场看起来像意外的事件。制造恐惧，推行法案。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 50000, [ResourceType.INFO]: 20000 },
    baseProduction: { [ResourceType.PANIC]: 5.0, [ResourceType.RUMORS]: 10.0, [ResourceType.RED_PILL]: 1.0 }, // Red Pill
    costMultiplier: 1.5,
    icon: 'Flag',
    unlockRequirement: 0, 
    requireTech: ['deep_state_mapping'],
  },
  {
    id: 'subliminal_ad_server',
    name: '潜意识广告服',
    description: '每24帧插入一帧“服从”。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.FUNDS]: 200, [ResourceType.MIND_CONTROL]: 1.0 },
    costMultiplier: 1.4,
    icon: 'Monitor',
    unlockRequirement: 0, 
    requireTech: ['neurolinguistic_programming'],
  },
  {
    id: 'chemtrail_plane', 
    name: '凝尾喷洒机',
    description: '在高空释放气溶胶。控制气候，或者控制人口？',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 20000, [ResourceType.OPS]: 5000 },
    baseProduction: { [ResourceType.TINFOIL]: 1.0, [ResourceType.FUNDS]: -300, [ResourceType.MIND_CONTROL]: 1.5, [ResourceType.RUMORS]: 3.0 }, // Tinfoil
    costMultiplier: 1.4,
    icon: 'CloudRain',
    unlockRequirement: 0, 
    requireTech: ['atmospheric_geoengineering'],
  },
  {
    id: 'mandela_effect_generator',
    name: '曼德拉效应发生器',
    description: '微调过去的时间线。到底是“贝伦斯坦熊”还是“贝伦斯特恩熊”？',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.TECH_CAPITAL]: 5000, [ResourceType.OPS]: 50000 },
    baseProduction: { [ResourceType.PANIC]: 2.0, [ResourceType.LORE]: 5.0, [ResourceType.TINFOIL]: 0.5 }, // Tinfoil
    costMultiplier: 1.5,
    icon: 'Shuffle',
    unlockRequirement: 0, 
    requireTech: ['phantom_time'],
  },
  {
    id: 'fluoride_injector', 
    name: '氟化物添加系统',
    description: '将其注入公共供水系统。让松果体钙化，切断人类与灵界的联系。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 30000, [ResourceType.CRED]: 500 },
    baseProduction: { [ResourceType.MIND_CONTROL]: 3.0, [ResourceType.BIOMASS]: -10.0, [ResourceType.TINFOIL]: 0.8, [ResourceType.FUNDS]: -100.0 }, // Tinfoil
    costMultiplier: 1.45,
    icon: 'Droplets',
    unlockRequirement: 0, 
    requireTech: ['fluoride_calcification'],
  },

  // --- TIER 5 (NEW EXPANSION) ---
  {
    id: 'trad_lifestyle_commune',
    name: '传统生活公社',
    description: '拒绝现代性，回归农耕。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.FUNDS]: 100000, [ResourceType.RED_PILL]: 1000 },
    baseProduction: { [ResourceType.RED_PILL]: 5.0, [ResourceType.BIOMASS]: 50.0, [ResourceType.FOLLOWERS]: 20.0 }, // Red Pill
    costMultiplier: 1.5,
    icon: 'Home',
    unlockRequirement: 0,
    requireTech: ['hyperborean_myth'],
  },
  {
    id: 'agartha_drill',
    name: '阿加尔塔钻机',
    description: '在南极洲的冰层下寻找地心世界的入口。',
    category: BuildingCategory.SUBVERSION,
    baseCosts: { [ResourceType.OPS]: 100000, [ResourceType.TINFOIL]: 2000 },
    baseProduction: { [ResourceType.TINFOIL]: 8.0, [ResourceType.ANCIENT_WISDOM]: 2.0, [ResourceType.FOSSIL]: -5.0 }, // Tinfoil
    costMultiplier: 1.6,
    icon: 'Circle', // Hole
    unlockRequirement: 0,
    requireTech: ['hyperborean_myth'],
  }
];
