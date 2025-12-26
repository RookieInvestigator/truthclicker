
import React, { useEffect, useState } from 'react';
import { GameEvent, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Activity, AlertTriangle, Zap, Sparkles } from 'lucide-react';

interface ActiveEventsTickerProps {
  events: GameEvent[];
}

const ActiveEventsTicker: React.FC<ActiveEventsTickerProps> = ({ events }) => {
  const [now, setNow] = useState(Date.now());
  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer for updating "remaining seconds" display
  useEffect(() => {
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Timer for cycling through events if there are multiple
  useEffect(() => {
      if (events.length <= 1) return;
      const cycleTimer = setInterval(() => {
          setCurrentIndex(prev => (prev + 1) % events.length);
      }, 4000); // 4 seconds per event
      return () => clearInterval(cycleTimer);
  }, [events.length]);

  // Reset index if it goes out of bounds (e.g. event expired)
  useEffect(() => {
      if (currentIndex >= events.length) setCurrentIndex(0);
  }, [events.length, currentIndex]);

  if (events.length === 0) {
      return (
          <div className="w-full h-full flex items-center justify-center text-[10px] font-mono tracking-[0.2em] text-gray-700 select-none animate-pulse">
              /// SYSTEM_NORMAL ///
          </div>
      );
  }

  const evt = events[currentIndex] || events[0];
  if (!evt) return null;

  const elapsed = (now - evt.startTime) / 1000;
  const remaining = Math.max(0, evt.duration - elapsed);
  
  let color = 'text-gray-400';
  let Icon = Activity;
  if (evt.type === 'positive') { color = 'text-term-green'; Icon = Sparkles; }
  else if (evt.type === 'negative') { color = 'text-red-500'; Icon = AlertTriangle; }
  else if (evt.type === 'glitch') { color = 'text-cyber-purple'; Icon = Zap; }

  return (
    <div className="w-full h-full flex items-center justify-center bg-transparent overflow-hidden px-4 select-none">
         {/* Key ensures animation restarts on switch */}
         <div key={`${evt.id}-${currentIndex}`} className="flex items-center gap-3 sm:gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500 max-w-full">
            
            {/* Left Side: Icon, Name, Timer */}
            <div className="flex items-center gap-2 shrink-0">
                <div className="relative flex items-center justify-center">
                    <Icon size={14} className={`${color} relative z-10`} />
                    {evt.type === 'glitch' && <Zap size={14} className="absolute inset-0 text-white opacity-50 animate-ping" />}
                </div>
                <span className={`text-xs font-bold uppercase ${color} tracking-wider whitespace-nowrap`}>
                    {evt.name}
                </span>
                <span className="text-[10px] font-mono text-gray-500 font-bold bg-gray-900/80 px-1.5 rounded border border-gray-800 tabular-nums min-w-[30px] text-center">
                    {Math.ceil(remaining)}s
                </span>
            </div>

            {/* Separator */}
            <div className="w-px h-3 bg-gray-800 shrink-0 hidden md:block"></div>

            {/* Middle: Description (Hidden on mobile to save space for stats) */}
            <span className="text-[10px] text-gray-400 truncate max-w-[150px] lg:max-w-[250px] hidden md:block">
                {evt.description}
            </span>

            {/* Right Side: Multipliers (Full Text) */}
            <div className="flex gap-2 shrink-0 overflow-hidden">
                {evt.multipliers && Object.entries(evt.multipliers).map(([res, mult]) => (
                    <div key={res} className={`flex items-center gap-1.5 text-[10px] font-mono px-2 py-0.5 rounded bg-gray-900 border border-gray-800/50 shadow-sm`}>
                        <span className={`${RESOURCE_INFO[res as ResourceType].color} font-bold whitespace-nowrap`}>
                            {RESOURCE_INFO[res as ResourceType].name}
                        </span>
                        <span className={`font-bold flex items-center ${(mult as number) > 1 ? 'text-term-green' : 'text-red-400'}`}>
                            {(mult as number) > 1 ? '+' : ''}{Math.round(((mult as number) - 1) * 100)}%
                        </span>
                    </div>
                ))}
            </div>
         </div>
    </div>
  );
};

export default ActiveEventsTicker;
