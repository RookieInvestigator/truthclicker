
import { useState, useEffect, useCallback, useRef } from 'react';
import { 
  GameState, ResourceType, Building, Tech, Artifact, LogEntry, GameEvent, 
  ChoiceEventDefinition, ChoiceOption, BuildingCategory 
} from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { RESOURCE_INFO, TICK_RATE, AUTOSAVE_INTERVAL } from '../constants';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS } from '../data/choiceEvents';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { generateArtifact } from '../utils/generator';

// Initial State
const INITIAL_STATE: GameState = {
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
    [ResourceType.SPAM]: 0,
    [ResourceType.LORE]: 0,
    [ResourceType.ANCIENT_WISDOM]: 0,
    [ResourceType.STORY]: 0,
    [ResourceType.RUMORS]: 0,
    [ResourceType.PANIC]: 0,
    [ResourceType.MIND_CONTROL]: 0,
    [ResourceType.PLEASURE]: 0,
    [ResourceType.PROBABILITY]: 0,
    [ResourceType.REALITY]: 100, 
    [ResourceType.CLUE]: 0,
    [ResourceType.KNOWLEDGE]: 0,
    [ResourceType.TRUTH]: 0,
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
  depth: 0,
  luckBoostEndTime: 0,
};

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('truth_clicker_save_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return { 
          ...INITIAL_STATE, 
          ...parsed, 
          resources: { ...INITIAL_STATE.resources, ...parsed.resources }, 
          settings: { ...INITIAL_STATE.settings, ...parsed.settings } 
        };
      } catch (e) {
        console.error("Save load failed", e);
      }
    }
    return INITIAL_STATE;
  });

  const [logs, setLogs] = useState<LogEntry[]>([]);
  const lastSaveTime = useRef(Date.now());

  // Helpers
  const addLog = useCallback((message: string, type: LogEntry['type'] = 'info') => {
    setLogs(prev => {
        const newLog = { id: Date.now() + Math.random(), timestamp: new Date().toLocaleTimeString(), message, type };
        const nextLogs = [...prev, newLog];
        if (nextLogs.length > 100) nextLogs.shift();
        return nextLogs;
    });
  }, []);

  const addGlobalLog = addLog;

  // Calculators
  const calculateRecycleEfficiency = useCallback((researchedTechs: string[] = gameState.researchedTechs) => {
    let eff = 1.0;
    if (researchedTechs.includes('cardboard_architecture')) eff += 0.1;
    if (researchedTechs.includes('used_hardware_flipping')) eff += 0.15;
    if (researchedTechs.includes('data_hoarding_basics')) eff += 0.25;
    if (researchedTechs.includes('deduplication')) eff += 0.15;
    if (researchedTechs.includes('cold_storage_protocols')) eff += 0.1;
    if (researchedTechs.includes('dead_theory_bot')) eff += 0.1;
    return eff;
  }, [gameState.researchedTechs]);

  const calculateGlobalCostReduction = useCallback(() => {
    let reduction = 0;
    TECHS.forEach(tech => {
        if (gameState.researchedTechs.includes(tech.id) && tech.effects.globalCostReduction) {
            reduction += tech.effects.globalCostReduction;
        }
    });
    return reduction;
  }, [gameState.researchedTechs]);

  const calculateClickPower = useCallback(() => {
    let power = 1;
    TECHS.forEach(tech => {
        if (gameState.researchedTechs.includes(tech.id) && tech.effects.clickPowerMult) {
            power += tech.effects.clickPowerMult;
        }
    });
    gameState.artifacts.forEach(art => {
        if (art.bonusType === 'click_power') power += art.bonusValue;
    });
    if (gameState.researchedTechs.includes('vacuum_decay')) power *= 5.0;
    return power;
  }, [gameState.researchedTechs, gameState.artifacts]);

  const calculateTotalProduction = useCallback((state: GameState) => {
    const production: Record<ResourceType, number> = {} as any;
    Object.values(ResourceType).forEach(r => production[r] = 0);

    Object.entries(state.buildings).forEach(([bId, count]) => {
        if (count <= 0) return;
        const building = BUILDINGS.find(b => b.id === bId);
        if (!building || !building.baseProduction) return;
        
        Object.entries(building.baseProduction).forEach(([res, amount]) => {
             production[res as ResourceType] += amount * count;
        });
    });

    Object.keys(production).forEach(resKey => {
        const res = resKey as ResourceType;
        let mult = 1.0;

        TECHS.forEach(tech => {
            if (state.researchedTechs.includes(tech.id)) {
                if (tech.effects.resourceMultipliers && tech.effects.resourceMultipliers[res]) {
                    mult += tech.effects.resourceMultipliers[res]!;
                }
            }
        });

        state.artifacts.forEach(art => {
            if (art.bonusType === 'production_multiplier' && art.targetResource === res) {
                mult += art.bonusValue;
            }
        });

        state.activeEvents.forEach(evt => {
            if (evt.multipliers && evt.multipliers[res]) {
                mult *= evt.multipliers[res]!;
            }
        });

        if (production[res] > 0) {
            production[res] *= mult;
        }
    });
    
    return production;
  }, []);

  // Actions
  const handleManualMine = useCallback(() => {
    const power = calculateClickPower();
    setGameState(prev => ({
        ...prev,
        resources: {
            ...prev.resources,
            [ResourceType.INFO]: prev.resources[ResourceType.INFO] + power
        },
        totalInfoMined: prev.totalInfoMined + power
    }));
  }, [calculateClickPower]);

  const buyBuilding = useCallback((id: string) => {
    setGameState(prev => {
        const building = BUILDINGS.find(b => b.id === id);
        if (!building) return prev;
        
        const count = prev.buildings[id] || 0;
        
        // Calculate reduction inside
        let reduction = 0;
        TECHS.forEach(tech => {
            if (prev.researchedTechs.includes(tech.id) && tech.effects.globalCostReduction) {
                reduction += tech.effects.globalCostReduction;
            }
        });

        const costs = building.baseCosts;
        const newResources = { ...prev.resources };
        let canAfford = true;

        Object.entries(costs).forEach(([res, base]) => {
            let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
            cost = Math.floor(cost * (1 - reduction));
            cost = Math.max(1, cost);
            if (newResources[res as ResourceType] < cost) canAfford = false;
        });
        
        if (!canAfford) return prev;

        Object.entries(costs).forEach(([res, base]) => {
            let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
            cost = Math.floor(cost * (1 - reduction));
            cost = Math.max(1, cost);
            newResources[res as ResourceType] -= cost;
        });

        if (prev.settings.showBuildingLogs) {
             addLog(`建造: ${building.name}`, 'info');
        }

        return {
            ...prev,
            resources: newResources,
            buildings: { ...prev.buildings, [id]: count + 1 }
        };
    });
  }, [addLog]);

  const sellBuilding = useCallback((id: string) => {
     setGameState(prev => {
         const count = prev.buildings[id] || 0;
         if (count <= 0) return prev;
         
         const building = BUILDINGS.find(b => b.id === id);
         if (!building) return prev;
         
         const newResources = { ...prev.resources };
         
         // Refund 50% of current cost
         // Need to recalc cost roughly.
         Object.entries(building.baseCosts).forEach(([res, base]) => {
             // refund previous level cost
             let cost = Math.floor(base * Math.pow(building.costMultiplier, count - 1));
             newResources[res as ResourceType] += Math.floor(cost * 0.5);
         });

         if (prev.settings.showBuildingLogs) {
            addLog(`拆除: ${building.name}`, 'warning');
         }

         return {
             ...prev,
             resources: newResources,
             buildings: { ...prev.buildings, [id]: count - 1 },
         };
     });
  }, [addLog]);

  const researchTech = useCallback((id: string) => {
      setGameState(prev => {
          if (prev.researchedTechs.includes(id)) return prev;
          const tech = TECHS.find(t => t.id === id);
          if (!tech) return prev;
          
          const newResources = { ...prev.resources };
          
          let techCostReduction = 0;
          TECHS.forEach(t => {
             if (prev.researchedTechs.includes(t.id) && t.effects.globalCostReduction) techCostReduction += t.effects.globalCostReduction;
          });
          
          let canAfford = true;
          Object.entries(tech.costs).forEach(([res, cost]) => {
              let final = Math.floor(cost * (1 - techCostReduction));
              final = Math.max(1, final);
              if (newResources[res as ResourceType] < final) canAfford = false;
          });
          
          if (!canAfford) return prev;
          
          Object.entries(tech.costs).forEach(([res, cost]) => {
              let final = Math.floor(cost * (1 - techCostReduction));
              final = Math.max(1, final);
              newResources[res as ResourceType] -= final;
          });
          
          addLog(`研发完成: ${tech.name}`, 'success');
          if (tech.effects.unlockMessage) {
              addLog(tech.effects.unlockMessage, 'rare');
          }

          return {
              ...prev,
              resources: newResources,
              researchedTechs: [...prev.researchedTechs, id]
          };
      });
  }, [addLog]);

  const investigateArtifact = useCallback((target: Artifact, onResult?: (msg: string, type: LogEntry['type']) => void) => {
    setGameState(prev => {
       const remaining = prev.artifacts.filter(a => a.id !== target.id);
       const res = { ...prev.resources };
       const newArtifacts = [...remaining];
       let logMsg = '';
       let logType: LogEntry['type'] = 'info';
       
       let efficiency = 1.0;
       if (prev.researchedTechs.includes('cardboard_architecture')) efficiency += 0.1;
       if (prev.researchedTechs.includes('used_hardware_flipping')) efficiency += 0.15;
       if (prev.researchedTechs.includes('data_hoarding_basics')) efficiency += 0.25;
       if (prev.researchedTechs.includes('deduplication')) efficiency += 0.15;
       if (prev.researchedTechs.includes('cold_storage_protocols')) efficiency += 0.1;
       if (prev.researchedTechs.includes('dead_theory_bot')) efficiency += 0.1;

       if (target.hiddenLootId) {
           if (target.hiddenLootId === 'resource_bundle') {
               res[ResourceType.FUNDS] += 500;
               res[ResourceType.CLUE] += 5;
               logMsg = `调查发现: 包含加密账户数据 (+500 Funds)`;
               logType = 'success';
           } else {
               const lootItem = UNIQUE_ARTIFACTS.find(u => u.id === target.hiddenLootId);
               const alreadyHas = prev.artifacts.some(a => a.id === lootItem?.id);
               
               if (lootItem && !alreadyHas) {
                   newArtifacts.push(lootItem);
                   logMsg = `重大发现: 提取出唯一物品 [${lootItem.name}]!`;
                   logType = 'rare';
               } else {
                   res[ResourceType.KNOWLEDGE] += 10;
                   logMsg = `调查发现: 包含重复的高价值数据 (+10 Knowledge)`;
                   logType = 'success';
               }
           }
       } else {
           if (!target.isProcedural) {
               let rewardAmount = 500;
               if (target.rarity === 'legendary') rewardAmount = 2000;
               const finalAmount = Math.floor(rewardAmount * efficiency);
               res[ResourceType.FUNDS] += finalAmount;
               logMsg = `出售珍品: ${target.name} (+${finalAmount} Funds)`;
           } else {
               const roll = Math.random();
               const isCrit = roll > 0.90;
               const isJunk = roll < 0.15;

               let primaryRes = ResourceType.INFO;
               let primaryBase = Math.floor(Math.random() * 40) + 30;
               let secondaryRes: ResourceType | null = null;
               let secondaryAmount = 0;

               switch (target.subtype) {
                   case 'file':
                       primaryRes = ResourceType.INFO;
                       primaryBase += 20;
                       if (Math.random() > 0.5) { secondaryRes = ResourceType.SPAM; secondaryAmount = 2; }
                       break;
                   case 'bookmark':
                       primaryRes = ResourceType.INFO;
                       if (Math.random() > 0.7) { secondaryRes = ResourceType.FUNDS; secondaryAmount = 5; }
                       break;
                   case 'hardware':
                       primaryRes = ResourceType.OPS;
                       primaryBase = Math.floor(primaryBase / 5);
                       if (Math.random() > 0.5) { secondaryRes = ResourceType.CARDBOARD; secondaryAmount = 3; }
                       break;
                   case 'media':
                       primaryRes = ResourceType.CULTURE;
                       primaryBase = Math.floor(primaryBase / 10);
                       if (Math.random() > 0.5) { secondaryRes = ResourceType.LORE; secondaryAmount = 0.5; }
                       break;
                   case 'creature':
                       primaryRes = ResourceType.BIOMASS;
                       primaryBase = Math.floor(primaryBase / 2);
                       if (Math.random() > 0.5) { secondaryRes = ResourceType.LORE; secondaryAmount = 1; }
                       break;
                   case 'signal':
                       primaryRes = ResourceType.CODE;
                       primaryBase = Math.floor(primaryBase / 5);
                       if (Math.random() > 0.5) { secondaryRes = ResourceType.INFO; secondaryAmount = 20; }
                       break;
               }

               if (isCrit) {
                   primaryBase *= 2;
                   if (secondaryAmount > 0) secondaryAmount *= 2;
                   res[ResourceType.CLUE] = (res[ResourceType.CLUE] || 0) + 1;
               } else if (isJunk) {
                   primaryBase = Math.max(1, Math.floor(primaryBase * 0.2));
                   secondaryRes = ResourceType.CARDBOARD;
                   secondaryAmount = 1;
               }

               primaryBase = Math.max(1, Math.floor(primaryBase * efficiency));
               
               res[primaryRes] += primaryBase;
               if (secondaryRes && secondaryAmount > 0) {
                   res[secondaryRes] = (res[secondaryRes] || 0) + secondaryAmount;
               }

               let secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
               let critText = isCrit ? ' [完美解析]' : isJunk ? ' [损坏]' : '';
               logMsg = `分析完成${critText}: (+${primaryBase} ${RESOURCE_INFO[primaryRes].name}${secondaryText})`;
           }
       }
       
       if (onResult) {
           onResult(logMsg, logType);
       } else {
           addLog(logMsg, logType);
       }
       
       return { ...prev, artifacts: newArtifacts, resources: res };
    });
  }, [addLog]);

  const batchInvestigate = useCallback((rarity: string) => {
    // Logic handled by component usually, but we can implement mass recycle here if needed
    // For now, this is a placeholder to satisfy the interface if called directly
    addLog("Batch operation initiated from system core.", "info");
  }, [addLog]);

  const saveGame = useCallback(() => {
      localStorage.setItem('truth_clicker_save_v2', JSON.stringify(gameState));
      addLog("Game Saved", "success");
      lastSaveTime.current = Date.now();
  }, [gameState, addLog]);

  const resetGame = useCallback(() => {
      if(confirm("Reset game?")) {
          setGameState(INITIAL_STATE);
          setLogs([]);
          localStorage.removeItem('truth_clicker_save_v2');
      }
  }, []);

  const toggleSetting = useCallback((key: keyof GameState['settings']) => {
      setGameState(prev => ({
          ...prev,
          settings: { ...prev.settings, [key]: !prev.settings[key] }
      }));
  }, []);

  const triggerRealityFlush = useCallback(() => {
      setGameState(prev => {
          if (prev.resources[ResourceType.REALITY] < 20) return prev;
          // Clear negative events
          const newEvents = prev.activeEvents.filter(e => e.type === 'positive');
          return {
              ...prev,
              resources: { ...prev.resources, [ResourceType.REALITY]: prev.resources[ResourceType.REALITY] - 20 },
              activeEvents: newEvents
          };
      });
      addLog("Reality Flush Triggered: Anomalies Cleared", "rare");
  }, [addLog]);

  const triggerProbabilityDrive = useCallback(() => {
      setGameState(prev => {
          if (prev.resources[ResourceType.PROBABILITY] < 5) return prev;
          if (prev.luckBoostEndTime > Date.now()) return prev;
          
          return {
              ...prev,
              resources: { ...prev.resources, [ResourceType.PROBABILITY]: prev.resources[ResourceType.PROBABILITY] - 5 },
              luckBoostEndTime: Date.now() + 30000 // 30s
          };
      });
      addLog("Probability Drive Engaged: Luck Maximized", "rare");
  }, [addLog]);

  const handleMakeChoice = useCallback((option: ChoiceOption) => {
      setGameState(prev => {
          if (!prev.pendingChoice) return prev;
          const newRes = { ...prev.resources };
          
          if (option.cost) {
              Object.entries(option.cost).forEach(([res, val]) => {
                  newRes[res as ResourceType] -= val;
              });
          }
          
          if (option.reward.resources) {
              Object.entries(option.reward.resources).forEach(([res, val]) => {
                  newRes[res as ResourceType] += val;
              });
          }
          
          // Trigger Event
          let newEvents = [...prev.activeEvents];
          if (option.reward.triggerEventId) {
              const evtDef = POSSIBLE_EVENTS.find(e => e.id === option.reward.triggerEventId);
              if (evtDef) {
                  const newEvt: GameEvent = { ...evtDef, startTime: Date.now() };
                  newEvents.push(newEvt);
                  addLog(`Event Triggered: ${newEvt.name}`, newEvt.type === 'negative' ? 'warning' : 'info');
              }
          }

          // Building reward
          const newBuildings = { ...prev.buildings };
          if (option.reward.buildingId) {
             newBuildings[option.reward.buildingId] = (newBuildings[option.reward.buildingId] || 0) + 1;
             addLog(`Acquired: ${BUILDINGS.find(b=>b.id===option.reward.buildingId)?.name}`, 'success');
          }

          return {
              ...prev,
              resources: newRes,
              activeEvents: newEvents,
              buildings: newBuildings,
              pendingChoice: null
          };
      });
  }, [addLog]);

  // Main Loop
  useEffect(() => {
    const timer = setInterval(() => {
        setGameState(prev => {
            const now = Date.now();
            const deltaSec = TICK_RATE / 1000;
            const production = calculateTotalProduction(prev);
            
            const newRes = { ...prev.resources };
            Object.entries(production).forEach(([res, amount]) => {
                newRes[res as ResourceType] += amount * deltaSec;
            });

            // Cap logic? Or default unbounded.
            
            // Random Events / Artifacts
            let newArtifacts = [...prev.artifacts];
            let newActiveEvents = prev.activeEvents.filter(e => (now - e.startTime) < e.duration * 1000);
            let newPendingChoice = prev.pendingChoice;

            // Artifact Drop
            // Base chance: 1% per tick? 
            let artifactChance = 0.005; 
            // Tech mods
            if (prev.luckBoostEndTime > now) artifactChance *= 2;
            
            TECHS.forEach(t => {
                if (prev.researchedTechs.includes(t.id) && t.effects.artifactChanceMult) {
                    artifactChance *= (1 + t.effects.artifactChanceMult);
                }
            });

            if (Math.random() < artifactChance) {
                const newArt = generateArtifact(prev.depth, prev.researchedTechs);
                newArtifacts.push(newArt);
                if (prev.settings.showCommonArtifactLogs || newArt.rarity !== 'common') {
                     addLog(`获取物品: ${newArt.name} [${newArt.rarity}]`, 'info');
                }
            }

            // Random Events
            if (!prev.settings.disableChoiceEvents && !newPendingChoice) {
                // Choice Event Chance
                if (Math.random() < 0.001) { // Rare
                     const validChoices = CHOICE_EVENTS.filter(c => (c.minDepth || 0) <= prev.depth);
                     if (validChoices.length > 0) {
                         const choice = validChoices[Math.floor(Math.random() * validChoices.length)];
                         newPendingChoice = choice;
                     }
                }
                
                // Standard Event Chance
                if (Math.random() < 0.002) {
                     const validEvents = POSSIBLE_EVENTS.filter(e => !e.reqTech || e.reqTech.every(t => prev.researchedTechs.includes(t)));
                     if (validEvents.length > 0) {
                         const evtDef = validEvents[Math.floor(Math.random() * validEvents.length)];
                         const newEvt: GameEvent = { ...evtDef, startTime: now };
                         newActiveEvents.push(newEvt);
                         addLog(`环境波动: ${newEvt.name}`, evtDef.type === 'negative' ? 'warning' : 'info');
                     }
                }
            }

            // Autosave check
            if (now - lastSaveTime.current > AUTOSAVE_INTERVAL) {
                 localStorage.setItem('truth_clicker_save_v2', JSON.stringify({
                     ...prev, resources: newRes, artifacts: newArtifacts, activeEvents: newActiveEvents
                 }));
                 lastSaveTime.current = now;
                 if (prev.settings.showAutoSaveLogs) {
                    // Silent save or specific log? 
                    // addLog("Auto-saved", "dim"); // Can't call addLog inside setState easily without effect
                 }
            }

            return {
                ...prev,
                resources: newRes,
                artifacts: newArtifacts,
                activeEvents: newActiveEvents,
                pendingChoice: newPendingChoice,
                depth: prev.depth + (production[ResourceType.INFO] > 0 ? (production[ResourceType.INFO] * deltaSec * 0.001) : 0)
            };
        });
    }, TICK_RATE);
    return () => clearInterval(timer);
  }, [calculateTotalProduction, addLog]);

  return {
    gameState,
    logs,
    addGlobalLog,
    calculateTotalProduction: (state: GameState) => calculateTotalProduction(state),
    calculateClickPower,
    calculateGlobalCostReduction,
    handleManualMine,
    buyBuilding,
    sellBuilding,
    researchTech,
    investigateArtifact,
    batchInvestigate,
    saveGame,
    resetGame,
    toggleSetting,
    triggerRealityFlush,
    triggerProbabilityDrive,
    handleMakeChoice
  };
};
