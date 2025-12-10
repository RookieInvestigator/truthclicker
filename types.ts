
export enum ResourceType {
  INFO = 'INFO',           // 基础资源：信息流
  FUNDS = 'FUNDS',         // 经济资源：资金
  FOLLOWERS = 'FOLLOWERS', // 影响力资源：粉丝/信徒
  CRED = 'CRED',           // 声望资源：信誉/黑客声望
  CULTURE = 'CULTURE',     // 文化资源：文化资本/高维叙事
  
  CODE = 'CODE',           // 技术资源：代码
  TECH_CAPITAL = 'TECH_CAPITAL', // 新增：技术资本 (Valuation/Equity)
  OPS = 'OPS',             // 硬件资源：算力
  BIOMASS = 'BIOMASS',     // 生物资源：生物质/湿件
  
  CARDBOARD = 'CARDBOARD', // 新增：废纸箱 (Byproduct/Waste)

  CLUE = 'CLUE',           // 转化资源 I：线索
  KNOWLEDGE = 'KNOWLEDGE', // 转化资源 II：隐秘知识
  TRUTH = 'TRUTH',         // 终极资源：真相
}

export enum BuildingCategory {
  SURVIVAL = 'SURVIVAL',       
  NETWORK = 'NETWORK',         // New: Connectivity & Web Infrastructure
  TECHNOCRACY = 'TECHNOCRACY', 
  HISTORY = 'HISTORY',         // New: Archaeology & Revisionism
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
  
  // New Mechanics
  globalCostReduction?: number; // e.g. 0.05 for 5% off
  clickPowerMult?: number;      // e.g. 0.5 for +50% manual mining
  artifactChanceMult?: number;  // e.g. 0.2 for +20% drop rate
  artifactRarityBonus?: number; // e.g. 0.1 for +10% luck
  recycleEfficiency?: number;   // e.g. 0.25 for +25% resources when recycling
}

export interface Tech {
  id: string;
  name: string;
  description: string;
  tier: number; // 0: Start, 1: Surface, 2: Deep, 3: Dark, 4: Event Horizon, 5: Abyss, 6: Glitch, 7: Dread, 8: Omega
  costs: { [key in ResourceType]?: number };
  effects: TechEffects;
  icon: string;
  category?: BuildingCategory; 
  preRequisiteTech?: string;
  
  // Branching Logic
  exclusiveWith?: string[]; // IDs of techs that cannot be researched if this one is
  highlight?: boolean;      // UI hint for major decision points
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
  startTime: number;
  depth: number;
}
