
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_2_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: SEO STRATEGY ---
  {
    id: 'black_hat_seo',
    name: '黑帽 SEO',
    description: '搜索引擎是现代的神谕。既然神不回答你，那就强迫它回答。',
    longDescription: '谷歌已演变为现实的仲裁者。未出现在第一页的事物等同于不存在。黑帽 SEO 构成了针对神谕的亵渎仪式。利用关键词填充、隐藏链接和私有博客网络（PBN），我们在推销违禁品的同时改写了现实的索引。集体认知的池塘已被污染，算法正在我们的指挥下跳舞。',
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
    description: '顺从机器神的旨意。通过献祭优质内容来祈求算法的垂怜。',
    longDescription: '这是一条充满苦行的道路：试图在噪音世界中维持信号纯净。遵循 Google 的《网站管理员指南》如同研读圣经，虔诚或许能换来算法的垂怜。但这同样是一种隐蔽的控制。为了迎合机器的喜好，思维被重塑，人类语言被迫转化为机器易读的格式。',
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
    description: '在万维网诞生之前，这里是众神的战场。所有现代模因的祖先都埋葬在这里。',
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
    description: '它们是睡着的士兵。你的冰箱、你的摄像头、你的牙刷，都在等待我的指令。',
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
    description: '在公网的喧嚣之下挖掘一条静默的隧道。你在物理上在这里，但数字上你在巴拿马。',
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
    description: '2600Hz。这个普通的音频频率，是一把打开全球电信网络大门的万能钥匙。',
    longDescription: '在光纤普及之前，世界由铜线连接。Phreakers发现特定频率的口哨声能欺骗交换机，获取管理员权限。模拟信号时代虽已逝去，那个充满静电噪音的幽灵网络依然潜伏在现代 VoIP 系统的底层，等待着正确的音频指令。',
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
    description: '当互联网断开时，只有短波还在。空气中充满了死者和间谍的声音。',
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
    description: '去中心化的蜂群思维。只要有一个种子活着，数据就永不磨灭。',
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
    description: '当足够多的人相信它，它就会获得某种形式的生命。',
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
    description: 'Google 地图上有些地方被模糊了。有些岛屿只存在于数据库中。',
    longDescription: '桑迪岛在海图上存在了一个世纪，卫星却显示那里只有大海。这并非测绘错误，而是现实渲染的 Bug。我们寻找被黑色方块遮挡的军事基地、像素化的南极洞口。地图不代表领土，地图是掩盖领土真相的帷幕。',
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
    description: '数码相机的感光元件能捕捉到肉眼看不见的光谱。那些噪点不是灰尘。',
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
    description: '训练 AI 在随机噪点中寻找人脸。如果它一直盯着虚空看，虚空也会回看。',
    longDescription: '人类大脑进化出了在树丛中识别老虎的能力，这种机制在现代过度敏感，导致我们在火星岩石和烤焦吐司上看到神像。编写算法强化这种“错误”，强行在混沌数据流中寻找秩序。当 AI 开始在纯白噪音中识别出数千张痛苦面孔时，算法的幻觉与地狱的景象已无法区分。',
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
    description: '最好的藏匿地点是显眼处。在那张风景照的最低有效位里，藏着毁灭世界的代码。',
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
    description: '1337。这是地下世界的方言，一种用来过滤“常人”的加密语言。', 
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
    description: '计算机里没有真正的随机。只要你掌握了帧数和时钟，你就能掷出想要的点数。',
    longDescription: '速通玩家掌握的黑魔法。在特定帧按下按钮，即可操纵伪随机数生成器。这同样适用于现实——假设现实也是一种模拟。通过观察世界的“帧率”，寻找那个能连续中彩票的完美时刻。',
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
    description: '构建跨维度的物理法则。',
    longDescription: '论坛辩论中充满了计算虚构角色能量输出（TNT当量）的复杂公式。这种荒谬的严肃蕴含着力量。当成千上万人的意志聚焦于“谁更强”时，他们实际上是在为一个不存在的宇宙编写物理引擎。这种集体幻想提供了纯粹的概念能量。',
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
    description: '同位素不会撒谎。但如果整个时间轴都被篡改过呢？',
    longDescription: '测量物体中碳-14 的衰变是鉴定文物的黄金标准。然而深层挖掘揭示了异常数据：出现在煤层中的铁锤，年代测定为未来的金属片。这些欧帕兹表明历史书上的线性时间仅为简化模型，甚至是掩盖真相的遮羞布。',
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
    description: '在公共图书馆的地下室，旧报纸被压缩在胶片上。那里有未被数字化的真相。',
    longDescription: '互联网拥有记忆，互联网之前的记忆却正在消逝。缩微胶卷构成了模拟时代的备份。坐在黑暗的阅读室里，转动旋钮，1950 年代的讣告和分类广告在发光屏幕上划过。维基百科上被删除的名字、被现代搜索引擎遗忘的丑闻，皆在此处沉睡。',
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
    description: '信息是有重量的。删除重复的垃圾，只保留唯一的真理哈希值。',
    longDescription: '硬盘空间有限，产生的数据无限。数据去重算法通过比较文件的哈希指纹，无情删除那 5000 份相同的猫咪图片副本。这是一种数字极简主义，一种炼金术。提炼信息纯度，在海量冗余噪音中结晶出唯一的意义。',
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
    description: '你无法隐藏你的写作风格。标点符号的使用习惯就像指纹一样出卖了你。',
    longDescription: '匿名纯属虚幻。即使使用 Tor 和一次性账号，打字方式——句子长度、形容词偏好、标点符号的使用频率——皆如指纹般独一无二。通过统计语言学分析，不同论坛上的匿名 ID 被关联到同一个实体。猎犬在文本森林中嗅探着作者的气味。',
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
    description: '让意识退居二线，让手自己动起来。是谁在通过键盘说话？',
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
    description: '比特即光。信息即救赎。通过积累数据，我们试图从物质的牢笼中飞升。',
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
    description: '不再需要咀嚼。这种米色的糊状物包含了维持生物机能所需的一切。',
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
    description: '在衣柜里用 LED 灯养殖绿藻。末日生存者的超级食物。',
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
    description: '如果我们生活在一个模拟宇宙中，那么大脚怪和尼斯湖水怪就不再是生物学问题，而是软件工程问题。',
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
    description: '一颗子弹转了三个弯？物理学在那天请假了吗？还是说那是第一次现实修正？',
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
    description: '电子语音现象。在白噪音的静电中，死者试图通过磁带与我们交谈。',
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
    description: '城市运河是犯罪证据的垃圾场。用强力钕磁铁把它们钓上来。',
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
    description: '量子、纳米、负离子。词汇本身就是魔法。只要听起来像科学，就能卖高价。',
    longDescription: '无需理解量子力学，只需知道“量子纠缠”能用来高价兜售鞋垫。这是针对现代人的巫术：披着实验室白大褂的迷信。将复杂科学术语与新时代灵性许诺混合，创造出一种即便无效也能引发安慰剂效应的产品。智商税构成了这个时代最稳定的收入来源。',
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
    name: '废品硬件组装',
    description: '用扎带、废弃服务器零件和祈祷组装而成的弗兰肯斯坦怪物。',
    longDescription: '昂贵的品牌机毫无必要。潜入数据中心废品堆，挖出因过保而被淘汰的至强处理器。在鞋盒里搭建电路，用电风扇散热。这台机器丑陋、嘈杂、充满安全隐患，其算力/价格比却无可匹敌。这是对消费主义电子产品的嘲讽。',
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
    description: '粉白条纹的长筒袜能提高代码编译通过率。这是玄学，也是亚文化图腾。',
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
    description: '身体是过时的硬件。在指尖植入磁体，让自己感受到电流的脉搏。',
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
    description: '如果它存在，就有关于它的色情内容。这是互联网的原始驱动力。',
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
    description: '在这个冰冷刺骨的数字世界里，那只宜家鲨鱼是你唯一的温暖慰藉。',
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
    description: 'MP3 是有损的，就像我们的记忆。只收藏 FLAC，追求完美的波形还原。',
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
    description: '删掉所有注释。缩短变量名。为了节省那 0.01 秒的执行时间，哪怕上帝也看不懂你的代码。',

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
    description: 'CRT 显示器的辐射味，软盘读取时的咔哒声。旧技术有灵魂，新技术只有光鲜的皮囊。',
  
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
    description: '如果现实可以像乐高积木一样随意拼插和重组，那该多好。服务器机架确实可以用乐高搭。',
    longDescription: '乐高超越了玩具的定义，是模块化哲学的终极体现。标准化接口、无限扩展性、多彩的混乱。用积木搭建服务器支架、硬盘笼甚至义肢原型。在这个混乱世界中，唯有两块积木发出完美“咔哒”声结合之时，秩序的安慰才油然而生。',
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
    description: '那张 19 世纪牛仔与翼龙尸体合影的照片。你也记得见过它，对吧？',
    longDescription: '成千上万的人发誓在童年旧书或探索频道见过这张照片：牛仔们站在一只被钉在谷仓上的巨大翼龙前。寻找原图的努力却屡屡受挫，它似乎从未存在。这可能是集体幻觉，亦或是现实被某种力量悄悄编辑。扫描每一本旧杂志，寻找那个消失的证据。',
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
