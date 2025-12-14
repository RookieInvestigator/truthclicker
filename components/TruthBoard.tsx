
import React, { useMemo, useState } from 'react';
import { GameState, BoardPost } from '../types';
import { BOARD_POSTS } from '../data/boardPosts';
import { RefreshCw, MessageSquare, ArrowUpCircle } from 'lucide-react';
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

  return (
    <div className="flex-1 flex flex-col h-full bg-[#222] font-sans text-[13px] leading-snug relative overflow-hidden text-[#ccc]">
        
        {/* Banner / Header */}
        <div className="px-4 py-2 bg-[#222] border-b border-[#333] flex flex-col items-center justify-center shrink-0 z-10 gap-1 pb-4">
            <h1 className="text-[#cc3b3b] font-bold text-2xl tracking-tighter mt-2">/t/ - Truth & Paranormal</h1>
            <div className="text-[10px] text-gray-500 mb-2">
                Current Reality Stability: <span className={gameState.resources['REALITY'] < 50 ? "text-red-500 blink" : "text-[#789922]"}>{Math.floor(gameState.resources['REALITY'])}%</span>
            </div>
            
            {/* Fake Posting Form - Collapsed Look */}
            <div className="w-full max-w-[600px] bg-[#282a2e] border border-[#333] p-1.5 flex flex-col items-center gap-1 opacity-75 pointer-events-none select-none">
                <div className="text-[10px] font-bold text-[#cc3b3b] w-full text-center border-b border-[#333] pb-1">Start a New Thread</div>
                <div className="flex gap-2 w-full mt-1">
                    <div className="bg-[#111] h-6 w-1/4 border border-[#444]"></div>
                    <div className="bg-[#111] h-6 w-3/4 border border-[#444]"></div>
                </div>
                <div className="bg-[#111] h-16 w-full border border-[#444] mt-1 relative">
                    <span className="absolute top-2 left-2 text-gray-700 text-xs italic">[Connection Secured: Read-Only Mode Active]</span>
                </div>
            </div>

            {/* Controls */}
            <div className="flex gap-4 text-[10px] text-[#34345C] font-bold mt-2 cursor-pointer">
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

        <hr className="border-[#333] w-full" />

        {/* Board Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6 scrollbar-thin scrollbar-thumb-[#333] scrollbar-track-[#1a1a1b]">
            <div className="max-w-6xl mx-auto pb-20">
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

        {/* THREAD MODAL OVERLAY */}
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
