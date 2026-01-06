
import React, { useEffect } from 'react';

interface Props {
    onBack: () => void;
}

const PricingComparison: React.FC<Props> = ({ onBack }) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const humanCosts = [
        { label: 'Salário Bruto', value: 1412 },
        { label: 'Encargos (INSS/FGTS)', value: 590 },
        { label: 'Férias (Diluído)', value: 157 },
        { label: '13º Salário (Diluído)', value: 118 },
        { label: 'Auxílios (VT/Outros)', value: 150 },
    ];

    const totalHuman = 2427;
    const totalAI = 439.90;
    const monthlySavings = totalHuman - totalAI;

    const comparisonTable = [
        { human: 'Comercial (8h)', ai: '24/7 (Sempre Ativo)', label: 'Horário' },
        { human: 'Sim (Faltas/Atestados)', ai: 'Nunca', label: 'Faltas' },
        { human: 'Variável / Estresse', ai: 'Inexistente', label: 'Estresse' },
        { human: 'Constante / Lento', ai: 'Uma vez / Instantâneo', label: 'Treinamento' },
        { human: '1 Conversa por vez', ai: 'Centenas simultâneas', label: 'Escalabilidade' },
        { human: 'Humanos (Variabilidade)', ai: 'Padronizados', label: 'Erros' },
    ];

    return (
        <div className="min-h-screen bg-white text-slate-900 font-sans animate-in fade-in duration-700">
            {/* Top Nav/Back */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <button
                    onClick={onBack}
                    className="flex items-center space-x-3 text-slate-500 hover:text-blue-600 transition-all mb-12 group bg-slate-50 px-5 py-2 rounded-full border border-slate-100"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span className="font-bold text-xs uppercase tracking-widest">Voltar para Documentação</span>
                </button>

                {/* Hero Section */}
                <div className="text-center mb-24">
                    <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Viabilidade Financeira</span>
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight mb-8 leading-tight">
                        Humanos <span className="text-slate-400">vs</span> <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Inteligência Artificial</span>
                    </h1>
                    <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
                        Entenda por que delegar tarefas repetitivas para a IA não é apenas eficiência, é sobrevivência financeira.
                    </p>
                </div>

                {/* Human Cost Card - Detailed */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-32">
                    <div className="bg-slate-50 p-10 md:p-14 rounded-[3.5rem] border border-slate-100 shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200/50 rounded-full blur-3xl -mr-16 -mt-16"></div>

                        <div className="flex items-center space-x-4 mb-10">
                            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm">👤</div>
                            <h2 className="text-3xl font-black text-slate-900 italic">Custo Real: Funcionário</h2>
                        </div>

                        <div className="space-y-4 mb-10">
                            {humanCosts.map((item, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-200 last:border-0">
                                    <span className="text-slate-600 font-medium">{item.label}</span>
                                    <span className="text-slate-900 font-bold">R$ {item.value.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                                </div>
                            ))}
                        </div>

                        <div className="bg-white p-8 rounded-3xl border border-slate-200 flex justify-between items-center shadow-sm">
                            <span className="text-slate-500 font-bold uppercase tracking-widest text-sm">Custo Mensal Total</span>
                            <span className="text-4xl font-black text-slate-900">R$ {totalHuman.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                        </div>

                        <p className="text-xs text-slate-400 mt-6 italic text-center uppercase tracking-tighter">
                            * Baseado no salário mínimo 2025. Não inclui treinamento, faltas, estresse e infraestrutura física.
                        </p>
                    </div>

                    <div className="space-y-12 py-8">
                        <div className="space-y-4">
                            <h3 className="text-2xl font-black text-slate-900">🚨 Custos que ninguém coloca no papel</h3>
                            <p className="text-slate-500 leading-relaxed">
                                Um funcionário não é apenas o custo financeiro. É gestão, é psicológico e é limitação de escala.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {[
                                { t: "Treinamento Constante", d: "Se o funcionário sai, todo o conhecimento da clínica sai com ele." },
                                { t: "Indisponibilidade", d: "Não atende à noite, final de semana ou feriado. Leads perdidos." },
                                { t: "Erros Humanos", d: "Esquecimento de follow-up, erros no CRM e falhas no agendamento." },
                                { t: "Dificuldade de Escala", d: "1 pessoa = 1 conversa. Se 10 clientes chamarem ao mesmo tempo, 9 esperam." }
                            ].map((item, i) => (
                                <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm">
                                    <h4 className="font-bold text-slate-900 mb-2">{item.t}</h4>
                                    <p className="text-sm text-slate-500">{item.d}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Comparison Result / ROI */}
                <div className="bg-blue-600 rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden mb-32 shadow-2xl shadow-blue-500/30">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px] -mr-48 -mt-48"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] -ml-32 -mb-32"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-black mb-16 leading-tight italic">
                            "Um agendamento humano custa em média R$ 15,00. Com IA, você passa a falar em centavos."
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
                            <div className="flex flex-col items-center">
                                <span className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-4">Economia Mensal</span>
                                <span className="text-5xl md:text-7xl font-black text-center">R$ {monthlySavings.toLocaleString('pt-BR', { minimumFractionDigits: 0 })}</span>
                            </div>
                            <div className="h-px w-24 md:w-px md:h-24 bg-blue-400 mx-auto"></div>
                            <div className="flex flex-col items-center">
                                <span className="text-blue-100 font-bold uppercase tracking-widest text-xs mb-4 text-center">Custo por Agendamento</span>
                                <span className="text-6xl md:text-8xl font-black bg-gradient-to-b from-white to-blue-200 bg-clip-text text-transparent">
                                    R$ 0,44
                                </span>
                            </div>
                        </div>

                        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 relative z-10">
                            <div className="bg-white/10 px-8 py-3 rounded-full text-blue-50 font-bold border border-white/10 flex items-center">
                                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse mr-3"></span>
                                <span>Redução drástica no custo de atendimento</span>
                            </div>
                            <div className="bg-white/10 px-8 py-3 rounded-full text-blue-50 font-bold border border-white/10">
                                <span>Cenário: 1.000 conversas completas/mês</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Implementation and Customization */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32 items-stretch">
                    <div className="bg-slate-50 p-12 rounded-[3.5rem] border border-slate-100 flex flex-col justify-center">
                        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Implementação</span>
                        <h3 className="text-3xl font-black mb-6 italic text-slate-800">Projeto & Entrega</h3>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                            O valor de implementação é em média **R$ 4.000,00**, mas como cada sistema é algo 100% personalizado e adaptado à sua clínica, este valor pode variar conforme o combinado durante nossa apresentação técnica.
                        </p>
                        <div className="flex items-center space-x-3 text-blue-600 font-bold">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Configuração total inclusiva.</span>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-12 rounded-[3.5rem] border border-blue-100 flex flex-col justify-center">
                        <span className="text-blue-600 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Custos Mensais</span>
                        <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight italic">Manutenção Direta</h3>
                        <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
                            Os custos das plataformas (VPS, LLM e CRM) ficam sob responsabilidade do cliente. A média mensal varia entre **R$ 400 e R$ 600**, dependendo do volume real de uso.
                        </p>
                        <div className="bg-white/50 p-6 rounded-2xl border border-blue-200 italic text-sm text-blue-800 leading-relaxed shadow-sm">
                            O cálculo de 1.000 conversas engloba todo o ciclo: do primeiro 'oi' ao agendamento, explicações de procedimentos, lembretes e follow-ups.
                        </div>
                    </div>
                </div>

                {/* Detailed Comparison Table */}
                <div className="mb-32">
                    <h2 className="text-4xl font-black text-center mb-16">Eficiência em Cada Detalhe</h2>
                    <div className="bg-white rounded-[3rem] border border-slate-100 shadow-xl overflow-hidden">
                        <div className="grid grid-cols-12 bg-slate-50 border-b border-slate-100">
                            <div className="col-span-4 p-8 text-xs font-black uppercase tracking-widest text-slate-400">Atributo</div>
                            <div className="col-span-4 p-8 text-xs font-black uppercase tracking-widest text-slate-400 text-center">Funcionário</div>
                            <div className="col-span-4 p-8 text-xs font-black uppercase tracking-widest text-blue-600 text-center">IA ClinicAI</div>
                        </div>
                        {comparisonTable.map((row, i) => (
                            <div key={i} className="grid grid-cols-12 border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                                <div className="col-span-4 p-8 font-black text-slate-900 border-r border-slate-50">{row.label}</div>
                                <div className="col-span-4 p-8 text-center text-slate-500 border-r border-slate-50 font-medium">{row.human}</div>
                                <div className="col-span-4 p-8 text-center text-blue-600 font-black flex items-center justify-center space-x-2">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                                    <span>{row.ai}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Selling Phrases / Strong Points */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-12 rounded-[3.5rem] text-white">
                        <h3 className="text-3xl font-black mb-10 text-blue-400">Pontos Fortes</h3>
                        <div className="space-y-6">
                            {[
                                "A IA não pede demissão e nem leva seu histórico embora.",
                                "Não existe mau humor ou fadiga no atendimento digital.",
                                "Escalabilidade infinita: Atenda 1 ou 100 ao mesmo tempo.",
                                "Processos 100% padronizados de acordo com seu script.",
                                "Atendimento ativo e focado em fechar o lead na hora."
                            ].map((text, i) => (
                                <div key={i} className="flex space-x-4 italic text-lg leading-relaxed">
                                    <span className="text-blue-500 font-black">"</span>
                                    <p>{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="bg-blue-50 p-12 rounded-[3.5rem] flex flex-col justify-center border border-blue-100">
                        <h3 className="text-3xl font-black mb-6 text-slate-900 leading-tight">Preparado para escalar sem aumentar o headcount?</h3>
                        <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">
                            A tecnologia não substitui o acolhimento humano da recepção, ela liberta seus funcionários para que foquem em quem já está dentro da clínica.
                        </p>
                        <button
                            onClick={onBack}
                            className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-xl shadow-blue-500/20 active:scale-95 inline-flex items-center space-x-3 w-fit"
                        >
                            Finalizar Revisão
                        </button>
                    </div>
                </div>

                {/* AI Cost Detail - The Breakdown */}
                <div className="mb-32 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white">
                    <div className="text-center mb-16">
                        <span className="text-blue-400 font-black text-xs uppercase tracking-[0.3em] mb-4 block">Transparência Técnica</span>
                        <h2 className="text-4xl font-black italic">Como chegamos nos R$ 439,90/mês?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-4">1. Infra VPS</h4>
                            <p className="text-slate-400 text-sm mb-6 text-balance">Ubuntu 22.04 + Easypanel (2 vCPU / 4GB RAM)</p>
                            <div className="text-3xl font-black text-blue-400">R$ 150,00</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-4">2. IA (LLM)</h4>
                            <p className="text-slate-400 text-sm mb-6 text-balance">Estimativa para 1.000 conversas completas</p>
                            <div className="text-3xl font-black text-blue-400">R$ 200,00</div>
                        </div>
                        <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                            <h4 className="text-xl font-bold mb-4">3. CRM</h4>
                            <p className="text-slate-400 text-sm mb-6 text-balance">Gestão de leads e multicanalidade</p>
                            <div className="text-3xl font-black text-blue-400">R$ 89,90</div>
                        </div>
                    </div>
                    <div className="mt-16 pt-12 border-t border-white/10 text-center">
                        <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed italic">
                            * Isso gera uma margem absurda para o seu negócio. Enquanto o atendimento humano consome seu lucro, a IA protege sua escala.
                        </p>
                    </div>
                </div>

                {/* Bottom Note */}
                <div className="text-center py-12">
                    <p className="text-slate-400 text-sm font-medium italic mb-6">
                        * VPS + LLM + CRM = R$ 439,90/mês. Custo variável baixo para escala infinita.
                    </p>
                    <p className="text-slate-400/60 text-[10px] max-w-2xl mx-auto uppercase tracking-widest leading-relaxed">
                        Estes preços são estimativas baseadas em valores de 2026 e podem variar conforme o desejo do cliente, personalizações específicas e alterações nos custos das plataformas terceiras utilizadas (IA, VPS e CRM).
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingComparison;
