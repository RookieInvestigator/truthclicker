
import React from 'react';
import { Tech, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { Check, ArrowBigUp, MousePointer2, Percent, Recycle, Sparkles, Lock, AlertTriangle, Cpu } from 'lucide-react';

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
  const IconComponent = (Icons as any)[tech.icon] || Cpu;

  // --- LOCKED STATE ---
  if (isLockedByExclusion) {
      return (
        <div className="relative flex flex-col p-3 border border-dashed border-red-900/30 bg-black/40 w-full max-w-[280px] rounded-sm opacity-50 select-none grayscale cursor-not-allowed">
             <div className="flex items-center gap-2 mb-1">
                <Lock size={14} className="text-red-900" />
                <h3 className="font-bold font-mono text-xs text-gray-700 line-through truncate">{tech.name}</h3>
             </div>
             <div className="text-[9px] text-red-900/50 uppercase font-bold tracking-widest text-center">PATH CLOSED</div>
        </div>
      );
  }

  // --- STYLES ---
  const borderColor = isResearched 
    ? 'border-term-green shadow-[0_0_10px_rgba(34,197,94,0.1)]' 
    : tech.highlight 
        ? canAfford ? 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.2)]' : 'border-yellow-900/50'
        : canAfford ? 'border-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.15)]' : 'border-gray-700';

  const bgColor = isResearched 
    ? 'bg-term-black bg-opacity-90' 
    : canAfford ? 'bg-term-black hover:bg-gray-900' : 'bg-black bg-opacity-60';

  const iconColor = isResearched 
    ? 'text-term-green' 
    : tech.highlight 
        ? 'text-yellow-500' 
        : canAfford ? 'text-blue-400' : 'text-gray-600';

  return (
    <div className="flex flex-col items-center relative group w-full max-w-[300px]">
      
      {/* Top Connector Line (Visual only, implies connection to tier above) */}
      {tech.tier > 1 && (
        <div className={`absolute -top-6 w-px h-6 bg-term-gray/50 group-hover:bg-term-gray transition-colors -z-10 ${isResearched ? 'bg-term-green/30' : ''}`} />
      )}

      <div 
        onClick={() => !isResearched && canAfford && onResearch()}
        className={`
            relative flex flex-col p-3 border-2 w-full rounded-md
            transition-all duration-300 select-none z-10
            ${isResearched 
                ? 'cursor-default' 
                : canAfford 
                    ? 'cursor-pointer hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]' 
                    : 'cursor-not-allowed grayscale-[0.8]'
            }
            ${borderColor} ${bgColor}
        `}
      >
        {/* Circuit Nodes (Decorations) */}
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-term-black border border-term-gray/50 rounded-b-[2px]" />
        <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-1.5 bg-term-black border border-term-gray/50 rounded-t-[2px]" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-2 border-b border-gray-800 pb-2">
            <div className={`p-1.5 rounded bg-black/50 border border-white/5 ${iconColor}`}>
                {isResearched ? <Check size={16} /> : <IconComponent size={16} />}
            </div>
            <div className="flex-1 min-w-0">
                <h3 className={`font-bold font-mono text-xs leading-tight ${isResearched ? 'text-term-green' : tech.highlight ? 'text-yellow-100' : 'text-blue-100'}`}>
                    {tech.name}
                </h3>
                <div className="flex justify-between items-center mt-0.5">
                    <span className="text-[9px] text-gray-500 uppercase tracking-wider font-mono">TIER {tech.tier}</span>
                    {isResearched && <span className="text-[9px] text-term-green font-bold">ACTIVE</span>}
                </div>
            </div>
        </div>
        
        {/* Content - Description & Effects */}
        <div className="flex-1 space-y-2">
            {!isCompact && (
                <p className="text-[10px] text-gray-400 leading-snug line-clamp-3 min-h-[2.5em]">
                    {tech.description}
                </p>
            )}
            
            {/* Stats Badge Row */}
            {!isResearched && (
                <div className="flex flex-wrap gap-1">
                    {/* Compact Effects Summary */}
                    {Object.keys(tech.effects.resourceMultipliers || {}).length > 0 && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-yellow-900/20 text-yellow-500 rounded border border-yellow-900/30">
                            RES++
                        </span>
                    )}
                    {tech.effects.globalCostReduction && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-emerald-900/20 text-emerald-500 rounded border border-emerald-900/30">
                            COST--
                        </span>
                    )}
                    {tech.effects.unlockMessage && (
                        <span className="text-[9px] px-1.5 py-0.5 bg-blue-900/20 text-blue-400 rounded border border-blue-900/30">
                            UNLOCK
                        </span>
                    )}
                </div>
            )}

            {/* Cost Footer */}
            {!isResearched && (
                <div className="pt-2 border-t border-dashed border-gray-800 flex flex-wrap justify-end gap-x-2 gap-y-1">
                    {(Object.entries(tech.costs) as [ResourceType, number][]).map(([res, cost]) => {
                    const hasEnough = (resourceState[res] || 0) >= cost;
                    const info = RESOURCE_INFO[res];
                    return (
                        <div key={res} className={`text-[10px] font-mono flex items-center gap-1 ${hasEnough ? 'text-gray-300' : 'text-red-500 font-bold'}`}>
                            {cost >= 1000 ? (cost/1000).toFixed(1) + 'k' : cost} {info.name}
                        </div>
                    );
                    })}
                </div>
            )}
        </div>
      </div>

      {/* Bottom Connector Line (Visual only, implies flow to next tier) */}
      {!isResearched && (
        <div className="absolute -bottom-4 w-px h-4 bg-gray-800 -z-10 opacity-20" />
      )}
    </div>
  );
};

export default TechCard;
