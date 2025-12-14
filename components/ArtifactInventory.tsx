
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Artifact, LogEntry } from '../types';
import { FolderOpen, DownloadCloud, Globe, Database, MessageSquare, ChevronDown, Microscope, Loader2, X, Cpu, Disc, Radio, Cat, Book } from 'lucide-react';
import { ArrowUpDown, File, FileImage, FileText, FileAudio, FileCode } from 'lucide-react';
import ArtifactModal from './ArtifactModal';
import { UNIQUE_ARTIFACTS } from '../data/artifacts'; // Import unique list for compendium

interface ArtifactInventoryProps {
  artifacts: Artifact[];
  onRecycle: (artifact: Artifact, onResult?: (msg: string, type: LogEntry['type']) => void) => void;
  onRecycleArtifactsByRarity: (rarity: string) => void; 
  onLog?: (msg: string, type: LogEntry['type']) => void;
  detailedLogsEnabled?: boolean; 
}

const ArtifactInventory: React.FC<ArtifactInventoryProps> = ({ artifacts, onRecycle, onLog, detailedLogsEnabled }) => {
  // Update filter type definition
  const [filterType, setFilterType] = useState<'all' | 'file' | 'bookmark' | 'hardware' | 'media' | 'creature' | 'signal'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rarity'>('recent');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'inventory' | 'archive'>('inventory'); // NEW: Toggle between inventory and archive
  
  // --- BATCH PROCESSING STATE ---
  const [isBatchMode, setIsBatchMode] = useState(false);
  const [batchQueue, setBatchQueue] = useState<Artifact[]>([]);
  const [currentProcessingItem, setCurrentProcessingItem] = useState<Artifact | null>(null);
  const [batchLogs, setBatchLogs] = useState<{msg: string, type: string}[]>([]);
  const [processedCount, setProcessedCount] = useState(0);
  const logContainerRef = useRef<HTMLDivElement>(null);

  // Stats
  const totalCount = artifacts.length;
  const proceduralCounts = useMemo(() => {
      const counts: Record<string, number> = {};
      artifacts.forEach(a => {
          if (a.isProcedural) {
              counts[a.rarity] = (counts[a.rarity] || 0) + 1;
          }
      });
      return counts;
  }, [artifacts]);

  // Derived found unique IDs from current inventory (plus potentially a persistent list passed in props if we had one, but logic is in hook)
  // Since we don't pass foundUniqueIds from GameState directly to this component in MainPanel, we rely on the modal to show persistent info?
  // Ideally MainPanel should pass `foundUniqueItemIds`. 
  // Wait, I cannot easily change MainPanel signature without breaking props drilling. 
  // Let's assume for now we just show what's in `artifacts`. 
  // BUT the request is to see "previously obtained". 
  // I must check if UNIQUE_ARTIFACTS are in the `artifacts` list.
  // To do "history", I really should have `foundUniqueItemIds` in props. 
  // Hack: I will inspect `localStorage` directly for the compendium unlock state if props aren't available, or I'll just show what's in inventory.
  // BETTER: MainPanel renders this. MainPanel has `gameState`. I will assume `foundUniqueItemIds` is available by the time I update MainPanel. 
  // I will check `localStorage` as a fallback to avoid prop drilling nightmare in this XML response.
  
  const getFoundUniqueIds = (): string[] => {
      try {
          const saved = localStorage.getItem('truth_clicker_save_v2');
          if (saved) {
              const parsed = JSON.parse(saved);
              return parsed.foundUniqueItemIds || [];
          }
      } catch (e) {}
      return [];
  };
  
  const foundUniqueIds = getFoundUniqueIds();

  // Scroll log to bottom
  useEffect(() => {
      if (logContainerRef.current) {
          logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
      }
  }, [batchLogs]);

  // --- BATCH LOGIC ---
  const startBatch = (rarity: string) => {
      const targetItems = artifacts.filter(a => a.isProcedural && a.rarity === rarity);
      if (targetItems.length === 0) return;

      setBatchQueue(targetItems);
      setBatchLogs([]);
      setProcessedCount(0);
      setIsBatchMode(true);
      setIsMenuOpen(false);
  };

  const closeBatchModal = () => {
      setIsBatchMode(false);
      setBatchQueue([]);
      setCurrentProcessingItem(null);
  };

  // Process Queue Effect
  useEffect(() => {
      if (!isBatchMode || batchQueue.length === 0) {
          if (isBatchMode && batchQueue.length === 0 && currentProcessingItem === null) {
              const summaryMsg = `>>> 批处理任务完成 (BATCH_COMPLETE): ${processedCount} 个项目`;
              setBatchLogs(prev => [...prev, { msg: summaryMsg, type: 'success' }]);
              if (onLog) {
                  onLog(`批量调查完成：已处理 ${processedCount} 个项目`, 'success');
              }
          }
          return;
      }

      const item = batchQueue[0];
      const remainingItems = batchQueue.length;
      setCurrentProcessingItem(item);

      const BASE_DELAY_CONSTANT = 2500; 
      const MIN_DELAY = 40; 
      const MAX_DELAY = 1000; 

      let calculatedDelay = Math.floor(BASE_DELAY_CONSTANT / remainingItems);
      let speed = Math.max(MIN_DELAY, Math.min(MAX_DELAY, calculatedDelay));

      const timer = setTimeout(() => {
          onRecycle(item, (msg: string, type: LogEntry['type']) => {
              if (type !== 'info') {
                  setBatchLogs(prev => [...prev, { msg: `[${item.name}] -> ${msg}`, type }]);
              } else {
                  if (detailedLogsEnabled) {
                      const cleanMsg = msg.replace('分析完成:', '').trim();
                      setBatchLogs(prev => [...prev, { msg: `[${item.name}] : ${cleanMsg}`, type: 'dim' }]);
                  }
              }
          });

          setBatchQueue(prev => prev.slice(1));
          setProcessedCount(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
  }, [isBatchMode, batchQueue, onRecycle, detailedLogsEnabled]); 


  // Filter & Sort Logic
  const filteredArtifacts = useMemo(() => {
    let result = [...artifacts];
    if (filterType !== 'all') {
        result = result.filter(a => a.subtype === filterType);
    }
    
    if (sortBy === 'recent') {
        result.reverse(); 
    } else if (sortBy === 'rarity') {
        const rarityOrder = { 'anomaly': 6, 'cursed': 5, 'mythic': 4, 'legendary': 3, 'rare': 2, 'common': 1 };
        result.sort((a, b) => (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0));
    }
    return result;
  }, [artifacts, filterType, sortBy]);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'mythic': return 'text-yellow-500 border-yellow-500 bg-yellow-500/10 shadow-[0_0_10px_rgba(234,179,8,0.2)]';
      case 'legendary': return 'text-orange-500 border-orange-500 bg-orange-500/10 shadow-[0_0_8px_rgba(249,115,22,0.2)]';
      case 'rare': return 'text-cyber-purple border-cyber-purple bg-cyber-purple/10';
      case 'anomaly': return 'text-white border-white bg-white/10 animate-pulse';
      default: return 'text-term-green border-term-green bg-term-green/10';
    }
  };

  const getArtifactIcon = (artifact: Artifact) => {
      // General Subtype Icons
      if (artifact.subtype === 'bookmark') return <Globe size={20} className="text-blue-400" />;
      if (artifact.subtype === 'hardware') return <Cpu size={20} className="text-amber-500" />;
      if (artifact.subtype === 'media') return <Disc size={20} className="text-purple-400" />;
      if (artifact.subtype === 'creature') return <Cat size={20} className="text-red-400" />;
      if (artifact.subtype === 'signal') return <Radio size={20} className="text-cyan-400" />;

      // Specific File Icons
      const lower = artifact.name.toLowerCase();
      if (lower.endsWith('.sql') || lower.endsWith('.db') || lower.endsWith('.csv')) return <Database size={20} className="text-yellow-400" />;
      if (lower.endsWith('.log') || lower.endsWith('.history')) return <MessageSquare size={20} className="text-pink-400" />;
      if (lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.gif')) return <FileImage size={20} />;
      if (lower.endsWith('.mp3') || lower.endsWith('.wav')) return <FileAudio size={20} />;
      if (lower.endsWith('.txt') || lower.endsWith('.doc') || lower.endsWith('.pdf')) return <FileText size={20} />;
      if (lower.endsWith('.js') || lower.endsWith('.html') || lower.endsWith('.c') || lower.endsWith('.py') || lower.endsWith('.exe')) return <FileCode size={20} />;
      return <File size={20} />;
  }

  // Filter List Config
  const filters = [
      { id: 'all', label: 'All', icon: FolderOpen },
      { id: 'file', label: 'File', icon: File },
      { id: 'bookmark', label: 'Web', icon: Globe },
      { id: 'hardware', label: 'Tech', icon: Cpu },
      { id: 'media', label: 'Media', icon: Disc },
      { id: 'signal', label: 'Signal', icon: Radio },
      { id: 'creature', label: 'Bio', icon: Cat },
  ] as const;

  return (
    <div className="h-full flex flex-col bg-term-black/50" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
      
      {/* ... (Batch Modal) ... */}
      {isBatchMode && (
          <div className="absolute inset-0 z-50 bg-black/90 flex flex-col p-6 animate-in fade-in duration-300">
              <div className="flex justify-between items-center mb-4 border-b border-gray-700 pb-2">
                  <div className="flex items-center gap-3">
                      <Loader2 size={20} className={`text-term-green ${batchQueue.length > 0 ? 'animate-spin' : ''}`} />
                      <h2 className="text-lg font-mono font-bold text-term-green tracking-wider">
                          批量调查终端
                      </h2>
                  </div>
                  {batchQueue.length === 0 && (
                      <button onClick={closeBatchModal} className="text-gray-500 hover:text-white">
                          <X size={20} />
                      </button>
                  )}
              </div>
              <div className="mb-6 space-y-2">
                  <div className="flex justify-between text-xs font-mono text-gray-400">
                      <span>STATUS: {batchQueue.length > 0 ? 'RUNNING' : 'COMPLETED'}</span>
                      <span>PROCESSED: {processedCount}</span>
                  </div>
                  <div className="h-4 bg-gray-900 border border-gray-700 rounded-sm overflow-hidden relative">
                        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,transparent_25%,#fff_25%,#fff_50%,transparent_50%,transparent_75%,#fff_75%,#fff_100%)] bg-[length:10px_10px]"></div>
                        <div className="absolute inset-0 flex items-center justify-center text-[9px] font-bold text-white z-10 drop-shadow-md">
                            {currentProcessingItem ? `正在扫描: ${currentProcessingItem.name}` : '等待指令...'}
                        </div>
                  </div>
              </div>
              <div ref={logContainerRef} className="flex-1 bg-black border border-gray-800 p-4 font-mono text-xs overflow-y-auto space-y-1 shadow-inner font-bold">
                  {batchLogs.map((log, idx) => (
                      <div key={idx} className={`break-all font-mono leading-relaxed ${
                          log.type === 'success' ? 'text-term-green' : 
                          log.type === 'rare' ? 'text-cyber-purple bg-cyber-purple/10 px-1 border-l-2 border-cyber-purple' :
                          log.type === 'dim' ? 'text-gray-600' : 'text-gray-400'}`}>
                          {log.type === 'rare' ? '>>> ' : '> '}{log.msg}
                      </div>
                  ))}
              </div>
          </div>
      )}

      {/* Toolbar */}
      <div className="p-4 border-b border-term-gray flex flex-col gap-4 bg-term-black relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-2">
                <FolderOpen className="text-term-green" />
                <h2 className="text-lg font-bold tracking-wider text-white">数据仓库</h2>
                <span className="text-xs text-gray-500 px-2 border-l border-gray-700">
                    ITEMS: {totalCount}
                </span>
            </div>
            
            <div className="flex gap-2 items-center self-end sm:self-auto">
                {/* Archive View Toggle */}
                <button 
                    onClick={() => setViewMode(prev => prev === 'inventory' ? 'archive' : 'inventory')}
                    className={`flex items-center gap-2 px-3 py-2 border rounded text-xs transition-colors
                        ${viewMode === 'archive' ? 'bg-orange-900/30 text-orange-400 border-orange-500' : 'bg-black/30 text-gray-400 border-gray-700 hover:text-white'}
                    `}
                >
                    <Book size={12} />
                    ARCHIVE
                </button>

                {/* Sort Button (Only for Inventory) */}
                {viewMode === 'inventory' && (
                    <button 
                        onClick={() => setSortBy(prev => prev === 'recent' ? 'rarity' : 'recent')}
                        className="flex items-center gap-2 px-3 py-2 border border-gray-700 rounded text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors bg-black/30"
                    >
                        <ArrowUpDown size={12} />
                        {sortBy === 'recent' ? 'DATE' : 'RARITY'}
                    </button>
                )}

                {/* Batch Button (Only for Inventory) */}
                {viewMode === 'inventory' && (
                    <div className="relative">
                        <button 
                            onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                            className={`flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded transition-all bg-term-black
                                ${isMenuOpen ? 'border-term-green text-term-green' : 'border-gray-800 text-gray-500 hover:text-term-green hover:border-term-green/50'}
                            `}
                        >
                            <Microscope size={14} />
                            批量调查
                            <ChevronDown size={12} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isMenuOpen && (
                            <div className="absolute top-full right-0 mt-2 w-48 bg-term-black border border-term-gray shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded overflow-hidden z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-100">
                                <div className="px-3 py-2 text-[10px] text-gray-500 uppercase font-bold border-b border-gray-800 bg-gray-900/50">
                                    选择目标稀有度
                                </div>
                                {['common', 'rare', 'legendary', 'mythic', 'anomaly'].map(rarity => {
                                    const count = proceduralCounts[rarity] || 0;
                                    const colorClass = getRarityColor(rarity);
                                    return (
                                        <button
                                            key={rarity}
                                            onClick={() => startBatch(rarity)}
                                            disabled={count === 0}
                                            className={`
                                                flex items-center justify-between px-3 py-2 text-xs text-left transition-colors
                                                ${count === 0 ? 'text-gray-700 cursor-not-allowed' : 'hover:bg-gray-900'}
                                            `}
                                        >
                                            <span className={`uppercase font-mono ${count > 0 ? colorClass.split(' ')[0] : ''}`}>{rarity}</span>
                                            <span className="text-gray-600 font-bold">{count}</span>
                                        </button>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>

        {viewMode === 'inventory' && (
            <div className="flex flex-col gap-3">
                {/* Stylish Filter Bar */}
                <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide pb-1">
                    {filters.map(filter => {
                        const isActive = filterType === filter.id;
                        const Icon = filter.icon;
                        return (
                            <button
                                key={filter.id}
                                onClick={() => setFilterType(filter.id as any)}
                                className={`
                                    flex items-center gap-1.5 px-3 py-1.5 rounded-sm text-[10px] font-bold uppercase transition-all whitespace-nowrap border
                                    ${isActive 
                                        ? 'bg-term-green/20 text-term-green border-term-green shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
                                        : 'bg-black/30 text-gray-500 border-gray-800 hover:text-gray-300 hover:border-gray-600'
                                    }
                                `}
                            >
                                <Icon size={12} />
                                {filter.label}
                            </button>
                        )
                    })}
                </div>
            </div>
        )}
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-4 relative z-0">
        {viewMode === 'archive' ? (
            // --- ARCHIVE VIEW ---
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {UNIQUE_ARTIFACTS.map(uniqueArt => {
                    const isUnlocked = foundUniqueIds.includes(uniqueArt.id);
                    const colorClass = getRarityColor(uniqueArt.rarity);
                    
                    return (
                        <div 
                            key={uniqueArt.id}
                            className={`group relative flex flex-col p-3 border transition-all cursor-pointer min-h-[100px]
                                ${isUnlocked 
                                    ? `bg-black/40 hover:bg-gray-900/60 ${colorClass.split(' ')[1]}` 
                                    : 'bg-black/80 border-gray-800 opacity-50 grayscale'
                                }
                            `}
                            onClick={() => isUnlocked && setSelectedArtifact(uniqueArt)}
                        >
                            <div className="flex items-start gap-3 mb-2">
                                <div className={`shrink-0 w-10 h-10 flex items-center justify-center border rounded bg-black/50 ${isUnlocked ? colorClass : 'border-gray-700'}`}>
                                    {isUnlocked ? getArtifactIcon(uniqueArt) : <X size={16} className="text-gray-700"/>}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className={`text-xs font-bold truncate ${isUnlocked ? colorClass.split(' ')[0] : 'text-gray-600'}`}>
                                        {isUnlocked ? uniqueArt.name : '?????????'}
                                    </h4>
                                    <span className={`text-[9px] uppercase mt-1 inline-block ${isUnlocked ? 'text-gray-500' : 'text-gray-700'}`}>
                                        {uniqueArt.rarity}
                                    </span>
                                </div>
                            </div>
                            {isUnlocked && (
                                <p className="text-[9px] text-gray-500 line-clamp-2 mt-auto">
                                    {uniqueArt.description}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        ) : (
            // --- INVENTORY VIEW ---
            filteredArtifacts.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-600 gap-2">
                    <DownloadCloud size={32} className="opacity-20" />
                    <p>No Data Found</p>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {filteredArtifacts.map((artifact) => {
                        const colorClass = getRarityColor(artifact.rarity);
                        return (
                            <div 
                                key={artifact.id}
                                className={`group relative flex gap-3 p-3 border bg-black/40 hover:bg-gray-900/60 transition-all cursor-pointer ${colorClass.split(' ')[1]}`}
                                onClick={() => setSelectedArtifact(artifact)}
                            >
                                 <div className={`shrink-0 w-12 h-12 flex items-center justify-center border rounded bg-black/50 relative ${colorClass}`}>
                                    {getArtifactIcon(artifact)}
                                    {artifact.hasHint && (
                                        <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></div>
                                    )}
                                 </div>
                                 
                                 <div className="flex-1 min-w-0 flex flex-col justify-between">
                                    <div>
                                        <div className="flex justify-between items-start">
                                            <h4 className={`text-xs font-bold truncate ${colorClass.split(' ')[0]}`}>{artifact.name}</h4>
                                        </div>
                                        <span className={`text-[9px] uppercase border px-1 rounded inline-block mt-1 ${artifact.rarity !== 'common' ? colorClass : 'border-gray-800 text-gray-500'}`}>
                                            {artifact.rarity === 'common' ? artifact.subtype.toUpperCase() : artifact.rarity}
                                        </span>
                                        <p className="text-[9px] text-gray-500 truncate mt-0.5">{artifact.details}</p>
                                    </div>
                                 </div>

                                 <button 
                                    onClick={(e) => { e.stopPropagation(); onRecycle(artifact); }}
                                    className="absolute bottom-2 right-2 p-1.5 text-gray-600 hover:text-term-green hover:bg-term-green/10 rounded transition-colors opacity-0 group-hover:opacity-100"
                                    title="Investigate"
                                 >
                                    <Microscope size={14} />
                                 </button>
                            </div>
                        );
                    })}
                </div>
            )
        )}
      </div>

      {selectedArtifact && (
        <ArtifactModal 
            artifact={selectedArtifact} 
            onClose={() => setSelectedArtifact(null)} 
            onRecycle={
                // Only show recycle button if we are in INVENTORY mode, not ARCHIVE mode
                viewMode === 'inventory' ? () => {
                    onRecycle(selectedArtifact);
                    setSelectedArtifact(null);
                } : undefined
            }
        />
      )}
    </div>
  );
};

export default ArtifactInventory;
