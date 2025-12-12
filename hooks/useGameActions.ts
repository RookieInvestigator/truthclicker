
import { useCallback } from 'react';
import { GameState, ResourceType, LogEntry, Artifact, ChoiceOption, GameEvent } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { POSSIBLE_EVENTS } from '../data/events';
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

  const buyBuilding = useCallback((id: string) => {
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
  }, [addLog, setGameState]);

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
  }, [addLog, setGameState]);

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
                       if (Math.random() > 0.8) { secondaryRes = ResourceType.FOSSIL; secondaryAmount = 1; }
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
    handleMakeChoice
  };
};
