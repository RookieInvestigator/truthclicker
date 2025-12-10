
import React, { useState } from 'react';
import { GameState, ResourceType, Artifact, BuildingCategory } from '../types';
import { BUILDINGS } from '../data/buildings';
import { TECHS } from '../data/techs';
import { CATEGORY_CONFIG } from '../constants';
import { Grid, FlaskConical, FolderOpen, CheckSquare, Square, Monitor, ChevronDown, ChevronRight, Layers, Maximize2, Minimize2 } from 'lucide-react';
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

const TIER_INFO: Record<number, { title: string; subtitle: string; color: string }> = {
    0: { title: 'LAYER 0: AWAKENING', subtitle: '初始觉醒 - 意识到表象之下', color: 'text-gray-400 border-gray-600' },
    1: { title: 'LAYER 1: SURFACE WEB', subtitle: '表层网络 - 极客技能与边缘文化', color: 'text-blue-400 border-blue-500' },
    2: { title: 'LAYER 2: DEEP WEB', subtitle: '深网 - 阴谋、怪谈与隐秘知识', color: 'text-purple-400 border-purple-500' },
    3: { title: 'LAYER 3: DARK WEB', subtitle: '暗网 - 禁忌技术与肉体改造', color: 'text-red-500 border-red-600' },
    4: { title: 'LAYER 4: EVENT HORIZON', subtitle: '事件视界 - 现实崩塌的前兆', color: 'text-orange-500 border-orange-500' },
    5: { title: 'LAYER 5: THE FRINGE', subtitle: '边缘科学 - 伪科学与被遗忘的历史', color: 'text-yellow-400 border-yellow-500' },
    6: { title: 'LAYER 6: THE THRESHOLD', subtitle: '临界点 - 物理法则的故障', color: 'text-cyan-400 border-cyan-500' },
    7: { title: 'LAYER 7: THE DREAD', subtitle: '深渊 - 宇宙本质的绝望', color: 'text-indigo-500 border-indigo-500' },
    8: { title: 'LAYER 8: THE OMEGA', subtitle: '终焉 - 超越与重构', color: 'text-term-green border-term-green' },
};

const MainPanel: React.FC<MainPanelProps> = ({ 
    gameState, onBuyBuilding, onResearchTech, onRecycleArtifact, onRecycleAllCommons, globalCostReduction 
}) => {
  const [activeTab, setActiveTab] = useState<'nodes' | 'research' | 'inventory'>('nodes');
  const [hideResearched, setHideResearched] = useState<boolean>(false);
  const [collapsedTiers, setCollapsedTiers] = useState<Record<number, boolean>>({});
  const [isCompact, setIsCompact] = useState<boolean>(false);

  // Group techs by tier for display
  const techsByTier = TECHS.reduce((acc, tech) => {
      if (!acc[tech.tier]) acc[tech.tier] = [];
      acc[tech.tier].push(tech);
      return acc;
  }, {} as Record<number, typeof TECHS>);

  const toggleTier = (tier: number) => {
      setCollapsedTiers(prev => ({ ...prev, [tier]: !prev[tier] }));
  };

  return (
    <section className="flex-1 flex flex-col bg-term-black min-w-0">
        {/* Tabs */}
        <div className="flex border-b border-term-gray bg-term-gray/5">
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
            <div className="px-6 py-2 bg-term-black border-b border-term-gray/30 flex justify-between items-center select-none">
                <button 
                    onClick={() => setIsCompact(!isCompact)}
                    className="flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors"
                >
                    {isCompact ? <Maximize2 size={14} /> : <Minimize2 size={14} />}
                    {isCompact ? '展开视图' : '紧凑视图'}
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
        <div className="flex-1 overflow-y-auto bg-dots">
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

                                        // Additional check: If resource required for maintenance (negative production) is 0, forbid buying
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
                <div className="p-6 pb-20 space-y-8">
                    {Object.keys(TIER_INFO).map((tierStr) => {
                        const tier = parseInt(tierStr);
                        const techs = techsByTier[tier];
                        // If no techs in this tier defined in data, skip
                        if (!techs) return null;

                        const isCollapsed = collapsedTiers[tier];
                        const info = TIER_INFO[tier];

                        // Filter logic for visibility inside tier
                        const visibleTechs = techs.filter(tech => {
                             const isResearched = gameState.researchedTechs.includes(tech.id);
                             if (hideResearched && isResearched) return false;
                             const isUnlocked = !tech.preRequisiteTech || gameState.researchedTechs.includes(tech.preRequisiteTech);
                             return isUnlocked;
                        });

                        // Completely hide tier if no visible techs
                        if (visibleTechs.length === 0) return null;

                        return (
                            <div key={tier} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                                {/* Tier Header */}
                                <div 
                                    className={`flex items-center gap-2 mb-4 cursor-pointer group select-none`}
                                    onClick={() => toggleTier(tier)}
                                >
                                    <div className={`p-1 rounded hover:bg-white/10 transition-colors ${info.color.replace(/border-.*$/, '')}`}>
                                        {isCollapsed ? <ChevronRight size={18} /> : <ChevronDown size={18} />}
                                    </div>
                                    <div className={`flex-1 flex flex-col border-b pb-2 ${info.color.replace('border-', 'border-b-')}`}>
                                        <div className="flex items-center gap-3">
                                            <Layers size={18} />
                                            <h2 className="font-bold text-lg tracking-widest uppercase">{info.title}</h2>
                                        </div>
                                        <span className="text-xs text-gray-500 font-mono mt-1 pl-1">{info.subtitle}</span>
                                    </div>
                                </div>

                                {!isCollapsed && (
                                    <div className={`grid gap-4 ${isCompact ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'}`}>
                                        {visibleTechs.map(tech => {
                                            const isResearched = gameState.researchedTechs.includes(tech.id);
                                            // Re-calculate checks for render
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
