
import React, { useCallback } from 'react';
import { GameState, ResourceType, LogEntry, Artifact, ChoiceOption, GameEvent } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS, TECH_TRIGGER_MAP } from '../data/choiceEvents';
import { RESOURCE_INFO } from '../constants';
import { generateArtifact } from '../utils/generator'; // Import generator for recursive discovery

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

       // Check if it's a REAL Unique Item (story item)
       // We allow 'resource_bundle' to fall through to the procedural logic now for more randomness
       const isRealUniqueLoot = target.hiddenLootId && target.hiddenLootId !== 'resource_bundle';
       const isStaticUnique = !target.isProcedural;

       // ---------------------------------------------------------
       // CASE 1: REAL UNIQUE LOOT (Story/Collection items)
       // ---------------------------------------------------------
       if (isRealUniqueLoot) {
           const lootItem = UNIQUE_ARTIFACTS.find(u => u.id === target.hiddenLootId);
           const alreadyHas = prev.artifacts.some(a => a.id === lootItem?.id);
           
           if (lootItem && !alreadyHas) {
               newArtifacts.push(lootItem);
               logMsg = `重大发现: 从 [${target.name}] 中提取出唯一物品 [${lootItem.name}]!`;
               logType = 'rare';
           } else {
               // Fallback if already have it
               res[ResourceType.KNOWLEDGE] += 10;
               res[ResourceType.FUNDS] += 500;
               logMsg = `调查发现: 包含重复的高价值数据 (+10 Knowledge, +500 Funds)`;
               logType = 'success';
           }
       } 
       // ---------------------------------------------------------
       // CASE 2: SELLING PRE-DEFINED UNIQUES (The item itself is unique)
       // ---------------------------------------------------------
       else if (isStaticUnique) {
           let baseValue = 500;
           if (target.rarity === 'rare') baseValue = 1000;
           if (target.rarity === 'legendary') baseValue = 3000;
           if (target.rarity === 'mythic') baseValue = 10000;
           
           const randomFactor = 0.8 + (Math.random() * 0.6);
           const finalAmount = Math.floor(baseValue * randomFactor * efficiency);
           res[ResourceType.FUNDS] += finalAmount;
           logMsg = `出售珍品: ${target.name} (+${finalAmount} Funds)`;
           logType = 'success';
       } 
       // ---------------------------------------------------------
       // CASE 3: PROCEDURAL ITEMS (THE NEW WILD SYSTEM)
       // ---------------------------------------------------------
       else {
           // Helper to pick random array element
           const pick = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

           // A. Manic Volatility Check (15% Chance)
           const isManic = Math.random() < 0.15;
           const volatility = isManic
               ? 0.1 + Math.random() * 7.9  // Manic: 0.1x to 8.0x
               : 0.8 + Math.random() * 0.7; // Normal: 0.8x to 1.5x

           // B. Outcome Determination
           const outcomeRoll = Math.random();
           let outcomeType: 'standard' | 'hazard' | 'glitch' | 'dud' = 'standard';

           if (outcomeRoll < 0.05) outcomeType = 'hazard';        // 5% Hazard (High Risk/High Reward)
           else if (outcomeRoll < 0.10) outcomeType = 'glitch';   // 5% Glitch (Pure Chaos)
           else if (outcomeRoll < 0.20) outcomeType = 'dud';      // 10% Dud (Fail)
           else outcomeType = 'standard';                         // 80% Standard

           // Rarity Multiplier
           const rarityMultMap: Record<string, number> = {
               'common': 1, 'rare': 3, 'legendary': 8, 'mythic': 20, 'anomaly': 50
           };
           const rarityMult = rarityMultMap[target.rarity] || 1;

           // Base Info Calculation
           let baseInfo = Math.floor(Math.random() * 145) + 5;
           
           // Apply Bundle Bonus if applicable (moved from Case 1)
           if (target.hiddenLootId === 'resource_bundle') {
               baseInfo *= 5; // Bundles are rich
           }

           let primaryAmount = Math.floor(baseInfo * rarityMult * efficiency * volatility);

           // --- PROCESS OUTCOMES ---

           if (outcomeType === 'dud') {
               // DUD: Failed to extract meaningful data
               primaryAmount = Math.max(1, Math.floor(primaryAmount * 0.05)); // 5% of potential
               const junkAmt = Math.floor(Math.random() * 5) + 1;
               res[ResourceType.CARDBOARD] += junkAmt;
               logMsg = `数据损坏 [DUD]: +${primaryAmount} 信息流, +${junkAmt} 废纸箱`;
               logType = 'info'; // Dim log
           } 
           else if (outcomeType === 'hazard') {
               // HAZARD: Massive Info but System Damage
               primaryAmount = Math.floor(primaryAmount * 2.5);
               
               // Pick a penalty
               const penaltyType = pick(['funds', 'cred', 'reality', 'ops']);
               let penaltyText = '';
               
               if (penaltyType === 'funds') {
                   const loss = Math.floor(res[ResourceType.FUNDS] * 0.05) + 100;
                   res[ResourceType.FUNDS] = Math.max(0, res[ResourceType.FUNDS] - loss);
                   penaltyText = `-${loss} 资金`;
               } else if (penaltyType === 'cred') {
                   const loss = Math.floor(res[ResourceType.CRED] * 0.1) + 10;
                   res[ResourceType.CRED] = Math.max(0, res[ResourceType.CRED] - loss);
                   penaltyText = `-${loss} 信誉`;
               } else if (penaltyType === 'reality') {
                   res[ResourceType.REALITY] = Math.max(0, res[ResourceType.REALITY] - 5);
                   penaltyText = `-5 现实稳定`;
               } else if (penaltyType === 'ops') {
                   res[ResourceType.OPS] = Math.max(0, res[ResourceType.OPS] * 0.8);
                   penaltyText = `算力流失`;
               }

               logMsg = `⚠️ 危险数据 [HAZARD]: +${primaryAmount} 信息流, ${penaltyText}`;
               logType = 'warning';
           } 
           else if (outcomeType === 'glitch') {
               // GLITCH: Two completely random resources
               primaryAmount = Math.floor(primaryAmount * 1.2); // Slight boost
               const allRes = Object.values(ResourceType).filter(r => r !== ResourceType.DEJAVU && r !== ResourceType.INFO);
               
               const resA = pick(allRes);
               const resB = pick(allRes);
               const amtA = Math.floor((Math.random() * 20 + 1) * rarityMult);
               const amtB = Math.floor((Math.random() * 20 + 1) * rarityMult);

               res[resA] = (res[resA] || 0) + amtA;
               res[resB] = (res[resB] || 0) + amtB;

               logMsg = `⚡ 逻辑故障 [GLITCH]: +${primaryAmount} Info, +${amtA} ${RESOURCE_INFO[resA].name}, +${amtB} ${RESOURCE_INFO[resB].name}`;
               logType = 'rare'; // Purple text
           } 
           else {
               // STANDARD: Subtype based logic
               let secondaryRes: ResourceType | null = null;
               let secondaryAmount = 0;

               switch (target.subtype) {
                   case 'file':
                       // Files: Code, Spam, Funds, Truth (rarely)
                       secondaryRes = pick([ResourceType.CODE, ResourceType.SPAM, ResourceType.FUNDS, ResourceType.FUNDS]);
                       break;
                   case 'bookmark':
                       // Bookmarks: Lore, Funds, Clue, Culture
                       secondaryRes = pick([ResourceType.FUNDS, ResourceType.LORE, ResourceType.CLUE, ResourceType.CULTURE]);
                       break;
                   case 'hardware':
                       // Hardware: Ops, Power, Tech, Cardboard
                       secondaryRes = pick([ResourceType.OPS, ResourceType.POWER, ResourceType.TECH_CAPITAL, ResourceType.CARDBOARD]);
                       break;
                   case 'media':
                       // Media: Culture, Lore, Story, Pleasure
                       secondaryRes = pick([ResourceType.CULTURE, ResourceType.LORE, ResourceType.STORY, ResourceType.PLEASURE]);
                       break;
                   case 'creature':
                       // Creature: Biomass, Fossil, Mind Control
                       secondaryRes = pick([ResourceType.BIOMASS, ResourceType.FOSSIL, ResourceType.MIND_CONTROL]);
                       break;
                   case 'signal':
                       // Signal: Code, Panic, Rumors, Truth
                       secondaryRes = pick([ResourceType.CODE, ResourceType.PANIC, ResourceType.RUMORS, ResourceType.TRUTH]);
                       break;
               }

               if (secondaryRes) {
                   secondaryAmount = Math.floor((Math.random() * 8 + 1) * rarityMult * efficiency);
                   
                   // Bundle Bonus for Secondary
                   if (target.hiddenLootId === 'resource_bundle') {
                       secondaryAmount *= 3;
                   }

                   res[secondaryRes] = (res[secondaryRes] || 0) + secondaryAmount;
               }

               // 10% Chance for Third Random Drop OR guaranteed if bundle
               let thirdDropText = '';
               if (Math.random() < 0.10 || target.hiddenLootId === 'resource_bundle') {
                   const extraRes = pick(Object.values(ResourceType).filter(r => r !== ResourceType.INFO && r !== ResourceType.DEJAVU));
                   const extraAmt = Math.floor((Math.random() * 5 + 1) * rarityMult);
                   res[extraRes] = (res[extraRes] || 0) + extraAmt;
                   thirdDropText = `, +${extraAmt} ${RESOURCE_INFO[extraRes].name}`;
               }

               const manicText = isManic ? ' (躁狂!)' : '';
               const secondaryText = secondaryRes ? `, +${secondaryAmount} ${RESOURCE_INFO[secondaryRes].name}` : '';
               
               logMsg = `分析完成${manicText}: +${primaryAmount} 信息流${secondaryText}${thirdDropText}`;
               
               if (isManic && primaryAmount > 1000) logType = 'rare';
               else logType = 'info';
           }

           // Add Primary Info
           res[ResourceType.INFO] += primaryAmount;

           // ---------------------------------------------------------
           // RECURSIVE DISCOVERY (5%)
           // ---------------------------------------------------------
           if (['file', 'hardware', 'media'].includes(target.subtype) && Math.random() < 0.05) {
               const recursiveArt = generateArtifact(prev.depth, prev.researchedTechs);
               newArtifacts.push(recursiveArt);
               // Append to log
               logMsg += ` | ↳ 发现新物品!`;
               // Flash log type if not already special
               if (logType === 'info') logType = 'success';
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
