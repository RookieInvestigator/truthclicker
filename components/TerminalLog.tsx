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
      <div className="absolute top-0 left-0 w-full bg-term-gray/20 border-b border-term-gray px-2 py-1 text-xs text-term-green-dim uppercase tracking-wider">
        System_Log // <span className="animate-pulse">Active</span>
      </div>
      <div className="flex-1 overflow-y-auto p-4 pt-8 space-y-2">
        {logs.map((log) => (
          <div key={log.id} className={`break-words ${
            log.type === 'rare' ? 'text-cyber-purple font-bold' :
            log.type === 'warning' ? 'text-yellow-500' :
            log.type === 'success' ? 'text-term-green' :
            'text-gray-400'
          }`}>
            <span className="opacity-50 mr-2 text-xs">[{log.timestamp}]</span>
            <span>{log.message}</span>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>
      {/* Glitch effect overlay */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-term-green/5 to-transparent opacity-10 animate-pulse"></div>
    </div>
  );
};

export default TerminalLog;
