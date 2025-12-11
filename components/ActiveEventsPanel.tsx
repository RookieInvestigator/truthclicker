
import React, { useEffect, useState } from 'react';
import { GameEvent, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Activity, AlertTriangle, ArrowDown, ArrowUp, Zap, Sparkles } from 'lucide-react';

interface ActiveEventsPanelProps {
  events: GameEvent[];
}

const ActiveEventsPanel: React.FC<ActiveEventsPanelProps> = ({ events }) => {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (events.length === 0) return null;

  return (
    <div className="flex flex-col gap-2 p-4 bg-term-black/50 border-b border-term-gray animate-in fade-in slide-in-from-top-2">
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-500 mb-1">
        <Activity size={12} className="animate-pulse" />
        环境波动
      </div>
      
      {events.map(evt => {
        const elapsed = (now - evt.startTime) / 1000;
        const remaining = Math.max(0, evt.duration - elapsed);
        const progress = Math.min(100, (remaining / evt.duration) * 100);
        
        let colorClass = 'border-gray-500 text-gray-300';
        let bgClass = 'bg-gray-800';
        let Icon = Activity;

        if (evt.type === 'positive') {
            colorClass = 'border-term-green text-term-green';
            bgClass = 'bg-term-green/20';
            Icon = Sparkles;
        } else if (evt.type === 'negative') {
            colorClass = 'border-red-500 text-red-500';
            bgClass = 'bg-red-900/20';
            Icon = AlertTriangle;
        } else if (evt.type === 'glitch') {
            colorClass = 'border-cyber-purple text-cyber-purple';
            bgClass = 'bg-cyber-purple/20';
            Icon = Zap;
        } else {
            colorClass = 'border-yellow-500 text-yellow-500';
            bgClass = 'bg-yellow-900/20';
        }

        return (
          <div key={evt.id} className={`relative flex flex-col p-2 border-l-2 bg-black/40 ${colorClass.split(' ')[0]}`}>
            {/* Background Progress Bar */}
            <div 
                className={`absolute bottom-0 left-0 h-0.5 transition-all duration-1000 linear ${bgClass.replace('/20', '')}`} 
                style={{ width: `${progress}%` }}
            />

            <div className="flex justify-between items-start mb-1">
                <div className="flex items-center gap-1.5">
                    <Icon size={12} />
                    <span className={`text-xs font-bold ${colorClass.split(' ')[1]}`}>{evt.name}</span>
                </div>
                <span className="text-[10px] font-mono opacity-70">{Math.ceil(remaining)}s</span>
            </div>
            
            <p className="text-[10px] text-gray-500 mb-1.5 leading-tight">{evt.description}</p>
            
            <div className="flex flex-wrap gap-1">
                {evt.multipliers && Object.entries(evt.multipliers).map(([res, mult]) => (
                    <div key={res} className={`flex items-center gap-1 text-[9px] px-1.5 py-0.5 rounded bg-black/50 border border-white/5`}>
                        <span className={`${RESOURCE_INFO[res as ResourceType].color} font-bold`}>{RESOURCE_INFO[res as ResourceType].name}</span>
                        <span className={`flex items-center ${mult > 1 ? 'text-term-green' : 'text-red-400'}`}>
                            {mult > 1 ? <ArrowUp size={8}/> : <ArrowDown size={8}/>}
                            {Math.abs(Math.round((mult - 1) * 100))}%
                        </span>
                    </div>
                ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActiveEventsPanel;
