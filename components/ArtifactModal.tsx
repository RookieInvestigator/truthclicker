
import React from 'react';
import { Artifact, ResourceType } from '../types';
import { RESOURCE_INFO } from '../constants';
import { X, File, FileText, FileImage, FileAudio, FileCode, Microscope, Globe, Database, MessageSquare, Cpu, Radio, Disc, Cat, BookOpen } from 'lucide-react';

interface ArtifactModalProps {
  artifact: Artifact;
  onClose: () => void;
  onRecycle?: () => void;
}

const ArtifactModal: React.FC<ArtifactModalProps> = ({ artifact, onClose, onRecycle }) => {
  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'mythic': return 'text-yellow-500 border-yellow-500 bg-yellow-500/10 shadow-[0_0_20px_rgba(234,179,8,0.2)]';
      case 'legendary': return 'text-orange-500 border-orange-500 bg-orange-500/10 shadow-[0_0_15px_rgba(249,115,22,0.2)]';
      case 'rare': return 'text-cyber-purple border-cyber-purple bg-cyber-purple/10';
      case 'anomaly': return 'text-white border-white bg-white/10 animate-pulse';
      default: return 'text-term-green border-term-green bg-term-green/10';
    }
  };

  const getArtifactIcon = (artifact: Artifact) => {
      // New Subtypes
      if (artifact.subtype === 'bookmark') return <Globe size={32} className="text-blue-400" />;
      if (artifact.subtype === 'hardware') return <Cpu size={32} className="text-amber-500" />;
      if (artifact.subtype === 'media') return <Disc size={32} className="text-purple-400" />;
      if (artifact.subtype === 'creature') return <Cat size={32} className="text-red-400" />;
      if (artifact.subtype === 'signal') return <Radio size={32} className="text-cyan-400" />;

      const lower = artifact.name.toLowerCase();
      if (lower.endsWith('.sql') || lower.endsWith('.db') || lower.endsWith('.csv')) return <Database size={32} className="text-yellow-400" />;
      if (lower.endsWith('.log') || lower.endsWith('.history')) return <MessageSquare size={32} className="text-pink-400" />;
      
      if (lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.gif')) return <FileImage size={32} />;
      if (lower.endsWith('.mp3') || lower.endsWith('.wav')) return <FileAudio size={32} />;
      if (lower.endsWith('.txt') || lower.endsWith('.doc') || lower.endsWith('.pdf')) return <FileText size={32} />;
      if (lower.endsWith('.js') || lower.endsWith('.html') || lower.endsWith('.css') || lower.endsWith('.py') || lower.endsWith('.exe')) return <FileCode size={32} />;
      return <File size={32} />;
  }

  const getSubtypeLabel = (subtype: string) => {
      switch(subtype) {
          case 'file': return 'File Attributes';
          case 'bookmark': return 'Index Properties';
          case 'hardware': return 'Component Specs';
          case 'media': return 'Physical Media';
          case 'creature': return 'Biological Sample';
          case 'signal': return 'Signal Analysis';
          default: return 'Attributes';
      }
  };

  const colorClass = getRarityColor(artifact.rarity);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className={`bg-term-black border w-full max-w-md shadow-[0_0_50px_rgba(0,0,0,0.8)] relative flex flex-col max-h-[90vh] ${colorClass.split(' ')[1]}`} onClick={e => e.stopPropagation()}>
        
        {/* Header - Looks like a window title */}
        <div className={`flex items-center justify-between p-3 border-b border-gray-800 bg-gray-900/80`}>
          <div className="flex items-center gap-2">
             <span className="text-gray-400 font-mono text-sm uppercase tracking-wider">
                {getSubtypeLabel(artifact.subtype)}
             </span>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X size={16} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          
          <div className="flex items-start gap-4">
              <div className={`w-20 h-20 flex items-center justify-center border-2 rounded-lg ${colorClass} shrink-0 bg-black relative`}>
                {getArtifactIcon(artifact)}
                {artifact.hasHint && <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full shadow-[0_0_5px_white] animate-pulse" />}
              </div>
              <div className="flex-1 min-w-0">
                 <h2 className={`font-bold font-mono text-xl break-all ${colorClass.split(' ')[0]}`}>{artifact.name}</h2>
                 <div className="text-xs text-gray-500 mt-2 pb-2 border-b border-gray-800 font-mono">
                    <span className="text-gray-400">Source:</span> {artifact.category} <br/>
                    <span className="text-gray-400">Class:</span> <span className="uppercase">{artifact.rarity}</span>
                 </div>
              </div>
          </div>

          <div className="space-y-4">
             {/* Metadata Box */}
             <div className="space-y-1">
                <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">
                    {artifact.subtype === 'bookmark' ? 'Server Path' : artifact.subtype === 'signal' ? 'Frequency' : 'Details'}
                </label>
                <div className="bg-black p-3 rounded border border-gray-800 font-mono text-xs text-term-green/80 overflow-hidden text-ellipsis whitespace-nowrap">
                    {artifact.details}
                </div>
                <div className="text-[10px] text-gray-600 font-mono pl-1">
                    {artifact.flavorText}
                </div>
             </div>

             <div className="space-y-1">
                <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">Content Preview</label>
                <p className="text-gray-300 text-sm leading-relaxed border-l-2 border-gray-800 pl-3 py-1 font-mono">
                    {artifact.description}
                </p>
             </div>

             {/* EXTENDED LORE (History) */}
             {artifact.history && (
                 <div className="space-y-1 pt-2">
                    <label className="text-[10px] text-cyber-purple uppercase font-bold tracking-wider flex items-center gap-1">
                        <BookOpen size={10} /> Deep Analysis / Lore
                    </label>
                    <div className="text-xs text-gray-400 font-mono leading-relaxed bg-gray-900/30 p-3 rounded border border-gray-800/50 italic">
                        {artifact.history}
                    </div>
                 </div>
             )}

             {/* Stats */}
             {artifact.bonusType !== 'none' && (
                <div className="space-y-1 pt-2">
                  <label className="text-[10px] text-gray-500 uppercase font-bold tracking-wider">System Effect</label>
                  <div className={`flex items-center gap-2 p-3 rounded border border-gray-800 bg-gray-900/50 ${colorClass.split(' ')[0]}`}>
                    <span className="font-bold text-xl">
                    {artifact.bonusType === 'cost_reduction' ? '-' : '+'}
                    {artifact.bonusType === 'production_multiplier' || artifact.bonusType === 'cost_reduction' || artifact.bonusType === 'luck' 
                        ? Math.round((artifact.bonusValue - (artifact.bonusType === 'cost_reduction' ? 0 : 1)) * 100) 
                        : artifact.bonusValue}
                    {artifact.bonusType !== 'click_power' && '%'}
                    </span>
                    <div className="flex flex-col leading-none">
                        <span className="text-[10px] uppercase text-gray-400">
                        {artifact.bonusType === 'production_multiplier' && 'Production Boost'}
                        {artifact.bonusType === 'click_power' && 'Mining Power'}
                        {artifact.bonusType === 'luck' && 'Global Luck'}
                        {artifact.bonusType === 'cost_reduction' && 'Cost Efficiency'}
                        </span>
                        {artifact.targetResource && (
                        <span className={`text-xs font-bold ${RESOURCE_INFO[artifact.targetResource].color}`}>
                            {RESOURCE_INFO[artifact.targetResource].name}
                        </span>
                        )}
                    </div>
                  </div>
                </div>
             )}
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-term-gray/10 border-t border-gray-800 flex justify-end gap-3">
           <button onClick={onClose} className="px-4 py-2 text-xs border border-gray-700 text-gray-400 rounded hover:bg-gray-800 transition-all">
             KEEP
           </button>

           {onRecycle && (
             <button 
                onClick={onRecycle}
                className="flex items-center gap-2 px-4 py-2 bg-term-green/10 border border-term-green/50 text-term-green text-xs font-bold uppercase rounded hover:bg-term-green/20 transition-all"
             >
                <Microscope size={14} />
                <span>INVESTIGATE</span>
             </button>
           )}
        </div>

      </div>
    </div>
  );
};

export default ArtifactModal;
