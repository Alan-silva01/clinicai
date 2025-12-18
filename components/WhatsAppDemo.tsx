
import React, { useState, useRef } from 'react';

const WhatsAppDemo: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
            ref={videoRef}
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

        {/* Botão de Áudio */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-4 z-50 w-12 h-12 bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 hover:bg-black/80 transition-all active:scale-95 shadow-lg"
          aria-label={isMuted ? "Ativar áudio" : "Desativar áudio"}
        >
          {isMuted ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
            </svg>
          )}
        </button>

        {/* Indicador de "Toque para ouvir" */}
        {isMuted && (
          <div className="absolute bottom-20 right-4 z-50 text-[10px] text-white/60 font-medium animate-pulse">
            🔊 Toque para ouvir
          </div>
        )}

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
