import { useState, useCallback } from 'react';
import { GameState, LogEntry } from '../types';
import { useGameCalculators } from './useGameCalculators';
import { useGameIO } from './useGameIO';
import { useGameActions } from './useGameActions';
import { useGameLoop } from './useGameLoop';
import { INITIAL_STATE } from '../data/initialState';

export const useGameLogic = () => {
  
  const [gameState, setGameState] = useState<GameState>(() => {
    const saved = localStorage.getItem('truth_clicker_save_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const safeResources = { ...INITIAL_STATE.resources, ...parsed.resources };
        return { 
          ...INITIAL_STATE, 
          ...parsed, 
          resources: safeResources, 
          settings: { ...INITIAL_STATE.settings, ...parsed.settings } 
        };
      } catch (e) {
        console.error("Save load failed", e);
      }
    }
    return INITIAL_STATE;
  });

  const [logs, setLogs] = useState<LogEntry[]>([]);

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
  
  const { saveGame, resetGame, importSave, exportSave, lastSaveTime } = useGameIO(gameState, setGameState, addLog, setLogs);
  
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
    dismissNotification: actions.dismissNotification, // Exported!
    markAsSeen: actions.markAsSeen,
    // IO
    saveGame,
    resetGame,
    importSave,
    exportSave
  };
};