
import { BuildingCategory, ResourceType } from './types';

export const TICK_RATE = 1000;
export const AUTOSAVE_INTERVAL = 30000;

// Resource Configs
export const RESOURCE_INFO: Record<ResourceType, { name: string; color: string; icon: string }> = {
  [ResourceType.INFO]:         { name: '信息流', color: 'text-zinc-300', icon: 'FileText' }, 
  [ResourceType.FUNDS]:        { name: '资金', color: 'text-emerald-400', icon: 'CreditCard' }, 
  [ResourceType.FOLLOWERS]:    { name: '粉丝', color: 'text-pink-400', icon: 'Users' }, 
  [ResourceType.CRED]:         { name: '信誉', color: 'text-orange-500', icon: 'Award' }, 
  [ResourceType.CULTURE]:      { name: '文化资本', color: 'text-fuchsia-400', icon: 'Feather' }, 
  
  [ResourceType.CODE]:         { name: '代码', color: 'text-blue-400', icon: 'Code' }, 
  [ResourceType.TECH_CAPITAL]: { name: '技术资本', color: 'text-cyan-300', icon: 'TrendingUp' }, 
  [ResourceType.OPS]:          { name: '算力', color: 'text-amber-400', icon: 'Cpu' }, 
  [ResourceType.POWER]:        { name: '电力', color: 'text-yellow-400', icon: 'Zap' }, 
  [ResourceType.BIOMASS]:      { name: '生物质', color: 'text-lime-500', icon: 'Dna' }, 
  
  [ResourceType.CARDBOARD]:    { name: '废纸箱', color: 'text-amber-700', icon: 'Package' }, 
  [ResourceType.TINFOIL]:      { name: '锡纸', color: 'text-zinc-400', icon: 'Triangle' }, // Icon: Triangle (Hat shape)
  [ResourceType.SPAM]:         { name: '垃圾信息', color: 'text-pink-600', icon: 'Trash' }, 
  [ResourceType.FOSSIL]:       { name: '化石', color: 'text-stone-400', icon: 'Bone' }, 

  [ResourceType.LORE]:         { name: '民俗学', color: 'text-emerald-200', icon: 'Scroll' }, 
  [ResourceType.ANCIENT_WISDOM]: { name: '古代知识', color: 'text-amber-200', icon: 'Hourglass' }, 

  [ResourceType.STORY]:        { name: '故事', color: 'text-orange-300', icon: 'Book' }, 
  [ResourceType.RUMORS]:       { name: '恐慌掌控', color: 'text-red-400', icon: 'Megaphone' }, 
  [ResourceType.PANIC]:        { name: '恐慌', color: 'text-red-600', icon: 'Siren' }, 
  [ResourceType.MIND_CONTROL]: { name: '心智掌控', color: 'text-purple-600', icon: 'Brain' }, 
  [ResourceType.RED_PILL]:     { name: '红丸', color: 'text-red-600', icon: 'Pill' }, // Icon: Pill

  [ResourceType.PLEASURE]:     { name: '快感', color: 'text-pink-500', icon: 'Heart' }, 
  [ResourceType.PROBABILITY]:  { name: '正概率', color: 'text-yellow-200', icon: 'Dices' }, 
  [ResourceType.REALITY]:      { name: '现实稳定', color: 'text-white', icon: 'Activity' }, 
  [ResourceType.OXYGEN]:       { name: '氧气', color: 'text-cyan-200', icon: 'Wind' }, 

  [ResourceType.CLUE]:         { name: '线索', color: 'text-yellow-400', icon: 'Search' }, 
  [ResourceType.KNOWLEDGE]:    { name: '隐秘知识', color: 'text-violet-400', icon: 'BookOpen' }, 
  [ResourceType.TRUTH]:        { name: '真相', color: 'text-red-600', icon: 'Eye' }, 
  
  [ResourceType.DEJAVU]:       { name: '既视感', color: 'text-fuchsia-300', icon: 'Repeat' }, // NEW
};

// Category Metadata
export const CATEGORY_CONFIG: Record<BuildingCategory, { name: string; color: string; description: string }> = {
  [BuildingCategory.SURVIVAL]:        { name: '生存狂', color: 'text-amber-600 border-amber-600', description: '城市拾荒，基础设施与废土堡垒。' },
  [BuildingCategory.CAPITAL]:         { name: '加密资本', color: 'text-emerald-400 border-emerald-400', description: '区块链、NFT 与算法金融黑洞。' },
  [BuildingCategory.NETWORK]:         { name: '网络连接', color: 'text-cyan-500 border-cyan-500', description: '扩展连接带宽与网络节点。' },
  [BuildingCategory.INTERNET_CULTURE]:{ name: '互联网文化', color: 'text-lime-400 border-lime-400', description: '记录稍纵即逝的网络模因与梗文化。' }, 
  [BuildingCategory.ADULT]:           { name: '？？？', color: 'text-pink-500 border-pink-500', description: '深渊凝视。消费主义、多巴胺与边缘产业。' }, 
  [BuildingCategory.VERIFICATION]:    { name: '真相核查', color: 'text-teal-400 border-teal-400', description: '分析数据，构建叙事，控制恐慌。' }, 
  [BuildingCategory.TECHNOCRACY]:     { name: '边缘科技', color: 'text-blue-400 border-blue-400', description: '构建硬件设施与自动化脚本。' }, 
  [BuildingCategory.HISTORY]:         { name: '历史考古', color: 'text-amber-700 border-amber-700', description: '挖掘过去的时间线与失落遗物。' },
  [BuildingCategory.CRYPTID]:         { name: '异种生物', color: 'text-stone-400 border-stone-400', description: '挖掘化石，追踪隐匿生物，研究未知生命形式。' },
  [BuildingCategory.FOLKLORE]:        { name: '怪谈传说', color: 'text-rose-400 border-rose-400', description: '探索都市传说与异常地点。' },
  [BuildingCategory.COUNTER_CULTURE]: { name: '反文化', color: 'text-pink-400 border-pink-400', description: '传播模因与混乱艺术。' },
  [BuildingCategory.ARCHIVE]:         { name: '档案馆', color: 'text-slate-500 border-slate-500', description: '保存即将消失的历史数据。' }, 
  [BuildingCategory.SUBVERSION]:      { name: '阴谋论', color: 'text-zinc-400 border-zinc-400', description: '政治光谱的边缘与荒诞的现实。' }, 
  [BuildingCategory.ESOTERIC]:        { name: '神秘学', color: 'text-purple-500 border-purple-500', description: '超越唯物主义的认知。' },
  [BuildingCategory.TRUTH]:           { name: '真相', color: 'text-red-500 border-red-500', description: '接触世界的底层代码。最终的启示。' },
};

export const CATEGORY_COLORS = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([k, v]) => [k, v.color])
) as Record<BuildingCategory, string>;

export const CATEGORY_NAMES = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([k, v]) => [k, v.name])
) as Record<BuildingCategory, string>;
