
import React, { useState, useEffect } from 'react';
import { Power, Terminal } from 'lucide-react';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  const [lines, setLines] = useState<string[]>([]);
  const [showButton, setShowButton] = useState(false);

  // Split into two parts to prevent wrapping issues on small screens
  const LOGO_PART_1 = `
██████╗ ██████╗ ██╗   ██╗████████╗██╗  ██╗
╚══██╔╝ ██╔══██╗██║   ██║╚══██╔══╝██║  ██║
   ██║  ██████╔╝██║   ██║   ██║   ███████║
   ██║  ██╔══██╗██║   ██║   ██║   ██╔══██║
   ██║  ██║  ██║╚██████╔╝   ██║   ██║  ██║
   ╚═╝  ╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝  ╚═╝
  `.replace(/█/g, '▓').replace(/╔/g, '░').replace(/╗/g, '▒').replace(/╚/g, '░').replace(/╝/g, '▒').replace(/═/g, '▒').replace(/║/g, '▓');

  const LOGO_PART_2 = `
 ▄████▄   ██╗     ██╗ ██████╗██╗  ██╗███████╗██████╗ 
██╔══██╗  ██║     ██║██╔════╝██║ ██╔╝██╔════╝██╔══██╗
██║  ╚═╝  ██║     ██║██║     █████╔╝ █████╗  ██████╔╝
██║  ██╗  ██║     ██║██║     ██╔═██╗ ██╔══╝  ██╔══██╗
╚█████╔╝  ███████╗██║╚██████╗██║  ██╗███████╗██║  ██║
 ╚════╝   ╚══════╝╚═╝ ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
  `.replace(/█/g, '▓').replace(/▄/g, '░').replace(/╔/g, '▒').replace(/╗/g, '░').replace(/╚/g, '▒').replace(/╝/g, '░').replace(/═/g, '▒').replace(/║/g, '▓');

  useEffect(() => {
    const bootSequence = [
      "INITIALIZING...",
      "LOADING KERNEL................... [OK]",
      "MOUNTING VIRTUAL FILESYSTEM...... [OK]",
      "BYPASSING SECURITY PROTOCOLS..... [OK]",
      "ESTABLISHING CONNECTION.......... [OK]",
      "READY."
    ];

    let delay = 0;
    bootSequence.forEach((line, index) => {
      delay += 400 + Math.random() * 400; // Random typing delay
      setTimeout(() => {
        setLines(prev => [...prev, line]);
        if (index === bootSequence.length - 1) {
          setShowButton(true);
        }
      }, delay);
    });
  }, []);

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 font-mono select-none">
      {/* Background CRT Scanlines */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-10"></div>

      <div className="relative w-full max-w-lg bg-black border border-term-green shadow-[0_0_30px_rgba(34,197,94,0.15)] p-8 flex flex-col items-center animate-in fade-in zoom-in duration-300">
        
        {/* Decorative Corners */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-term-green"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-term-green"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-term-green"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-term-green"></div>

        {/* ASCII Art Logo */}
        <div className="mb-8 text-center opacity-80 scale-75 sm:scale-100 origin-top">
            <pre className="text-term-green text-[6px] sm:text-[8px] leading-[6px] sm:leading-[8px] font-bold whitespace-pre overflow-hidden">
            {LOGO_PART_1}
            </pre>
            <pre className="text-term-green text-[6px] sm:text-[8px] leading-[6px] sm:leading-[8px] font-bold whitespace-pre overflow-hidden mt-2 text-term-green-dim">
            {LOGO_PART_2}
            </pre>
        </div>

        {/* Boot Log */}
        <div className="w-full text-xs text-gray-400 space-y-1 mb-8 min-h-[100px] border-l-2 border-gray-800 pl-4 font-mono">
          {lines.map((line, idx) => (
            <div key={idx} className="animate-in fade-in slide-in-from-left-2 duration-200">
              <span className="text-term-green mr-2">&gt;</span>
              {line}
            </div>
          ))}
          {showButton && (
             <div className="animate-pulse text-term-green">_</div>
          )}
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          disabled={!showButton}
          className={`
            group relative w-full py-4 border border-term-green/50 
            text-term-green font-bold tracking-[0.2em] uppercase transition-all duration-300
            ${showButton 
              ? 'hover:bg-term-green hover:text-black cursor-pointer opacity-100 hover:shadow-[0_0_20px_rgba(34,197,94,0.4)]' 
              : 'opacity-0 cursor-default'
            }
          `}
        >
          <span className="flex items-center justify-center gap-3">
            <Power size={16} className={showButton ? "group-hover:animate-pulse" : ""} />
            EXECUTE
          </span>
        </button>

        <div className="absolute bottom-2 right-4 text-[9px] text-gray-700 flex items-center gap-1">
            <Terminal size={8} /> V2.2.0
        </div>

      </div>
    </div>
  );
};

export default WelcomeScreen;
