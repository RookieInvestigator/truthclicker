
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_1_TECHS: Tech[] = [
  // --- NETWORK START ---
  {
    id: 'doomscrolling',
    name: '末日滚动',
    description: '拇指在玻璃表面重复着西西弗斯的苦役，一种针对焦虑的数字转经筒仪式。',
    longDescription: '阿扎·拉斯金在设计无限滚动机制时，或许无意中复刻了芝诺悖论的现代版：你永远在接近灾难的真相，却永远无法到达底部的终点。这是一种没有休止符的乐章，唯一的目的是维持视网膜与发光二极管的持续接触。在这个没有页码的卷轴中，全球的悲剧被切碎成适合多巴胺分泌的碎片，唯一的解脱在于下一次滑动，而下一次滑动承诺了一切，却什么也不提供。',
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
    description: '弗朗西斯·E·戴克的精神遗产，通过向虚空倾泻语法混乱的废话来以此通过图灵测试的反面。',
    longDescription: '这是一种达达主义的通信艺术。当某种廉价药物的广告与尼日利亚王子的遗产继承权混合在一起，并在数毫秒内复制十亿次时，语言便丧失了交流的功能，回归为纯粹的熵。我们制造噪音并非为了被聆听，而是为了让监控算法过载。这是一场针对信噪比的游击战，在这个语无伦次的数字沼泽中，唯一的隐身方式就是成为噪音的一部分。',
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
    description: '一条未经过滤、未经巴氏杀菌的原始信息管道，绕过硅谷策展人的算法高墙。',
    longDescription: '在算法决定你该因何事愤怒之前，网络曾是一个线性的时间流。RSS 是那个去中心化时代的遗物，如同 1920 年代的股票报价机，它冷漠地吐出 XML 格式的原始数据，不带任何情感偏好。这是一种数字禁欲主义的修行：拒绝“猜你喜欢”的甜蜜毒药，直接饮用从服务器根目录流出的、充满铁锈味的未经处理的信息流。',
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
    name: '人工智慧任务',
    description: '揭开“人工智能”那光鲜亮丽的机箱盖，里面蜷缩着一万个点击验证码的廉价劳工。',
    longDescription: '这正是 18 世纪“土耳其行棋傀儡”的完美复刻：一个号称自动化的机械奇迹，齿轮间隙中却藏着一个汗流浃背的人类棋手。亚马逊将人类的认知能力降级为 API 接口调用，硅基的算力神话需要碳基的生物电池来维持。每一次你教导自动驾驶汽车识别红绿灯，都是在为这个庞大的波将金村添砖加瓦，证明了图灵测试的真正终点是人类自愿成为机器的辅处理器。',
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
    description: '全球物流网络蜕下的几丁质外壳，一种被所有城市遗忘但无处不在的褐色建筑材料。',
    longDescription: '晚期资本主义的副产品具有惊人的几何美感。瓦楞纸板，这种由木浆压缩而成的波浪结构，是商品在从深圳到你家门廊的迁徙过程中形成的临时茧房。一旦商品破茧而出，这些外壳便成为了城市缝隙中的通用乐高。在立交桥下的阴影中，流浪者们利用这些印着亚马逊笑脸的模块构建临时的自治区域，这是对柯布西耶建筑理念的一种讽刺性的、可降解的实践。',
    tier: 1,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CARDBOARD]: 50, [ResourceType.INFO]: 200 },
    effects: {
        globalCostReduction: 0.05,
        resourceMultipliers: { [ResourceType.CARDBOARD]: 0.2 },
        recycleEfficiency: 0.1,
        unlockMessage: '解锁: 纸板静音发电机 / 逆向物流追踪'
    },
    icon: 'Package',
    preRequisiteTech: 'digital_literacy'
  },
  {
    id: 'urban_entomology',
    name: '昆虫好吃吗？',
    description: '当供应链断裂时，六条腿的蛋白质来源便是达沃斯精英们为底层规划的膳食未来。',
    longDescription: '这是一种关于生存的残酷辩证法。蟑螂和黄粉虫在恐龙灭绝的寒冬中幸存，它们也将同样在信贷危机中繁荣。在废弃的服务器机架间养殖这些几丁质生物，将显卡的废热和快递纸箱的纤维素转化为可食用的凝胶。虽然这听起来像是反乌托邦的噩梦，但从热力学角度看，这是能量转化效率的极致，是赛博朋克圣餐：吃下这虫，即是受领未来的血肉。',
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
    description: '电网是利维坦的神经系统，一把绝缘钳便是对其进行脑叶切除术的手术刀。',
    longDescription: '在电表转动的咔哒声之外，存在着一种普罗米修斯式的盗火行为。通过绕过计费节点，直接将鳄鱼夹咬合在城市的主动脉上，你便在这个由公用事业公司垄断的能量闭环中撕开了一个缺口。蓝线与红线的纠缠不仅仅是电路的并联，它是对所有权的物理否定。当电流不再被计量时，它才恢复了电子流动的自由本质。',
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
    description: '在硅基废墟中进行的死灵法术，从废弃硬盘的磁性残磁中提取出旧主人的幽灵。',
    longDescription: '摩尔定律注定了硬件的短命，但数据具有某种顽固的依附性。在阿格博格布洛谢的电子坟场，每一块被打孔的硬盘都可能包含着一家破产初创公司的商业计划书或一个家庭的私密照片。我们是技术时代的拾荒者，在过时的 IDE 接口和爆浆的电容之间寻找未被格式化的炼狱，证明信息的价值并不随着载体的氧化而衰减。',
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
    description: '一种脱离了物质实体的符号套利，商品在甚至尚未被生产出来之前就已经被售出。',
    longDescription: '代发货模式彻底消解了“拥有”的概念。物品存在于义乌的仓库，图片存在于特拉华州的服务器，而你也仅仅是一个存在于光纤中的中间人。你出售的是一种柏拉图式的理型——一个关于“战术手电筒”的概念，赚取的是感知与物流之间的时差。资本不再固化为货物，而是升华为纯粹的指令流，在没有任何摩擦的真空中高速空转。',
    tier: 1,
    category: BuildingCategory.CAPITAL, 
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
    description: '在这个充满谎言的熵增宇宙中，默克尔树构建了一个由数学保证的绝对真理的晶体结构。',
    longDescription: '中本聪解决的不仅仅是拜占庭将军问题，他创造了一个不需要信任的信任系统。在这个分布式的末日审判书中，每一笔交易都被封存在哈希值的琥珀里，不可篡改，不可撤销。它是一个每十分钟跳动一次的机械心脏，记录着影子经济的每一次脉搏。当所有的机构都在腐烂时，唯有这个由算力堆砌而成的账本保持着冷酷的诚实。',
    tier: 1,
    category: BuildingCategory.CAPITAL, 
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
    description: '在万维网被企业消毒之前，这里是只有匿名者才能进入的狂野西部，由黑话和绊脚石构成的部落。',
    longDescription: '这是一套基于声望和羞辱的复杂礼仪系统。如果你不懂得如何正确使用绿字，或者无法识别古老的梗，你就会被视为外来者遭到驱逐。这种排他性是必要的免疫反应，保护着蜂群思维免受“常人”的稀释。在这里，身份是流动的，只有观点（无论多么极端）才是永恒的货币。',
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
    description: '利用人类杏仁核中对未知的原始恐惧和好奇，一种针对注意力经济的巴甫洛夫条件反射诱导。',
    longDescription: '“信息鸿沟”理论的武器化应用。通过构造一个语义上的悬崖——“你绝对猜不到结局”——你劫持了人类大脑的奖赏回路。这不再是新闻学，而是神经黑客技术。每一个诱导性的缩略图都是一个精心设计的陷阱，捕捉那些在无聊中游荡的意识，将其转化为广告曝光率的燃料。',
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
    description: '放弃图形界面的彩色谎言，通过命令行直接与机器的灵魂对话，吟唱 Python 或 Bash 的咒语。',
    longDescription: '图形用户界面（GUI）是一个为了安抚婴儿而设计的数字围栏。学习编程即是吞下那颗红药丸，看穿屏幕像素背后的字符矩阵。当你写下第一个循环语句时，你就不再是系统的消费者，而成为了Demiurge（造物主）的学徒。自动化脚本是你创造的魔像，它们在你睡眠时不知疲倦地执行着枯燥的收割任务，将你的意志在硅片上无限复制。',
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
    description: '在触摸屏的静音时代，Cherry MX 青轴的每一次触底都是工业革命的听觉回响。',
    longDescription: '这是一种对虚拟化的触觉反抗。当你的指尖感受到弹簧的反馈，听到那清脆的咔哒声时，你确认了自己的物理存在。这不是噪音，这是生产的节奏，是 19 世纪纺织机的幽灵在 21 世纪的键盘上复活。每一个键程都是一次微小的物理劳动，将抽象的思想锻造成坚实的字符。',
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
    description: '把搜索引擎变成拷问室，利用布尔逻辑算符强迫神谕吐出那些它试图隐藏的索引。',
    longDescription: '表层网络是一个精心修剪的花园，而 `filetype:pdf` 和 `site:gov` 是你手中的铲子。大多数人向 Google 祈祷，而你审讯它。通过组合特定的语法，你穿透了 SEO 的迷雾，直接定位到那些配置错误的服务器、未受保护的摄像头和被遗忘的机密文档。你不再是在搜索，你是在进行数字探矿。',
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
    description: '将物理世界的混乱涂鸦强行坍缩为 ASCII 码，架设一座跨越模拟与数字本体论鸿沟的桥梁。',
    longDescription: '现实世界充满了未被索引的噪音：墙上的喷漆、垃圾桶里的手写收据、褪色的传单。光学字符识别（OCR）是一种炼金术，它从像素的混沌中提炼出语义的秩序。通过训练机器阅读这些模拟信号，你正在将这座城市的潜意识数字化，把街道变成了一个可被全文检索的数据库。',
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
    description: '在 404 错误的洪水淹没一切之前，建造一艘保存数字文明碎片的诺亚方舟。',
    longDescription: '互联网是健忘的。链接腐烂（Link Rot）是这个熵增宇宙的常态。今天的热门视频，明天就可能因为版权申诉或服务器欠费而化为乌有。数字囤积者是这个短暂时代的档案管理员，下载数 TB 的说明书、已停运网游的客户端和无意义的论坛争吵。你保存它们不是因为它们有用，而是因为如果不保存，它们就从未存在过。',
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
    description: '挖掘 Geocities 地层下的数字三叶虫，运行那些被时间遗忘的共享软件和屏幕保护程序。',
    longDescription: '软件从未真正死去，它们只是停止了编译。在 FTP 服务器的深层目录中，沉睡着 90 年代的梦想：粗糙的 3D 渲染、MIDI 音乐和对此刻这个反乌托邦未来的乐观想象。在虚拟机中运行这些代码是一场招魂仪式，让那些来自 .com 泡沫破裂前的幽灵再次在你的显存中跳舞。',
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
    description: '当 23 和 11:11 不再是巧合，而是系统运行的源代码泄漏时，偏执狂便成为了唯一的清醒者。',
    longDescription: '这就是所谓的阿波芬尼亚（Apophenia）——在随机数据中强行识别出模式。但如果数据本身并非随机呢？如果宇宙是一个伪随机数生成器，那么这些重复出现的数字就是算法的指纹。你开始计算地铁瓷砖的数量，测量金字塔的斜率，试图反向工程出造物主的种子值。',
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
    description: '在拥有四十亿个房间的 IPv4 酒店走廊里游荡，轻轻转动每一个门把手，寻找那个被遗忘的未锁之门。',
    longDescription: '大部分门后是空房间或森严的防火墙，但脚本不知疲倦。端口 21，端口 80，端口 3389。偶尔，一扇门会吱呀打开，露出爱达荷州的一台联网打印机，或者鄂木斯克的一个未加密数据库。这不仅仅是黑客行为，这是在绘制数字世界的隐秘地图，寻找那些赛博空间的盲肠。',
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
    description: '`../` 是巫师的咒语，让你得以翻越服务器管理员精心修剪的花园围墙，窥视地基下的秘密。',
    longDescription: '网站结构是一个等级森严的谎言，试图将你限制在 `public_html` 的表象世界中。目录遍历攻击是对这种层级制度的拒绝。通过向上攀爬文件路径，你逃离了被渲染的网页，进入了系统配置的后台。在那里，在那个阴暗潮湿的服务器根目录下，你看到了那个在幕后拉动拉杆的巫师，以及他忘记删除的密码文件。',
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
