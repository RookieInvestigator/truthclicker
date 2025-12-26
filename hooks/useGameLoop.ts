
import React, { useEffect } from 'react';
import { GameState, ResourceType, GameEvent, AppNotification } from '../types';
import { POSSIBLE_EVENTS } from '../data/events';
import { CHOICE_EVENTS } from '../data/choiceEvents';
import { TECHS } from '../data/techs';
import { BUILDINGS } from '../data/buildings';
import { BOARD_POSTS } from '../data/boardPosts';
import { TRIGGERABLE_EMAILS } from '../data/content/emails';
import { ACHIEVEMENTS } from '../data/content/achievements';
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
            let instability = 0;
            if (reality < 50) {
                instability = (50 - reality) / 50; 
            }
            if (reality <= 0) {
                newRes[ResourceType.INFO] = Math.max(0, newRes[ResourceType.INFO] * 0.99); 
                newRes[ResourceType.OPS] = Math.max(0, newRes[ResourceType.OPS] * 0.99);
                newRes[ResourceType.FUNDS] = Math.max(0, newRes[ResourceType.FUNDS] * 0.99);
            }

            // --- UNLOCK CHECK SYSTEM ---
            const newUnlockedIds: string[] = [];
            const safeUnlockedItemIds = prev.unlockedItemIds || [];

            BUILDINGS.forEach(b => {
                if (safeUnlockedItemIds.includes(b.id)) return;
                const isUnlocked = (prev.totalInfoMined >= b.unlockRequirement * 0.5 || b.unlockRequirement === 0) &&
                                   (!b.requireTech || b.requireTech.every(t => prev.researchedTechs.includes(t)));
                if (isUnlocked) newUnlockedIds.push(b.id);
            });

            BOARD_POSTS.forEach(p => {
                if (safeUnlockedItemIds.includes(p.id)) return;
                const hasReqTech = !p.reqTech || p.reqTech.every(t => prev.researchedTechs.includes(t));
                const isHidden = p.hideIfTech && p.hideIfTech.some(t => prev.researchedTechs.includes(t));
                const hasDepth = !p.minDepth || prev.depth >= p.minDepth;
                if (hasReqTech && !isHidden && hasDepth) newUnlockedIds.push(p.id);
            });

            // --- NEW: STOCK MARKET FLUCTUATION ---
            const newStocks = { ...prev.stocks };
            if (Math.random() < 0.2) { // Only update stocks every few ticks to reduce jitter
                Object.keys(newStocks).forEach(stockId => {
                    const stock = newStocks[stockId];
                    // Random walk
                    const change = (Math.random() - 0.5) * stock.volatility; 
                    // Production Bias
                    let bias = 0;
                    if (stock.correlation) {
                        const prodRate = production[stock.correlation] || 0;
                        if (prodRate > 0) bias = 0.01;
                        if (prodRate < 0) bias = -0.01;
                    }
                    
                    let nextPrice = stock.currentPrice * (1 + change + bias);
                    nextPrice = Math.max(0.1, nextPrice); // Min price
                    
                    newStocks[stockId] = {
                        ...stock,
                        currentPrice: nextPrice,
                        history: [...stock.history.slice(1), nextPrice]
                    };
                });
            }

            // --- NEW: EMAIL TRIGGERS ---
            let newEmails = [...prev.emails];
            TRIGGERABLE_EMAILS.forEach(email => {
                const alreadyHas = prev.emails.some(e => e.id === email.id);
                if (!alreadyHas && email.reqTech) {
                    const hasTechs = email.reqTech.every(t => prev.researchedTechs.includes(t));
                    if (hasTechs) {
                        newEmails.unshift({ ...email, timestamp: now });
                        addLog(`收到新邮件: ${email.subject}`, 'info');
                    }
                }
            });

            // --- NEW: ACHIEVEMENT CHECKS ---
            let newAchievements = [...prev.achievements];
            ACHIEVEMENTS.forEach(ach => {
                if (!newAchievements.includes(ach.id)) {
                    if (ach.condition(prev)) { // Pass prev state to check
                        newAchievements.push(ach.id);
                        addLog(`成就解锁: ${ach.name}`, 'rare');
                    }
                }
            });

            // --- ARTIFACTS & EVENTS LOGIC (Existing) ---
            let newArtifacts = [...prev.artifacts];
            let newActiveEvents = prev.activeEvents.filter(e => (now - e.startTime) < e.duration * 1000);
            let newPendingChoice = prev.pendingChoice;
            let updatedFoundUniqueIds = [...(prev.foundUniqueItemIds || [])];

            let artifactChance = 0.01; 
            if (prev.luckBoostEndTime > now) artifactChance *= 2;
            artifactChance *= (1 + instability); 

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

            newArtifacts.forEach(art => {
                const isRealUnique = UNIQUE_ARTIFACTS.find(u => u.id === art.id || (u.name === art.name && u.rarity === art.rarity));
                if (isRealUnique && !updatedFoundUniqueIds.includes(isRealUnique.id)) {
                    updatedFoundUniqueIds.push(isRealUnique.id);
                }
            });

            if (!prev.settings.disableChoiceEvents && !newPendingChoice) {
                if (Math.random() < 0.0025) { 
                     const validChoices = CHOICE_EVENTS.filter(c => (c.minDepth || 0) <= prev.depth);
                     if (validChoices.length > 0) {
                         newPendingChoice = validChoices[Math.floor(Math.random() * validChoices.length)];
                     }
                }
                
                let eventProbability = 0.005;
                eventProbability *= (1 + instability * 3);

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
                     emails: newEmails,
                     stocks: newStocks,
                     achievements: newAchievements,
                     lastSaveTime: now 
                 };
                 localStorage.setItem('truth_clicker_save_v2', JSON.stringify(saveState));
                 lastSaveTime.current = now;
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
                emails: newEmails,
                stocks: newStocks,
                achievements: newAchievements,
                lastSaveTime: now 
            };
        });
    }, TICK_RATE);
    return () => clearInterval(timer);
  }, [calculators, addLog, setGameState, lastSaveTime]);
};
