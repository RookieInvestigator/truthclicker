
import React, { useCallback } from 'react';
import { GameState, ResourceType, LogEntry, Artifact, ChoiceOption, GameEvent } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS, TECH_TRIGGER_MAP } from '../data/choiceEvents';
import { RESOURCE_INFO } from '../constants';

export const useGameActions = (
    setGameState: React.Dispatch<React.SetStateAction<GameState>>, 
    addLog: (msg: string, type?: LogEntry['type']) => void,
    calculators: any
) => {
  const { calculateClickPower, calculateRecycleEfficiency } = calculators;

  const handleManualMine = useCallback(() => {
    setGameState(prev => {
        const power = calculateClickPower();
        return {
            ...prev,
            resources: {
                ...prev.resources,
                [ResourceType.INFO]: prev.resources[ResourceType.INFO] + power
            },
            totalInfoMined: prev.totalInfoMined + power
        };
    });
  }, [calculateClickPower, setGameState]);

  const markAsSeen = useCallback((ids: string[]) => {
      setGameState(prev => {
          const newSeen = [...prev.seenItemIds];
          let changed = false;
          ids.forEach(id => {
              if (!newSeen.includes(id)) {
                  newSeen.push(id);
                  changed = true;
              }
          });
          if (!changed) return prev;
          return { ...prev, seenItemIds: newSeen };
      });
  }, [setGameState]);

  const buyBuilding = useCallback((id: string) => {
    // Also mark as seen when bought
    markAsSeen([id]);

    setGameState(prev => {
        const building = BUILDINGS.find(b => b.id === id);
        if (!building) return prev;
        
        const count = prev.buildings[id] || 0;
        
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
  }, [addLog, setGameState, markAsSeen]);

  const sellBuilding = useCallback((id: string) => {
     setGameState(prev => {
         const count = prev.buildings[id] || 0;
         if (count <= 0) return prev;
         
         const building = BUILDINGS.find(b => b.id === id);
         if (!building) return prev;
         
         const newResources = { ...prev.resources };
         
         Object.entries(building.baseCosts).forEach(([res, base]) => {
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
  }, [addLog, setGameState]);

  const researchTech = useCallback((id: string) => {
      markAsSeen([id]);
      
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

          // --- TECH TRIGGER LOGIC ---
          let newPendingChoice = prev.pendingChoice;
          const triggeredEventId = TECH_TRIGGER_MAP[id];
          
          if (triggeredEventId && !prev.settings.disableChoiceEvents) {
              const eventDef = CHOICE_EVENTS.find(e => e.id === triggeredEventId);
              if (eventDef) {
                  newPendingChoice = eventDef;
              }
          }

          return {
              ...prev,
              resources: newResources,
              researchedTechs: [...prev.researchedTechs, id],
              pendingChoice: newPendingChoice
          };
      });
  }, [addLog, setGameState, markAsSeen]);

  const investigateArtifact = useCallback((target: Artifact, onResult?: (msg: string, type: LogEntry['type']) => void) => {
    setGameState(prev => {
       const remaining = prev.artifacts.filter(a => a.id !== target.id);
       const res = { ...prev.resources };
       const newArtifacts = [...remaining];
       let logMsg = '';
       let logType: LogEntry['type'] = 'info';
       
       let efficiency = calculateRecycleEfficiency();

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
               // Selling Unique Artifacts
               let baseValue = 500;
               if (target.rarity === 'rare') baseValue = 1000;
               if (target.rarity === 'legendary') baseValue = 3000;
               if (target.rarity === 'mythic') baseValue = 10000;
               
               // Randomness: 0.8x to 1.4x
               const randomFactor = 0.8 + (Math.random() * 0.6);
               
               const finalAmount = Math.floor(baseValue * randomFactor * efficiency);
               res[ResourceType.FUNDS] += finalAmount;
               logMsg = `出售珍品: ${target.name} (+${finalAmount} Funds)`;
           } else {
               // --- GENERAL ITEM LOGIC (ENHANCED RANDOMNESS) ---
               
               const roll = Math.random();
               const isJackpot = roll > 0.98; // 2% Jackpot
               const isCrit = !isJackpot && roll > 0.85; // 13% Crit
               const isJunk = roll < 0.15; // 15% Junk
               // Glitch: 10% chance for normal items to produce randomized resources
               const isGlitch = !isJackpot && !isCrit && !isJunk && Math.random() < 0.10; 

               // Rarity scaling (Boosted for high tiers)
               let rarityMult = 1;
               if (target.rarity === 'rare') rarityMult = 3.0; 
               if (target.rarity === 'legendary') rarityMult = 8.0;
               if (target.rarity === 'mythic') rarityMult = 20.0;
               if (target.rarity === 'anomaly') rarityMult = 50.0;

               // Volatility: A random multiplier between 0.1x and 3.0x
               // This ensures even common items can sometimes be surprisingly valuable (or useless)
               const volatility = 0.1 + (Math.random() * 2.9);

               // Primary Reward: INFO (High Variance Base: 5 - 150)
               let baseInfo = Math.floor(Math.random() * 145) + 5;
               let primaryAmount = Math.floor(baseInfo * rarityMult * efficiency * volatility);

               // Secondary Reward
               let secondaryRes: ResourceType | null = null;
               let secondaryAmount = 0;
               
               // Helper to pick random array element
               const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

               if (isGlitch) {
                   // Glitch: Pick ANY resource from the game
                   const allRes = Object.values(ResourceType);
                   secondaryRes = pick(allRes);
                   secondaryAmount = Math.floor((Math.random() * 10 + 1) * rarityMult * efficiency);
               } else {
                   // Standard Subtype Logic
                   switch (target.subtype) {
                       case 'file':
                           // Files yield data/code/spam
                           if (Math.random() > 0.3) { 
                               secondaryRes = pick([ResourceType.CODE, ResourceType.SPAM, ResourceType.FUNDS]);
                               secondaryAmount = Math.floor((Math.random() * 8 + 1) * rarityMult);
                           }
                           break;
                       case 'bookmark':
                           // Bookmarks yield lore/funds/clues
                           secondaryRes = pick([ResourceType.FUNDS, ResourceType.LORE, ResourceType.CLUE]);
                           secondaryAmount = Math.floor((Math.random() * 12 + 2) * rarityMult);
                           break;
                       case 'hardware':
                           // Hardware yields ops/power/tech/cardboard
                           secondaryRes = pick([ResourceType.OPS, ResourceType.POWER, ResourceType.TECH_CAPITAL, ResourceType.CARDBOARD]);
                           secondaryAmount = Math.floor((Math.random() * 10 + 1) * rarityMult * efficiency);
                           break;
                       case 'media':
                           // Media yields culture/lore/story
                           secondaryRes = pick([ResourceType.CULTURE, ResourceType.LORE, ResourceType.STORY]);
                           secondaryAmount = Math.floor((Math.random() * 6 + 1) * rarityMult * efficiency);
                           break;
                       case 'creature':
                           // Creatures yield biomass/fossil
                           secondaryRes = pick([ResourceType.BIOMASS, ResourceType.FOSSIL]);
                           secondaryAmount = Math.floor((Math.random() * 8 + 2) * rarityMult * efficiency);
                           break;
                       case 'signal':
                           // Signals yield code/panic/rumors
                           secondaryRes = pick([ResourceType.CODE, ResourceType.PANIC, ResourceType.RUMORS]);
                           secondaryAmount = Math.floor((Math.random() * 8 + 2) * rarityMult * efficiency);
                           break;
                   }
               }

               // Apply Modifiers & Construct Logs
               if (isJackpot) {
                   primaryAmount = Math.floor(primaryAmount * 10);
                   if (secondaryAmount > 0) secondaryAmount = Math.floor(secondaryAmount * 5);
                   
                   // Bonus Jackpot Resource (High tier)
                   const bonusRes = pick([ResourceType.KNOWLEDGE, ResourceType.TRUTH, ResourceType.TECH_CAPITAL]);
                   const bonusAmt = Math.floor(Math.random() * 5 * rarityMult) + 1;
                   res[bonusRes] = (res[bonusRes] || 0) + bonusAmt;
                   
                   let secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
                   logMsg = `🔥 传说级解析 [JACKPOT]: +${primaryAmount} 信息流${secondaryText}, +${bonusAmt} ${RESOURCE_INFO[bonusRes].name}`;
                   logType = 'rare';
               } else if (isCrit) {
                   primaryAmount = Math.floor(primaryAmount * 3);
                   if (secondaryAmount > 0) secondaryAmount = Math.floor(secondaryAmount * 2);
                   res[ResourceType.CLUE] = (res[ResourceType.CLUE] || 0) + 2;
                   
                   let secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
                   logMsg = `完美解析 [CRIT]: +${primaryAmount} 信息流${secondaryText}, +2 线索`;
                   logType = 'success';
               } else if (isGlitch) {
                   primaryAmount = Math.floor(primaryAmount * 1.5);
                   let secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
                   logMsg = `解析异常 [GLITCH]: +${primaryAmount} 信息流${secondaryText}`;
                   logType = 'warning';
               } else if (isJunk) {
                   primaryAmount = Math.max(1, Math.floor(primaryAmount * 0.1));
                   secondaryRes = ResourceType.CARDBOARD;
                   secondaryAmount = Math.floor(Math.random() * 5) + 1;
                   logMsg = `数据损坏 [JUNK]: +${primaryAmount} 信息流, +${secondaryAmount} 废纸箱`;
                   logType = 'info'; // Dim log
               } else {
                   // Normal
                   let secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
                   logMsg = `分析完成: +${primaryAmount} 信息流${secondaryText}`;
                   logType = 'info';
               }

               res[ResourceType.INFO] += primaryAmount;
               if (secondaryRes && secondaryAmount > 0) {
                   res[secondaryRes] = (res[secondaryRes] || 0) + secondaryAmount;
               }
           }
       }
       
       if (onResult) {
           onResult(logMsg, logType);
       } else {
           addLog(logMsg, logType);
       }
       
       return { ...prev, artifacts: newArtifacts, resources: res };
    });
  }, [addLog, setGameState, calculateRecycleEfficiency]);

  const batchInvestigate = useCallback((rarity: string) => {
    addLog("Batch operation initiated from system core.", "info");
  }, [addLog]);

  const toggleSetting = useCallback((key: keyof GameState['settings']) => {
      setGameState(prev => ({
          ...prev,
          settings: { ...prev.settings, [key]: !prev.settings[key] }
      }));
  }, [setGameState]);

  const triggerRealityFlush = useCallback(() => {
      setGameState(prev => {
          if (prev.resources[ResourceType.REALITY] < 20) return prev;
          const newEvents = prev.activeEvents.filter(e => e.type === 'positive');
          return {
              ...prev,
              resources: { ...prev.resources, [ResourceType.REALITY]: prev.resources[ResourceType.REALITY] - 20 },
              activeEvents: newEvents
          };
      });
      addLog("Reality Flush Triggered: Anomalies Cleared", "rare");
  }, [addLog, setGameState]);

  const triggerProbabilityDrive = useCallback(() => {
      setGameState(prev => {
          if (prev.resources[ResourceType.PROBABILITY] < 5) return prev;
          if (prev.luckBoostEndTime > Date.now()) return prev;
          
          return {
              ...prev,
              resources: { ...prev.resources, [ResourceType.PROBABILITY]: prev.resources[ResourceType.PROBABILITY] - 5 },
              luckBoostEndTime: Date.now() + 30000 
          };
      });
      addLog("Probability Drive Engaged: Luck Maximized", "rare");
  }, [addLog, setGameState]);

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
  }, [addLog, setGameState]);

  const dismissNotification = useCallback((id: string) => {
      setGameState(prev => ({
          ...prev,
          notifications: prev.notifications.filter(n => n.id !== id)
      }));
  }, [setGameState]);

  return {
    handleManualMine,
    buyBuilding,
    sellBuilding,
    researchTech,
    investigateArtifact,
    batchInvestigate,
    toggleSetting,
    triggerRealityFlush,
    triggerProbabilityDrive,
    handleMakeChoice,
    dismissNotification,
    markAsSeen // Exported
  };
};
