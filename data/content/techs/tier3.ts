
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_3_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: INFORMATION WARFARE ---
  {
    id: 'disinformation_campaign',
    name: '虚假信息战',
    description: '意识到在信息战中真相远不如情绪重要，通过制造并传播具有煽动性的谣言，用海量的噪音彻底淹没事实。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.FUNDS]: 5000, [ResourceType.SPAM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.4, [ResourceType.PANIC]: 0.2 },
        unlockMessage: '选择路线：混乱散布者'
    },
    icon: 'Megaphone',
    preRequisiteTech: 'social_engineering',
    exclusiveWith: ['fact_check_protocol'],
    highlight: true
  },
  {
    id: 'fact_check_protocol',
    name: '事实核查协议',
    description: '在信息噪音中建立严格的过滤机制，通过多源交叉比对和溯源验证，试图从混乱的谎言中还原出唯一的真相。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 15000, [ResourceType.CODE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.3, [ResourceType.PANIC]: -0.1 },
        unlockMessage: '选择路线：真相守护者'
    },
    icon: 'FileSearch',
    preRequisiteTech: 'social_engineering',
    exclusiveWith: ['disinformation_campaign'],
    highlight: true
  },

  // --- NEW SUBVERSION TECHS ---
  {
    id: 'avian_surveillance',
    name: '鸟类监控论',
    description: '坚信所有鸟类都在里根时期被政府替换成了生物无人机，它们停在电线上不是为了休息，而是为了无线充电和上传数据。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.TINFOIL]: 20, [ResourceType.INFO]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.TINFOIL]: 0.2 },
        unlockMessage: '解锁: 鸟类干扰器'
    },
    icon: 'Feather',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'cultural_pessimism',
    name: '文化悲观主义',
    description: '认为现代社会的种种乱象是文明不可逆转衰退的征兆，坚信只有彻底摒弃现代性、回归古老的传统才能拯救人类。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.RED_PILL]: 10, [ResourceType.CULTURE]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RED_PILL]: 0.2 },
        unlockMessage: '解锁: 红丸播客工作室'
    },
    icon: 'Frown',
    preRequisiteTech: 'conspiracy_101'
  },

  // --- NETWORK ---
  {
    id: 'tor_network',
    name: '洋葱路由',
    description: '掌握了洋葱路由的原理，能够通过层层加密的节点匿名访问 .onion 站点，那是搜索引擎触角无法到达的深网世界。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CODE]: 2000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.INFO]: 0.3 },
        unlockMessage: '解锁: 暗网集市' 
    },
    icon: 'Globe',
    preRequisiteTech: 'p2p_sharing', 
  },
  {
    id: 'dark_fiber', 
    name: '暗光纤',
    description: '非法接入了那些在互联网泡沫时期铺设但从未投入使用的暗光纤网络，独享这庞大且空闲的地下带宽资源。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.FUNDS]: 30000, [ResourceType.OPS]: 8000 }, 
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
    description: '怀疑现在的互联网已经死亡，绝大部分流量和互动都是由 AI 脚本自动生成的，屏幕前的你可能是唯一幸存的真人。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 40000, [ResourceType.OPS]: 4000 }, 
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '解锁: 僵尸评论工厂'
    },
    icon: 'Bot',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'dead_theory_bot', 
    name: '死理论机器人',
    description: '既然互联网已经由僵尸脚本统治，那就编写专门的机器人去收割这些自动化流量，在死去的网络尸体上榨取剩余价值。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.CODE]: 12000, [ResourceType.SPAM]: 2000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.2 },
        recycleEfficiency: 0.1
    },
    icon: 'Skull',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'generative_adversarial_networks',
    name: '生成对抗网络',
    description: '训练两个神经网络进行对抗博弈，一个负责生成以假乱真的数据，另一个负责鉴别真伪，以此不断提升造假的逼真度。',
    tier: 3,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 15000, [ResourceType.OPS]: 3000 },
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: 0.2 },
        unlockMessage: '解锁: 深伪演播室 / VTuber'
    },
    icon: 'Copy',
    preRequisiteTech: 'botnet_architecture'
  },
  {
    id: 'drone_avionics',
    name: '无人机航电',
    description: '利用开源硬件组装出具备超视距飞行能力的无人机飞行控制器，这让你的侦察范围不再受限于肉眼的视野。',
    tier: 3,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.FUNDS]: 10000, [ResourceType.OPS]: 2000 },
    effects: {
        unlockMessage: '解锁: 披萨无人机'
    },
    icon: 'Send',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'wiki_wars', 
    name: '编辑战策略',
    description: '精通维基百科的编辑规则和官僚流程，懂得如何在词条编辑战中获胜，从而潜移默化地修改历史记录和真理的定义。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 20000, [ResourceType.CULTURE]: 500 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.2, [ResourceType.TRUTH]: 0.05 },
        unlockMessage: '解锁: 维基贡献者脚本'
    },
    icon: 'Edit',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'geocities_excavation',
    name: '老网页挖掘',
    description: '挖掘 GeoCities 时代的网络废墟，那些闪烁的 GIF 图和简陋的 HTML 标签背后，隐藏着早期互联网用户最纯粹的灵魂。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2 },
    },
    icon: 'Layout',
    preRequisiteTech: 'abandonware_archeology'
  },

  // --- FOLKLORE EXPANSION ---
  {
    id: 'liminal_space_theory',
    name: '阈限空间',
    description: '研究那些本该熙熙攘攘却空无一人的过渡场所所引发的诡异熟悉感，这种阈限空间似乎是现实与异世界的交界点。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 300, [ResourceType.INFO]: 8000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.2, [ResourceType.PANIC]: 0.1 },
        unlockMessage: '解锁: 阈限空间测量员'
    },
    icon: 'Maximize',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'quantum_randonauting',
    name: '量子随机漫步',
    description: '利用量子随机数生成器打破生活的决定论轨迹，前往意念引导的随机坐标，试图在盲点中发现世界运行的 Bug。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.CODE]: 4000, [ResourceType.LORE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: Randonauting 服务器'
    },
    icon: 'MapPin',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'ritual_protocols',
    name: '网络仪式协议',
    description: '按照特定顺序执行电梯游戏或一个人的捉迷藏等网络仪式，这不仅仅是怪谈游戏，而是某种调用现实底层 API 的操作。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 500, [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.25 },
        unlockMessage: '解锁: 电梯游戏站点'
    },
    icon: 'Book',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'digital_dowsing',
    name: '数字探龙针',
    description: '开发出一种数字化的寻龙术，通过在屏幕上用鼠标绘制神秘符号，根据光标的微小颤抖来定位深层目录下的高价值文件。',
    tier: 3,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 800, [ResourceType.INFO]: 5000 },
    effects: {
        artifactChanceMult: 0.1, 
        artifactRarityBonus: 0.05
    },
    icon: 'MapPin',
    preRequisiteTech: 'ritual_protocols'
  },

  // --- ARCHIVE & VERIFICATION EXPANSION ---
  {
    id: 'underwater_cooling',
    name: '水下散热工程',
    description: '意识到海洋是巨大的免费热沉，只要解决了密封防水难题，就能将服务器沉入海底，获得近乎无限的散热能力。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.OPS]: 5000, [ResourceType.FUNDS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1 },
        unlockMessage: '解锁: 海底数据礁'
    },
    icon: 'Waves',
    preRequisiteTech: 'deduplication'
  },
  {
    id: 'graph_theory_analysis',
    name: '图论分析',
    description: '利用图论算法分析看似无关的数据点之间的连接，揭示出信息不再是孤岛，而是一个牵一发而动全身的巨大网络结构。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.INFO]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.CLUE]: 0.25 },
        unlockMessage: '解锁: 引用关系绘图仪'
    },
    icon: 'Network',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'cold_storage_protocols',
    name: '冷存储协议',
    description: '制定了严格的冷存储协议，将那些访问频率极低但至关重要的数据从在线系统中剥离，冻结在离线的物理介质中。',
    tier: 3,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.CODE]: 1000 },
    effects: {
        recycleEfficiency: 0.1,
        unlockMessage: '解锁: 北极代码库'
    },
    icon: 'Snowflake',
    preRequisiteTech: 'data_hoarding_basics'
  },

  // --- HISTORY ---
  {
    id: 'oopart_studies', 
    name: '欧帕兹研究',
    description: '专门研究那些不符合其出土年代技术水平的“欧帕兹”文物，试图证明在有记载的历史之前曾存在过高等文明。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.CLUE]: 200, [ResourceType.KNOWLEDGE]: 100 }, 
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.3 },
        unlockMessage: '解锁: 欧帕兹收藏馆'
    },
    icon: 'Box',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'paleo_virology',
    name: '古病毒学',
    description: '随着永久冻土层的融化，那些沉睡了数万年的古老病毒正在苏醒，这预示着潘多拉魔盒可能就埋藏在冰块之中。',
    tier: 3,
    category: BuildingCategory.CRYPTID,
    costs: { [ResourceType.INFO]: 8000, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.1 },
        unlockMessage: '解锁: 冻土钻探机'
    },
    icon: 'Thermometer',
    preRequisiteTech: 'carbon_dating'
  },
  {
    id: 'majestic_12', 
    name: 'MJ-12 文件',
    description: '深入挖掘关于 MJ-12 秘密委员会的档案，确信这个成立于 1947 年的组织专门负责回收和逆向工程坠毁的外星飞船。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.CLUE]: 500, [ResourceType.INFO]: 40000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.PANIC]: 0.2, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '解锁: MJ-12 影子服务器'
    },
    icon: 'FileText',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'black_knight_satellite', 
    name: '黑骑士卫星',
    description: '追踪那个在极地轨道上运行了 13000 年的不明卫星，相信特斯拉百年前接收到的神秘无线电信号正是源自于它。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.OPS]: 12000, [ResourceType.INFO]: 32000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.STORY]: 0.3 },
        unlockMessage: '解锁: 黑骑士卫星解码器'
    },
    icon: 'Satellite',
    preRequisiteTech: 'radio_theory'
  },
  {
    id: 'atmospheric_geoengineering', 
    name: '气溶胶注入',
    description: '坚信天空中飞机留下的持久尾迹并非水汽，而是政府为了控制气候或喷洒化学物质而秘密实施的大气工程计划。',
    tier: 3,
    category: BuildingCategory.SUBVERSION, // Root
    costs: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.FUNDS]: 25000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
        unlockMessage: '解锁: 凝尾喷洒机'
    },
    icon: 'CloudRain',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'fluoride_calcification', 
    name: '松果体钙化研究',
    description: '认为自来水中添加氟化物不仅是为了防蛀牙，其真实目的是导致人类松果体钙化，从而封闭我们通灵的“第三只眼”。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.BIOMASS]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
        unlockMessage: '解锁: 氟化物添加系统'
    },
    icon: 'EyeOff',
    preRequisiteTech: 'pseudoscience_marketing'
  },
  {
    id: 'asmr_psyops',
    name: 'ASMR 心理战',
    description: '研究如何将 ASMR 的低语和触发音武器化，通过诱导目标的极致放松状态，绕过心理防线植入潜意识指令。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.PLEASURE]: 100, [ResourceType.MIND_CONTROL]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.2 },
    },
    icon: 'Headphones',
    preRequisiteTech: 'social_engineering'
  },
  {
    id: 'crisis_acting', 
    name: '危机演员',
    description: '通过面部识别技术比对历次重大新闻事件中的受害者，发现同一张面孔反复出现，这证明一切可能都是预先写好的剧本。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.FUNDS]: 20000, [ResourceType.RUMORS]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.RUMORS]: 0.3 },
        unlockMessage: '谣言传播加速'
    },
    icon: 'Drama',
    preRequisiteTech: 'clickbait_tactics'
  },
  {
    id: 'social_engineering', 
    name: '社会工程学',
    description: '深刻理解无论安全系统多么严密，操作它的人永远是最薄弱的环节，利用人性的弱点进行诈骗往往比黑客攻击更有效。',
    tier: 3,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 12000, [ResourceType.CRED]: 100 }, 
    effects: {
        unlockMessage: '解锁: 谣言磨坊 / 网络水军基地'
    },
    icon: 'Users',
    preRequisiteTech: 'search_operators'
  },
  {
    id: 'targeted_individuals', 
    name: '受控个体',
    description: '确信自己成为了“受控个体”，那些街角闪烁的红车灯和路人奇怪的手势，都是庞大组织对你进行全天候监控的信号。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 35000, [ResourceType.CRED]: 250 }, 
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
    description: '学会了质疑一切被灌输的常识，开始认真思考鸟类是否是监控无人机，地球是否是一个被巨大冰墙包围的平面。',
    tier: 3,
    category: BuildingCategory.SUBVERSION, // Entry point for Subversion
    costs: { [ResourceType.INFO]: 5000 }, 
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
    description: '将文化信息视为像病毒一样具有自我复制和传播能力的生命体，这种模因理论足以让理查德·道金斯感到不寒而栗。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 25000, [ResourceType.CULTURE]: 250 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.2 },
        unlockMessage: '解锁: 模因战中心 / 叙事纺织机'
    },
    icon: 'Dna',
    preRequisiteTech: 'forum_culture'
  },
  {
    id: 'simp_economics',
    name: '舔狗经济学',
    description: '研究这种基于单向情感寄托的扭曲经济模式，无数人为了换取屏幕对面一句毫无感情的“谢谢大哥”而心甘情愿倾家荡产。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.PLEASURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2, [ResourceType.PLEASURE]: 0.1 },
        unlockMessage: '解锁: 洗澡水灌装线'
    },
    icon: 'Heart',
    preRequisiteTech: 'rule_34'
  },
  {
    id: 'character_worship',
    name: '怪谈崇拜',
    description: '将杰夫杀手等恐怖角色视为被误解的现代神祇，在硬盘的最深层文件夹里收集他们的图像，建立起赛博祭坛。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.LORE]: 200, [ResourceType.PLEASURE]: 50 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
        clickPowerMult: 0.15
    },
    icon: 'Heart',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'quantum_luck',
    name: '量子观测学',
    description: '尝试将量子力学的观察者效应应用到宏观世界，坚信只要不进行观测，事情的结果就会一直处于有利的叠加态。',
    tier: 3,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.OPS]: 5000, [ResourceType.CLUE]: 50 },
    effects: {
        unlockMessage: '解锁: 概率操纵器'
    },
    icon: 'Dices',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'hedonistic_imperative',
    name: '享乐主义命令',
    description: '奉行大卫·皮尔斯的哲学，认为生物工程技术的终极道德义务是重新设计生命蓝图，彻底消除所有形式的痛苦。',
    tier: 3,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 200, [ResourceType.BIOMASS]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.3 },
        unlockMessage: '解锁: 远程触觉反馈'
    },
    icon: 'Smile',
    preRequisiteTech: 'rule_34'
  },

  // --- NEW FLAVOR TECHS (Tier 3) ---
  {
    id: 'mixers_and_tumblers',
    name: '混币服务',
    description: '掌握了数字货币混币服务的运作机制，通过将资金打散并与他人混合，彻底切断资金来源与去向之间的关联。',
    tier: 3,
    category: BuildingCategory.CAPITAL, // Changed
    costs: { [ResourceType.FUNDS]: 15000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.15 },
    },
    icon: 'Shuffle',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'glitch_aesthetic',
    name: '故障美学',
    description: '不再将数据损坏视为错误，而是将其视为一种独特的艺术形式，学会在数字信号的崩坏和乱码中欣赏混乱之美。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.INFO]: 30000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.15 },
        unlockMessage: '解锁: 数据损坏艺术室'
    },
    icon: 'ZapOff',
    preRequisiteTech: 'dead_internet_theory'
  },
  {
    id: 'no_log_vpn',
    name: '无日志 VPN',
    description: '租用了位于公海废弃石油钻井平台上的服务器运行 VPN 服务，这里不属于任何司法管辖区，物理上确保无日志记录。',
    tier: 3,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.FUNDS]: 5000 },
    effects: {
        globalCostReduction: 0.05,
    },
    icon: 'Shield',
    preRequisiteTech: 'tor_network'
  },
  {
    id: 'aesthetics_police',
    name: '视觉风格纠察',
    description: '对互联网微小亚文化的美学标签有着近乎病态的执着，不能容忍将 Outrun 风格误称为 Vaporwave 的低级错误。',
    tier: 3,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CULTURE]: 200, [ResourceType.SPAM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.25, [ResourceType.SPAM]: 0.1 },
    },
    icon: 'Palette',
    preRequisiteTech: 'glitch_aesthetic'
  },
  {
    id: 'speculative_biology',
    name: '猜想演化',
    description: '基于生物学原理大胆推演未来，设想当人类被基因改造技术彻底扭曲后，地球会演化出怎样一种令人战栗的生态系统。',
    tier: 3,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.BIOMASS]: 500, [ResourceType.INFO]: 15000, [ResourceType.FOSSIL]: 50 }, 
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.2, [ResourceType.LORE]: 0.1 },
        unlockMessage: '解锁: 未来演化沙盘'
    },
    icon: 'Dna',
    preRequisiteTech: 'cryptozoology'
  },
  {
    id: 'foo_fighters',
    name: '不明飞行物档案',
    description: '重新调查二战期间飞行员频繁报告的神秘发光球体，证据显示它们既不属于纳粹也不属于盟军，来源至今成谜。',
    tier: 3,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.KNOWLEDGE]: 100, [ResourceType.LORE]: 200 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 0.1, [ResourceType.KNOWLEDGE]: 0.1 },
        unlockMessage: '天空之眼'
    },
    icon: 'Plane',
    preRequisiteTech: 'magic_bullet_theory'
  },
  {
    id: 'simulation_realism',
    name: '模拟真实主义',
    description: '为了在网络论坛上赢得关于坦克装甲厚度的口水战，不惜泄露真实的军事机密手册，只为证明游戏的模拟不够真实。',
    tier: 3,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.CODE]: 5000, [ResourceType.CRED]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.TECH_CAPITAL]: 0.2 },
        unlockMessage: '解锁: 游戏论坛泄密者'
    },
    icon: 'Gamepad2',
    preRequisiteTech: 'wiki_wars'
  }
];
