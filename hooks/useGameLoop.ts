
import React, { useEffect } from 'react';
import { GameState, ResourceType, GameEvent, AppNotification } from '../types';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS } from '../data/choiceEvents';
import { TECHS } from '../data/techs';
import { BUILDINGS } from '../data/buildings';
import { BOARD_POSTS } from '../data/boardPosts';
import { generateArtifact } from '../utils/generator';
import { TICK_RATE, AUTOSAVE_INTERVAL } from '../constants';
import { UNIQUE_ARTIFACTS } from '../data/artifacts';

export const useGameLoop = (
    setGameState: React.Dispatch<React.SetStateAction<GameState>>,
    addLog: (msg: string, type?: any) => void,
    calculators: any,
    lastSaveTime: React.MutableRefObject<number>
) => {
  const { calculateTotalProduction } = calculators;

  useEffect(() => {
    const timer = setInterval(() => {
        setGameState(prev => {
            const now = Date.now();
            const deltaSec = TICK_RATE / 1000;
            const production = calculateTotalProduction(prev);
            
            const newRes = { ...prev.resources };
            Object.entries(production).forEach(([res, amount]) => {
                newRes[res as ResourceType] += (amount as number) * deltaSec;
            });

            // --- REALITY MECHANICS ---
            const reality = newRes[ResourceType.REALITY];
            
            // 1. Instability Factor (0.0 to 1.0 when Reality goes from 50 to 0)
            let instability = 0;
            if (reality < 50) {
                instability = (50 - reality) / 50; 
            }

            // 2. Reality Collapse Penalty (Leakage when Reality <= 0)
            if (reality <= 0) {
                newRes[ResourceType.INFO] = Math.max(0, newRes[ResourceType.INFO] * 0.99); // 1% Decay
                newRes[ResourceType.OPS] = Math.max(0, newRes[ResourceType.OPS] * 0.99);
                newRes[ResourceType.FUNDS] = Math.max(0, newRes[ResourceType.FUNDS] * 0.99);
            }

            // --- UNLOCK CHECK SYSTEM ---
            const newUnlockedIds: string[] = [];
            const safeUnlockedItemIds = prev.unlockedItemIds || [];

            // Check Buildings
            BUILDINGS.forEach(b => {
                if (safeUnlockedItemIds.includes(b.id)) return;
                
                const isUnlocked = (prev.totalInfoMined >= b.unlockRequirement * 0.5 || b.unlockRequirement === 0) &&
                                   (!b.requireTech || b.requireTech.every(t => prev.researchedTechs.includes(t)));
                
                if (isUnlocked) {
                    newUnlockedIds.push(b.id);
                }
            });

            // Check Posts
            BOARD_POSTS.forEach(p => {
                if (safeUnlockedItemIds.includes(p.id)) return;
                
                const hasReqTech = !p.reqTech || p.reqTech.every(t => prev.researchedTechs.includes(t));
                const isHidden = p.hideIfTech && p.hideIfTech.some(t => prev.researchedTechs.includes(t));
                const hasDepth = !p.minDepth || prev.depth >= p.minDepth;

                if (hasReqTech && !isHidden && hasDepth) {
                    newUnlockedIds.push(p.id);
                }
            });

            // Random Events / Artifacts
            let newArtifacts = [...prev.artifacts];
            let newActiveEvents = prev.activeEvents.filter(e => (now - e.startTime) < e.duration * 1000);
            let newPendingChoice = prev.pendingChoice;
            let updatedFoundUniqueIds = [...(prev.foundUniqueItemIds || [])];

            // Artifact Drop Logic
            let artifactChance = 0.01; // Base chance increased to 1% per tick
            if (prev.luckBoostEndTime > now) artifactChance *= 2;
            
            // Instability Boosts Drop Rate (Chaos reveals secrets)
            artifactChance *= (1 + instability); // Up to 2x bonus at 0 reality

            TECHS.forEach(t => {
                if (prev.researchedTechs.includes(t.id) && t.effects.artifactChanceMult) {
                    artifactChance *= (1 + t.effects.artifactChanceMult);
                }
            });

            if (Math.random() < artifactChance) {
                const newArt = generateArtifact(prev.depth, prev.researchedTechs);
                newArtifacts.push(newArt);
                
                // Track discovered unique items
                if (prev.settings.showCommonArtifactLogs || newArt.rarity !== 'common') {
                     addLog(`获取物品: ${newArt.name} [${newArt.rarity}]`, 'info');
                }
            }

            // Sync foundUniqueItemIds with current inventory (just in case)
            newArtifacts.forEach(art => {
                const isRealUnique = UNIQUE_ARTIFACTS.find(u => u.id === art.id || (u.name === art.name && u.rarity === art.rarity));
                if (isRealUnique && !updatedFoundUniqueIds.includes(isRealUnique.id)) {
                    updatedFoundUniqueIds.push(isRealUnique.id);
                }
            });

            // Random Events Logic
            if (!prev.settings.disableChoiceEvents && !newPendingChoice) {
                // Choice Event Chance - Increased to 0.25% per tick
                if (Math.random() < 0.0025) { 
                     const validChoices = CHOICE_EVENTS.filter(c => (c.minDepth || 0) <= prev.depth);
                     if (validChoices.length > 0) {
                         const choice = validChoices[Math.floor(Math.random() * validChoices.length)];
                         newPendingChoice = choice;
                     }
                }
                
                // Standard Event Chance - Increased to 0.5% per tick
                let eventProbability = 0.005;
                // Instability Boosts Event Rate (Chaos causes glitches)
                eventProbability *= (1 + instability * 3); // Up to 4x event rate at 0 reality

                if (Math.random() < eventProbability) {
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
                 const saveState = {
                     ...prev, 
                     resources: newRes, 
                     artifacts: newArtifacts, 
                     activeEvents: newActiveEvents,
                     unlockedItemIds: [...safeUnlockedItemIds, ...newUnlockedIds],
                     foundUniqueItemIds: updatedFoundUniqueIds,
                     lastSaveTime: now // Update save time
                 };
                 localStorage.setItem('truth_clicker_save_v2', JSON.stringify(saveState));
                 lastSaveTime.current = now;
                 if (prev.settings.showAutoSaveLogs) {
                     // Optionally log autosave (kept silent usually to avoid spam)
                 }
            }

            return {
                ...prev,
                resources: newRes,
                artifacts: newArtifacts,
                activeEvents: newActiveEvents,
                pendingChoice: newPendingChoice,
                depth: prev.depth + (production[ResourceType.INFO] > 0 ? ((production[ResourceType.INFO] as number) * deltaSec * 0.001) : 0),
                unlockedItemIds: [...safeUnlockedItemIds, ...newUnlockedIds],
                foundUniqueItemIds: updatedFoundUniqueIds,
                lastSaveTime: now // Update in state mostly for consistency, IO usually handles persistence
            };
        });
    }, TICK_RATE);
    return () => clearInterval(timer);
  }, [calculators, addLog, setGameState, lastSaveTime]);
};
