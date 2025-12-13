
import React, { useMemo, useState } from 'react';
import { GameState, BoardPost } from '../types';
import { BOARD_POSTS } from '../data/boardPosts';
import * as Icons from 'lucide-react';
import { MessageSquare, Image as ImageIcon, RefreshCw } from 'lucide-react';

interface TruthBoardProps {
  gameState: GameState;
}

const TruthBoard: React.FC<TruthBoardProps> = ({ gameState }) => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  
  // Filter unlocked posts
  const unlockedPosts = useMemo(() => {
      return BOARD_POSTS.filter(post => {
          // Always show posts with no requirement
          if (!post.reqTech && !post.minDepth) return true;
          
          // Check Tech
          const hasTech = !post.reqTech || post.reqTech.every(t => gameState.researchedTechs.includes(t));
          
          // Check Depth
          const hasDepth = !post.minDepth || gameState.depth >= post.minDepth;

          return hasTech && hasDepth;
      }).reverse(); // Newest first
  }, [gameState.researchedTechs, gameState.depth]);

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
      // Simulate network request
      setTimeout(() => setIsRefreshing(false), 800); 
  };

  return (
    <div className="flex-1 overflow-y-auto bg-[#1a1a1b] p-2 md:p-4 font-sans text-[13px] leading-snug relative">
        <div className="max-w-4xl mx-auto space-y-4 pb-20">
            
            {/* Header Banner */}
            <div className="text-center py-4 border-b border-gray-700 mb-6 relative group">
                <h1 className="text-2xl font-bold text-orange-700 font-mono tracking-tighter">
                    /t/ - Truth & Conspiracies
                </h1>
                <p className="text-xs text-gray-400 mt-1">
                    "The stories we tell become the reality we live."
                </p>
                
                {/* Refresh Button */}
                <button 
                    onClick={handleRefresh}
                    className="absolute right-0 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-orange-500 transition-colors"
                    title="Refresh Board"
                >
                    <RefreshCw size={18} className={isRefreshing ? 'animate-spin' : ''} />
                </button>
            </div>

            {isRefreshing ? (
                <div className="flex flex-col items-center justify-center py-20 gap-4 opacity-50">
                    <RefreshCw size={32} className="animate-spin text-gray-500" />
                    <span className="text-xs text-gray-500 animate-pulse">Fetching new protocols...</span>
                </div>
            ) : unlockedPosts.length === 0 ? (
                <div className="text-center text-gray-500 py-20">
                    Connecting to secure nodes...
                </div>
            ) : (
                unlockedPosts.map(post => {
                    const PostIcon = (Icons as any)[post.image] || ImageIcon;
                    
                    // Filter replies based on tech
                    const visibleReplies = post.replies.filter(reply => {
                        if (!reply.reqTech) return true;
                        return reply.reqTech.every(t => gameState.researchedTechs.includes(t));
                    });

                    return (
                        <div key={post.id} className="bg-[#222] border-b border-r border-gray-800 p-1 shadow-sm rounded-sm mb-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
                            {/* Thread Container */}
                            <div className="bg-[#2b2b2b] p-3 min-h-[120px] flex gap-3">
                                
                                {/* "Image" Placeholder */}
                                <div className="shrink-0 flex flex-col gap-1 w-[100px]">
                                    <div className="w-[100px] h-[100px] bg-black border border-gray-700 flex items-center justify-center cursor-pointer hover:border-gray-500 transition-colors group relative overflow-hidden">
                                        <PostIcon size={40} className="text-gray-500 group-hover:text-gray-300" />
                                        <div className="absolute bottom-0 right-0 bg-gray-900/80 text-[9px] text-gray-400 px-1">
                                            {post.fileSize}
                                        </div>
                                    </div>
                                    <span className="text-[9px] text-gray-500 truncate hover:underline cursor-pointer">
                                        {post.filename}
                                    </span>
                                </div>

                                {/* Post Content */}
                                <div className="flex-1 min-w-0">
                                    {/* Post Metadata */}
                                    <div className="text-gray-400 mb-2 flex flex-wrap items-center gap-1 text-xs">
                                        <input type="checkbox" className="mr-1" />
                                        <span className="text-[#cc3b3b] font-bold">{post.title}</span>
                                        <span className="text-[#117743] font-bold">{post.author}</span>
                                        <span>{post.timestamp}</span>
                                        <span className="cursor-pointer hover:underline">No.{post.postNumber}</span>
                                        <span className="text-[10px] ml-1">[<span className="cursor-pointer hover:underline">Reply</span>]</span>
                                    </div>

                                    {/* Body */}
                                    <div className="text-[#bdbcbc] ml-1 mb-4 text-sm font-medium">
                                        {renderContent(post.content)}
                                    </div>
                                </div>
                            </div>

                            {/* Replies */}
                            {visibleReplies.length > 0 && (
                                <div className="bg-[#222] flex flex-col gap-1 mt-1 p-2">
                                    {visibleReplies.map((reply) => (
                                        <div key={reply.id} className="bg-[#2b2b2b] border border-gray-700/50 p-2 rounded-sm text-xs ml-4 md:ml-12 table max-w-full">
                                            <div className="text-gray-500 mb-1 flex items-center gap-1 bg-[#222] px-1 py-0.5 rounded w-fit">
                                                <span className="text-[#117743] font-bold">{reply.author}</span>
                                                <span className="scale-75 text-gray-600">{reply.timestamp}</span>
                                                <span className="cursor-pointer hover:underline">No.{reply.postNumber}</span>
                                            </div>
                                            <div className="text-[#bdbcbc] pl-2 flex gap-1">
                                                <span className="text-gray-600 select-none">{">>"}</span>
                                                <div>{renderContent(reply.content)}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    );
                })
            )}
        </div>
    </div>
  );
};

export default TruthBoard;
