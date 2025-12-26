
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
    <div className="flex justify-around items-center p-2 border-t border-term-gray/30 bg-black/60 backdrop-blur-md">
      
      {/* EMAIL */}
      <button 
        onClick={onOpenEmail}
        className="relative group p-2 rounded hover:bg-term-gray/20 transition-colors"
        title="暗网收件箱"
      >
        <Mail size={18} className="text-gray-400 group-hover:text-blue-400" />
        {unreadEmails > 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-[8px] flex items-center justify-center text-white font-bold animate-pulse">
                {unreadEmails}
            </span>
        )}
      </button>

      {/* STOCKS */}
      <button 
        onClick={onOpenStocks}
        disabled={!unlockedStockMarket}
        className={`p-2 rounded transition-colors ${unlockedStockMarket ? 'hover:bg-term-gray/20 group cursor-pointer' : 'opacity-30 cursor-not-allowed'}`}
        title={unlockedStockMarket ? "叙事交易市场" : "需解锁: 阴谋论入门"}
      >
        <TrendingUp size={18} className={`${unlockedStockMarket ? 'text-gray-400 group-hover:text-term-green' : 'text-gray-600'}`} />
      </button>

      {/* ACHIEVEMENTS */}
      <button 
        onClick={onOpenAchievements}
        className="p-2 rounded hover:bg-term-gray/20 transition-colors group"
        title="成就陈列室"
      >
        <Trophy size={18} className="text-gray-400 group-hover:text-yellow-400" />
      </button>

    </div>
  );
};

export default SystemTray;
