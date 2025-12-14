
import React, { useMemo, useState } from 'react';
import { GameState, BoardPost } from '../types';
import { BOARD_POSTS } from '../data/boardPosts';
import * as Icons from 'lucide-react';
import { MessageSquare, RefreshCw, Filter, FileImage } from 'lucide-react';
import ThreadModal from './ThreadModal';

interface TruthBoardProps {
  gameState: GameState;
  markAsSeen: (ids: string[]) => void;
}

const TruthBoard: React.FC<TruthBoardProps> = ({ gameState, markAsSeen }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [showUnreadOnly, setShowUnreadOnly] = useState(false);
  const [selectedPost, setSelectedPost] = useState<BoardPost | null>(null);
  
  // Filter unlocked posts
  const unlockedPosts = useMemo(() => {
      return BOARD_POSTS.filter(post => {
          // Check Tech Requirements
          const hasReqTech = !post.reqTech || post.reqTech.every(t => gameState.researchedTechs.includes(t));
          
          // Check Hidden Tech
          const isHidden = post.hideIfTech && post.hideIfTech.some(t => gameState.researchedTechs.includes(t));

          // Check Depth
          const hasDepth = !post.minDepth || gameState.depth >= post.minDepth;

          if (!hasReqTech || isHidden || !hasDepth) return false;

          // Filter by unread if active
          if (showUnreadOnly && gameState.seenItemIds.includes(post.id)) {
              return false;
          }

          return true;
      }).reverse(); // Newest first
  }, [gameState.researchedTechs, gameState.depth, gameState.seenItemIds, showUnreadOnly]);

  const renderContent = (text: string) => {
      return text.split('\n').map((line, idx) => {
          if (line.startsWith('>')) {
              return <span key={idx} className="text-term-green block">{line}</span>;
          }
          return <span key={idx} className="block">{line || '\u00A0'}</span>;
      });
  };

  const handleRefresh = () => {
      setIsRefreshing(true);
      setTimeout(() => setIsRefreshing(false), 800); 
  };

  const handleOpenThread = (post: BoardPost) => {
      setSelectedPost(post);
      markAsSeen([post.id]);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-[#1a1a1b] font-sans text-[13px] leading-snug relative">
        
        {/* Board Header Toolbar */}
        <div className="px-4 py-2 bg-[#222] border-b border-gray-800 flex justify-between items-center shadow-sm shrink-0 z-10">
            <h2 className="text-orange-700 font-bold font-mono tracking-tighter text-sm">/t/ - Truth & Conspiracies</h2>
            
            <div className="flex items-center gap-2">
                <button
                    onClick={() => setShowUnreadOnly(!showUnreadOnly)}
                    className={`flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors border ${showUnreadOnly ? 'bg-term-green/20 text-term-green border-term-green/50' : 'text-gray-500 border-gray-700 hover:text-gray-300'}`}
                >
                    <Filter size={12} />
                    {showUnreadOnly ? 'SHOW ALL' : 'UNREAD ONLY'}
                </button>
                <button 
                    onClick={handleRefresh}
                    className="p-1.5 text-gray-500 hover:text-white transition-colors"
                    title="Refresh Board"
                >
                    <RefreshCw size={14} className={isRefreshing ? 'animate-spin' : ''} />
                </button>
            </div>
        </div>

        {/* Posts Container */}
        <div className="flex-1 overflow-y-auto p-2 md:p-4">
            <div className="max-w-4xl mx-auto space-y-4 pb-20">
                {isRefreshing ? (
                    <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-50">
                        <RefreshCw size={32} className="animate-spin text-gray-500" />
                        <span className="text-xs text-gray-500 animate-pulse">Fetching new protocols...</span>
                    </div>
                ) : unlockedPosts.length === 0 ? (
                    <div className="text-center text-gray-500 py-20 flex flex-col items-center gap-2">
                        <MessageSquare size={24} className="opacity-20"/>
                        <span>No signals found on this frequency.</span>
                    </div>
                ) : (
                    unlockedPosts.map(post => {
                        const isUnread = !gameState.seenItemIds.includes(post.id);
                        
                        // Filter replies based on tech (Preview uses same logic)
                        const visibleReplies = post.replies.filter(reply => {
                            const hasReqTech = !reply.reqTech || reply.reqTech.every(t => gameState.researchedTechs.includes(t));
                            const isHidden = reply.hideIfTech && reply.hideIfTech.some(t => gameState.researchedTechs.includes(t));
                            return hasReqTech && !isHidden;
                        });

                        return (
                            <div 
                                key={post.id} 
                                onClick={() => handleOpenThread(post)}
                                className={`
                                    bg-[#222] border-b border-r border-gray-800 p-1 shadow-sm rounded-sm mb-6 relative group cursor-pointer transition-all hover:border-gray-600
                                    ${isUnread ? 'border-l-2 border-l-term-green' : ''}
                                `}
                            >
                                {/* Unread Indicator */}
                                {isUnread && (
                                    <div className="absolute -left-3 top-0 bottom-0 w-1 bg-term-green animate-pulse rounded-l-sm"></div>
                                )}

                                {/* Thread Container */}
                                <div className="bg-[#2b2b2b] p-3 min-h-[120px] flex gap-3">
                                    
                                    {/* Textual "Image" Placeholder */}
                                    <div className="shrink-0 flex flex-col gap-1 w-[120px]">
                                        <div className="w-[120px] h-[120px] bg-black border border-gray-700 flex flex-col p-2 transition-colors group-hover:border-gray-500 overflow-hidden relative">
                                            <div className="text-[9px] text-gray-500 font-mono mb-1 uppercase tracking-wider w-full text-left truncate flex justify-between">
                                                <span>File: {post.image}</span>
                                            </div>
                                            <div className="text-[9px] text-term-green/80 font-mono leading-tight flex-1 flex flex-col">
                                                <span className="text-[8px] opacity-50 mb-1">[VISION_MODEL_V2]</span>
                                                <span className="line-clamp-5">{post.imageDescription || "Analysis failed."}</span>
                                            </div>
                                            <div className="absolute bottom-0 right-0 bg-gray-900/90 text-[9px] text-gray-500 px-1 border-t border-l border-gray-800">
                                                {post.fileSize}
                                            </div>
                                        </div>
                                        <span className="text-[9px] text-gray-500 truncate hover:underline max-w-[120px]">
                                            {post.filename}
                                        </span>
                                    </div>

                                    {/* Post Content */}
                                    <div className="flex-1 min-w-0">
                                        {/* Post Metadata */}
                                        <div className="text-gray-400 mb-2 flex flex-wrap items-center gap-1 text-xs">
                                            <input type="checkbox" className="mr-1 pointer-events-none" />
                                            <span className="text-[#cc3b3b] font-bold">{post.title}</span>
                                            <span className="text-[#117743] font-bold">{post.author}</span>
                                            <span>{post.timestamp}</span>
                                            <span className="hover:underline">No.{post.postNumber}</span>
                                            {isUnread && <span className="text-[9px] bg-term-green text-black px-1 rounded font-bold ml-1">NEW</span>}
                                            <span className="text-[10px] ml-auto text-gray-500 bg-black/20 px-1 rounded border border-gray-700/50">Click to Expand</span>
                                        </div>

                                        {/* Body */}
                                        <div className="text-[#bdbcbc] ml-1 mb-4 text-sm font-medium line-clamp-4 group-hover:line-clamp-none transition-all">
                                            {renderContent(post.content)}
                                        </div>
                                        
                                        {/* Reply Preview Hint */}
                                        {visibleReplies.length > 0 && (
                                            <div className="text-[10px] text-gray-500 italic mt-2">
                                                {visibleReplies.length} replies omitted. Click to view.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>

        {/* THREAD MODAL */}
        {selectedPost && (
            <ThreadModal 
                post={selectedPost} 
                onClose={() => setSelectedPost(null)} 
                researchedTechs={gameState.researchedTechs}
            />
        )}
    </div>
  );
};

export default TruthBoard;
