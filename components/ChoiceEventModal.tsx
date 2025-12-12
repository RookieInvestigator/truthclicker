
import React, { useMemo } from 'react';
import { ChoiceEventDefinition, ChoiceOption, ResourceType, GameState } from '../types';
import { RESOURCE_INFO } from '../constants';
import { AlertTriangle, ArrowRight, Zap, Terminal, XCircle } from 'lucide-react';

interface ChoiceEventModalProps {
  event: ChoiceEventDefinition;
  resources: GameState['resources'];
  onChoose: (option: ChoiceOption) => void;
}

const ChoiceEventModal: React.FC<ChoiceEventModalProps> = ({ event, resources, onChoose }) => {
  
  // Randomly select 3 options to display, ensuring variety if the event repeats.
  // Memoized so it doesn't shuffle on re-renders (e.g. resource updates).
  const displayedOptions = useMemo(() => {
      // Create a shallow copy and shuffle
      const shuffled = [...event.options].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
  }, [event.id]); // Only re-shuffle if it's a completely different event ID

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="bg-term-black border border-gray-700 w-full max-w-2xl shadow-[0_10px_50px_rgba(0,0,0,0.8)] relative flex flex-col overflow-hidden rounded-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800 bg-gray-900/80">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-white/10 rounded-sm">
                <Terminal className="text-white" size={16} />
            </div>
            <h2 className="text-sm font-bold text-gray-100 tracking-[0.15em] uppercase font-mono">
                {event.title}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-gray-500 uppercase">
             <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
             Input Required
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 md:p-8 bg-black/40">
          {/* Description */}
          <div className="mb-8 flex gap-4">
             <div className="w-1 bg-gray-700 shrink-0 self-stretch"></div>
             <p className="text-gray-300 font-mono text-sm leading-7">
                {event.description}
             </p>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-1 gap-3">
            {displayedOptions.map((option, idx) => {
              // Check affordability
              let canAfford = true;
              if (option.cost) {
                for (const [res, val] of Object.entries(option.cost)) {
                  if ((resources[res as ResourceType] || 0) < val) canAfford = false;
                }
              }

              return (
                <button
                  key={option.id}
                  onClick={() => canAfford && onChoose(option)}
                  disabled={!canAfford}
                  className={`
                    group relative flex items-stretch text-left border rounded-sm transition-all duration-200 overflow-hidden
                    ${canAfford 
                      ? 'border-gray-700 bg-gray-900/30 hover:bg-gray-800 hover:border-gray-500 hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]' 
                      : 'border-gray-800 bg-black/50 opacity-60 cursor-not-allowed grayscale'
                    }
                  `}
                >
                  {/* Index Number */}
                  <div className={`
                    w-10 shrink-0 flex items-center justify-center border-r font-mono text-xs font-bold
                    ${canAfford ? 'border-gray-700 bg-white/5 text-gray-500 group-hover:text-white group-hover:bg-white/10' : 'border-gray-800 text-gray-700'}
                  `}>
                    {idx + 1}
                  </div>

                  {/* Option Content */}
                  <div className="flex-1 p-3 flex flex-col justify-center gap-1 min-h-[70px]">
                    <div className="flex justify-between items-start">
                        <span className={`font-bold text-sm font-mono tracking-wide transition-colors ${canAfford ? 'text-gray-200 group-hover:text-term-green' : 'text-gray-600'}`}>
                        {option.label}
                        </span>
                    </div>
                    
                    <span className="text-[11px] text-gray-500 group-hover:text-gray-400 transition-colors line-clamp-1">
                        {option.description}
                    </span>
                  </div>

                  {/* Cost/Reward Section (Right Side) */}
                  <div className="w-32 md:w-40 shrink-0 border-l border-gray-800 p-2 flex flex-col justify-center gap-1.5 bg-black/20">
                     {/* Cost */}
                     {option.cost && Object.entries(option.cost).map(([res, val]) => (
                      <div key={res} className="flex items-center justify-end gap-1.5 text-[10px] text-right">
                        <span className={`${canAfford ? 'text-red-400' : 'text-gray-600'} font-mono`}>-{val}</span>
                        <span className="text-gray-600 uppercase font-bold text-[9px]">{RESOURCE_INFO[res as ResourceType].name}</span>
                      </div>
                    ))}
                    
                    {/* Reward Indicators */}
                    {(option.reward.resources || option.reward.triggerEventId || option.reward.buildingId) && (
                        <div className="flex items-center justify-end gap-1 text-[10px] text-right mt-auto">
                            {option.reward.buildingId && <span className="text-blue-400 font-bold flex items-center gap-1"><ArrowRight size={10}/> 建筑</span>}
                            {option.reward.triggerEventId && <span className="text-cyber-purple font-bold flex items-center gap-1"><Zap size={10}/> 事件</span>}
                            {option.reward.resources && <span className="text-term-green font-bold flex items-center gap-1"><ArrowRight size={10}/> 资源</span>}
                        </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Decorative Footer */}
        <div className="h-1 bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-50"></div>
      </div>
    </div>
  );
};

export default ChoiceEventModal;
