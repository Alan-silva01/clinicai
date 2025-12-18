
import React from 'react';

const steps = [
  { title: "Cliente Inicia", desc: "Primeiro contato via WhatsApp" },
  { title: "IA Responde", desc: "Triagem e sugestão de especialista" },
  { title: "Gera PIX", desc: "Checkout integrado Asaas" },
  { title: "Confirma", desc: "Agenda Google e CRM atualizados" },
  { title: "Lembrete", desc: "Notificação 2h antes do horário" },
  { title: "Retenção", desc: "Follow-up automático pós-consulta" }
];

const AutomationFlow: React.FC = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 -z-10 transform -translate-y-1/2"></div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-white border-4 border-blue-600 rounded-full flex items-center justify-center text-blue-600 font-bold mb-4 shadow-lg z-10">
              {index + 1}
            </div>
            <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
            <p className="text-sm text-gray-500">{step.desc}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-20 p-8 bg-gray-900 rounded-3xl shadow-2xl border border-gray-800">
        <div className="flex items-center justify-between mb-6">
          <h4 className="text-white font-bold text-lg flex items-center">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Arquitetura Backend (n8n Multi-Agent)
          </h4>
          <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">ClinicAI v2.0 - Active</span>
        </div>
        <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-950 border border-gray-800 flex items-center justify-center">
          <img 
            src="https://picsum.photos/seed/workflow/1200/600" 
            className="absolute inset-0 w-full h-full object-cover opacity-20"
            alt="Backend Workflow"
          />
          <div className="relative z-10 text-center px-6">
            <p className="text-blue-400 font-mono text-sm mb-4">Mapeamento Dinâmico de Fluxos...</p>
            <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
              <div className="p-3 border border-blue-500/30 bg-blue-500/10 rounded-lg text-blue-200 text-xs">Agente Secretária</div>
              <div className="p-3 border border-purple-500/30 bg-purple-500/10 rounded-lg text-purple-200 text-xs">Agente Financeiro</div>
              <div className="p-3 border border-green-500/30 bg-green-500/10 rounded-lg text-green-200 text-xs">Agente Upsell</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationFlow;
