
import React from 'react';
import { ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Clock, Check, Terminal } from 'lucide-react';

interface OfflineModalProps {
  time: number;
  resources: Record<ResourceType, number>;
  onClose: () => void;
}

const OfflineModal: React.FC<OfflineModalProps> = ({ time, resources, onClose }) => {
  // Format time (e.g. 1h 20m 30s)
  const formatTime = (seconds: number) => {
      const h = Math.floor(seconds / 3600);
      const m = Math.floor((seconds % 3600) / 60);
      const s = Math.floor(seconds % 60);
      const parts = [];
      if (h > 0) parts.push(`${h}h`);
      if (m > 0) parts.push(`${m}m`);
      if (s > 0 || parts.length === 0) parts.push(`${s}s`);
      return parts.join(' ');
  };

  return (
    <div className="fixed inset-0 z-[1100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-300">
      <div className="bg-term-black border border-term-green/50 w-full max-w-md shadow-[0_0_50px_rgba(34,197,94,0.15)] rounded-sm overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="bg-gray-900/80 p-4 border-b border-gray-800 flex items-center gap-3">
            <div className="p-2 bg-term-green/10 rounded-full border border-term-green/30 text-term-green">
                <Clock size={20} className="animate-pulse" />
            </div>
            <div>
                <h2 className="text-sm font-bold text-white tracking-widest uppercase font-mono">
                    TEMPORAL_RESYNC_COMPLETE
                </h2>
                <div className="text-[10px] text-gray-500 font-mono flex items-center gap-2">
                    <Terminal size={10} />
                    <span>SYSTEM_UPTIME_RECOVERY</span>
                </div>
            </div>
        </div>

        {/* Content */}
        <div className="p-6 bg-black/40">
            <div className="flex items-center justify-between mb-6 p-3 bg-white/5 rounded border border-white/10">
                <span className="text-xs text-gray-400 font-mono">OFFLINE_DURATION:</span>
                <span className="text-sm font-bold text-white font-mono">{formatTime(time)}</span>
            </div>

            <div className="text-[10px] text-gray-500 uppercase font-bold mb-2 tracking-wider">
                RESOURCES_MINED
            </div>
            
            <div className="grid grid-cols-2 gap-2 max-h-[40vh] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-800">
                {Object.entries(resources).map(([res, amount]) => {
                    const info = RESOURCE_INFO[res as ResourceType];
                    return (
                        <div key={res} className="flex justify-between items-center p-2 bg-gray-900/50 border border-gray-800 rounded">
                            <div className="flex items-center gap-2">
                                <span className={info.color}>{info.name}</span>
                            </div>
                            <span className="text-white font-mono font-bold">
                                +{Math.floor(amount).toLocaleString()}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-800 bg-gray-900/50">
            <button 
                onClick={onClose}
                className="w-full py-3 bg-term-green text-black font-bold uppercase tracking-widest text-xs hover:bg-white transition-colors flex items-center justify-center gap-2"
            >
                <Check size={16} /> Acknowledge
            </button>
        </div>

      </div>
    </div>
  );
};

export default OfflineModal;
