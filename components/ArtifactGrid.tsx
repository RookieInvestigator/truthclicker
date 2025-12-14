
import React, { useState } from 'react';
import { Artifact } from '../types';
import UniversalDetailsModal from './UniversalDetailsModal';
import { File, FileText, FileImage, FileAudio, FileCode, Disc, ArrowRight, Download, Globe, Database, MessageSquare, Cpu, Radio, Cat } from 'lucide-react';

interface ArtifactGridProps {
  collected: Artifact[];
  limit?: number;
  onViewAll?: () => void;
  onRecycle?: (artifact: Artifact) => void;
}

const ArtifactGrid: React.FC<ArtifactGridProps> = ({ collected, limit, onViewAll, onRecycle }) => {
  const [selectedArtifact, setSelectedArtifact] = useState<Artifact | null>(null);

  const displayArtifacts = limit 
    ? [...collected].reverse().slice(0, limit)
    : [...collected].sort((a, b) => {
        const rarityOrder = { 'common': 1, 'rare': 2, 'legendary': 3, 'mythic': 4, 'cursed': 5, 'anomaly': 6 };
        if (a.rarity === b.rarity) {
            if (a.isProcedural && !b.isProcedural) return 1;
            if (!a.isProcedural && b.isProcedural) return -1;
            return 0;
        }
        return (rarityOrder[b.rarity] || 0) - (rarityOrder[a.rarity] || 0);
      });

  const getArtifactIcon = (artifact: Artifact, size: number) => {
      // New Subtypes
      if (artifact.subtype === 'bookmark') return <Globe size={size} className="text-blue-400" />;
      if (artifact.subtype === 'hardware') return <Cpu size={size} className="text-amber-500" />;
      if (artifact.subtype === 'media') return <Disc size={size} className="text-purple-400" />;
      if (artifact.subtype === 'creature') return <Cat size={size} className="text-red-400" />;
      if (artifact.subtype === 'signal') return <Radio size={size} className="text-cyan-400" />;

      // Fallback/Legacy File logic
      const lower = artifact.name.toLowerCase();
      if (lower.endsWith('.sql') || lower.endsWith('.db') || lower.endsWith('.csv')) return <Database size={size} className="text-yellow-400" />;
      if (lower.endsWith('.log') || lower.endsWith('.history')) return <MessageSquare size={size} className="text-pink-400" />;
      if (lower.endsWith('.jpg') || lower.endsWith('.png') || lower.endsWith('.gif')) return <FileImage size={size} />;
      if (lower.endsWith('.mp3') || lower.endsWith('.wav')) return <FileAudio size={size} />;
      if (lower.endsWith('.txt') || lower.endsWith('.doc') || lower.endsWith('.pdf')) return <FileText size={size} />;
      if (lower.endsWith('.js') || lower.endsWith('.html') || lower.endsWith('.css') || lower.endsWith('.py') || lower.endsWith('.exe')) return <FileCode size={size} />;
      return <File size={size} />;
  }

  return (
    <>
      <div className="p-4 border-t border-term-gray flex flex-col h-full">
        <div className="flex items-center justify-between mb-3 shrink-0">
            <h3 className="text-sm uppercase tracking-widest text-cyber-purple flex items-center gap-2">
            <Download size={14} /> 
            {limit ? 'Recent_Items' : 'All_Items'}
            </h3>
            {limit && onViewAll && (
                <button 
                    onClick={onViewAll}
                    className="text-[10px] text-gray-500 hover:text-white flex items-center gap-1 transition-colors"
                >
                    VIEW ALL <ArrowRight size={10} />
                </button>
            )}
        </div>
        
        {collected.length === 0 ? (
          <div className="text-xs text-gray-600 italic py-8 text-center border border-dashed border-gray-800 flex-1 flex items-center justify-center flex-col gap-2">
            <Disc size={24} className="opacity-20"/>
            <p>文件夹为空</p>
          </div>
        ) : (
          <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-4 gap-2 overflow-y-auto pr-1 content-start pb-4">
            {displayArtifacts.map((artifact, idx) => {
              return (
                <div 
                  key={`${artifact.id}-${idx}`} 
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedArtifact(artifact)}
                >
                  <div className={`
                    aspect-square flex items-center justify-center border rounded-sm transition-all hover:scale-110 hover:z-10 hover:shadow-[0_0_10px_rgba(0,0,0,0.5)]
                    ${artifact.rarity === 'anomaly' ? 'border-white bg-black text-white animate-pulse shadow-[0_0_5px_white]' :
                      artifact.rarity === 'mythic' ? 'border-yellow-500 bg-yellow-500/10 text-yellow-500' : 
                      artifact.rarity === 'legendary' ? 'border-orange-500 bg-orange-500/10 text-orange-500' : 
                      artifact.rarity === 'rare' ? 'border-cyber-purple bg-cyber-purple/10 text-cyber-purple' : 
                      'border-term-green bg-term-green/10 text-term-green'}
                    ${artifact.isProcedural ? 'opacity-80' : 'opacity-100 ring-1 ring-white/10'}
                    ${artifact.hasHint ? 'shadow-[inset_0_0_5px_rgba(255,255,255,0.3)]' : ''}
                  `}>
                    {getArtifactIcon(artifact, 18)}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {selectedArtifact && (
        <UniversalDetailsModal 
          item={selectedArtifact} 
          type="artifact"
          onClose={() => setSelectedArtifact(null)}
          onAction={onRecycle ? () => {
              onRecycle(selectedArtifact);
              setSelectedArtifact(null);
          } : undefined}
          actionLabel="INVESTIGATE"
        />
      )}
    </>
  );
};

export default ArtifactGrid;
