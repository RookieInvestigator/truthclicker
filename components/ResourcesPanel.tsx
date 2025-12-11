
import React from 'react';
import { GameState, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Search, FileText, Box, Eraser, Dices, ArrowUpCircle } from 'lucide-react';
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

  const resourceList = [
      ResourceType.FUNDS, 
      ResourceType.POWER, 
      ResourceType.FOLLOWERS, 
      ResourceType.CRED, 
      ResourceType.CULTURE,
      
      ResourceType.PLEASURE,
      ResourceType.PROBABILITY, 
      ResourceType.REALITY, 

      ResourceType.CODE, 
      ResourceType.TECH_CAPITAL, 
      ResourceType.OPS, 
      ResourceType.BIOMASS, 
      
      ResourceType.CARDBOARD,    
      ResourceType.SPAM,  

      ResourceType.LORE, 
      ResourceType.ANCIENT_WISDOM, 

      ResourceType.STORY, 
      ResourceType.RUMORS, 
      ResourceType.PANIC, 
      ResourceType.MIND_CONTROL, 

      ResourceType.CLUE, 
      ResourceType.KNOWLEDGE, 
      ResourceType.TRUTH
  ];

  return (
    <section className="w-[20%] border-r border-term-gray flex flex-col bg-term-black/90 min-w-[240px]">
        {/* Mining Button Area */}
        <div className="p-4 border-b border-term-gray/50 flex flex-col items-center justify-center bg-gradient-to-b from-term-green/5 to-transparent shrink-0">
            <button 
                onClick={onMine}
                className="
                    group relative w-24 h-24 rounded-full border-4 border-term-gray bg-term-black
                    flex items-center justify-center flex-col gap-1
                    shadow-[0_0_20px_rgba(0,0,0,0.8)]
                    active:scale-95 transition-all duration-75 outline-none
                    hover:border-term-green hover:shadow-[0_0_15px_rgba(34,197,94,0.3)]
                "
            >
                <div className="absolute inset-0 rounded-full border border-term-green/20 scale-110 animate-pulse-fast"></div>
                <Search size={24} className="text-gray-400 group-hover:text-term-white group-active:text-term-green transition-colors" />
                <span className="text-[9px] uppercase tracking-widest text-gray-500 group-hover:text-term-green">浏览</span>
            </button>
            <div className="mt-2 text-[10px] text-gray-500 font-mono">+{clickPower} Info/Click</div>
        </div>

        {/* Resources List */}
        <div className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-term-gray scrollbar-track-term-black">
            {/* Primary Info Resource */}
            <div className="bg-term-gray/10 p-2 rounded border border-term-gray/30 mb-2 shadow-sm sticky top-0 z-10 backdrop-blur-sm">
                <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-1.5 text-gray-400">
                        <FileText size={14} />
                        <span className="text-xs font-bold uppercase tracking-wider">信息流</span>
                    </div>
                    <div className={`text-[10px] ${productionRates[ResourceType.INFO] >= 0 ? 'text-term-green' : 'text-red-500'}`}>
                        {productionRates[ResourceType.INFO] >= 0 ? '+' : ''}{productionRates[ResourceType.INFO].toFixed(1)}/s
                    </div>
                </div>
                <div className="text-xl font-bold text-white font-mono tracking-tight leading-none">
                    {Math.floor(resources[ResourceType.INFO]).toLocaleString()}
                </div>
            </div>

            {/* Other Resources - Compact Table Layout */}
            <div className="flex flex-col border border-white/5 rounded overflow-hidden">
                {resourceList.map((res, idx) => {
                    const info = RESOURCE_INFO[res];
                    const amount = resources[res];
                    const rate = productionRates[res];
                    
                    if (amount <= 0 && rate === 0 && totalInfoMined < 500) return null;

                    const Icon = (Icons as any)[info.icon] || Box;

                    // Manual Action Logic
                    let actionButton = null;

                    // 1. Reality Flush
                    if (res === ResourceType.REALITY && researchedTechs.includes('reality_scrubber_protocol')) {
                        const canAfford = amount >= 20;
                        actionButton = (
                            <button 
                                onClick={(e) => { e.stopPropagation(); onTriggerRealityFlush && onTriggerRealityFlush(); }}
                                disabled={!canAfford}
                                className={`ml-2 p-1 rounded-sm transition-colors border
                                    ${canAfford 
                                        ? 'bg-red-900/30 text-red-400 border-red-900/50 hover:bg-red-500 hover:text-white cursor-pointer' 
                                        : 'bg-transparent text-gray-700 border-gray-800 cursor-not-allowed'
                                    }
                                `}
                                title={canAfford ? "消耗20点: 清除异常" : "需 20 现实稳定"}
                            >
                                <Eraser size={10} />
                            </button>
                        );
                    }

                    // 2. Probability Drive
                    if (res === ResourceType.PROBABILITY && researchedTechs.includes('probability_drive')) {
                        const isActive = isLuckBoostActive;
                        const canAfford = amount >= 5;
                        actionButton = (
                            <button 
                                onClick={(e) => { e.stopPropagation(); onTriggerProbabilityDrive && onTriggerProbabilityDrive(); }}
                                disabled={isActive || !canAfford}
                                className={`ml-2 p-1 rounded-sm transition-all relative overflow-hidden group border
                                    ${isActive 
                                        ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50 cursor-default' 
                                        : canAfford
                                            ? 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50 hover:bg-cyber-purple hover:text-white cursor-pointer'
                                            : 'bg-transparent text-gray-700 border-gray-800 cursor-not-allowed'
                                    }`}
                                title={isActive ? "冷却中" : canAfford ? "消耗5点: 幸运爆发" : "需 5 正概率"}
                            >
                                {isActive ? (
                                    <span className="text-[8px] font-bold animate-pulse">{luckRemaining}s</span>
                                ) : (
                                    <Dices size={10} />
                                )}
                            </button>
                        );
                    }

                    const isHighlight = (res === ResourceType.PROBABILITY && isLuckBoostActive);

                    return (
                        <div key={res} className={`
                            flex items-center justify-between py-1.5 px-2 bg-black/20 hover:bg-white/5 transition-colors gap-2
                            ${idx !== resourceList.length - 1 ? 'border-b border-white/5' : ''}
                            ${isHighlight ? 'bg-yellow-900/10 shadow-[inset_0_0_10px_rgba(234,179,8,0.1)]' : ''}
                        `}>
                            {/* Left: Icon & Name */}
                            <div className="flex items-center gap-2 min-w-0 overflow-hidden">
                                <Icon size={12} className={`${info.color} opacity-70 shrink-0`} />
                                <span className={`text-[10px] font-bold uppercase tracking-wider truncate text-gray-500 group-hover:text-gray-400`}>
                                    {info.name}
                                </span>
                            </div>
                            
                            {/* Right: Value & Rate */}
                            <div className="flex items-center gap-1 shrink-0">
                                <div className="flex flex-col items-end leading-none">
                                    <span className={`text-xs font-mono ${info.color}`}>
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
    </section>
  );
};

export default ResourcesPanel;
