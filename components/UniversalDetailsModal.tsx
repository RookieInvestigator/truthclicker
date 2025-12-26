
import React from 'react';
import { createPortal } from 'react-dom';
import { Building, Tech, Artifact, Achievement, ResourceType } from '../types';
import { RESOURCE_INFO, CATEGORY_CONFIG } from '../constants';
import * as Icons from 'lucide-react';
import { 
    X, Terminal, Database, FileCode, BookOpen, Cpu, 
    Zap, Activity, Shield, Box, ArrowUpRight, 
    Microscope, Globe, Disc, Radio, Cat, MessageSquare, File, Trophy, Lock, CheckCircle
} from 'lucide-react';

interface UniversalDetailsModalProps {
  item: Building | Tech | Artifact | Achievement;
  type: 'building' | 'tech' | 'artifact' | 'achievement';
  onClose: () => void;
  onAction?: () => void;
  actionLabel?: string;
  isLocked?: boolean; // Optional prop to indicate lock state for achievements
}

const UniversalDetailsModal: React.FC<UniversalDetailsModalProps> = ({ item, type, onClose, onAction, actionLabel, isLocked }) => {
  
  // --- HELPERS ---

  const getItemColor = () => {
      if (type === 'artifact') {
          const art = item as Artifact;
          switch (art.rarity) {
              case 'mythic': return 'text-yellow-500 border-yellow-500 shadow-yellow-500/20';
              case 'legendary': return 'text-orange-500 border-orange-500 shadow-orange-500/20';
              case 'rare': return 'text-cyber-purple border-cyber-purple shadow-cyber-purple/20';
              case 'anomaly': return 'text-white border-white shadow-white/50';
              default: return 'text-term-green border-term-green shadow-term-green/20';
          }
      }
      if (type === 'achievement') {
          if (isLocked) return 'text-gray-500 border-gray-700 shadow-none';
          return 'text-blue-400 border-blue-500 shadow-blue-500/20';
      }
      // Tech & Building use Category Colors
      const catColor = CATEGORY_CONFIG[(item as Building | Tech).category]?.color || 'text-gray-500 border-gray-500';
      // Extract the color class name (usually first part)
      return catColor + ' shadow-current/10'; 
  };

  const getIcon = () => {
      if (type === 'artifact') {
          const art = item as Artifact;
          // Custom Artifact Icon Logic
          if (art.subtype === 'bookmark') return Globe;
          if (art.subtype === 'hardware') return Cpu;
          if (art.subtype === 'media') return Disc;
          if (art.subtype === 'creature') return Cat;
          if (art.subtype === 'signal') return Radio;
          
          const lower = art.name.toLowerCase();
          if (lower.endsWith('.sql') || lower.endsWith('.db')) return Database;
          if (lower.endsWith('.log')) return MessageSquare;
          return File;
      }
      if (type === 'achievement') {
          if (isLocked) return Lock;
          return (Icons as any)[(item as Achievement).icon] || Trophy;
      }
      return (Icons as any)[(item as Building | Tech).icon] || Box;
  };

  const IconComponent = getIcon();
  const colorClass = getItemColor();
  const borderColor = colorClass.split(' ').find(c => c.startsWith('border-')) || 'border-gray-700';
  const textColor = colorClass.split(' ').find(c => c.startsWith('text-')) || 'text-gray-300';

  // --- CONTENT RENDERERS ---

  const renderStats = () => {
      if (type === 'achievement') {
          return (
              <div className={`p-3 rounded border bg-black/40 ${borderColor} h-full flex flex-col justify-center gap-2`}>
                  <div className="text-[9px] uppercase font-bold opacity-60">Status</div>
                  <div className={`text-sm font-mono font-bold flex items-center gap-2 ${isLocked ? 'text-gray-500' : 'text-term-green'}`}>
                      {isLocked ? <Lock size={14} /> : <CheckCircle size={14} />}
                      {isLocked ? 'LOCKED / UNKNOWN' : 'ACQUIRED'}
                  </div>
              </div>
          );
      }

      if (type === 'artifact') {
          const art = item as Artifact;
          if (art.bonusType === 'none') return null;
          
          return (
              <div className={`p-2 rounded border bg-black/40 ${borderColor} relative overflow-hidden group h-full flex flex-col justify-center`}>
                  <div className={`absolute inset-0 opacity-10 bg-current`}></div>
                  <div className="flex justify-between items-center relative z-10">
                      <div className="flex flex-col">
                          <span className="text-[9px] uppercase font-bold opacity-60">System Effect</span>
                          <span className="text-[11px] font-mono font-bold">
                              {art.bonusType === 'production_multiplier' && 'Output Boost'}
                              {art.bonusType === 'click_power' && 'Click Mining'}
                              {art.bonusType === 'luck' && 'Probability'}
                              {art.bonusType === 'cost_reduction' && 'Efficiency'}
                          </span>
                      </div>
                      <div className="text-right">
                          <span className={`text-lg font-bold font-mono ${textColor}`}>
                              {art.bonusType === 'cost_reduction' ? '-' : '+'}
                              {art.bonusType === 'click_power' ? art.bonusValue : Math.round(art.bonusValue * 100)}
                              {art.bonusType !== 'click_power' && '%'}
                          </span>
                          {art.targetResource && (
                              <div className={`text-[9px] font-bold ${RESOURCE_INFO[art.targetResource].color}`}>
                                  {RESOURCE_INFO[art.targetResource].name}
                              </div>
                          )}
                      </div>
                  </div>
              </div>
          );
      }

      if (type === 'building') {
          const b = item as Building;
          return (
              <div className="space-y-1.5 h-full">
                  {b.baseProduction && Object.keys(b.baseProduction).length > 0 && (
                      <div className="p-2 bg-[#111] border border-gray-800 rounded h-full">
                          <span className="text-[9px] text-gray-500 uppercase font-bold block mb-1">Base Output / Tick</span>
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                              {Object.entries(b.baseProduction).map(([res, val]) => (
                                  <div key={res} className="flex justify-between items-center text-[10px] font-mono">
                                      <span className={RESOURCE_INFO[res as ResourceType].color}>{RESOURCE_INFO[res as ResourceType].name}</span>
                                      <span className={val > 0 ? 'text-term-green' : 'text-red-400'}>
                                          {val > 0 ? '+' : ''}{val}
                                      </span>
                                  </div>
                              ))}
                          </div>
                      </div>
                  )}
              </div>
          );
      }

      if (type === 'tech') {
          const t = item as Tech;
          const hasEffects = t.effects.resourceMultipliers || t.effects.globalCostReduction || t.effects.clickPowerMult || t.effects.unlockMessage;
          
          if (!hasEffects) return null;

          return (
              <div className="p-2 bg-[#111] border border-gray-800 rounded space-y-1.5 h-full">
                  <span className="text-[9px] text-gray-500 uppercase font-bold block">Research Outcome</span>
                  
                  {t.effects.unlockMessage && (
                      <div className="flex items-start gap-1.5 text-[10px] text-yellow-200/80 border-b border-gray-800 pb-1.5 mb-1.5">
                          <ArrowUpRight size={12} className="mt-0.5 shrink-0" />
                          <span className="leading-tight">{t.effects.unlockMessage}</span>
                      </div>
                  )}

                  <div className="space-y-0.5">
                      {t.effects.resourceMultipliers && Object.entries(t.effects.resourceMultipliers).map(([res, val]) => (
                          <div key={res} className="flex justify-between text-[10px] font-mono">
                              <span className={RESOURCE_INFO[res as ResourceType].color}>{RESOURCE_INFO[res as ResourceType].name} Prod.</span>
                              <span className="text-term-green">+{Math.round((val as number) * 100)}%</span>
                          </div>
                      ))}
                      {t.effects.globalCostReduction && (
                          <div className="flex justify-between text-[10px] font-mono">
                              <span className="text-blue-400">Global Cost</span>
                              <span className="text-term-green">-{Math.round(t.effects.globalCostReduction * 100)}%</span>
                          </div>
                      )}
                  </div>
              </div>
          );
      }
  };

  const renderCosts = () => {
      // Artifacts and Achievements generally don't show costs here
      if (type === 'artifact' || type === 'achievement') return null;

      const costs = type === 'building' ? (item as Building).baseCosts : (item as Tech).costs;
      
      return (
          <div className="h-full">
              <div className="p-2 bg-[#111] border border-gray-800 rounded h-full">
                <span className="text-[9px] text-gray-600 uppercase font-bold block mb-1.5">Requirements</span>
                <div className="flex flex-wrap gap-1.5">
                    {Object.entries(costs).map(([res, val]) => (
                        <div key={res} className="px-1.5 py-0.5 bg-black border border-gray-800 rounded flex items-center gap-1.5 text-[10px] font-mono">
                            <span className={RESOURCE_INFO[res as ResourceType].color}>{RESOURCE_INFO[res as ResourceType].name}</span>
                            <span className="text-gray-400">{val}</span>
                        </div>
                    ))}
                </div>
              </div>
          </div>
      );
  };

  const getSubHeader = () => {
      if (type === 'achievement') {
          return (
              <div className="flex gap-2 mt-1">
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border bg-black/50 ${borderColor} ${textColor}`}>
                      Record
                  </span>
              </div>
          );
      }
      if (type === 'artifact') {
          const art = item as Artifact;
          return (
              <div className="flex gap-2 mt-1">
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border bg-black/50 ${borderColor} ${textColor}`}>
                      {art.rarity}
                  </span>
                  <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-gray-700 text-gray-500">
                      {art.subtype}
                  </span>
              </div>
          );
      } else {
          const t = item as Building | Tech;
          const cat = CATEGORY_CONFIG[t.category];
          return (
              <div className="flex gap-2 mt-1">
                  <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border bg-black/50 ${cat.color.replace('text-', 'border-').split(' ')[0]} ${cat.color.split(' ')[0]}`}>
                      {cat.name}
                  </span>
                  {type === 'tech' && (
                      <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded border border-gray-700 text-gray-500">
                          Tier {(item as Tech).tier}
                      </span>
                  )}
              </div>
          );
      }
  };

  const getLoreText = () => {
      if (type === 'achievement') return (item as Achievement).longDescription || (item as Achievement).description;
      if (type === 'artifact') return (item as Artifact).history || (item as Artifact).description;
      return (item as Building | Tech).longDescription;
  };

  const getFlavorText = () => {
      if (type === 'achievement') return (item as Achievement).flavorText;
      if (type === 'artifact') return (item as Artifact).flavorText;
      if (type === 'tech') return (item as Tech).flavorText;
      return undefined;
  }

  return createPortal(
    <div className="fixed inset-0 z-[1050] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div 
        className={`bg-[#0a0a0a] w-full max-w-2xl max-h-[90vh] flex flex-col rounded-sm shadow-2xl relative overflow-hidden border ${borderColor}`} 
        onClick={e => e.stopPropagation()}
      >
        
        {/* --- HEADER --- */}
        <div className="flex justify-between items-start p-6 pb-4 bg-gradient-to-b from-gray-900/50 to-transparent">
            <div className="flex gap-5">
                {/* Big Icon */}
                <div className={`w-16 h-16 shrink-0 flex items-center justify-center border-2 rounded-lg bg-black ${borderColor} ${textColor} shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                    <IconComponent size={32} />
                </div>
                
                {/* Titles */}
                <div>
                    <h2 className={`text-xl md:text-2xl font-bold font-mono tracking-tight leading-none text-gray-100`}>
                        {isLocked && type === 'achievement' ? '???' : item.name}
                    </h2>
                    {getSubHeader()}
                    <div className="text-[10px] font-mono text-gray-600 mt-2 flex items-center gap-2">
                        <span>ID: {item.id}</span>
                        {(type === 'artifact') && <span>DETAILS: {(item as Artifact).details}</span>}
                    </div>
                </div>
            </div>

            <button onClick={onClose} className="text-gray-600 hover:text-white transition-colors p-1">
                <X size={24} />
            </button>
        </div>

        {/* --- SCROLLABLE BODY --- */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-800 p-6 pt-0 space-y-6">
            
            {/* Description / Short Text */}
            <div className="text-sm text-gray-400 font-mono leading-relaxed border-l-2 border-gray-800 pl-4">
                {type === 'achievement' && isLocked ? '此记录尚未被验证。' : item.description}
            </div>

            {/* Lore / History (Moved Above Stats) */}
            <div className="bg-black/40 rounded border border-gray-800 p-5 relative overflow-hidden min-h-[120px]">
                <div className="absolute top-0 right-0 p-3 opacity-5 pointer-events-none">
                    <BookOpen size={64} />
                </div>
                
                <div className="flex items-center gap-2 text-xs font-bold text-gray-400 uppercase tracking-widest mb-4 relative z-10 border-b border-gray-800/50 pb-2">
                    <Database size={14} className="text-gray-500" /> Decrypted Archive
                </div>
                
                <div className={`text-sm font-mono leading-7 whitespace-pre-wrap relative z-10 selection:bg-gray-700 selection:text-white ${isLocked ? 'blur-sm select-none' : 'text-gray-300'}`}>
                    {getLoreText() ? getLoreText() : (
                        <span className="italic text-gray-600 opacity-50">
                            [ No additional data available in the archives. ]
                        </span>
                    )}
                </div>
                
                {getFlavorText() && (
                    <div className="mt-6 pt-4 border-t border-gray-800/30 text-xs text-gray-500 font-mono italic flex justify-end opacity-70">
                        "{ getFlavorText() }"
                    </div>
                )}
            </div>

            {/* Stats & Costs Container */}
            <div>
                <div className="flex items-center gap-2 text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-2 opacity-80">
                    <Activity size={10} /> Technical Specifications
                </div>
                <div className={`grid grid-cols-1 ${type !== 'artifact' && type !== 'achievement' ? 'md:grid-cols-2' : ''} gap-3`}>
                    {/* LEFT: Stats */}
                    <div>
                        {renderStats()}
                    </div>
                    {/* RIGHT: Costs (If applicable) */}
                    {type !== 'artifact' && type !== 'achievement' && (
                        <div>
                            {renderCosts()}
                        </div>
                    )}
                </div>
            </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        {(onAction || actionLabel) && (
            <div className="p-4 border-t border-gray-800 bg-[#111] flex justify-end gap-3 shrink-0">
                <button 
                    onClick={onClose}
                    className="px-4 py-2 text-xs font-mono border border-gray-700 text-gray-400 rounded hover:bg-gray-800 transition-colors"
                >
                    CLOSE
                </button>
                {onAction && (
                    <button 
                        onClick={() => { onAction(); onClose(); }}
                        className={`flex items-center gap-2 px-6 py-2 text-xs font-bold uppercase rounded transition-all
                            bg-term-green/10 text-term-green border border-term-green/50 hover:bg-term-green/20 hover:shadow-[0_0_15px_rgba(34,197,94,0.2)]
                        `}
                    >
                        <Microscope size={14} />
                        {actionLabel || 'ACTION'}
                    </button>
                )}
            </div>
        )}
        
        {/* Decorative Bottom Bar */}
        {!onAction && !actionLabel && (
             <div className={`h-1 w-full bg-gradient-to-r from-transparent via-${textColor.split('-')[1]}-500/50 to-transparent opacity-50`}></div>
        )}

      </div>
    </div>,
    document.body
  );
};

export default UniversalDetailsModal;