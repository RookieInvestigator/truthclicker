
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_2_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: SEO STRATEGY ---
  {
    id: 'black_hat_seo',
    name: '黑帽 SEO',
    description: '堆砌关键词、隐藏文本。不在乎体验，只要搜索排名。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 2000, [ResourceType.SPAM]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.5, [ResourceType.FUNDS]: 0.2 },
        unlockMessage: '选择路线：流量掠夺者'
    },
    icon: 'Skull',
    preRequisiteTech: 'clickbait_tactics',
    exclusiveWith: ['white_hat_seo'],
    highlight: true
  },
  {
    id: 'white_hat_seo',
    name: '白帽 SEO',
    description: '遵循规则提供优质内容。见效慢，但不会被算法封杀。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 2000, [ResourceType.CRED]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2, [ResourceType.CRED]: 0.1 },
        unlockMessage: '选择路线：网络建设者'
    },
    icon: 'ShieldCheck',
    preRequisiteTech: 'clickbait_tactics',
    exclusiveWith: ['black_hat_seo'],
    highlight: true
  },

  // --- NETWORK EXPANSION ---
  {
    id: 'usenet_access', 
    name: 'Usenet访问',
    description: '新闻组是互联网的活化石。所有现代梗的起源都在这里。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CRED]: 50 }, 
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
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.OPS]: 1500 }, 
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
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 7500, [ResourceType.FUNDS]: 300 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.15, [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 代理节点'
    },
    icon: 'Lock',
    preRequisiteTech: 'rss_feeds'
  },
  {
    id: 'phreaking_tools',
    name: '电话破解',
    description: '探索电信系统的漏洞。口哨声就是钥匙。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 4000, [ResourceType.CODE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.CRED]: 0.1 },
        unlockMessage: '解锁: 蓝盒子'
    },
    icon: 'Phone',
    preRequisiteTech: 'doomscrolling'
  },
  {
    id: 'radio_theory',
    name: '无线电理论',
    description: '理解波的传播。即使互联网断了，无线电波依然在传播。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 3000, [ResourceType.CARDBOARD]: 50 },
    effects: {
        unlockMessage: '解锁: 业余无线电台'
    },
    icon: 'Radio',
    preRequisiteTech: 'wire_splicing'
  },
  {
    id: 'p2p_sharing', 
    name: 'P2P 文件共享',
    description: 'BitTorrent 协议。人人为我，我为人人。',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.OPS]: 1000 }, 
    effects: {
        unlockMessage: '解锁: 盗版软件 FTP'
    },
    icon: 'Share2',
    preRequisiteTech: 'usenet_access'
  },

  // --- FOLKLORE & CULTURE ---
  {
    id: 'creepypasta_analysis', 
    name: '都市传说分析',
    description: '分析 Slender Man 和 Jeff the Killer 的传播路径。',
    tier: 2,
    category: BuildingCategory.FOLKLORE, // Root
    costs: { [ResourceType.INFO]: 4500, [ResourceType.LORE]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
        unlockMessage: '民俗学研究入门'
    },
    icon: 'Ghost',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'geospatial_anomalies',
    name: '地理空间异常',
    description: '地图上的马赛克区域。有些岛屿只存在于数据中。',
    tier: 2,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.INFO]: 3500, [ResourceType.LORE]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.1 },
        unlockMessage: '解锁: 像素岛搜寻者'
    },
    icon: 'Map',
    preRequisiteTech: 'railfan_logistics'
  },
  {
    id: 'spectral_photography',
    name: '灵异摄影',
    description: '为什么鬼魂总是模糊的？也许是它们存在的频率不同。',
    tier: 2,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.INFO]: 3000, [ResourceType.CARDBOARD]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
        unlockMessage: '解锁: 皮行者牧场监控'
    },
    icon: 'Camera',
    preRequisiteTech: 'ocr_basics'
  },
  {
    id: 'pareidolia_filter',
    name: '空想性错视滤镜',
    description: '从随机噪点中识别人脸。是大脑修饰，还是真实存在？',
    tier: 2,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.CODE]: 1500, [ResourceType.LORE]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.1 },
        artifactChanceMult: 0.1
    },
    icon: 'Eye',
    preRequisiteTech: 'ocr_basics'
  },
  {
    id: 'steganography', 
    name: '数字隐写',
    description: '将秘密信息隐藏在图片的像素噪点中。',
    tier: 2,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CODE]: 1500, [ResourceType.INFO]: 8000 }, 
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 频谱图解码器'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'clickbait_tactics'
  },
  {
    id: 'leetspeak_decoding',
    name: '黑客语解码',
    description: 'n00b, pwned. 熟练阅读黑客方言，提取信息。',
    tier: 2,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.1 },
    },
    icon: 'Languages',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'rng_manipulation',
    name: '随机数操控',
    description: '在特定微秒操作，强行让随机数生成器吐出想要结果。',
    tier: 2,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CODE]: 3000, [ResourceType.SPAM]: 200 },
    effects: {
        artifactChanceMult: 0.1,
    },
    icon: 'Dices',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'vs_debating',
    name: '战力讨论',
    description: '不知疲倦地计算虚构角色的拳头能释放多少吨TNT当量。',
    tier: 2,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CULTURE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1, [ResourceType.SPAM]: 0.2 },
        unlockMessage: '次元层级理论'
    },
    icon: 'Swords',
    preRequisiteTech: 'forum_culture'
  },

  // --- HISTORY & ARCHAEOLOGY ---
  {
    id: 'carbon_dating', 
    name: '碳-14 测年法',
    description: '确定文物的年代。揭穿赝品，或者发现不该存在的物体。',
    tier: 2,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.KNOWLEDGE]: 50, [ResourceType.INFO]: 3000 }, 
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
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 6000, [ResourceType.CARDBOARD]: 150 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2 },
        unlockMessage: '解锁: 缩微阅读器 / 口述历史项目'
    },
    icon: 'Film',
    preRequisiteTech: 'carbon_dating'
  },

  // --- VERIFICATION EXPANSION ---
  {
    id: 'deduplication',
    name: '数据去重',
    description: '从海量垃圾中提取唯一有效的信息。存储效率至关重要。',
    tier: 2,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 4000, [ResourceType.CODE]: 500 },
    effects: {
        recycleEfficiency: 0.15,
        unlockMessage: '解锁: 磁带筒仓'
    },
    icon: 'Files',
    preRequisiteTech: 'data_hoarding_basics'
  },
  {
    id: 'linguistic_fingerprinting',
    name: '语言指纹',
    description: '每个人使用标点符号的习惯都是独一无二的。哪怕是匿名发帖。',
    tier: 2,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.CLUE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2 },
        unlockMessage: '解锁: 语言指纹分析器'
    },
    icon: 'Fingerprint',
    preRequisiteTech: 'search_operators'
  },

  // --- KNOWLEDGE / ESOTERIC EXPANSION ---
  {
    id: 'automatic_writing', 
    name: '自动书写',
    description: '关闭显意识，让潜意识或“那边的东西”借你的手打字。',
    tier: 2,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.KNOWLEDGE]: 15 }, 
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
        unlockMessage: '灵感源源不断'
    },
    icon: 'PenTool',
    preRequisiteTech: 'symbolism_decoding'
  },
  {
    id: 'digital_gnosis', 
    name: '数字灵知',
    description: '互联网不仅是网络，它是集体潜意识的物理投射。信息即灵魂。',
    tier: 2,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.INFO]: 7000, [ResourceType.KNOWLEDGE]: 40 }, 
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.2 },
        unlockMessage: '神性火花已点燃'
    },
    icon: 'Sparkles',
    preRequisiteTech: 'numerology_basics'
  },

  // --- SURVIVAL / TECH / CAPITAL ---
  {
    id: 'nutrient_paste',
    name: '代餐粉末',
    description: '不管它是用什么做的，它能让你在不离开椅子的情况下活下去。',
    tier: 2,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.BIOMASS]: 50 },
    effects: {
        clickPowerMult: 0.3,
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.15 },
        unlockMessage: '进食不再是享受，而是任务'
    },
    icon: 'Utensils',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'chlorella_cultivation',
    name: '小球藻培养槽',
    description: '在衣柜里用LED灯养殖高蛋白藻类。末日生存口粮。',
    tier: 2,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.FUNDS]: 3000, [ResourceType.CARDBOARD]: 200 }, 
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
    description: '天蛾人和大脚怪并非迷信，而是对已知生物学的补充。',
    tier: 2,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.INFO]: 4500, [ResourceType.CLUE]: 25 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: 天蛾人诱捕灯'
    },
    icon: 'PawPrint',
    preRequisiteTech: 'creepypasta_analysis' 
  },
  {
    id: 'magic_bullet_theory', 
    name: '魔弹理论',
    description: '一颗子弹怎么可能在空中转弯？JFK 档案的物理学并不存在。',
    tier: 2,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.CLUE]: 80, [ResourceType.INFO]: 9000 }, 
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
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.INFO]: 3600, [ResourceType.CARDBOARD]: 100 }, 
    effects: {
        artifactChanceMult: 0.1,
        unlockMessage: '解锁: 灵界录音机'
    },
    icon: 'Mic',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'magnet_fishing', 
    name: '磁力打捞',
    description: '用强力磁铁在运河中吸附被谋杀案抛弃的凶器。',
    tier: 2,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CARDBOARD]: 200, [ResourceType.FUNDS]: 300 }, 
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
    category: BuildingCategory.CAPITAL, // Changed
    costs: { [ResourceType.INFO]: 6000, [ResourceType.CRED]: 50 }, 
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
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 2500, [ResourceType.FUNDS]: 800 }, 
    effects: { 
        globalCostReduction: 0.02,
        unlockMessage: '解锁: 屋顶光伏阵列'
    },
    icon: 'Cpu',
    preRequisiteTech: 'basic_scripting',
  },
  {
    id: 'programming_socks',
    name: '编程袜',
    description: '粉白条纹不仅是审美，更是C++编译成功的护身符。',
    tier: 2,
    category: BuildingCategory.ADULT, 
    costs: { [ResourceType.FUNDS]: 800, [ResourceType.INFO]: 500 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.CODE]: 0.3 },
        unlockMessage: '解锁: OnlyFans 页面'
    },
    icon: 'Codesandbox',
    preRequisiteTech: 'mechanical_keyboards',
  },
  {
    id: 'biohacking_basics',
    name: '生物黑客',
    description: '在指尖植入磁体，感受微波炉的电磁场。',
    tier: 2,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 8000, [ResourceType.BIOMASS]: 50 }, 
    effects: { 
        clickPowerMult: 0.4,
        artifactChanceMult: 0.2,
        unlockMessage: '解锁: DNA 存储库'
    },
    icon: 'Activity',
    preRequisiteTech: 'hardware_assembly',
  },
  {
    id: 'rule_34',
    name: '第34条法则',
    description: '若存在，则必有关于它的色情内容。互联网原动力。',
    tier: 2,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.INFO]: 5000, [ResourceType.FUNDS]: 200 },
    effects: {
        unlockMessage: '解锁: ？？？ (深渊凝视)'
    },
    icon: 'Heart',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'plushie_therapy',
    name: '毛绒疗法',
    description: 'IKEA鲨鱼唯一理解你。拥抱缓解现实的尖锐棱角。',
    tier: 2,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.FUNDS]: 300, [ResourceType.PLEASURE]: 20 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.2 },
        clickPowerMult: 0.1
    },
    icon: 'Smile',
    preRequisiteTech: 'programming_socks'
  },

  // --- NEW FLAVOR TECHS (Tier 2) ---
  {
    id: 'lossless_archives',
    name: '无损音频档案',
    description: 'FLAC or nothing. 听到了吉他手的呼吸声吗？',
    tier: 2,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 6000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2 },
    },
    icon: 'Headphones',
    preRequisiteTech: 'p2p_sharing'
  },
  {
    id: 'script_optimization',
    name: '脚本优化',
    description: '删掉所有的注释能让代码跑得更快。这很科学。',
    tier: 2,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1 },
    },
    icon: 'FastForward',
    preRequisiteTech: 'basic_scripting'
  },
  {
    id: 'vintage_obsession',
    name: '复古电子迷恋',
    description: 'CRT 显示器的色彩是不可替代的。扫描线的美学。',
    tier: 2,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.CARDBOARD]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.CRED]: 0.15 },
    },
    icon: 'Tv',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'lego_architecture',
    name: '乐高架构',
    description: '模块化、绝缘、可扩展。谁说服务器机架必须是金属做的？',
    tier: 2,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 500, [ResourceType.CARDBOARD]: 50 },
    effects: {
        globalCostReduction: 0.03,
        unlockMessage: '积木式扩容'
    },
    icon: 'Grid',
    preRequisiteTech: 'cardboard_architecture'
  },
  {
    id: 'thunderbird_photo',
    name: '雷鸟照片鉴别',
    description: '19世纪牛仔举着翼龙的照片存在吗？还是曼德拉效应？',
    tier: 2,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.LORE]: 30, [ResourceType.INFO]: 4000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
        unlockMessage: '解锁: 神秘生物暗房'
    },
    icon: 'Image',
    preRequisiteTech: 'spectral_photography'
  }
];
