
import React from 'react';
import { Tech, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { Check, ArrowBigUp, MousePointer2, Percent, Recycle, Sparkles, Lock, AlertTriangle } from 'lucide-react';

interface TechCardProps {
  tech: Tech;
  isResearched: boolean;
  canAfford: boolean;
  isLockedByExclusion?: boolean;
  resourceState: Record<ResourceType, number>;
  onResearch: () => void;
  isCompact?: boolean;
}

const TechCard: React.FC<TechCardProps> = ({ tech, isResearched, canAfford, isLockedByExclusion, resourceState, onResearch, isCompact }) => {
  const IconComponent = (Icons as any)[tech.icon] || Icons.Cpu;

  // Handle styles for locked/exclusive state
  if (isLockedByExclusion) {
      if (isCompact) {
          return (
            <div className="relative flex items-center gap-3 p-3 border border-red-900/30 bg-term-black/50 rounded-sm opacity-50 select-none grayscale cursor-not-allowed overflow-hidden">
                <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
                <div className="w-8 h-8 flex items-center justify-center border border-gray-800 text-gray-600 rounded-sm shrink-0">
                    <Lock size={16} />
                </div>
                <div className="min-w-0 flex-1">
                    <h3 className="font-bold font-mono text-xs text-gray-600 line-through truncate">{tech.name}</h3>
                    <div className="text-[9px] text-red-900 font-bold uppercase tracking-wider">LOCKED</div>
                </div>
            </div>
          );
      }

      return (
        <div className="relative flex flex-col p-4 border border-red-900/30 bg-term-black/50 h-full rounded-sm opacity-50 select-none grayscale cursor-not-allowed">
             <div className="absolute inset-0 bg-red-900/5 pointer-events-none"></div>
             <div className="flex justify-between items-start mb-2">
                <div className="w-10 h-10 flex items-center justify-center border border-gray-800 text-gray-600 rounded-sm">
                    <Lock size={20} />
                </div>
                <div className="text-right">
                    <h3 className="font-bold font-mono text-sm text-gray-600 line-through">{tech.name}</h3>
                    <div className="text-[10px] text-red-900 font-bold uppercase tracking-wider">PATH CLOSED</div>
                </div>
             </div>
             <div className="flex-1 flex items-center justify-center">
                 <p className="text-xs text-red-900/50 uppercase font-bold tracking-widest">Incompatible Timeline</p>
             </div>
        </div>
      );
  }

  const borderClass = isResearched 
    ? 'border-term-green/50 bg-term-green/5' 
    : tech.highlight 
        ? canAfford ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.15)]' : 'border-yellow-900/50'
        : canAfford ? 'border-blue-500' : 'border-gray-700';

  const iconColorClass = isResearched 
    ? 'border-term-green text-term-green' 
    : tech.highlight 
        ? 'border-yellow-500 text-yellow-500' 
        : 'border-blue-500 text-blue-400';

  // --- COMPACT VIEW ---
  if (isCompact) {
      return (
        <div 
          onClick={() => !isResearched && canAfford && onResearch()}
          className={`
            relative flex items-center gap-3 p-3 border bg-term-black/80 rounded-sm
            transition-all duration-200 select-none overflow-hidden
            ${isResearched 
                ? 'opacity-60 cursor-default' 
                : canAfford 
                    ? 'cursor-pointer hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] active:scale-[0.98]' 
                    : 'opacity-60 cursor-not-allowed grayscale'
            }
            ${borderClass}
          `}
        >
            <div className={`
                w-8 h-8 flex items-center justify-center border rounded-sm shrink-0
                ${iconColorClass}
            `}>
                {isResearched ? <Check size={16} /> : <IconComponent size={16} />}
            </div>
            <div className="flex flex-col min-w-0 flex-1">
                 <h3 className={`font-bold font-mono text-xs truncate ${isResearched ? 'text-term-green' : tech.highlight ? 'text-yellow-100' : 'text-blue-100'}`}>
                    {tech.name}
                </h3>
                 <div className="text-[9px] text-gray-500 uppercase tracking-wider truncate">
                    {isResearched 
                        ? 'COMPLETE' 
                        : canAfford 
                            ? <span className="text-blue-400">RESEARCHABLE</span>
                            : <span className="text-red-500">INSUFFICIENT FUNDS</span>
                    }
                 </div>
            </div>
        </div>
      );
  }

  // --- FULL VIEW ---
  return (
    <div 
      onClick={() => !isResearched && canAfford && onResearch()}
      className={`
        relative flex flex-col p-4 border bg-term-black/80 h-full rounded-sm
        transition-all duration-200 select-none
        ${isResearched 
            ? 'opacity-60 cursor-default' 
            : canAfford 
                ? 'cursor-pointer hover:bg-blue-500/10 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] active:scale-[0.98]' 
                : 'opacity-60 cursor-not-allowed grayscale'
        }
        ${borderClass}
      `}
    >
      <div className="flex justify-between items-start mb-2">
         <div className={`
            w-10 h-10 flex items-center justify-center border rounded-sm
            ${iconColorClass}
        `}>
            {isResearched ? <Check size={20} /> : <IconComponent size={20} />}
        </div>
        <div className="flex flex-col items-end text-right">
             <h3 className={`font-bold font-mono text-sm ${isResearched ? 'text-term-green' : tech.highlight ? 'text-yellow-100' : 'text-blue-100'}`}>
                {tech.name}
            </h3>
             <div className="text-[10px] text-gray-500 uppercase tracking-wider">{isResearched ? 'COMPLETE' : 'RESEARCH'}</div>
        </div>
      </div>
     
      <div className="flex-1 flex flex-col justify-between">
         <p className="text-[11px] text-gray-400 leading-tight mb-3 min-h-[2.5em]">{tech.description}</p>
         
         <div>
            {/* Warning for Exclusive Choice */}
            {tech.exclusiveWith && !isResearched && (
                <div className="mb-2 flex items-center gap-1.5 text-[10px] text-red-400 bg-red-900/20 px-2 py-1 rounded border border-red-900/50">
                    <AlertTriangle size={12} />
                    <span>选择此项将锁定其他路径</span>
                </div>
            )}

            {/* Effects Display */}
            {!isResearched && (
                <div className="flex flex-wrap gap-1.5 text-[10px] items-center mb-3">
                    
                    {/* Resource Multipliers */}
                    {tech.effects.resourceMultipliers && Object.entries(tech.effects.resourceMultipliers).map(([res, val]) => (
                        <span key={res} className="text-yellow-300 bg-yellow-900/20 px-1 py-0.5 rounded border border-yellow-700/50 flex items-center gap-1">
                            <ArrowBigUp size={10} />
                            {RESOURCE_INFO[res as ResourceType].name} x{(1 + (val as number)).toFixed(1)}
                        </span>
                    ))}

                    {/* Cost Reduction */}
                    {tech.effects.globalCostReduction && (
                        <span className="text-emerald-300 bg-emerald-900/20 px-1 py-0.5 rounded border border-emerald-700/50 flex items-center gap-1">
                            <Percent size={10} />
                            成本 -{(tech.effects.globalCostReduction * 100).toFixed(0)}%
                        </span>
                    )}

                    {/* Click Power */}
                    {tech.effects.clickPowerMult && (
                        <span className="text-pink-300 bg-pink-900/20 px-1 py-0.5 rounded border border-pink-700/50 flex items-center gap-1">
                            <MousePointer2 size={10} />
                            挖掘效能 +{(tech.effects.clickPowerMult * 100).toFixed(0)}%
                        </span>
                    )}

                    {/* Recycle */}
                    {tech.effects.recycleEfficiency && (
                        <span className="text-orange-300 bg-orange-900/20 px-1 py-0.5 rounded border border-orange-700/50 flex items-center gap-1">
                            <Recycle size={10} />
                            回收价值 +{(tech.effects.recycleEfficiency * 100).toFixed(0)}%
                        </span>
                    )}

                    {/* Artifact Luck/Chance */}
                    {(tech.effects.artifactChanceMult || tech.effects.artifactRarityBonus) && (
                        <span className="text-purple-300 bg-purple-900/20 px-1 py-0.5 rounded border border-purple-700/50 flex items-center gap-1">
                            <Sparkles size={10} />
                            掉落 & 稀有度 UP
                        </span>
                    )}

                    {/* Unlock Message */}
                    {tech.effects.unlockMessage && (
                        <span className="text-blue-200 bg-blue-900/30 px-1 py-0.5 rounded border border-blue-600/50">
                            {tech.effects.unlockMessage}
                        </span>
                    )}
                </div>
            )}

            {/* Costs */}
            {!isResearched && (
                <div className="pt-2 border-t border-dashed border-gray-800 flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs font-mono">
                    {(Object.entries(tech.costs) as [ResourceType, number][]).map(([res, cost]) => {
                    const hasEnough = (resourceState[res] || 0) >= cost;
                    const info = RESOURCE_INFO[res];
                    return (
                        <span key={res} className={`${hasEnough ? 'text-blue-300' : 'text-red-500 font-bold'}`}>
                        {cost.toLocaleString()} {info.name}
                        </span>
                    );
                    })}
                </div>
            )}
         </div>
      </div>
    </div>
  );
};

export default TechCard;
