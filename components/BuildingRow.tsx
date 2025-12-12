
import React from 'react';
import { Building, ResourceType } from '../types';
import { CATEGORY_COLORS, RESOURCE_INFO } from '../constants';
import * as Icons from 'lucide-react';
import { ArrowBigUp, HelpCircle, MinusCircle, TrendingUp, TrendingDown } from 'lucide-react';

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
        relative group flex flex-col border bg-black/60 rounded-sm overflow-hidden h-full
        transition-all duration-200 select-none
        ${canAfford 
          ? 'cursor-pointer hover:bg-term-gray/20 hover:border-term-green/50 hover:shadow-[0_0_15px_rgba(34,197,94,0.1)]' 
          : 'opacity-60 cursor-not-allowed grayscale-[0.8] hover:opacity-80'}
        ${canAfford ? 'border-term-gray' : 'border-gray-800'}
      `}
    >
      {/* Header Area */}
      <div className="flex justify-between items-start p-3 border-b border-white/5 bg-white/5">
        <div className="flex items-center gap-3">
            <div className={`
                relative w-9 h-9 flex items-center justify-center border rounded-sm shrink-0 bg-black/50
                ${canAfford ? categoryColor : 'border-gray-700 text-gray-500'}
            `}>
                <IconComponent size={18} />
            </div>
            <div className="flex flex-col min-w-0">
                <h3 className={`font-bold font-mono text-xs leading-tight truncate ${canAfford ? 'text-gray-100' : 'text-gray-500'}`}>
                    {building.name}
                </h3>
                <span className="text-[9px] text-gray-500 font-mono mt-0.5">
                    数量 <span className={count > 0 ? "text-term-green" : ""}>{count}</span>
                </span>
            </div>
        </div>

        {count > 0 && (
            <button 
                onClick={(e) => {
                    e.stopPropagation();
                    onSell();
                }}
                className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-gray-600 hover:text-red-400 hover:bg-red-900/20 rounded"
                title="拆除 (50% 返还)"
            >
                <MinusCircle size={14} />
            </button>
        )}
      </div>

      {/* Body Content */}
      <div className="flex-1 p-3 flex flex-col justify-between gap-3">
          <p className="text-[10px] text-gray-400 leading-snug line-clamp-3 min-h-[3em]">
              {building.description}
          </p>
          
          {/* Stats Grid */}
          <div className="flex flex-col gap-1.5">
            {/* Outputs */}
            {(gains.length > 0 || multipliers.length > 0) && (
                <div className="flex flex-wrap gap-1 items-center">
                    <TrendingUp size={10} className="text-gray-600 mr-1" />
                    {gains.map(g => (
                        <div key={g.res} className={`flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded border border-white/10 bg-black/40 ${RESOURCE_INFO[g.res].color}`}>
                            <span>+{g.val.toLocaleString()} {RESOURCE_INFO[g.res].name}/s</span>
                        </div>
                    ))}
                    {multipliers.map(m => (
                        <div key={m.res} className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded border border-yellow-700/50 bg-yellow-900/10 text-yellow-300">
                            <ArrowBigUp size={8} />
                            <span>x{(1 + m.val).toFixed(2)} {RESOURCE_INFO[m.res].name}</span>
                        </div>
                    ))}
                </div>
            )}

            {/* Inputs (Maintenance) */}
            {consumes.length > 0 && (
                <div className="flex flex-wrap gap-1 items-center">
                    <TrendingDown size={10} className="text-gray-600 mr-1" />
                    {consumes.map(c => (
                        <div key={c.res} className="flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded border border-red-900/30 bg-red-900/10 text-red-400">
                            <span>-{c.val} {RESOURCE_INFO[c.res].name}/s</span>
                        </div>
                    ))}
                </div>
            )}
          </div>
      </div>

      {/* Footer: Cost */}
      <div className={`p-2 border-t border-dashed ${canAfford ? 'border-gray-700 bg-gray-900/30' : 'border-gray-800 bg-black/50'}`}>
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-1 text-[10px] font-mono">
            {(Object.entries(currentCosts) as [ResourceType, number][]).map(([res, cost]) => {
                const hasEnough = (resourceState[res] || 0) >= cost;
                const info = RESOURCE_INFO[res];
                return (
                    <span key={res} className={`${hasEnough ? (canAfford ? 'text-gray-300' : 'text-gray-500') : 'text-red-500 font-bold'}`}>
                    {cost.toLocaleString()} {info.name}
                    </span>
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default BuildingCard;
