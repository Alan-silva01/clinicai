
import React from 'react';

const LogicFlow: React.FC = () => {
  return (
    <div className="space-y-8">
      <p className="text-slate-600 text-sm">
        O sistema trabalha nos bastidores conectando o seu WhatsApp, seu banco e sua agenda.
      </p>

      <div className="relative border-l-2 border-slate-100 pl-8 ml-4 space-y-12">
        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
          <h5 className="font-bold text-slate-900">1. Triagem & Cortesia</h5>
          <p className="text-sm text-slate-500 mt-1">
            Se for a 1ª visita do paciente, a IA oferece a avaliação gratuita para fisgar o lead na hora.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
          <h5 className="font-bold text-slate-900">2. Reserva Financeira</h5>
          <p className="text-sm text-slate-600 mt-1">
            Cria o horário "Aguardando Pagamento" e envia o PIX. Se não pagar em 30min, o horário é liberado sozinho.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow-sm"></div>
          <h5 className="font-bold text-slate-900">3. Confirmação Total</h5>
          <p className="text-sm text-slate-600 mt-1">
            O dinheiro caiu? A IA muda a cor da agenda, confirma com o paciente e notifica sua equipe.
          </p>
        </div>

        <div className="relative">
          <div className="absolute -left-[41px] top-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white shadow-sm"></div>
          <h5 className="font-bold text-slate-900">4. Retenção Infinita</h5>
          <p className="text-sm text-slate-600 mt-1">
            A IA monitora o histórico e chama o paciente para manutenção a cada 6 meses, sem você precisar lembrar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LogicFlow;
