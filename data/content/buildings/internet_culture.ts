
import { Building, ResourceType, BuildingCategory } from '../../../types';

export const INTERNET_CULTURE_BUILDINGS: Building[] = [
  {
    id: 'reaction_image_folder',
    name: '表情包文件夹',
    description: '由于无法用语言表达情感，你收集了上千张低清截图。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.INFO]: 500 },
    baseProduction: { [ResourceType.CULTURE]: 0.2, [ResourceType.INFO]: 5 },
    costMultiplier: 1.15,
    icon: 'Smile',
    unlockRequirement: 0, // Reset
    requireTech: ['forum_culture'],
  },
  {
    id: 'fanfiction_archive',
    name: '同人文库',
    description: '所有的配对都是可能的。所有。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.INFO]: 800, [ResourceType.CULTURE]: 50 },
    baseProduction: { [ResourceType.CULTURE]: 0.3, [ResourceType.FOLLOWERS]: 0.1 },
    costMultiplier: 1.2,
    icon: 'BookHeart',
    unlockRequirement: 0, // Reset
    requireTech: ['forum_culture'],
  },
  {
    id: 'viral_cat_video',
    name: '病毒式猫片',
    description: '一只弹钢琴的猫。这是互联网存在的唯一理由。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.FUNDS]: 1000, [ResourceType.INFO]: 1500 },
    baseProduction: { [ResourceType.FOLLOWERS]: 5.0, [ResourceType.SPAM]: 150.0, [ResourceType.FUNDS]: 2.0 }, 
    costMultiplier: 1.25,
    icon: 'Video',
    unlockRequirement: 0, // Reset
    requireTech: ['html_1_0'],
  },
  {
    id: 'vaporwave_radio',
    name: '蒸气波电台',
    description: '放慢的80年代流行乐。美学至上。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.CULTURE]: 200, [ResourceType.INFO]: 1000 },
    baseProduction: { [ResourceType.CULTURE]: 0.5, [ResourceType.INFO]: 5 },
    costMultiplier: 1.2,
    icon: 'Music',
    unlockRequirement: 0, // Reset
    requireTech: ['html_1_0'],
  },
  {
    id: 'datamoshing_studio',
    name: '数据损坏艺术室',
    description: '故意破坏视频的 I 帧。拥抱数字腐烂的美感。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.INFO]: 5000, [ResourceType.CODE]: 200 },
    baseProduction: { [ResourceType.CULTURE]: 0.8, [ResourceType.SPAM]: 2.0 },
    costMultiplier: 1.2,
    icon: 'ZapOff',
    unlockRequirement: 0,
    requireTech: ['glitch_aesthetic'],
  },
  {
    id: 'rickroll_redirect',
    name: '瑞克摇诱捕链',
    description: '绝不放弃你，绝不让你失望。通过恶作剧链接传播。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.CODE]: 1000, [ResourceType.INFO]: 3000 },
    baseProduction: { [ResourceType.CULTURE]: 0.5, [ResourceType.SPAM]: 50.0, [ResourceType.CRED]: -0.1 },
    costMultiplier: 1.2,
    icon: 'Link',
    unlockRequirement: 0, // Reset
    requireTech: ['clickbait_tactics'],
  },
  {
    id: 'discord_server',
    name: 'Discord 服务器',
    description: '全是通知红点。没人睡觉。信息过载。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.INFO]: 2000, [ResourceType.FOLLOWERS]: 100 },
    baseProduction: { [ResourceType.FOLLOWERS]: 3.0, [ResourceType.SPAM]: 400.0, [ResourceType.CULTURE]: 0.2 }, 
    costMultiplier: 1.25,
    icon: 'MessageCircle',
    unlockRequirement: 0, // Reset
    requireTech: ['usenet_access'],
  },
  {
    id: 'meme_refinery',
    name: '模因炼油厂',
    description: '从海量垃圾贴文中提炼出纯粹的文化基因。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.FUNDS]: 4000, [ResourceType.CULTURE]: 500 },
    baseProduction: { [ResourceType.CULTURE]: 2.0, [ResourceType.INFO]: 100.0, [ResourceType.SPAM]: -500.0 }, 
    costMultiplier: 1.25,
    icon: 'Filter',
    unlockRequirement: 0, // Reset
    requireTech: ['memetics'],
  },
  {
    id: 'subreddit_mod_room',
    name: 'Subreddit 版主室',
    description: '微小的权力也是权力。享受封禁用户的快感。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.INFO]: 5000, [ResourceType.CRED]: -50 },
    baseProduction: { [ResourceType.CRED]: -1.0, [ResourceType.CULTURE]: 1.0, [ResourceType.POWER]: -5.0 },
    costMultiplier: 1.3,
    icon: 'ShieldAlert',
    unlockRequirement: 0, // Reset
    requireTech: ['forum_culture'],
  },
  {
    id: 'copypasta_printer',
    name: '复读机脚本',
    description: 'Ctrl+C, Ctrl+V。通过重复来创造意义（或者消解意义）。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.CODE]: 2000, [ResourceType.INFO]: 8000 },
    baseProduction: { [ResourceType.SPAM]: 200.0, [ResourceType.CULTURE]: 0.5 },
    costMultiplier: 1.2,
    icon: 'Copy',
    unlockRequirement: 0, // Reset
    requireTech: ['basic_scripting'],
  },
  {
    id: 'infinite_scroll_engine',
    name: '无限滚动引擎',
    description: '没有底部的页面。用户永远无法离开。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.CODE]: 10000, [ResourceType.MIND_CONTROL]: 20 },
    baseProduction: { [ResourceType.FOLLOWERS]: 10.0, [ResourceType.MIND_CONTROL]: 0.1, [ResourceType.PLEASURE]: 2.0 },
    costMultiplier: 1.35,
    icon: 'ArrowDown',
    unlockRequirement: 0, // Reset
    requireTech: ['infinite_scroll_trap'],
  },
  {
    id: 'meme_singularity_node',
    name: '模因奇点节点',
    description: '一个自我进化的笑话，好笑到足以终结文明。',
    category: BuildingCategory.INTERNET_CULTURE,
    baseCosts: { [ResourceType.CULTURE]: 100000, [ResourceType.TECH_CAPITAL]: 5000 },
    baseProduction: { [ResourceType.CULTURE]: 100.0, [ResourceType.MIND_CONTROL]: 5.0, [ResourceType.REALITY]: -2.0 },
    costMultiplier: 1.5,
    icon: 'Zap',
    unlockRequirement: 0, // Reset
    requireTech: ['meme_singularity'],
  }
];
