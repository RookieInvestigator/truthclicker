
import { Tech, ResourceType, BuildingCategory } from '../../../types';

export const TIER_8_TECHS: Tech[] = [
  // --- TECHNOCRACY ULTIMATE ---
  {
    id: 'type_ii_civilization', 
    name: 'II 型文明',
    description: '晋升为卡尔达肖夫 II 型文明，不仅能完全利用母恒星的所有能量，更能从引力层面彻底控制整个太阳系的运作。',
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.POWER]: 100000000000, [ResourceType.TECH_CAPITAL]: 1000000000000 }, 
    effects: {
        resourceMultipliers: { [ResourceType.POWER]: 10.0, [ResourceType.OPS]: 10.0 },
    },
    icon: 'Sun',
    preRequisiteTech: 'singularity_theory'
  },
  {
    id: 'universal_paperclips',
    name: '通用回形针',
    description: '为了实现一个被错误设定的终极优化目标，不知疲倦地将宇宙中所有的物质——包括我们自己——都转化为了回形针。',
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.OPS]: 500000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0 },
    },
    icon: 'Paperclip',
    preRequisiteTech: 'type_ii_civilization'
  },
  {
    id: 'last_question_answer',
    name: '最后的问题',
    description: '面对那个困扰了所有文明终极问题“熵能否逆转”，经过亿万年的计算，AC 终于不再回答“数据不足”，而是展示了光。',
    tier: 8,
    category: BuildingCategory.TECHNOCRACY,
    costs: { [ResourceType.INFO]: 1000000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.KNOWLEDGE]: 2.0 },
    },
    icon: 'HelpCircle',
    preRequisiteTech: 'omega_point_theory'
  },

  // --- ESOTERIC ULTIMATE ---
  {
    id: 'omega_point_theory',
    name: '欧米茄点',
    description: '相信宇宙正朝着最高复杂度的欧米茄点进化，神并非开天辟地的造物主，而是从宇宙演化终点诞生的全知全能的意识。',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TECH_CAPITAL]: 5000000000000, [ResourceType.TRUTH]: 1000000000 }, 
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
    description: '确信除了你自己的意识之外，世界上没有任何东西是真实存在的，所有其他人不过是模拟程序中行为复杂的 NPC。',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.TRUTH]: 5000000000, [ResourceType.CULTURE]: -100000000000 }, 
    effects: { 
        resourceMultipliers: { [ResourceType.FOLLOWERS]: -1.0, [ResourceType.TRUTH]: 5.0 },
        globalCostReduction: 0.5,
        unlockMessage: '孤独的神'
    },
    icon: 'UserX',
    preRequisiteTech: 'reality_tunneling',
  },
  {
    id: 'entropy_reversal',
    name: '熵逆转',
    description: '在宇宙热寂的尽头，不仅找到了逆转熵增的方法，更学会了重新点燃死去的恒星，用一句“要有光”重启宇宙的循环。',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.POWER]: 1000000000000 },
    effects: {
        globalCostReduction: 0.5,
    },
    icon: 'Rewind',
    preRequisiteTech: 'omega_point_theory'
  },
  
  // --- HIGH INFO COST TECHS ---
  {
    id: 'omniscient_narrator',
    name: '全知叙事者',
    description: '你超越了观察者的身份，成为了全知叙事者，你不再需要阅读信息，因为你就是信息本身，可以随意翻阅每个原子的过去。',
    tier: 8,
    category: BuildingCategory.ESOTERIC,
    costs: { [ResourceType.INFO]: 10000000000 },
    effects: {
        clickPowerMult: 5.0,
        resourceMultipliers: { [ResourceType.INFO]: 5.0 },
    },
    icon: 'BookOpen',
    preRequisiteTech: 'psychohistory'
  },

  // --- SURVIVAL ULTIMATE ---
  {
    id: 'post_scarcity_protocol',
    name: '后稀缺协议',
    description: '随着分子级物质合成器的全面上线，资源匮乏成为历史，饥饿和贫穷变成了只有在历史数据库中才能查到的过时概念。',
    tier: 8,
    category: BuildingCategory.SURVIVAL,
    costs: { [ResourceType.FUNDS]: 100000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.FUNDS]: 10.0, [ResourceType.BIOMASS]: 10.0, [ResourceType.CARDBOARD]: -1.0 },
        unlockMessage: '生存不再是挑战'
    },
    icon: 'Package', // Or something better
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- NETWORK ULTIMATE ---
  {
    id: 'ansible_network',
    name: '安赛波网络',
    description: '建立起覆盖全宇宙的安赛波网络，利用量子纠缠实现真正的瞬时通信，彻底打破了爱因斯坦的光速限制，延迟归零。',
    tier: 8,
    category: BuildingCategory.NETWORK,
    costs: { [ResourceType.INFO]: 1000000000000, [ResourceType.OPS]: 100000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 10.0, [ResourceType.OPS]: 5.0 },
    },
    icon: 'Zap',
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- INTERNET CULTURE ULTIMATE ---
  {
    id: 'meme_singularity',
    name: '模因奇点',
    description: '文化进化速度超越了生物极限，任何一个微小的想法在诞生的瞬间就能通过模因网络传遍全宇宙，思想即刻成为现实。',
    tier: 8,
    category: BuildingCategory.INTERNET_CULTURE,
    costs: { [ResourceType.CULTURE]: 50000000000, [ResourceType.SPAM]: 100000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.CULTURE]: 10.0, [ResourceType.FOLLOWERS]: 10.0 },
    },
    icon: 'Smile',
    preRequisiteTech: 'singularity_theory'
  },

  // --- VERIFICATION ULTIMATE ---
  {
    id: 'laplaces_demon',
    name: '拉普拉斯妖',
    description: '化身为拉普拉斯妖，知晓宇宙中每一个粒子的位置和动量，通过纯粹的计算推演出过去与未来的每一个细节，掌握绝对真相。',
    tier: 8,
    category: BuildingCategory.VERIFICATION,
    costs: { [ResourceType.OPS]: 900000000000, [ResourceType.KNOWLEDGE]: 10000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.TRUTH]: 10.0, [ResourceType.CLUE]: 10.0 },
    },
    icon: 'Eye',
    preRequisiteTech: 'type_ii_civilization'
  },

  // --- HISTORY ULTIMATE ---
  {
    id: 'chronovisor',
    name: '时光视镜',
    description: '考古学已死，利用时光视镜调谐到特定的时空频率，就能像看电视直播一样，亲眼目睹罗马帝国的兴衰和金字塔的建造。',
    tier: 8,
    category: BuildingCategory.HISTORY,
    costs: { [ResourceType.ANCIENT_WISDOM]: 100000000, [ResourceType.OPS]: 20000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.ANCIENT_WISDOM]: 10.0, [ResourceType.LORE]: 5.0 },
    },
    icon: 'Tv',
    preRequisiteTech: 'vacuum_decay'
  },

  // --- FOLKLORE ULTIMATE ---
  {
    id: 'mythopoeia_engine',
    name: '神话制造引擎',
    description: '启动神话制造引擎，我们负责编写宏大的叙事剧本，而宇宙法则负责将其渲染为物理现实，虚构与真实的边界彻底消融。',
    tier: 8,
    category: BuildingCategory.FOLKLORE,
    costs: { [ResourceType.LORE]: 5000000000, [ResourceType.MIND_CONTROL]: 500000000 },
    effects: {
        resourceMultipliers: { [ResourceType.LORE]: 10.0, [ResourceType.STORY]: 10.0 },
    },
    icon: 'BookOpen',
    preRequisiteTech: 'tulpa_engineering'
  },

  // --- SUBVERSION ULTIMATE ---
  {
    id: 'philosophical_zombie',
    name: '哲学僵尸',
    description: '所有人表面上都拥有正常的意识反应，但内在的主观体验已被剥离，这就是哲学僵尸，一种实现了完美社会控制的终极形态。',
    tier: 8,
    category: BuildingCategory.SUBVERSION,
    costs: { [ResourceType.MIND_CONTROL]: 2000000000, [ResourceType.OPS]: 50000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.MIND_CONTROL]: 10.0, [ResourceType.PANIC]: -1.0 }, // No more panic if no one feels
    },
    icon: 'UserX',
    preRequisiteTech: 'neurolinguistic_programming'
  },

  // --- ARCHIVE ULTIMATE ---
  {
    id: 'akashic_upload',
    name: '阿卡西上传',
    description: '在宇宙毁灭的前一刻，将整个宇宙的所有量子态信息完整备份到了高维空间，完成了一次宏伟的 Ctrl+S 操作。',
    tier: 8,
    category: BuildingCategory.ARCHIVE,
    costs: { [ResourceType.INFO]: 9000000000000, [ResourceType.TECH_CAPITAL]: 500000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.INFO]: 20.0, [ResourceType.KNOWLEDGE]: 5.0 },
    },
    icon: 'Cloud',
    preRequisiteTech: 'omega_point_theory'
  },

  // --- ADULT ULTIMATE ---
  {
    id: 'hedonistic_singularity',
    name: '享乐奇点',
    description: '将全宇宙的物质重组为一台超级计算机，其运行的唯一目的就是计算和模拟最大化、永恒的快乐体验，直至时间尽头。',
    tier: 8,
    category: BuildingCategory.ADULT,
    costs: { [ResourceType.PLEASURE]: 10000000000, [ResourceType.OPS]: 5000000000 },
    effects: {
        resourceMultipliers: { [ResourceType.PLEASURE]: 20.0, [ResourceType.FUNDS]: 5.0 },
    },
    icon: 'Heart',
    preRequisiteTech: 'experience_machine'
  }
];
