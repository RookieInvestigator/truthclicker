
export enum ResourceType {
  INFO = 'INFO',           // 基础资源：信息流
  FUNDS = 'FUNDS',         // 经济资源：资金
  FOLLOWERS = 'FOLLOWERS', // 影响力资源：粉丝/信徒
  CRED = 'CRED',           // 声望资源：信誉/黑客声望
  CULTURE = 'CULTURE',     // 文化资源：文化资本/高维叙事
  
  CODE = 'CODE',           // 技术资源：代码
  TECH_CAPITAL = 'TECH_CAPITAL', // 技术资本
  OPS = 'OPS',             // 硬件资源：算力
  BIOMASS = 'BIOMASS',     // 生物资源：生物质/湿件
  POWER = 'POWER',         // 新增：电力 (维护资源)

  CARDBOARD = 'CARDBOARD', // 废纸箱
  SPAM = 'SPAM',           // 新增：垃圾信息 (副产物)
  
  LORE = 'LORE',           // 新增：民俗学 (知识)
  ANCIENT_WISDOM = 'ANCIENT_WISDOM', // 新增：古代知识
  
  STORY = 'STORY',         // 故事
  RUMORS = 'RUMORS',       // 新增：谣言/恐慌掌控
  PANIC = 'PANIC',         // 恐慌 (高风险资源)
  MIND_CONTROL = 'MIND_CONTROL', // 新增：心智掌控

  PLEASURE = 'PLEASURE',   // 新增：快感/多巴胺
  PROBABILITY = 'PROBABILITY', // 新增：正概率
  REALITY = 'REALITY',     // 新增：现实稳定指数

  CLUE = 'CLUE',           // 转化资源 I：线索
  KNOWLEDGE = 'KNOWLEDGE', // 转化资源 II：隐秘知识
  TRUTH = 'TRUTH',         // 终极资源：真相
}

export enum BuildingCategory {
  SURVIVAL = 'SURVIVAL',       
  NETWORK = 'NETWORK',         
  INTERNET_CULTURE = 'INTERNET_CULTURE', 
  ADULT = 'ADULT',             // 新增：？？？ (欲望/娱乐/成人)
  VERIFICATION = 'VERIFICATION', 
  TECHNOCRACY = 'TECHNOCRACY', 
  HISTORY = 'HISTORY',         
  FOLKLORE = 'FOLKLORE',       
  COUNTER_CULTURE = 'COUNTER_CULTURE', 
  ARCHIVE = 'ARCHIVE',         
  SUBVERSION = 'SUBVERSION',   
  ESOTERIC = 'ESOTERIC',       
}

export interface Building {
  id: string;
  name: string;
  description: string;
  category: BuildingCategory;
  baseCosts: { [key in ResourceType]?: number }; 
  costMultiplier: number;
  baseProduction: { [key in ResourceType]?: number };
  globalMultipliers?: { [key in ResourceType]?: number };
  icon: string;
  unlockRequirement: number;
  requireTech?: string[]; 
}

export interface TechEffects {
  resourceMultipliers?: { [key in ResourceType]?: number }; 
  unlockMessage?: string;
  
  globalCostReduction?: number; 
  clickPowerMult?: number;      
  artifactChanceMult?: number;  
  artifactRarityBonus?: number; 
  recycleEfficiency?: number;   
}

export interface Tech {
  id: string;
  name: string;
  description: string;
  tier: number; 
  costs: { [key in ResourceType]?: number };
  effects: TechEffects;
  icon: string;
  category: BuildingCategory; // Changed: Mandatory
  preRequisiteTech?: string;
  
  exclusiveWith?: string[]; 
  highlight?: boolean;      
}

export interface Artifact {
  id: string;
  name: string;
  description: string;
  flavorText: string; 
  category: BuildingCategory;
  rarity: 'common' | 'rare' | 'legendary' | 'mythic' | 'cursed' | 'anomaly';
  isProcedural?: boolean; 
  subtype: 'file' | 'bookmark';
  details?: string; 
  bonusType: 'production_multiplier' | 'click_power' | 'luck' | 'cost_reduction' | 'none';
  targetResource?: ResourceType; 
  bonusValue: number; 
  dropChanceWeight: number; 
}

export interface LogEntry {
  id: number;
  timestamp: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'rare' | 'glitch';
}

export interface GameEvent {
  id: string;
  name: string;
  description: string;
  type: 'positive' | 'negative' | 'mixed' | 'glitch';
  multipliers: { [key in ResourceType]?: number }; // Multiplier (e.g. 1.5 for +50%, 0.5 for -50%)
  duration: number; // in seconds
  startTime: number; // timestamp
  reqTech?: string[]; // New: Tech required to unlock this event
}

export interface GameSettings {
  showCommonArtifactLogs: boolean;
  showBuildingLogs: boolean;
  showFlavorText: boolean;
}

export interface GameState {
  resources: {
    [key in ResourceType]: number;
  };
  totalInfoMined: number;
  buildings: {
    [buildingId: string]: number;
  };
  researchedTechs: string[];
  artifacts: Artifact[]; 
  activeEvents: GameEvent[]; // New field
  settings: GameSettings; // New field
  startTime: number;
  depth: number;
}
