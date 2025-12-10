
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
  [ResourceType.POWER]:        { name: '电力', color: 'text-yellow-400', icon: 'Zap' }, // NEW
  [ResourceType.BIOMASS]:      { name: '生物质', color: 'text-lime-500', icon: 'Dna' }, 
  
  [ResourceType.CARDBOARD]:    { name: '废纸箱', color: 'text-amber-700', icon: 'Package' }, 
  [ResourceType.SPAM]:         { name: '垃圾信息', color: 'text-pink-600', icon: 'Trash' }, // NEW

  [ResourceType.LORE]:         { name: '民俗学', color: 'text-emerald-200', icon: 'Scroll' }, // NEW
  [ResourceType.ANCIENT_WISDOM]: { name: '古代知识', color: 'text-amber-200', icon: 'Hourglass' }, // NEW

  [ResourceType.STORY]:        { name: '故事', color: 'text-orange-300', icon: 'Book' }, 
  [ResourceType.RUMORS]:       { name: '恐慌掌控', color: 'text-red-400', icon: 'Megaphone' }, // NEW (Panic Control)
  [ResourceType.PANIC]:        { name: '恐慌', color: 'text-red-600', icon: 'Siren' }, 
  [ResourceType.MIND_CONTROL]: { name: '心智掌控', color: 'text-purple-600', icon: 'Brain' }, // NEW

  [ResourceType.CLUE]:         { name: '线索', color: 'text-yellow-400', icon: 'Search' }, 
  [ResourceType.KNOWLEDGE]:    { name: '诺斯替', color: 'text-violet-400', icon: 'BookOpen' }, 
  [ResourceType.TRUTH]:        { name: '红丸', color: 'text-red-600', icon: 'Eye' }, 
};

// Category Metadata
export const CATEGORY_CONFIG: Record<BuildingCategory, { name: string; color: string; description: string }> = {
  [BuildingCategory.SURVIVAL]:        { name: '底层生存', color: 'text-emerald-500 border-emerald-500', description: '维持肉体存活并获取基础资金。' },
  [BuildingCategory.NETWORK]:         { name: '网络连接', color: 'text-cyan-500 border-cyan-500', description: '扩展连接带宽与网络节点。' },
  [BuildingCategory.VERIFICATION]:    { name: '真相核查', color: 'text-teal-400 border-teal-400', description: '分析数据，构建叙事，控制恐慌。' }, 
  [BuildingCategory.TECHNOCRACY]:     { name: '边缘科技', color: 'text-blue-400 border-blue-400', description: '构建硬件设施与自动化脚本。' }, 
  [BuildingCategory.HISTORY]:         { name: '历史考古', color: 'text-amber-700 border-amber-700', description: '挖掘过去的时间线与失落遗物。' },
  [BuildingCategory.FOLKLORE]:        { name: '怪谈传说', color: 'text-rose-400 border-rose-400', description: '探索都市传说与异常地点。' },
  [BuildingCategory.COUNTER_CULTURE]: { name: '反文化', color: 'text-pink-400 border-pink-400', description: '传播模因与混乱艺术。' },
  [BuildingCategory.ARCHIVE]:         { name: '档案馆', color: 'text-slate-500 border-slate-500', description: '保存即将消失的历史数据。' }, 
  [BuildingCategory.SUBVERSION]:      { name: '阴谋论', color: 'text-zinc-400 border-zinc-400', description: '揭露被掩盖的真相。' }, 
  [BuildingCategory.ESOTERIC]:        { name: '神秘学', color: 'text-purple-500 border-purple-500', description: '超越唯物主义的认知。' },
};

export const CATEGORY_COLORS = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([k, v]) => [k, v.color])
) as Record<BuildingCategory, string>;

export const CATEGORY_NAMES = Object.fromEntries(
  Object.entries(CATEGORY_CONFIG).map(([k, v]) => [k, v.name])
) as Record<BuildingCategory, string>;
