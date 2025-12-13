
import React from 'react';
import { Building, Tech, ResourceType } from '../types';
import { RESOURCE_INFO, CATEGORY_CONFIG } from '../constants';
import { X, Cpu, Info, Terminal, Database } from 'lucide-react';
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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-lg shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col max-h-[90vh]" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className={`flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900/50`}>
          <div className="flex items-center gap-3">
             <div className={`p-2 rounded border bg-black ${categoryMeta.color}`}>
                <IconComponent size={20} />
             </div>
             <div>
                <h2 className="text-lg font-bold font-mono text-gray-100 tracking-wide">
                    {item.name}
                </h2>
                <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded border bg-black/50 ${categoryMeta.color}`}>
                    {categoryMeta.name}
                </span>
             </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          {/* Main Description */}
          <div className="space-y-2">
             <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Terminal size={12} /> 摘要
             </div>
             <p className="text-sm text-gray-300 font-mono leading-relaxed border-l-2 border-gray-700 pl-3">
                {item.description}
             </p>
          </div>

          {/* Long Description (Lore) */}
          <div className="space-y-2">
             <div className="flex items-center gap-2 text-xs font-bold text-gray-500 uppercase tracking-widest">
                <Database size={12} /> 详细档案
             </div>
             <div className="bg-black/40 border border-gray-800 p-4 rounded text-xs text-gray-400 font-mono leading-relaxed whitespace-pre-wrap">
                {item.longDescription ? item.longDescription : (
                    <span className="italic opacity-50">该条目暂无更多详细数据...</span>
                )}
             </div>
          </div>

          {/* Tech/Building Specific Stats Display could go here */}
          
          {/* Costs Section */}
          <div className="pt-4 border-t border-gray-800">
             <div className="text-[10px] text-gray-500 uppercase font-bold mb-2">基础成本配置</div>
             <div className="flex flex-wrap gap-2">
                {Object.entries(costs).map(([res, amount]) => (
                    <div key={res} className="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs font-mono flex items-center gap-2">
                        <span className={RESOURCE_INFO[res as ResourceType].color}>{RESOURCE_INFO[res as ResourceType].name}</span>
                        <span className="text-gray-300">{amount}</span>
                    </div>
                ))}
             </div>
          </div>

        </div>

        {/* Footer */}
        <div className="p-3 bg-gray-900/30 border-t border-gray-800 text-center">
            <span className="text-[10px] text-gray-600 font-mono">ID: {item.id} // TYPE: {type.toUpperCase()}</span>
        </div>

      </div>
    </div>
  );
};

export default DetailsModal;
