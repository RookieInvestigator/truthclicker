
import React from 'react';
import { Tech, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { Check, Lock, Cpu, ArrowUpCircle, Unlock } from 'lucide-react';

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
        <div className={`relative flex flex-col border border-dashed border-red-900/30 bg-black/40 rounded-sm opacity-50 select-none grayscale cursor-not-allowed ${isCompact ? 'p-1.5' : 'p-3'}`}>
             <div className="flex items-center gap-2">
                <Lock size={isCompact ? 12 : 14} className="text-red-900" />
                <h3 className={`font-bold font-mono text-gray-700 line-through ${isCompact ? 'text-[10px] whitespace-normal leading-3' : 'text-xs truncate'}`}>
                    {tech.name}
                </h3>
             </div>
        </div>
      );
  }

  // --- STYLES ---
  let borderColor = 'border-gray-800 bg-term-black/80';
  let iconColor = 'text-gray-600';
  let titleColor = 'text-gray-400';

  if (isResearched) {
      borderColor = 'border-term-green/30 bg-term-green/5 shadow-[inset_0_0_10px_rgba(34,197,94,0.05)]';
      iconColor = 'text-term-green';
      titleColor = 'text-term-green';
  } else if (tech.highlight) {
      if (canAfford) {
          borderColor = 'border-yellow-500/50 bg-yellow-900/10 shadow-[0_0_10px_rgba(234,179,8,0.1)] hover:border-yellow-400';
          iconColor = 'text-yellow-500';
          titleColor = 'text-yellow-200';
      } else {
          borderColor = 'border-yellow-900/30 bg-black/60';
          iconColor = 'text-yellow-700';
          titleColor = 'text-gray-500';
      }
  } else if (canAfford) {
      borderColor = 'border-blue-500/30 hover:border-blue-400 hover:bg-blue-900/10 cursor-pointer active:scale-[0.98]';
      iconColor = 'text-blue-400';
      titleColor = 'text-gray-200';
  }

  // --- RENDER EFFECTS HELPER ---
  const hasEffects = tech.effects.resourceMultipliers || tech.effects.unlockMessage || tech.effects.globalCostReduction || tech.effects.clickPowerMult || tech.effects.artifactChanceMult;
  
  return (
    <div 
        onClick={() => !isResearched && canAfford && onResearch()}
        className={`
            relative group flex flex-col border rounded-sm transition-all duration-200 select-none overflow-hidden
            ${isResearched ? 'cursor-default' : canAfford ? 'cursor-pointer' : 'cursor-not-allowed'}
            ${borderColor}
            ${isCompact ? 'p-2' : 'p-0 min-h-[140px]'}
        `}
    >
        {/* TIER BADGE (Corner Mark) */}
        <div className={`
            absolute top-0 right-0 font-bold font-mono text-[9px] px-1.5 py-0.5 border-b border-l rounded-bl-sm z-10
            ${isResearched 
                ? 'bg-term-green text-black border-term-green' 
                : 'bg-black/50 text-gray-600 border-gray-800'}
        `}>
            T{tech.tier}
        </div>

        {/* Header Section */}
        <div className={`flex items-center ${isCompact ? 'gap-2' : 'gap-3 p-3 border-b border-white/5 bg-white/5'}`}>
            <div className={`
                flex items-center justify-center rounded border shrink-0
                ${isCompact ? 'w-7 h-7' : 'w-9 h-9'}
                ${isResearched ? 'border-term-green/20 bg-term-green/10' : 'border-gray-700 bg-black/50'}
                ${iconColor}
            `}>
                {isResearched ? <Check size={isCompact ? 14 : 18} /> : <IconComponent size={isCompact ? 14 : 18} />}
            </div>
            
            <div className={`flex-1 min-w-0 ${isCompact ? 'pr-4' : 'pr-6'}`}>
                <h3 className={`font-bold font-mono ${isCompact ? 'text-[10px] leading-3 whitespace-normal break-words' : 'text-xs leading-tight truncate'} ${titleColor}`}>
                    {tech.name}
                </h3>
            </div>
        </div>

        {/* Expanded View Content */}
        {!isCompact && (
            <div className="flex-1 flex flex-col justify-between p-3 gap-3">
                <p className="text-[10px] text-gray-500 leading-snug line-clamp-2 min-h-[2.4em]">
                    {tech.description}
                </p>
                
                {/* Detailed Effects List */}
                {hasEffects && (
                    <div className="flex flex-col gap-1 text-[10px]">
                         {/* Resource Multipliers */}
                        {tech.effects.resourceMultipliers && Object.entries(tech.effects.resourceMultipliers).map(([res, amount]) => (
                            <div key={res} className="flex justify-between items-center">
                                <span className={`flex items-center gap-1 ${RESOURCE_INFO[res as ResourceType].color} opacity-90`}>
                                    <ArrowUpCircle size={8} />
                                    {RESOURCE_INFO[res as ResourceType].name}
                                </span>
                                <span className={amount > 0 ? 'text-term-green' : 'text-red-400'}>
                                    {amount > 0 ? '+' : ''}{Math.round(amount * 100)}%
                                </span>
                            </div>
                        ))}
                        
                        {/* Global Stats */}
                        {tech.effects.globalCostReduction && (
                            <div className="flex justify-between items-center">
                                <span className="text-blue-300 opacity-90 flex items-center gap-1"><ArrowUpCircle size={8}/> 全局造价</span>
                                <span className="text-term-green">-{Math.round(tech.effects.globalCostReduction * 100)}%</span>
                            </div>
                        )}
                        {tech.effects.clickPowerMult && (
                            <div className="flex justify-between items-center">
                                <span className="text-blue-300 opacity-90 flex items-center gap-1"><ArrowUpCircle size={8}/> 点击效能</span>
                                <span className="text-term-green">+{Math.round(tech.effects.clickPowerMult * 100)}%</span>
                            </div>
                        )}
                        {tech.effects.artifactChanceMult && (
                            <div className="flex justify-between items-center">
                                <span className="text-purple-300 opacity-90 flex items-center gap-1"><ArrowUpCircle size={8}/> 掉落率</span>
                                <span className="text-term-green">+{Math.round(tech.effects.artifactChanceMult * 100)}%</span>
                            </div>
                        )}

                        {/* Unlock Message */}
                        {tech.effects.unlockMessage && (
                             <div className="text-[10px] text-gray-400 pt-1 flex items-start gap-1">
                                <Unlock size={8} className="mt-0.5 text-term-green shrink-0"/>
                                <span className="italic leading-none">{tech.effects.unlockMessage.replace('解锁: ', '')}</span>
                             </div>
                        )}
                    </div>
                )}

                {/* Costs Footer */}
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
             <div className="mt-1 pt-1 border-t border-dashed border-gray-800/50 flex flex-wrap justify-end gap-x-1.5 gap-y-0.5">
                {(Object.entries(tech.costs) as [ResourceType, number][]).slice(0, 3).map(([res, cost]) => {
                    const hasEnough = (resourceState[res] || 0) >= cost;
                    return (
                        <div key={res} className={`text-[8px] font-mono ${hasEnough ? 'text-gray-500' : 'text-red-500'}`}>
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
