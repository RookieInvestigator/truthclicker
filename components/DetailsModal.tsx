
import React from 'react';
import { Building, Tech, ResourceType } from '../types';
import { RESOURCE_INFO, CATEGORY_CONFIG } from '../constants';
import { X, Info, Terminal, Database, FileCode, BookOpen } from 'lucide-react';
import * as Icons from 'lucide-react';

interface DetailsModalProps {
  item: Building | Tech;
  type: 'building' | 'tech';
  onClose: () => void;
}

const DetailsModal: React.FC<DetailsModalProps> = ({ item, type, onClose }) => {
  const IconComponent = (Icons as any)[item.icon] || Info;
  const categoryMeta = CATEGORY_CONFIG[item.category];

  // Helper to render costs
  const costs = type === 'building' 
    ? (item as Building).baseCosts 
    : (item as Tech).costs;

  return (
    <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] relative flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        
        {/* Compact Header */}
        <div className={`flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900/50 shrink-0`}>
          <div className="flex items-center gap-4">
             <div className={`p-2 rounded border bg-black ${categoryMeta.color}`}>
                <IconComponent size={24} />
             </div>
             <div>
                <h2 className="text-xl font-bold font-mono text-gray-100 tracking-wide leading-none">
                    {item.name}
                </h2>
                <div className="flex items-center gap-2 mt-1.5">
                    <span className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border border-white/10 bg-white/5 ${categoryMeta.color.split(' ')[0]}`}>
                        {categoryMeta.name}
                    </span>
                    <span className="text-[10px] font-mono text-gray-600">ID: {item.id}</span>
                </div>
             </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors p-1">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-0 scrollbar-thin scrollbar-thumb-gray-800">
          
            {/* LORE BLOCK - High Priority & Typerwriter Style */}
            <div className="p-8 bg-[#080808] border-b border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10">
                    <Database size={64} className="text-term-green" />
                </div>
                
                <div className="flex items-center gap-2 text-[10px] font-bold text-term-green uppercase tracking-[0.2em] mb-4">
                    <BookOpen size={12} />
                    DECRYPTED_ARCHIVE // {type.toUpperCase()}
                </div>
                
                <div className="font-mono text-sm leading-7 text-gray-300 whitespace-pre-wrap pl-4 border-l-2 border-term-green/30 relative z-10">
                    {item.longDescription ? item.longDescription : (
                        <span className="italic text-gray-600">
                            [ 数据缺失 ] 该条目暂无更多详细历史记录。系统正在尝试从底层数据库恢复碎片...
                        </span>
                    )}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Mechanics Summary */}
                <div className="px-6 py-6 border-b md:border-b-0 md:border-r border-gray-800 bg-[#111]">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                        <Terminal size={12} />
                        FUNCTION_OVERVIEW
                    </div>
                    <p className="text-xs text-gray-400 font-mono leading-relaxed bg-black/30 p-3 rounded border border-gray-800/50">
                        {item.description}
                    </p>
                </div>

                {/* Tech/Building Specific Stats & Costs */}
                <div className="px-6 py-6 bg-[#141414]">
                    <div className="flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">
                        <FileCode size={12} />
                        CONFIGURATION
                    </div>
                    
                    <div className="space-y-4">
                        {/* Costs */}
                        <div>
                            <span className="text-[9px] text-gray-600 block mb-1.5 uppercase font-bold">Required Resources</span>
                            <div className="flex flex-wrap gap-2">
                                {Object.entries(costs).map(([res, amount]) => (
                                    <div key={res} className="px-2 py-1.5 bg-black border border-gray-700 rounded-sm text-xs font-mono flex items-center gap-2 min-w-[80px] justify-between">
                                        <span className={RESOURCE_INFO[res as ResourceType].color}>{RESOURCE_INFO[res as ResourceType].name}</span>
                                        <span className="text-gray-400 font-bold">{amount}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Type Specific Info */}
                        {type === 'tech' && (
                            <div>
                                <span className="text-[9px] text-gray-600 block mb-1.5 uppercase font-bold">Tech Specs</span>
                                <div className="text-xs font-mono text-gray-300 flex items-center gap-2">
                                    <span className="text-term-green">▶</span> CLASSIFICATION: TIER {(item as Tech).tier}
                                </div>
                            </div>
                        )}
                        {type === 'building' && (
                            <div>
                                <span className="text-[9px] text-gray-600 block mb-1.5 uppercase font-bold">Scaling</span>
                                <div className="text-xs font-mono text-gray-300 flex items-center gap-2">
                                    <span className="text-blue-400">▶</span> COST_MULT: x{(item as Building).costMultiplier}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </div>

        {/* Footer Decoration */}
        <div className="h-1 w-full bg-gradient-to-r from-term-green/0 via-term-green/20 to-term-green/0"></div>
      </div>
    </div>
  );
};

export default DetailsModal;
