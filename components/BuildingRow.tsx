
import React from 'react';
import { Building, ResourceType } from '../types';
import { CATEGORY_COLORS, RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowBigUp, ArrowRight, HelpCircle, MinusCircle } from 'lucide-react';

interface BuildingCardProps {
  building: Building;
  count: number;
  canAfford: boolean;
  onBuy: () => void;
  onSell: () => void;
  resourceState: Record<ResourceType, number>; 
}

const BuildingCard: React.FC<BuildingCardProps> = ({ building, count, canAfford, onBuy, onSell, resourceState }) => {
  // Safe icon resolution
  const IconComponent = (Icons as any)[building.icon] || HelpCircle;

  // Calculate current costs
  const currentCosts: Partial<Record<ResourceType, number>> = {};
  (Object.keys(building.baseCosts) as ResourceType[]).forEach(res => {
     const base = building.baseCosts[res] || 0;
     currentCosts[res] = Math.floor(base * Math.pow(building.costMultiplier, count));
  });
  
  const categoryColor = CATEGORY_COLORS[building.category] || 'text-gray-500 border-gray-500';

  // Separate production into Gain, Consume, and Multiply
  const gains: {res: ResourceType, val: number}[] = [];
  const consumes: {res: ResourceType, val: number}[] = [];
  
  if (building.baseProduction) {
    (Object.entries(building.baseProduction) as [ResourceType, number][]).forEach(([res, amount]) => {
        if (amount > 0) gains.push({res, val: amount});
        if (amount < 0) consumes.push({res, val: Math.abs(amount)});
    });
  }

  const multipliers: {res: ResourceType, val: number}[] = [];
  if (building.globalMultipliers) {
    (Object.entries(building.globalMultipliers) as [ResourceType, number][]).forEach(([res, amount]) => {
        multipliers.push({res, val: amount});
    });
  }

  return (
    <div 
      onClick={() => canAfford && onBuy()}
      className={`
        relative group flex flex-col p-3 md:p-4 border bg-term-black/80 h-full rounded-sm
        transition-all duration-200 select-none
        ${canAfford 
          ? 'cursor-pointer hover:bg-term-gray/20 active:bg-gray-800' 
          : 'opacity-50 cursor-not-allowed grayscale'}
        ${canAfford ? 'border-term-gray hover:border-term-green' : 'border-term-gray'}
      `}
    >
      <div className="flex justify-between items-start mb-3">
        {/* Icon & Count */}
        <div className={`
            relative w-10 h-10 flex items-center justify-center bg-term-gray/10 border rounded-sm shrink-0
            ${canAfford ? categoryColor : 'border-term-gray text-gray-500'}
        `}>
            <IconComponent size={20} />
            {count > 0 && (
                <div className="absolute -top-2 -right-2 bg-term-black border border-term-gray text-[10px] px-1.5 py-0.5 text-white z-10 font-bold rounded-full">
                {count}
                </div>
            )}
        </div>

        {/* Name & Sell */}
        <div className="flex flex-col items-end flex-1 ml-2 min-w-0">
            <h3 className={`font-bold font-mono text-xs md:text-sm text-right leading-tight break-words ${canAfford ? 'text-white' : 'text-gray-500'}`}>
                {building.name}
            </h3>
            
            {count > 0 && (
                <button 
                    onClick={(e) => {
                        e.stopPropagation();
                        onSell();
                    }}
                    className="flex items-center gap-1 mt-1 text-[10px] text-gray-600 hover:text-red-400 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity"
                    title="拆除 (50% 返还)"
                >
                   <MinusCircle size={10} /> 拆除
                </button>
            )}
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-between">
          <p className="text-[10px] md:text-[11px] text-gray-400 leading-tight mb-3 min-h-[2.5em]">{building.description}</p>
          
          <div>
            {/* Stats */}
            <div className="flex flex-wrap gap-1.5 text-[10px] items-center mb-3">
                {consumes.map((c) => (
                    <span key={c.res} className="text-red-400 bg-red-900/10 px-1 py-0.5 rounded border border-red-900/30">
                        -{c.val} {RESOURCE_INFO[c.res].name}/s
                    </span>
                ))}
                {gains.map(g => (
                    <span key={g.res} className={`${RESOURCE_INFO[g.res].color} bg-white/5 px-1 py-0.5 rounded border border-white/10`}>
                        +{g.val.toLocaleString()} {RESOURCE_INFO[g.res].name}/s
                    </span>
                ))}
                {multipliers.map(m => (
                    <span key={m.res} className={`text-yellow-300 bg-yellow-900/20 px-1 py-0.5 rounded border border-yellow-700/50 flex items-center gap-1`}>
                        <ArrowBigUp size={10} />
                        x{ (1 + m.val).toFixed(2) }
                    </span>
                ))}
            </div>

            {/* Cost Footer */}
            <div className="pt-2 border-t border-dashed border-gray-800 flex flex-wrap justify-end gap-x-3 gap-y-1 text-xs font-mono">
                {(Object.entries(currentCosts) as [ResourceType, number][]).map(([res, cost]) => {
                    const hasEnough = (resourceState[res] || 0) >= cost;
                    const info = RESOURCE_INFO[res];
                    return (
                        <span key={res} className={`${hasEnough ? (canAfford ? info.color : 'text-gray-400') : 'text-red-500 font-bold'}`}>
                        {cost.toLocaleString()} {info.name}
                        </span>
                    );
                })}
            </div>
          </div>
      </div>
    </div>
  );
};

export default BuildingCard;
