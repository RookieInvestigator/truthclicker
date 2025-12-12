
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_1_TECHS: Tech[] = [
  // --- NETWORK START ---
  {
    id: 'doomscrolling',
    name: '末日滚动',
    description: '拇指比眼快。潜意识处理信息流，数字时代的条件反射。',
    tier: 1,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 400 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 },
        unlockMessage: '解锁: 加密中继节点 / 死灵局域网'
    },
    icon: 'ArrowDownCircle',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'spam_algorithms', 
    name: '垃圾邮件算法',
    description: '通过大量发送无意义信息来掩盖你的真实踪迹。数据干扰战术。',
    tier: 1,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 600 }, 
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.5, [ResourceType.FUNDS]: 0.1 },
        unlockMessage: '解锁: 垃圾邮件机器人'
    },
    icon: 'Mail',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'rss_feeds',
    name: 'RSS 订阅',
    description: '真正简单聚合。去中心化的阅读方式，不被算法裹挟。',
    tier: 1,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.15 },
        unlockMessage: '解锁: 信息聚合器'
    },
    icon: 'Rss',
    preRequisiteTech: 'doomscrolling'
  },

  // --- SURVIVAL ---
  {
    id: 'cardboard_architecture',
    name: '纸板工程学',
    description: '精通如何用废纸箱搭建防水、隔热的临时庇护所。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CARDBOARD]: 50, [ResourceType.INFO]: 200 },
    effects: {
        globalCostReduction: 0.05,
        resourceMultipliers: { [ResourceType.CARDBOARD]: 0.2 },
        recycleEfficiency: 0.1,
        unlockMessage: '解锁: 健身车发电机 / 定点拾荒'
    },
    icon: 'Package',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'urban_entomology',
    name: '城市昆虫学',
    description: '黄粉虫降解泡沫。将废弃物转化为卡路里的最高效方式。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 350, [ResourceType.CARDBOARD]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.1 },
        unlockMessage: '解锁: 黄粉虫饲养箱'
    },
    icon: 'Bug',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'wire_splicing',
    name: '非法接线',
    description: '不用付费就能获取电力和网络。风险自负。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CARDBOARD]: 100, [ResourceType.FUNDS]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 废铜回收 / 寄生电源'
    },
    icon: 'ZapOff',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'used_hardware_flipping',
    name: '电子垃圾鉴别',
    description: '垃圾还是宝藏？区分炸掉的电容和仅仅脏了的电路板。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 800, [ResourceType.FUNDS]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.1 },
        recycleEfficiency: 0.15,
        unlockMessage: '解锁: 电子黑市摊位'
    },
    icon: 'Search',
    preRequisiteTech: 'cardboard_architecture'
  },
  
  // --- CAPITAL ---
  {
    id: 'e_commerce_logic',
    name: '电商逻辑',
    description: '理解如何利用平台规则。刷单、假评论、流量劫持。',
    tier: 1,
    category: BuildingCategory.CAPITAL, // Changed
    costs: { [ResourceType.FUNDS]: 500, [ResourceType.SPAM]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2 },
        unlockMessage: '解锁: 代发货网店'
    },
    icon: 'ShoppingCart',
    preRequisiteTech: 'spam_algorithms'
  },
  {
    id: 'blockchain_basics',
    name: '区块链基础',
    description: '分布式账本。信任的去中心化。',
    tier: 1,
    category: BuildingCategory.CAPITAL, // Changed
    costs: { [ResourceType.INFO]: 2000, [ResourceType.POWER]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.1 },
        unlockMessage: '解锁: 加密水龙头 / NFT 铸造工厂'
    },
    icon: 'Link',
    preRequisiteTech: 'basic_scripting'
  },

  // --- INTERNET CULTURE ---
  {
    id: 'forum_culture',
    name: '论坛潜规则',
    description: '发言前先观察。理解表情包语法 (Lurk moar)。',
    tier: 1,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2 },
        unlockMessage: '解锁: 表情包文件夹'
    },
    icon: 'MessageSquare',
    preRequisiteTech: 'doomscrolling'
  },
  {
    id: 'clickbait_tactics',
    name: '标题党战术',
    description: '震惊！利用人类的好奇心漏洞，诱导点击。',
    tier: 1,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.SPAM]: 10 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.5, [ResourceType.FOLLOWERS]: 0.1 },
        unlockMessage: '解锁: 瑞克摇诱捕链'
    },
    icon: 'MousePointer',
    preRequisiteTech: 'spam_algorithms'
  },

  // --- TECHNOCRACY ---
  {
    id: 'basic_scripting',
    name: '基础脚本',
    description: 'Python 或 Bash。让机器为你工作，而非反之。',
    tier: 1,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.1, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 脚本工具箱 / 树莓派集群'
    },
    icon: 'Terminal',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'mechanical_keyboards',
    name: '机械轴体',
    description: '青轴的咔哒声是赛博空间的节拍器。触觉反馈能提升输入效率。',
    tier: 1,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 300, [ResourceType.OPS]: 10 },
    effects: {
        clickPowerMult: 0.15,
        unlockMessage: '指尖的愉悦'
    },
    icon: 'Keyboard',
    preRequisiteTech: 'basic_scripting'
  },

  // --- VERIFICATION & ARCHIVE ---
  {
    id: 'search_operators',
    name: '高级搜索指令',
    description: '大部分人只会用关键字，而你懂得 Google Hacking 语法。',
    tier: 1,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 全网爬虫 / Whois 查询'
    },
    icon: 'Search',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'ocr_basics',
    name: 'OCR 识别',
    description: '将图片中的文字转化为可检索的数据。',
    tier: 1,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.CODE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.05, [ResourceType.CODE]: 0.05 },
        unlockMessage: '解锁: 元数据提取器'
    },
    icon: 'Scan',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'data_hoarding_basics',
    name: '数字囤积症',
    description: '永远不要删除任何东西。硬盘很便宜，记忆很昂贵。',
    tier: 1,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 1200, [ResourceType.CARDBOARD]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 },
        recycleEfficiency: 0.25,
        unlockMessage: '解锁: 缩微胶片地下室'
    },
    icon: 'Save',
    preRequisiteTech: 'digital_literacy'
  },

  // --- HISTORY & ESOTERIC ---
  {
    id: 'abandonware_archeology',
    name: '废弃软件考古',
    description: '寻找那些公司倒闭后留下的无主软件。',
    tier: 1,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 800 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.1 },
        artifactChanceMult: 0.05
    },
    icon: 'Disc',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'numerology_basics',
    name: '数字命理学入门',
    description: '23. 11:11. 寻找数字中的巧合。',
    tier: 1,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.INFO]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.PROBABILITY]: 0.05, [ResourceType.CLUE]: 0.05 },
        artifactRarityBonus: 0.05
    },
    icon: 'Hash',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'port_scanner_bot',
    name: '端口扫描',
    description: '敲每一扇门，看哪扇没锁。',
    tier: 1,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 500, [ResourceType.INFO]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 },
        unlockMessage: '解锁: 公网摄像头嗅探'
    },
    icon: 'Radar',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'directory_traversal',
    name: '目录遍历',
    description: '../.. 只要往上走得够远，就能看到根目录。',
    tier: 1,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 800 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 },
        unlockMessage: '解锁: 开放目录索引'
    },
    icon: 'FolderOpen',
    preRequisiteTech: 'search_operators'
  }
];
