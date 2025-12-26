
import React, { useCallback } from 'react';
import { GameState, ResourceType, LogEntry, Artifact, ChoiceOption, GameEvent } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS, TECH_TRIGGER_MAP, COMBO_EVENT_TRIGGERS } from '../data/choiceEvents';
import { RESOURCE_INFO } from '../constants';
import { generateArtifact } from '../utils/generator';

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

  const debugCheat = useCallback(() => {
      setGameState(prev => ({
          ...prev,
          resources: {
              ...prev.resources,
              [ResourceType.INFO]: prev.resources[ResourceType.INFO] + 10000000,
              [ResourceType.FUNDS]: prev.resources[ResourceType.FUNDS] + 100000
          }
      }));
      addLog("DEBUG: 资源注入成功 (10M INFO, 100K FUNDS)", "glitch");
  }, [setGameState, addLog]);

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

  // --- NEW: EMAIL ACTIONS ---
  const markEmailRead = useCallback((id: string) => {
      setGameState(prev => ({
          ...prev,
          emails: prev.emails.map(e => e.id === id ? { ...e, isRead: true } : e)
      }));
  }, [setGameState]);

  const claimEmailReward = useCallback((id: string) => {
      setGameState(prev => {
          const email = prev.emails.find(e => e.id === id);
          if (!email || !email.rewards || email.isClaimed) return prev;

          const newRes = { ...prev.resources };
          Object.entries(email.rewards).forEach(([res, val]) => {
              newRes[res as ResourceType] += val;
          });

          addLog(`附件领取: 从邮件 [${email.subject}] 获得物资`, 'success');

          return {
              ...prev,
              resources: newRes,
              emails: prev.emails.map(e => e.id === id ? { ...e, isClaimed: true } : e)
          };
      });
  }, [setGameState, addLog]);

  const deleteEmail = useCallback((id: string) => {
      setGameState(prev => ({
          ...prev,
          emails: prev.emails.filter(e => e.id !== id)
      }));
  }, [setGameState]);

  // --- NEW: STOCK ACTIONS ---
  const buyStock = useCallback((stockId: string, amount: number) => {
      setGameState(prev => {
          const stock = prev.stocks[stockId];
          if (!stock) return prev;
          
          const totalCost = stock.currentPrice * amount;
          if (prev.resources[ResourceType.FUNDS] < totalCost) {
              addLog(`资金不足: 无法购买 ${amount} x ${stock.symbol}`, 'warning');
              return prev;
          }

          addLog(`交易执行: 买入 ${amount} ${stock.symbol} @ ${stock.currentPrice.toFixed(2)}`, 'info');

          return {
              ...prev,
              resources: {
                  ...prev.resources,
                  [ResourceType.FUNDS]: prev.resources[ResourceType.FUNDS] - totalCost
              },
              stocks: {
                  ...prev.stocks,
                  [stockId]: { ...stock, owned: stock.owned + amount }
              }
          };
      });
  }, [setGameState, addLog]);

  const sellStock = useCallback((stockId: string, amount: number) => {
      setGameState(prev => {
          const stock = prev.stocks[stockId];
          if (!stock) return prev;
          
          if (stock.owned < amount) return prev;

          const totalValue = stock.currentPrice * amount;
          addLog(`交易执行: 卖出 ${amount} ${stock.symbol} @ ${stock.currentPrice.toFixed(2)}`, 'success');

          return {
              ...prev,
              resources: {
                  ...prev.resources,
                  [ResourceType.FUNDS]: prev.resources[ResourceType.FUNDS] + totalValue
              },
              stocks: {
                  ...prev.stocks,
                  [stockId]: { ...stock, owned: stock.owned - amount }
              }
          };
      });
  }, [setGameState, addLog]);

  const buyBuilding = useCallback((id: string) => {
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

          const newResearchedTechs = [...prev.researchedTechs, id];
          let newPendingChoice = prev.pendingChoice;

          COMBO_EVENT_TRIGGERS.forEach(combo => {
              const hasAllReqs = combo.reqTechs.every(t => newResearchedTechs.includes(t));
              const isRelevantUpdate = combo.reqTechs.includes(id); 
              
              if (hasAllReqs && isRelevantUpdate && !prev.settings.disableChoiceEvents) {
                   const eventDef = CHOICE_EVENTS.find(e => e.id === combo.eventId);
                   if (eventDef) {
                       newPendingChoice = eventDef;
                       addLog(`!!! 奇点临近: 协议冲突检测 !!!`, 'rare');
                   }
              }
          });

          const triggeredEventId = TECH_TRIGGER_MAP[id];
          if (triggeredEventId && !prev.settings.disableChoiceEvents && !newPendingChoice) {
              const eventDef = CHOICE_EVENTS.find(e => e.id === triggeredEventId);
              if (eventDef) {
                  newPendingChoice = eventDef;
              }
          }

          return {
              ...prev,
              resources: newResources,
              researchedTechs: newResearchedTechs,
              pendingChoice: newPendingChoice
          };
      });
  }, [addLog, setGameState, markAsSeen]);

  const checkMissingEvents = useCallback(() => {
      setGameState(prev => {
          let newPendingChoice = prev.pendingChoice;
          let foundMissing = false;

          if (!newPendingChoice && !prev.settings.disableChoiceEvents) {
              COMBO_EVENT_TRIGGERS.forEach(combo => {
                  const hasAllReqs = combo.reqTechs.every(t => prev.researchedTechs.includes(t));
                  const eventDef = CHOICE_EVENTS.find(e => e.id === combo.eventId);
                  let alreadyCompleted = false;
                  if (eventDef) {
                      eventDef.options.forEach(opt => {
                          if (opt.reward.unlockTechId && prev.researchedTechs.includes(opt.reward.unlockTechId)) {
                              alreadyCompleted = true;
                          }
                      });
                  }

                  if (hasAllReqs && !alreadyCompleted && eventDef) {
                      newPendingChoice = eventDef;
                      addLog(`系统自检: 发现未触发的关键事件`, 'warning');
                      foundMissing = true;
                  }
              });
          }

          if (!foundMissing) {
              addLog("系统自检: 未发现遗漏事件", "info");
              return prev;
          }

          return {
              ...prev,
              pendingChoice: newPendingChoice
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

       const isRealUniqueLoot = target.hiddenLootId && target.hiddenLootId !== 'resource_bundle';
       const isStaticUnique = !target.isProcedural;

       if (isRealUniqueLoot) {
           const lootItem = UNIQUE_ARTIFACTS.find(u => u.id === target.hiddenLootId);
           const alreadyHas = prev.artifacts.some(a => a.id === lootItem?.id);
           
           if (lootItem && !alreadyHas) {
               newArtifacts.push(lootItem);
               logMsg = `重大发现: 从 [${target.name}] 中提取出唯一物品 [${lootItem.name}]!`;
               logType = 'rare';
           } else {
               res[ResourceType.KNOWLEDGE] += 10;
               res[ResourceType.FUNDS] += 500;
               logMsg = `调查发现: 包含重复的高价值数据 (+10 Knowledge, +500 Funds)`;
               logType = 'success';
           }
       } 
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
       else {
           let baseInfo = Math.floor(Math.random() * 145) + 5;
           if (target.hiddenLootId === 'resource_bundle') baseInfo *= 5;
           
           const rarityMultMap: Record<string, number> = { 'common': 1, 'rare': 3, 'legendary': 8, 'mythic': 20, 'anomaly': 50 };
           const rarityMult = rarityMultMap[target.rarity] || 1;
           const primaryAmount = Math.floor(baseInfo * rarityMult * efficiency);
           
           res[ResourceType.INFO] += primaryAmount;
           logMsg = `分析完成: +${primaryAmount} 信息流`;
           
           if (['file', 'hardware', 'media'].includes(target.subtype) && Math.random() < 0.05) {
               const recursiveArt = generateArtifact(prev.depth, prev.researchedTechs);
               newArtifacts.push(recursiveArt);
               logMsg += ` | ↳ 发现新物品!`;
               logType = 'success';
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
          
          let newEvents = [...prev.activeEvents];
          if (option.reward.triggerEventId) {
              const evtDef = POSSIBLE_EVENTS.find(e => e.id === option.reward.triggerEventId);
              if (evtDef) {
                  const newEvt: GameEvent = { ...evtDef, startTime: Date.now() };
                  newEvents.push(newEvt);
                  addLog(`Event Triggered: ${newEvt.name}`, newEvt.type === 'negative' ? 'warning' : 'info');
              }
          }

          const newBuildings = { ...prev.buildings };
          if (option.reward.buildingId) {
             newBuildings[option.reward.buildingId] = (newBuildings[option.reward.buildingId] || 0) + 1;
             addLog(`Acquired: ${BUILDINGS.find(b=>b.id===option.reward.buildingId)?.name}`, 'success');
          }

          const newEventUnlockedPosts = [...(prev.eventUnlockedPosts || [])];
          if (option.reward.unlockPostId) {
              if (!newEventUnlockedPosts.includes(option.reward.unlockPostId)) {
                  newEventUnlockedPosts.push(option.reward.unlockPostId);
                  addLog(`Access Granted: New Truth Board Thread Unlocked`, 'rare');
              }
          }

          const newResearchedTechs = [...prev.researchedTechs];
          if (option.reward.unlockTechId) {
              if (!newResearchedTechs.includes(option.reward.unlockTechId)) {
                  newResearchedTechs.push(option.reward.unlockTechId);
                  const tech = TECHS.find(t => t.id === option.reward.unlockTechId);
                  const techName = tech?.name || option.reward.unlockTechId;
                  addLog(`技术路线确立: ${techName}`, 'rare');
                  if (tech && tech.effects.unlockMessage) {
                      addLog(tech.effects.unlockMessage, 'rare');
                  }
              }
          }

          return {
              ...prev,
              resources: newRes,
              activeEvents: newEvents,
              buildings: newBuildings,
              eventUnlockedPosts: newEventUnlockedPosts,
              researchedTechs: newResearchedTechs,
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
    markAsSeen,
    checkMissingEvents,
    debugCheat,
    // New
    markEmailRead,
    claimEmailReward,
    deleteEmail,
    buyStock,
    sellStock
  };
};
