
import React from 'react';

const features = [
  {
    title: "Atendimento Humano & Veloz",
    desc: "Responde em segundos, envia áudios e entende o paciente como uma secretária real. Disponível 24h, sem folgas.",
    icon: "🎙️"
  },
  {
    title: "Checkout PIX Inteligente",
    desc: "Cria o PIX de 30% na hora, confere o status de pagamento e confirma a agenda assim que o valor é recebido.",
    icon: "⚡"
  },
  {
    title: "Gestão de Agenda Total",
    desc: "O paciente pode agendar, reagendar ou cancelar sozinho. A IA sincroniza tudo no Google Calendar em tempo real.",
    icon: "📅"
  },
  {
    title: "Follow-up & UpSell",
    desc: "Faz o acompanhamento pós-procedimento e, após 6 meses, chama o paciente para retorno automático.",
    icon: "📈"
  }
];

const FeatureCards: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {features.map((f, i) => (
        <div key={i} className="p-8 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 group relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110 duration-500 opacity-50"></div>
          <div className="text-4xl mb-5 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">{f.icon}</div>
          <h4 className="text-xl font-black text-slate-900 mb-2 relative z-10">{f.title}</h4>
          <p className="text-slate-500 leading-relaxed text-sm relative z-10">{f.desc}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
