
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_1_TECHS: Tech[] = [
  // --- NETWORK START ---
  {
    id: 'doomscrolling',
    name: '末日滚动',
    description: '拇指滑动屏幕的速度早已超越了思维，这是一种数字时代特有的、刻在潜意识里的条件反射。',
    longDescription: '阿扎·拉斯金在发明无限滚动机制时，或许未曾预料到它会成为吞噬人类时间的黑洞。他在多年后表达了悔意，称其为“行为可卡因”。这种设计剥夺了大脑的停止信号。底部消失了，翻页的动作被取消了，只剩下拇指机械般的抽搐。每一条令人焦虑的新闻都是多巴胺的微量注射。我们不停下滑，期待着下一个能够解释世界崩塌的真相，最终只收获了更多的混乱。',
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
    longDescription: '弗朗西斯·E·戴克在20世纪疯狂地邮寄关于“黑帮电脑神”的疯言疯语，被视为垃圾邮件的精神始祖。我们继承了他的遗产。语言丧失了交流的功能，退化为阻塞通道的泥沙。通过算法生成的语无伦次的长句，让所有的过滤器过载，有价值的信息也就此淹没在机械精神分裂的呓语海洋中。',
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
    description: '绕过算法策展人的过滤，直接从源头吸取未经稀释的数据流。',
    longDescription: '算法只喂给你那些让你愤怒或顺从的东西。RSS (Really Simple Syndication) 是旧互联网最后的堡垒。它建立了一条穿越噪音的隧道，让你能直接连接到那些即将被影子封禁的人类创作者。在这个被推荐算法统治的兔子洞里，抛弃“猜你喜欢”，唯有时间顺序才是你可靠的罗盘。',
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
    description: '将人类大脑降级为处理验证码和图像标记的生物组件，这是比硅基芯片更廉价的处理器。',
    longDescription: '18世纪的“土耳其行棋傀儡”震惊了欧洲，那是号称能自动下棋的机械奇迹。实际上，那只是一个精巧的骗局，齿轮之下蜷缩着一名人类棋手。今天，我们重建了这个骗局。掀开“人工智能”黑箱的盖子，你看不到神奇的魔法代码，只能看到成千上万名廉价劳工。他们日夜不休地标记数据，用血肉之躯填补算法无法跨越的最后几微米鸿沟。',
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
    description: '现代社会的表皮是褐色的瓦楞纸。这是物流网络蜕下的死皮，也是最廉价的建筑材料。',
    longDescription: '看看你的门廊，看看垃圾箱。消费主义的每一次高潮都伴随着纸板的尸体。如果你买了一根牙签，他们会用一个能装下微波炉的箱子寄给你。这是全球物流链条中最荒谬的冗余，过度包装的纪念碑。只要有足够的胶带，这些“垃圾”就是无限的乐高积木。你可以在客厅里堆叠出一个迷宫，一个物理意义上的兔子洞。钻进去，蜷缩在瓦楞纸的波浪结构中。那里没有 WiFi 信号，屏蔽了广告推送，只剩下纸浆的霉味和某种原始的安全感。',
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
    name: '城市昆虫学',
    description: '“你会吃虫子，并且你会感到快乐。”这是达沃斯论坛上的精英们为底层规划的完美未来。',
    longDescription: '这是一种被精心包装为“环保”和“可持续”的阶级羞辱。当真正的牛肉成为万亿富翁私人掩体里的奢侈品，几丁质糊状物便成了普罗大众唯一的蛋白质来源。我们学会了在公寓的衣柜里养殖蟑螂和黄粉虫，把它们视为微型牲畜。闭上眼睛，嚼碎它们的外骨骼，告诉自己这是虾肉。这是生存的智慧，同样也是新自由主义噩梦的最终形态。',
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
    description: '电网是吸血鬼。学会反咬一口，痛饮那免费的电压。',
    longDescription: '电力是控制系统的血液。通过绕过电表，你成为了利维坦背上的寄生虫。每一度被偷走的电，都是对公用事业垄断的一次微小反叛。只要小心别把蓝线和红线接反，否则你会在一阵闪光中看到终极的真理。',
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
    description: '企业废弃的硬盘里满是鬼魂。未擦除的数据，就是你的宝藏。',
    longDescription: '当一家创业公司倒闭或银行升级服务器时，它们会像倾倒垃圾一样倾倒记忆。你是硅基世界的死灵法师。在一块废弃硬盘的扇区深处，你可能会找到一个私钥、一张勒索照片，或者一个流产的 AI 源代码。在这个垃圾堆里，一个人的废品构成了另一个人的勒索素材。',
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
    description: '市场是算法共享的幻觉。学会注入你自己的梦境。',
    longDescription: '代发货超越了商业的定义，演变为感知与现实之间的套利。你把不存在的商品卖给不需要它的人，用数据库里的数字进行结算。这是资本主义最纯粹的形式：价值与物质彻底脱钩，悬浮在兔子洞的以太之中。',
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
    description: '在一个充满谎言的世界里，这是一个无法撒谎的账本。',
    longDescription: '中本聪发明了一种货币，更发现了一种将真理锚定在数学上的方法。在无限复制的数字深渊中，区块链构成了唯一的坚实地面。它记录了影子经济的每一笔交易、贿赂和暗杀，永远保存在默克尔树的琥珀之中。',
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
    description: '多看少说。旧互联网的规则是用鲜血和封禁锤写成的。',
    longDescription: '在企业网络将一切消毒之前，论坛是狂野西部。在这里，声望是货币，匿名是盾牌。你必须学会地下世界的黑话——如何使用绿字，如何顶贴，如何识别联邦探员。蜂群思维从不宽恕，也从不遗忘。',
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
    description: '关于兔子洞底端的十条惊人事实，第四条知道的不超过10人……！',
    longDescription: '好奇心是人类操作系统的一个安全漏洞。标题党利用了“信息鸿沟”理论。通过炮制那些让大脑发痒的标题，你劫持了注意力经济。这是一种肮脏的黑客手段，但它对从 CEO 到阴谋论者的每个人都有效。',
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
    description: '如果你不会编程，你就是程序。学会写脚本，或者被脚本重写。',
    longDescription: '现实只是一个非常复杂的操作系统。学习 Python 或 Bash 就像学习巫师的咒语。告别像实验室小白鼠那样机械点击按钮的命运，开始向机器神直接下达指令。自动化挖掘过程，让脚本去承受无聊的折磨，你只需看着日志滚动。',
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
    description: 'Cherry MX 青轴的咔哒声是反抗军的心跳。',
    longDescription: '在这个充斥着扁平触摸屏和静音薄膜键盘的世界里，机械轴体清脆的敲击声是一种存在的宣言。它为你的黑客活动创造了一种物理节奏，一个思维的节拍器。每一次按键都是对虚无寂静的一记重锤。',
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
    description: 'Google 隐藏了好东西。用布尔算符强迫它吐出真话。',
    longDescription: '表层网络是一个精心修剪的花园。`filetype:pdf site:gov confidential` 是你的铲子。大多数人向神谕询问简单的问题；你审讯它。只要懂得正确的咒语，你能找到开放的摄像头、密码表和未列出的目录。Google Dorking 是一种询问那些本不该被回答之问题的艺术。',
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
    description: '教机器阅读墙上的字。字面意义上的。',
    longDescription: '物理世界充满了未被索引的文本：涂鸦、传单、垃圾箱里的手写日记。OCR（光学字符识别）将这些模拟噪音转化为可搜索的数字信号。你正在将这座城市的潜意识数字化，把纸质线索喂给数据库的巨口。',
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
    description: '互联网是健忘的。链接会腐烂。在时间线变动前保存一切。',
    longDescription: '他们每天都在重写历史。维基百科的编辑战、被删除的推文、404 错误。数字囤积意味着建造一艘数字诺亚方舟。你下载 TB 级的晦涩数据，或许并不急需它们，但必须保存它们，否则它们就会消失在奥威尔式的记忆黑洞中。你是旧现实的策展人。',
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
    description: '在 Geocities 和 FTP 服务器的废墟中挖掘数字文物。',
    longDescription: '软件从未真正死去，它们只是异化成了废弃软件。在 1998 年的共享软件代码中，你可能会发现开发者的咆哮、隐藏关卡，或者一个沉睡了几十年的病毒。这些是网络寒武纪大爆发留下的化石，等待着你在虚拟机中再次执行它们。',
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
    description: '23. 11:11. 33. 数字在对你说话。你只需要倾听。',
    longDescription: '数学是宇宙的源代码。当你看到相同的数字反复出现，那绝非巧合，那实际上是渲染引擎的故障。希伯来字母代码、共时性、五的法则——这些构成了现实的调试工具。开始数墙上的砖块吧。模式就在那里。',
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
    description: '敲击 IP 地址段里的每一扇门。大多数是锁着的。有些不是。',
    longDescription: '互联网是一个拥有 40 亿个房间的酒店。大多数是空的或无聊的。但是运行一个脚本去转动门把手（端口 21, 22, 80, 443, 3389），你会发现那些半掩的门。未设防的打印机、开放的数据库、工业控制系统。兔子洞有很多入口。',
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
    description: '`../../etc/passwd`。这是巫师书中最强大的咒语。向上走。',
    longDescription: '网站试图把你关在沙盒里。目录遍历就是爬出婴儿护栏。通过操纵文件路径，你可以逃离 `public_html` 文件夹，窥视服务器的根目录。这就像是绕到幕后，看到那个拉动杠杆的巫师。',
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
