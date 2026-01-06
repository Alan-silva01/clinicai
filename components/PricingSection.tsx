
import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Invista na Evolução</span>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6">Transparência Total nos Custos</h2>
          <p className="text-slate-500 text-xl max-w-3xl mx-auto">
            Calculamos cada centavo para que você tenha a visão clara do ROI absurdo que o sistema proporciona.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: VPS */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-blue-200 transition-colors">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Infraestrutura VPS</h3>
            <p className="text-slate-500 mb-6 text-sm">2 vCPU / 4GB RAM / 120GB SSD (Hostinger/DigitalOcean)</p>
            <div className="text-3xl font-black text-blue-600">R$ 150<span className="text-slate-400 text-lg font-normal">/mês</span></div>
          </div>

          {/* Card 2: IA (LLM) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-blue-200 transition-colors">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.674a1 1 0 00.922-.617l2.108-4.742A1 1 0 0016.446 10h-2.112l.718-3.125A1 1 0 0013.04 6H9.337a1 1 0 00-.922.617l-2.108 4.742A1 1 0 007.554 13h2.112l-.718 3.125a1 1 0 001.065 1.258z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">IA & Processamento</h3>
            <p className="text-slate-500 mb-6 text-sm">Estimativa para 1.000 conversas completas mensais</p>
            <div className="text-3xl font-black text-blue-600">R$ 200<span className="text-slate-400 text-lg font-normal">/mês</span></div>
          </div>

          {/* Card 3: CRM */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 group hover:border-blue-200 transition-colors">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-2">Plataforma CRM</h3>
            <p className="text-slate-500 mb-6 text-sm">Gestão de leads e multicanalidade integrada</p>
            <div className="text-3xl font-black text-blue-600">R$ 89,90<span className="text-slate-400 text-lg font-normal">/mês</span></div>
          </div>
        </div>

        {/* Breakdown Result */}
        <div className="bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-12 mb-24 shadow-2xl shadow-blue-500/40 translate-y-8">
          <div className="space-y-4 text-center md:text-left">
            <div className="text-blue-100 font-bold uppercase tracking-widest text-sm">Custo Total Mensal</div>
            <div className="text-6xl font-black">R$ 439,90</div>
            <p className="max-w-md text-blue-100">
              Manutenção completa para escalar sua operação sem contratar novos funcionários.
            </p>
          </div>
          <div className="h-px w-full md:w-px md:h-24 bg-blue-400/30"></div>
          <div className="text-center group">
            <div className="text-blue-100 font-bold uppercase tracking-widest text-sm mb-4">Custo por Agendamento</div>
            <div className="text-7xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
              R$ 0,44
            </div>
            <div className="mt-4 inline-block bg-white/10 px-4 py-2 rounded-full text-xs font-bold backdrop-blur-sm">
              VS. R$ 15,00 (Humano)
            </div>
          </div>
        </div>

        {/* Strategic Vision Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 py-24 items-center">
          <div>
            <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 leading-tight">
              CRM + IA: A Visão de 360º que sua empresa nunca teve.
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Intervenção Híbrida</h4>
                  <p className="text-slate-500">Acompanhe cada conversa em tempo real. Se o robô tiver dificuldade, um humano assume em 1 segundo pelo CRM.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Kanban Inteligente e Automático</h4>
                  <p className="text-slate-500">A IA move os leads entre colunas e atualiza descrições conforme a conversa evolui. Zero trabalho manual.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center font-bold">✓</div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Métricas de Conversão</h4>
                  <p className="text-slate-500">Saiba exatamente quanto custa cada lead em cada etapa do funil. Otimização baseada em dados reais.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 rounded-[3rem] -rotate-3"></div>
            <div className="relative bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100">
               <div className="space-y-6">
                  <div className="text-sm font-black text-blue-600 uppercase tracking-widest">Modelos de Implementação</div>
                  
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all cursor-default">
                    <div className="flex justify-between items-start mb-4">
                      <h5 className="font-black text-xl text-slate-900">Projeto & Entrega</h5>
                      <span className="bg-blue-100 text-blue-600 text-xs py-1 px-3 rounded-full font-bold">MAIS POPULAR</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-4">Implementação completa + 90 dias de acompanhamento técnico e ajustes finos.</p>
                    <div className="text-3xl font-black text-slate-900">R$ 4.000,00</div>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-400 transition-all cursor-default">
                     <h5 className="font-black text-xl text-slate-900 mb-2">Gestão Gerenciada</h5>
                     <p className="text-slate-500 text-sm mb-4">Cuidamos de toda a infraestrutura, atualizações e IA por você. Foco total no seu crescimento.</p>
                     <div className="text-slate-900 font-bold italic underline">Valor a combinar</div>
                  </div>
               </div>
            </div>
          </div>
        </div>

        {/* Note */}
        <div className="text-center">
           <p className="text-slate-400 text-sm italic">
             * Obs: Custos de LLM e VPS são diretos para o proprietário, garantindo transparência e controle total dos ativos.
           </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
