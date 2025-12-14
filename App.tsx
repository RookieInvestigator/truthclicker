
import React, { useState } from 'react';
import { Eye, Radio, Save, RefreshCw, Settings as SettingsIcon, Database, Terminal, Cpu, HardDrive, Zap } from 'lucide-react';
import { useGameLogic } from './hooks/useGameLogic';
import TerminalLog from './components/TerminalLog';
import ResourcesPanel from './components/ResourcesPanel';
import MainPanel from './components/MainPanel';
import ArtifactGrid from './components/ArtifactGrid';
import SettingsModal from './components/SettingsModal';
import ActiveEventsTicker from './components/ActiveEventsTicker';
import ChoiceEventModal from './components/ChoiceEventModal';
import OfflineModal from './components/OfflineModal'; 
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
    prestigeGame, // Added
    toggleSetting,
    triggerRealityFlush, 
    triggerProbabilityDrive,
    handleMakeChoice,
    importSave,
    exportSave,
    markAsSeen,
    checkMissingEvents,
    debugCheat, // NEW
    offlineEarnings,
    clearOfflineEarnings,
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
    <div className={`flex flex-col h-screen bg-term-black text-gray-300 font-mono overflow-hidden transition-all duration-1000 relative selection:bg-term-green selection:text-black
        ${isRealityCollapsing ? 'sepia-[0.3] hue-rotate-[-10deg]' : ''}
    `}>
      
      {/* CRT Scanline Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[60] scanlines opacity-10"></div>
      
      {/* Vignette Overlay */}
      <div className="pointer-events-none fixed inset-0 z-[50] bg-[radial-gradient(circle_at_center,transparent_50%,rgba(0,0,0,0.4)_100%)]"></div>

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
      <header className="h-10 border-b border-term-gray/60 flex items-center justify-between px-3 bg-black z-20 shrink-0 select-none relative shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
        {/* Logo Section */}
        <div className="flex items-center gap-2 shrink-0 mr-4">
          <div className={`
            relative flex items-center justify-center w-6 h-6 rounded border bg-term-green/5 
            ${isRealityCollapsing ? 'animate-spin border-red-500 bg-red-900/10' : 'border-term-green/30'}
          `}>
             <Eye size={14} className={`transition-colors ${isRealityCollapsing ? 'text-red-500' : 'text-term-green drop-shadow-[0_0_5px_rgba(34,197,94,0.6)]'}`} />
          </div>
          <div className="flex items-center gap-2 leading-none hidden sm:flex">
            <h1 className="text-xs font-bold tracking-[0.2em] text-gray-200 text-glow">
              TRUTH<span className="text-term-green">_CLICKER</span>
            </h1>
            <span className="text-[8px] text-term-green/70 font-mono uppercase bg-term-green/10 px-1 rounded">V2.2.0</span>
          </div>
        </div>
        
        {/* Center: Event Ticker */}
        <div className="flex-1 max-w-2xl mx-auto h-full flex items-center overflow-hidden relative border-x border-gray-900 bg-black/50">
             <ActiveEventsTicker events={gameState.activeEvents} />
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-3 shrink-0 w-auto justify-end ml-4">
          
          {/* Depth Meter */}
          <div className="hidden md:flex items-center gap-2 px-2 py-1 rounded-sm bg-gray-900 border border-gray-800 text-[10px] font-mono group hover:border-cyber-purple/50 transition-colors">
            <div className="flex items-center gap-1 text-cyber-purple/80">
                <Radio size={10} className="animate-pulse" />
                <span className="font-bold tracking-wider opacity-70">DEPTH</span>
            </div>
            <div className="h-2 w-px bg-gray-700"></div>
            <span className="text-gray-200 font-bold tabular-nums text-shadow-purple">{Math.floor(gameState.depth / 10)}m</span>
          </div>
          
          <div className="h-4 w-px bg-gray-800 hidden sm:block"></div>

          {/* System Menu */}
          <div className="flex items-center gap-1">
              <button 
                onClick={debugCheat}
                className="p-1 text-gray-500 hover:text-yellow-400 hover:bg-yellow-900/20 rounded transition-all"
                title="[DEBUG] Inject Resources"
              >
                <Zap size={14} />
              </button>

              <button 
                onClick={saveGame}
                className="p-1 text-gray-500 hover:text-term-green hover:bg-term-green/10 rounded transition-all group relative"
                title="Save Data [Ctrl+S]"
              >
                <HardDrive size={14} />
              </button>

              <button 
                onClick={() => setIsSettingsOpen(true)}
                className="p-1 text-gray-500 hover:text-white hover:bg-white/10 rounded transition-all"
                title="System Configuration"
              >
                <SettingsIcon size={14} />
              </button>
              
              <button 
                onClick={resetGame}
                className="p-1 text-gray-500 hover:text-red-500 hover:bg-red-900/20 rounded transition-all"
                title="Hard Reset / Wipe"
              >
                <RefreshCw size={14} />
              </button>
          </div>
        </div>
      </header>

      {/* Main Layout */}
      <div className="flex-1 flex overflow-hidden relative z-0 pb-14 md:pb-0">
        
        {/* Left Column: Resources (Visible on Mobile if tab is 'resources', always on Desktop) */}
        <div className={`
            flex-col bg-term-black min-w-[240px] overflow-hidden
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
            flex-col bg-term-black min-w-0 overflow-hidden
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
                markAsSeen={markAsSeen}
            />
        </div>

        {/* Right Column: Logs & Artifacts (Visible on Mobile if tab is 'system', always on Desktop) */}
        <section className={`
            flex-col min-w-[240px] bg-term-black overflow-hidden
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

      {/* Modals */}
      {isSettingsOpen && (
        <SettingsModal 
            settings={gameState.settings} 
            onToggle={toggleSetting} 
            onClose={() => setIsSettingsOpen(false)}
            onImport={importSave} 
            onExport={exportSave}
            onPrestige={prestigeGame} // Added
            onCheckEvents={checkMissingEvents} // Added
            currentInfo={gameState.resources[ResourceType.INFO]} // CHANGED: Pass current INFO
            currentDejaVu={gameState.resources[ResourceType.DEJAVU]} // Added
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

      {/* Offline Earnings Popup */}
      {offlineEarnings && (
        <OfflineModal 
            time={offlineEarnings.time}
            resources={offlineEarnings.resources}
            onClose={clearOfflineEarnings}
        />
      )}
    </div>
  );
};

export default App;
