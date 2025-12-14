
import React, { useMemo, useEffect, useRef } from 'react';
import { BoardPost } from '../types';
import { X, CornerDownRight } from 'lucide-react';

interface ThreadModalProps {
  post: BoardPost;
  onClose: () => void;
  researchedTechs: string[];
}

const ThreadModal: React.FC<ThreadModalProps> = ({ post, onClose, researchedTechs }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const visibleReplies = useMemo(() => {
      return post.replies.filter(reply => {
          const hasReqTech = !reply.reqTech || reply.reqTech.every(t => researchedTechs.includes(t));
          const isHidden = reply.hideIfTech && reply.hideIfTech.some(t => researchedTechs.includes(t));
          return hasReqTech && !isHidden;
      });
  }, [post.replies, researchedTechs]);

  const renderContent = (text: string) => {
      return text.split('\n').map((line, idx) => {
          // Quote links (e.g. >>123456)
          const linkRegex = />>(\d+)/g;
          const parts = line.split(linkRegex);
          
          if (parts.length > 1) {
             return (
                 <span key={idx} className="block">
                    {parts.map((part, i) => {
                        if (i % 2 === 1) { // The captured group (number)
                            return <span key={i} className="text-[#34345C] hover:text-red-400 hover:underline cursor-pointer">&gt;&gt;{part}</span>;
                        }
                        // Check if the rest is greentext
                        if (part.trim().startsWith('>')) return <span key={i} className="text-[#789922]">{part}</span>;
                        return <span key={i}>{part}</span>;
                    })}
                 </span>
             );
          }

          if (line.trim().startsWith('>')) {
              return <span key={idx} className="text-[#789922] block font-medium">{line}</span>;
          }
          return <span key={idx} className="block">{line || '\u00A0'}</span>;
      });
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90 p-0 md:p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div 
        ref={modalRef}
        className="bg-[#222] w-full max-w-6xl h-full md:h-[95vh] shadow-2xl relative flex flex-col md:rounded-sm overflow-hidden border border-[#333] text-[#ccc] font-sans"
        onClick={e => e.stopPropagation()}
      >
        
        {/* Thread Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-[#333] bg-[#222] shrink-0">
            <div className="flex items-center gap-4 text-xs font-bold text-[#34345C]">
                <span className="text-[#cc3b3b]">/t/ - Truth</span>
                <span className="hidden sm:inline">Thread No.{post.postNumber}</span>
                <span className="hover:text-red-400 cursor-pointer" onClick={onClose}>[Return]</span>
                <span className="hover:text-red-400 cursor-pointer">[Catalog]</span>
                <span className="hover:text-red-400 cursor-pointer">[Bottom]</span>
            </div>
            <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white transition-colors p-1"
            >
                <X size={20} />
            </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-[#222] scrollbar-thin scrollbar-thumb-[#444]">
            
            {/* Fake Reply Form at Top of Thread */}
            <div className="flex justify-center mb-8">
                <div className="bg-[#282a2e] border border-[#333] p-2 flex flex-col items-center gap-2 w-full max-w-lg opacity-60">
                    <div className="text-[#cc3b3b] font-bold text-sm border-b border-[#333] w-full text-center pb-1">Reply to Thread No.{post.postNumber}</div>
                    <div className="w-full bg-[#111] h-20 border border-[#444] relative p-2">
                        <span className="text-gray-600 text-xs italic">[Read-only: Authentication required for posting]</span>
                    </div>
                </div>
            </div>

            {/* --- OP POST --- */}
            <div className="mb-8 clear-both">
                {/* OP Image */}
                <div className="float-left mr-4 mb-2">
                    <div className="text-[10px] text-gray-500 truncate max-w-[200px] mb-0.5">
                        File: <span className="text-[#34345C] hover:text-red-400 hover:underline cursor-pointer">{post.filename}</span> 
                        <span className="opacity-70 ml-1">({post.fileSize})</span>
                    </div>
                    <div className="w-[200px] h-[200px] bg-black border border-gray-700 p-2 overflow-hidden flex flex-col relative">
                        <div className="text-[9px] text-term-green/60 font-mono leading-tight break-words whitespace-pre-wrap h-full overflow-hidden">
                            <span className="text-[8px] opacity-40 block mb-1 font-bold">[VISION_MODEL_V2]</span>
                            {post.imageDescription || "IMAGE_MISSING"}
                        </div>
                    </div>
                </div>

                {/* OP Body */}
                <div className="block">
                    <div className="text-gray-400 text-sm mb-3">
                        <input type="checkbox" className="mr-2" />
                        {post.title && <span className="text-[#cc3b3b] font-bold text-base mr-2">{post.title}</span>}
                        <span className="text-[#117743] font-bold mr-2">{post.author}</span>
                        <span className="text-gray-500 mr-2">{post.timestamp}</span>
                        <span className="text-gray-500 cursor-pointer hover:text-red-400 mr-2">No.{post.postNumber}</span>
                    </div>
                    <div className="text-[#ccc] text-[15px] leading-relaxed font-normal">
                        {renderContent(post.content)}
                    </div>
                </div>
            </div>

            <div className="clear-both"></div>

            {/* --- REPLIES --- */}
            <div className="space-y-1 mt-4">
                {visibleReplies.map((reply) => (
                    <div key={reply.id} className="flex gap-1 group">
                        <div className="text-[10px] text-gray-600 w-6 text-right pt-2 opacity-0 group-hover:opacity-100 transition-opacity select-none">
                            <CornerDownRight size={12} />
                        </div>
                        
                        <div className="bg-[#282a2e] border border-[#333] p-2 md:p-3 rounded-sm text-sm max-w-full md:max-w-[90%] inline-block table text-[#ccc]">
                            
                            {/* Reply Header */}
                            <div className="text-gray-400 text-xs mb-2 border-b border-[#333]/50 pb-1">
                                <input type="checkbox" className="mr-2" />
                                <span className="text-[#117743] font-bold mr-2">{reply.author}</span>
                                <span className="text-gray-500 mr-2">{reply.timestamp}</span>
                                <span className="text-gray-500 cursor-pointer hover:text-red-400">No.{reply.postNumber}</span>
                            </div>

                            <div className="block">
                                {/* Reply Image (if any) */}
                                {reply.image && (
                                    <div className="float-left mr-3 mb-1">
                                        <div className="text-[9px] text-gray-500 truncate w-[80px] mb-0.5">
                                            {reply.image}
                                        </div>
                                        <div className="w-[80px] h-[80px] bg-black border border-gray-700 p-1 overflow-hidden relative">
                                            <div className="text-[7px] text-term-green/50 font-mono leading-tight h-full overflow-hidden">
                                                {reply.imageDescription || "IMG_ERR"}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Reply Content */}
                                <div className="text-[14px] leading-relaxed min-w-0">
                                    {renderContent(reply.content)}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Thread End */}
            <div className="mt-10 pt-4 border-t border-[#333] text-center mb-8">
                <div className="mt-4 flex justify-between px-4 text-xs font-bold text-[#34345C]">
                    <button onClick={onClose} className="hover:text-red-400">[Return]</button>
                    <div className="flex gap-4">
                        <button className="hover:text-red-400">[Catalog]</button>
                        <button className="hover:text-red-400">[Top]</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadModal;
