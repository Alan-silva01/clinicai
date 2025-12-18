
import React from 'react';

const AgentIdentity: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="font-bold text-slate-800 mb-2">Tom de Voz</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Profissionalismo clínico. O agente não utiliza gírias, emojis ou exclamações excessivas. 
            A comunicação é direta, empática e focada na resolução do problema do paciente.
          </p>
        </div>
        <div>
          <h4 className="font-bold text-slate-800 mb-2">Tempo de Resposta</h4>
          <p className="text-slate-600 text-sm leading-relaxed">
            Simulação de digitação humana (2 a 5 segundos por bloco de texto), evitando a percepção de resposta instantânea de bot.
          </p>
        </div>
      </div>

      <div className="bg-slate-50 p-4 rounded-xl">
        <h4 className="text-xs font-bold text-slate-400 uppercase mb-3">Diretrizes Inegociáveis</h4>
        <ul className="grid grid-cols-2 gap-3">
          {["Zero Emojis", "Linguagem Natural", "Foco em Agendamento", "Triagem Ativa", "Confirmação de PIX", "Multi-Turno 24/7"].map((item, i) => (
            <li key={i} className="flex items-center text-sm text-slate-700">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AgentIdentity;
