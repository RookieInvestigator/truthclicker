
import React from 'react';
import { createPortal } from 'react-dom';
import { Achievement } from '../types';
import { Trophy, X, Lock, Eye, Sparkles, PartyPopper, Dumbbell, Crown, Skull, Zap } from 'lucide-react';
import * as Icons from 'lucide-react';

interface AchievementModalProps {
  achievements: Achievement[];
  unlockedIds: string[];
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, unlockedIds, onClose }) => {
  
  // Sort achievements: Unlocked first, then by ID (or definition order)
  const sortedAchievements = [...achievements].sort((a, b) => {
      const aUnlocked = unlockedIds.includes(a.id);
      const bUnlocked = unlockedIds.includes(b.id);
      if (aUnlocked && !bUnlocked) return -1;
      if (!aUnlocked && bUnlocked) return 1;
      return 0;
  });

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-[#0f0f0f] border-2 border-yellow-600/30 w-full max-w-4xl max-h-[85vh] flex flex-col rounded-xl shadow-[0_0_50px_rgba(202,138,4,0.1)] overflow-hidden relative" onClick={e => e.stopPropagation()}>
        
        {/* Weird Background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/az-subtle.png')]"></div>
        
        {/* Header */}
        <div className="p-4 border-b border-yellow-600/20 bg-black/50 flex justify-between items-center relative z-10 shrink-0">
            <div className="flex items-center gap-3">
                <div className="p-1.5 bg-yellow-500/10 rounded-lg border border-yellow-500/30 text-yellow-500">
                    <Crown size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-black text-yellow-500 font-mono tracking-tighter uppercase flex items-center gap-2">
                        HALL_OF_BRAIN_ROT
                    </h2>
                    <p className="text-[10px] text-gray-500 font-mono font-bold flex items-center gap-2">
                        <Sparkles size={10} className="text-purple-500" /> 
                        多巴胺分泌记录
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block bg-black px-2 py-1 rounded border border-gray-800">
                    <div className="text-[9px] text-gray-600 font-bold uppercase tracking-wider">Progress</div>
                    <div className="text-xs font-mono text-white font-bold">
                        {unlockedIds.length} <span className="text-gray-700">/</span> {achievements.length}
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-600 hover:text-white transition-colors p-1">
                    <X size={24}/>
                </button>
            </div>
        </div>

        {/* Content Area - Compact Grid */}
        <div className="flex-1 overflow-y-auto p-4 bg-black/20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {sortedAchievements.map(ach => {
                    const isUnlocked = unlockedIds.includes(ach.id);
                    const Icon = (Icons as any)[ach.icon] || Trophy;

                    return (
                        <div key={ach.id} className={`
                            relative flex items-center gap-3 p-3 rounded border transition-all overflow-hidden group
                            ${isUnlocked 
                                ? 'bg-gradient-to-br from-gray-900 to-black border-yellow-900/30 hover:border-yellow-600/50' 
                                : 'bg-black border-gray-800/50 opacity-60 grayscale'}
                        `}>
                            {/* Background Flash on Hover */}
                            {isUnlocked && <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>}

                            {/* Icon Box */}
                            <div className={`
                                w-12 h-12 flex items-center justify-center rounded-lg shrink-0 border
                                ${isUnlocked 
                                    ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.1)]' 
                                    : 'bg-gray-900 border-gray-800 text-gray-700'}
                            `}>
                                {isUnlocked ? <Icon size={24} /> : <Lock size={20} />}
                            </div>

                            {/* Text Info */}
                            <div className="flex-1 min-w-0 flex flex-col justify-center">
                                <div className="flex justify-between items-start">
                                    <h3 className={`text-xs font-bold truncate pr-2 ${isUnlocked ? 'text-gray-200' : 'text-gray-600'}`}>
                                        {ach.name}
                                    </h3>
                                    {isUnlocked && <PartyPopper size={10} className="text-yellow-600 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />}
                                </div>
                                <p className={`text-[10px] leading-tight line-clamp-2 mt-0.5 ${isUnlocked ? 'text-gray-500' : 'text-gray-700 blur-[1px]'}`}>
                                    {isUnlocked ? ach.description : '?? 锁定 ??'}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-800 bg-black text-center text-[9px] text-gray-700 font-mono shrink-0 flex justify-center gap-2">
            <Skull size={10} />
            <span>ACHIEVEMENTS HAVE NO REAL WORLD VALUE</span>
            <Skull size={10} />
        </div>

      </div>
    </div>,
    document.body
  );
};

export default AchievementModal;
