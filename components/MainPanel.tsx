
import React, { useState } from 'react';
import { GameState, ResourceType, Artifact, BuildingCategory, LogEntry, Building, Tech } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { CATEGORY_CONFIG, RESOURCE_INFO } from '../constants';
import { Grid, FlaskConical, FolderOpen, CheckSquare, Square, ChevronDown, ChevronRight, Maximize2, Minimize2, Filter, XCircle, MessageSquare } from 'lucide-react';
import * as Icons from 'lucide-react';
import BuildingCard from './BuildingRow';
import TechCard from './TechRow';
import ArtifactInventory from './ArtifactInventory';
import DetailsModal from './DetailsModal';
import TruthBoard from './TruthBoard';

interface MainPanelProps {
  gameState: GameState;
  onBuyBuilding: (id: string) => void;
  onSellBuilding: (id: string) => void;
  onResearchTech: (id: string) => void;
  onRecycleArtifact: (artifact: Artifact) => void;
  onRecycleArtifactsByRarity: (rarity: string) => void;
  globalCostReduction: number;
  addGlobalLog: (msg: string, type?: LogEntry['type']) => void;
}

const MainPanel: React.FC<MainPanelProps> = ({ 
    gameState, onBuyBuilding, onSellBuilding, onResearchTech, onRecycleArtifact, onRecycleArtifactsByRarity, globalCostReduction, addGlobalLog
}) => {
  const [activeTab, setActiveTab] = useState<'nodes' | 'research' | 'inventory' | 'board'>('nodes');
  
  // Tech State
  const [hideResearched, setHideResearched] = useState<boolean>(false);
  const [isCompact, setIsCompact] = useState<boolean>(false); 
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});

  // Building State
  const [collapsedBuildingCategories, setCollapsedBuildingCategories] = useState<Record<string, boolean>>({});
  const [resourceFilter, setResourceFilter] = useState<ResourceType | null>(null);

  // Details Modal State
  const [selectedDetailItem, setSelectedDetailItem] = useState<Building | Tech | null>(null);
  const [selectedDetailType, setSelectedDetailType] = useState<'building' | 'tech'>('building');

  const toggleCategory = (cat: string) => {
      setCollapsedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const toggleBuildingCategory = (cat: string) => {
      setCollapsedBuildingCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  const openDetails = (item: Building | Tech, type: 'building' | 'tech') => {
      setSelectedDetailItem(item);
      setSelectedDetailType(type);
  };

  // Resources available for filtering - Now includes ALL resources
  const filterableResources = Object.values(ResourceType);

  return (
    <section className="flex-1 flex flex-col bg-term-black min-w-0 h-full overflow-hidden relative">
        {/* Static Background Texture */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-0" 
             style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
        ></div>

        {/* Tabs */}
        <div className="flex border-b border-term-gray bg-black/80 z-30 shrink-0 relative backdrop-blur-sm">
            <button 
                onClick={() => setActiveTab('nodes')}
                className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                    ${activeTab === 'nodes' ? 'text-term-green' : 'text-gray-500 hover:text-gray-300'}`}
            >
                <Grid size={16} className={activeTab === 'nodes' ? 'text-term-green' : 'opacity-70'} />
                <span className="hidden sm:inline">节点</span>
                {activeTab === 'nodes' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-term-green shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('research')}
                className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                    ${activeTab === 'research' ? 'text-blue-400' : 'text-gray-500 hover:text-gray-300'}`}
            >
                <FlaskConical size={16} className={activeTab === 'research' ? 'text-blue-400' : 'opacity-70'} />
                <span className="hidden sm:inline">科技</span>
                {activeTab === 'research' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.5)]"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('inventory')}
                className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                    ${activeTab === 'inventory' ? 'text-cyber-purple' : 'text-gray-500 hover:text-gray-300'}`}
            >
                <FolderOpen size={16} className={activeTab === 'inventory' ? 'text-cyber-purple' : 'opacity-70'} />
                <span className="hidden sm:inline">仓库</span>
                {activeTab === 'inventory' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyber-purple shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('board')}
                className={`flex-1 py-3 text-xs font-bold flex items-center justify-center gap-2 transition-all relative overflow-hidden group
                    ${activeTab === 'board' ? 'text-orange-500' : 'text-gray-500 hover:text-gray-300'}`}
            >
                <MessageSquare size={16} className={activeTab === 'board' ? 'text-orange-500' : 'opacity-70'} />
                <span className="hidden sm:inline">真相版</span>
                {activeTab === 'board' && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>}
            </button>
        </div>
        
        {/* Sub-Header for Research Filters */}
        {activeTab === 'research' && (
            <div className="px-4 py-2 bg-term-black/90 border-b border-term-gray/30 flex justify-between items-center select-none z-20 shrink-0 relative backdrop-blur-sm">
                <button 
                    onClick={() => setIsCompact(!isCompact)}
                    className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 hover:text-white transition-colors"
                >
                    {isCompact ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                    {isCompact ? '大图' : '紧凑'}
                </button>

                <button 
                    onClick={() => setHideResearched(!hideResearched)}
                    className="flex items-center gap-2 text-[10px] md:text-xs text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                    {hideResearched ? <CheckSquare size={14} className="text-term-green" /> : <Square size={14} />}
                    隐藏已完成
                </button>
            </div>
        )}

        {/* Sub-Header for Building Filters */}
        {activeTab === 'nodes' && (
            <div className="px-4 py-2 bg-term-black/90 border-b border-term-gray/30 flex items-center gap-3 overflow-x-auto whitespace-nowrap scrollbar-hide z-20 shrink-0 relative backdrop-blur-sm">
                <div className="flex items-center gap-2 text-xs text-gray-500 mr-2 shrink-0">
                    <Filter size={14} />
                    <span className="hidden sm:inline">产出:</span>
                </div>
                {filterableResources.map(res => {
                    const info = RESOURCE_INFO[res];
                    const Icon = (Icons as any)[info.icon] || FlaskConical;
                    const isActive = resourceFilter === res;
                    return (
                        <button
                            key={res}
                            onClick={() => setResourceFilter(isActive ? null : res)}
                            className={`
                                flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold uppercase transition-all border
                                ${isActive 
                                    ? `${info.color} bg-white/10 border-white/20 shadow-[0_0_10px_rgba(0,0,0,0.5)]` 
                                    : 'text-gray-500 border-transparent hover:bg-gray-800 hover:text-gray-300'}
                            `}
                            title={`筛选产出: ${info.name}`}
                        >
                            <Icon size={12} />
                            {info.name}
                        </button>
                    )
                })}
                {resourceFilter && (
                    <button 
                        onClick={() => setResourceFilter(null)}
                        className="ml-auto text-xs text-gray-500 hover:text-red-400 flex items-center gap-1 shrink-0"
                    >
                        <XCircle size={14} /> 清除
                    </button>
                )}
            </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-dots relative z-0 scroll-smooth">
            {activeTab === 'nodes' && (
                <div className="pb-20 md:pb-4">
                    {Object.values(BuildingCategory).map(cat => {
                        let categoryBuildings = BUILDINGS.filter(b => b.category === cat);
                        
                        categoryBuildings = categoryBuildings.filter(b => 
                            (gameState.totalInfoMined >= b.unlockRequirement * 0.5 || b.unlockRequirement === 0) &&
                            (!b.requireTech || b.requireTech.every(t => gameState.researchedTechs.includes(t)))
                        );

                        if (resourceFilter) {
                            categoryBuildings = categoryBuildings.filter(b => 
                                b.baseProduction && (b.baseProduction[resourceFilter] || 0) > 0
                            );
                        }
                        
                        if (categoryBuildings.length === 0) return null;

                        const isCollapsed = collapsedBuildingCategories[cat];
                        const meta = CATEGORY_CONFIG[cat];

                        return (
                            <div key={cat} className="mb-4">
                                <div 
                                    className={`sticky top-0 z-10 flex items-center gap-2 px-4 py-2 cursor-pointer group select-none backdrop-blur-md bg-term-black/80 border-y border-term-gray/20 shadow-sm transition-colors hover:bg-term-gray/20`}
                                    onClick={() => toggleBuildingCategory(cat)}
                                >
                                    <div className={`p-0.5 rounded transition-colors ${meta.color.replace(/border-.*$/, '')}`}>
                                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                                    </div>
                                    <h2 className={`font-bold text-xs tracking-widest uppercase ${meta.color.split(' ')[0]}`}>{meta.name}</h2>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline opacity-70 ml-2">{meta.description}</span>
                                    <div className="ml-auto text-[10px] font-mono text-gray-600 bg-black/50 px-2 py-0.5 rounded border border-gray-800">
                                        {categoryBuildings.reduce((acc, b) => acc + (gameState.buildings[b.id] || 0), 0)} Unit(s)
                                    </div>
                                </div>

                                {!isCollapsed && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 p-4">
                                        {categoryBuildings.map(building => {
                                            const count = gameState.buildings[building.id] || 0;
                                            let canAfford = true;
                                            (Object.entries(building.baseCosts) as [ResourceType, number][]).forEach(([res, base]) => {
                                                let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
                                                cost = Math.floor(cost * (1 - globalCostReduction));
                                                cost = Math.max(1, cost);
                                                if (gameState.resources[res] < cost) canAfford = false;
                                            });

                                            // Special check for negative production cost
                                            if (building.baseProduction) {
                                                for (const [res, amount] of Object.entries(building.baseProduction)) {
                                                    if (amount < 0 && gameState.resources[res as ResourceType] <= 0) {
                                                        canAfford = false;
                                                        break;
                                                    }
                                                }
                                            }

                                            return (
                                                <BuildingCard
                                                    key={building.id}
                                                    building={building}
                                                    count={count}
                                                    canAfford={canAfford}
                                                    resourceState={gameState.resources}
                                                    onBuy={() => onBuyBuilding(building.id)}
                                                    onSell={() => onSellBuilding(building.id)}
                                                    onViewDetails={() => openDetails(building, 'building')}
                                                />
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    
                    {resourceFilter && (
                        <div className="flex flex-col items-center justify-center py-10 text-gray-600 gap-2">
                            <span className="text-xs opacity-50">--- 筛选结束 ---</span>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'research' && (
                <div className="pb-20 md:pb-4">
                    {Object.values(BuildingCategory).map(cat => {
                        const categoryTechs = TECHS.filter(t => t.category === cat).sort((a, b) => a.tier - b.tier);
                        
                        const isCategoryVisible = categoryTechs.some(tech => 
                            gameState.researchedTechs.includes(tech.id) || 
                            (!tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech))
                        );

                        if (!isCategoryVisible) return null;

                        const visibleTechs = categoryTechs.filter(tech => {
                             const isResearched = gameState.researchedTechs.includes(tech.id);
                             if (hideResearched && isResearched) return false;
                             const isUnlocked = !tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech);
                             return isUnlocked;
                        });

                        if (visibleTechs.length === 0 && hideResearched) return null;

                        const isCollapsed = collapsedCategories[cat];
                        const meta = CATEGORY_CONFIG[cat];

                        return (
                            <div key={cat} className="mb-4">
                                <div 
                                    className={`sticky top-0 z-10 flex items-center gap-2 px-4 py-2 cursor-pointer group select-none backdrop-blur-md bg-term-black/80 border-y border-term-gray/20 shadow-sm transition-colors hover:bg-term-gray/20`}
                                    onClick={() => toggleCategory(cat)}
                                >
                                    <div className={`p-0.5 rounded transition-colors ${meta.color.replace(/border-.*$/, '')}`}>
                                        {isCollapsed ? <ChevronRight size={14} /> : <ChevronDown size={14} />}
                                    </div>
                                    <h2 className={`font-bold text-xs tracking-widest uppercase ${meta.color.split(' ')[0]}`}>{meta.name}</h2>
                                    <span className="text-[10px] text-gray-500 hidden sm:inline opacity-70 ml-2">{meta.description}</span>
                                    <div className="ml-auto text-[10px] font-mono text-gray-600">
                                        {categoryTechs.filter(t => gameState.researchedTechs.includes(t.id)).length} / {categoryTechs.length}
                                    </div>
                                </div>

                                {!isCollapsed && (
                                    <div className={`grid gap-3 p-4 ${isCompact ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
                                        {visibleTechs.map(tech => {
                                            const isResearched = gameState.researchedTechs.includes(tech.id);
                                            let isLockedByExclusion = false;
                                            if (tech.exclusiveWith) {
                                                isLockedByExclusion = tech.exclusiveWith.some(conflictId => gameState.researchedTechs.includes(conflictId));
                                            }

                                            let canAfford = true;
                                            (Object.entries(tech.costs) as [ResourceType, number][]).forEach(([res, cost]) => {
                                                    let reducedCost = Math.floor(cost * (1 - globalCostReduction));
                                                    reducedCost = Math.max(1, reducedCost);
                                                    if (gameState.resources[res] < reducedCost) canAfford = false;
                                            });

                                            return (
                                                <TechCard 
                                                    key={tech.id}
                                                    tech={tech}
                                                    isResearched={isResearched}
                                                    canAfford={canAfford}
                                                    isLockedByExclusion={isLockedByExclusion}
                                                    resourceState={gameState.resources}
                                                    onResearch={() => onResearchTech(tech.id)}
                                                    isCompact={isCompact}
                                                    onViewDetails={() => openDetails(tech, 'tech')}
                                                />
                                            )
                                        })}
                                        
                                        {visibleTechs.length === 0 && !hideResearched && (
                                            <div className="col-span-full py-4 text-center text-xs text-gray-600 border border-dashed border-gray-800 rounded">
                                                待解锁前置科技...
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'inventory' && (
                <div className="h-full">
                    <ArtifactInventory 
                        artifacts={gameState.artifacts}
                        onRecycle={onRecycleArtifact}
                        onRecycleArtifactsByRarity={onRecycleArtifactsByRarity}
                        onLog={addGlobalLog} 
                        detailedLogsEnabled={gameState.settings.showDetailedBatchLogs} 
                    />
                </div>
            )}

            {activeTab === 'board' && (
                <div className="h-full">
                    <TruthBoard gameState={gameState} />
                </div>
            )}
        </div>

        {/* DETAILS MODAL */}
        {selectedDetailItem && (
            <DetailsModal 
                item={selectedDetailItem}
                type={selectedDetailType}
                onClose={() => setSelectedDetailItem(null)}
            />
        )}
    </section>
  );
};

export default MainPanel;
