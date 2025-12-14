
import React, { useMemo } from 'react';
import { BoardPost } from '../types';
import { X, Image as ImageIcon } from 'lucide-react';

interface ThreadModalProps {
  post: BoardPost;
  onClose: () => void;
  researchedTechs: string[];
}

const ThreadModal: React.FC<ThreadModalProps> = ({ post, onClose, researchedTechs }) => {
  const visibleReplies = useMemo(() => {
      return post.replies.filter(reply => {
          const hasReqTech = !reply.reqTech || reply.reqTech.every(t => researchedTechs.includes(t));
          const isHidden = reply.hideIfTech && reply.hideIfTech.some(t => researchedTechs.includes(t));
          return hasReqTech && !isHidden;
      });
  }, [post.replies, researchedTechs]);

  const renderContent = (text: string) => {
      return text.split('\n').map((line, idx) => {
          if (line.startsWith('>')) {
              return <span key={idx} className="text-term-green block">{line}</span>;
          }
          return <span key={idx} className="block">{line || '\u00A0'}</span>;
      });
  };

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 md:p-4 animate-in fade-in duration-200">
      <div className="bg-[#1a1a1b] w-full max-w-4xl h-full md:h-[90vh] shadow-2xl relative flex flex-col rounded-sm overflow-hidden border border-gray-700">
        
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-700 bg-[#222] shrink-0">
            <div className="flex items-center gap-2">
                <span className="text-orange-700 font-bold font-mono">/t/</span>
                <span className="text-gray-400 text-xs truncate max-w-[200px] md:max-w-md">{post.title}</span>
            </div>
            <button 
                onClick={onClose} 
                className="text-gray-400 hover:text-white transition-colors p-1"
            >
                <X size={20} />
            </button>
        </div>

        {/* Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-2 md:p-6 bg-[#1a1a1b] scrollbar-thin scrollbar-thumb-gray-600">
            
            {/* OP Post */}
            <div className="bg-[#2b2b2b] p-3 md:p-4 mb-4 border-b border-r border-gray-800 shadow-sm flex flex-col md:flex-row gap-4">
                {/* Image Placeholder (Text Description) */}
                <div className="shrink-0 flex flex-col gap-1 w-full md:w-[240px]">
                    <div className="aspect-square md:w-[240px] md:h-[240px] bg-black border border-gray-700 flex flex-col p-4 overflow-hidden relative">
                        <div className="text-xs text-gray-600 font-mono mb-2 uppercase tracking-wider w-full text-left">Attachment: {post.image}</div>
                        <div className="text-sm text-term-green/80 font-mono leading-relaxed text-left">
                            <span className="text-xs opacity-50 block mb-2">[VISION_MODEL_V2 RESULT]</span>
                            {post.imageDescription || "No description available."}
                        </div>
                        <div className="absolute bottom-0 right-0 bg-gray-900/90 text-xs text-gray-400 px-2 py-1 border-t border-l border-gray-800">
                            {post.fileSize}
                        </div>
                    </div>
                    <span className="text-xs text-gray-500 truncate">{post.filename}</span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="text-gray-400 mb-3 flex flex-wrap items-center gap-2 text-sm">
                        <span className="text-[#cc3b3b] font-bold text-base">{post.title}</span>
                        <span className="text-[#117743] font-bold">{post.author}</span>
                        <span>{post.timestamp}</span>
                        <span className="cursor-pointer hover:underline">No.{post.postNumber}</span>
                        <span className="text-xs bg-term-green/20 text-term-green px-1 rounded">OP</span>
                    </div>
                    <div className="text-[#e0e0e0] text-base leading-relaxed font-medium whitespace-pre-wrap">
                        {renderContent(post.content)}
                    </div>
                </div>
            </div>

            {/* Replies */}
            <div className="space-y-1">
                {visibleReplies.map((reply) => (
                    <div key={reply.id} className="bg-[#2b2b2b] border border-gray-700/50 p-3 rounded-sm text-sm ml-0 md:ml-4 table max-w-full">
                        <div className="text-gray-500 mb-2 flex items-center gap-2 bg-[#222] px-2 py-1 rounded w-fit">
                            <span className="text-[#117743] font-bold">{reply.author}</span>
                            <span className="text-xs text-gray-600">{reply.timestamp}</span>
                            <span className="cursor-pointer hover:underline text-xs">No.{reply.postNumber}</span>
                        </div>
                        <div className="text-[#bdbcbc] pl-2 flex gap-3">
                            <div className="shrink-0 pt-1 text-gray-600 select-none font-bold text-lg leading-none">
                                {">>"}
                            </div>
                            <div className="leading-relaxed">
                                {renderContent(reply.content)}
                                {reply.image && (
                                    <div className="mt-2 text-xs text-gray-500 bg-black/30 p-2 border-l-2 border-gray-600 font-mono">
                                        <div className="mb-1 text-gray-600 uppercase text-[10px]">Attachment: {reply.image}</div>
                                        <span className="text-[8px] text-term-green/50">[AI_CAPTION] </span>
                                        {reply.imageDescription || "Visual data corrupted."}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Footer / Reply Box (Mock) */}
            <div className="mt-8 pt-4 border-t border-gray-700/50 text-center">
                <span className="text-xs text-gray-500">[Thread Closed / Archived]</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ThreadModal;
