
import { useState, useEffect, useCallback, useRef } from 'react';
import { GameState, ResourceType, LogEntry, Artifact } from '../types';
import { TICK_RATE, AUTOSAVE_INTERVAL } from '../constants';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';
import { FLAVOR_MESSAGES } from '../data/flavor';
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
      [ResourceType.POWER]: 0,    // NEW
      
      [ResourceType.CARDBOARD]: 0,
      [ResourceType.SPAM]: 0,     // NEW
      
      [ResourceType.LORE]: 0,           // NEW
      [ResourceType.ANCIENT_WISDOM]: 0, // NEW

      [ResourceType.STORY]: 0,
      [ResourceType.RUMORS]: 0,       // NEW
      [ResourceType.PANIC]: 0,
      [ResourceType.MIND_CONTROL]: 0, // NEW
      
      [ResourceType.CLUE]: 0,
      [ResourceType.KNOWLEDGE]: 0,
      [ResourceType.TRUTH]: 0,
    },
    totalInfoMined: 0, 
    buildings: {},
    researchedTechs: [],
    artifacts: [],
    startTime: Date.now(),
    depth: 0,
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
    // Initialize all to 0
    const netProduction: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 0;
        return acc;
    }, {} as Record<ResourceType, number>);

    // Initialize multipliers to 1
    const multipliers: Record<ResourceType, number> = Object.values(ResourceType).reduce((acc, res) => {
        acc[res] = 1;
        return acc;
    }, {} as Record<ResourceType, number>);

    // Tech Multipliers
    state.researchedTechs.forEach(techId => {
        const tech = TECHS.find(t => t.id === techId);
        if (tech?.effects.resourceMultipliers) {
            (Object.entries(tech.effects.resourceMultipliers) as [ResourceType, number][]).forEach(([res, val]) => {
                multipliers[res] += val;
            });
        }
    });

    // Building Production
    Object.entries(state.buildings).forEach(([id, count]) => {
      if (count <= 0) return;
      const building = BUILDINGS.find(b => b.id === id);
      if (!building) return;

      if (building.baseProduction) {
        (Object.entries(building.baseProduction) as [ResourceType, number][]).forEach(([res, amount]) => {
           netProduction[res] += amount * count;
        });
      }
      if (building.globalMultipliers) {
        (Object.entries(building.globalMultipliers) as [ResourceType, number][]).forEach(([res, percent]) => {
           multipliers[res] += percent * count;
        });
      }
    });

    // Artifact Multipliers
    state.artifacts.forEach(art => {
      if (art.bonusType === 'production_multiplier' && art.targetResource) {
          multipliers[art.targetResource] *= art.bonusValue;
      }
    });

    const finalRates: Record<ResourceType, number> = { ...netProduction };
    (Object.keys(finalRates) as ResourceType[]).forEach(key => {
        // Apply multipliers to positive production only
        if (finalRates[key] > 0) finalRates[key] *= multipliers[key];
    });

    return finalRates;
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

    (Object.entries(building.baseCosts) as [ResourceType, number][]).forEach(([res, base]) => {
        let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
        cost = Math.floor(cost * (1 - reduction));
        costs[res] = Math.max(1, cost);
        if (stateRef.current.resources[res] < costs[res]!) canAfford = false;
    });

    if (canAfford) {
      setGameState(prev => {
        const nextRes = { ...prev.resources };
        (Object.entries(costs) as [ResourceType, number][]).forEach(([res, amt]) => {
            nextRes[res] -= amt;
        });
        return { ...prev, resources: nextRes, buildings: { ...prev.buildings, [buildingId]: count + 1 } };
      });
      addLog(`[Purchased] ${building.name}`, 'success');
    } else {
      addLog('资源不足', 'warning');
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
    localStorage.setItem('deepWebDiggerSave_v24', JSON.stringify(stateRef.current));
    addLog('进度已保存', 'info');
  }, [addLog]);

  const resetGame = useCallback(() => {
    if(confirm("重置所有进度？(Hard Reset?)")) {
      localStorage.removeItem('deepWebDiggerSave_v24');
      window.location.reload();
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem('deepWebDiggerSave_v24');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        // Merge with default state to ensure new resources exist
        setGameState(prev => ({ 
            ...prev, ...parsed,
            resources: { ...prev.resources, ...parsed.resources }, 
            artifacts: parsed.artifacts || [] 
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

        const rates = calculateTotalProduction(stateRef.current);
        
        // --- Calculate Artifact Drop Chance ---
        let luck = 1.0;
        let baseChance = 0.015;

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
            const uniqueChance = 0.05 * luck;

            if (uniqueRoll < uniqueChance && availableUniques.length > 0) {
                 const totalWeight = availableUniques.reduce((sum, a) => sum + a.dropChanceWeight, 0);
                 let randomWeight = Math.random() * totalWeight;
                 for (const art of availableUniques) {
                     randomWeight -= art.dropChanceWeight;
                     if (randomWeight <= 0) { newArtifact = art; break; }
                 }
            } else {
                newArtifact = generateArtifact(stateRef.current.depth, stateRef.current.researchedTechs);
            }
        }

        if (Math.random() < 0.005) addLog(FLAVOR_MESSAGES[Math.floor(Math.random() * FLAVOR_MESSAGES.length)]);
        if (newArtifact) addLog(`发现新项目: ${newArtifact.name}`, newArtifact.rarity === 'common' ? 'info' : 'success');

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
                artifacts: newArtifact ? [...prev.artifacts, newArtifact] : prev.artifacts
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
    researchTech,
    recycleArtifact,
    recycleAllCommons,
    saveGame,
    resetGame
  };
};
