
import React, { useMemo, useState } from 'react';
import { GameState, BoardPost } from '../types';
import { BOARD_POSTS } from '../data/boardPosts';
import { RefreshCw, MessageSquare } from 'lucide-react';
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
          const hasReqTech = !post.reqTech || post.reqTech.every(t => gameState.researchedTechs.includes(t));
          const isHidden = post.hideIfTech && post.hideIfTech.some(t => gameState.researchedTechs.includes(t));
          const hasDepth = !post.minDepth || gameState.depth >= post.minDepth;

          if (!hasReqTech || isHidden || !hasDepth) return false;
          if (showUnreadOnly && gameState.seenItemIds.includes(post.id)) return false;

          return true;
      }).reverse();
  }, [gameState.researchedTechs, gameState.depth, gameState.seenItemIds, showUnreadOnly]);

  const renderContent = (text: string) => {
      return text.split('\n').map((line, idx) => {
          if (line.trim().startsWith('>')) {
              return <span key={idx} className="text-[#789922] block font-medium">{line}</span>; // Greentext
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

  // --- RENDER THREAD VIEW (INLINE) ---
  if (selectedPost) {
      return (
          <ThreadModal 
              post={selectedPost} 
              onClose={() => setSelectedPost(null)} 
              researchedTechs={gameState.researchedTechs}
          />
      );
  }

  // --- RENDER CATALOG VIEW ---
  return (
    <div className="flex-1 h-full bg-[#222] font-sans text-[13px] leading-snug relative overflow-y-auto scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#1a1a1b]">
        
        {/* Banner / Header - Now Scrollable */}
        <div className="px-4 pt-8 pb-4 flex flex-col items-center justify-center text-center">
            <h1 className="text-[#cc3b3b] font-bold text-3xl tracking-tighter mb-1">/t/ - Truth & Paranormal</h1>
            <div className="text-[10px] text-gray-500 mb-4">
                Current Reality Stability: <span className={gameState.resources['REALITY'] < 50 ? "text-red-500 blink" : "text-[#789922]"}>{Math.floor(gameState.resources['REALITY'])}%</span>
            </div>
            
            {/* Controls */}
            <div className="flex gap-4 text-[11px] text-[#34345C] font-bold cursor-pointer select-none">
                <span className="hover:text-red-400">[Catalog]</span>
                <span className="hover:text-red-400">[Archive]</span>
                <span className="hover:text-red-400" onClick={handleRefresh}>[Update]</span>
                <label className="hover:text-red-400 cursor-pointer flex items-center gap-1">
                    <input 
                        type="checkbox" 
                        checked={showUnreadOnly}
                        onChange={() => setShowUnreadOnly(!showUnreadOnly)}
                    />
                    [Unread Only]
                </label>
            </div>
        </div>

        <hr className="border-[#333] w-full mb-6" />

        {/* Board Content */}
        <div className="px-4 md:px-6 max-w-6xl mx-auto pb-20">
            {isRefreshing ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-50">
                    <RefreshCw size={32} className="animate-spin text-gray-500" />
                    <span className="text-sm font-mono text-gray-500">Synchronizing...</span>
                </div>
            ) : unlockedPosts.length === 0 ? (
                <div className="text-center text-gray-500 py-20 flex flex-col items-center gap-4">
                    <MessageSquare size={32} className="opacity-20"/>
                    <span>No threads found. Dig deeper.</span>
                </div>
            ) : (
                unlockedPosts.map(post => {
                    const isUnread = !gameState.seenItemIds.includes(post.id);
                    
                    // Visible replies logic
                    const visibleReplies = post.replies.filter(reply => {
                        const hasReqTech = !reply.reqTech || reply.reqTech.every(t => gameState.researchedTechs.includes(t));
                        const isHidden = reply.hideIfTech && reply.hideIfTech.some(t => gameState.researchedTechs.includes(t));
                        return hasReqTech && !isHidden;
                    });
                    
                    // Show last 3 replies in board view if there are many
                    const repliesToShow = visibleReplies.slice(-3);
                    const omittedCount = Math.max(0, visibleReplies.length - 3);

                    return (
                        <div key={post.id} className="group relative mb-8 clear-both table w-full">
                            {/* OP Post Container */}
                            <div>
                                {/* Image Block (Left Float) */}
                                <div className="float-left mr-4 mb-2">
                                    <div className="text-[10px] text-gray-500 truncate max-w-[200px] mb-0.5">
                                        File: <a className="text-[#34345C] hover:text-red-400 hover:underline cursor-pointer">{post.filename}</a> 
                                        <span className="opacity-70 ml-1">({post.fileSize})</span>
                                    </div>
                                    <div 
                                        onClick={() => handleOpenThread(post)}
                                        className="w-[150px] h-[150px] bg-black border border-gray-700/50 hover:border-gray-500 cursor-pointer overflow-hidden relative flex flex-col p-2 transition-all shadow-sm"
                                    >
                                        <div className="text-[9px] text-term-green/60 font-mono leading-tight break-words whitespace-pre-wrap h-full overflow-hidden">
                                            <span className="text-[8px] opacity-40 block mb-1 font-bold">[VISION_MODEL_V2]</span>
                                            {post.imageDescription || "IMAGE_DATA_CORRUPTED"}
                                        </div>
                                    </div>
                                </div>

                                {/* Post Metadata & Content */}
                                <div className="block">
                                    <div className="text-gray-400 text-xs mb-2">
                                        <input type="checkbox" className="mr-2" />
                                        {post.title && <span className="text-[#cc3b3b] font-bold text-sm mr-2">{post.title}</span>}
                                        <span className="text-[#117743] font-bold mr-2">{post.author}</span>
                                        <span className="text-gray-500 mr-2">{post.timestamp}</span>
                                        <span className="text-gray-500 cursor-pointer hover:text-red-400 mr-2">No.{post.postNumber}</span>
                                        {isUnread && <span className="text-[9px] bg-term-green text-black px-1 font-bold animate-pulse mr-2">NEW</span>}
                                        <span 
                                            className="text-[#34345C] text-[10px] font-bold cursor-pointer hover:text-red-400 mr-2"
                                            onClick={() => handleOpenThread(post)}
                                        >[Reply]</span>
                                    </div>

                                    <div className="text-[#ccc] text-[14px] leading-relaxed mb-6 font-normal">
                                        {renderContent(post.content)}
                                    </div>
                                </div>
                            </div>

                            {/* Omitted Text */}
                            {omittedCount > 0 && (
                                <div className="text-gray-500 text-xs italic mb-2 ml-4">
                                    <span className="text-gray-400 font-bold mr-1">{omittedCount}</span>
                                    replies omitted. 
                                    <span 
                                        className="text-[#34345C] hover:underline cursor-pointer ml-1 font-bold"
                                        onClick={() => handleOpenThread(post)}
                                    >Click here to view.</span>
                                </div>
                            )}

                            {/* Recent Replies (Inline) */}
                            <div className="flex flex-col gap-1 clear-both">
                                {repliesToShow.map(reply => (
                                    <div key={reply.id} className="bg-[#282a2e] border border-[#333] p-2 rounded-sm text-sm ml-4 md:ml-8 table max-w-full md:max-w-[80%] text-[#ccc] relative">
                                        <div className="text-gray-400 text-xs mb-1 pb-1 border-b border-[#333]/50">
                                            <span className="text-[#117743] font-bold mr-2">{reply.author}</span>
                                            <span className="text-gray-500 mr-2">{reply.timestamp}</span>
                                            <span className="text-gray-500 cursor-pointer hover:text-red-400">No.{reply.postNumber}</span>
                                        </div>
                                        
                                        {reply.image && (
                                            <div className="float-left mr-3 mb-1 mt-1">
                                                <div className="text-[9px] text-gray-500 truncate w-[60px] mb-0.5">
                                                    {reply.image}
                                                </div>
                                                <div className="w-[60px] h-[60px] bg-black border border-gray-700 p-1 overflow-hidden relative">
                                                    <div className="text-[6px] text-term-green/50 font-mono leading-tight h-full overflow-hidden">
                                                        {reply.imageDescription || "IMG"}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <div className="leading-relaxed">
                                            {renderContent(reply.content)}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <hr className="border-[#333] mt-6 clear-both" />
                        </div>
                    );
                })
            )}
        </div>
    </div>
  );
};

export default TruthBoard;
