
import React from 'react';
import { GameSettings } from '../types';
import { X, Settings, CheckSquare, Square } from 'lucide-react';

interface SettingsModalProps {
  settings: GameSettings;
  onToggle: (key: keyof GameSettings) => void;
  onClose: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ settings, onToggle, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-3 border-b border-gray-800 bg-gray-900/80">
          <div className="flex items-center gap-2 text-gray-300">
             <Settings size={16} />
             <span className="font-mono text-sm font-bold uppercase tracking-wider">System Config</span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
            
            <div 
                className="flex items-center justify-between cursor-pointer group select-none"
                onClick={() => onToggle('showCommonArtifactLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors">物品日志 (Common)</span>
                    <span className="text-[10px] text-gray-500">显示/隐藏普通稀有度物品的获取记录</span>
                </div>
                <div className={settings.showCommonArtifactLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showCommonArtifactLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none"
                onClick={() => onToggle('showBuildingLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors">建筑日志</span>
                    <span className="text-[10px] text-gray-500">显示/隐藏购买与拆除建筑的操作记录</span>
                </div>
                <div className={settings.showBuildingLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showBuildingLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none"
                onClick={() => onToggle('showFlavorText')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors">环境氛围文本</span>
                    <span className="text-[10px] text-gray-500">显示/隐藏随机生成的环境描写</span>
                </div>
                <div className={settings.showFlavorText ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showFlavorText ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

        </div>

        <div className="p-4 bg-term-gray/10 border-t border-gray-800 text-center">
            <span className="text-[10px] text-gray-600 font-mono">CHANGES SAVED AUTOMATICALLY</span>
        </div>

      </div>
    </div>
  );
};

export default SettingsModal;
