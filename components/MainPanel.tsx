
import React, { useState } from 'react';
import { GameState, ResourceType, Artifact, BuildingCategory } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { CATEGORY_CONFIG } from '../constants';
import { Grid, FlaskConical, FolderOpen, CheckSquare, Square, Monitor, ChevronDown, ChevronRight, Maximize2, Minimize2 } from 'lucide-react';
import BuildingCard from './BuildingRow';
import TechCard from './TechRow';
import ArtifactInventory from './ArtifactInventory';

interface MainPanelProps {
  gameState: GameState;
  onBuyBuilding: (id: string) => void;
  onResearchTech: (id: string) => void;
  onRecycleArtifact: (artifact: Artifact) => void;
  onRecycleAllCommons: () => void;
  globalCostReduction: number;
}

const MainPanel: React.FC<MainPanelProps> = ({ 
    gameState, onBuyBuilding, onResearchTech, onRecycleArtifact, onRecycleAllCommons, globalCostReduction 
}) => {
  const [activeTab, setActiveTab] = useState<'nodes' | 'research' | 'inventory'>('nodes');
  const [hideResearched, setHideResearched] = useState<boolean>(false);
  const [collapsedCategories, setCollapsedCategories] = useState<Record<string, boolean>>({});
  const [isCompact, setIsCompact] = useState<boolean>(false); 

  const toggleCategory = (cat: string) => {
      setCollapsedCategories(prev => ({ ...prev, [cat]: !prev[cat] }));
  };

  return (
    <section className="flex-1 flex flex-col bg-term-black min-w-0">
        {/* Tabs */}
        <div className="flex border-b border-term-gray bg-term-gray/5 z-20">
            <button 
                onClick={() => setActiveTab('nodes')}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors border-r border-term-gray/50
                    ${activeTab === 'nodes' ? 'bg-term-black text-term-green border-t-2 border-t-term-green' : 'text-gray-500 hover:text-gray-300 hover:bg-term-gray/10'}`}
            >
                <Grid size={16} />
                <span>节点网络</span>
            </button>
            <button 
                onClick={() => setActiveTab('research')}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors border-r border-term-gray/50
                    ${activeTab === 'research' ? 'bg-term-black text-blue-400 border-t-2 border-t-blue-400' : 'text-gray-500 hover:text-gray-300 hover:bg-term-gray/10'}`}
            >
                <FlaskConical size={16} />
                <span>科技树</span>
            </button>
            <button 
                onClick={() => setActiveTab('inventory')}
                className={`flex-1 py-4 text-sm font-bold flex items-center justify-center gap-2 transition-colors relative
                    ${activeTab === 'inventory' ? 'bg-term-black text-cyber-purple border-t-2 border-t-cyber-purple' : 'text-gray-500 hover:text-gray-300 hover:bg-term-gray/10'}`}
            >
                <FolderOpen size={16} />
                <span>数据仓库</span>
            </button>
        </div>
        
        {/* Sub-Header for Research Filters */}
        {activeTab === 'research' && (
            <div className="px-6 py-2 bg-term-black border-b border-term-gray/30 flex justify-between items-center select-none z-10">
                <button 
                    onClick={() => setIsCompact(!isCompact)}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                >
                    {isCompact ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                    {isCompact ? '大图模式' : '紧凑模式'}
                </button>

                <button 
                    onClick={() => setHideResearched(!hideResearched)}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors cursor-pointer"
                >
                    {hideResearched ? <CheckSquare size={14} className="text-term-green" /> : <Square size={14} />}
                    隐藏已完成
                </button>
            </div>
        )}

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto bg-dots relative">
            {/* Background Texture - slightly more subtle */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02]" 
                 style={{ backgroundImage: `linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)`, backgroundSize: '40px 40px' }}
            ></div>

            {activeTab === 'nodes' && (
                <div className="space-y-8 p-6 pb-10">
                    {Object.values(BuildingCategory).map(cat => {
                        const categoryBuildings = BUILDINGS.filter(b => b.category === cat);
                        const hasVisible = categoryBuildings.some(b => 
                            (gameState.totalInfoMined >= b.unlockRequirement * 0.5 || b.unlockRequirement === 0) &&
                            (!b.requireTech || b.requireTech.every(t => gameState.researchedTechs.includes(t)))
                        );
                        
                        if (!hasVisible) return null;

                        return (
                            <div key={cat} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-term-gray/50 ${CATEGORY_CONFIG[cat].color}`}>
                                    <Monitor size={16} />
                                    <h2 className="font-bold tracking-wider">{CATEGORY_CONFIG[cat].name}</h2>
                                    <span className="text-xs text-gray-600 font-normal ml-auto hidden sm:inline">{CATEGORY_CONFIG[cat].description}</span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
                                    {categoryBuildings.map(building => {
                                        if (gameState.totalInfoMined < building.unlockRequirement * 0.5 && building.unlockRequirement > 0) return null;
                                        if (building.requireTech) {
                                            const hasAllTechs = building.requireTech.every(reqId => gameState.researchedTechs.includes(reqId));
                                            if (!hasAllTechs) return null;
                                        }

                                        const count = gameState.buildings[building.id] || 0;
                                        let canAfford = true;
                                        (Object.entries(building.baseCosts) as [ResourceType, number][]).forEach(([res, base]) => {
                                            let cost = Math.floor(base * Math.pow(building.costMultiplier, count));
                                            cost = Math.floor(cost * (1 - globalCostReduction));
                                            cost = Math.max(1, cost);
                                            if (gameState.resources[res] < cost) canAfford = false;
                                        });

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
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}

            {activeTab === 'research' && (
                <div className="p-6 pb-20 space-y-6">
                    {/* Category Based Tech Grid */}
                    {Object.values(BuildingCategory).map(cat => {
                        const categoryTechs = TECHS.filter(t => t.category === cat).sort((a, b) => a.tier - b.tier);
                        
                        // Visibility Check
                        const isCategoryVisible = categoryTechs.some(tech => 
                            gameState.researchedTechs.includes(tech.id) || 
                            (!tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech))
                        );

                        if (!isCategoryVisible) return null;

                        // Filter techs inside category
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
                            <div key={cat} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
                                {/* Category Header */}
                                <div 
                                    className={`flex items-center gap-2 mb-3 cursor-pointer group select-none hover:bg-term-gray/10 p-2 rounded -mx-2`}
                                    onClick={() => toggleCategory(cat)}
                                >
                                    <div className={`p-1 rounded transition-colors ${meta.color.replace(/border-.*$/, '')} bg-black/40 border border-white/5`}>
                                        {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
                                    </div>
                                    <div className={`flex-1 flex items-center border-b border-term-gray/20 pb-2 ${meta.color.split(' ')[0]}`}>
                                        <h2 className="font-bold text-sm tracking-widest uppercase">{meta.name}</h2>
                                        <span className="text-[10px] text-gray-500 ml-3 hidden sm:inline">{meta.description}</span>
                                        <div className="ml-auto text-[10px] font-mono text-gray-600">
                                            {categoryTechs.filter(t => gameState.researchedTechs.includes(t.id)).length} / {categoryTechs.length}
                                        </div>
                                    </div>
                                </div>

                                {!isCollapsed && (
                                    <div className={`grid gap-3 ${isCompact ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'}`}>
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
                <ArtifactInventory 
                    artifacts={gameState.artifacts}
                    onRecycle={onRecycleArtifact}
                    onRecycleAllCommons={onRecycleAllCommons}
                />
            )}
        </div>
    </section>
  );
};

export default MainPanel;
