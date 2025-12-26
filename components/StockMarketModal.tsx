
import React from 'react';
import { createPortal } from 'react-dom';
import { Stock, ResourceType } from '../types';
import { TrendingUp, TrendingDown, X, Rocket, Zap, Skull, Coins, Activity, AlertTriangle, Smile, Ghost } from 'lucide-react';

interface StockMarketModalProps {
  stocks: { [id: string]: Stock };
  resources: { [key in ResourceType]: number };
  onClose: () => void;
  onBuy: (id: string, amount: number) => void;
  onSell: (id: string, amount: number) => void;
}

const StockMarketModal: React.FC<StockMarketModalProps> = ({ stocks, resources, onClose, onBuy, onSell }) => {
  
  const funds = resources[ResourceType.FUNDS];

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-[#1a0b2e] border-2 border-fuchsia-500 w-full max-w-6xl max-h-[90vh] flex flex-col rounded-xl shadow-[0_0_0_4px_rgba(168,85,247,0.3)] overflow-hidden relative font-mono" onClick={e => e.stopPropagation()}>
        
        {/* Grotesque Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(circle_at_center,#ff00ff_1px,transparent_1px)] bg-[size:20px_20px] z-0 animate-pulse"></div>
        <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(45deg,#00ff00_25%,transparent_25%,transparent_75%,#00ff00_75%,#00ff00),linear-gradient(45deg,#00ff00_25%,transparent_25%,transparent_75%,#00ff00_75%,#00ff00)] bg-[size:40px_40px] bg-[position:0_0,20px_20px]"></div>

        {/* Header - Casino Style */}
        <div className="p-4 border-b-4 border-fuchsia-500 bg-black/80 flex justify-between items-center relative overflow-hidden shrink-0 z-10">
            <div className="flex items-center gap-3 md:gap-4">
                <div className="p-2 bg-yellow-400 rounded-full border-2 border-black shadow-[4px_4px_0px_0px_#fff] animate-bounce">
                    <Rocket className="text-black" size={24} />
                </div>
                <div>
                    <h2 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-400 to-fuchsia-500 tracking-tighter italic flex flex-wrap items-center gap-2 transform -skew-x-6">
                        STONK_MASTER_3000
                        <span className="text-[10px] text-white bg-red-600 px-2 py-1 rounded-full not-italic font-bold animate-pulse rotate-3">ALPHA_BETA_OMEGA</span>
                    </h2>
                    <p className="text-[10px] text-green-400 font-bold flex items-center gap-1 mt-1 bg-black px-2 rounded">
                        <Activity size={10} /> 官方认证：这绝对不是庞氏骗局 (wink)
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-8">
                <div className="text-right hidden sm:block bg-black/50 p-2 rounded border border-gray-700">
                    <div className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">你的“真实”财富</div>
                    <div className="text-xl font-mono text-yellow-400 font-black flex items-center justify-end gap-2 drop-shadow-md">
                        <Coins size={16} className="text-yellow-200" />
                        {Math.floor(funds).toLocaleString()}
                    </div>
                </div>
                <button onClick={onClose} className="bg-red-500 hover:bg-red-400 text-white font-bold p-2 rounded border-2 border-black shadow-[4px_4px_0px_0px_#000] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all">
                    <X size={24}/>
                </button>
            </div>
        </div>

        {/* Ticker Tape - Absurdist */}
        <div className="bg-yellow-400 border-b-4 border-black py-2 overflow-hidden whitespace-nowrap flex items-center shrink-0 z-10 relative text-black font-black">
             <div className="animate-marquee inline-block text-xs font-mono tracking-widest">
                 🚀 线在往上走！ (大概) • 钱只是一个社会构念 • 买入！买入！买入！ • 为什么我在亏钱？ • 💎🙌 • 
                 这里没有基本面，只有情绪 • 仓鼠发电机运行正常 • 
                 🚀 线在往上走！ (大概) • 钱只是一个社会构念 • 买入！买入！买入！ • 为什么我在亏钱？ • 💎🙌 • 
             </div>
        </div>

        {/* Stock List Grid */}
        <div className="flex-1 overflow-y-auto p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 z-10 relative">
            {Object.values(stocks).map(stock => {
                const priceChange = stock.currentPrice - stock.basePrice;
                const percentChange = (priceChange / stock.basePrice) * 100;
                const isPositive = priceChange >= 0;
                const canBuy1 = funds >= stock.currentPrice;
                const canBuy10 = funds >= stock.currentPrice * 10;
                
                // Bizarre colors
                const cardBg = isPositive ? 'bg-green-900/40' : 'bg-red-900/40';
                const cardBorder = isPositive ? 'border-green-500' : 'border-red-500';
                const textColor = isPositive ? 'text-green-400' : 'text-red-400';

                return (
                    <div key={stock.id} className={`border-2 ${cardBorder} ${cardBg} rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden group transition-all hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,0,0,0.5)]`}>
                        
                        {/* Wacky Icon */}
                        <div className="absolute -right-4 -top-4 opacity-10 transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                             {isPositive ? <Rocket size={120} /> : <Skull size={120} />}
                        </div>

                        {/* Token Header */}
                        <div className="flex justify-between items-start z-10 relative">
                            <div className="flex gap-4 items-center">
                                <div className={`w-14 h-14 flex items-center justify-center rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] bg-white text-3xl font-black transform -rotate-3 group-hover:rotate-3 transition-transform`}>
                                    <span className="text-black">{stock.symbol[1]}</span>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white font-mono leading-none tracking-tighter flex items-center gap-2 drop-shadow-md">
                                        {stock.symbol}
                                        {stock.volatility > 0.2 && <span className="text-[9px] bg-yellow-400 text-black px-1.5 py-0.5 rounded border border-black animate-pulse font-sans font-bold">高风险(刺激)</span>}
                                    </h3>
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest bg-black/50 px-2 py-0.5 rounded inline-block mt-1">{stock.name}</span>
                                </div>
                            </div>
                            <div className="text-right bg-black/60 p-2 rounded border border-gray-700 backdrop-blur-sm">
                                <div className="text-2xl font-bold font-mono text-white tracking-tighter">${stock.currentPrice.toFixed(2)}</div>
                                <div className={`text-xs font-mono font-bold flex items-center justify-end gap-1 ${textColor}`}>
                                    {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                                    {percentChange > 0 ? '+' : ''}{percentChange.toFixed(2)}%
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="relative bg-black/30 p-2 rounded border border-white/10">
                            <p className="text-[11px] text-gray-300 font-mono leading-tight min-h-[2.5em] italic">
                                "{stock.description}"
                            </p>
                        </div>

                        {/* Chart Visualization (Ugly/Funny Style) */}
                        <div className="h-24 flex items-end gap-1 border-b-2 border-dashed border-gray-600 pb-1 mt-2 relative bg-black/20 rounded px-1 overflow-hidden">
                            {stock.history.map((val, idx) => {
                                const maxVal = Math.max(...stock.history, stock.basePrice * 1.5);
                                const minVal = Math.min(...stock.history, stock.basePrice * 0.5);
                                const range = maxVal - minVal || 1;
                                const height = Math.max(10, ((val - minVal) / range) * 100);
                                
                                const isUp = val >= (stock.history[idx-1] || stock.basePrice);
                                const candleColor = isUp ? 'bg-green-400' : 'bg-red-500';

                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex-1 rounded-t-sm ${candleColor} border border-black min-h-[4px] relative group/candle`}
                                        style={{ height: `${height}%` }}
                                    >
                                        <div className="hidden group-hover/candle:block absolute bottom-full left-0 bg-white text-black text-[9px] px-1 font-bold z-20 border border-black whitespace-nowrap">
                                            ${val.toFixed(2)}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Holdings & Action */}
                        <div className="mt-auto pt-2 space-y-3">
                            <div className="flex justify-between items-center text-[10px] font-mono bg-black/40 p-1 rounded">
                                <span className="text-gray-400 flex items-center gap-1 uppercase font-bold tracking-wider px-2">
                                    <Ghost size={12} /> 持仓
                                </span>
                                <span className={`font-black px-2 py-0.5 rounded ${stock.owned > 0 ? 'text-yellow-400' : 'text-gray-600'}`}>
                                    {stock.owned.toLocaleString()} {stock.symbol}
                                </span>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                {/* SELL SIDE */}
                                <div className="flex gap-1">
                                    <button 
                                        onClick={() => onSell(stock.id, 1)}
                                        disabled={stock.owned < 1}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase border-2 rounded-lg transition-all flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                            ${stock.owned > 0 
                                                ? 'border-red-600 bg-red-500 text-white hover:bg-red-400' 
                                                : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        <span>DUMP 1</span>
                                    </button>
                                    <button 
                                        onClick={() => onSell(stock.id, 10)}
                                        disabled={stock.owned < 10}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase border-2 rounded-lg transition-all hidden sm:flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                            ${stock.owned >= 10 
                                                ? 'border-red-800 bg-red-700 text-white hover:bg-red-600' 
                                                : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        <span>PANIC 10</span>
                                    </button>
                                </div>

                                {/* BUY SIDE */}
                                <div className="flex gap-1">
                                    <button 
                                        onClick={() => onBuy(stock.id, 1)}
                                        disabled={!canBuy1}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase border-2 rounded-lg transition-all flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                            ${canBuy1 
                                                ? 'border-green-600 bg-green-500 text-black hover:bg-green-400' 
                                                : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        <span>YOLO 1</span>
                                    </button>
                                    <button 
                                        onClick={() => onBuy(stock.id, 10)}
                                        disabled={!canBuy10}
                                        className={`flex-1 py-3 text-[10px] font-black uppercase border-2 rounded-lg transition-all hidden sm:flex flex-col items-center justify-center gap-0.5 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none
                                            ${canBuy10 
                                                ? 'border-green-800 bg-green-700 text-white hover:bg-green-600' 
                                                : 'border-gray-700 bg-gray-800 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        <span>APE 10</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer */}
        <div className="p-3 border-t-4 border-black bg-yellow-400 text-center text-[10px] text-black font-black font-mono flex justify-center items-center gap-6 shrink-0 z-10 uppercase tracking-wider">
            <span className="flex items-center gap-1"><Smile size={14} className="animate-spin"/> 这是一个非常严肃的金融工具</span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">不做投资建议 (NFA)</span>
            <span className="hidden sm:inline">|</span>
            <span className="text-red-600 animate-pulse flex items-center gap-1">
                <AlertTriangle size={12} /> 可能会失去一切 (100% 概率)
            </span>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default StockMarketModal;
