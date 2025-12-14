
import React, { useState, useMemo } from 'react';
import { GameSettings } from '../types';
import { X, CheckSquare, Square, Terminal, FileText, MessageSquare, Save, Zap, List, Upload, Download, Copy, Check, Repeat, AlertTriangle } from 'lucide-react';

interface SettingsModalProps {
  settings: GameSettings;
  onToggle: (key: keyof GameSettings) => void;
  onClose: () => void;
  onImport: (data: string) => boolean;
  onExport: () => string;
  onPrestige?: () => void; // New prop
  totalInfoMined?: number; // New prop
  currentDejaVu?: number; // New prop
}

const SettingsModal: React.FC<SettingsModalProps> = ({ 
    settings, onToggle, onClose, onImport, onExport, 
    onPrestige, totalInfoMined = 0, currentDejaVu = 0 
}) => {
  const [importString, setImportString] = useState("");
  const [exportString, setExportString] = useState("");
  const [showImportInput, setShowImportInput] = useState(false);
  const [showExportOutput, setShowExportOutput] = useState(false);
  const [copyFeedback, setCopyFeedback] = useState("");

  // Calculate potential prestige gain
  const potentialDejaVu = useMemo(() => {
      return Math.max(0, Math.floor(Math.log10(Math.max(1, totalInfoMined) / 10000)));
  }, [totalInfoMined]);

  const nextLevelReq = useMemo(() => {
      // Inverse of formula: Req = 10^(potential + 1) * 10000
      const currentLevel = Math.max(0, Math.floor(Math.log10(Math.max(1, totalInfoMined) / 10000)));
      return Math.pow(10, currentLevel + 1) * 10000;
  }, [totalInfoMined]);

  const handleGenerateExport = () => {
      const data = onExport();
      setExportString(data);
      setShowExportOutput(true);
      setShowImportInput(false);
  };

  const handleCopyExport = () => {
      if (!exportString) return;
      navigator.clipboard.writeText(exportString).then(() => {
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
      <div className="bg-term-black border border-term-gray w-full max-w-md max-h-[90vh] overflow-y-auto shadow-[0_0_50px_rgba(0,0,0,0.5)] animate-in fade-in zoom-in duration-200 scrollbar-thin scrollbar-thumb-gray-800" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-term-gray bg-gray-900/50 sticky top-0 z-10 backdrop-blur-md">
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

            {/* PRESTIGE SECTION */}
            {onPrestige && (
                <div className="pt-4 border-t border-gray-800">
                    <h3 className="text-xs font-bold text-fuchsia-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Repeat size={12} /> 时间回溯 (Prestige)
                    </h3>
                    
                    <div className="bg-fuchsia-900/10 border border-fuchsia-500/30 p-3 rounded mb-3">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] text-gray-400">当前累计信息:</span>
                            <span className="text-xs font-bold text-white font-mono">{Math.floor(totalInfoMined).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-[10px] text-gray-400">当前持有既视感:</span>
                            <span className="text-xs font-bold text-fuchsia-300 font-mono">{currentDejaVu} (+{Math.round(currentDejaVu * 50)}% 产出)</span>
                        </div>
                        <div className="w-full h-1 bg-gray-800 rounded-full overflow-hidden mb-1">
                            <div 
                                className="h-full bg-fuchsia-500 transition-all duration-500"
                                style={{ width: `${Math.min(100, (totalInfoMined / nextLevelReq) * 100)}%` }}
                            ></div>
                        </div>
                        <div className="text-[9px] text-gray-500 text-right">
                            下一点需要: {nextLevelReq.toLocaleString()} 信息
                        </div>
                    </div>

                    <button 
                        onClick={onPrestige}
                        disabled={potentialDejaVu <= 0}
                        className={`w-full py-3 border rounded text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 mb-2
                            ${potentialDejaVu > 0 
                                ? 'bg-fuchsia-500 text-black border-fuchsia-400 hover:bg-white hover:border-white shadow-[0_0_15px_rgba(232,121,249,0.3)]' 
                                : 'bg-gray-900 text-gray-600 border-gray-800 cursor-not-allowed'}
                        `}
                    >
                        <Repeat size={14} /> 
                        {potentialDejaVu > 0 ? `重置并获得 +${potentialDejaVu} 既视感` : '积累不足无法重置'}
                    </button>
                    <p className="text-[9px] text-gray-500 text-center leading-relaxed">
                        <AlertTriangle size={10} className="inline mr-1 text-yellow-500" />
                        警告：此操作将重置所有资源、建筑和科技。保留设置、既视感和已发现的独特物品记录。
                    </p>
                </div>
            )}

            {/* SAVE MANAGEMENT */}
            <div className="pt-4 border-t border-gray-800">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-3">存档管理 (DATA_IO)</h3>
                
                <div className="flex gap-2 mb-2">
                    <button 
                        onClick={handleGenerateExport}
                        className={`flex-1 flex items-center justify-center gap-2 p-2 text-xs font-bold border rounded transition-colors
                            ${showExportOutput ? 'bg-term-green/20 text-term-green border-term-green/50' : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700'}
                        `}
                    >
                        <Upload size={14} /> 导出存档
                    </button>
                    <button 
                        onClick={() => {
                            setShowImportInput(!showImportInput);
                            setShowExportOutput(false);
                        }}
                        className={`flex-1 flex items-center justify-center gap-2 p-2 text-xs font-bold border rounded transition-colors
                            ${showImportInput ? 'bg-blue-900/30 text-blue-400 border-blue-500/50' : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border-gray-700'}
                        `}
                    >
                        <Download size={14} /> 导入存档
                    </button>
                </div>

                {/* EXPORT OUTPUT AREA */}
                {showExportOutput && (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200 space-y-2">
                        <textarea 
                            readOnly
                            value={exportString}
                            className="w-full h-24 bg-black border border-term-green/30 p-2 text-[10px] font-mono text-term-green mb-1 focus:outline-none resize-none"
                            onClick={(e) => (e.target as HTMLTextAreaElement).select()}
                        />
                        <button 
                            onClick={handleCopyExport}
                            className="w-full p-2 text-xs font-bold uppercase rounded flex items-center justify-center gap-2 transition-colors bg-term-green text-black hover:bg-term-green-dim"
                        >
                            <Copy size={14} /> 复制到剪贴板
                        </button>
                    </div>
                )}

                {/* IMPORT INPUT AREA */}
                {showImportInput && (
                    <div className="animate-in fade-in slide-in-from-top-1 duration-200">
                        <textarea 
                            value={importString}
                            onChange={(e) => setImportString(e.target.value)}
                            placeholder="在此粘贴存档数据..."
                            className="w-full h-24 bg-black border border-blue-500/30 p-2 text-[10px] font-mono text-gray-300 mb-2 focus:border-blue-500 focus:outline-none resize-none"
                        />
                        <button 
                            onClick={handleImport}
                            disabled={!importString}
                            className={`w-full p-2 text-xs font-bold uppercase rounded flex items-center justify-center gap-2 transition-colors
                                ${importString ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-gray-600 border border-gray-800 cursor-not-allowed'}
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
            <span className="text-[10px] text-gray-600 uppercase tracking-widest">v2.2.0-prestige</span>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
