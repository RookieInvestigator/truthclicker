
import React from 'react';
import { Tech, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { Check, Lock, Cpu } from 'lucide-react';

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
        <div className={`relative flex flex-col border border-dashed border-red-900/30 bg-black/40 rounded-sm opacity-50 select-none grayscale cursor-not-allowed ${isCompact ? 'p-2' : 'p-3'}`}>
             <div className="flex items-center gap-2">
                <Lock size={14} className="text-red-900" />
                <h3 className="font-bold font-mono text-xs text-gray-700 line-through truncate">{tech.name}</h3>
             </div>
        </div>
      );
  }

  // --- STYLES ---
  const borderColor = isResearched 
    ? 'border-term-green/50 bg-term-green/5' 
    : tech.highlight 
        ? canAfford ? 'border-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.1)] bg-yellow-900/10' : 'border-yellow-900/50 bg-term-black'
        : canAfford ? 'border-blue-500/50 hover:border-blue-400 bg-term-black hover:bg-gray-900' : 'border-gray-800 bg-term-black opacity-70';

  const iconColor = isResearched 
    ? 'text-term-green' 
    : tech.highlight 
        ? 'text-yellow-500' 
        : canAfford ? 'text-blue-400' : 'text-gray-600';

  return (
    <div 
        onClick={() => !isResearched && canAfford && onResearch()}
        className={`
            relative group flex flex-col border rounded-sm transition-all duration-200 select-none overflow-hidden
            ${isResearched ? 'cursor-default' : canAfford ? 'cursor-pointer active:scale-[0.98]' : 'cursor-not-allowed'}
            ${borderColor}
            ${isCompact ? 'p-2 min-h-[60px]' : 'p-3 min-h-[120px]'}
        `}
    >
        {/* TIER BADGE (Corner Mark) */}
        <div className={`
            absolute top-0 right-0 px-1.5 py-0.5 text-[9px] font-bold font-mono border-b border-l rounded-bl-md z-10
            ${isResearched 
                ? 'bg-term-green text-black border-term-green' 
                : 'bg-gray-900 text-gray-500 border-gray-800 group-hover:text-gray-300'}
        `}>
            T{tech.tier}
        </div>

        {/* Header Section */}
        <div className="flex items-center gap-3 mb-2">
            <div className={`
                flex items-center justify-center rounded border border-white/5 bg-black/50 shrink-0
                ${isCompact ? 'w-8 h-8' : 'w-10 h-10'}
                ${iconColor}
            `}>
                {isResearched ? <Check size={isCompact ? 14 : 18} /> : <IconComponent size={isCompact ? 14 : 18} />}
            </div>
            
            <div className="flex-1 min-w-0 pr-6">
                <h3 className={`font-bold font-mono leading-tight truncate ${isCompact ? 'text-[11px]' : 'text-xs'} ${isResearched ? 'text-term-green' : 'text-gray-200'}`}>
                    {tech.name}
                </h3>
                {isResearched && !isCompact && <span className="text-[10px] text-term-green/70 uppercase">已掌握</span>}
            </div>
        </div>

        {/* Expanded View Content */}
        {!isCompact && (
            <div className="flex-1 flex flex-col justify-between">
                <p className="text-[10px] text-gray-500 leading-snug line-clamp-2 mb-2 min-h-[2.4em]">
                    {tech.description}
                </p>
                
                {/* Stats / Effects Badges */}
                {!isResearched && (
                   <div className="flex flex-wrap gap-1 mb-2">
                        {Object.keys(tech.effects.resourceMultipliers || {}).length > 0 && (
                            <span className="text-[9px] px-1 bg-yellow-900/20 text-yellow-600 rounded border border-yellow-900/20">效果+</span>
                        )}
                        {tech.effects.unlockMessage && (
                            <span className="text-[9px] px-1 bg-blue-900/20 text-blue-500 rounded border border-blue-900/20">解锁</span>
                        )}
                   </div>
                )}

                {/* Costs */}
                {!isResearched && (
                    <div className="pt-2 border-t border-dashed border-gray-800 flex flex-wrap justify-end gap-x-2 gap-y-1">
                        {(Object.entries(tech.costs) as [ResourceType, number][]).map(([res, cost]) => {
                        const hasEnough = (resourceState[res] || 0) >= cost;
                        const info = RESOURCE_INFO[res];
                        return (
                            <div key={res} className={`text-[10px] font-mono ${hasEnough ? (canAfford ? 'text-gray-400' : 'text-gray-500') : 'text-red-500 font-bold'}`}>
                                {cost >= 1000 ? (cost/1000).toFixed(1) + 'k' : cost} {info.name}
                            </div>
                        );
                        })}
                    </div>
                )}
            </div>
        )}

        {/* Compact View Costs (Only if not researched) */}
        {isCompact && !isResearched && (
             <div className="mt-auto pt-1 border-t border-dashed border-gray-800/50 flex flex-wrap justify-end gap-x-2">
                {(Object.entries(tech.costs) as [ResourceType, number][]).slice(0, 2).map(([res, cost]) => {
                    const hasEnough = (resourceState[res] || 0) >= cost;
                    return (
                        <div key={res} className={`text-[9px] font-mono ${hasEnough ? 'text-gray-500' : 'text-red-500'}`}>
                            {cost >= 1000 ? (cost/1000).toFixed(0) + 'k' : cost} {RESOURCE_INFO[res].name.substr(0,1)}
                        </div>
                    );
                })}
            </div>
        )}
    </div>
  );
};

export default TechCard;
