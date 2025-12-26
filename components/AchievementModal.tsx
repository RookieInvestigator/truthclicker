
import React from 'react';
import { createPortal } from 'react-dom';
import { Achievement } from '../types';
import { Trophy, X, Lock } from 'lucide-react';
import * as Icons from 'lucide-react';

interface AchievementModalProps {
  achievements: Achievement[];
  unlockedIds: string[];
  onClose: () => void;
}

const AchievementModal: React.FC<AchievementModalProps> = ({ achievements, unlockedIds, onClose }) => {
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-2xl max-h-[80vh] flex flex-col rounded-sm shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-4 border-b border-term-gray bg-gray-900/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Trophy className="text-yellow-500" />
                <h2 className="text-lg font-bold text-white font-mono tracking-wider">HALL_OF_FAME</h2>
            </div>
            <div className="text-xs font-mono text-gray-500">
                {unlockedIds.length} / {achievements.length} UNLOCKED
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-white"><X size={18}/></button>
        </div>

        {/* Grid */}
        <div className="flex-1 overflow-y-auto p-4 grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-4">
            {achievements.map(ach => {
                const isUnlocked = unlockedIds.includes(ach.id);
                const Icon = (Icons as any)[ach.icon] || Trophy;

                return (
                    <div key={ach.id} className="group relative flex flex-col items-center gap-2">
                        <div className={`
                            w-16 h-16 rounded border flex items-center justify-center transition-all duration-300
                            ${isUnlocked 
                                ? 'bg-yellow-900/20 border-yellow-500/50 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)]' 
                                : 'bg-gray-900 border-gray-800 text-gray-700 grayscale'}
                        `}>
                            {isUnlocked ? <Icon size={24} /> : <Lock size={20} />}
                        </div>
                        
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 w-40 bg-black border border-gray-700 p-2 rounded shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-20 text-center">
                            <div className={`text-xs font-bold mb-1 ${isUnlocked ? 'text-yellow-400' : 'text-gray-500'}`}>
                                {isUnlocked ? ach.name : '???'}
                            </div>
                            <div className="text-[10px] text-gray-400 leading-tight">
                                {ach.description}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </div>,
    document.body
  );
};

export default AchievementModal;
