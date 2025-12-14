
import React, { useCallback, useRef } from 'react';
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
        // Ensure new resources like Oxygen/DejaVu exist
        if (parsed.resources && parsed.resources[ResourceType.OXYGEN] === undefined) {
            safeResources[ResourceType.OXYGEN] = 1000000;
        }
        if (parsed.resources && parsed.resources[ResourceType.DEJAVU] === undefined) {
            safeResources[ResourceType.DEJAVU] = 0;
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
      if(confirm("HARD RESET: This will wipe EVERYTHING, including unique artifacts and Deja Vu. Are you sure?")) {
          setGameState(INITIAL_STATE);
          setLogs([]);
          localStorage.removeItem('truth_clicker_save_v2');
          window.location.reload();
      }
  }, [setGameState, setLogs]);

  // PRESTIGE LOGIC
  const prestigeGame = useCallback(() => {
      // CHANGED: Now uses current held INFO, not total mined.
      const currentInfo = gameState.resources[ResourceType.INFO];
      
      // Formula: 100,000 -> 1, 1,000,000 -> 2. Log10 scale starting at 10^5.
      // Math: floor(log10(info / 10000))
      const earnedDejaVu = Math.max(0, Math.floor(Math.log10(Math.max(1, currentInfo) / 10000)));

      if (earnedDejaVu <= 0) {
          addLog("当前持有信息不足以产生既视感。需要至少 100,000 信息流库存。", "warning");
          return;
      }

      if (confirm(`【时间回溯】\n\n基于你当前持有的 ${Math.floor(currentInfo).toLocaleString()} 信息流，\n你将获得 ${earnedDejaVu} 点既视感 (Déjà Vu)。\n\n既视感将永久提升 50% 全局产量 (每点)。\n除了既视感、设置和成就记录外，你的所有进度将被重置。\n\n确定要重新开始吗？`)) {
          
          const currentDejaVu = gameState.resources[ResourceType.DEJAVU] || 0;
          const newDejaVu = currentDejaVu + earnedDejaVu;
          const foundUniqueIds = gameState.foundUniqueItemIds || [];

          const newState: GameState = {
              ...INITIAL_STATE,
              // Keep settings
              settings: gameState.settings,
              // Keep unique artifact history (pokedex)
              foundUniqueItemIds: foundUniqueIds,
              // Keep Deja Vu
              resources: {
                  ...INITIAL_STATE.resources,
                  [ResourceType.DEJAVU]: newDejaVu
              },
              // Reset time
              startTime: Date.now(),
              lastSaveTime: Date.now()
          };

          setGameState(newState);
          setLogs([]);
          localStorage.setItem('truth_clicker_save_v2', JSON.stringify(newState));
          
          // Force a slight delay to ensure UI updates cleanly or just reload
          setTimeout(() => {
              window.location.reload();
          }, 500);
      }
  }, [gameState, setGameState, setLogs, addLog]);

  const exportSave = useCallback(() => {
      try {
          const json = JSON.stringify(gameState);
          return btoa(encodeURIComponent(json).replace(/%([0-9A-F]{2})/g,
              function toSolidBytes(match, p1) {
                  return String.fromCharCode(parseInt(p1, 16));
          }));
      } catch (e) {
          console.error("Export failed", e);
          return "";
      }
  }, [gameState]);

  const importSave = useCallback((saveData: string) => {
      try {
          const decoded = decodeURIComponent(atob(saveData).split('').map(function(c) {
              return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
          }).join(''));

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
    prestigeGame, // Exported
    exportSave,
    importSave,
    lastSaveTime
  };
};
