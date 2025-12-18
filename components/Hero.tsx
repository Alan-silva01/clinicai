
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-20 md:pt-32 md:pb-40 overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span>Sistema Multi-Agentes de IA</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-8">
            Escale o Atendimento da Sua Clínica com <span className="gradient-text">Humanidade</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Automatize seu WhatsApp, integre pagamentos via PIX e gerencie múltiplos especialistas com uma inteligência que fala a língua do seu paciente.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="w-full sm:w-auto px-8 py-4 bg-gray-900 text-white rounded-xl font-bold text-lg hover:bg-black transition-all shadow-xl hover:-translate-y-1">
              Ver Demonstração
            </button>
            <button className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 border border-gray-200 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all shadow-sm">
              Falar com Especialista
            </button>
          </div>
          
          <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
            <div className="flex items-center space-x-2">
              <img src="https://picsum.photos/seed/whatsapp/30/30" className="rounded-full" alt="WA" />
              <span className="font-bold">WhatsApp</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://picsum.photos/seed/asaas/30/30" className="rounded-full" alt="ASA" />
              <span className="font-bold">Asaas</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://picsum.photos/seed/google/30/30" className="rounded-full" alt="G" />
              <span className="font-bold">Google Calendar</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="https://picsum.photos/seed/pipedrive/30/30" className="rounded-full" alt="P" />
              <span className="font-bold">Pipedrive</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract Shapes */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
    </div>
  );
};

export default Hero;
