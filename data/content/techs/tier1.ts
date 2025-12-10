
import { Tech, ResourceType } from '../../../types';

export const TIER_1_TECHS: Tech[] = [
  // --- NETWORK START ---
  {
    id: 'dial_up_handshake',
    name: '调制解调器握手',
    description: '优化握手协议，减少掉线率并提升连接稳定性。',
    tier: 1,
    costs: { [ResourceType.INFO]: 400 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 }, // Nerfed 0.2 -> 0.1
        unlockMessage: '连接效率提升'
    },
    icon: 'PhoneCall',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'spam_algorithms', 
    name: '垃圾邮件算法',
    description: '通过大量发送无意义信息来掩盖你的真实踪迹。',
    tier: 1,
    costs: { [ResourceType.INFO]: 800 }, 
    effects: {
        unlockMessage: '解锁: 垃圾邮件机器人 / 算法审计员'
    },
    icon: 'Mail',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'potato_power',
    name: '马铃薯电池阵列',
    description: '理论上可行的低级能源解决方案。',
    tier: 1,
    costs: { [ResourceType.CARDBOARD]: 10, [ResourceType.INFO]: 250 }, // BIOMASS -> CARDBOARD
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.5 }, 
        unlockMessage: '微弱的电流'
    },
    icon: 'Zap',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'gopher_protocol', 
    name: 'Gopher 协议',
    description: '在万维网(WWW)之前的纯文本菜单网络。挖掘深层信息的古老方式。',
    tier: 1,
    costs: { [ResourceType.INFO]: 600 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 }, // Nerfed 0.2 -> 0.1
        unlockMessage: '解锁: Gopher 洞穴'
    },
    icon: 'List',
    preRequisiteTech: 'dial_up_handshake'
  },
  {
    id: 'rss_feeds', 
    name: 'RSS 聚合',
    description: 'Really Simple Syndication。让信息主动来找你，而不是去寻找它。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1000 }, 
    effects: {
        unlockMessage: '解锁: RSS 阅读器'
    },
    icon: 'Rss',
    preRequisiteTech: 'gopher_protocol'
  },
  {
    id: 'html_1_0', 
    name: 'HTML 1.0',
    description: '学习基础的超文本标记语言。<marquee>标签是最酷的发明。',
    tier: 1,
    costs: { [ResourceType.INFO]: 800, [ResourceType.FUNDS]: 50 }, 
    effects: {
        unlockMessage: '解锁: 静态粉丝页'
    },
    icon: 'Code',
    preRequisiteTech: 'dial_up_handshake'
  },

  // --- SURVIVAL ---
  {
    id: 'wire_splicing',
    name: '电线接驳技术',
    description: '如何安全地（相对而言）从电网偷电。',
    tier: 1,
    costs: { [ResourceType.INFO]: 500, [ResourceType.FUNDS]: 100 }, 
    effects: {
        unlockMessage: '解锁: 非法接电'
    },
    icon: 'Zap',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'ocr_basics', 
    name: 'OCR 基础',
    description: '光学字符识别。虽然你现在是人工识别，但这是自动化的第一步。',
    tier: 1,
    costs: { [ResourceType.INFO]: 300 }, 
    effects: {
        unlockMessage: '解锁: 验证码代打'
    },
    icon: 'Scan',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'cardboard_architecture',
    name: '纸箱建筑学',
    description: '快递盒不是垃圾，是模块化的隔音墙和家具。',
    tier: 1,
    costs: { [ResourceType.CARDBOARD]: 10, [ResourceType.INFO]: 400 }, 
    effects: { 
        globalCostReduction: 0.02,
        recycleEfficiency: 0.1,
        unlockMessage: '解锁: 废纸板真菌床 / 脚踏发电机' 
    },
    icon: 'Package',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'used_hardware_flipping',
    name: '电子垃圾倒卖',
    description: '从废品站回收显卡，清洗后挂在闲鱼上。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1200, [ResourceType.CARDBOARD]: 25 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.FUNDS]: 0.1 },
        recycleEfficiency: 0.15
    },
    icon: 'Recycle',
    preRequisiteTech: 'cardboard_architecture',
  },
  {
    id: 'data_hoarding_basics',
    name: '松鼠症 (Data Hoarding)',
    description: '即便不知道有什么用，先下载下来再说。',
    tier: 1,
    costs: { [ResourceType.INFO]: 2500 }, 
    effects: { 
        recycleEfficiency: 0.25, 
        unlockMessage: '解锁类别: 档案馆' 
    },
    icon: 'HardDrive',
    preRequisiteTech: 'used_hardware_flipping',
  },
  {
    id: 'payment_processing',
    name: '电子支付账户',
    description: '注册一个不记名的收款账户。',
    tier: 1,
    costs: { [ResourceType.INFO]: 350 }, 
    effects: { resourceMultipliers: { [ResourceType.FUNDS]: 0.15 } },
    icon: 'CreditCard',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'e_commerce_logic',
    name: '电商逻辑',
    description: '中间商赚差价的自动化形式。',
    tier: 1,
    costs: { [ResourceType.INFO]: 4000, [ResourceType.FUNDS]: 1000 }, 
    effects: { unlockMessage: '解锁: 代发货店铺' },
    icon: 'Store',
    preRequisiteTech: 'payment_processing',
  },

  // --- TECH ---
  {
    id: 'mechanical_keyboards',
    name: '客制化机械键盘',
    description: '花费巨资润轴。噪音能提升打字速度。',
    tier: 1,
    costs: { [ResourceType.FUNDS]: 500, [ResourceType.INFO]: 300 }, 
    effects: { clickPowerMult: 0.5 },
    icon: 'Keyboard',
    preRequisiteTech: 'payment_processing',
  },
  {
    id: 'programming_socks',
    name: '编程袜',
    description: '粉白条纹不仅是审美，更是C++编译成功的护身符。',
    tier: 1,
    costs: { [ResourceType.FUNDS]: 800, [ResourceType.INFO]: 500 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.CODE]: 0.3 },
        unlockMessage: '获得被动技能：绝对领域调试法' 
    },
    icon: 'Codesandbox',
    preRequisiteTech: 'mechanical_keyboards',
  },
  {
    id: 'basic_scripting',
    name: '基础脚本 (Python)',
    description: '自动化简单的重复操作。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.FUNDS]: 100 }, 
    effects: { unlockMessage: '解锁: 脚本工具箱' },
    icon: 'Terminal',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'search_operators',
    name: 'Google Dorking',
    description: '熟练使用 ext:pdf 和 inurl:admin。',
    tier: 1,
    costs: { [ResourceType.INFO]: 600 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
        unlockMessage: '解锁: 敏感目录爬虫 / 事实核查机器人' 
    },
    icon: 'Search',
    preRequisiteTech: 'digital_literacy',
  },

  // --- CULTURE ---
  {
    id: 'forum_culture',
    name: '论坛文化',
    description: '理解 4chan, Reddit 和 贴吧 的黑话。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1000 }, 
    effects: { 
        unlockMessage: '解锁: 论坛潜水 / 都市传说论坛' 
    },
    icon: 'MessageSquare',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'clickbait_tactics', 
    name: '标题党战术',
    description: '震惊！男人看了沉默女人看了流泪。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.FUNDS]: 150 }, 
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.5 },
        unlockMessage: '点击率提升'
    },
    icon: 'MousePointer2',
    preRequisiteTech: 'forum_culture'
  },

  // --- KNOWLEDGE / ESOTERIC START (Tier 1) ---
  {
    id: 'symbolism_decoding',
    name: '象征主义解码',
    description: '理解玫瑰十字与衔尾蛇的含义。数据不仅仅是0和1，而是指向更高维度的符号。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1500 }, // Reduced 2500 -> 1500 due to info nerf
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '能指与所指分离'
    },
    icon: 'Eye',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'numerology_basics',
    name: '数字命理学基础',
    description: '23, 11:11, 42。在看似随机的噪音中寻找神圣的几何秩序。',
    tier: 1,
    costs: { [ResourceType.INFO]: 1200, [ResourceType.FUNDS]: 100 }, // Reduced 2000 -> 1200
    effects: {
        clickPowerMult: 0.1,
        unlockMessage: '数学是宇宙的语言'
    },
    icon: 'Hash',
    preRequisiteTech: 'digital_literacy'
  },
];
