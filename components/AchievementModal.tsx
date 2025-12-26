
import React from 'react';
import { createPortal } from 'react-dom';
import { Achievement } from '../types';
import { Trophy, X, Lock, CheckCircle, Terminal, Hash, FileCheck, ShieldAlert } from 'lucide-react';
import * as Icons from 'lucide-react';

interface AchievementModalProps {
  achievements: Achievement[];
  unlockedIds: string[];
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, unlockedIds, onClose }) => {
  
  // Sort achievements: Unlocked first, then by ID
  const sortedAchievements = [...achievements].sort((a, b) => {
      const aUnlocked = unlockedIds.includes(a.id);
      const bUnlocked = unlockedIds.includes(b.id);
      if (aUnlocked && !bUnlocked) return -1;
      if (!aUnlocked && bUnlocked) return 1;
      return 0;
  });

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-4xl max-h-[85vh] flex flex-col rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative group/modal" onClick={e => e.stopPropagation()}>
        
        {/* Terminal Header */}
        <div className="p-3 border-b border-term-gray bg-gray-900/50 flex justify-between items-center shrink-0 z-10 select-none">
            <div className="flex items-center gap-3">
                <div className="p-1.5 bg-blue-500/10 border border-blue-500/30 rounded-sm text-blue-400">
                    <FileCheck size={16} />
                </div>
                <div>
                    <h2 className="text-sm font-bold text-blue-400 tracking-[0.2em] uppercase flex items-center gap-2 font-mono">
                        VALIDATION_LOG.SYS
                    </h2>
                    <p className="text-[10px] text-gray-500 font-mono">
                        Dopamine Receptors: ACTIVE
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block bg-black/50 px-2 py-1 border border-gray-800">
                    <div className="text-[9px] text-gray-600 font-bold uppercase tracking-wider mb-0.5">Completion</div>
                    <div className="text-xs font-mono text-gray-300 font-bold flex items-center justify-end gap-1">
                        <CheckCircle size={10} className="text-term-green"/>
                        {unlockedIds.length} / {achievements.length}
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                    <X size={20}/>
                </button>
            </div>
        </div>

        {/* Content Area - Terminal Grid */}
        <div className="flex-1 overflow-y-auto p-4 bg-black/40 relative z-10 scrollbar-thin scrollbar-thumb-gray-800">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sortedAchievements.map(ach => {
                    const isUnlocked = unlockedIds.includes(ach.id);
                    const Icon = (Icons as any)[ach.icon] || Trophy;

                    return (
                        <div key={ach.id} className={`
                            relative flex items-start gap-3 p-3 border transition-all overflow-hidden group
                            ${isUnlocked 
                                ? 'bg-gray-900/30 border-blue-900/50 hover:border-blue-500/50 hover:bg-gray-900/50' 
                                : 'bg-black border-gray-800 opacity-60'}
                        `}>
                            {/* Icon Box */}
                            <div className={`
                                w-10 h-10 flex items-center justify-center shrink-0 border
                                ${isUnlocked 
                                    ? 'bg-black border-blue-500/30 text-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.1)]' 
                                    : 'bg-black border-gray-800 text-gray-700'}
                            `}>
                                {isUnlocked ? <Icon size={18} /> : <Lock size={16} />}
                            </div>

                            {/* Text Info */}
                            <div className="flex-1 min-w-0 font-mono">
                                <div className="flex justify-between items-start mb-1">
                                    <h3 className={`text-xs font-bold truncate pr-2 ${isUnlocked ? 'text-gray-300' : 'text-gray-600'}`}>
                                        {ach.name}
                                    </h3>
                                    {isUnlocked && <span className="text-[9px] text-blue-500/50 font-bold border border-blue-900/50 px-1">GET</span>}
                                </div>
                                <p className={`text-[10px] leading-relaxed line-clamp-3 ${isUnlocked ? 'text-gray-500' : 'text-gray-700 blur-[2px] select-none'}`}>
                                    {isUnlocked ? ach.description : '#####################'}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-800 bg-black text-center text-[9px] text-gray-700 font-mono shrink-0 uppercase tracking-widest">
            <span>CAUTION: EXTERNAL VALIDATION IS ADDICTIVE. PROCEED WITH MODERATION.</span>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default AchievementModal;
