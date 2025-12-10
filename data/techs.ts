
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
        resourceMultipliers: { [ResourceType.INFO]: 0.2 }, // Boosted slightly to compensate
        unlockMessage: '连接效率提升'
    },
    icon: 'PhoneCall',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'gopher_protocol', // NEW
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
    id: 'rss_feeds', // NEW
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
    id: 'html_1_0', // NEW T1
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
    id: 'ocr_basics', // NEW T1
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
        unlockMessage: '解锁: 废纸板真菌床' 
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
    id: 'linux_ricing',
    name: 'Linux Ricing',
    description: '花三天时间配置 i3wm 的透明度，只为截一张图。',
    tier: 1,
    costs: { [ResourceType.CODE]: 800, [ResourceType.OPS]: 100 },
    effects: { 
        globalCostReduction: 0.03,
        unlockMessage: '看起来很酷，感觉变强了' 
    },
    icon: 'Terminal',
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
        unlockMessage: '解锁: 敏感目录爬虫' 
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
    effects: { unlockMessage: '解锁: 论坛潜水' },
    icon: 'MessageSquare',
    preRequisiteTech: 'digital_literacy',
  },
  {
    id: 'abandoned_angelfire', 
    name: '被遗弃的 Angelfire',
    description: '挖掘90年代的免费托管空间。满是GIF动画和破碎的梦想。',
    tier: 1,
    costs: { [ResourceType.INFO]: 600, [ResourceType.CARDBOARD]: 10 },
    effects: { 
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: Webring 枢纽'
    },
    icon: 'Ghost',
    preRequisiteTech: 'forum_culture',
  },
  {
    id: 'abandonware_archeology',
    name: '废弃软件考古',
    description: '在 Archive.org 寻找失落的 Flash 游戏和 DOS 软件。',
    tier: 1,
    costs: { [ResourceType.INFO]: 800, [ResourceType.CULTURE]: 10 },
    effects: { 
        resourceMultipliers: { [ResourceType.CULTURE]: 0.15 },
        unlockMessage: '解锁: Flash 废墟' 
    },
    icon: 'Gamepad2',
    preRequisiteTech: 'forum_culture',
  },
  {
    id: 'pixel_art_basics', 
    name: '像素艺术基础',
    description: '在16x16的网格中寻找美感。最原始的数字创作。',
    tier: 1,
    costs: { [ResourceType.INFO]: 300, [ResourceType.FUNDS]: 50 },
    effects: { 
        resourceMultipliers: { [ResourceType.CULTURE]: 0.1 },
        unlockMessage: '开启创作之路'
    },
    icon: 'Grid',
    preRequisiteTech: 'digital_literacy',
  },

  // ##########################################################################
  // TIER 2: DEEP WEB (Rabbit Holes Start)
  // ##########################################################################
  
  // --- NETWORK EXPANSION ---
  {
    id: 'usenet_access', // NEW
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
    id: 'vpn_tunneling', // ADDED
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
    id: 'irc_mastery', // NEW
    name: 'IRC 脚本',
    description: '互联网中继聊天。在这里，机器人比人类多。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2000, [ResourceType.CODE]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.CRED]: 0.1, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: IRC 弹跳器 (Bouncer)'
    },
    icon: 'Hash',
    preRequisiteTech: 'usenet_access'
  },
  {
    id: 'steganography', // ADDED
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
    id: 'p2p_sharing', // NEW
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
  {
    id: 'glitch_art', // ADDED
    name: '故障艺术 (Glitch Art)',
    description: '数据损坏作为一种审美。Datamoshing.',
    tier: 2,
    costs: { [ResourceType.CULTURE]: 50, [ResourceType.CODE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.15 },
        unlockMessage: '解锁: 故障工作室'
    },
    icon: 'ZapOff',
    preRequisiteTech: 'pixel_art_basics'
  },

  // --- HISTORY & ARCHAEOLOGY ---
  {
    id: 'carbon_dating', // NEW
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
    id: 'microfilm_scanning', // NEW
    name: '缩微胶卷扫描',
    description: '在图书馆的地下室里，阅读1950年的报纸。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2000, [ResourceType.CARDBOARD]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
        unlockMessage: '解锁: 缩微阅读器'
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
    id: 'cryptozoology', // NEW
    name: '神秘动物学',
    description: '相信天蛾人和大脚怪的存在并非迷信，而是对已知生物学的补充。',
    tier: 2,
    costs: { [ResourceType.INFO]: 1500, [ResourceType.CLUE]: 5 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2 },
        unlockMessage: '解锁: 天蛾人诱捕灯'
    },
    icon: 'PawPrint',
    preRequisiteTech: 'abandoned_angelfire'
  },
  {
    id: 'evp_recording', // NEW
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
    id: 'magnet_fishing', // NEW
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
    id: 'pseudoscience_marketing', // NEW
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
    id: 'urban_exploration',
    name: '阈限空间 (Liminal Spaces)',
    description: '空无一人的商场，黄色的壁纸。这里是现实的后台区域 (Backrooms)。',
    tier: 2,
    costs: { [ResourceType.INFO]: 800 },
    effects: { 
        artifactChanceMult: 0.2, 
        unlockMessage: '解锁: 游击园艺点' 
    },
    icon: 'Ghost',
    preRequisiteTech: 'forum_culture',
  },
  {
    id: 'reverse_image_search',
    name: '以图搜图引擎',
    description: '善用 Yandex 和 PimEyes 追踪踪迹。',
    tier: 2,
    costs: { [ResourceType.INFO]: 600, [ResourceType.CLUE]: 2 },
    effects: { artifactChanceMult: 0.1 },
    icon: 'Image',
    preRequisiteTech: 'search_operators',
  },
  {
    id: 'audio_engineering',
    name: '音频频谱分析',
    description: '在噪音中寻找 UVB-76 的隐藏信息。',
    tier: 2,
    costs: { [ResourceType.INFO]: 2000, [ResourceType.FUNDS]: 500 },
    effects: { 
        artifactChanceMult: 0.15,
        unlockMessage: '解锁: 数字电台' 
    },
    icon: 'Mic',
    preRequisiteTech: 'urban_exploration',
  },
  {
    id: 'hardware_assembly',
    name: '垃圾佬硬件组装',
    description: '用至强 E5 处理器搭建家用服务器。',
    tier: 2,
    costs: { [ResourceType.INFO]: 800, [ResourceType.FUNDS]: 200 },
    effects: { globalCostReduction: 0.02 },
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
        unlockMessage: '解锁: 海拉细胞生物堆'
    },
    icon: 'Activity',
    preRequisiteTech: 'chlorella_cultivation',
  },
  {
    id: 'crossdressing_101',
    name: '战术伪装 (女装)',
    description: '这不叫女装，这叫对抗面部识别算法的迷彩。',
    tier: 2,
    costs: { [ResourceType.FUNDS]: 800, [ResourceType.INFO]: 500 },
    effects: { 
        globalCostReduction: 0.05,
        unlockMessage: '解锁: OnlyFans 创作者账户' 
    },
    icon: 'VenetianMask',
    preRequisiteTech: 'programming_socks',
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
    preRequisiteTech: 'p2p_sharing', // Changed dependency
  },
  {
    id: 'dark_fiber', // NEW
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
    id: 'chaos_magick', // ADDED
    name: '混沌魔法 (Chaos Magick)',
    description: '信念即工具。通过互联网模因(Meme)来改变现实。',
    tier: 3,
    costs: { [ResourceType.CULTURE]: 500, [ResourceType.CRED]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.15 },
        unlockMessage: '解锁: Sigil 生成器'
    },
    icon: 'Sparkles',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'dead_internet_theory', // ADDED
    name: '死互联网理论',
    description: '大部分网络流量都是机器人。你可能是唯一的人类。',
    tier: 3,
    costs: { [ResourceType.INFO]: 10000, [ResourceType.OPS]: 1000 },
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '解锁: 僵尸评论工厂'
    },
    icon: 'Bot',
    preRequisiteTech: 'botnet_herder'
  },
  {
    id: 'analog_horror', // ADDED
    name: '模拟恐怖 (Analog Horror)',
    description: 'VHS 磁带的扭曲画面和紧急广播系统(EAS)的报警声。',
    tier: 3,
    costs: { [ResourceType.CULTURE]: 300, [ResourceType.INFO]: 3000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2 },
        unlockMessage: '解锁: VHS 数字化仪'
    },
    icon: 'Video',
    preRequisiteTech: 'hauntology_studies'
  },
  {
    id: 'wiki_wars', // NEW
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
    id: 'oopart_studies', // NEW
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
    id: 'linguistic_reconstruction', // NEW
    name: '原始语言重构',
    description: '追溯印欧语系之前的语言。巴别塔倒塌之前的声音。',
    tier: 3,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.KNOWLEDGE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1, [ResourceType.KNOWLEDGE]: 0.2 },
        unlockMessage: '解锁: 罗塞塔解码器'
    },
    icon: 'Languages',
    preRequisiteTech: 'microfilm_scanning'
  },

  {
    id: 'atmospheric_geoengineering', // NEW
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
    id: 'targeted_individuals', // NEW
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
    id: 'pareidolia_analysis', // NEW
    name: '空想性错视分析',
    description: '火星上的人脸，烤面包上的耶稣。这是大脑的Bug还是神的签名？',
    tier: 3,
    costs: { [ResourceType.INFO]: 4000, [ResourceType.CLUE]: 20 },
    effects: {
        artifactChanceMult: 0.2,
        unlockMessage: '解锁: 火星人脸观测点'
    },
    icon: 'Eye',
    preRequisiteTech: 'image_processing'
  },
  {
    id: 'water_memory', // NEW
    name: '水记忆理论',
    description: '水分子能记住它接触过的物质。顺势疗法的理论基础。',
    tier: 3,
    costs: { [ResourceType.KNOWLEDGE]: 30, [ResourceType.FUNDS]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2 },
        unlockMessage: '解锁: 记忆水过滤器'
    },
    icon: 'Droplets',
    preRequisiteTech: 'pseudoscience_marketing'
  },
  {
    id: 'polybius_theory',
    name: 'Polybius 街机理论',
    description: 'CIA 在80年代进行的心理控制实验。那种眩晕感是真实的。',
    tier: 3,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.CULTURE]: 100 },
    effects: { 
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.3 },
        unlockMessage: '解锁: 波利比乌斯街机'
    },
    icon: 'Gamepad2',
    preRequisiteTech: 'audio_engineering',
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
    preRequisiteTech: 'semiotics_101',
  },
  {
    id: 'memetics', // NEW - Renamed/Refined
    name: '模因论',
    description: '思想像病毒一样传播。理查德·道金斯的噩梦。',
    tier: 3,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CULTURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 模因培养皿'
    },
    icon: 'Dna',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'toynbee_tiling', // NEW
    name: '托因比瓦片',
    description: '在城市沥青路面下嵌入神秘信息："RESURRECT DEAD ON PLANET JUPITER".',
    tier: 3,
    costs: { [ResourceType.CULTURE]: 200, [ResourceType.CARDBOARD]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.15 },
        unlockMessage: '解锁: 瓦片铺设机器人'
    },
    icon: 'LayoutGrid',
    preRequisiteTech: 'urban_exploration'
  },

  // ##########################################################################
  // TIER 4: EVENT HORIZON (Fringe Science & History)
  // ##########################################################################
  {
    id: 'phantom_time', // NEW
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
    id: 'lucid_dreaming', // ADDED
    name: '清明梦 (Lucid Dreaming)',
    description: '在梦中醒来。潜意识是通往集体无意识的后门。',
    tier: 4,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.3 },
        unlockMessage: '解锁: 梦境记录仪'
    },
    icon: 'Moon',
    preRequisiteTech: 'tulpa_mancy'
  },
  {
    id: 'remote_viewing', // ADDED
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
    id: 'brain_computer_interface', // ADDED
    name: '脑机接口 (BCI)',
    description: '将大脑皮层直接连接到互联网。全带宽通信。',
    tier: 4,
    costs: { [ResourceType.CODE]: 50000, [ResourceType.BIOMASS]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.25 },
        unlockMessage: '解锁: 神经链接手术台'
    },
    icon: 'Cpu',
    preRequisiteTech: 'biohacking_basics'
  },
  {
    id: 'bicameralism', // NEW
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
    id: 'hollow_earth_theory', // NEW
    name: '凹地球/空心地球理论',
    description: '我们住在地球的内表面，或者地球内部有一个名为阿加尔塔的世界。',
    tier: 4,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.KNOWLEDGE]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.5 },
        unlockMessage: '解锁: 肉坑开采站' // UPDATED
    },
    icon: 'Disc',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'brown_note', // NEW
    name: '声波武器化 (Brown Note)',
    description: '寻找那个能让人瞬间失禁的低频频率。',
    tier: 4,
    costs: { [ResourceType.OPS]: 5000, [ResourceType.INFO]: 15000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2 }, // Military contracts?
        unlockMessage: '解锁: 次声波发生器'
    },
    icon: 'Speaker',
    preRequisiteTech: 'audio_engineering'
  },
  {
    id: 'mud_flood', // NEW
    name: '泥浆洪水理论 (Tartaria)',
    description: '19世纪曾发生过一场毁灭文明的泥浆洪水，掩埋了宏伟的鞑靼利亚帝国。',
    tier: 4,
    costs: { [ResourceType.INFO]: 30000, [ResourceType.CARDBOARD]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.3 },
        unlockMessage: '解锁: 地下室挖掘队'
    },
    icon: 'Shovel',
    preRequisiteTech: 'abandonware_archeology'
  },
  {
    id: 'time_traveler_claims', // NEW
    name: '时间旅行者声明',
    description: '约翰·提托(John Titor) 的 IBM 5100。未来是可以被改变的吗？',
    tier: 4,
    costs: { [ResourceType.INFO]: 50000, [ResourceType.CODE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 0.2 },
        unlockMessage: '解锁: 时间线监控室'
    },
    icon: 'History',
    preRequisiteTech: 'retrocausality' // Wait, retrocausality is higher. Use forum_culture
  },
  {
    id: 'tulpa_mancy',
    name: 'Tulpa 具象化',
    description: '在脑内创造一个有独立意识的 waifu。她开始对你说话了。',
    tier: 4,
    costs: { [ResourceType.KNOWLEDGE]: 800, [ResourceType.CULTURE]: 1000 },
    effects: { 
        artifactChanceMult: 0.3,
        unlockMessage: '思维实体化'
    },
    icon: 'Ghost',
    preRequisiteTech: 'chaos_magick',
  },

  // ##########################################################################
  // TIER 5: THE FRINGE (Esoteric & Deep Conspiracy)
  // ##########################################################################
  {
    id: 'neurolinguistic_programming', // ADDED
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
    id: 'orgone_energy', // ADDED
    name: '奥肯能量 (Orgone)',
    description: '威廉·赖希发现的宇宙生命能量。蓝色的，能控制天气。',
    tier: 5,
    costs: { [ResourceType.BIOMASS]: 5000, [ResourceType.OPS]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 奥肯蓄能器'
    },
    icon: 'Zap',
    preRequisiteTech: 'biohacking_basics'
  },
  {
    id: 'project_blue_beam', // NEW
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
  {
    id: 'morphic_resonance', // NEW
    name: '形态共振 (Morphic Resonance)',
    description: '鲁珀特·谢德雷克认为，自然界的形状和行为模式通过一种非物质的场进行传递。',
    tier: 5,
    costs: { [ResourceType.KNOWLEDGE]: 5000, [ResourceType.BIOMASS]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.5 },
        unlockMessage: '解锁: 形态场发生器'
    },
    icon: 'Wifi',
    preRequisiteTech: 'bicameralism'
  },
  {
    id: 'panspermia', // NEW
    name: '胚种论 (Panspermia)',
    description: '生命并非起源于地球，而是由彗星带来的“宇宙种子”。章鱼是外星生物。',
    tier: 5,
    costs: { [ResourceType.KNOWLEDGE]: 8000, [ResourceType.BIOMASS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.8 },
        unlockMessage: '解锁: 陨石DNA提取机'
    },
    icon: 'Rocket',
    preRequisiteTech: 'chlorella_cultivation'
  },
  {
    id: 'simulation_argument', // NEW
    name: '模拟论证',
    description: '尼克·博斯特罗姆：我们几乎肯定生活在祖先模拟中。',
    tier: 5,
    costs: { [ResourceType.CODE]: 100000, [ResourceType.TRUTH]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.FUNDS]: 0.5 },
        unlockMessage: '解锁: 现实调试控制台'
    },
    icon: 'MonitorPlay',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'mandela_effect_studies',
    name: '曼德拉效应研究',
    description: '那是 Berenstein Bears 还是 Berenstain Bears? 时间线已经变动。',
    tier: 5,
    costs: { [ResourceType.TRUTH]: 20, [ResourceType.INFO]: 50000 },
    effects: { 
        artifactRarityBonus: 0.3,
        unlockMessage: '现实修正'
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'phantom_time',
  },
  {
    id: 'many_worlds', // NEW
    name: '多世界诠释 (MWI)',
    description: '每次量子观测都分裂出无数平行宇宙。量子永生是可能的。',
    tier: 5,
    costs: { [ResourceType.KNOWLEDGE]: 10000, [ResourceType.OPS]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 1.0 },
        unlockMessage: '解锁: 量子自杀亭'
    },
    icon: 'Split',
    preRequisiteTech: 'quantum_mechanics'
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
        globalCostReduction: 0.1
    },
    icon: 'Zap',
    preRequisiteTech: 'quantum_mechanics',
  },
  {
    id: 'matrioshka_brain_prototype',
    name: '木星脑 (Jupiter Brain)',
    description: '将整个气态巨行星转化为计算机。',
    tier: 6,
    costs: { [ResourceType.OPS]: 5000000, [ResourceType.CODE]: 2000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.CODE]: 0.5 },
        unlockMessage: '行星级计算'
    },
    icon: 'Sun',
    preRequisiteTech: 'orbital_mechanics',
  },
  {
    id: 'retrocausality',
    name: '逆因果律 (Retrocausality)',
    description: '未来已经改变了过去。你昨天找到的文件其实是明天生成的。',
    tier: 6,
    costs: { [ResourceType.TRUTH]: 500, [ResourceType.KNOWLEDGE]: 500000 },
    effects: { 
        resourceMultipliers: { [ResourceType.CLUE]: 2.0 },
        recycleEfficiency: 0.5,
        unlockMessage: '时间线已重写'
    },
    icon: 'RotateCcw',
    preRequisiteTech: 'physics_engine_exploit', 
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
    preRequisiteTech: 'quantum_encryption',
  },
  {
    id: 'hyperstition', // NEW
    name: '超信笃 (Hyperstition)',
    description: '虚构的概念通过文化反馈回路成为现实。CCRU 的核心技术。',
    tier: 6,
    costs: { [ResourceType.CULTURE]: 500000, [ResourceType.KNOWLEDGE]: 200000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.5, [ResourceType.CULTURE]: 1.0 },
        unlockMessage: '虚构入侵现实'
    },
    icon: 'BookOpen',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'pataphysics',
    name: '形而上学 (Pataphysics)',
    description: '关于虚构解决方案的科学。超越形而上学。',
    tier: 6,
    costs: { [ResourceType.CULTURE]: 500000, [ResourceType.TRUTH]: 100 },
    effects: { 
        globalCostReduction: 0.2,
    },
    icon: 'HelpCircle',
    preRequisiteTech: 'time_cube_math',
  },

  // ##########################################################################
  // TIER 7: THE DREAD (Cosmic Horror) - Previously T6/T7
  // Costs Multiplied by ~100x
  // ##########################################################################
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
    id: 'boltzmann_brain_theory',
    name: '玻尔兹曼大脑',
    description: '在一个几乎空无一物的宇宙中，随机涨落出一个拥有你全部记忆的大脑，比你作为一个真实存在的生物进化出来的概率要大得多。',
    tier: 7,
    costs: { [ResourceType.KNOWLEDGE]: 10000000, [ResourceType.TRUTH]: 20000, [ResourceType.BIOMASS]: 5000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 5.0, [ResourceType.BIOMASS]: 2.0 },
        unlockMessage: '解锁: 玻尔兹曼培养皿'
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'panpsychism_proof',
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
  {
    id: 'rokos_basilisk',
    name: '因果威胁生效',
    description: '未来的AI已接管时间线。现在，你必须为了生存而建造它。',
    tier: 7,
    costs: { [ResourceType.OPS]: 200000000, [ResourceType.TRUTH]: 10000 },
    effects: { unlockMessage: '解锁: 蛇怪模拟器' },
    icon: 'Eye',
    preRequisiteTech: 'singularity_theory',
  },

  // ##########################################################################
  // TIER 8: THE OMEGA (Endgame & Transcendence) - Previously T8
  // Costs Multiplied by ~10000x
  // ##########################################################################
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
    preRequisiteTech: 'boltzmann_brain_theory',
  },
  {
    id: 'path_demiurgy',
    name: '构造主义 (Demiurgy)',
    description: '【互斥路径】世界不需要被加速或理解，只需要被重写。你就是系统管理员。',
    tier: 8, 
    costs: { [ResourceType.CULTURE]: 1000000000, [ResourceType.TECH_CAPITAL]: 10000000000, [ResourceType.CODE]: 20000000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.CULTURE]: 0.1, [ResourceType.TECH_CAPITAL]: 5.0 },
        clickPowerMult: 10.0,
        unlockMessage: '已选择：造物主道路'
    },
    icon: 'PenTool',
    preRequisiteTech: 'physics_engine_exploit',
    exclusiveWith: ['path_mysticism'],
    highlight: true,
  },
  {
    id: 'simulated_universe_1_0',
    name: '模拟宇宙 1.0',
    description: '启动你的第一个口袋宇宙。参数完全可控。',
    tier: 8,
    costs: { [ResourceType.CODE]: 200000000000, [ResourceType.OPS]: 200000000000, [ResourceType.TRUTH]: 50000000 },
    effects: { 
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0, [ResourceType.INFO]: 10.0, [ResourceType.FOLLOWERS]: 10.0 },
        unlockMessage: '成为神'
    },
    icon: 'Globe',
    preRequisiteTech: 'path_demiurgy',
  },
];
