
import React, { useEffect, useRef } from 'react';
import { LogEntry } from '../types';

interface TerminalLogProps {
  logs: LogEntry[];
}

const TerminalLog: React.FC<TerminalLogProps> = ({ logs }) => {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [logs]);

  return (
    <div className="flex flex-col h-full bg-term-black border-l border-r border-term-gray font-mono text-sm relative">
      <div className="absolute top-0 left-0 w-full bg-term-black/90 border-b border-term-gray px-3 py-2 text-[10px] text-gray-500 uppercase tracking-widest flex justify-between items-center z-10">
        <span>System_Log</span>
        <span className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-term-green animate-pulse"></span>
            LIVE
        </span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pt-10 space-y-1.5 scrollbar-thin scrollbar-thumb-gray-800">
        {logs.length === 0 && (
            <div className="text-gray-700 text-xs italic text-center mt-10">Waiting for system events...</div>
        )}
        {logs.map((log) => (
          <div key={log.id} className="flex gap-2 text-xs leading-relaxed group hover:bg-white/5 -mx-2 px-2 py-0.5 rounded transition-colors">
            <span className="text-gray-600 font-bold shrink-0 select-none w-14 text-right">
                {log.timestamp.split(' ')[0]}
            </span>
            <span className={`break-words flex-1 ${
                log.type === 'rare' ? 'text-cyber-purple font-bold drop-shadow-[0_0_3px_rgba(168,85,247,0.5)]' :
                log.type === 'warning' ? 'text-yellow-500' :
                log.type === 'success' ? 'text-term-green' :
                'text-gray-400'
            }`}>
                {log.type === 'rare' && <span className="mr-1">★</span>}
                {log.type === 'warning' && <span className="mr-1">⚠</span>}
                {log.message}
            </span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      
      {/* Subtle bottom gradient to indicate scrolling */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-term-black to-transparent pointer-events-none"></div>
    </div>
  );
};

export default TerminalLog;
