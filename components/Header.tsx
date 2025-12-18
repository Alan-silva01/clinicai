
import React from 'react';

interface Props {
  onLogoClick?: () => void;
  onBriefingClick?: () => void;
}

const Header: React.FC<Props> = ({ onLogoClick, onBriefingClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20 flex items-center justify-between">
        <button onClick={onLogoClick} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-blue-600 rounded-lg md:rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 shrink-0">
            <span className="text-white font-black text-lg md:text-xl italic">C</span>
          </div>
          <span className="text-xl md:text-2xl font-black tracking-tight text-slate-900">ClinicAI</span>
        </button>
        
        <div className="hidden lg:flex items-center space-x-8 text-[10px] font-bold text-slate-500">
          <span className="text-blue-600 animate-pulse">● PROJETO ATIVO</span>
          <span className="opacity-30">|</span>
          <span>INTEGRAÇÃO ASAAS</span>
          <span>MULTI-AGENTES</span>
        </div>

        <button 
          onClick={onBriefingClick}
          className="bg-blue-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg md:rounded-xl text-[10px] md:text-sm font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-95 whitespace-nowrap"
        >
          O que esses agentes fazem?
        </button>
      </div>
    </header>
  );
};

export default Header;
