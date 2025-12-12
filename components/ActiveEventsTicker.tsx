
import React, { useEffect, useState } from 'react';
import { GameEvent, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Activity, AlertTriangle, Zap, Sparkles, ArrowUp, ArrowDown, Radio } from 'lucide-react';

interface ActiveEventsTickerProps {
  events: GameEvent[];
}

const ActiveEventsTicker: React.FC<ActiveEventsTickerProps> = ({ events }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (events.length === 0) {
      return (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-mono tracking-[0.2em] text-gray-700 select-none animate-pulse">
              /// SYSTEM_NORMAL ///
          </div>
      );
  }

  return (
    <div className="w-full h-full relative flex items-center bg-transparent">
        {/* Gradient Masks for Fade Effect - using black to match header */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Content */}
        <div className="absolute inset-0 flex items-center animate-marquee whitespace-nowrap gap-12 hover:pause pl-[100%]">
            {events.map(evt => {
                 const elapsed = (now - evt.startTime) / 1000;
                 const remaining = Math.max(0, evt.duration - elapsed);
                 
                 let color = 'text-gray-400';
                 let Icon = Activity;
                 if (evt.type === 'positive') { color = 'text-term-green'; Icon = Sparkles; }
                 else if (evt.type === 'negative') { color = 'text-red-500'; Icon = AlertTriangle; }
                 else if (evt.type === 'glitch') { color = 'text-cyber-purple'; Icon = Zap; }

                 return (
                     <div key={evt.id} className={`flex items-center gap-3 text-xs font-mono select-none shrink-0 group`}>
                        <div className="relative flex items-center justify-center w-5 h-5">
                            <Icon size={14} className={`${color} group-hover:scale-110 transition-transform relative z-10`} />
                            {evt.type === 'glitch' && <Zap size={14} className="absolute inset-0 text-white opacity-50 animate-ping" />}
                        </div>
                        
                        <div className="flex flex-col leading-none gap-0.5">
                            <div className="flex items-center gap-2">
                                <span className={`font-bold uppercase ${color} tracking-wider text-[11px]`}>{evt.name}</span>
                                <span className="text-[9px] text-gray-500 font-bold bg-gray-900 px-1.5 rounded-sm border border-gray-800 min-w-[3em] text-center">
                                    {Math.ceil(remaining)}s
                                </span>
                            </div>
                            <span className="text-[9px] text-gray-500 opacity-80 max-w-[250px] truncate">{evt.description}</span>
                        </div>
                        
                        {/* Compact Multipliers */}
                        <div className="flex gap-1 ml-1 pl-3 border-l border-gray-800/50">
                            {evt.multipliers && Object.entries(evt.multipliers).map(([res, mult]) => (
                                <div key={res} className={`flex flex-col items-center justify-center min-w-[24px] px-1 py-0.5 rounded bg-white/5 border border-white/5`}>
                                    <span className={`text-[8px] font-bold leading-none ${RESOURCE_INFO[res as ResourceType].color} opacity-70`}>{RESOURCE_INFO[res as ResourceType].name.substring(0,1)}</span>
                                    <span className={`text-[8px] font-bold leading-none flex items-center ${mult > 1 ? 'text-term-green' : 'text-red-400'}`}>
                                        {mult > 1 ? '+' : ''}{Math.round((mult - 1) * 100)}%
                                    </span>
                                </div>
                            ))}
                        </div>
                     </div>
                 )
            })}
        </div>
    </div>
  );
};

export default ActiveEventsTicker;
