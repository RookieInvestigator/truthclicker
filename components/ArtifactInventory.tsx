
import React, { useState, useMemo, useEffect } from 'react';
import { Artifact } from '../types';
import { Search, FolderOpen, DownloadCloud, Globe, Database, MessageSquare, ChevronDown, Microscope, Loader2 } from 'lucide-react';
import { ArrowUpDown, File, FileImage, FileText, FileAudio, FileCode } from 'lucide-react';
import ArtifactModal from './ArtifactModal';

interface ArtifactInventoryProps {
  artifacts: Artifact[];
  onRecycle: (artifact: Artifact) => void;
  onRecycleArtifactsByRarity: (rarity: string) => void; // Actually batchInvestigate
}

const ArtifactInventory: React.FC<ArtifactInventoryProps> = ({ artifacts, onRecycle, onRecycleArtifactsByRarity }) => {
  const [filterType, setFilterType] = useState<'all' | 'file' | 'bookmark'>('all');
  const [sortBy, setSortBy] = useState<'recent' | 'rarity'>('recent');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Batch Progress State
  const [isProcessing, setIsProcessing] = useState(false);
  const [processTarget, setProcessTarget] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  // Stats & Procedural Counts by Rarity
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

  // Handle Batch Investigation Progress
  useEffect(() => {
      let interval: ReturnType<typeof setInterval>;
      if (isProcessing && processTarget) {
          setProgress(0);
          interval = setInterval(() => {
              setProgress(prev => {
                  if (prev >= 100) {
                      clearInterval(interval);
                      onRecycleArtifactsByRarity(processTarget); // Trigger actual logic
                      setIsProcessing(false);
                      setProcessTarget(null);
                      return 100;
                  }
                  return prev + 5; // Speed of bar
              });
          }, 50); // 50ms * 20 steps = 1 second total
      }
      return () => clearInterval(interval);
  }, [isProcessing, processTarget, onRecycleArtifactsByRarity]);

  // Filter & Sort
  const filteredArtifacts = useMemo(() => {
    let result = [...artifacts];

    // Filter
    if (filterType !== 'all') {
        result = result.filter(a => a.subtype === filterType);
    }
    
    // Search
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        result = result.filter(a => a.name.toLowerCase().includes(q) || a.description.toLowerCase().includes(q));
    }

    // Sort
    if (sortBy === 'recent') {
        result.reverse(); 
    } else if (sortBy === 'rarity') {
        const rarityOrder = { 'anomaly': 6, 'cursed': 5, 'mythic': 4, 'legendary': 3, 'rare': 2, 'common': 1 };
        result.sort((a, b) => (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0));
    }

    return result;
  }, [artifacts, filterType, sortBy, searchQuery]);

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
      if (artifact.subtype === 'bookmark') return <Globe size={20} className="text-blue-400" />;

      const lower = artifact.name.toLowerCase();
      if (lower.endsWith('.sql') || lower.endsWith('.db') || lower.endsWith('.csv')) return <Database size={20} className="text-yellow-400" />;
      if (lower.endsWith('.log') || lower.endsWith('.history')) return <MessageSquare size={20} className="text-pink-400" />;

      if (lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.gif')) return <FileImage size={20} />;
      if (lower.endsWith('.mp3') || lower.endsWith('.wav')) return <FileAudio size={20} />;
      if (lower.endsWith('.txt') || lower.endsWith('.doc') || lower.endsWith('.pdf')) return <FileText size={20} />;
      if (lower.endsWith('.js') || lower.endsWith('.html') || lower.endsWith('.css') || lower.endsWith('.py') || lower.endsWith('.exe')) return <FileCode size={20} />;
      return <File size={20} />;
  }

  return (
    <div className="h-full flex flex-col bg-term-black/50" onClick={() => isMenuOpen && setIsMenuOpen(false)}>
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
            
            <div className="relative">
                <button 
                    onClick={(e) => { e.stopPropagation(); setIsMenuOpen(!isMenuOpen); }}
                    disabled={isProcessing}
                    className={`flex items-center justify-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-wider border rounded transition-all bg-term-black
                        ${isMenuOpen ? 'border-term-green text-term-green' : 'border-gray-800 text-gray-500 hover:text-term-green hover:border-term-green/50'}
                        ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                >
                    {isProcessing ? <Loader2 size={14} className="animate-spin" /> : <Microscope size={14} />}
                    {isProcessing ? '正在分析...' : '批量调查'}
                    <ChevronDown size={12} className={`transition-transform ${isMenuOpen ? 'rotate-180' : ''}`} />
                </button>

                {isMenuOpen && !isProcessing && (
                    <div className="absolute top-full right-0 mt-2 w-48 bg-term-black border border-term-gray shadow-[0_0_20px_rgba(0,0,0,0.8)] rounded overflow-hidden z-50 flex flex-col animate-in fade-in slide-in-from-top-2 duration-100">
                        <div className="px-3 py-2 text-[10px] text-gray-500 uppercase font-bold border-b border-gray-800 bg-gray-900/50">
                            选择调查目标的稀有度
                        </div>
                        {['common', 'rare', 'legendary', 'mythic', 'anomaly'].map(rarity => {
                            const count = proceduralCounts[rarity] || 0;
                            const colorClass = getRarityColor(rarity);
                            return (
                                <button
                                    key={rarity}
                                    onClick={() => {
                                        setProcessTarget(rarity);
                                        setIsProcessing(true);
                                        setIsMenuOpen(false);
                                    }}
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
        </div>

        {/* Processing Bar Overlay */}
        {isProcessing && (
            <div className="absolute top-0 left-0 w-full h-full bg-black/80 z-20 flex items-center justify-center p-4">
                <div className="w-full max-w-md space-y-2">
                    <div className="flex justify-between text-xs text-term-green font-mono">
                        <span>ANALYZING_DATA_STRUCTURES...</span>
                        <span>{progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                        <div 
                            className="h-full bg-term-green transition-all duration-75 ease-linear" 
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>
            </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <div className="relative flex-1">
                <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
                <input 
                    type="text" 
                    placeholder="Search artifacts..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-black/50 border border-gray-700 rounded py-1.5 pl-9 pr-4 text-sm focus:border-term-green focus:outline-none text-gray-300 placeholder-gray-600"
                />
            </div>

            {/* Filters */}
            <div className="flex items-center bg-gray-900/50 rounded border border-gray-700 p-0.5 overflow-x-auto">
                {(['all', 'file', 'bookmark'] as const).map(type => (
                    <button 
                        key={type}
                        onClick={() => setFilterType(type)}
                        className={`px-3 py-1 text-xs rounded transition-colors whitespace-nowrap uppercase 
                        ${filterType === type ? 'bg-gray-700 text-white shadow' : 'text-gray-500 hover:text-gray-300'}`}
                    >
                        {type === 'bookmark' ? 'Index' : type}
                    </button>
                ))}
            </div>

            {/* Sort */}
            <button 
                onClick={() => setSortBy(prev => prev === 'recent' ? 'rarity' : 'recent')}
                className="flex items-center gap-2 px-3 py-1.5 border border-gray-700 rounded text-xs text-gray-400 hover:text-white hover:border-gray-500 transition-colors bg-black/30 shrink-0"
            >
                <ArrowUpDown size={12} />
                {sortBy === 'recent' ? 'DATE' : 'RARITY'}
            </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="flex-1 overflow-y-auto p-4 relative z-0">
        {filteredArtifacts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-600 gap-2">
                <DownloadCloud size={32} className="opacity-20" />
                <p>No Data Found</p>
            </div>
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
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
                                {/* Hint Overlay */}
                                {artifact.hasHint && (
                                    <div className="absolute top-0 right-0 w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_5px_white]"></div>
                                )}
                             </div>
                             
                             <div className="flex-1 min-w-0 flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start">
                                        <h4 className={`text-sm font-bold truncate ${colorClass.split(' ')[0]}`}>{artifact.name}</h4>
                                        <span className={`text-[9px] uppercase border px-1 rounded ${artifact.rarity !== 'common' ? colorClass : 'border-gray-800 text-gray-500'}`}>
                                            {artifact.rarity === 'common' ? artifact.subtype.toUpperCase() : artifact.rarity}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-gray-500 truncate mt-0.5">{artifact.details}</p>
                                </div>
                                
                                <div className="flex items-end justify-between mt-2">
                                     <div className="text-[10px] text-gray-600 font-mono">
                                        {artifact.bonusType === 'none' ? 'UNANALYZED' : 'ACTIVE'}
                                     </div>
                                </div>
                             </div>

                             {/* Quick Action */}
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
        )}
      </div>

      {selectedArtifact && (
        <ArtifactModal 
            artifact={selectedArtifact} 
            onClose={() => setSelectedArtifact(null)} 
            onRecycle={() => {
                onRecycle(selectedArtifact);
                setSelectedArtifact(null);
            }}
        />
      )}
    </div>
  );
};

export default ArtifactInventory;
