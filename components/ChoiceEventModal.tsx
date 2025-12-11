
import React from 'react';
import { ChoiceEventDefinition, ChoiceOption, ResourceType, GameState } from '../types';
import { RESOURCE_INFO } from '../constants';
import { AlertTriangle, ArrowRight, Zap } from 'lucide-react';

interface ChoiceEventModalProps {
  event: ChoiceEventDefinition;
  resources: GameState['resources'];
  onChoose: (option: ChoiceOption) => void;
}

const ChoiceEventModal: React.FC<ChoiceEventModalProps> = ({ event, resources, onChoose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200">
      <div className="bg-term-black border border-red-500/50 w-full max-w-lg shadow-[0_0_50px_rgba(239,68,68,0.2)] relative flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-red-900/50 bg-red-900/10">
          <AlertTriangle className="text-red-500 animate-pulse" size={24} />
          <h2 className="text-lg font-bold text-white tracking-widest uppercase">{event.title}</h2>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-300 font-mono mb-6 leading-relaxed border-l-2 border-red-500/30 pl-4">
            {event.description}
          </p>

          <div className="space-y-3">
            {event.options.map((option) => {
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
                  className={`w-full group relative text-left p-4 border rounded transition-all duration-200 flex flex-col gap-1
                    ${canAfford 
                      ? 'border-gray-700 bg-gray-900/50 hover:bg-gray-800 hover:border-gray-500 cursor-pointer' 
                      : 'border-gray-800 bg-black opacity-50 cursor-not-allowed'
                    }
                  `}
                >
                  <div className="flex justify-between items-center w-full">
                    <span className={`font-bold text-sm uppercase tracking-wider ${canAfford ? 'text-white group-hover:text-term-green' : 'text-gray-500'}`}>
                      {option.label}
                    </span>
                    {canAfford && <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-term-green" />}
                  </div>
                  
                  <span className="text-xs text-gray-400">{option.description}</span>

                  {/* Cost/Reward Preview */}
                  <div className="flex flex-wrap gap-2 mt-2 pt-2 border-t border-dashed border-gray-800">
                    {/* Cost */}
                    {option.cost && Object.entries(option.cost).map(([res, val]) => (
                      <span key={res} className={`text-[10px] font-mono px-1.5 py-0.5 rounded bg-black border ${canAfford ? 'text-red-400 border-red-900/30' : 'text-gray-600 border-gray-800'}`}>
                        -{val} {RESOURCE_INFO[res as ResourceType].name}
                      </span>
                    ))}
                    
                    {/* Reward Hint */}
                    {option.reward.resources && Object.keys(option.reward.resources).length > 0 && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-term-green/10 border border-term-green/30 text-term-green">
                            + 资源
                        </span>
                    )}
                    {option.reward.triggerEventId && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-cyber-purple/10 border border-cyber-purple/30 text-cyber-purple flex items-center gap-1">
                            <Zap size={8} /> 事件触发
                        </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-2 bg-term-black border-t border-red-900/30 text-center">
            <span className="text-[10px] text-red-500/50 font-mono animate-pulse">AWAITING INPUT...</span>
        </div>

      </div>
    </div>
  );
};

export default ChoiceEventModal;
