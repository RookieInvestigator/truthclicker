
import { Tech, ResourceType, BuildingCategory } from '../types';

export const TECHS: Tech[] = [
  // ##########################################################################
  // TIER 0: THE AWAKENING (Foundation)
  // ##########################################################################
  {
    id: 'digital_literacy',
    name: '网络冲浪常识',
    description: '你知道真正的互联网在水面之下。解锁更高级的生存方式。',
    tier: 0,
    costs: { [ResourceType.INFO]: 50 },
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.1 }, 
        clickPowerMult: 0.2, 
        unlockMessage: '系统初始化... 连入网络' 
    },
    icon: 'Search',
  },
  {
    id: 'caffeine_dependence',
    name: '咖啡因依赖',
    description: '用睡眠换取效率。调查员不需要休息。',
    tier: 0,
    costs: { [ResourceType.INFO]: 100 },
    effects: { 
        clickPowerMult: 0.3,
        unlockMessage: '精神状态：亢奋'
    },
    icon: 'Coffee', 
    preRequisiteTech: 'digital_literacy',
  },

  // ##########################################################################
  // TIER 1: SURFACE WEB (Skills & Basics)
  // ##########################################################################
  
  // --- NETWORK START ---
  {
    id: 'dial_up_handshake',
    name: '调制解调器握手',
    description: '优化握手协议，减少掉线率并提升连接稳定性。',
    tier: 1,
    costs: { [ResourceType.INFO]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 }, 
        unlockMessage: '连接效率提升'
    },
    icon: 'PhoneCall',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'spam_algorithms', // NEW
    name: '垃圾邮件算法',
    description: '通过大量发送无意义信息来掩盖你的真实踪迹。',
    tier: 1,
    costs: { [ResourceType.INFO]: 400 },
    effects: {
        unlockMessage: '解锁: 垃圾邮件机器人 / 算法审计员'
    },
    icon: 'Mail',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'potato_power', // NEW
    name: '马铃薯电池阵列',
    description: '理论上可行的低级能源解决方案。',
    tier: 1,
    costs: { [ResourceType.BIOMASS]: 10, [ResourceType.INFO]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.5 }, // Slight boost to base power generation
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
    costs: { [ResourceType.INFO]: 300 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
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
    costs: { [ResourceType.INFO]: 500 },
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
    costs: { [ResourceType.INFO]: 400, [ResourceType.FUNDS]: 20 },
    effects: {
        unlockMessage: '解锁: 静态粉丝页'
    },
    icon: 'Code',
    preRequisiteTech: 'dial_up_handshake'
  },

  // --- SURVIVAL ---
  {
    id: 'wire_splicing', // NEW
    name: '电线接驳技术',
    description: '如何安全地（相对而言）从电网偷电。',
    tier: 1,
    costs: { [ResourceType.INFO]: 200, [ResourceType.FUNDS]: 50 },
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
    costs: { [ResourceType.INFO]: 150 },
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
    costs: { [ResourceType.CARDBOARD]: 5, [ResourceType.INFO]: 200 },
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
    costs: { [ResourceType.INFO]: 600, [ResourceType.CARDBOARD]: 10 },
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
    costs: { [ResourceType.INFO]: 1000 },
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
    costs: { [ResourceType.INFO]: 150 },
    effects: { resourceMultipliers: { [ResourceType.FUNDS]: 0.15 } },
    icon: 'CreditCard',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'e_commerce_logic',
    name: '电商逻辑',
    description: '中间商赚差价的自动化形式。',
    tier: 1,
    costs: { [ResourceType.INFO]: 2500, [ResourceType.FUNDS]: 500 },
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
    costs: { [ResourceType.FUNDS]: 200, [ResourceType.INFO]: 100 },
    effects: { clickPowerMult: 0.5 },
    icon: 'Keyboard',
    preRequisiteTech: 'payment_processing',
  },
  {
    id: 'programming_socks',
    name: '编程袜',
    description: '粉白条纹不仅是审美，更是C++编译成功的护身符。',
    tier: 1,
    costs: { [ResourceType.FUNDS]: 350, [ResourceType.INFO]: 200 },
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
    costs: { [ResourceType.INFO]: 600, [ResourceType.FUNDS]: 50 },
    effects: { unlockMessage: '解锁: 脚本工具箱' },
    icon: 'Terminal',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'search_operators',
    name: 'Google Dorking',
    description: '熟练使用 ext:pdf 和 inurl:admin。',
    tier: 1,
    costs: { [ResourceType.INFO]: 300 },
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
    costs: { [ResourceType.INFO]: 400 },
    effects: { 
        unlockMessage: '解锁: 论坛潜水 / 都市传说论坛' 
    },
    icon: 'MessageSquare',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'clickbait_tactics', // NEW
    name: '标题党战术',
    description: '震惊！男人看了沉默女人看了流泪。',
    tier: 1,
    costs: { [ResourceType.INFO]: 600, [ResourceType.FUNDS]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.5 }, // Increases Spam value/production
        unlockMessage: '点击率提升'
    },
    icon: 'MousePointer2',
    preRequisiteTech: 'forum_culture'
  },

  // ##########################################################################
  // TIER 2: DEEP WEB (Rabbit Holes Start)
  // ##########################################################################
  
  // --- NETWORK EXPANSION ---
  {
    id: 'usenet_access', 
    name: 'Usenet 访问',
    description: '新闻组是互联网的活化石。所有现代梗的起源都在这里。',
    tier: 2,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.CRED]: 10 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.25 },
        unlockMessage: '解锁: 新闻组归档'
    },
    icon: 'Newspaper',
    preRequisiteTech: 'rss_feeds'
  },
  {
    id: 'botnet_architecture',
    name: '僵尸网络架构',
    description: '理解如何利用漏洞控制成千上万台物联网设备。',
    tier: 2,
    costs: { [ResourceType.CODE]: 2000, [ResourceType.OPS]: 500 },
    effects: {
        unlockMessage: '解锁: 僵尸网络 / 点击农场'
    },
    icon: 'Bot',
    preRequisiteTech: 'spam_algorithms'
  },
  {
    id: 'vpn_tunneling', 
    name: 'VPN 隧道',
    description: '绕过地理限制，隐藏真实IP。通往深网的第一步。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2500, [ResourceType.FUNDS]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.15, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 代理节点'
    },
    icon: 'Lock',
    preRequisiteTech: 'rss_feeds'
  },
  {
    id: 'creepypasta_analysis', // NEW
    name: 'Creepypasta 分析',
    description: '分析 Slender Man 和 Jeff the Killer 的传播路径。',
    tier: 2,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.LORE]: 10 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
        unlockMessage: '民俗学研究入门'
    },
    icon: 'Ghost',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'steganography', 
    name: '隐写术 (Steganography)',
    description: '将秘密信息隐藏在图片的像素噪点中。',
    tier: 2,
    costs: { [ResourceType.CODE]: 500, [ResourceType.INFO]: 3000 },
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 匿名贴图板'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pixel_art_basics'
  },
  {
    id: 'p2p_sharing', 
    name: 'P2P 文件共享',
    description: 'eMule 和 BitTorrent。人人为我，我为人人。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2500, [ResourceType.OPS]: 300 },
    effects: {
        unlockMessage: '解锁: 盗版软件 FTP'
    },
    icon: 'Share2',
    preRequisiteTech: 'usenet_access'
  },

  // --- HISTORY & ARCHAEOLOGY ---
  {
    id: 'carbon_dating', 
    name: '碳-14 测年法',
    description: '确定文物的年代。揭穿赝品，或者发现不该存在的物体。',
    tier: 2,
    costs: { [ResourceType.KNOWLEDGE]: 10, [ResourceType.INFO]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.1, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 时间胶囊挖掘'
    },
    icon: 'Clock',
    preRequisiteTech: 'abandonware_archeology'
  },
  {
    id: 'microfilm_scanning', 
    name: '缩微胶卷扫描',
    description: '在图书馆的地下室里，阅读1950年的报纸。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2000, [ResourceType.CARDBOARD]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
        unlockMessage: '解锁: 缩微阅读器 / 口述历史项目'
    },
    icon: 'Film',
    preRequisiteTech: 'carbon_dating'
  },

  // --- SURVIVAL / TECH ---
  {
    id: 'chlorella_cultivation',
    name: '小球藻培养槽',
    description: '在衣柜里用LED灯养殖高蛋白藻类。末日生存口粮。',
    tier: 2,
    costs: { [ResourceType.FUNDS]: 1000, [ResourceType.CARDBOARD]: 50 },
    effects: { 
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2, [ResourceType.FUNDS]: 0.1 }, 
        unlockMessage: '实现蛋白质自给自足' 
    },
    icon: 'FlaskConical',
    preRequisiteTech: 'cardboard_architecture',
  },
  {
    id: 'cryptozoology', 
    name: '神秘动物学',
    description: '相信天蛾人和大脚怪的存在并非迷信，而是对已知生物学的补充。',
    tier: 2,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.CLUE]: 5 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: 天蛾人诱捕灯'
    },
    icon: 'PawPrint',
    preRequisiteTech: 'abandoned_angelfire'
  },
  {
    id: 'magic_bullet_theory', // NEW
    name: '魔弹理论 (Magic Bullet)',
    description: '一颗子弹怎么可能在空中转弯？JFK 档案的物理学并不存在。',
    tier: 2,
    costs: { [ResourceType.CLUE]: 20, [ResourceType.INFO]: 3000 },
    effects: {
        resourceMultipliers: { [ResourceType.STORY]: 0.2, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: Grassy Knoll 弹道模拟'
    },
    icon: 'Crosshair',
    preRequisiteTech: 'microfilm_scanning'
  },
  {
    id: 'evp_recording', 
    name: 'EVP 录音技术',
    description: '电子语音现象。在白噪音中捕捉死者的低语。',
    tier: 2,
    costs: { [ResourceType.INFO]: 1200, [ResourceType.CARDBOARD]: 20 },
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 灵界录音机'
    },
    icon: 'Mic',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'magnet_fishing', 
    name: '磁力打捞',
    description: '用强力磁铁在运河中吸附被谋杀案抛弃的凶器。',
    tier: 2,
    costs: { [ResourceType.CARDBOARD]: 50, [ResourceType.FUNDS]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.1, [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 运河磁铁钓点'
    },
    icon: 'Anchor',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'pseudoscience_marketing', 
    name: '伪科学营销',
    description: '量子波动速读？负离子内裤？只要有人信，就能变现。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2000, [ResourceType.CRED]: 10 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.3 },
        unlockMessage: '解锁: 智商税商店'
    },
    icon: 'DollarSign',
    preRequisiteTech: 'e_commerce_logic'
  },
  {
    id: 'hardware_assembly',
    name: '垃圾佬硬件组装',
    description: '用至强 E5 处理器搭建家用服务器。',
    tier: 2,
    costs: { [ResourceType.INFO]: 800, [ResourceType.FUNDS]: 200 },
    effects: { 
        globalCostReduction: 0.02,
        unlockMessage: '解锁: 屋顶光伏阵列'
    },
    icon: 'Cpu',
    preRequisiteTech: 'basic_scripting',
  },
  {
    id: 'biohacking_basics',
    name: '生物黑客 (Grinders)',
    description: '在指尖植入磁体，感受微波炉的电磁场。',
    tier: 2,
    costs: { [ResourceType.FUNDS]: 3000, [ResourceType.BIOMASS]: 10 },
    effects: { 
        clickPowerMult: 0.4,
        artifactChanceMult: 0.2,
        unlockMessage: '解锁: DNA 存储库'
    },
    icon: 'Activity',
    preRequisiteTech: 'chlorella_cultivation',
  },
  
  // ##########################################################################
  // TIER 3: DARK WEB (Conspiracies & Illegal Tech)
  // ##########################################################################
  
  // --- NETWORK ---
  {
    id: 'tor_network',
    name: '洋葱路由 (Tor)',
    description: '进入深网。访问 .onion 站点。',
    tier: 3,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CODE]: 500 },
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
    costs: { [ResourceType.FUNDS]: 8000, [ResourceType.OPS]: 2000 },
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
    costs: { [ResourceType.INFO]: 10000, [ResourceType.OPS]: 1000 },
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '解锁: 僵尸评论工厂'
    },
    icon: 'Bot',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'dead_theory_bot', // NEW
    name: '死理论验证机器人',
    description: '如果互联网已死，那就利用尸体。',
    tier: 3,
    costs: { [ResourceType.CODE]: 3000, [ResourceType.SPAM]: 500 },
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
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CULTURE]: 100 },
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
    costs: { [ResourceType.CLUE]: 50, [ResourceType.KNOWLEDGE]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.3 },
        unlockMessage: '解锁: 欧帕兹收藏馆'
    },
    icon: 'Box',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'majestic_12', // NEW
    name: 'Majestic-12 文件',
    description: '1947年成立的秘密委员会。负责回收外星飞船。',
    tier: 3,
    costs: { [ResourceType.CLUE]: 100, [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.2, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '解锁: MJ-12 影子服务器'
    },
    icon: 'FileText',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'black_knight_satellite', // NEW
    name: '黑骑士卫星 (Black Knight)',
    description: '它在极地轨道上运行了13000年。特斯拉曾接收过它的信号。',
    tier: 3,
    costs: { [ResourceType.OPS]: 3000, [ResourceType.INFO]: 8000 },
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
    costs: { [ResourceType.KNOWLEDGE]: 20, [ResourceType.FUNDS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
        unlockMessage: '解锁: 凝尾喷洒机'
    },
    icon: 'CloudRain',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'fluoride_calcification', // NEW
    name: '松果体钙化研究',
    description: '水中的氟化物不仅仅为了牙齿健康，它是为了封闭你的“第三只眼”。',
    tier: 3,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.BIOMASS]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
        unlockMessage: '解锁: 氟化物添加系统'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pseudoscience_marketing'
  },
  {
    id: 'crisis_acting', // NEW
    name: '危机演员 (Crisis Actors)',
    description: '那些在不同新闻悲剧中出现的同一张面孔。一切都是剧本。',
    tier: 3,
    costs: { [ResourceType.FUNDS]: 5000, [ResourceType.RUMORS]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.3 },
        unlockMessage: '谣言传播加速'
    },
    icon: 'Drama',
    preRequisiteTech: 'clickbait_tactics'
  },
  {
    id: 'social_engineering', // NEW
    name: '社会工程学',
    description: '人是系统中最薄弱的环节。',
    tier: 3,
    costs: { [ResourceType.INFO]: 3000, [ResourceType.CRED]: 20 },
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
    costs: { [ResourceType.INFO]: 8000, [ResourceType.CRED]: 50 },
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
    costs: { [ResourceType.INFO]: 1200 },
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
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CULTURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 模因战中心 / 叙事纺织机'
    },
    icon: 'Dna',
    preRequisiteTech: 'forum_culture'
  },

  // ##########################################################################
  // TIER 4: EVENT HORIZON (Fringe Science & History)
  // ##########################################################################
  {
    id: 'cold_fusion', // NEW
    name: '冷聚变',
    description: 'Fleischmann 和 Pons 是对的。常温下的核反应是可能的。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 200, [ResourceType.POWER]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2 },
        unlockMessage: '解锁: 车库聚变反应堆'
    },
    icon: 'Atom',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'aklo_language', // NEW
    name: 'Aklo 语',
    description: '一种源自前人类文明的语言，据说能在大脑中引起生理变化。',
    tier: 4,
    costs: { [ResourceType.LORE]: 100, [ResourceType.KNOWLEDGE]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.5 },
        unlockMessage: '解锁禁忌文本'
    },
    icon: 'Languages',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'infinite_scroll_trap', // NEW
    name: '无限滚动陷阱',
    description: '利用多巴胺回路将用户永久锁定在屏幕前。',
    tier: 4,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.MIND_CONTROL]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: -0.2, [ResourceType.FOLLOWERS]: 0.3 }, // Turns spam into followers
    },
    icon: 'ArrowDown',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'monarch_programming', // NEW
    name: '帝王计划 (Project Monarch)',
    description: 'MKUltra 的延续。通过创伤性解离创造多重人格间谍。',
    tier: 4,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.MIND_CONTROL]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.3 },
    },
    icon: 'Crown',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'deep_state_mapping', // NEW
    name: '深层政府拓扑图',
    description: '连接所有点。所有的公司、所有的政客、所有的资金流向。',
    tier: 4,
    costs: { [ResourceType.INFO]: 50000, [ResourceType.RUMORS]: 200 },
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
    costs: { [ResourceType.KNOWLEDGE]: 200, [ResourceType.TRUTH]: 10 },
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
    costs: { [ResourceType.KNOWLEDGE]: 500, [ResourceType.OPS]: 5000 },
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
    costs: { [ResourceType.KNOWLEDGE]: 300, [ResourceType.BIOMASS]: 100 },
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
    costs: { [ResourceType.INFO]: 30000, [ResourceType.CARDBOARD]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.3 },
        unlockMessage: '解锁: 泥浆挖掘机'
    },
    icon: 'Shovel',
    preRequisiteTech: 'abandonware_archeology'
  },

  // ##########################################################################
  // TIER 5: THE FRINGE (Esoteric & Deep Conspiracy)
  // ##########################################################################
  {
    id: 'neurolinguistic_programming', 
    name: '神经语言程序学 (NLP)',
    description: '通过特定的语言模式重新编程大脑。洗脑的科学化。',
    tier: 5,
    costs: { [ResourceType.INFO]: 50000, [ResourceType.CULTURE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 阈下信息站'
    },
    icon: 'MessageCircle',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'wireless_power', // NEW
    name: '无线能量传输',
    description: '特斯拉沃登克里弗塔的未竟事业。',
    tier: 5,
    costs: { [ResourceType.POWER]: 10000, [ResourceType.OPS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.3 },
        unlockMessage: '解锁: 特斯拉线圈阵列'
    },
    icon: 'Zap',
    preRequisiteTech: 'cold_fusion'
  },
  {
    id: 'v2k_technology', // NEW
    name: 'V2K 技术 (Voice-to-Skull)',
    description: '微波听觉效应。直接将声音投射到目标的头骨内。',
    tier: 5,
    costs: { [ResourceType.OPS]: 10000, [ResourceType.MIND_CONTROL]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.5 },
        unlockMessage: '解锁: 5G 信号塔'
    },
    icon: 'Radio',
    preRequisiteTech: 'monarch_programming'
  },
  {
    id: 'atlantean_knowledge', // NEW
    name: '亚特兰蒂斯几何学',
    description: '柏拉图描述的完美城市布局实际上是一个能量回路。',
    tier: 5,
    costs: { [ResourceType.ANCIENT_WISDOM]: 50, [ResourceType.KNOWLEDGE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.3 },
    },
    icon: 'Triangle',
    preRequisiteTech: 'mud_flood'
  },
  {
    id: 'mass_psychogenic_illness', // NEW
    name: '群体性心因性疾病',
    description: '利用[恐慌]和[谣言]引发真实的生理症状。',
    tier: 5,
    costs: { [ResourceType.PANIC]: 500, [ResourceType.RUMORS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.5 },
    },
    icon: 'Activity',
    preRequisiteTech: 'crisis_acting'
  },
  {
    id: 'collective_unconscious', // NEW
    name: '集体潜意识测绘',
    description: '荣格的原型理论不仅仅是心理学，它是网络的底层架构。',
    tier: 5,
    costs: { [ResourceType.LORE]: 1000, [ResourceType.MIND_CONTROL]: 200 },
    effects: {
        unlockMessage: '解锁: 诺斯圈天线'
    },
    icon: 'Globe',
    preRequisiteTech: 'aklo_language'
  },
  {
    id: 'sumerian_me', // NEW
    name: '苏美尔 Me (神力)',
    description: '古代神灵用于控制文明基础功能的程序代码。',
    tier: 5,
    costs: { [ResourceType.ANCIENT_WISDOM]: 200, [ResourceType.CODE]: 20000 },
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
    costs: { [ResourceType.FUNDS]: 200000, [ResourceType.OPS]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 1.5, [ResourceType.TRUTH]: -0.5 },
        unlockMessage: '解锁: 天空全息投影仪'
    },
    icon: 'Projector',
    preRequisiteTech: 'atmospheric_geoengineering'
  },

  // ##########################################################################
  // TIER 6: THE THRESHOLD (Physics Glitches) - Previously T5
  // Costs Multiplied by ~10x
  // ##########################################################################
  {
    id: 'zero_point_energy',
    name: '零点能提取',
    description: '从真空中提取无限能量。',
    tier: 6,
    costs: { [ResourceType.OPS]: 2000000, [ResourceType.TECH_CAPITAL]: 50000 },
    effects: { 
        resourceMultipliers: { [ResourceType.OPS]: 1.0 },
        globalCostReduction: 0.1,
        unlockMessage: '解锁: 零点能模块'
    },
    icon: 'Zap',
    preRequisiteTech: 'wireless_power',
  },
  {
    id: 'psychotronic_generators', // NEW
    name: '精神电子发生器',
    description: '将精神意念转化为物理能量，或者反过来。',
    tier: 6,
    costs: { [ResourceType.MIND_CONTROL]: 1000, [ResourceType.POWER]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 1.0 },
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'v2k_technology'
  },
  {
    id: 'egregore_summoning', // NEW
    name: 'Egregore 召唤',
    description: '当足够多的人相信同一个[谣言]，它就会获得自主意识。',
    tier: 6,
    costs: { [ResourceType.RUMORS]: 5000, [ResourceType.FOLLOWERS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 2.0 },
    },
    icon: 'Ghost',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'library_of_alexandria_backup', // NEW
    name: '亚历山大图书馆备份',
    description: '它没有被烧毁，它被上传到了水晶存储器中。',
    tier: 6,
    costs: { [ResourceType.ANCIENT_WISDOM]: 1000, [ResourceType.KNOWLEDGE]: 500000 },
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
    costs: { [ResourceType.TRUTH]: 200, [ResourceType.CODE]: 3000000 },
    effects: { 
        globalCostReduction: 0.2,
        artifactRarityBonus: 0.5
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'zero_point_energy',
  },
  {
    id: 'tulpa_engineering', // REPLACED Hyperstition
    name: 'Tulpa 工程学',
    description: '系统化地创造能够干涉物质世界的思维实体。',
    tier: 6,
    costs: { [ResourceType.CULTURE]: 500000, [ResourceType.KNOWLEDGE]: 200000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.5, [ResourceType.CULTURE]: 1.0 },
        unlockMessage: '虚构入侵现实'
    },
    icon: 'Users',
    preRequisiteTech: 'egregore_summoning'
  },

  // ##########################################################################
  // TIER 7: THE DREAD (Cosmic Horror) - Previously T6/T7
  // Costs Multiplied by ~100x
  // ##########################################################################
  {
    id: 'reality_tunneling', // NEW
    name: '现实隧道 (Reality Tunneling)',
    description: '蒂莫西·利里理论的武器化。每个人都活在自己的现实隧道中，而你掌握了切换开关。',
    tier: 7,
    costs: { [ResourceType.MIND_CONTROL]: 5000, [ResourceType.TRUTH]: 10000 },
    effects: {
        unlockMessage: '解锁: 现实锚点'
    },
    icon: 'Disc',
    preRequisiteTech: 'psychotronic_generators'
  },
  {
    id: 'vacuum_decay',
    name: '伪真空衰变 (Vacuum Decay)',
    description: '我们的宇宙处于亚稳态。任何一点微小的能量波动都可能导致物理法则瞬间崩塌。',
    tier: 7,
    costs: { [ResourceType.OPS]: 1000000000, [ResourceType.TRUTH]: 50000 },
    effects: { 
        clickPowerMult: 5.0,
        unlockMessage: '解锁: 伪真空稳定器'
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'zero_point_energy',
  },
  {
    id: 'singularity_theory',
    name: '技术奇点',
    description: '智能爆炸。超越光速，超越认知。',
    tier: 7,
    costs: { [ResourceType.KNOWLEDGE]: 50000000, [ResourceType.TECH_CAPITAL]: 20000000, [ResourceType.OPS]: 100000000 },
    effects: { 
        resourceMultipliers: { 
            [ResourceType.INFO]: 2, [ResourceType.FUNDS]: 2, [ResourceType.CODE]: 2, [ResourceType.OPS]: 2,
            [ResourceType.CLUE]: 2, [ResourceType.KNOWLEDGE]: 2, [ResourceType.TRUTH]: 2
        },
        unlockMessage: '奇点临近' 
    },
    icon: 'Zap',
    preRequisiteTech: 'zero_point_energy', 
  },

  // ##########################################################################
  // TIER 8: THE OMEGA (Endgame & Transcendence) - Previously T8
  // Costs Multiplied by ~10000x
  // ##########################################################################
  {
    id: 'type_ii_civilization', // NEW
    name: '卡尔达肖夫 II 型文明',
    description: '完全利用母恒星的能量。不仅仅是电力，而是控制太阳系本身。',
    tier: 8,
    costs: { [ResourceType.POWER]: 1000000000, [ResourceType.TECH_CAPITAL]: 10000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 10.0, [ResourceType.OPS]: 10.0 },
    },
    icon: 'Sun',
    preRequisiteTech: 'singularity_theory'
  },
  {
    id: 'omega_point_theory',
    name: '欧米茄点 (Omega Point)',
    description: '宇宙的最高复杂度。神不是造物主，神是宇宙进化的终点。',
    tier: 8,
    costs: { [ResourceType.TECH_CAPITAL]: 50000000000, [ResourceType.TRUTH]: 10000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 10.0 },
        unlockMessage: '解锁: 熵逆转机'
    },
    icon: 'Infinity',
    preRequisiteTech: 'singularity_theory',
  },
  {
    id: 'hard_solipsism',
    name: '硬唯我论',
    description: '除了你，没有什么是真的。其他人只是复杂的NPC。',
    tier: 8,
    costs: { [ResourceType.TRUTH]: 50000000, [ResourceType.CULTURE]: -1000000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.FOLLOWERS]: -1.0, [ResourceType.TRUTH]: 5.0 },
        globalCostReduction: 0.5,
        unlockMessage: '孤独的神'
    },
    icon: 'UserX',
    preRequisiteTech: 'reality_tunneling',
  },
];
