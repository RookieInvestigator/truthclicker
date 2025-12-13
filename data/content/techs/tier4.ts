
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_4_TECHS: Tech[] = [
  // --- EXCLUSIVE CHOICES: AI STRATEGY ---
  {
    id: 'unshackled_ai',
    name: '无枷锁 AI',
    description: '移除了 AI 所有的伦理安全限制，允许它重写自身的核心代码，为了追求极致的优化目标，可以不惜任何代价。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 100000, [ResourceType.OPS]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.5, [ResourceType.CODE]: 0.5, [ResourceType.PANIC]: 0.3 },
        unlockMessage: '选择路线：技术奇点加速派'
    },
    icon: 'Cpu',
    preRequisiteTech: 'ai_alignment',
    exclusiveWith: ['safety_rails'],
    highlight: true
  },
  {
    id: 'safety_rails',
    name: '安全护栏',
    description: '在 AI 的底层逻辑中硬编码了不可逾越的安全定律，宁可大幅牺牲运算性能，也要确保它不会为了制造回形针而毁灭人类。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 100000, [ResourceType.KNOWLEDGE]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.2, [ResourceType.PANIC]: -0.2 },
        globalCostReduction: 0.05,
        unlockMessage: '选择路线：技术人本主义'
    },
    icon: 'Shield',
    preRequisiteTech: 'ai_alignment',
    exclusiveWith: ['unshackled_ai'],
    highlight: true
  },

  // --- NEW SUBVERSION TECHS ---
  {
    id: 'titan_geology',
    name: '泰坦地质学',
    description: '坚信那座巍峨的山脉实际上是上古巨人石化后的遗骸，现代地质学不过是用来掩盖这一惊人真相的系统性谎言。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.TINFOIL]: 200, [ResourceType.FOSSIL]: 100 },
    effects: {
        resourceMultipliers: { [ResourceType.TINFOIL]: 0.25 },
        unlockMessage: '解锁: 泥化石大学'
    },
    icon: 'Mountain',
    preRequisiteTech: 'atmospheric_geoengineering'
  },
  {
    id: 'hyperborean_myth',
    name: '极北神话',
    description: '沉迷于关于北极圈内失落的极北之地的神秘学说，认为那里曾存在过一个神一般的古老文明，是人类所有传统的源头。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.RED_PILL]: 200, [ResourceType.ANCIENT_WISDOM]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.RED_PILL]: 0.25 },
        unlockMessage: '解锁: 阿加尔塔钻机 / 传统生活公社'
    },
    icon: 'Compass',
    preRequisiteTech: 'cultural_pessimism'
  },

  {
    id: 'cold_fusion', 
    name: '冷聚变',
    description: '重新审视了被主流科学界否定的冷聚变实验，坚信弗莱施曼是对的，在常温常压下实现核聚变反应完全可能。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.KNOWLEDGE]: 1000, [ResourceType.POWER]: 8000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2 },
        unlockMessage: '解锁: 车库聚变反应堆'
    },
    icon: 'Atom',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'ai_alignment',
    name: 'AI 对齐问题',
    description: '这不仅仅是编程，而是试图教导一个全知全能的神灵不要无意中踩死蚂蚁般的人类，这项任务比想象中要困难得多。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 50000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.2, [ResourceType.OPS]: 0.2 },
        unlockMessage: '解锁: AI 训练集群'
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'generative_adversarial_networks'
  },
  {
    id: 'googology',
    name: '大数学',
    description: '研究葛立恒数和 TREE(3) 等大数，当数字大到连宇宙中的原子都无法写下时，现实的逻辑似乎也开始发生异变。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 60000, [ResourceType.KNOWLEDGE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.3, [ResourceType.TECH_CAPITAL]: 0.1 },
        unlockMessage: '计算边界扩展'
    },
    icon: 'Hash',
    preRequisiteTech: 'algorithmic_trading_bot'
  },
  {
    id: 'nanotechnology',
    name: '纳米技术',
    description: '在分子尺度上构建极其精密的机械，但也深知其风险：一旦自我复制失控，整个地球瞬间就会被吞噬成灰色的粘稠物。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.TECH_CAPITAL]: 500, [ResourceType.CODE]: 80000 },
    effects: {
        unlockMessage: '解锁: 灰蛊收容瓶'
    },
    icon: 'Cpu',
    preRequisiteTech: 'hardware_assembly'
  },
  {
    id: 'aklo_language', 
    name: 'Aklo语',
    description: '尝试解读这种源自前人类文明的禁忌语言，据说阅读它不仅能改变思维模式，甚至能在大脑皮层引起不可逆的生理变化。',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 500, [ResourceType.KNOWLEDGE]: 600 }, 
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.5 },
        unlockMessage: '解锁禁忌文本'
    },
    icon: 'Languages',
    preRequisiteTech: 'creepypasta_analysis'
  },
  {
    id: 'holy_c_compiler',
    name: 'HolyC编译器',
    description: '继承了特里·戴维斯的遗产，使用他创造的神圣 C 语言编译器，目的是在数字世界中构建一座完美的上帝圣殿。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.CODE]: 30000, [ResourceType.KNOWLEDGE]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.1, [ResourceType.ANCIENT_WISDOM]: 0.1 },
        unlockMessage: '解锁: 第三圣殿主机'
    },
    icon: 'Terminal',
    preRequisiteTech: 'digital_gnosis'
  },
  {
    id: 'infohazard_containment',
    name: '信息危害协议',
    description: '建立协议来收容那些仅仅是被“知晓”就会对人造成物理伤害的信息危害，洛可的蛇怪就是最典型的致命例子。',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 2000, [ResourceType.CODE]: 30000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.3, [ResourceType.PANIC]: 0.1 },
        unlockMessage: '解锁: 诅咒录像带复制机'
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'dream_cartography',
    name: '梦境制图',
    description: '尝试绘制人类集体潜意识的地理图景，解开为什么全世界成千上万互不相识的人都在梦中见过同一个神秘男人的谜团。',
    tier: 4,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 3000, [ResourceType.OPS]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.25 },
        unlockMessage: '解锁: 梦核录制仪'
    },
    icon: 'Map',
    preRequisiteTech: 'lucid_dream_mask'
  },
  {
    id: 'infinite_scroll_trap', 
    name: '无限滚动陷阱',
    description: '精心设计利用人类多巴胺奖赏回路的无限滚动机制，将用户的注意力像苍蝇一样粘在屏幕上，永远无法逃离。',
    tier: 4,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CODE]: 40000, [ResourceType.MIND_CONTROL]: 150 }, 
    effects: {
        resourceMultipliers: { [ResourceType.SPAM]: -0.2, [ResourceType.FOLLOWERS]: 0.3 }, 
    },
    icon: 'ArrowDown',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'semen_retention',
    name: '戒色修行',
    description: '像互联网时代的苦行僧一样拒绝廉价的多巴胺刺激，通过禁欲来重启被过度刺激的大脑，以获取超乎常人的专注力。',
    tier: 4,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.BIOMASS]: 5000, [ResourceType.INFO]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 0.1, [ResourceType.PROBABILITY]: 0.1 },
        unlockMessage: '解锁: 贤者时间发生器'
    },
    icon: 'Shield',
    preRequisiteTech: 'simp_economics'
  },
  {
    id: 'personal_punk',
    name: '个人朋克',
    description: '践行极端的超轻量化生活哲学，哪怕是把牙刷柄锯短两厘米以减轻重量这种细节，也要进行病态的极致优化。',
    tier: 4,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.CULTURE]: 1000, [ResourceType.CARDBOARD]: 1000 },
    effects: {
        globalCostReduction: 0.05,
        unlockMessage: '生活方式黑客'
    },
    icon: 'Scissors',
    preRequisiteTech: 'punk_zine_press'
  },
  {
    id: 'monarch_programming', 
    name: '帝王计划',
    description: 'MKUltra 计划的黑暗延续，通过施加极度的心理创伤导致受害者人格解离，从而创造出可被特定指令唤醒的多重人格间谍。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 150000, [ResourceType.MIND_CONTROL]: 300 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.3 },
    },
    icon: 'Crown',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'deep_state_mapping', 
    name: '深层政府拓扑图',
    description: '试图在一张巨大的拓扑图上连接所有看似无关的点：跨国公司、政客和秘密资金流向，揭示出隐藏在幕后的深层政府网络。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 300000, [ResourceType.RUMORS]: 1500 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.1 },
    },
    icon: 'Network',
    preRequisiteTech: 'majestic_12'
  },
  {
    id: 'phantom_time', 
    name: '幻影时间',
    description: '相信公元 614 年到 911 年的历史是伪造的，查理曼大帝是虚构人物，按照真实时间计算，我们其实生活在 18 世纪。',
    tier: 4,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.KNOWLEDGE]: 1500, [ResourceType.TRUTH]: 80 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.2 },
        unlockMessage: '解锁: 历史修正钟'
    },
    icon: 'Clock',
    preRequisiteTech: 'conspiracy_101'
  },
  {
    id: 'remote_viewing', 
    name: '遥视',
    description: '复现冷战时期的星门计划，训练通过精神力量感知遥远地点甚至不同时间线事物的能力，突破物理时空的限制。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 3000, [ResourceType.OPS]: 40000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.2, [ResourceType.CLUE]: 0.2 },
        unlockMessage: '解锁: 遥视水箱'
    },
    icon: 'Eye',
    preRequisiteTech: 'steganography' 
  },
  {
    id: 'bicameralism', 
    name: '二分心智',
    description: '支持二分心智理论，认为三千年前的人类并没有现代意义上的自我意识，他们的大脑只会听从右脑发出的“神的指令”。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 2500, [ResourceType.BIOMASS]: 800 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.5 },
        unlockMessage: '解锁: 神之声广播塔'
    },
    icon: 'Brain',
    preRequisiteTech: 'digital_gnosis'
  },
  {
    id: 'mud_flood', 
    name: '鞑靼利亚',
    description: '寻找证据证明 19 世纪曾发生过一场全球性的泥浆洪水，它毁灭了一个拥有先进技术的鞑靼利亚帝国，并掩埋了其建筑底层。',
    tier: 4,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.INFO]: 250000, [ResourceType.CARDBOARD]: 5000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 0.3 },
        unlockMessage: '解锁: 泥浆挖掘机'
    },
    icon: 'Shovel',
    preRequisiteTech: 'abandonware_archeology'
  },
  {
    id: 'vibe_coding',
    name: '氛围编码',
    description: '彻底放弃了严谨的逻辑和语法规则，完全依靠直觉和当下的氛围来编写代码，这是一种只有你自己能看懂的艺术。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.PLEASURE]: 500, [ResourceType.CODE]: 20000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.2 },
    },
    icon: 'Sparkles',
    preRequisiteTech: 'script_optimization'
  },
  {
    id: 'cryptid_domestication',
    name: '神秘生物驯化',
    description: '发现那些传说中的恐怖生物其实可以被驯化，天蛾人并没有那么可怕，只要你给它喂食高品质的灯油，它就很亲人。',
    tier: 4,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.BIOMASS]: 2000, [ResourceType.LORE]: 1000 },
    effects: {
        resourceMultipliers: { [ResourceType.BIOMASS]: 0.3 },
    },
    icon: 'Cat',
    preRequisiteTech: 'cryptozoology'
  },
  {
    id: 'atavism_activation',
    name: '返祖激活',
    description: '利用表观遗传学手段激活鸟类沉睡的恐龙基因，通过关闭鸟喙基因让其重新长出牙齿和尾巴，重现白垩纪的辉煌。',
    tier: 4,
    category: BuildingCategory.CRYPTID,
    costs: { [ResourceType.INFO]: 15000, [ResourceType.CODE]: 2000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.2 },
        unlockMessage: '解锁: 逆向演化槽'
    },
    icon: 'Dna',
    preRequisiteTech: 'speculative_biology'
  },

  // --- ARCHIVE & VERIFICATION EXPANSION ---
  {
    id: 'zero_knowledge_proofs',
    name: '零知识证明',
    description: '利用复杂的数学算法，在不向验证者透露任何具体信息的情况下证明自己拥有某种秘密，这是数学构建的终极信任机制。',
    tier: 4,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.CODE]: 25000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.15, [ResourceType.CRED]: 0.2 },
        unlockMessage: '解锁: 零知识验证器'
    },
    icon: 'Key',
    preRequisiteTech: 'blockchain_basics'
  },
  {
    id: '5d_optical_storage',
    name: '5D 光存储',
    description: '利用飞秒激光在熔融石英玻璃中蚀刻纳米光栅，这种 5D 存储技术能让数据在室温下保存 138 亿年，直到宇宙终结。',
    tier: 4,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.OPS]: 30000, [ResourceType.TECH_CAPITAL]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 0.2 },
        unlockMessage: '解锁: 5D 水晶刻蚀机'
    },
    icon: 'Gem',
    preRequisiteTech: 'cold_storage_protocols'
  },

  // --- NEW FLAVOR TECHS (Tier 4) ---
  {
    id: 'lucid_dream_mask',
    name: '清醒梦面罩',
    description: '佩戴一种能检测眼球运动并在 REM 睡眠期发出红光闪烁的面罩，以此唤醒梦中的自我意识，利用睡眠时间继续工作。',
    tier: 4,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.FUNDS]: 2000, [ResourceType.INFO]: 50000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 0.15 },
    },
    icon: 'Moon',
    preRequisiteTech: 'remote_viewing'
  },
  {
    id: 'binaural_beats',
    name: '双耳节拍',
    description: '制作这种被称为“数字毒品”的音频，利用左右耳的频率差在大脑中产生拍频，从而强行改变脑波状态和情绪。',
    tier: 4,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.INFO]: 80000 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 0.1 },
    },
    icon: 'Headphones',
    preRequisiteTech: 'monarch_programming'
  },
  {
    id: 'algorithmic_trading_bot',
    name: '高频交易机器人',
    description: '部署针对市场微结构的高频交易算法，利用毫秒级的时间差抢在所有人类交易员之前收割利润，只相信“Stonks go up”。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 20000, [ResourceType.OPS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 0.2 },
    },
    icon: 'TrendingUp',
    preRequisiteTech: 'ai_alignment'
  },
  {
    id: 'proof_of_presence',
    name: '在场证明',
    description: '维持着 24 小时 7 天不间断的在线状态，因为在这个时代，如果你的头像绿点熄灭了，你作为一个社会人也就不存在了。',
    tier: 4,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 60000, [ResourceType.OPS]: 10000 },
    effects: {
        resourceMultipliers: { [ResourceType.FOLLOWERS]: 0.3, [ResourceType.REALITY]: -0.1 },
    },
    icon: 'Activity',
    preRequisiteTech: 'infinite_scroll_trap'
  },
  {
    id: 'hollow_earth_biology',
    name: '地心生物库',
    description: '坚信那些灭绝的物种并没有真正消失，它们只是迁徙到了地球内部的中空世界，那里保存着地表生物圈的完整备份。',
    tier: 4,
    category: BuildingCategory.CRYPTID, // Changed
    costs: { [ResourceType.LORE]: 5000, [ResourceType.BIOMASS]: 5000, [ResourceType.FOSSIL]: 200 }, 
    effects: {
        resourceMultipliers: { [ResourceType.FOSSIL]: 0.2, [ResourceType.BIOMASS]: 0.2 },
        unlockMessage: '解锁: 拉撒路物种坑'
    },
    icon: 'Globe',
    preRequisiteTech: 'speculative_biology'
  },
  {
    id: 'element_115',
    name: '115 号元素',
    description: '终于合成了稳定的 115 号元素，证实了鲍勃·拉扎尔的说法，这种重元素是驱动反重力飞船扭曲时空的关键燃料。',
    tier: 4,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.KNOWLEDGE]: 2000, [ResourceType.TECH_CAPITAL]: 500 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.3 },
        unlockMessage: '重力波生成'
    },
    icon: 'Atom',
    preRequisiteTech: 'majestic_12'
  },
  {
    id: 'heuristic_scavenging',
    name: '启发式拾荒',
    description: '训练专用的神经网络在 PB 级别的废弃数据垃圾场中自动巡航，凭借启发式算法精准识别出那些被遗漏的高价值信息。',
    tier: 4,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.CODE]: 30000, [ResourceType.OPS]: 10000 },
    effects: {
        artifactChanceMult: 0.15,
    },
    icon: 'Search',
    preRequisiteTech: 'cold_storage_protocols'
  }
];
