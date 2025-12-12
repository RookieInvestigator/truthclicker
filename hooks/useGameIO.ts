
import { useCallback, useRef } from 'react';
import { GameState, LogEntry, ResourceType } from '../types';
import { INITIAL_STATE } from '../data/initialState';

export const useGameIO = (
    gameState: GameState, 
    setGameState: React.Dispatch<React.SetStateAction<GameState>>, 
    addLog: (msg: string, type?: LogEntry['type']) => void,
    setLogs: React.Dispatch<React.SetStateAction<LogEntry[]>>
) => {
  const lastSaveTime = useRef(Date.now());

  // Initialization Logic (to be used in useState of parent)
  const loadInitialState = () => {
    const saved = localStorage.getItem('truth_clicker_save_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        const safeResources = { ...INITIAL_STATE.resources, ...parsed.resources };
        if (parsed.resources && parsed.resources[ResourceType.OXYGEN] === undefined) {
            safeResources[ResourceType.OXYGEN] = 1000000;
        }
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
  };

  const saveGame = useCallback(() => {
      localStorage.setItem('truth_clicker_save_v2', JSON.stringify(gameState));
      addLog("Game Saved", "success");
      lastSaveTime.current = Date.now();
  }, [gameState, addLog]);

  const resetGame = useCallback(() => {
      if(confirm("Reset game?")) {
          setGameState(INITIAL_STATE);
          setLogs([]);
          localStorage.removeItem('truth_clicker_save_v2');
      }
  }, [setGameState, setLogs]);

  const exportSave = useCallback(() => {
      try {
          return btoa(JSON.stringify(gameState));
      } catch (e) {
          console.error("Export failed", e);
          return "";
      }
  }, [gameState]);

  const importSave = useCallback((saveData: string) => {
      try {
          const decoded = atob(saveData);
          const parsed = JSON.parse(decoded);
          
          if (!parsed.resources) {
              throw new Error("Invalid save format");
          }

          const safeResources = { ...INITIAL_STATE.resources, ...parsed.resources };
          
          const newGameState = {
              ...INITIAL_STATE,
              ...parsed,
              resources: safeResources,
              settings: { ...INITIAL_STATE.settings, ...parsed.settings }
          };

          setGameState(newGameState);
          addLog("存档导入成功", "success");
          return true;
      } catch (e) {
          console.error("Import failed", e);
          addLog("导入失败: 数据格式无效", "warning");
          return false;
      }
  }, [setGameState, addLog]);

  return {
    loadInitialState,
    saveGame,
    resetGame,
    exportSave,
    importSave,
    lastSaveTime
  };
};
