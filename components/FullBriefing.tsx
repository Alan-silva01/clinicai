
import React from 'react';

interface Props {
  onBack: () => void;
}

const FullBriefing: React.FC<Props> = ({ onBack }) => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 pb-24 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Botão Voltar */}
      <button 
        onClick={onBack}
        className="flex items-center space-x-3 text-slate-500 hover:text-blue-600 transition-all mb-12 group bg-white px-5 py-2 rounded-full border border-slate-100 shadow-sm"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        <span className="font-bold text-xs uppercase tracking-widest">Início</span>
      </button>

      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-6 leading-tight">
          A Inteligência que <span className="text-blue-600">Lucra</span> por você
        </h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
          A ClinicAI transforma seu WhatsApp em uma máquina de vendas e organização, cuidando do paciente do "oi" ao pós-consulta.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center">
          <div className="text-5xl mb-6">⚡</div>
          <h3 className="text-xl font-bold mb-3">Velocidade Humana</h3>
          <p className="text-sm text-slate-500">Respostas em segundos, inclusive por áudio. O paciente se sente acolhido e não busca a concorrência.</p>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center">
          <div className="text-5xl mb-6">💳</div>
          <h3 className="text-xl font-bold mb-3">PIX de Entrada</h3>
          <p className="text-sm text-slate-500">Garante 30% do valor no agendamento. Se não pagar, a IA libera o horário. Fim do No-Show.</p>
        </div>
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm text-center">
          <div className="text-5xl mb-6">🔄</div>
          <h3 className="text-xl font-bold mb-3">Gestão Autônoma</h3>
          <p className="text-sm text-slate-500">Reagenda, cancela e faz follow-up. Sua recepção foca apenas em quem está dentro da clínica.</p>
        </div>
      </div>

      <div className="space-y-16">
        <section className="bg-slate-900 text-white p-10 md:p-16 rounded-[4rem] shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <h2 className="text-3xl md:text-4xl font-black mb-10">O Fluxo que aumenta sua Conversão</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              {[
                { t: "Triagem Inteligente", d: "Identifica se é cliente novo e oferece avaliação gratuita (R$ 50 -> Grátis) para fechar o lead na hora." },
                { t: "Compromisso Financeiro", d: "Gera o PIX de 30% e monitora o banco. Assim que o pagamento é recebido, confirma na agenda." },
                { t: "Lembrete 2h Antes", d: "Mensagem automática de lembrete no dia, reduzindo esquecimentos em 90%." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold shrink-0">{i+1}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.t}</h4>
                    <p className="text-slate-400 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-8">
               {[
                { t: "Autonomia no Reagendamento", d: "Paciente muda o horário pelo WhatsApp. Se já pagou, a IA apenas atualiza o calendário." },
                { t: "Follow-up de Procedimento", d: "Pergunta como o paciente está se sentindo após o tratamento. Atenção total." },
                { t: "Motor de Recorrência", d: "Após 6 meses, a IA convida para a manutenção. Paciente fidelizado e faturamento garantido." }
              ].map((item, i) => (
                <div key={i} className="flex space-x-4">
                  <div className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center font-bold shrink-0 text-slate-900">{i+4}</div>
                  <div>
                    <h4 className="font-bold text-lg">{item.t}</h4>
                    <p className="text-slate-400 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="text-center py-12">
          <h3 className="text-2xl font-bold mb-8 italic text-slate-600">"Sua clínica nunca mais para de vender."</h3>
          <div className="inline-flex flex-wrap justify-center gap-4">
            <span className="bg-green-100 text-green-700 px-6 py-2 rounded-full text-xs font-bold border border-green-200">24/7 Ativo</span>
            <span className="bg-blue-100 text-blue-700 px-6 py-2 rounded-full text-xs font-bold border border-blue-200">Integração Asaas</span>
            <span className="bg-indigo-100 text-indigo-700 px-6 py-2 rounded-full text-xs font-bold border border-indigo-200">Google Calendar</span>
            <span className="bg-purple-100 text-purple-700 px-6 py-2 rounded-full text-xs font-bold border border-purple-200">IA Generativa</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FullBriefing;
