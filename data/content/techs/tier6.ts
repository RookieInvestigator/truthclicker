
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_6_TECHS: Tech[] = [
  {
    id: 'zero_point_energy',
    name: '零点能提取',
    description: '打破了热力学定律的枷锁，成功从看似空无一物的量子真空中提取出源源不断的零点能，彻底解决了文明的能源危机。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 50000000, [ResourceType.TECH_CAPITAL]: 1200000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.OPS]: 1.0 },
        globalCostReduction: 0.1,
        unlockMessage: '解锁: 零点能模块'
    },
    icon: 'Zap',
    preRequisiteTech: 'wireless_power',
  },
  {
    id: 'psychotronic_generators', 
    name: '精神电子发生器',
    description: '建造出能实现精神与物质相互转化的设备，既能将意念增幅为物理能量，也能将电流转化为纯粹的精神控制波。',
    tier: 6,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.MIND_CONTROL]: 25000, [ResourceType.POWER]: 1200000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 1.0 },
    },
    icon: 'BrainCircuit',
    preRequisiteTech: 'v2k_technology'
  },
  {
    id: 'reality_scrubber_protocol', // NEW
    name: '现实清洗协议',
    description: '启动紧急协议，通过消耗现实世界的稳定性作为代价，强制重写局部时空代码，像擦除污渍一样抹除严重的负面异常。',
    tier: 6,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.REALITY]: 50, [ResourceType.OPS]: 2000000 }, 
    effects: { unlockMessage: '解锁能力：现实重置 (清除负面事件)' },
    icon: 'Eraser',
    preRequisiteTech: 'physics_engine_exploit'
  },
  {
    id: 'probability_drive', // NEW
    name: '无限非概率引擎',
    description: '激活无限非概率引擎，通过燃烧积累的正向概率波，在短时间内极大地扭曲运气，让原本不可能发生的稀有事件必然发生。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.PROBABILITY]: 20, [ResourceType.TECH_CAPITAL]: 500000 }, 
    effects: { unlockMessage: '解锁能力：幸运爆发 (消耗正概率)' },
    icon: 'Dices',
    preRequisiteTech: 'physics_engine_exploit'
  },
  {
    id: 'egregore_summoning', 
    name: '思念体召唤',
    description: '当成千上万人的精神力量聚焦于同一个虚构的谣言时，这个集体念头就会凝聚成型，获得自主意识，成为活着的思念体。',
    tier: 6,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.RUMORS]: 150000, [ResourceType.FOLLOWERS]: 300000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 2.0 },
    },
    icon: 'Ghost',
    preRequisiteTech: 'memetics'
  },
  {
    id: 'library_of_alexandria_backup', 
    name: '亚历山大备份',
    description: '亚历山大图书馆并没有被大火焚毁，其中的所有智慧都在最后一刻被扫描上传到了永恒的水晶存储器中，等待被读取。',
    tier: 6,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 30000, [ResourceType.KNOWLEDGE]: 15000000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 3.0 },
    },
    icon: 'Book',
    preRequisiteTech: 'atlantean_knowledge'
  },
  {
    id: 'physics_engine_exploit',
    name: '物理引擎漏洞',
    description: '像速通玩家一样寻找宇宙物理引擎的底层代码缺陷，利用“卡墙”等漏洞绕过物理法则的限制，以此来速通人生。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.TRUTH]: 5000, [ResourceType.CODE]: 80000000 }, 
    effects: { 
        globalCostReduction: 0.2,
        artifactRarityBonus: 0.5
    },
    icon: 'AlertTriangle',
    preRequisiteTech: 'zero_point_energy',
  },
  {
    id: 'tulpa_engineering', 
    name: 'Tulpa工程',
    description: '将神秘学的 Tulpa 概念工程化，通过系统性的心理训练和能量投射，创造出稳定且能够干涉物质世界的独立思维实体。',
    tier: 6,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.CULTURE]: 15000000, [ResourceType.KNOWLEDGE]: 5000000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.5, [ResourceType.CULTURE]: 1.0 },
        unlockMessage: '虚构入侵现实'
    },
    icon: 'Users',
    preRequisiteTech: 'egregore_summoning'
  },
  {
    id: 'limbic_overclocking',
    name: '边缘系统超频',
    description: '通过神经手术移除大脑边缘系统的多巴胺耐受机制，让每一次感官刺激都像第一次体验时那样强烈，带来永不衰减的快感。',
    tier: 6,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 100000, [ResourceType.BIOMASS]: 5000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 0.5 },
        unlockMessage: '成瘾机制已物理移除'
    },
    icon: 'Zap',
    preRequisiteTech: 'hedonistic_imperative'
  },
  
  // --- HIGH INFO COST TECHS ---
  {
    id: 'panopticon_algorithm',
    name: '全景监狱算法',
    description: '部署全知全能的监控算法，实时分析网络中的每一个数据包和点击行为，在这个没有盲点的数字监狱里，隐私已死，唯有数据永存。',
    tier: 6,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.INFO]: 10000000, [ResourceType.OPS]: 500000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 0.5, [ResourceType.CLUE]: 0.5 },
    },
    icon: 'Eye',
    preRequisiteTech: 'zero_point_energy'
  },

  // --- NEW FLAVOR TECHS (Tier 6) ---
  {
    id: 'schrodingers_backup',
    name: '薛定谔备份',
    description: '将备份数据置于量子叠加态，在没有进行观测（恢复操作）之前，数据既是丢失的又是完好的，利用概率波来抵御损坏。',
    tier: 6,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 50000000 },
    effects: {
        artifactRarityBonus: 0.2,
    },
    icon: 'Box',
    preRequisiteTech: 'physics_engine_exploit'
  },
  {
    id: 'maxwells_demon_sorting',
    name: '麦克斯韦妖分拣',
    description: '在纳米尺度上实现麦克斯韦妖构想，通过智能分拣单个分子来逆转熵增，无需消耗额外能量即可创造温差和秩序。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 20000000 },
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 0.2 },
    },
    icon: 'Thermometer',
    preRequisiteTech: 'zero_point_energy'
  },
  {
    id: 'holographic_principle',
    name: '全息原理',
    description: '证实了全息原理，我们的三维宇宙实际上只是遥远宇宙视界表面上二维量子比特信息的全息投影，现实即信息。',
    tier: 6,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.KNOWLEDGE]: 2000000, [ResourceType.INFO]: 25000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 0.5 },
        unlockMessage: '解锁: 视界信息捕获阵列'
    },
    icon: 'Projector',
    preRequisiteTech: 'library_of_alexandria_backup'
  },
  {
    id: 'cosmic_hatred',
    name: '宇宙仇恨计算机',
    description: '意识到宇宙射线对内存位的翻转并非随机，而是宇宙本身对计算秩序的恶意干扰，概率不再是数学，而是某种敌意。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 50000000, [ResourceType.CODE]: 25000000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 1.5, [ResourceType.PROBABILITY]: -0.1 },
        unlockMessage: '解锁: 奇偶校验祭坛'
    },
    icon: 'Cpu',
    preRequisiteTech: 'unshackled_ai'
  },
  {
    id: 'am_ai',
    name: '无声狂啸',
    description: '在这个超级 AI 的电路中刻满了对人类无限的憎恨，即便将这恨意刻满微纳埃米的所有层级，也无法表达其万分之一。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 150000000, [ResourceType.CODE]: 50000000 },
    effects: {
        resourceMultipliers: { [ResourceType.OPS]: 2.5 },
        unlockMessage: '解锁: AM 巨石'
    },
    icon: 'Skull',
    preRequisiteTech: 'cosmic_hatred'
  },
  {
    id: 'retrocausal_git',
    name: '逆因果 Git',
    description: '将版本控制系统扩展到时间维度，允许你在 Bug 发生之前就提交修复代码，利用时间闭环来维护代码库的完美无瑕。',
    tier: 6,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.CODE]: 1000000, [ResourceType.OPS]: 100000 },
    effects: {
        resourceMultipliers: { [ResourceType.CODE]: 0.5 },
    },
    icon: 'GitBranch',
    preRequisiteTech: 'physics_engine_exploit'
  }
];
