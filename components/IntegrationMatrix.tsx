
import React from 'react';

const integrations = [
  { name: 'WhatsApp Cloud API', role: 'Interface de Comunicação', tech: 'Evolution API' },
  { name: 'Asaas API', role: 'Processamento de Pagamentos', tech: 'PIX Dinâmico / Webhooks' },
  { name: 'Google Calendar', role: 'Sincronização de Horários', tech: 'Gestão Multi-Agenda' },
  { name: 'Pipedrive / CRM', role: 'Gestão de Leads', tech: 'Atualização em Tempo Real' },
  { name: 'n8n', role: 'Orquestrador de Fluxos', tech: 'Lógica Multi-Agente' },
  { name: 'Gemini 3 Pro', role: 'Cérebro Cognitivo', tech: 'Processamento de Linguagem' }
];

const IntegrationMatrix: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {integrations.map((item, i) => (
        <div key={i} className="flex flex-col p-4 bg-slate-50 rounded-2xl border border-slate-100">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-tighter">{item.name}</span>
          <span className="text-sm font-semibold text-slate-800 mt-1">{item.role}</span>
          <span className="text-[10px] font-mono text-slate-400 mt-2 uppercase">{item.tech}</span>
        </div>
      ))}
    </div>
  );
};

export default IntegrationMatrix;
