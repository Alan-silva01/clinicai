
import React from 'react';

interface FeatureItem {
  title: string;
  description: string;
  icon: string;
}

const features: FeatureItem[] = [
  {
    title: "Atendimento Humanizado",
    description: "Respostas naturais, sem emojis excessivos, linguagem do dia a dia e áudios super-humanos.",
    icon: "💬"
  },
  {
    title: "Gestão Multi-Especialistas",
    description: "Sugestão inteligente entre agendas. Se a Karen está ocupada, a IA sugere a Ketlin automaticamente.",
    icon: "👥"
  },
  {
    title: "Pagamento com Asaas",
    description: "Geração automática de PIX e confirmação instantânea no Google Calendar após o pagamento.",
    icon: "💰"
  },
  {
    title: "Lembretes Automáticos",
    description: "Notificações enviadas 2h antes da consulta para reduzir o no-show em até 90%.",
    icon: "⏰"
  },
  {
    title: "UpSell Inteligente",
    description: "Campanhas automáticas baseadas no histórico. Oferece limpeza a cada 6 meses sem esforço humano.",
    icon: "🚀"
  },
  {
    title: "Integração CRM",
    description: "Conecta-se com ClickUp, Pipedrive e CRMs personalizados no visual da sua clínica.",
    icon: "📊"
  }
];

const FeaturesGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="glass-card p-8 rounded-2xl hover:shadow-xl transition-all hover:-translate-y-2 group">
          <div className="text-4xl mb-6 bg-blue-50 w-16 h-16 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-600 leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FeaturesGrid;
