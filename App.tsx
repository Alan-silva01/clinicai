
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ProjectIntroduction from './components/ProjectIntroduction';
import WhatsAppDemo from './components/WhatsAppDemo';
import FullBriefing from './components/FullBriefing';
import Footer from './components/Footer';
import DesktopShowcase from './components/DesktopShowcase';
import FeatureCards from './components/FeatureCards';

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'briefing'>('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  if (view === 'briefing') {
    return (
      <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans">
        <Header 
          onLogoClick={() => setView('home')} 
          onBriefingClick={() => setView('briefing')}
        />
        <FullBriefing onBack={() => setView('home')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <Header 
        onLogoClick={() => setView('home')} 
        onBriefingClick={() => setView('briefing')}
      />
      
      <main>
        {/* HERO SECTION: Título + Telas Desktop (Sem Cortes) */}
        <section className="relative pt-12 md:pt-20 pb-0 bg-gradient-to-b from-blue-50/50 to-white">
          <div className="max-w-7xl mx-auto px-6 relative z-30 text-center mb-12 md:mb-16">
            <ProjectIntroduction 
              title="Sua Clínica no Piloto Automático"
              tagline="Atendimento humano, ágil e que fecha vendas sozinho pelo WhatsApp."
            />
          </div>

          {/* DesktopShowcase aqui, no topo do hero */}
          <div className="relative z-20 w-full overflow-visible pb-12 md:pb-24">
            <DesktopShowcase />
          </div>
        </section>

        {/* FEATURE SECTION: Celular Lado a Lado com Cards */}
        <section className="py-24 bg-white relative z-40">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Esquerda: Cards de Benefícios */}
              <div className="space-y-12">
                <div className="max-w-xl">
                  <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Experiência do Paciente</span>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">A inteligência que cuida de tudo.</h2>
                  <p className="text-slate-500 text-lg leading-relaxed">
                    Nossa IA não apenas responde, ela entende o fluxo do seu negócio e executa as tarefas mais importantes enquanto você foca no que realmente importa.
                  </p>
                </div>
                <FeatureCards />
              </div>

              {/* Direita: Celular (Sempre Visível e Lado a Lado) */}
              <div className="flex justify-center lg:justify-end sticky top-32">
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-100/50 rounded-[4rem] blur-2xl group-hover:bg-blue-200/50 transition-colors duration-700"></div>
                  <div className="relative z-10 scale-95 sm:scale-100 transition-transform duration-700 hover:scale-[1.02]">
                    <WhatsAppDemo />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FRASE FINAL */}
        <section className="max-w-5xl mx-auto px-6 py-32 text-center border-t border-slate-100">
           <h2 className="text-3xl md:text-6xl font-black text-slate-900 leading-[1.1] italic">
            "Sua recepção foca no acolhimento, nossa IA foca em toda a burocracia e venda."
           </h2>
           <div className="mt-16">
             <button 
              onClick={() => setView('briefing')} 
              className="group bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-2xl font-black text-2xl transition-all shadow-2xl shadow-blue-500/30 active:scale-95 flex items-center space-x-4 mx-auto"
            >
              <span>Explorar o Projeto</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
