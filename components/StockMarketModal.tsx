
import React from 'react';
import { Stock, ResourceType } from '../types';
import { TrendingUp, TrendingDown, DollarSign, X, Activity } from 'lucide-react';

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
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-in fade-in zoom-in duration-200" onClick={onClose}>
      <div className="bg-term-black border border-term-gray w-full max-w-4xl max-h-[80vh] flex flex-col rounded-sm shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        
        {/* Header */}
        <div className="p-4 border-b border-term-gray bg-gray-900/50 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <TrendingUp className="text-term-green" />
                <h2 className="text-lg font-bold text-white font-mono tracking-wider">NARRATIVE_EXCHANGE</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-sm font-mono">
                    <span className="text-gray-500 mr-2">AVAIL FUNDS:</span>
                    <span className="text-emerald-400 font-bold">{Math.floor(funds).toLocaleString()}</span>
                </div>
                <button onClick={onClose} className="text-gray-500 hover:text-white"><X size={18}/></button>
            </div>
        </div>

        {/* Stock List */}
        <div className="flex-1 overflow-y-auto p-4 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
            {Object.values(stocks).map(stock => {
                const priceChange = stock.currentPrice - stock.basePrice;
                const percentChange = (priceChange / stock.basePrice) * 100;
                const isPositive = priceChange >= 0;
                const canBuy1 = funds >= stock.currentPrice;
                const canBuy10 = funds >= stock.currentPrice * 10;

                return (
                    <div key={stock.id} className="border border-gray-800 bg-black/40 rounded p-4 flex flex-col gap-3 relative overflow-hidden">
                        {/* Header */}
                        <div className="flex justify-between items-start z-10 relative">
                            <div>
                                <h3 className="text-lg font-bold text-white font-mono flex items-center gap-2">
                                    {stock.symbol} 
                                    <span className="text-xs text-gray-500 font-normal bg-gray-900 px-1 rounded">{stock.name}</span>
                                </h3>
                                <p className="text-[10px] text-gray-500 mt-1 max-w-[200px] leading-tight">{stock.description}</p>
                            </div>
                            <div className="text-right">
                                <div className="text-xl font-bold font-mono text-white">${stock.currentPrice.toFixed(2)}</div>
                                <div className={`text-xs font-mono flex items-center justify-end gap-1 ${isPositive ? 'text-term-green' : 'text-red-500'}`}>
                                    {isPositive ? <TrendingUp size={10} /> : <TrendingDown size={10} />}
                                    {percentChange.toFixed(2)}%
                                </div>
                            </div>
                        </div>

                        {/* Mini Chart (Simplified visual) */}
                        <div className="h-16 flex items-end gap-1 border-b border-gray-800 pb-1 opacity-50">
                            {stock.history.map((val, idx) => {
                                const height = Math.max(10, Math.min(100, (val / (stock.basePrice * 2)) * 100));
                                return (
                                    <div 
                                        key={idx} 
                                        className={`flex-1 rounded-t-sm ${idx === stock.history.length - 1 ? 'bg-white animate-pulse' : val >= stock.basePrice ? 'bg-term-green/50' : 'bg-red-500/50'}`}
                                        style={{ height: `${height}%` }}
                                    ></div>
                                )
                            })}
                        </div>

                        {/* Controls */}
                        <div className="flex justify-between items-center z-10 relative mt-auto">
                            <div className="text-xs font-mono text-gray-400">
                                持有: <span className="text-white font-bold">{stock.owned}</span>
                            </div>
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => onSell(stock.id, 1)}
                                    disabled={stock.owned < 1}
                                    className={`px-3 py-1 text-xs border rounded transition-colors ${stock.owned > 0 ? 'border-red-500/50 text-red-400 hover:bg-red-900/20' : 'border-gray-800 text-gray-600 cursor-not-allowed'}`}
                                >
                                    卖出
                                </button>
                                <button 
                                    onClick={() => onSell(stock.id, 10)}
                                    disabled={stock.owned < 10}
                                    className={`px-3 py-1 text-xs border rounded transition-colors hidden sm:block ${stock.owned >= 10 ? 'border-red-500/50 text-red-400 hover:bg-red-900/20' : 'border-gray-800 text-gray-600 cursor-not-allowed'}`}
                                >
                                    卖 10
                                </button>
                                <div className="w-px bg-gray-800 mx-1"></div>
                                <button 
                                    onClick={() => onBuy(stock.id, 1)}
                                    disabled={!canBuy1}
                                    className={`px-3 py-1 text-xs border rounded transition-colors ${canBuy1 ? 'border-term-green/50 text-term-green hover:bg-term-green/10' : 'border-gray-800 text-gray-600 cursor-not-allowed'}`}
                                >
                                    买入
                                </button>
                                <button 
                                    onClick={() => onBuy(stock.id, 10)}
                                    disabled={!canBuy10}
                                    className={`px-3 py-1 text-xs border rounded transition-colors hidden sm:block ${canBuy10 ? 'border-term-green/50 text-term-green hover:bg-term-green/10' : 'border-gray-800 text-gray-600 cursor-not-allowed'}`}
                                >
                                    买 10
                                </button>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>

      </div>
    </div>
  );
};

export default StockMarketModal;
