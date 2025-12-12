
import React, { useMemo } from 'react';
import { GameState, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Search, FileText, Box, Eraser, Dices, ChevronDown, Activity, Cpu, Users, Database, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ResourcesPanelProps {
  resources: GameState['resources'];
  productionRates: Record<ResourceType, number>;
  totalInfoMined: number;
  clickPower: number;
  onMine: () => void;
}

interface ExtendedResourcesPanelProps extends ResourcesPanelProps {
    onTriggerRealityFlush?: () => void;
    onTriggerProbabilityDrive?: () => void;
    researchedTechs?: string[];
    luckBoostEndTime?: number;
}

const ResourcesPanel: React.FC<ExtendedResourcesPanelProps> = ({ 
    resources, productionRates, totalInfoMined, clickPower, onMine, 
    onTriggerRealityFlush, onTriggerProbabilityDrive, researchedTechs = [], luckBoostEndTime = 0
}) => {
  
  const now = Date.now();
  const isLuckBoostActive = now < luckBoostEndTime;
  const luckRemaining = Math.max(0, Math.ceil((luckBoostEndTime - now) / 1000));

  // Define Groups
  const groups = useMemo(() => [
      { 
          id: 'basic', 
          label: '基础资源', 
          icon: Box,
          resources: [ResourceType.FUNDS, ResourceType.CARDBOARD, ResourceType.TINFOIL, ResourceType.SPAM] 
      },
      { 
          id: 'infra', 
          label: '基础设施', 
          icon: Cpu,
          resources: [ResourceType.OPS, ResourceType.POWER, ResourceType.CODE, ResourceType.TECH_CAPITAL, ResourceType.BIOMASS] 
      },
      { 
          id: 'social', 
          label: '社会工程', 
          icon: Users,
          resources: [ResourceType.FOLLOWERS, ResourceType.CRED, ResourceType.CULTURE, ResourceType.PLEASURE] 
      },
      { 
          id: 'data', 
          label: '数据挖掘', 
          icon: Database,
          resources: [ResourceType.CLUE, ResourceType.KNOWLEDGE, ResourceType.LORE, ResourceType.ANCIENT_WISDOM, ResourceType.FOSSIL, ResourceType.STORY] 
      },
      { 
          id: 'entropy', 
          label: '熵 & 异常', 
          icon: Activity,
          resources: [ResourceType.RUMORS, ResourceType.PANIC, ResourceType.MIND_CONTROL, ResourceType.RED_PILL] 
      },
      { 
          id: 'abstract', 
          label: '现实底层', 
          icon: Zap,
          resources: [ResourceType.PROBABILITY, ResourceType.REALITY, ResourceType.OXYGEN, ResourceType.TRUTH] 
      },
  ], []);

  // Check if Oxygen is unlocked
  const showOxygen = researchedTechs.includes('oxygen_toxicity');

  return (
    // Changed w-[20%] to w-full to fill the parent container defined in App.tsx
    // Removed border-r as it is handled by the parent container in App.tsx to avoid double borders
    <section className="w-full flex flex-col bg-black/40 backdrop-blur-md h-full font-mono">
        {/* Mining Button Area */}
        <div className="p-4 border-b border-term-gray/50 flex flex-col items-center justify-center bg-gradient-to-b from-term-gray/10 to-transparent shrink-0">
            <button 
                onClick={onMine}
                className="
                    group relative w-full h-16 rounded border border-term-gray bg-black
                    flex items-center justify-between px-4 overflow-hidden
                    hover:border-term-green hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]
                    active:scale-[0.98] transition-all duration-100
                "
            >
                <div className="flex items-center gap-3 relative z-10">
                    <div className="p-2 rounded-full bg-term-gray/30 group-hover:bg-term-green/20 transition-colors">
                        <Search size={18} className="text-gray-400 group-hover:text-term-green" />
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="text-xs font-bold text-gray-300 group-hover:text-white tracking-wider">数据挖掘</span>
                        <span className="text-[9px] text-gray-500 font-mono">Click_Op</span>
                    </div>
                </div>
                
                <div className="text-right relative z-10">
                    {/* Fixed decimal places for click power */}
                    <span className="text-xs font-bold text-term-green">+{clickPower.toFixed(1)}</span>
                    <span className="text-[9px] text-gray-600 block">Info/Click</span>
                </div>

                {/* Progress Bar Effect on Click (simulated via active state mainly) */}
                <div className="absolute inset-0 bg-term-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 pointer-events-none"></div>
            </button>
        </div>

        {/* Resources List */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-term-gray scrollbar-track-transparent">
            {/* Primary Info Resource - Sticky at top */}
            <div className="bg-black/80 backdrop-blur-md p-3 border-b border-term-gray/30 sticky top-0 z-20 shadow-md">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2 text-gray-300">
                        <FileText size={14} className="text-term-green" />
                        <span className="text-xs font-bold uppercase tracking-wider">信息流 (INFO)</span>
                    </div>
                    <div className={`text-[10px] font-mono ${productionRates[ResourceType.INFO] >= 0 ? 'text-term-green' : 'text-red-500'}`}>
                        {productionRates[ResourceType.INFO] >= 0 ? '+' : ''}{productionRates[ResourceType.INFO].toFixed(1)}/s
                    </div>
                </div>
                <div className="text-xl font-bold text-white font-mono tracking-tight leading-none">
                    {Math.floor(resources[ResourceType.INFO]).toLocaleString()}
                </div>
            </div>

            {/* Groups */}
            <div className="flex flex-col pb-4">
                {groups.map(group => {
                    // Filter visible resources
                    const visibleResources = group.resources.filter(res => {
                        if (res === ResourceType.OXYGEN && !showOxygen) return false;
                        return resources[res] > 0 || productionRates[res] !== 0 || (res === ResourceType.FUNDS && totalInfoMined > 100);
                    });

                    if (visibleResources.length === 0) return null;

                    return (
                        <div key={group.id} className="border-b border-term-gray/20 last:border-0">
                            <div className="px-3 py-1.5 bg-term-gray/10 text-[10px] font-bold text-gray-500 uppercase tracking-widest flex items-center gap-2 sticky top-[65px] z-10 backdrop-blur-sm border-y border-term-gray/10">
                                <group.icon size={10} />
                                {group.label}
                            </div>
                            
                            <div className="flex flex-col">
                                {visibleResources.map((res) => {
                                    const info = RESOURCE_INFO[res];
                                    const amount = resources[res];
                                    const rate = productionRates[res];
                                    const Icon = (Icons as any)[info.icon] || Box;

                                    // Action Buttons Logic
                                    let actionButton = null;
                                    if (res === ResourceType.REALITY && researchedTechs.includes('reality_scrubber_protocol')) {
                                        const canAfford = amount >= 20;
                                        actionButton = (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onTriggerRealityFlush && onTriggerRealityFlush(); }}
                                                disabled={!canAfford}
                                                className={`ml-2 p-1 rounded transition-colors border ${canAfford ? 'bg-red-900/30 text-red-400 border-red-900/50 hover:bg-red-500 hover:text-white' : 'bg-transparent text-gray-700 border-gray-800 cursor-not-allowed'}`}
                                                title="消耗20点: 清除异常"
                                            >
                                                <Eraser size={10} />
                                            </button>
                                        );
                                    }
                                    if (res === ResourceType.PROBABILITY && researchedTechs.includes('probability_drive')) {
                                        const isActive = isLuckBoostActive;
                                        const canAfford = amount >= 5;
                                        actionButton = (
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); onTriggerProbabilityDrive && onTriggerProbabilityDrive(); }}
                                                disabled={isActive || !canAfford}
                                                className={`ml-2 p-1 rounded transition-colors border ${isActive ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50' : canAfford ? 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50 hover:bg-cyber-purple hover:text-white' : 'bg-transparent text-gray-700 border-gray-800'}`}
                                                title="消耗5点: 幸运爆发"
                                            >
                                                {isActive ? <span className="text-[8px] animate-pulse">{luckRemaining}s</span> : <Dices size={10} />}
                                            </button>
                                        );
                                    }

                                    const isHighlight = (res === ResourceType.PROBABILITY && isLuckBoostActive);

                                    return (
                                        <div key={res} className={`flex items-center justify-between py-1.5 px-3 hover:bg-white/5 transition-colors gap-2 ${isHighlight ? 'bg-yellow-900/10' : ''}`}>
                                            <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                                                <Icon size={12} className={`${info.color} opacity-70 shrink-0`} />
                                                <span className="text-[10px] font-bold text-gray-400 truncate">{info.name}</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-1 shrink-0">
                                                <div className="flex flex-col items-end leading-none">
                                                    <span className={`text-[11px] font-mono ${info.color}`}>
                                                        {Math.floor(amount).toLocaleString()}
                                                    </span>
                                                    {rate !== 0 && (
                                                        <span className={`text-[8px] ${rate > 0 ? 'text-term-green' : 'text-red-400'}`}>
                                                            {rate > 0 ? '+' : ''}{rate.toFixed(1)}/s
                                                        </span>
                                                    )}
                                                </div>
                                                {actionButton}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    </section>
  );
};

export default ResourcesPanel;
