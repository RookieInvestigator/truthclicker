
import React from 'react';
import { Stock, ResourceType } from '../types';
import { TrendingUp, TrendingDown, X, Rocket, Zap, Skull, Coins } from 'lucide-react';

interface StockMarketModalProps {
  stocks: { [id: string]: Stock };
  resources: { [key in ResourceType]: number };
  onClose: () => void;
  onBuy: (id: string, amount: number) => void;
  onSell: (id: string, amount: number) => void;
}

const StockMarketModal: React.FC<StockMarketModalProps> = ({ stocks, resources, onClose, onBuy, onSell }) => {
  
  const funds = resources[ResourceType.FUNDS];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-[#050505] border border-term-green/30 w-full max-w-5xl max-h-[85vh] flex flex-col rounded-sm shadow-[0_0_50px_rgba(34,197,94,0.1)] overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-4 border-b border-gray-800 bg-gray-900/50 flex justify-between items-center relative overflow-hidden">
            {/* Decorative bg */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div className="flex items-center gap-3 relative z-10">
                <div className="p-2 bg-term-green/20 rounded border border-term-green/50">
                    <Rocket className="text-term-green animate-pulse" size={20} />
                </div>
                <div>
                    <h2 className="text-lg font-black text-white font-mono tracking-widest italic">NARRATIVE_DEX <span className="text-xs text-term-green not-italic bg-term-green/10 px-1 rounded">BETA</span></h2>
                    <p className="text-[10px] text-gray-500 font-mono">去中心化叙事交易协议 / 庞氏结构 V4</p>
                </div>
            </div>
            <div className="flex items-center gap-6 relative z-10">
                <div className="text-right">
                    <div className="text-[9px] text-gray-500 font-bold uppercase">Available Liquidity</div>
                    <div className="text-lg font-mono text-emerald-400 font-bold flex items-center justify-end gap-1">
                        <Coins size={14} />
                        {Math.floor(funds).toLocaleString()}
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-600 hover:text-red-500 transition-colors p-2 hover:bg-red-500/10 rounded">
                    <X size={24}/>
                </button>
            </div>
        </div>

        {/* Ticker Tape */}
        <div className="bg-term-green/5 border-b border-gray-800 py-1 overflow-hidden whitespace-nowrap flex items-center">
             <div className="animate-marquee inline-block text-[10px] font-mono text-term-green/70">
                 WAGMI • 骗局即真理 • HODL TILL 0 • DO YOUR OWN RESEARCH • NOT FINANCIAL ADVICE • 叙事燃料注入中 • 
                 WAGMI • 骗局即真理 • HODL TILL 0 • DO YOUR OWN RESEARCH • NOT FINANCIAL ADVICE • 叙事燃料注入中 • 
             </div>
        </div>

        {/* Stock List */}
        <div className="flex-1 overflow-y-auto p-4 grid gap-4 grid-cols-1 lg:grid-cols-2 bg-[linear-gradient(rgba(0,20,0,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,20,0,0.05)_1px,transparent_1px)] bg-[size:20px_20px]">
            {Object.values(stocks).map(stock => {
                const priceChange = stock.currentPrice - stock.basePrice;
                const percentChange = (priceChange / stock.basePrice) * 100;
                const isPositive = priceChange >= 0;
                const canBuy1 = funds >= stock.currentPrice;
                const canBuy10 = funds >= stock.currentPrice * 10;
                
                // Color theme based on movement
                const themeColor = isPositive ? 'text-term-green' : 'text-red-500';
                const borderColor = isPositive ? 'border-term-green/30' : 'border-red-500/30';
                const bgColor = isPositive ? 'bg-term-green/5' : 'bg-red-900/10';

                return (
                    <div key={stock.id} className={`border ${borderColor} ${bgColor} rounded-sm p-4 flex flex-col gap-3 relative overflow-hidden group transition-all hover:border-opacity-100 hover:shadow-[0_0_20px_rgba(0,0,0,0.3)]`}>
                        {/* Header */}
                        <div className="flex justify-between items-start z-10 relative">
                            <div className="flex gap-3 items-start">
                                <div className={`w-10 h-10 flex items-center justify-center rounded-full border ${borderColor} bg-black text-xl font-bold`}>
                                    {stock.symbol[1]}
                                </div>
                                <div>
                                    <h3 className="text-xl font-black text-white font-mono leading-none tracking-tight">
                                        {stock.symbol}
                                    </h3>
                                    <span className="text-[10px] font-bold text-gray-500 bg-black/50 px-1 rounded uppercase tracking-wider">{stock.name}</span>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-2xl font-bold font-mono text-white tracking-tighter">${stock.currentPrice.toFixed(2)}</div>
                                <div className={`text-xs font-mono font-bold flex items-center justify-end gap-1 ${themeColor}`}>
                                    {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                                    {percentChange > 0 ? '+' : ''}{percentChange.toFixed(2)}%
                                </div>
                            </div>
                        </div>

                        <p className="text-[10px] text-gray-400 font-mono leading-tight border-l-2 border-gray-700 pl-2 py-1">
                            {stock.description}
                        </p>

                        {/* Chart Visualization */}
                        <div className="h-20 flex items-end gap-0.5 border-b border-gray-800/50 pb-px opacity-80 mt-2">
                            {stock.history.map((val, idx) => {
                                const maxVal = Math.max(...stock.history, stock.basePrice * 1.5);
                                const minVal = Math.min(...stock.history, stock.basePrice * 0.5);
                                const range = maxVal - minVal || 1;
                                const height = Math.max(5, ((val - minVal) / range) * 100);
                                
                                const barColor = idx === stock.history.length - 1 
                                    ? 'bg-white' 
                                    : (val >= (stock.history[idx-1] || stock.basePrice) ? 'bg-term-green' : 'bg-red-500');

                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex-1 rounded-t-sm ${barColor} transition-all duration-300`}
                                        style={{ height: `${height}%`, opacity: 0.3 + (idx / stock.history.length) * 0.7 }}
                                    ></div>
                                )
                            })}
                        </div>

                        {/* Holdings Info */}
                        <div className="flex justify-between items-center text-[10px] font-mono bg-black/30 p-2 rounded border border-gray-800">
                            <span className="text-gray-500">HOLDINGS:</span>
                            <span className="text-white font-bold">{stock.owned.toLocaleString()} <span className="text-gray-600">{stock.symbol}</span></span>
                        </div>

                        {/* Controls */}
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                            <div className="flex gap-1">
                                <button 
                                    onClick={() => onSell(stock.id, 1)}
                                    disabled={stock.owned < 1}
                                    className={`flex-1 py-2 text-[10px] font-bold uppercase border rounded transition-all flex flex-col items-center justify-center gap-0.5
                                        ${stock.owned > 0 
                                            ? 'border-red-500/50 text-red-400 bg-red-900/10 hover:bg-red-500 hover:text-white' 
                                            : 'border-gray-800 text-gray-700 bg-gray-900/50 cursor-not-allowed'}`}
                                >
                                    <span>Dump 1</span>
                                    {stock.owned > 0 && <span className="text-[8px] opacity-60">-${stock.currentPrice.toFixed(1)}</span>}
                                </button>
                                <button 
                                    onClick={() => onSell(stock.id, 10)}
                                    disabled={stock.owned < 10}
                                    className={`flex-1 py-2 text-[10px] font-bold uppercase border rounded transition-all hidden sm:flex flex-col items-center justify-center gap-0.5
                                        ${stock.owned >= 10 
                                            ? 'border-red-500/50 text-red-400 bg-red-900/10 hover:bg-red-500 hover:text-white' 
                                            : 'border-gray-800 text-gray-700 bg-gray-900/50 cursor-not-allowed'}`}
                                >
                                    <span>Panic 10</span>
                                </button>
                            </div>

                            <div className="flex gap-1">
                                <button 
                                    onClick={() => onBuy(stock.id, 1)}
                                    disabled={!canBuy1}
                                    className={`flex-1 py-2 text-[10px] font-bold uppercase border rounded transition-all flex flex-col items-center justify-center gap-0.5
                                        ${canBuy1 
                                            ? 'border-term-green/50 text-term-green bg-term-green/10 hover:bg-term-green hover:text-black' 
                                            : 'border-gray-800 text-gray-700 bg-gray-900/50 cursor-not-allowed'}`}
                                >
                                    <span>Ape 1</span>
                                    {canBuy1 && <span className="text-[8px] opacity-60">-${stock.currentPrice.toFixed(1)}</span>}
                                </button>
                                <button 
                                    onClick={() => onBuy(stock.id, 10)}
                                    disabled={!canBuy10}
                                    className={`flex-1 py-2 text-[10px] font-bold uppercase border rounded transition-all hidden sm:flex flex-col items-center justify-center gap-0.5
                                        ${canBuy10 
                                            ? 'border-term-green/50 text-term-green bg-term-green/10 hover:bg-term-green hover:text-black' 
                                            : 'border-gray-800 text-gray-700 bg-gray-900/50 cursor-not-allowed'}`}
                                >
                                    <span>FOMO 10</span>
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-800 bg-gray-900/80 text-center text-[9px] text-gray-600 font-mono">
            GAS FEES: 0% • SLIPPAGE: ∞% • AUDIT: NONE • RUGPULL PROBABILITY: HIGH
        </div>

      </div>
    </div>
  );
};

export default StockMarketModal;
