
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
    <div className="flex justify-center gap-6 items-center p-2 border-t border-term-gray/50 bg-black/80 backdrop-blur-md">
      
      {/* EMAIL */}
      <button 
        onClick={onOpenEmail}
        className="relative group p-2 rounded-sm hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700"
        title="Inbox"
      >
        <Mail size={18} className="text-gray-500 group-hover:text-blue-400 transition-colors" />
        {unreadEmails > 0 && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-900 border border-red-500 text-red-500 rounded-full text-[8px] flex items-center justify-center font-bold font-mono">
                {unreadEmails}
            </span>
        )}
      </button>

      {/* STOCKS / NFT */}
      <button 
        onClick={onOpenStocks}
        disabled={!unlockedStockMarket}
        className={`p-2 rounded-sm transition-colors border border-transparent ${unlockedStockMarket ? 'hover:bg-gray-800 hover:border-gray-700 group cursor-pointer' : 'opacity-20 cursor-not-allowed'}`}
        title={unlockedStockMarket ? "Exchange Terminal" : "LOCKED: Req Conspiracy 101"}
      >
        <TrendingUp size={18} className={`${unlockedStockMarket ? 'text-gray-500 group-hover:text-term-green' : 'text-gray-600'} transition-colors`} />
      </button>

      {/* ACHIEVEMENTS / VALIDATION */}
      <button 
        onClick={onOpenAchievements}
        className="p-2 rounded-sm hover:bg-gray-800 transition-colors border border-transparent hover:border-gray-700 group"
        title="Validation Log"
      >
        <Trophy size={18} className="text-gray-500 group-hover:text-amber-400 transition-colors" />
      </button>

    </div>
  );
};

export default SystemTray;
