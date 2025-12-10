
import React, { useState } from 'react';
import { GameState, ResourceType, Artifact, BuildingCategory, Tech } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { CATEGORY_CONFIG } from '../constants';
import { Grid, FlaskConical, FolderOpen, CheckSquare, Square, Monitor, ChevronDown, ChevronRight, Maximize2, Minimize2, Lock, Cpu } from 'lucide-react';
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
  const [isCompact, setIsCompact] = useState<boolean>(false); // Used for description toggle now

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
                    {isCompact ? '显示详情' : '隐藏详情'}
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
            {/* Background Texture */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
                 style={{ backgroundImage: `linear-gradient(0deg, transparent 24%, #22c55e 25%, #22c55e 26%, transparent 27%, transparent 74%, #22c55e 75%, #22c55e 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, #22c55e 25%, #22c55e 26%, transparent 27%, transparent 74%, #22c55e 75%, #22c55e 76%, transparent 77%, transparent)`, backgroundSize: '50px 50px' }}
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
                <div className="p-6 pb-20 space-y-10">
                    {/* Category Based Tech Tree */}
                    {Object.values(BuildingCategory).map(cat => {
                        const categoryTechs = TECHS.filter(t => t.category === cat).sort((a, b) => a.tier - b.tier);
                        
                        // Visibility Check: Show Category IF at least one tech in it is "Visible" (Unlocked OR Prereq met)
                        const isCategoryVisible = categoryTechs.some(tech => 
                            gameState.researchedTechs.includes(tech.id) || 
                            (!tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech))
                        );

                        if (!isCategoryVisible) return null;

                        // Filter techs based on standard rules
                        const visibleTechs = categoryTechs.filter(tech => {
                             const isResearched = gameState.researchedTechs.includes(tech.id);
                             if (hideResearched && isResearched) return false;
                             const isUnlocked = !tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech);
                             return isUnlocked;
                        });

                        if (visibleTechs.length === 0 && hideResearched) return null;

                        const isCollapsed = collapsedCategories[cat];
                        const meta = CATEGORY_CONFIG[cat];

                        // Group By Tier for Tree Layout
                        const tieredTechs: Record<number, Tech[]> = {};
                        let maxTier = 0;
                        visibleTechs.forEach(t => {
                            if (!tieredTechs[t.tier]) tieredTechs[t.tier] = [];
                            tieredTechs[t.tier].push(t);
                            if (t.tier > maxTier) maxTier = t.tier;
                        });

                        return (
                            <div key={cat} className="animate-in fade-in slide-in-from-bottom-4 duration-700 bg-term-black/40 border border-term-gray/30 rounded-lg overflow-hidden">
                                {/* Category Header */}
                                <div 
                                    className={`flex items-center gap-3 p-4 cursor-pointer group select-none bg-gradient-to-r from-term-gray/10 to-transparent border-b border-term-gray/20`}
                                    onClick={() => toggleCategory(cat)}
                                >
                                    <div className={`p-1.5 rounded transition-colors ${meta.color.replace(/border-.*$/, '')} bg-black border border-white/10`}>
                                        {isCollapsed ? <ChevronRight size={16} /> : <ChevronDown size={16} />}
                                    </div>
                                    <div className="flex-1">
                                        <h2 className={`font-bold text-base tracking-widest uppercase flex items-center gap-2 ${meta.color.split(' ')[0]}`}>
                                            {meta.name}
                                            <span className="text-[10px] opacity-50 font-normal border border-current px-1 rounded">{visibleTechs.length} NODES</span>
                                        </h2>
                                        <span className="text-xs text-gray-500 font-mono mt-0.5 block">{meta.description}</span>
                                    </div>
                                </div>

                                {!isCollapsed && (
                                    <div className="p-6 relative min-h-[100px]">
                                        {/* Tree Backbone Line */}
                                        <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-term-gray/20 -translate-x-1/2 rounded-full hidden md:block"></div>

                                        <div className="flex flex-col gap-8 relative z-10">
                                            {Object.keys(tieredTechs).map(tStr => {
                                                const tier = parseInt(tStr);
                                                const tierItems = tieredTechs[tier];
                                                
                                                return (
                                                    <div key={tier} className="flex flex-col items-center gap-2">
                                                        {/* Tier Label */}
                                                        {tierItems.length > 0 && (
                                                            <div className="text-[9px] text-gray-600 bg-term-black border border-term-gray px-2 rounded-full z-20 font-mono">
                                                                TIER_{tier}
                                                            </div>
                                                        )}
                                                        
                                                        {/* Row of Techs */}
                                                        <div className="flex flex-wrap justify-center gap-4 w-full">
                                                            {tierItems.map(tech => {
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
                                                        </div>
                                                    </div>
                                                );
                                            })}

                                            {/* Locked/Hidden Indicator */}
                                            {!hideResearched && visibleTechs.length === 0 && (
                                                <div className="py-8 text-center text-xs text-gray-600 border-2 border-dashed border-gray-800 rounded-lg flex flex-col items-center gap-2">
                                                    <Lock size={20} className="opacity-50"/>
                                                    <span>分支路径未解锁</span>
                                                </div>
                                            )}
                                        </div>
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
