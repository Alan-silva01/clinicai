
import React from 'react';

const WhatsAppDemo: React.FC = () => {
  return (
    <div className="relative w-[290px] sm:w-[340px] h-[600px] sm:h-[700px] bg-slate-900 rounded-[3.5rem] border-[12px] border-slate-800 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.5)] p-0 overflow-hidden ring-1 ring-slate-700">
      {/* Botões de Hardware Sólidos */}
      <div className="absolute -right-[13px] top-28 w-[3px] h-16 bg-slate-700 rounded-r-lg"></div>
      <div className="absolute -left-[13px] top-28 w-[3px] h-24 bg-slate-700 rounded-l-lg"></div>
      
      {/* Notch Pro / Dynamic Island */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-8 w-36 bg-slate-800 rounded-b-[2rem] z-40 flex items-center justify-center border-x border-b border-slate-700/50 shadow-sm">
        <div className="w-12 h-1.5 bg-slate-700/40 rounded-full"></div>
      </div>

      <div className="relative w-full h-full bg-black overflow-hidden shadow-inner">
        {/* Camada Principal do Vídeo */}
        <div className="w-full h-full flex items-center justify-center bg-black">
          <video 
            className="w-full h-full object-cover sm:object-contain"
            autoPlay 
            muted 
            loop 
            playsInline
            preload="auto"
          >
            <source src="https://fogijtxrzsvulkotzoyu.supabase.co/storage/v1/object/public/audios_clinicai/video.mp4" type="video/mp4" />
            Seu navegador não suporta vídeos.
          </video>
        </div>

        {/* Reflexos de Vidro Premium */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-white/5 via-transparent to-transparent z-20"></div>
        <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none z-20"></div>
        
        {/* Bordas Internas de Acabamento */}
        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-[2.8rem] z-30"></div>
      </div>
    </div>
  );
};

export default WhatsAppDemo;
