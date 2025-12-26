
import { useState, useCallback, useEffect, useRef } from 'react';
import { GameState, LogEntry, ResourceType } from '../types';
import { useGameCalculators } from './useGameCalculators';
import { useGameIO } from './useGameIO';
import { useGameActions } from './useGameActions';
import { useGameLoop } from './useGameLoop';
import { INITIAL_STATE } from '../data/initialState';
import { calculateProductionRates } from '../utils/productionUtils';

export const useGameLogic = () => {
  const [offlineEarnings, setOfflineEarnings] = useState<{resources: Record<ResourceType, number>, time: number} | null>(null);
  
  // Ref to temporarily hold earnings calculated during initialization so we can show the modal after mount
  const initialEarningsRef = useRef<{resources: Record<ResourceType, number>, time: number} | null>(null);

  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('truth_clicker_save_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        
        // Robust Resource Merging
        const safeResources = { ...INITIAL_STATE.resources };
        if (parsed.resources) {
            Object.keys(parsed.resources).forEach(k => {
                const val = parsed.resources[k];
                if (typeof val === 'number' && !isNaN(val)) {
                    safeResources[k as ResourceType] = val;
                }
            });
        }

        const safeSettings = { ...INITIAL_STATE.settings, ...parsed.settings };
        
        const loadedState: GameState = { 
          ...INITIAL_STATE, 
          ...parsed, 
          resources: safeResources, 
          settings: safeSettings,
          unlockedItemIds: parsed.unlockedItemIds || [],
          seenItemIds: parsed.seenItemIds || [],
          foundUniqueItemIds: parsed.foundUniqueItemIds || [],
          notifications: parsed.notifications || [],
          lastSaveTime: parsed.lastSaveTime || Date.now()
        };

        // --- OFFLINE PROGRESS CALCULATION ---
        const now = Date.now();
        const lastSave = loadedState.lastSaveTime;
        const diffSeconds = (now - lastSave) / 1000;

        // Threshold: 60 seconds minimum to trigger offline mechanics
        if (diffSeconds > 60) {
            // Cap at 24 hours (86400 seconds)
            const cappedSeconds = Math.min(diffSeconds, 24 * 60 * 60);
            
            // Calculate production based on loaded state (without temporary active events for fairness)
            const productionState = { ...loadedState, activeEvents: [] };
            const rates = calculateProductionRates(productionState);
            
            const earned: Record<string, number> = {};
            let hasEarnings = false;

            Object.entries(rates).forEach(([res, rate]) => {
                // Only count positive production for offline earnings. 
                // We do NOT deduct consumption offline to prevent players returning to a broken state.
                if (rate > 0) {
                    const amount = rate * cappedSeconds;
                    if (amount > 0) {
                        loadedState.resources[res as ResourceType] += amount;
                        earned[res] = amount;
                        hasEarnings = true;
                    }
                }
            });

            if (hasEarnings) {
                loadedState.lastSaveTime = now;
                // Store in ref to trigger modal later
                initialEarningsRef.current = { resources: earned as Record<ResourceType, number>, time: cappedSeconds };
            }
        }

        return loadedState;
      } catch (e) {
        console.error("Save load failed, using initial state.", e);
        return INITIAL_STATE;
      }
    }
    return INITIAL_STATE;
  });

  const [logs, setLogs] = useState<LogEntry[]>([]);

  // Show offline modal on mount if earnings exist
  useEffect(() => {
      if (initialEarningsRef.current) {
          setOfflineEarnings(initialEarningsRef.current);
          initialEarningsRef.current = null;
      }
  }, []);

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

  // 2. Sub-Hooks
  const calculators = useGameCalculators(gameState);
  
  const { saveGame, resetGame, importSave, exportSave, prestigeGame, lastSaveTime } = useGameIO(gameState, setGameState, addLog, setLogs);
  
  const actions = useGameActions(setGameState, addLog, calculators);

  // 3. Game Loop
  useGameLoop(setGameState, addLog, calculators, lastSaveTime);

  return {
    gameState,
    logs,
    addGlobalLog,
    // Calculators
    calculateTotalProduction: calculators.calculateTotalProduction,
    calculateClickPower: calculators.calculateClickPower,
    calculateGlobalCostReduction: calculators.calculateGlobalCostReduction,
    // Actions
    handleManualMine: actions.handleManualMine,
    buyBuilding: actions.buyBuilding,
    sellBuilding: actions.sellBuilding,
    researchTech: actions.researchTech,
    investigateArtifact: actions.investigateArtifact,
    batchInvestigate: actions.batchInvestigate,
    toggleSetting: actions.toggleSetting,
    triggerRealityFlush: actions.triggerRealityFlush,
    triggerProbabilityDrive: actions.triggerProbabilityDrive,
    handleMakeChoice: actions.handleMakeChoice,
    dismissNotification: actions.dismissNotification, 
    markAsSeen: actions.markAsSeen,
    checkMissingEvents: actions.checkMissingEvents,
    debugCheat: actions.debugCheat, // Exposed
    
    // New System Actions
    markEmailRead: actions.markEmailRead,
    claimEmailReward: actions.claimEmailReward,
    deleteEmail: actions.deleteEmail,
    buyStock: actions.buyStock,
    sellStock: actions.sellStock,

    // IO
    saveGame,
    resetGame,
    prestigeGame, 
    importSave,
    exportSave,
    // Offline
    offlineEarnings,
    clearOfflineEarnings: () => setOfflineEarnings(null)
  };
};
