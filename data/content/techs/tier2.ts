
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_2_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: SEO STRATEGY ---
  {
    id: 'black_hat_seo',
    name: '黑帽 SEO',
    description: '肆无忌惮地堆砌关键词和隐藏文本，完全无视用户体验，只为在搜索结果中强行霸占前排位置。',
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
    description: '坚持遵循搜索引擎的规则提供优质内容，虽然见效缓慢，但能建立起稳固且不会被算法惩罚的流量护城河。',
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
    description: '接入了这个互联网的活化石系统，发现当今流行的大部分网络迷因，其实早在几十年前就在这里诞生了。',
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
    description: '掌握了利用安全漏洞控制万千物联网设备的技术，能将无数不安全的摄像头和路由器汇聚成听命于你的大军。',
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
    description: '在公共网络中建立加密隧道，不仅能绕过地理封锁，更是隐藏真实 IP 地址、通往深层网络的必经之路。',
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
    description: '复兴了古老的电话黑客技术，利用特定频率的音频信号欺骗电信交换机，证明了口哨声也能成为钥匙。',
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
    description: '深入理解了电磁波的传播特性，即使全球互联网瘫痪，你依然能通过无线电波在废土中保持通讯。',
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
    description: '利用去中心化的 BitTorrent 协议进行文件传输，在这个网络中没有中心服务器，每个下载者同时也是上传者。',
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
    description: '系统性地分析瘦长鬼影等都市传说的起源与变异，研究虚构的恐怖故事是如何在网络传播中逐渐具象化的。',
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
    description: '专注于寻找卫星地图上被刻意模糊或涂抹的区域，甚至发现了一些只存在于数据库中、现实里并不存在的幽灵岛屿。',
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
    description: '改良了摄影器材的光谱敏感度，试图捕捉那些超出可见光范围的影像，验证鬼魂是否只是处于不同频率的能量体。',
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
    description: '利用算法强化人类大脑的空想性错视机制，在毫无意义的随机噪点中强行识别出人脸，探究这是否是某种启示。',
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
    description: '精通将秘密信息编码进图片最低有效位的技术，让一张看似普通的风景照成为传递机密情报的隐蔽载体。',
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
    description: '熟练掌握了这种用数字和符号替代字母的黑客方言，能从那些看似乱码的文本中迅速提取出隐藏的关键信息。',
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
    description: '通过在特定的微秒级时间帧内进行操作，利用伪随机数生成器的确定性漏洞，强行让系统吐出你想要的结果。',
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
    description: '不知疲倦地引用物理公式计算虚构角色的攻击力，哪怕是为了论证一个动漫人物的拳头能释放多少吨 TNT 当量。',
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
    description: '利用碳-14 同位素的衰变规律精确测定文物年代，既能无情揭穿赝品，也能发现那些出现在错误时代的欧帕兹。',
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
    description: '潜入尘封已久的图书馆地下室，通过缩微胶卷阅读半个世纪前的报纸，寻找那些被现代互联网遗忘的历史碎片。',
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
    description: '部署高效算法从海量冗余数据中剔除重复项，只保留唯一的有效信息，这对提升有限的存储空间效率至关重要。',
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
    description: '分析标点符号的使用习惯和行文句式，识别出每个人独一无二的语言指纹，哪怕是匿名发帖也无法遁形。',
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
    description: '尝试通过冥想关闭显意识的控制，让深层潜意识甚至某种“外来实体”借用你的双手，在键盘上自动敲击出信息。',
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
    description: '领悟到互联网不仅仅是机器的连接，它实际上是人类集体潜意识的物理投射，流动的二进制信息即是灵魂。',
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
    description: '这种成分不明的糊状物虽然口感糟糕，但能提供维持生命所需的所有营养，让你无需离开电脑椅也能生存。',
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
    description: '在衣柜里搭建了简易的 LED 光照系统养殖小球藻，这种高蛋白藻类是末日环境下实现自给自足的完美口粮。',
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
    description: '坚信天蛾人和大脚怪并非无稽之谈，而是尚未被主流科学界发现的物种，致力于搜集证据填补生物学的空白。',
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
    description: '对肯尼迪遇刺案的官方解释提出强烈质疑，一颗子弹不可能在空中多次转弯，除非当时的物理法则发生了扭曲。',
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
    description: '在调频收音机或录音设备的白噪音背景中，捕捉那些疑似来自亡者世界的电子语音，试图破译其中的低语。',
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
    description: '将强力钕磁铁投入浑浊的城市运河中，希望能吸附上来一些被犯罪分子丢弃的凶器、保险箱或其他金属证物。',
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
    description: '掌握了将毫无科学依据的概念包装成高科技产品的营销术，无论是量子速读还是负离子内裤，信者掏钱即可。',
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
    description: '利用从服务器废墟中回收的廉价至强处理器和服务器内存，在家里搭建起性能强悍的工作站，性价比极高。',
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
    description: '传说穿上这种粉白条纹的长筒袜能显著提高编程能力，它不仅仅是审美选择，更是一种祈求代码编译成功的玄学护身符。',
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
    description: '通过在指尖植入微型磁体来获得感知电磁场的能力，这虽是危险的生物黑客行为，却能让你触摸到无形的数据流。',
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
    description: '验证了互联网最古老的法则之一：只要是存在的事物，就一定能找到关于它的色情创作，这是驱动网络流量的原动力。',
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
    description: '当现实世界的压力让你喘不过气时，唯有那只宜家鲨鱼玩偶能提供无声的理解，它的拥抱能缓解现实的尖锐棱角。',
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
    description: '对音频质量有着近乎病态的执着，只收藏无损 FLAC 格式，声称能从高清音频中听到吉他手换气时的微弱呼吸声。',
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
    description: '坚信删掉代码中的所有注释和空行能减少文件体积从而提升运行速度，虽然这在现代编译原理上完全站不住脚。',
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
    description: '沉迷于笨重的 CRT 显示器，坚信其独特的荧光粉色彩和扫描线带来的视觉质感，是任何现代液晶屏幕都无法替代的。',
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
    description: '利用乐高积木的模块化和绝缘特性搭建服务器机架，证明了只要设计得当，玩具也能成为低成本且易扩展的基础设施。',
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
    description: '致力于寻找那张传说中 19 世纪牛仔与翼龙尸体合影的照片，试图搞清楚它究竟是被掩盖的真相，还是集体的曼德拉效应。',
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
