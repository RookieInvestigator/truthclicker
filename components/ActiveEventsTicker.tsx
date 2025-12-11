
import React, { useEffect, useState } from 'react';
import { GameEvent, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Activity, AlertTriangle, Zap, Sparkles, ArrowUp, ArrowDown } from 'lucide-react';

interface ActiveEventsTickerProps {
  events: GameEvent[];
}

const ActiveEventsTicker: React.FC<ActiveEventsTickerProps> = ({ events }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Spacer if no events, to maintain flex layout if needed, or just return null to collapse
  if (events.length === 0) return <div className="flex-1" />; 

  return (
    <div className="flex-1 mx-6 h-8 bg-black/40 border border-term-gray/30 rounded-sm overflow-hidden relative flex items-center max-w-3xl shadow-inner group">
        <div className="absolute inset-0 flex items-center animate-marquee whitespace-nowrap gap-16 hover:pause pl-[100%]">
            {events.map(evt => {
                 const elapsed = (now - evt.startTime) / 1000;
                 const remaining = Math.max(0, evt.duration - elapsed);
                 
                 let color = 'text-gray-400';
                 let Icon = Activity;
                 if (evt.type === 'positive') { color = 'text-term-green'; Icon = Sparkles; }
                 else if (evt.type === 'negative') { color = 'text-red-500'; Icon = AlertTriangle; }
                 else if (evt.type === 'glitch') { color = 'text-cyber-purple'; Icon = Zap; }

                 return (
                     <div key={evt.id} className={`flex items-center gap-2 text-xs font-mono select-none shrink-0`}>
                        <Icon size={14} className={`${color} animate-pulse`} />
                        <span className={`font-bold uppercase ${color}`}>{evt.name}</span>
                        <span className="text-gray-500 font-bold">[{Math.ceil(remaining)}s]</span>
                        <span className="text-gray-500 border-l border-gray-700 pl-2 opacity-80">{evt.description}</span>
                        
                        {/* Multipliers Mini-view */}
                        <div className="flex gap-2 ml-2 bg-black/50 px-1.5 py-0.5 rounded border border-white/5">
                            {evt.multipliers && Object.entries(evt.multipliers).map(([res, mult]) => (
                                <span key={res} className={`flex items-center gap-0.5 text-[9px] font-bold ${mult > 1 ? 'text-term-green' : 'text-red-400'}`}>
                                    {mult > 1 ? <ArrowUp size={8}/> : <ArrowDown size={8}/>}
                                    {RESOURCE_INFO[res as ResourceType].name}
                                </span>
                            ))}
                        </div>
                     </div>
                 )
            })}
        </div>
        
        {/* Gradients to fade out edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-term-gray/10 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-term-gray/10 to-transparent z-10 pointer-events-none"></div>
    </div>
  );
};

export default ActiveEventsTicker;
