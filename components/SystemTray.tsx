
import React from 'react';
import { Mail, Trophy, TrendingUp } from 'lucide-react';

interface SystemTrayProps {
  unreadEmails: number;
  onOpenEmail: () => void;
  onOpenStocks: () => void;
  onOpenAchievements: () => void;
  unlockedStockMarket: boolean;
}

const SystemTray: React.FC<SystemTrayProps> = ({ unreadEmails, onOpenEmail, onOpenStocks, onOpenAchievements, unlockedStockMarket }) => {
  return (
    <div className="flex justify-center gap-4 items-center p-1.5 border-t border-term-gray/30 bg-black/80 backdrop-blur-md">
      
      {/* EMAIL */}
      <button 
        onClick={onOpenEmail}
        className="relative group p-1.5 rounded hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700"
        title="暗网收件箱"
      >
        <Mail size={16} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
        {unreadEmails > 0 && (
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600 rounded-full text-[7px] flex items-center justify-center text-white font-bold animate-pulse border border-black">
                {unreadEmails}
            </span>
        )}
      </button>

      {/* STOCKS */}
      <button 
        onClick={onOpenStocks}
        disabled={!unlockedStockMarket}
        className={`p-1.5 rounded transition-colors border border-transparent ${unlockedStockMarket ? 'hover:bg-gray-800 hover:border-gray-700 group cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
        title={unlockedStockMarket ? "叙事交易市场" : "需解锁: 阴谋论入门"}
      >
        <TrendingUp size={16} className={`${unlockedStockMarket ? 'text-gray-500 group-hover:text-term-green' : 'text-gray-600'} transition-colors`} />
      </button>

      {/* ACHIEVEMENTS */}
      <button 
        onClick={onOpenAchievements}
        className="p-1.5 rounded hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700 group"
        title="脑腐烂名人堂"
      >
        <Trophy size={16} className="text-gray-500 group-hover:text-yellow-500 transition-colors" />
      </button>

    </div>
  );
};

export default SystemTray;
