
import React, { useState } from 'react';
import { Eye, Radio, Save, RefreshCw, Settings as SettingsIcon, Database, Terminal, Cpu } from 'lucide-react';
import { useGameLogic } from './hooks/useGameLogic';
import TerminalLog from './components/TerminalLog';
import ResourcesPanel from './components/ResourcesPanel';
import MainPanel from './components/MainPanel';
import ArtifactGrid from './components/ArtifactGrid';
import SettingsModal from './components/SettingsModal';
import ActiveEventsTicker from './components/ActiveEventsTicker';
import ChoiceEventModal from './components/ChoiceEventModal';
import { ResourceType } from './types';

const App: React.FC = () => {
  const {
    gameState,
    logs,
    addGlobalLog,
    calculateTotalProduction,
    calculateClickPower,
    calculateGlobalCostReduction,
    handleManualMine,
    buyBuilding,
    sellBuilding,
    researchTech,
    investigateArtifact,
    batchInvestigate,
    saveGame,
    resetGame,
    toggleSetting,
    triggerRealityFlush, 
    triggerProbabilityDrive,
    handleMakeChoice,
    importSave,
    exportSave
  } = useGameLogic();

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  // Mobile Tab State: 'resources' | 'main' | 'system'
  const [mobileTab, setMobileTab] = useState<'resources' | 'main' | 'system'>('main');

  const productionRates = calculateTotalProduction(gameState);
  const clickPower = calculateClickPower();
  const costReduction = calculateGlobalCostReduction();

  // Reality Effects Logic
  const reality = gameState.resources[ResourceType.REALITY];
  const isRealityCollapsing = reality <= 0;
  const isRealityLow = reality > 0 && reality < 30;
  const isRealityStable = reality > 120;

  return (
    <div className={`flex flex-col h-screen bg-term-black text-gray-300 font-mono overflow-hidden transition-all duration-1000 relative
        ${isRealityCollapsing ? 'sepia-[0.3] hue-rotate-[-10deg]' : ''}
    `}>
      
      {/* REALITY OVERLAYS */}
      {isRealityCollapsing && (
          <div className="pointer-events-none fixed inset-0 z-50 bg-red-900/10 mix-blend-overlay animate-pulse"></div>
      )}
      {isRealityCollapsing && (
          <div className="pointer-events-none fixed inset-0 z-50 mix-blend-color-dodge opacity-20 animate-glitch" 
               style={{backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))', backgroundSize: '100% 2px, 3px 100%'}}>
          </div>
      )}
      {isRealityLow && !isRealityCollapsing && (
          <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_100px_rgba(220,38,38,0.15)] transition-opacity duration-1000"></div>
      )}
      {isRealityStable && (
          <div className="pointer-events-none fixed inset-0 z-50 shadow-[inset_0_0_50px_rgba(34,197,94,0.05)] transition-opacity duration-1000"></div>
      )}

      {/* Header */}
      <header className="h-12 border-b border-term-gray flex items-center justify-between px-4 bg-term-gray/10 z-10 shrink-0 select-none relative">
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0">
          <Eye className={`text-term-green ${isRealityCollapsing ? 'animate-spin' : 'animate-pulse'}`} />
          <h1 className="text-lg font-bold tracking-tighter text-white hidden sm:block">
            TRUTH<span className="text-term-green">_CLICKER</span>
          </h1>
        </div>
        
        {/* Center: Event Ticker (Hidden on very small screens if needed, but flex-1 handles it) */}
        <ActiveEventsTicker events={gameState.activeEvents} />

        {/* Right: Controls */}
        <div className="flex items-center gap-2 sm:gap-4 text-xs shrink-0 w-auto justify-end">
          <div className="hidden sm:flex items-center gap-1 text-cyber-purple border border-cyber-purple/30 px-2 py-1 rounded bg-cyber-purple/5">
            <Radio size={14} />
            <span>DEPTH: {Math.floor(gameState.depth / 10)}</span>
          </div>
          
          <button 
            onClick={() => setIsSettingsOpen(true)}
            className="p-1.5 hover:text-white transition-colors rounded hover:bg-white/10"
            title="Settings"
          >
            <SettingsIcon size={16} />
          </button>

          <button onClick={saveGame} className="hidden sm:flex items-center gap-1 hover:text-white transition-colors">
            <Save size={14} /> SAVE
          </button>
          
          <button onClick={resetGame} className="hidden sm:flex items-center gap-1 text-red-400 hover:text-red-500 transition-colors border border-red-900/50 px-2 py-1 rounded hover:bg-red-900/10">
            <RefreshCw size={14} /> RESET
          </button>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden relative z-0 pb-14 md:pb-0">
        
        {/* Left Column: Resources (Visible on Mobile if tab is 'resources', always on Desktop) */}
        <div className={`
            flex-col bg-term-black/90 min-w-[240px]
            ${mobileTab === 'resources' ? 'flex w-full absolute inset-0 z-20' : 'hidden'} 
            md:flex md:w-[20%] md:relative md:z-0 md:border-r md:border-term-gray
        `}>
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
        </div>

        {/* Center Column: Main Game Area (Visible on Mobile if tab is 'main', always on Desktop) */}
        <div className={`
            flex-col bg-term-black min-w-0
            ${mobileTab === 'main' ? 'flex w-full absolute inset-0 z-20' : 'hidden'}
            md:flex md:flex-1 md:relative md:z-0
        `}>
            <MainPanel 
                gameState={gameState}
                onBuyBuilding={buyBuilding}
                onSellBuilding={sellBuilding}
                onResearchTech={researchTech}
                onRecycleArtifact={investigateArtifact}
                onRecycleArtifactsByRarity={batchInvestigate}
                globalCostReduction={costReduction}
                addGlobalLog={addGlobalLog}
            />
        </div>

        {/* Right Column: Logs & Artifacts (Visible on Mobile if tab is 'system', always on Desktop) */}
        <section className={`
            flex-col min-w-[240px] bg-term-black
            ${mobileTab === 'system' ? 'flex w-full absolute inset-0 z-20' : 'hidden'}
            md:flex md:w-[20%] md:relative md:z-0 md:border-l md:border-term-gray
        `}>
          <div className="flex-1 min-h-0 relative border-b border-term-gray/50">
             <TerminalLog logs={logs} />
          </div>
          <div className="h-1/3 min-h-[200px] bg-term-black overflow-y-auto">
             <ArtifactGrid 
                collected={gameState.artifacts} 
                limit={20} 
                onRecycle={investigateArtifact}
             />
          </div>
        </section>

      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden h-14 bg-term-black border-t border-term-gray flex items-center justify-around fixed bottom-0 left-0 right-0 z-50 px-2 pb-safe">
        <button 
            onClick={() => setMobileTab('resources')}
            className={`flex flex-col items-center justify-center w-16 gap-1 p-1 rounded-md transition-colors ${mobileTab === 'resources' ? 'text-term-green bg-term-green/10' : 'text-gray-500'}`}
        >
            <Database size={20} />
            <span className="text-[10px] font-bold">资源</span>
        </button>
        
        <button 
            onClick={() => setMobileTab('main')}
            className={`flex flex-col items-center justify-center w-16 gap-1 p-1 rounded-md transition-colors ${mobileTab === 'main' ? 'text-blue-400 bg-blue-400/10' : 'text-gray-500'}`}
        >
            <Cpu size={20} />
            <span className="text-[10px] font-bold">终端</span>
        </button>

        <button 
            onClick={() => setMobileTab('system')}
            className={`flex flex-col items-center justify-center w-16 gap-1 p-1 rounded-md transition-colors ${mobileTab === 'system' ? 'text-cyber-purple bg-cyber-purple/10' : 'text-gray-500'}`}
        >
            <Terminal size={20} />
            <span className="text-[10px] font-bold">系统</span>
        </button>
      </nav>

      {isSettingsOpen && (
        <SettingsModal 
            settings={gameState.settings} 
            onToggle={toggleSetting} 
            onClose={() => setIsSettingsOpen(false)}
            onImport={importSave} 
            onExport={exportSave}
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
