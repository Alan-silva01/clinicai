
import React, { useState, useEffect } from 'react';

const screens = [
  {
    id: 1,
    title: "Agente Secretária",
    label: "Triagem & Agendamento",
    img: "https://fogijtxrzsvulkotzoyu.supabase.co/storage/v1/object/public/audios_clinicai/imag1.png"
  },
  {
    id: 2,
    title: "Agente Financeiro",
    label: "Checkout & Conciliação PIX",
    img: "https://fogijtxrzsvulkotzoyu.supabase.co/storage/v1/object/public/audios_clinicai/imag2.png"
  },
  {
    id: 3,
    title: "Agente Pós-Venda",
    label: "Retenção & Lembretes",
    img: "https://fogijtxrzsvulkotzoyu.supabase.co/storage/v1/object/public/audios_clinicai/imag3.png"
  }
];

const DesktopShowcase: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % screens.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[350px] sm:h-[450px] md:h-[600px] lg:h-[700px] w-full flex items-center justify-center overflow-visible px-4">
      {/* Glow Centralizado de fundo para dar profundidade */}
      <div className="absolute inset-0 bg-blue-100/10 rounded-full -z-10 blur-[150px] scale-150"></div>

      <div className="relative w-full max-w-6xl h-full flex items-center justify-center">
        {screens.map((screen, index) => {
          const isFocused = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + screens.length) % screens.length;
          const isNext = index === (activeIndex + 1) % screens.length;

          let positionClass = "opacity-0 scale-75 translate-x-0 z-0 pointer-events-none";
          
          if (isFocused) {
            positionClass = "opacity-100 scale-100 z-30 translate-x-0 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)] pointer-events-auto";
          } else if (isPrev) {
            positionClass = "opacity-30 scale-[0.82] z-10 -translate-x-[35%] md:-translate-x-[45%] -rotate-3 md:-rotate-12 shadow-2xl blur-[2px] pointer-events-none";
          } else if (isNext) {
            positionClass = "opacity-30 scale-[0.82] z-10 translate-x-[35%] md:translate-x-[45%] rotate-3 md:rotate-12 shadow-2xl blur-[2px] pointer-events-none";
          }

          return (
            <div 
              key={screen.id}
              className={`absolute transition-all duration-1000 cubic-bezier(0.23, 1, 0.32, 1) w-[92%] md:w-[80%] lg:w-[75%] aspect-video bg-white rounded-xl md:rounded-[2rem] border border-slate-200/80 overflow-hidden ${positionClass}`}
            >
              {/* Barra de Janela Superior Estilo macOS */}
              <div className="bg-slate-900 h-8 md:h-14 w-full flex items-center px-4 md:px-8 justify-between border-b border-slate-800">
                <div className="flex space-x-1.5 md:space-x-2">
                  <div className="w-2 md:w-3.5 h-2 md:h-3.5 rounded-full bg-red-500/90 shadow-inner"></div>
                  <div className="w-2 md:w-3.5 h-2 md:h-3.5 rounded-full bg-amber-500/90 shadow-inner"></div>
                  <div className="w-2 md:w-3.5 h-2 md:h-3.5 rounded-full bg-green-500/90 shadow-inner"></div>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 flex items-center">
                  <span className="text-[7px] md:text-xs font-bold text-slate-400 tracking-[0.15em] uppercase truncate max-w-[120px] md:max-w-none">
                    {screen.title} <span className="text-blue-500/40 mx-1">/</span> {screen.label}
                  </span>
                </div>
                <div className="hidden sm:block w-12"></div>
              </div>

              {/* Conteúdo da Tela */}
              <div className="relative w-full h-full bg-slate-900 overflow-hidden">
                <img 
                  src={screen.img} 
                  alt={screen.title}
                  loading="eager"
                  className={`w-full h-full object-cover transition-all duration-[2000ms] ${isFocused ? 'opacity-100 scale-105' : 'opacity-20 grayscale blur-[8px] scale-100'}`}
                />
                {/* Gradiente de Foco */}
                <div className={`absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-transparent pointer-events-none transition-opacity duration-1000 ${isFocused ? 'opacity-100' : 'opacity-0'}`}></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Indicadores de Paginação */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-40 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
        {screens.map((_, i) => (
          <button 
            key={i}
            onClick={() => setActiveIndex(i)}
            className={`h-1.5 md:h-2 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-10 md:w-16 bg-blue-500' : 'w-2 bg-white/30 hover:bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopShowcase;
