
import React from 'react';
import { GameState, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { Search, FileText, Box } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ResourcesPanelProps {
  resources: GameState['resources'];
  productionRates: Record<ResourceType, number>;
  totalInfoMined: number;
  clickPower: number;
  onMine: () => void;
}

const ResourcesPanel: React.FC<ResourcesPanelProps> = ({ resources, productionRates, totalInfoMined, clickPower, onMine }) => {
  return (
    <section className="w-[20%] border-r border-term-gray flex flex-col bg-term-black/80 min-w-[240px]">
        {/* Mining Button */}
        <div className="p-6 border-b border-term-gray/50 flex flex-col items-center justify-center bg-gradient-to-b from-term-green/5 to-transparent">
            <button 
                onClick={onMine}
                className="
                    group relative w-32 h-32 rounded-full border-4 border-term-gray bg-term-black
                    flex items-center justify-center flex-col gap-2
                    shadow-[0_0_30px_rgba(0,0,0,0.8)]
                    active:scale-95 transition-all duration-75 outline-none
                    hover:border-term-green hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]
                "
            >
            <div className="absolute inset-0 rounded-full border border-term-green/20 scale-110 animate-pulse-fast"></div>
            <Search size={32} className="text-gray-400 group-hover:text-term-white group-active:text-term-green transition-colors" />
            <span className="text-[10px] uppercase tracking-widest text-gray-500 group-hover:text-term-green">浏览网页</span>
            </button>
            <div className="mt-3 text-xs text-gray-500">点击挖掘: +{clickPower} Info</div>
        </div>

        {/* Info Big Display */}
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            <div className="bg-term-gray/20 p-3 rounded border border-term-gray/50 mb-4 shadow-[0_0_10px_rgba(34,197,94,0.05)]">
                <div className="flex items-center gap-2 mb-1">
                    <FileText size={16} className="text-gray-400"/>
                    {/* Increased size for main resource label */}
                    <span className="text-sm font-bold uppercase text-gray-300 tracking-wider">信息流</span>
                </div>
                <div className="text-2xl font-bold text-white">
                    {Math.floor(resources[ResourceType.INFO]).toLocaleString()}
                </div>
                <div className={`text-xs text-right ${productionRates[ResourceType.INFO] >= 0 ? 'text-term-green' : 'text-red-500'}`}>
                {productionRates[ResourceType.INFO] >= 0 ? '+' : ''}{productionRates[ResourceType.INFO].toFixed(1)}/s
                </div>
            </div>

            {/* Other Resources */}
            {[
                ResourceType.FUNDS, 
                ResourceType.POWER, 
                ResourceType.FOLLOWERS, 
                ResourceType.CRED, 
                ResourceType.CULTURE,
                
                ResourceType.CODE, 
                ResourceType.TECH_CAPITAL, 
                ResourceType.OPS, 
                ResourceType.BIOMASS, 
                
                ResourceType.CARDBOARD,    
                ResourceType.SPAM,  

                ResourceType.LORE, 
                ResourceType.ANCIENT_WISDOM, 

                ResourceType.STORY, 
                ResourceType.RUMORS, 
                ResourceType.PANIC, 
                ResourceType.MIND_CONTROL, 

                ResourceType.CLUE, 
                ResourceType.KNOWLEDGE, 
                ResourceType.TRUTH
            ].map(res => {
                const info = RESOURCE_INFO[res];
                const amount = resources[res];
                const rate = productionRates[res];
                // Only show if we have some or produced some, or deep enough
                if (amount <= 0 && rate === 0 && totalInfoMined < 500) return null;

                const Icon = (Icons as any)[info.icon] || Box;

                return (
                    <div key={res} className="bg-term-gray/10 p-2.5 rounded border border-term-gray/30 flex justify-between items-center hover:bg-term-gray/20 transition-colors">
                        <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded bg-black/50 border border-white/5 ${info.color}`}>
                                <Icon size={16} />
                            </div>
                            <div className="flex flex-col">
                                <span className={`text-sm font-bold font-mono ${info.color}`}>{Math.floor(amount).toLocaleString()}</span>
                                {/* Removed transform/scale, increased to plain text-xs with bold/tracking for better visibility */}
                                <span className="text-xs font-bold uppercase text-gray-400 tracking-wider">{info.name}</span>
                            </div>
                        </div>
                        <div className={`text-[10px] ${rate > 0 ? 'text-gray-400' : rate < 0 ? 'text-red-400' : 'text-gray-600'}`}>
                            {rate > 0 ? '+' : ''}{rate.toFixed(1)}/s
                        </div>
                    </div>
                );
            })}
        </div>
    </section>
  );
};

export default ResourcesPanel;
