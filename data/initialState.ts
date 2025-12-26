
import { GameState, ResourceType } from '../types';
import { INITIAL_EMAILS } from './content/emails';
import { INITIAL_STOCKS } from './content/stocks';

export const INITIAL_STATE: GameState = {
  resources: {
    [ResourceType.INFO]: 0,
    [ResourceType.FUNDS]: 0,
    [ResourceType.FOLLOWERS]: 0,
    [ResourceType.CRED]: 0,
    [ResourceType.CULTURE]: 0,
    [ResourceType.CODE]: 0,
    [ResourceType.TECH_CAPITAL]: 0,
    [ResourceType.OPS]: 0,
    [ResourceType.BIOMASS]: 0,
    [ResourceType.POWER]: 0,
    [ResourceType.CARDBOARD]: 0,
    [ResourceType.TINFOIL]: 0, 
    [ResourceType.SPAM]: 0,
    [ResourceType.FOSSIL]: 0, 
    [ResourceType.LORE]: 0,
    [ResourceType.ANCIENT_WISDOM]: 0,
    [ResourceType.STORY]: 0,
    [ResourceType.RUMORS]: 0,
    [ResourceType.PANIC]: 0,
    [ResourceType.MIND_CONTROL]: 0,
    [ResourceType.RED_PILL]: 0, 
    [ResourceType.PLEASURE]: 0,
    [ResourceType.PROBABILITY]: 0,
    [ResourceType.REALITY]: 100, 
    [ResourceType.OXYGEN]: 1000000000, 
    [ResourceType.CLUE]: 0,
    [ResourceType.KNOWLEDGE]: 0,
    [ResourceType.TRUTH]: 0,
    [ResourceType.DEJAVU]: 0,
  },
  totalInfoMined: 0,
  buildings: {},
  researchedTechs: [],
  artifacts: [],
  activeEvents: [],
  pendingChoice: null,
  settings: {
    showCommonArtifactLogs: false,
    showBuildingLogs: true,
    showFlavorText: true,
    disableChoiceEvents: false,
    showAutoSaveLogs: true,
    showDetailedBatchLogs: false,
  },
  startTime: Date.now(),
  lastSaveTime: Date.now(),
  depth: 0,
  luckBoostEndTime: 0,
  
  unlockedItemIds: [],
  seenItemIds: [], 
  foundUniqueItemIds: [], 
  eventUnlockedPosts: [], 
  notifications: [],

  // --- NEW SYSTEMS INITIALIZATION ---
  emails: INITIAL_EMAILS,
  stocks: INITIAL_STOCKS,
  achievements: [],
  flags: [], // NEW: Initialize Flag System
};
