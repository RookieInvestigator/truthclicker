
import React, { useState } from 'react';
import { GameSettings } from '../types';
import { X, CheckSquare, Square, Terminal, FileText, MessageSquare, Save, Zap, List, Upload, Download, Copy, Check } from 'lucide-react';

interface SettingsModalProps {
  settings: GameSettings;
  onToggle: (key: keyof GameSettings) => void;
  onClose: () => void;
  onImport: (data: string) => boolean;
  onExport: () => string;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ settings, onToggle, onClose, onImport, onExport }) => {
  const [importString, setImportString] = useState("");
  const [showImportInput, setShowImportInput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  const handleExport = () => {
      const data = onExport();
      navigator.clipboard.writeText(data).then(() => {
          setCopyFeedback("已复制到剪贴板!");
          setTimeout(() => setCopyFeedback(""), 2000);
      });
  };

  const handleImport = () => {
      if (!importString) return;
      const success = onImport(importString);
      if (success) {
          setImportString("");
          setShowImportInput(false);
          onClose();
      } else {
          setCopyFeedback("导入失败: 格式错误");
          setTimeout(() => setCopyFeedback(""), 2000);
      }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-md shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-200" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-term-gray bg-gray-900/50">
          <h2 className="text-lg font-bold text-white flex items-center gap-2 font-mono">
            <Terminal size={18} /> SYSTEM_CONFIG
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={18} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-4 space-y-4 font-mono">
            
            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded"
                onClick={() => onToggle('showCommonArtifactLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors flex items-center gap-2">
                        详细日志
                        <List size={12} className="text-gray-500" />
                    </span>
                    <span className="text-[10px] text-gray-500">显示普通稀有度物品的获取记录</span>
                </div>
                <div className={settings.showCommonArtifactLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showCommonArtifactLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded"
                onClick={() => onToggle('showBuildingLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors flex items-center gap-2">
                        建造/交易日志
                    </span>
                    <span className="text-[10px] text-gray-500">显示建筑购买与出售的操作记录</span>
                </div>
                <div className={settings.showBuildingLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showBuildingLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded"
                onClick={() => onToggle('showFlavorText')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors flex items-center gap-2">
                        氛围文本
                        <MessageSquare size={12} className="text-gray-500" />
                    </span>
                    <span className="text-[10px] text-gray-500">在UI中显示额外的剧情描述</span>
                </div>
                <div className={settings.showFlavorText ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showFlavorText ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded"
                onClick={() => onToggle('showAutoSaveLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors flex items-center gap-2">
                        显示自动保存提示
                        <Save size={12} className="text-gray-500" />
                    </span>
                    <span className="text-[10px] text-gray-500">在终端中显示 "Auto-saved" 消息</span>
                </div>
                <div className={settings.showAutoSaveLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showAutoSaveLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded"
                onClick={() => onToggle('showDetailedBatchLogs')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-term-green transition-colors flex items-center gap-2">
                        批量详细日志
                        <FileText size={12} className="text-gray-500" />
                    </span>
                    <span className="text-[10px] text-gray-500">批量调查时显示每一项的详细结果</span>
                </div>
                <div className={settings.showDetailedBatchLogs ? 'text-term-green' : 'text-gray-600'}>
                    {settings.showDetailedBatchLogs ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            <div 
                className="flex items-center justify-between cursor-pointer group select-none hover:bg-white/5 p-2 rounded opacity-80"
                onClick={() => onToggle('disableChoiceEvents')}
            >
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-300 group-hover:text-red-400 transition-colors flex items-center gap-2">
                        禁用随机事件
                        <Zap size={12} className="text-gray-500" />
                    </span>
                    <span className="text-[10px] text-gray-500">停止触发选择题式的突发事件 (Cheat)</span>
                </div>
                <div className={settings.disableChoiceEvents ? 'text-red-400' : 'text-gray-600'}>
                    {settings.disableChoiceEvents ? <CheckSquare size={20} /> : <Square size={20} />}
                </div>
            </div>

            {/* SAVE MANAGEMENT */}
            <div className="pt-4 border-t border-gray-800">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">存档管理 (DATA_IO)</h3>
                
                <div className="flex gap-2 mb-2">
                    <button 
                        onClick={handleExport}
                        className="flex-1 flex items-center justify-center gap-2 p-2 bg-gray-800 hover:bg-gray-700 text-xs font-bold border border-gray-700 rounded transition-colors"
                    >
                        <Upload size={14} /> 导出存档
                    </button>
                    <button 
                        onClick={() => setShowImportInput(!showImportInput)}
                        className="flex-1 flex items-center justify-center gap-2 p-2 bg-gray-800 hover:bg-gray-700 text-xs font-bold border border-gray-700 rounded transition-colors"
                    >
                        <Download size={14} /> 导入存档
                    </button>
                </div>

                {showImportInput && (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                        <textarea 
                            value={importString}
                            onChange={(e) => setImportString(e.target.value)}
                            placeholder="在此粘贴存档数据..."
                            className="w-full h-24 bg-black border border-gray-700 p-2 text-[10px] font-mono text-gray-300 mb-2 focus:border-term-green focus:outline-none resize-none"
                        />
                        <button 
                            onClick={handleImport}
                            disabled={!importString}
                            className={`w-full p-2 text-xs font-bold uppercase rounded flex items-center justify-center gap-2 transition-colors
                                ${importString ? 'bg-term-green/20 text-term-green border border-term-green/50 hover:bg-term-green/30' : 'bg-gray-900 text-gray-600 border border-gray-800 cursor-not-allowed'}
                            `}
                        >
                            <Check size={14} /> 确认导入
                        </button>
                    </div>
                )}

                {copyFeedback && (
                    <div className="text-center text-xs text-term-green mt-2 animate-pulse">
                        {copyFeedback}
                    </div>
                )}
            </div>

        </div>
        
        <div className="p-3 border-t border-term-gray bg-gray-900/30 text-center">
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">v2.1.0-build-8842</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
