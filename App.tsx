
import React, { useState } from 'react';
import { Eye, Radio, Save, RefreshCw, Settings as SettingsIcon } from 'lucide-react';
import { useGameLogic } from './hooks/useGameLogic';
import TerminalLog from './components/TerminalLog';
import ResourcesPanel from './components/ResourcesPanel';
import MainPanel from './components/MainPanel';
import ArtifactGrid from './components/ArtifactGrid';
import SettingsModal from './components/SettingsModal';
import ActiveEventsTicker from './components/ActiveEventsTicker';
import ChoiceEventModal from './components/ChoiceEventModal'; // NEW

const App: React.FC = () => {
  const {
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
    handleMakeChoice // NEW
  } = useGameLogic();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const productionRates = calculateTotalProduction(gameState);
  const clickPower = calculateClickPower();
  const costReduction = calculateGlobalCostReduction();

  return (
    <div className="flex flex-col h-screen bg-term-black text-gray-300 font-mono overflow-hidden">
      {/* Header */}
      <header className="h-12 border-b border-term-gray flex items-center justify-between px-6 bg-term-gray/10 z-10 shrink-0 select-none relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0 w-48">
          <Eye className="text-term-green animate-pulse" />
          <h1 className="text-lg font-bold tracking-tighter text-white hidden sm:block">
            TRUTH<span className="text-term-green">_CLICKER</span>
            <span className="ml-2 text-[10px] text-gray-500 font-normal">v2.1.0</span>
          </h1>
        </div>
        
        {/* Center: Event Ticker */}
        <ActiveEventsTicker events={gameState.activeEvents} />

        {/* Right: Controls */}
        <div className="flex items-center gap-4 text-xs shrink-0 w-auto justify-end">
          <div className="flex items-center gap-1 text-cyber-purple border border-cyber-purple/30 px-2 py-1 rounded bg-cyber-purple/5">
            <Radio size={14} />
            <span>DEPTH: {Math.floor(gameState.depth / 10)}</span>
          </div>
          
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="flex items-center gap-1 hover:text-white transition-colors"
            title="Settings"
          >
            <SettingsIcon size={14} />
          </button>

          <button onClick={saveGame} className="flex items-center gap-1 hover:text-white transition-colors">
            <Save size={14} /> SAVE
          </button>
          
          <button onClick={resetGame} className="flex items-center gap-1 text-red-400 hover:text-red-500 transition-colors border border-red-900/50 px-2 py-1 rounded hover:bg-red-900/10">
            <RefreshCw size={14} /> RESET
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden">
        
        {/* Left Column: Resources */}
        <ResourcesPanel 
            resources={gameState.resources}
            productionRates={productionRates}
            totalInfoMined={gameState.totalInfoMined}
            clickPower={clickPower}
            onMine={handleManualMine}
            onTriggerRealityFlush={triggerRealityFlush} 
            onTriggerProbabilityDrive={triggerProbabilityDrive} 
            researchedTechs={gameState.researchedTechs} 
            luckBoostEndTime={gameState.luckBoostEndTime} 
        />

        {/* Center Column: Main Game Area */}
        <MainPanel 
            gameState={gameState}
            onBuyBuilding={buyBuilding}
            onSellBuilding={sellBuilding}
            onResearchTech={researchTech}
            onRecycleArtifact={recycleArtifact}
            onRecycleAllCommons={recycleAllCommons}
            globalCostReduction={costReduction}
        />

        {/* Right Column: Logs & Artifacts */}
        <section className="w-[20%] border-l border-term-gray flex flex-col min-w-[240px]">
          <div className="flex-1 min-h-0 relative border-b border-term-gray/50">
             <TerminalLog logs={logs} />
          </div>
          <div className="h-1/3 min-h-[200px] bg-term-black overflow-y-auto">
             <ArtifactGrid 
                collected={gameState.artifacts} 
                limit={20} 
                onRecycle={recycleArtifact}
             />
          </div>
        </section>

      </div>

      {isSettingsOpen && (
        <SettingsModal 
            settings={gameState.settings} 
            onToggle={toggleSetting} 
            onClose={() => setIsSettingsOpen(false)} 
        />
      )}

      {/* Choice Event Popup */}
      {gameState.pendingChoice && (
        <ChoiceEventModal 
            event={gameState.pendingChoice}
            resources={gameState.resources}
            onChoose={handleMakeChoice}
        />
      )}
    </div>
  );
};

export default App;
