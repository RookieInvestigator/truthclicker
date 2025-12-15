
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_1_TECHS: Tech[] = [
  // --- NETWORK START ---
  {
    id: 'doomscrolling',
    name: '末日滚动',
    description: '拇指滑动屏幕的速度早已超越了思维，这是一种数字时代特有的、刻在潜意识里的条件反射。',
    longDescription: '阿扎·拉斯金在发明无限滚动机制时，或许未曾预料到它会成为吞噬人类时间的黑洞。他在多年后表达了悔意，称其为“行为可卡因”。\n\n这种设计剥夺了大脑的停止信号。底部消失了，翻页的动作被取消了，只剩下拇指机械般的抽搐。每一条令人焦虑的新闻都是多巴胺的微量注射。我们不停下滑，期待着下一个能够解释世界崩塌的真相，得到的却只有更多的混乱。',
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
    description: '通过向网络洪水般倾泻无意义的垃圾数据，制造混乱的噪音来完美掩盖你真实的数字踪迹。',
    longDescription: '弗朗西斯·E·戴克（Francis E. Dec）在20世纪疯狂地邮寄关于“黑帮电脑神”的疯言疯语，他被视为垃圾邮件的精神始祖。\n\n我们继承了他的遗产。语言不再是交流的工具，它变成了阻塞通道的泥沙。通过算法生成的语无伦次的长句，我们让所有的过滤器过载，让每一条有价值的信息都淹没在机械精神分裂的呓语海洋中。',
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
    description: '回归去中心化的阅读本质，建立专属的信息管道，不再被那些旨在劫持注意力的算法所裹挟。',
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
    id: 'crowdsourcing_api',
    name: '人工智慧任务 (HIT)',
    description: '将人类大脑降级为处理验证码和图像标记的生物组件，这是比硅基芯片更廉价的处理器。',
    longDescription: '18世纪的“土耳其行棋傀儡”震惊了欧洲，那是号称能自动下棋的机械奇迹。实际上，那只是一个精巧的骗局，齿轮之下蜷缩着一名人类棋手。\n\n今天，我们重建了这个骗局。所谓的“人工智能”黑箱里，不存在神奇的魔法代码，只有成千上万名廉价劳工。他们日夜不休地标记数据，用血肉之躯填补算法无法跨越的最后这几微米鸿沟。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.INFO]: 300, [ResourceType.FUNDS]: 10 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.05 },
        unlockMessage: '解锁: 机械土耳其BOT'
    },
    icon: 'Users',
    preRequisiteTech: 'scavenger_intuition'
  },
  {
    id: 'cardboard_architecture',
    name: '纸板工程学',
    description: '掌握了将废弃纸箱改造成防水隔热庇护所的工程学技巧，这是城市流浪者必备的生存智慧。',
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
    description: '“你会吃虫子，并且你会感到快乐。”这是达沃斯论坛上的精英们为底辺阶级规划的完美未来。',
    longDescription: '这是一种被精心包装为“环保”和“可持续”的阶级羞辱。当真正的牛肉成为万亿富翁私人掩体里的奢侈品，几丁质糊状物便成了普罗大众唯一的蛋白质来源。\n\n我们学会了在公寓的衣柜里养殖蟑螂和黄粉虫，把它们视为微型牲畜。闭上眼睛，嚼碎它们的外骨骼，告诉自己这是虾肉。这既是生存的智慧，也是新自由主义噩梦的最终形态。',
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
    description: '学会了绕过计费仪表直接接入市政电网和光缆，虽然伴随着极高的触电风险，但收益是巨大的。',
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
    description: '练就了一双在电子垃圾堆中慧眼识珠的火眼金睛，能瞬间分辨出哪些电路板只需清洗即可重启。',
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
    description: '深刻洞察平台算法的漏洞，通过刷单和流量劫持等灰色手段，将毫无价值的商品包装成爆款。',
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
    description: '理解了分布式账本的核心逻辑，在这个缺乏信任的世界里，依靠数学和加密算法构建不可篡改的真理。',
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
    description: '深谙网络社区的潜规则和黑话，懂得在发言前先潜水观察，以免因不懂表情包语法而被原住民围攻。',
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
    description: '精心设计那些利用人类好奇心漏洞的惊悚标题，引诱用户不由自主地点击，哪怕内容空洞无物。',
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
    description: '掌握了 Python 或 Bash 的基础语法，开始编写自动化脚本让机器为你工作，不再做重复劳动的奴隶。',
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
    description: '青轴清脆的咔哒声如同赛博空间的节拍器，这种极致的触觉反馈能显著提升你编写代码的效率。',
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
    description: '不再局限于简单的关键词，而是熟练运用复杂的布尔逻辑和高级指令，从搜索引擎的深处挖掘秘密。',
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
    description: '利用光学字符识别技术，将模糊图片中冻结的文字转化为可被检索和编辑的流动数据。',
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
    description: '坚信硬盘空间有价而数据记忆无价，患上了拒绝删除任何文件的数字囤积症，因为未来皆可回溯。',
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
    description: '像考古学家一样在死去的服务器中挖掘，寻找那些因公司倒闭而被遗忘、不再受版权保护的软件遗产。',
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
    description: '开始敏锐地捕捉生活中反复出现的特定数字组合，试图在这些看似随机的巧合中解读出宇宙的隐藏代码。',
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
    description: '部署自动化脚本日夜不休地敲击网络上的每一扇数字大门，寻找那些因管理员疏忽而未上锁的端口。',
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
    description: '利用路径解析漏洞不断向上层目录回溯，只要走得够远，就能越过权限的高墙一窥服务器的根目录。',
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
