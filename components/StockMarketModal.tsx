
import React from 'react';
import { createPortal } from 'react-dom';
import { Stock, ResourceType } from '../types';
import { TrendingUp, TrendingDown, X, Activity, Image, Terminal, Hash, DollarSign } from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-4 animate-in fade-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-6xl max-h-[90vh] flex flex-col rounded-sm shadow-[0_0_50px_rgba(0,0,0,0.8)] overflow-hidden relative font-mono group/modal" onClick={e => e.stopPropagation()}>
        
        {/* Terminal Header */}
        <div className="p-3 border-b border-term-gray bg-gray-900/50 flex justify-between items-center shrink-0 z-10 select-none">
            <div className="flex items-center gap-3">
                <div className="p-1.5 bg-term-green/10 border border-term-green/30 rounded-sm text-term-green">
                    <Terminal size={16} />
                </div>
                <div>
                    <h2 className="text-sm font-bold text-term-green tracking-[0.2em] uppercase flex items-center gap-2">
                        JPEG_EXCHANGE_TERMINAL
                    </h2>
                    <p className="text-[10px] text-gray-500 font-mono">
                        v2.0.4 | Connection: ENCRYPTED
                    </p>
                </div>
            </div>
            <div className="flex items-center gap-4 md:gap-6">
                <div className="text-right hidden sm:block">
                    <div className="text-[9px] text-gray-500 uppercase tracking-wider">LIQUIDITY</div>
                    <div className="text-sm font-mono text-white font-bold">
                        Ξ {Math.floor(funds).toLocaleString()}
                    </div>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
                    <X size={20}/>
                </button>
            </div>
        </div>

        {/* Ticker Tape - Retro Style */}
        <div className="bg-black border-b border-gray-800 py-1 overflow-hidden whitespace-nowrap flex items-center shrink-0 z-10 relative text-gray-500 font-mono text-[10px]">
             <div className="animate-marquee inline-block">
                 *** SYSTEM ALERT: RIGHT CLICK SAVE DETECTED *** HODL UNTIL ZERO *** GAS FEES AT ATH *** PONZI SCHEME INITIALIZED *** 
                 *** SYSTEM ALERT: RIGHT CLICK SAVE DETECTED *** HODL UNTIL ZERO *** GAS FEES AT ATH *** PONZI SCHEME INITIALIZED *** 
             </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-black/20 grid gap-4 grid-cols-1 lg:grid-cols-2 z-10 relative scrollbar-thin scrollbar-thumb-gray-800">
            {Object.values(stocks).map(stock => {
                const priceChange = stock.currentPrice - stock.basePrice;
                const percentChange = (priceChange / stock.basePrice) * 100;
                const isPositive = priceChange >= 0;
                const canBuy1 = funds >= stock.currentPrice;
                const canBuy10 = funds >= stock.currentPrice * 10;
                
                // Terminal Colors
                const accentColor = isPositive ? 'text-term-green' : 'text-red-500';
                const borderColor = isPositive ? 'border-term-green/30' : 'border-red-900/30';

                return (
                    <div key={stock.id} className={`border ${borderColor} bg-gray-900/20 p-4 flex flex-col gap-3 relative overflow-hidden group transition-all hover:bg-gray-900/40 rounded-sm`}>
                        
                        {/* Header */}
                        <div className="flex justify-between items-start z-10 relative">
                            <div className="flex gap-3 items-center">
                                <div className={`w-12 h-12 flex items-center justify-center border border-gray-700 bg-black text-xl font-bold font-mono text-gray-300`}>
                                    {stock.symbol.substring(0, 1) === '$' ? stock.symbol.substring(1, 2) : stock.symbol.substring(0, 1)}
                                </div>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-bold text-gray-200 font-mono tracking-tight">
                                            {stock.name}
                                        </h3>
                                        {stock.volatility > 0.2 && <span className="text-[9px] bg-red-900/20 text-red-500 border border-red-900/50 px-1 py-0.5 rounded font-mono uppercase">High_Vol</span>}
                                    </div>
                                    <div className="text-[10px] text-gray-600 font-mono flex items-center gap-2">
                                        <span>SYM: {stock.symbol}</span>
                                        <span className="text-gray-800">|</span>
                                        <span>HASH: {stock.id.substring(0,4)}...</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="text-[9px] text-gray-600 uppercase font-bold tracking-wider">Floor</div>
                                <div className="text-xl font-bold font-mono text-white tracking-tighter">
                                    Ξ {stock.currentPrice.toFixed(2)}
                                </div>
                                <div className={`text-[10px] font-mono font-bold flex items-center justify-end gap-1 ${accentColor}`}>
                                    {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                    {percentChange > 0 ? '+' : ''}{percentChange.toFixed(2)}%
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="bg-black/50 p-2 border-l-2 border-gray-700">
                            <p className="text-[10px] text-gray-400 font-mono leading-tight min-h-[2.5em] italic">
                                "{stock.description}"
                            </p>
                        </div>

                        {/* Chart Visualization (Terminal Style) */}
                        <div className="h-16 flex items-end gap-1 border-b border-gray-800 pb-px mt-1 relative px-1">
                            {/* Grid Line */}
                            <div className="absolute top-1/2 w-full h-px bg-gray-800/50 border-t border-dashed border-gray-800"></div>
                            
                            {stock.history.map((val, idx) => {
                                const maxVal = Math.max(...stock.history, stock.basePrice * 1.5);
                                const minVal = Math.min(...stock.history, stock.basePrice * 0.5);
                                const range = maxVal - minVal || 1;
                                const height = Math.max(5, ((val - minVal) / range) * 100);
                                
                                const isUp = val >= (stock.history[idx-1] || stock.basePrice);
                                const barColor = isUp ? 'bg-term-green' : 'bg-red-500';

                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex-1 ${barColor} opacity-50 hover:opacity-100 relative group/bar min-w-[4px]`}
                                        style={{ height: `${height}%` }}
                                    ></div>
                                )
                            })}
                        </div>

                        {/* Actions */}
                        <div className="mt-auto pt-2 grid grid-cols-[1fr_2fr] gap-4 items-center">
                            <div className="flex flex-col">
                                <div className="text-[9px] text-gray-600 uppercase font-bold tracking-wider mb-0.5">Holdings</div>
                                <div className={`font-mono text-sm font-bold flex items-center gap-1 ${stock.owned > 0 ? 'text-white' : 'text-gray-600'}`}>
                                    <Image size={12} /> {stock.owned}
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                                <div className="flex gap-1">
                                    <button 
                                        onClick={() => onSell(stock.id, 1)}
                                        disabled={stock.owned < 1}
                                        className={`flex-1 py-1.5 text-[9px] font-bold uppercase border transition-all text-center
                                            ${stock.owned > 0 
                                                ? 'border-red-900 text-red-500 hover:bg-red-900/20' 
                                                : 'border-gray-800 text-gray-700 cursor-not-allowed'}`}
                                    >
                                        FLIP
                                    </button>
                                    <button 
                                        onClick={() => onSell(stock.id, 10)}
                                        disabled={stock.owned < 10}
                                        className={`flex-1 py-1.5 text-[9px] font-bold uppercase border transition-all text-center
                                            ${stock.owned >= 10 
                                                ? 'border-red-900 text-red-500 hover:bg-red-900/20' 
                                                : 'border-gray-800 text-gray-700 cursor-not-allowed'}`}
                                    >
                                        DUMP
                                    </button>
                                </div>

                                <div className="flex gap-1">
                                    <button 
                                        onClick={() => onBuy(stock.id, 1)}
                                        disabled={!canBuy1}
                                        className={`flex-1 py-1.5 text-[9px] font-bold uppercase border transition-all text-center
                                            ${canBuy1 
                                                ? 'border-term-green text-term-green hover:bg-term-green/10' 
                                                : 'border-gray-800 text-gray-700 cursor-not-allowed'}`}
                                    >
                                        MINT
                                    </button>
                                    <button 
                                        onClick={() => onBuy(stock.id, 10)}
                                        disabled={!canBuy10}
                                        className={`flex-1 py-1.5 text-[9px] font-bold uppercase border transition-all text-center
                                            ${canBuy10 
                                                ? 'border-term-green text-term-green hover:bg-term-green/10' 
                                                : 'border-gray-800 text-gray-700 cursor-not-allowed'}`}
                                    >
                                        APE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

        {/* Footer */}
        <div className="p-2 border-t border-gray-800 bg-black text-center text-[9px] text-gray-600 font-mono flex justify-center items-center gap-4 shrink-0 z-10 uppercase tracking-widest">
            <span>UNREGISTERED SECURITIES</span>
            <span>//</span>
            <span>DYOR</span>
            <span>//</span>
            <span>NOT FINANCIAL ADVICE</span>
        </div>

      </div>
    </div>,
    document.body
  );
};

export default StockMarketModal;
