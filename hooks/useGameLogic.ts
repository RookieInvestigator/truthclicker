
import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, ResourceType, LogEntry, Artifact, GameEvent, GameSettings, ChoiceEventDefinition, ChoiceOption } from '../types';
import { TICK_RATE, AUTOSAVE_INTERVAL } from '../constants';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { FLAVOR_MESSAGES } from '../data/flavor';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS } from '../data/choiceEvents'; 
import { generateArtifact } from '../utils/generator';

export const useGameLogic = () => {
  const [gameState, setGameState] = useState<GameState>({
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
      [ResourceType.REALITY]: 0,      
      
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
        showCommonArtifactLogs: true,
        showBuildingLogs: true,
        showFlavorText: true,
        disableChoiceEvents: false, 
    },
    startTime: Date.now(),
    depth: 0,
    luckBoostEndTime: 0, 
  });

  const [logs, setLogs] = useState<LogEntry[]>([]);
  const [lastTick, setLastTick] = useState<number>(Date.now());
  const stateRef = useRef(gameState);
  stateRef.current = gameState;

  const addLog = useCallback((message: string, type: LogEntry['type'] = 'info') => {
    setLogs(prev => [
      ...prev, 
      { 
        id: Date.now() + Math.random(), 
        timestamp: new Date().toLocaleTimeString('en-US', {hour12: false}), 
        message, 
        type 
      }
    ].slice(-50));
  }, []);

  const calculateTotalProduction = useCallback((state: GameState) => {
    // 1. Initialize Containers
    const grossProduction: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 0;
        return acc;
    }, {} as Record<ResourceType, number>);

    const grossConsumption: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 0;
        return acc;
    }, {} as Record<ResourceType, number>);

    // Base Multipliers (Techs + Building Global Effects) - Starts at 1.0 (100%)
    const multipliers: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 1;
        return acc;
    }, {} as Record<ResourceType, number>);

    // Event Multipliers - Starts at 1.0
    const eventMults: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 1;
        return acc;
    }, {} as Record<ResourceType, number>);

    // 2. Identify Starved Resources
    const starvedResources = new Set<ResourceType>();
    (Object.entries(state.resources) as [ResourceType, number][]).forEach(([res, amount]) => {
        if (amount <= 0) starvedResources.add(res);
    });

    // 3. Apply Tech Multipliers (Additive to Base)
    state.researchedTechs.forEach(techId => {
        const tech = TECHS.find(t => t.id === techId);
        if (tech?.effects.resourceMultipliers) {
            (Object.entries(tech.effects.resourceMultipliers) as [ResourceType, number][]).forEach(([res, val]) => {
                multipliers[res] += val;
            });
        }
    });

    // 4. Calculate Building Output (Split into Gross Prod & Cons)
    Object.entries(state.buildings).forEach(([id, count]) => {
      if (count <= 0) return;
      const building = BUILDINGS.find(b => b.id === id);
      if (!building) return;

      // Check Operation Status
      let isOperational = true;
      if (building.baseProduction) {
          for (const [res, amount] of Object.entries(building.baseProduction)) {
              if (amount < 0 && starvedResources.has(res as ResourceType)) {
                  isOperational = false;
                  break;
              }
          }
      }

      if (isOperational) {
        // Production
        if (building.baseProduction) {
            (Object.entries(building.baseProduction) as [ResourceType, number][]).forEach(([res, amount]) => {
                if (amount > 0) {
                    grossProduction[res] += amount * count;
                } else {
                    grossConsumption[res] += Math.abs(amount) * count; // Store as positive magnitude
                }
            });
        }
        // Building Global Multipliers (Additive)
        if (building.globalMultipliers) {
            (Object.entries(building.globalMultipliers) as [ResourceType, number][]).forEach(([res, percent]) => {
                multipliers[res] += percent * count;
            });
        }
      }
    });

    // 5. Apply Artifact Multipliers (Multiplicative to Base)
    state.artifacts.forEach(art => {
      if (art.bonusType === 'production_multiplier' && art.targetResource) {
          multipliers[art.targetResource] *= art.bonusValue;
      }
    });

    // 6. Calculate Event Multipliers
    state.activeEvents.forEach(evt => {
        if (evt.multipliers) {
            (Object.entries(evt.multipliers) as [ResourceType, number][]).forEach(([res, val]) => {
                eventMults[res] *= val;
            });
        }
    });

    // 7. Final Net Calculation
    // Logic: Net = (Gross * BaseMults * EventMults) - GrossConsumption
    const netProduction: Record<ResourceType, number> = {} as Record<ResourceType, number>;
    
    (Object.values(ResourceType) as ResourceType[]).forEach(res => {
        let produced = grossProduction[res];
        
        // Apply multipliers only if there is production
        if (produced > 0) {
            produced *= multipliers[res]; // Apply Tech/Building/Artifacts
            produced *= eventMults[res];  // Apply Events
        }

        const consumed = grossConsumption[res]; // Consumption is raw, unaffected by multipliers
        
        netProduction[res] = produced - consumed;
    });

    return netProduction;
  }, []);

  const calculateClickPower = useCallback(() => {
    let base = 1;
    let multiplier = 1;

    // Artifacts
    stateRef.current.artifacts.forEach(art => {
      if (art.bonusType === 'click_power') base += art.bonusValue;
    });

    // Techs (New Logic)
    stateRef.current.researchedTechs.forEach(techId => {
        const tech = TECHS.find(t => t.id === techId);
        if (tech?.effects.clickPowerMult) {
            multiplier += tech.effects.clickPowerMult;
        }
    });

    const production = calculateTotalProduction(stateRef.current);
    base += Math.max(0, production[ResourceType.INFO]) * 0.05; 
    
    return Math.floor(base * multiplier);
  }, [calculateTotalProduction]);

  const calculateGlobalCostReduction = useCallback(() => {
    let reduction = 0;
    
    // Artifacts
    stateRef.current.artifacts.forEach(art => {
        if (art.bonusType === 'cost_reduction') reduction += art.bonusValue;
    });

    // Techs (New Logic)
    stateRef.current.researchedTechs.forEach(techId => {
        const tech = TECHS.find(t => t.id === techId);
        if (tech?.effects.globalCostReduction) {
            reduction += tech.effects.globalCostReduction;
        }
    });

    return Math.min(0.8, reduction);
  }, []);

  const calculateRecycleEfficiency = useCallback(() => {
      let efficiency = 1.0;
      stateRef.current.researchedTechs.forEach(techId => {
        const tech = TECHS.find(t => t.id === techId);
        if (tech?.effects.recycleEfficiency) {
            efficiency += tech.effects.recycleEfficiency;
        }
      });
      return efficiency;
  }, []);

  // --- Actions ---
  const toggleSetting = useCallback((key: keyof GameSettings) => {
      setGameState(prev => ({
          ...prev,
          settings: {
              ...prev.settings,
              [key]: !prev.settings[key]
          }
      }));
  }, []);

  // NEW: Handle Choice Made
  const handleMakeChoice = useCallback((option: ChoiceOption) => {
      setGameState(prev => {
          const nextRes = { ...prev.resources };
          const nextBuildings = { ...prev.buildings };
          
          // Deduct Cost
          if (option.cost) {
              (Object.entries(option.cost) as [ResourceType, number][]).forEach(([res, val]) => {
                  nextRes[res] -= val;
              });
          }

          // Apply Resource Reward
          if (option.reward.resources) {
              (Object.entries(option.reward.resources) as [ResourceType, number][]).forEach(([res, val]) => {
                  nextRes[res] = (nextRes[res] || 0) + val;
              });
          }

          // Apply Building Reward
          if (option.reward.buildingId) {
              const currentCount = nextBuildings[option.reward.buildingId] || 0;
              nextBuildings[option.reward.buildingId] = currentCount + 1;
              const buildingName = BUILDINGS.find(b => b.id === option.reward.buildingId)?.name || 'Unknown Building';
              addLog(`获得建筑: ${buildingName}`, 'success');
          }

          // Trigger Linked Event
          let newEvents = [...prev.activeEvents];
          if (option.reward.triggerEventId) {
              const evtTemplate = POSSIBLE_EVENTS.find(e => e.id === option.reward.triggerEventId);
              if (evtTemplate) {
                  const newEvent: GameEvent = {
                      ...evtTemplate,
                      startTime: Date.now(),
                      id: `${evtTemplate.id}_triggered_${Date.now()}`
                  };
                  newEvents.push(newEvent);
                  addLog(`决策结果: 触发了 [${newEvent.name}]`, newEvent.type === 'negative' ? 'warning' : 'success');
              }
          } else {
              addLog(`决策执行完毕: ${option.label}`, 'success');
          }

          return {
              ...prev,
              resources: nextRes,
              buildings: nextBuildings,
              activeEvents: newEvents,
              pendingChoice: null // Close modal
          };
      });
  }, [addLog]);

  // NEW: Manual Reality Flush
  const triggerRealityFlush = useCallback(() => {
      const COST = 20;
      if (stateRef.current.resources[ResourceType.REALITY] < COST) {
          addLog("现实稳定指数不足，无法执行修正", "warning");
          return;
      }

      setGameState(prev => {
          // Remove ALL events (Clean slate)
          const removedCount = prev.activeEvents.length;
          
          if (removedCount === 0) {
              addLog("现实读数稳定，无需重置", "info");
              return prev;
          }

          addLog(`>>> 现实重置启动：强制归零了 ${removedCount} 个时间线波动`, "rare");
          
          return {
              ...prev,
              resources: {
                  ...prev.resources,
                  [ResourceType.REALITY]: prev.resources[ResourceType.REALITY] - COST
              },
              activeEvents: [] // Clear all
          }
      });
  }, [addLog]);

  // NEW: Manual Probability Drive
  const triggerProbabilityDrive = useCallback(() => {
      const COST = 5;
      const DURATION = 60000; // 60s
      
      if (stateRef.current.resources[ResourceType.PROBABILITY] < COST) {
          addLog("正概率不足，无法启动引擎", "warning");
          return;
      }

      setGameState(prev => {
          addLog(">>> 概率引擎过载：幸运值极幅提升 (60s)", "rare");
          return {
              ...prev,
              resources: {
                  ...prev.resources,
                  [ResourceType.PROBABILITY]: prev.resources[ResourceType.PROBABILITY] - COST
              },
              luckBoostEndTime: Date.now() + DURATION
          };
      });
  }, [addLog]);

  const handleManualMine = useCallback(() => {
    const amount = calculateClickPower();
    const extra: Partial<Record<ResourceType, number>> = {};
    
    // Manual Click Random Drops
    if (Math.random() < 0.02) extra[ResourceType.CLUE] = 1;
    if (Math.random() < 0.05) extra[ResourceType.FUNDS] = 0.5;
    if (Math.random() < 0.01 && stateRef.current.totalInfoMined > 1000) extra[ResourceType.CULTURE] = 0.1; 
    
    // Found a cardboard box while digging?
    if (Math.random() < 0.1) extra[ResourceType.CARDBOARD] = 1; 

    setGameState(prev => {
        const res = { ...prev.resources };
        res[ResourceType.INFO] += amount;
        (Object.entries(extra) as [ResourceType, number][]).forEach(([key, val]) => {
            res[key] += val;
        });
        return { ...prev, resources: res, totalInfoMined: prev.totalInfoMined + amount };
    });
  }, [calculateClickPower]);

  const buyBuilding = useCallback((buildingId: string) => {
    const building = BUILDINGS.find(b => b.id === buildingId);
    if (!building) return;

    const count = stateRef.current.buildings[buildingId] || 0;
    const reduction = calculateGlobalCostReduction();
    const costs: Partial<Record<ResourceType, number>> = {};
    let canAfford = true;

    // Standard Cost Check
    (Object.entries(building.baseCosts) as [ResourceType, number][]).forEach(([res, base]) => {
        let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
        cost = Math.floor(cost * (1 - reduction));
        costs[res] = Math.max(1, cost);
        if (stateRef.current.resources[res] < costs[res]!) canAfford = false;
    });

    // Starvation Purchase Check
    if (building.baseProduction) {
        for (const [res, amount] of Object.entries(building.baseProduction)) {
             if (amount < 0 && stateRef.current.resources[res as ResourceType] <= 0) {
                 canAfford = false;
                 break; 
             }
        }
    }

    if (canAfford) {
      setGameState(prev => {
        const nextRes = { ...prev.resources };
        (Object.entries(costs) as [ResourceType, number][]).forEach(([res, amt]) => {
            nextRes[res] -= amt;
        });
        return { ...prev, resources: nextRes, buildings: { ...prev.buildings, [buildingId]: count + 1 } };
      });
      if (stateRef.current.settings.showBuildingLogs) {
          addLog(`[Purchased] ${building.name}`, 'success');
      }
    } else {
      let isStarved = false;
      if (building.baseProduction) {
        for (const [res, amount] of Object.entries(building.baseProduction)) {
             if (amount < 0 && stateRef.current.resources[res as ResourceType] <= 0) {
                 isStarved = true; 
                 break;
             }
        }
      }
      if (isStarved) {
          addLog('无法购买：缺少维护所需的资源', 'warning');
      } else {
          addLog('资源不足', 'warning');
      }
    }
  }, [addLog, calculateGlobalCostReduction]);

  const sellBuilding = useCallback((buildingId: string) => {
    const building = BUILDINGS.find(b => b.id === buildingId);
    if (!building) return;

    const count = stateRef.current.buildings[buildingId] || 0;
    if (count <= 0) return;

    const refundRatio = 0.5;
    const reduction = calculateGlobalCostReduction(); 
    
    // Calculate refund based on the cost paid for the LAST building (count - 1)
    const refund: Partial<Record<ResourceType, number>> = {};
    (Object.entries(building.baseCosts) as [ResourceType, number][]).forEach(([res, base]) => {
        // Cost of the (count-1)th building: base * multiplier^(count-1)
        let cost = Math.floor(base * Math.pow(building.costMultiplier, count - 1));
        cost = Math.floor(cost * (1 - reduction));
        refund[res] = Math.floor(cost * refundRatio);
    });

    setGameState(prev => {
        const nextRes = { ...prev.resources };
        (Object.entries(refund) as [ResourceType, number][]).forEach(([res, amt]) => {
            nextRes[res] = (nextRes[res] || 0) + amt;
        });
        const nextBuildings = { ...prev.buildings };
        nextBuildings[buildingId] = Math.max(0, count - 1);
        
        return { ...prev, resources: nextRes, buildings: nextBuildings };
    });
    
    if (stateRef.current.settings.showBuildingLogs) {
        addLog(`[拆除] ${building.name} (返还50%)`, 'warning'); 
    }
  }, [addLog, calculateGlobalCostReduction]);

  const researchTech = useCallback((techId: string) => {
      const tech = TECHS.find(t => t.id === techId);
      if (!tech || stateRef.current.researchedTechs.includes(techId)) return;

      // EXCLUSIVE TECH CHECK
      if (tech.exclusiveWith) {
          const hasConflict = tech.exclusiveWith.some(conflictId => stateRef.current.researchedTechs.includes(conflictId));
          if (hasConflict) {
              addLog('路径冲突：已选择互斥的技术路线', 'warning');
              return;
          }
      }

      const reduction = calculateGlobalCostReduction();
      let canAfford = true;
      const finalCosts: Partial<Record<ResourceType, number>> = {};

      (Object.entries(tech.costs) as [ResourceType, number][]).forEach(([res, cost]) => {
          const reduced = Math.max(1, Math.floor(cost * (1 - reduction)));
          finalCosts[res] = reduced;
          if (stateRef.current.resources[res] < reduced) canAfford = false;
      });

      if (canAfford) {
        setGameState(prev => {
            const nextRes = { ...prev.resources };
            (Object.entries(finalCosts) as [ResourceType, number][]).forEach(([res, amt]) => nextRes[res] -= amt);
            return { ...prev, resources: nextRes, researchedTechs: [...prev.researchedTechs, techId] };
        });
        addLog(`[Learned] ${tech.name} 完成`, 'success');
        if (tech.effects.unlockMessage) addLog(tech.effects.unlockMessage, 'info');
      } else {
        addLog('资源不足', 'warning');
      }
  }, [addLog, calculateGlobalCostReduction]);

  const recycleArtifact = useCallback((target: Artifact) => {
     let rewardAmount = 50;
     let rewardType = ResourceType.INFO;
     
     if (!target.isProcedural) {
         rewardType = ResourceType.FUNDS;
         if (target.rarity === 'rare') rewardAmount = 250;
         if (target.rarity === 'legendary') rewardAmount = 1000;
         if (target.rarity === 'mythic') rewardAmount = 5000;
     } else {
          if (target.rarity === 'rare') { rewardAmount = 100; rewardType = ResourceType.FUNDS; }
          if (target.rarity === 'legendary') { rewardAmount = 50; rewardType = ResourceType.CULTURE; }
          if (target.rarity === 'mythic') { rewardAmount = 5; rewardType = ResourceType.KNOWLEDGE; }
          if (target.rarity === 'anomaly') { rewardAmount = 1; rewardType = ResourceType.TECH_CAPITAL; }
     }

     // Apply Tech Efficiency Multiplier
     const efficiency = calculateRecycleEfficiency();
     rewardAmount = Math.max(1, Math.floor(rewardAmount * efficiency));

     setGameState(prev => {
        const remaining = prev.artifacts.filter(a => a.id !== target.id);
        const res = { ...prev.resources };
        res[rewardType] += rewardAmount;
        res[ResourceType.CARDBOARD] += 1;
        
        return { ...prev, artifacts: remaining, resources: res };
     });
     addLog(`已移除: ${target.name} (+${rewardAmount} ${rewardType})`, 'info');
  }, [addLog, calculateRecycleEfficiency]);

  const recycleAllCommons = useCallback(() => {
     const efficiency = calculateRecycleEfficiency();
     setGameState(prev => {
         const toKeep = prev.artifacts.filter(a => !(a.isProcedural && a.rarity === 'common'));
         const removedCount = prev.artifacts.length - toKeep.length;
         if (removedCount === 0) return prev;
         
         const baseReward = removedCount * 50;
         const finalReward = Math.floor(baseReward * efficiency);

         const res = { ...prev.resources };
         res[ResourceType.INFO] += finalReward;
         res[ResourceType.CARDBOARD] += removedCount; 
         
         return { ...prev, artifacts: toKeep, resources: res };
     });
     addLog(`批量清理完成`, 'success');
  }, [addLog, calculateRecycleEfficiency]);

  // --- Save/Load ---
  const saveGame = useCallback(() => {
    localStorage.setItem('deepWebDiggerSave_v25', JSON.stringify(stateRef.current));
    addLog('进度已保存', 'info');
  }, [addLog]);

  const resetGame = useCallback(() => {
    if(confirm("重置所有进度？(Hard Reset?)")) {
      localStorage.removeItem('deepWebDiggerSave_v25');
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('deepWebDiggerSave_v25');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with default state to ensure new resources exist
        setGameState(prev => ({ 
            ...prev, ...parsed,
            resources: { ...prev.resources, ...parsed.resources }, 
            artifacts: parsed.artifacts || [],
            activeEvents: parsed.activeEvents || [], // Load events
            settings: { ...prev.settings, ...(parsed.settings || {}) }, // Merge settings
            luckBoostEndTime: parsed.luckBoostEndTime || 0,
            pendingChoice: null // Always reset pending choice on load
        }));
        addLog('系统恢复成功', 'success');
      } catch (e) { console.error(e); }
    } else {
        addLog('初始化新会话...', 'info');
    }
    const autoSave = setInterval(saveGame, AUTOSAVE_INTERVAL);
    return () => clearInterval(autoSave);
  }, []);

  // --- Game Loop ---
  useEffect(() => {
    const tick = () => {
        const now = Date.now();
        const delta = (now - lastTick) / 1000;
        if (delta < 0.1) return;
        setLastTick(now);

        // --- Event Logic ---
        // 1. Clean up expired events
        let events = stateRef.current.activeEvents.filter(evt => now < evt.startTime + evt.duration * 1000);
        
        // 2. Chance to spawn new event (Standard OR Choice)
        if (events.length < 3 && !stateRef.current.pendingChoice && Math.random() < 0.002) { 
            
            // 20% Chance for a Choice Event (If not disabled)
            if (!stateRef.current.settings.disableChoiceEvents && Math.random() < 0.2) {
                const availableChoices = CHOICE_EVENTS.filter(evt => {
                    if (evt.minDepth && stateRef.current.depth < evt.minDepth) return false;
                    if (evt.reqTech && !evt.reqTech.every(req => stateRef.current.researchedTechs.includes(req))) return false;
                    return true;
                });

                if (availableChoices.length > 0) {
                    const baseChoice = availableChoices[Math.floor(Math.random() * availableChoices.length)];
                    
                    // SHUFFLE AND PICK 3 OPTIONS
                    const shuffledOptions = [...baseChoice.options].sort(() => 0.5 - Math.random());
                    const selectedOptions = shuffledOptions.slice(0, 3);
                    
                    const finalChoice: ChoiceEventDefinition = {
                        ...baseChoice,
                        options: selectedOptions
                    };

                    setGameState(prev => ({ ...prev, pendingChoice: finalChoice }));
                    addLog(`注意：需要介入决策 - ${finalChoice.title}`, 'rare');
                    // Return early so we don't spawn a standard event in the same tick
                    return; 
                }
            }

            // Standard Event Spawn
            // Filter available events based on tech requirements
            const availableEvents = POSSIBLE_EVENTS.filter(evt => {
                // If reqTech is undefined or empty, it's always available
                if (!evt.reqTech || evt.reqTech.length === 0) return true;
                // Otherwise, check if ALL required techs are researched
                return evt.reqTech.every(req => stateRef.current.researchedTechs.includes(req));
            });

            if (availableEvents.length > 0) {
                const newEventTemplate = availableEvents[Math.floor(Math.random() * availableEvents.length)];
                const newEvent: GameEvent = {
                    ...newEventTemplate,
                    startTime: now,
                    id: `${newEventTemplate.id}_${now}`
                };
                events = [...events, newEvent];
                addLog(`随机事件: ${newEvent.name}`, newEvent.type === 'positive' ? 'success' : newEvent.type === 'negative' ? 'warning' : 'glitch');
            }
        }

        const rates = calculateTotalProduction({ ...stateRef.current, activeEvents: events });
        
        // --- Calculate Artifact Drop Chance ---
        let luck = 1.0;
        let baseChance = 0.015;

        // NEW: Probability Drive Boost
        const isBoosted = now < stateRef.current.luckBoostEndTime;
        if (isBoosted) {
            luck *= 5.0; // 5x luck
            baseChance *= 2.0; // Double frequency
        }

        // 1. Artifact Bonus
        stateRef.current.artifacts.forEach(a => { if (a.bonusType === 'luck') luck *= a.bonusValue; });
        
        // 2. Tech Bonus
        stateRef.current.researchedTechs.forEach(techId => {
             const tech = TECHS.find(t => t.id === techId);
             if (tech?.effects.artifactChanceMult) {
                 baseChance *= (1 + tech.effects.artifactChanceMult);
             }
             if (tech?.effects.artifactRarityBonus) {
                 luck *= (1 + tech.effects.artifactRarityBonus);
             }
        });

        const chance = baseChance * luck;

        // --- Artifact Generation ---
        let newArtifact: Artifact | null = null;
        if (Math.random() < chance) {
            const uniqueRoll = Math.random();
            const collectedIds = stateRef.current.artifacts.filter(a => !a.isProcedural).map(a => a.id);
            const availableUniques = UNIQUE_ARTIFACTS.filter(a => !collectedIds.includes(a.id));
            const uniqueChance = 0.05 * luck; // Boosted luck increases Unique chance

            if (uniqueRoll < uniqueChance && availableUniques.length > 0) {
                 const totalWeight = availableUniques.reduce((sum, a) => sum + a.dropChanceWeight, 0);
                 let randomWeight = Math.random() * totalWeight;
                 for (const art of availableUniques) {
                     randomWeight -= art.dropChanceWeight;
                     if (randomWeight <= 0) { newArtifact = art; break; }
                 }
            } else {
                newArtifact = generateArtifact(stateRef.current.depth, stateRef.current.researchedTechs);
                
                // Boosted Rarity Check if active
                if (isBoosted && newArtifact.rarity === 'common' && Math.random() < 0.5) {
                    newArtifact.rarity = 'rare'; // Upgrade common to rare 50% of time during boost
                }
            }
        }

        if (stateRef.current.settings.showFlavorText && Math.random() < 0.005) {
            addLog(FLAVOR_MESSAGES[Math.floor(Math.random() * FLAVOR_MESSAGES.length)]);
        }
        
        if (newArtifact) {
            // Log logic based on settings
            const isCommon = newArtifact.rarity === 'common';
            if (!isCommon || stateRef.current.settings.showCommonArtifactLogs) {
                addLog(`发现新项目: ${newArtifact.name}`, isCommon ? 'info' : 'success');
            }
        }

        setGameState(prev => {
            const nextRes = { ...prev.resources };
            (Object.entries(rates) as [ResourceType, number][]).forEach(([res, rate]) => {
                nextRes[res] = Math.max(0, nextRes[res] + rate * delta);
            });
            
            const nextTotalInfo = prev.totalInfoMined + Math.max(0, rates[ResourceType.INFO] * delta);
            const depth = Math.floor(Math.log10(nextTotalInfo + 1) * 10); 
            
            return {
                ...prev,
                resources: nextRes,
                totalInfoMined: nextTotalInfo,
                depth,
                artifacts: newArtifact ? [...prev.artifacts, newArtifact] : prev.artifacts,
                activeEvents: events
            };
        });
    };
    
    const interval = setInterval(tick, TICK_RATE);
    return () => clearInterval(interval);
  }, [lastTick, calculateTotalProduction, addLog]);

  return {
    gameState,
    logs,
    calculateTotalProduction,
    calculateClickPower,
    calculateGlobalCostReduction,
    handleManualMine,
    buyBuilding,
    sellBuilding,
    researchTech,
    recycleArtifact,
    recycleAllCommons,
    saveGame,
    resetGame,
    toggleSetting,
    triggerRealityFlush, 
    triggerProbabilityDrive,
    handleMakeChoice // Exported
  };
};
