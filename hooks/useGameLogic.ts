
import { useState, useCallback } from 'react';
import { GameState, LogEntry } from '../types';
import { useGameCalculators } from './useGameCalculators';
import { useGameIO } from './useGameIO';
import { useGameActions } from './useGameActions';
import { useGameLoop } from './useGameLoop';
import { INITIAL_STATE } from '../data/initialState';

export const useGameLogic = () => {
  // 1. Core State
  // We need to define loadInitialState function here or inside useGameIO 
  // but to initialize useState we need it immediately. 
  // We duplicate the init logic slightly or export it from useGameIO to be used here.
  // For simplicity, I'll inline the basic load logic or rely on useGameIO's helper if I can call it.
  // Since hooks rules prevent calling a hook inside useState initializer, I'll use a static helper logic or the one I exported in useGameIO (which needs to be a pure function to be used here).
  // Actually, let's keep the raw initializer here for simplicity as it was in the original file, or import it.
  
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
    // IO
    saveGame,
    resetGame,
    importSave,
    exportSave
  };
};
