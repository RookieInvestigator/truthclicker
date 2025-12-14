
export interface GameSettings {
  showCommonArtifactLogs: boolean;
  showBuildingLogs: boolean;
  showFlavorText: boolean;
  disableChoiceEvents: boolean; 
  showAutoSaveLogs: boolean; 
  showDetailedBatchLogs: boolean; 
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: 'unlock' | 'achievement' | 'alert';
  timestamp: number;
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
  activeEvents: GameEvent[]; 
  pendingChoice: ChoiceEventDefinition | null; 
  settings: GameSettings;
  startTime: number;
  depth: number;
  luckBoostEndTime: number; 
  
  // New Content Tracking
  unlockedItemIds: string[]; // Tracks IDs of buildings/posts already notified
  notifications: AppNotification[]; // Active notifications queue
}

export enum ResourceType {
  INFO = 'INFO',           
  FUNDS = 'FUNDS',         
  FOLLOWERS = 'FOLLOWERS', 
  CRED = 'CRED',           
  CULTURE = 'CULTURE',     
  
  CODE = 'CODE',           
  TECH_CAPITAL = 'TECH_CAPITAL', 
  OPS = 'OPS',             
  BIOMASS = 'BIOMASS',     
  POWER = 'POWER',         

  CARDBOARD = 'CARDBOARD', 
  TINFOIL = 'TINFOIL',     // NEW: Satirical resource
  SPAM = 'SPAM',           
  FOSSIL = 'FOSSIL',       
  
  LORE = 'LORE',           
  ANCIENT_WISDOM = 'ANCIENT_WISDOM', 
  
  STORY = 'STORY',         
  RUMORS = 'RUMORS',       
  PANIC = 'PANIC',         
  MIND_CONTROL = 'MIND_CONTROL', 
  RED_PILL = 'RED_PILL',   // NEW: Conspiracy resource

  PLEASURE = 'PLEASURE',   
  PROBABILITY = 'PROBABILITY', 
  REALITY = 'REALITY',     
  OXYGEN = 'OXYGEN',       

  CLUE = 'CLUE',           
  KNOWLEDGE = 'KNOWLEDGE', 
  TRUTH = 'TRUTH',         
}

export enum BuildingCategory {
  SURVIVAL = 'SURVIVAL',       
  CAPITAL = 'CAPITAL',         
  NETWORK = 'NETWORK',         
  INTERNET_CULTURE = 'INTERNET_CULTURE', 
  ADULT = 'ADULT',             
  VERIFICATION = 'VERIFICATION', 
  TECHNOCRACY = 'TECHNOCRACY', 
  HISTORY = 'HISTORY',         
  CRYPTID = 'CRYPTID',         
  FOLKLORE = 'FOLKLORE',       
  COUNTER_CULTURE = 'COUNTER_CULTURE', 
  ARCHIVE = 'ARCHIVE',         
  SUBVERSION = 'SUBVERSION',   
  ESOTERIC = 'ESOTERIC',       
  TRUTH = 'TRUTH',             
}

export interface Building {
  id: string;
  name: string;
  description: string;
  longDescription?: string; // New field for detailed lore
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
  longDescription?: string; // New field for detailed lore
  tier: number; 
  costs: { [key in ResourceType]?: number };
  effects: TechEffects;
  icon: string;
  category: BuildingCategory; 
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
  subtype: 'file' | 'bookmark' | 'hardware' | 'media' | 'creature' | 'signal'; 
  details?: string; 
  bonusType: 'production_multiplier' | 'click_power' | 'luck' | 'cost_reduction' | 'none';
  targetResource?: ResourceType; 
  bonusValue: number; 
  dropChanceWeight: number;
  
  hiddenLootId?: string; 
  hasHint?: boolean; 
  linkedProceduralType?: 'document' | 'image' | 'data' | 'log' | 'archive' | 'code'; 
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
  multipliers: { [key in ResourceType]?: number }; 
  duration: number; 
  startTime: number; 
  reqTech?: string[]; 
}

export interface ChoiceOption {
  id: string;
  label: string;
  description: string;
  cost?: { [key in ResourceType]?: number };
  reward: {
    resources?: { [key in ResourceType]?: number };
    triggerEventId?: string; 
    buildingId?: string; 
  };
}

export interface ChoiceEventDefinition {
  id: string;
  title: string;
  description: string;
  options: ChoiceOption[]; 
  reqTech?: string[];
  minDepth?: number;
}

export interface BoardReply {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  image?: string; 
  postNumber: number; // FIXED: Static post number
  reqTech?: string[]; // NEW: Replies can now require tech to be visible
  hideIfTech?: string[]; // NEW: Replies can now be hidden if tech is present
}

export interface BoardPost {
  id: string;
  title: string;
  author: string;
  timestamp: string;
  content: string; 
  image: string; 
  fileSize: string; // FIXED: Static string (e.g. "230KB")
  filename: string; // FIXED: Static filename
  postNumber: number; // FIXED: Static post number to prevent jumping
  replies: BoardReply[];
  reqTech?: string[]; 
  hideIfTech?: string[]; // NEW: Posts can now be hidden if tech is present
  minDepth?: number;
}
